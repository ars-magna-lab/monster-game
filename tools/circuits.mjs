// Captura y carrera simulada de cada circuito. Uso: node tools/circuits.mjs [id...]
// Con --medir [--vueltas N] [--carreras N] [--dif facil,normal,dificil] no hace capturas y saca
// estadísticas de la IA (golpes, caídas, reapariciones), de objetos y de puestos.
// --camion N elige el camión del humano simulado (0..5; por defecto el de los ajustes).
import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : def; };
const medir = argv.includes('--medir');
const laps = +opt('--vueltas', medir ? 3 : 1);
const races = +opt('--carreras', 1);
const diffs = opt('--dif', medir ? 'facil,normal,dificil' : '').split(',').filter(Boolean);
const truck = opt('--camion', null);
const valued = new Set(['--vueltas', '--carreras', '--dif', '--camion']);
const ids = argv.filter((a, i) => !a.startsWith('--') && !valued.has(argv[i - 1]));
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 3600000, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 720 });
const errors = [];
p.on('pageerror', (e) => errors.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await p.goto('file://' + resolve('index.html'));
await p.waitForFunction(() => window.__mm);
const list = ids.length ? ids : await p.evaluate(() => [...document.querySelectorAll('[data-circuit]')].map((b) => b.dataset.circuit));

// Corre una carrera con piloto automático y cuenta lo que le pasa a cada camión
const runRace = (args) => window.__mmRace(args);
await p.evaluate(() => {
  window.__mmRace = ({ id, laps, diff, truck }) => {
    const g = window.__mm;
    g.settings.circuit = id; g.loadCircuit(id);
    if (diff) g.settings.diff = diff;
    if (truck !== null && truck !== undefined) g.settings.truck = +truck;
    g.settings.laps = laps; g.autopilot = true; g.startRace(); g.countdown = 0.01;
    const KINDS = ['log', 'ball', 'boom', 'net', 'fallPit', 'fallWater', 'tired', 'barreled', 'rocketed', 'waved', 'meteor', 'car',
      'scrape', 'wall', 'driftBoost', 'crushTruck', 'crushed', 'giant'];
    const per = new Map(g.vehicles.map((v) => [v, { stuck: 0, wrong: 0, ...Object.fromEntries(KINDS.map((k) => [k, 0])) }]));
    const items = { launch: { tire: 0, barrel: 0, rocket: 0 }, hit: { tire: 0, barrel: 0, rocket: 0 }, selfBarrel: 0, rocketDodged: 0, rocketNoTarget: 0, rolls: [] };
    // eventos: se cuentan antes de que handleEvents vacíe la lista
    const origHandle = Object.getPrototypeOf(g).handleEvents;
    g.handleEvents = function () {
      for (const v of this.vehicles) for (const e of v.events) if (e.type in per.get(v)) per.get(v)[e.type]++;
      return origHandle.call(this);
    };
    // reapariciones fuera de las caídas: por atasco o por dirección contraria
    for (const v of g.vehicles) {
      v.respawn = function (...a) {
        if (this.state === 'ok') per.get(this)[this.wrongT > 4 ? 'wrong' : 'stuck']++;
        return Object.getPrototypeOf(this).respawn.apply(this, a);
      };
    }
    const origRoll = Object.getPrototypeOf(g).rollItem;
    g.rollItem = function (v) { const it = origRoll.call(this, v); if (!v.isPlayer) items.rolls.push([v.place, it]); return it; };
    const P = g.projectiles;
    const origLaunch = Object.getPrototypeOf(P).launch;
    P.launch = function (kind, v) {
      origLaunch.call(this, kind, v);
      items.launch[kind]++;
      const pr = this.list[this.list.length - 1];
      if (kind === 'rocket' && !pr.target) items.rocketNoTarget++;
    };
    const origExplode = Object.getPrototypeOf(P).explode;
    P.explode = function (pr, victim) {
      const before = new Map(g.vehicles.map((v) => [v, v.events.length]));
      origExplode.call(this, pr, victim);
      let others = 0;
      for (const v of g.vehicles) {
        const got = v.events.slice(before.get(v)).some((e) => e.type === 'barreled' || e.type === 'rocketed');
        if (!got) continue;
        if (v === pr.owner) items.selfBarrel += pr.kind === 'barrel' ? 1 : 0; else others++;
      }
      if (others) items.hit[pr.kind]++;
      if (pr.kind === 'rocket' && victim === pr.target && !others && victim.invuln > 0) items.rocketDodged++;
    };
    const maxT = laps * 140;
    let t = 0;
    while (t < maxT && !g.vehicles.every((v) => v.finished)) { g.simulate(5); t += 5; }
    items.hit.tire = [...per.values()].reduce((a, c) => a + c.tired, 0);
    const finish = [...g.vehicles].sort((a, b) => (a.finished && b.finished ? a.finishPlace - b.finishPlace : a.finished ? -1 : b.finished ? 1 : b.progress - a.progress));
    return {
      id, diff: g.settings.diff, L: Math.round(g.track.length),
      trucks: g.vehicles.map((v) => ({ name: v.def.name, size: v.size, ai: !v.isPlayer, finished: v.finished, time: v.finished ? +v.finishTime.toFixed(1) : null, laps: v.lapTimes.map((x) => +x.toFixed(1)), place: finish.indexOf(v) + 1, s: Math.round(v.s), c: per.get(v) })),
      items,
    };
  };
});

if (!medir) {
  for (const id of list) {
    const r = await p.evaluate(runRace, { id, laps, diff: diffs[0], truck });
    const ai = r.trucks.filter((t) => t.ai);
    const sum = (k) => ai.reduce((a, t) => a + t.c[k], 0);
    const out = { id, L: r.L, res: r.trucks.map((t) => (t.finished ? t.time : 'NO ' + t.s)), ia: Object.fromEntries(['log', 'ball', 'boom', 'net', 'fallPit', 'fallWater', 'meteor', 'car', 'stuck', 'wrong'].map((k) => [k, sum(k)])) };
    await p.evaluate(() => { const g = window.__mm; g.startRace(); g.countdown = 0.01; g.simulate(9); });
    await new Promise((res) => setTimeout(res, 7000));
    await p.screenshot({ path: `shots/40-${id}.png` });
    console.log(JSON.stringify(out));
  }
} else {
  const all = [];
  for (const diff of diffs) {
    for (const id of list) {
      for (let k = 0; k < races; k++) {
        const r = await p.evaluate(runRace, { id, laps, diff, truck });
        all.push(r);
        console.error(`${diff} ${id} #${k + 1}: ${r.trucks.map((t) => (t.finished ? t.time : 'NO')).join(' ')}`);
      }
    }
  }
  const f = (x) => x.toFixed(2);
  // tabla 1: lo que le pasa a la IA, por camión y vuelta
  // scrape: roce fuerte con la barrera; wall: choque con un borde de foso o de rampa
  const COLS = ['log', 'ball', 'boom', 'net', 'fallPit', 'fallWater', 'meteor', 'car', 'stuck', 'wrong', 'scrape', 'wall'];
  console.log('\n## IA: sucesos por camión y vuelta (vuelta media en s)');
  console.log(['dif', 'circuito', 'n', ...COLS, 'vuelta', 'sin acabar'].join('\t'));
  for (const diff of diffs) {
    for (const id of list) {
      const rs = all.filter((r) => r.diff === diff && r.id === id);
      const ai = rs.flatMap((r) => r.trucks.filter((t) => t.ai));
      const n = ai.length * laps;
      const lapsAll = ai.flatMap((t) => t.laps);
      const avgLap = lapsAll.reduce((a, b) => a + b, 0) / (lapsAll.length || 1);
      console.log([diff, id, n, ...COLS.map((k) => f(ai.reduce((a, t) => a + t.c[k], 0) / n)), avgLap.toFixed(1), ai.filter((t) => !t.finished).length].join('\t'));
    }
  }
  // tabla 1b: sucesos nuevos por camión (turbos de derrape, chafar, ser chafado, modo gigante)
  const NEW = ['driftBoost', 'crushTruck', 'crushed', 'giant'];
  console.log('\n## Sucesos por camión y vuelta (driftBoost: turbos de derrape; crushTruck: chafa a otro; crushed: le chafan)');
  console.log(['dif', 'camión', 'tamaño', 'n', ...NEW].join('\t'));
  for (const diff of diffs) {
    const rs = all.filter((r) => r.diff === diff);
    const names = [...new Set(rs.flatMap((r) => r.trucks.map((t) => t.name)))];
    for (const nm of names) {
      const ts = rs.map((r) => r.trucks.find((t) => t.name === nm));
      const n = ts.length * laps;
      console.log([diff, nm + (ts.some((t) => !t.ai) ? ' [humano auto]' : ''), ts[0].size, n, ...NEW.map((k) => f(ts.reduce((a, t) => a + t.c[k], 0) / n))].join('\t'));
    }
    const ai = rs.flatMap((r) => r.trucks.filter((t) => t.ai));
    console.log([diff, 'IA (todos)', '-', ai.length * laps, ...NEW.map((k) => f(ai.reduce((a, t) => a + t.c[k], 0) / (ai.length * laps)))].join('\t'));
  }
  // tabla 2: reparto de objetos por puesto
  const KIND = ['nitro', 'jump', 'wave', 'tire', 'barrel', 'rocket', 'giant'];
  console.log('\n## Objetos de la IA por puesto (% de cada puesto)');
  console.log(['puesto', 'n', ...KIND].join('\t'));
  const rolls = all.flatMap((r) => r.items.rolls);
  for (let pl = 1; pl <= 6; pl++) {
    const rr = rolls.filter((x) => x[0] === pl);
    console.log([pl, rr.length, ...KIND.map((k) => ((100 * rr.filter((x) => x[1] === k).length) / (rr.length || 1)).toFixed(0))].join('\t'));
  }
  // tabla 3: aciertos
  const tot = (path) => all.reduce((a, r) => a + path(r.items), 0);
  console.log('\n## Lanzamientos y aciertos (todas las carreras)');
  for (const k of ['tire', 'barrel', 'rocket']) {
    const L = tot((i) => i.launch[k]), H = tot((i) => i.hit[k]);
    console.log(`${k}\tlanzados ${L}\taciertan ${H}\t${((100 * H) / (L || 1)).toFixed(0)} %`);
  }
  console.log(`barriles que dañan a su dueño: ${tot((i) => i.selfBarrel)}; cohetes sin objetivo: ${tot((i) => i.rocketNoTarget)}; cohetes que alcanzan a su objetivo invulnerable (esquivados): ${tot((i) => i.rocketDodged)}`);
  // tabla 4: puestos finales por camión y dificultad
  console.log('\n## Puesto final medio por camión (y veces 1.º / 6.º)');
  const names = [...new Set(all.flatMap((r) => r.trucks.map((t) => t.name)))];
  console.log(['camión', ...diffs].join('\t'));
  for (const nm of names) {
    const cells = diffs.map((diff) => {
      const ts = all.filter((r) => r.diff === diff).map((r) => r.trucks.find((t) => t.name === nm));
      const avg = ts.reduce((a, t) => a + t.place, 0) / ts.length;
      return `${avg.toFixed(1)} (${ts.filter((t) => t.place === 1).length}/${ts.filter((t) => t.place === 6).length})${ts[0].ai ? '' : ' [humano auto]'}`;
    });
    console.log([nm, ...cells].join('\t'));
  }
}
console.log(errors.length ? 'ERRORES: ' + [...new Set(errors)].join(' | ') : 'Sin errores');
await b.close();
