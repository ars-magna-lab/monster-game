// Prueba del derrape con turbo (R1 / RB o Mayús). Sin dibujar: el bucle y el dibujo se anulan y la
// simulación se avanza a mano con g.step y controles guionizados.
// Uso: node tools/derrape.mjs
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--window-size=800,600'],
});
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 600 });
page.setDefaultTimeout(300000);
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 120000 });

await page.evaluate(() => {
  const g = window.__mm;
  g.loop = () => {};
  g.render = () => {};
  const pad = { index: 0, connected: true, timestamp: 0, buttons: [...Array(17)].map(() => ({ pressed: false, value: 0 })), axes: [0, 0, 0, 0] };
  window.__pad = pad;
  Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => [window.__padOn ? { ...pad, timestamp: performance.now() } : null] });
  const STEP = 1 / 120;
  // Carrera de un jugador en «clasico»; los demás camiones, quietos y lejos
  window.__race = () => {
    g.input.keys.clear();
    g.settings.mode = 1; g.settings.truck = 0; g.settings.laps = 3; g.settings.circuit = 'clasico';
    g.loadCircuit('clasico');
    if (window.__all) g.vehicles = window.__all;
    window.__all = g.vehicles;
    g.autopilot = false;
    g.startRace();
    g.countdown = 0.01; g.frame(1 / 60);
    const p = g.player;
    g.vehicles = [p];
    return g.state;
  };
  // pone al jugador a una fracción de la velocidad punta en un tramo recto
  window.__prep = (frac, s = 60) => {
    const p = g.player;
    p.placeAt(s, 0, p.maxSpeed * frac);
    window.__keep = s;
    p.boost = 0; p.stun = 0; p.stall = 0; p.hitCool = 0; p.invuln = 0; p.blink = 0; p.events.length = 0;
    p.drift = null;
  };
  // avanza secs con el control dado; devuelve los sucesos de derrape
  window.__run = (secs, ctrl) => {
    const p = g.player, evs = [];
    const n = Math.round(secs / STEP);
    for (let i = 0; i < n; i++) {
      g.step(STEP, [{ steer: 0, throttle: 0, brake: 0, item: false, drift: false, ...ctrl }]);
      for (const e of p.events) if (e.type.startsWith('drift')) evs.push(e.type + (e.level ? e.level : ''));
      p.events.length = 0;
      // la pista no es tan ancha como un círculo derrapando: se devuelve al camión al centro del
      // mismo tramo recto sin tocar su rumbo, su velocidad ni su derrape
      if (window.__keep && Math.abs(p.d) > 5) {
        const { th, vx, vz, drift, driftYaw, boost } = p;
        p.placeAt(window.__keep, 0, 0);
        Object.assign(p, { th, vx, vz, drift, driftYaw, boost });
      }
    }
    return evs;
  };
});
const ev = (fn, ...a) => page.evaluate(fn, ...a);
const r = {}, check = {};
r.estado = await ev(() => window.__race());

// 1 y 2: girar derrapando T segundos (stick a favor) y soltar
const charge = (T) => ev((T) => {
  const p = window.__mm.player;
  window.__prep(0.8);
  window.__run(0.3, { throttle: 1 });
  const evs = [], traza = [];
  for (let k = 0; k < Math.round(T / 0.25); k++) {
    evs.push(...window.__run(0.25, { throttle: 1, steer: 1, drift: true }));
    traza.push(`${(p.vF / p.maxSpeed).toFixed(2)}/${p.d.toFixed(1)}/${p.drift ? p.drift.level : '-'}`);
  }
  const nivel = p.drift ? p.drift.level : -1;
  evs.push(...window.__run(1 / 120, { throttle: 1, steer: 0, drift: false }));
  return { nivel, turbo: +p.boost.toFixed(3), sucesos: evs.join(' '), traza: traza.join(' ') };
}, T);
r.t0_5 = await charge(0.5);
r.t1 = await charge(1);
r.t2 = await charge(2);
r.t3_2 = await charge(3.2);
check.niveles = Math.abs(r.t1.turbo - 0.7) < 0.03 && Math.abs(r.t2.turbo - 1.2) < 0.03 && Math.abs(r.t3_2.turbo - 1.9) < 0.03;
check.sinNivel = r.t0_5.turbo === 0 && !/driftBoost/.test(r.t0_5.sucesos);

// 3: un golpe con aturdimiento cancela sin turbo; frenar también
r.golpe = await ev(() => {
  const p = window.__mm.player;
  window.__prep(0.8);
  window.__run(0.3, { throttle: 1 });
  window.__run(1.5, { throttle: 1, steer: 1, drift: true });
  const antes = p.drift ? p.drift.level : -1;
  const pego = p.hit({ stun: 1, speedMul: 0.6 });
  const tras = !!p.drift;
  window.__run(0.3, { throttle: 1, steer: 1, drift: true });
  const evs = window.__run(1 / 120, { throttle: 1, drift: false });
  return { antes, pego, derrapaTras: tras, turbo: p.boost, sucesos: evs.join(' ') };
});
r.freno = await ev(() => {
  const p = window.__mm.player;
  window.__prep(0.8);
  window.__run(0.3, { throttle: 1 });
  window.__run(1.5, { throttle: 1, steer: 1, drift: true });
  const antes = p.drift ? p.drift.level : -1;
  window.__run(0.1, { brake: 1, steer: 1, drift: true });
  const tras = !!p.drift;
  window.__run(1 / 120, { throttle: 1, drift: false });
  return { antes, derrapaTras: tras, turbo: p.boost };
});
check.golpe = r.golpe.antes >= 1 && r.golpe.pego && !r.golpe.derrapaTras && r.golpe.turbo === 0;
check.freno = r.freno.antes >= 1 && !r.freno.derrapaTras && r.freno.turbo === 0;

// 4: con el stick en contra sigue girando hacia el lado fijado, más abierto que a favor
const turn = (steer, drift) => ev(([steer, drift]) => {
  const p = window.__mm.player;
  window.__prep(0.8);
  window.__run(0.3, { throttle: 1 });
  window.__run(1 / 120, { throttle: 1, steer: 1, drift }); // fija el lado: derecha
  const th0 = p.th;
  let th = 0, prev = p.th;
  for (let i = 0; i < 96; i++) { window.__run(1 / 120, { throttle: 1, steer, drift }); let d = p.th - prev; d = Math.atan2(Math.sin(d), Math.cos(d)); th += d; prev = p.th; }
  return { giro: +th.toFixed(3), derrapa: !!p.drift, lado: p.drift?.side ?? 0, th0: +th0.toFixed(2) };
}, [steer, drift]);
r.contra = await turn(-1, true);
r.suelto = await turn(0, true);
r.favor = await turn(1, true);
r.normal = await turn(1, false);
check.direccion = r.contra.derrapa && r.contra.giro > 0.05 && r.contra.giro < r.suelto.giro && r.suelto.giro < r.favor.giro && r.favor.giro > r.normal.giro;

// 5: por debajo del 45 % no empieza; armado sin girar, empieza al girar
r.lento = await ev(() => {
  const p = window.__mm.player;
  window.__prep(0.4);
  const evs = window.__run(0.25, { throttle: 0, steer: 1, drift: true });
  return { derrapa: !!p.drift, sucesos: evs.join(' '), vel: +(p.vF / p.maxSpeed).toFixed(2) };
});
r.armado = await ev(() => {
  const p = window.__mm.player;
  window.__prep(0.8);
  window.__run(0.3, { throttle: 1, drift: true });
  const recto = !!p.drift;
  window.__run(0.05, { throttle: 1, drift: true, steer: -1 });
  return { recto, alGirar: !!p.drift, lado: p.drift?.side };
});
check.lento = !r.lento.derrapa && r.lento.sucesos === '';
check.armado = !r.armado.recto && r.armado.alGirar && r.armado.lado === -1;

// 6: mando (RB derrapa y no usa el objeto; X y LB sí) y teclado (Mayús derrapa)
r.mando = await ev(() => {
  const g = window.__mm, inp = g.input;
  window.__padOn = true;
  const press = (i) => { window.__pad.buttons[i] = { pressed: true, value: 1 }; inp.padEdges(); const d = inp.drive('solo'); window.__pad.buttons[i] = { pressed: false, value: 0 }; inp.endFrame(); inp.padEdges(); inp.endFrame(); return d; };
  const rb = press(5), x = press(2), lb = press(4);
  // y dentro de la partida: RB mantenido con un nitro en la mano no lo gasta
  const p = g.player;
  window.__prep(0.8); p.item = 'nitro'; p.itemRoll = 0;
  window.__pad.buttons[5] = { pressed: true, value: 1 };
  for (let i = 0; i < 10; i++) g.frame(1 / 60);
  window.__pad.buttons[5] = { pressed: false, value: 0 };
  g.frame(1 / 60);
  const conserva = p.item === 'nitro';
  window.__pad.buttons[2] = { pressed: true, value: 1 }; g.frame(1 / 60);
  window.__pad.buttons[2] = { pressed: false, value: 0 }; g.frame(1 / 60);
  window.__padOn = false; inp.padEdges(); inp.endFrame();
  return { rb: [rb.drift, rb.item], x: [x.drift, x.item], lb: [lb.drift, lb.item], rbConservaNitro: conserva, xGasta: p.item === null };
});
r.teclado = await ev(() => {
  const inp = window.__mm.input;
  const key = (code, who) => { inp.keys.add(code); inp.edges.add(code); const d = inp.drive(who); inp.keys.delete(code); inp.endFrame(); return [d.drift, d.item]; };
  return {
    soloShiftL: key('ShiftLeft', 'solo'), soloShiftR: key('ShiftRight', 'solo'), soloEspacio: key('Space', 'solo'), soloE: key('KeyE', 'solo'),
    p1ShiftL: key('ShiftLeft', 'p1'), p1ShiftR: key('ShiftRight', 'p1'), p1Q: key('KeyQ', 'p1'),
    p2ShiftR: key('ShiftRight', 'p2'), p2ShiftL: key('ShiftLeft', 'p2'), p2Intro: key('Enter', 'p2'), p2Ctrl: key('ControlRight', 'p2'), p2Num0: key('Numpad0', 'p2'),
  };
});
{
  const m = r.mando, k = r.teclado, eq = (a, b) => a[0] === b[0] && a[1] === b[1];
  check.mando = eq(m.rb, [true, false]) && eq(m.x, [false, true]) && eq(m.lb, [false, true]) && m.rbConservaNitro && m.xGasta;
  check.teclado = eq(k.soloShiftL, [true, false]) && eq(k.soloShiftR, [true, false]) && eq(k.soloEspacio, [false, true]) && eq(k.soloE, [false, true]) &&
    eq(k.p1ShiftL, [true, false]) && eq(k.p1ShiftR, [false, false]) && eq(k.p1Q, [false, true]) &&
    eq(k.p2ShiftR, [true, false]) && eq(k.p2ShiftL, [false, false]) && eq(k.p2Intro, [false, true]) && eq(k.p2Ctrl, [false, true]) && eq(k.p2Num0, [false, true]);
}

// 7: clasico, 3 vueltas con el piloto automático, sin y con derrape en las curvas
const lapRun = (drift) => ev((drift) => {
  const g = window.__mm;
  window.__keep = 0;
  window.__race();
  const p = g.player;
  g.autopilot = true;
  const drv = g.drivers.get(p);
  const orig = drv.control.bind(drv);
  let hold = false, side = 0, out = 0, drifts = 0, boosts = [0, 0, 0, 0], driftT = 0;
  drv.control = (dt, game) => {
    const c = orig(dt, game);
    if (!drift) return c;
    // derrapa en las curvas cerradas y suelta cuando la curva se acaba o pide girar al otro lado
    if (!hold) { if (Math.abs(c.steer) > 0.5 && p.vF > p.maxSpeed * 0.6) { hold = true; side = Math.sign(c.steer); out = 0; } }
    else { out = c.steer * side < -0.3 ? out + dt : 0; if (out > 0.1) hold = false; }
    if (p.drift) driftT += dt;
    return { ...c, drift: hold };
  };
  let scrape = 0, wall = 0, falls = 0, t = 0;
  while (!p.finished && t < 400) {
    g.step(1 / 120, []);
    t += 1 / 120;
    for (const e of p.events) {
      if (e.type === 'scrape') scrape++;
      else if (e.type === 'wall') wall++;
      else if (e.type === 'fallPit' || e.type === 'fallWater') falls++;
      else if (e.type === 'driftStart') drifts++;
      else if (e.type === 'driftBoost') boosts[e.level]++;
    }
    p.events.length = 0;
  }
  drv.control = orig;
  g.autopilot = false;
  return { vueltas: p.lapTimes.map((x) => +x.toFixed(2)), total: +p.finishTime.toFixed(2), roces: scrape, paredes: wall, caidas: falls, derrapes: drifts, turbos: boosts.slice(1).join('/'), tDerrape: +driftT.toFixed(1) };
}, drift);
// tres carreras de cada (las vueltas cambian bastante por los troncos, las bolas y la salida)
const runs = { sin: [], con: [] };
for (let i = 0; i < 3; i++) { runs.sin.push(await lapRun(false)); runs.con.push(await lapRun(true)); }
r.vueltas = runs;
{
  const sum = (a, k) => a.reduce((x, y) => x + y[k], 0);
  // la primera vuelta sale de parado: se comparan las vueltas 2 y 3
  const lanzadas = (a) => a.reduce((x, y) => x + y.vueltas[1] + y.vueltas[2], 0) / (2 * a.length);
  r.resumen = {
    rocesSin: sum(runs.sin, 'roces'), rocesCon: sum(runs.con, 'roces'), caidasSin: sum(runs.sin, 'caidas'), caidasCon: sum(runs.con, 'caidas'),
    vueltaLanzadaSin: +lanzadas(runs.sin).toFixed(2), vueltaLanzadaCon: +lanzadas(runs.con).toFixed(2),
    gananciaPorVuelta: +(lanzadas(runs.sin) - lanzadas(runs.con)).toFixed(2),
  };
  const z = r.resumen;
  check.curvas = z.rocesCon <= z.rocesSin * 1.15 + 2 && z.caidasCon <= z.caidasSin + 1;
}

console.log(JSON.stringify(r, null, 1));
console.log(JSON.stringify(check));
const ok = Object.values(check).every(Boolean) && !errors.length;
console.log(errors.length ? 'ERRORES:\n' + errors.join('\n') : 'Sin errores en consola');
console.log(ok ? 'Derrape: OK' : 'Derrape: FALLA');
await browser.close();
process.exit(ok ? 0 : 1);
