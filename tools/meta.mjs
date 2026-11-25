// Prueba de las copas de la meta (oro, plata y bronce). Sin dibujar: el bucle y el dibujo se
// anulan y la simulación se avanza a mano. Imprime «Meta: OK» o falla con código 1.
// Uso: node tools/meta.mjs [circuito]
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const circuit = process.argv[2] || 'clasico';
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--window-size=800,600'],
});
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 600 });
page.setDefaultTimeout(300000);
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 120000 });

const res = await page.evaluate((id) => {
  const g = window.__mm;
  g.loop = () => {};
  g.render = () => {};
  const fails = [];
  const log = [];
  const check = (ok, msg) => { if (!ok) fails.push(msg); };
  const cupsState = () => g.cups.cups.map((c) => c.state);
  const allNone = () => g.cups.cups.every((c) => c.state === 'none' && !c.mesh.visible && !c.holder) && g.cups.next === 0;
  // vuelta en curso del primero y metros recorridos de esa vuelta
  const leader = () => {
    let best = null, bp = -Infinity;
    for (const v of g.vehicles) {
      if (v.finished) continue;
      const p = v.lap * g.track.length + g.track.ahead(0, v.s) * (v.lap >= 1 ? 1 : 0);
      if (p > bp) { bp = p; best = v; }
    }
    return best;
  };
  const race = (laps, playerSlow) => {
    g.settings.mode = 1; g.settings.laps = laps; g.settings.circuit = id;
    g.loadCircuit(id);
    g.autopilot = true;
    g.startRace();
    g.countdown = 0.01;
    if (playerSlow) g.autopilot = false; // el jugador se queda en la parrilla: gana la IA
  };
  const STEP = 0.05;
  const run = (secs, stop) => {
    for (let t = 0; t < secs; t += STEP) { g.simulate(STEP); if (stop && stop()) return true; }
    return false;
  };

  // ---------- 1. Carrera de 2 vueltas: gana la IA
  race(2, true);
  check(allNone(), `al empezar ya hay copas: ${cupsState()}`);
  const L = g.track.length;
  let appearedAt = null;
  run(400, () => {
    if (g.cups.cups[0].state !== 'none') {
      const v = leader();
      appearedAt = { lap: v.lap, m: g.track.ahead(0, v.s) };
      return true;
    }
    return false;
  });
  check(appearedAt && appearedAt.lap === 2 && appearedAt.m >= L / 2 && appearedAt.m < L / 2 + 25,
    `la dorada aparece en ${JSON.stringify(appearedAt)} (se esperaba vuelta 2, a ${(L / 2).toFixed(0)} m)`);
  check(g.cups.cups[1].state === 'none' && g.cups.cups[2].state === 'none', 'plata o bronce antes de tiempo');
  // espera de pie en el suelo, a la altura de los camiones
  { const c = g.cups.cups[0]; g.simulate(0.6); const h = c.mesh.position.y - g.track.baseAt(0); check(h >= 0 && h < 1 && c.mesh.scale.x * 3 > 2.8 && c.mesh.scale.x * 3 < 3.8, `la dorada espera a ${h.toFixed(1)} m del suelo y mide ${(c.mesh.scale.x * 3).toFixed(1)} m`); }
  log.push(`dorada a la vista con el primero en la vuelta ${appearedAt?.lap}, a ${appearedAt?.m.toFixed(0)} m de ${L.toFixed(0)}`);
  // hasta que llegan cuatro
  const byPlace = [];
  const snaps = [];
  run(400, () => {
    for (const v of g.vehicles) {
      if (v.finished && !byPlace.includes(v)) { byPlace.push(v); snaps.push({ place: v.finishPlace, states: cupsState(), holders: g.cups.cups.map((c) => c.holder) }); }
    }
    return byPlace.length >= 4;
  });
  byPlace.sort((a, b) => a.finishPlace - b.finishPlace);
  check(byPlace.length >= 4, `solo llegan ${byPlace.length}`);
  const [c0, c1, c2] = g.cups.cups;
  check(c0.holder === byPlace[0], 'la dorada no es del primero');
  check(!byPlace[0].isPlayer, 'tenía que ganar la IA');
  check(c1.holder === byPlace[1], 'la de plata no es del segundo');
  check(c2.holder === byPlace[2], 'la de bronce no es del tercero');
  check(g.cups.next === 3 && !g.cups.cups.some((c) => c.holder === byPlace[3]), 'el cuarto se ha llevado algo');
  // justo al llegar el primero ya espera la de plata (y la de bronce aún no)
  const s1 = snaps.find((x) => x.place === 1);
  check(s1 && s1.states[0] === 'flying' && s1.states[1] === 'waiting' && s1.states[2] === 'none', `al llegar el primero: ${s1 && s1.states}`);
  const s2 = snaps.find((x) => x.place === 2);
  check(s2 && s2.states[1] === 'flying' && s2.states[2] === 'waiting', `al llegar el segundo: ${s2 && s2.states}`);
  // un rato después: las tres encima de sus camiones, a la vista
  // la dorada, al cogerla: salta a la rueda en ~0,35 s y el camión hace el caballito
  { const c = g.cups.cups[0], v = c.holder; const tmp = new c.mesh.position.constructor();
    run(5, () => c.state === 'held' && c.t > 0.9);
    check(c.state === 'held' && v.wheelieK > 0.6, `sin caballito con la dorada (${c.state}, ${v.wheelieK.toFixed(2)})`);
    check(c.mesh.position.distanceTo(g.cups.wheelPos(v, c.side, tmp)) < 0.3, 'la dorada no está sobre la rueda delantera'); }
  run(2);
  for (const c of g.cups.cups) {
    check(c.state === 'held', `la copa ${c.T.name} no está encima del camión (${c.state})`);
    const v = c.holder;
    if (v) {
      const d = Math.hypot(c.mesh.position.x - v.x, c.mesh.position.z - v.z);
      check(d > 1.5 && d < 4.5 * v.size && c.mesh.position.y > v.y + 1.5, `la copa ${c.T.name} no va en la rueda de su camión (a ${d.toFixed(1)} m)`);
    }
  }
  log.push(`2 vueltas: oro ${byPlace[0].def.name} (IA), plata ${byPlace[1].def.name}, bronce ${byPlace[2].def.name}; el cuarto (${byPlace[3].def.name}) nada`);

  // ---------- 2. Reiniciar: todo como al principio
  g.startRace(); g.countdown = 0.01;
  check(allNone(), `al reiniciar quedan copas: ${cupsState()}`);
  check(g.vehicles.every((v) => !v.wheelie), 'al reiniciar sigue algún caballito');
  g.simulate(1);
  check(allNone(), 'al reiniciar reaparece una copa');

  // ---------- 3. Carrera de 1 vuelta: gana el jugador
  race(1, false);
  check(allNone(), 'carrera de 1 vuelta: copas al empezar');
  g.simulate(3);
  check(g.cups.cups[0].state === 'none', 'carrera de 1 vuelta: la dorada aparece antes de media vuelta');
  let at1 = null;
  run(200, () => { if (g.cups.cups[0].state !== 'none') { const v = leader(); at1 = { lap: v.lap, m: g.track.ahead(0, v.s) }; return true; } return false; });
  check(at1 && at1.lap === 1 && at1.m >= L / 2 && at1.m < L / 2 + 25, `1 vuelta: la dorada aparece en ${JSON.stringify(at1)}`);
  // el jugador se pone el primero, cerca de la meta, y cruza
  const p = g.player;
  const v1 = leader();
  check(g.track.ahead(0, v1.s) < L - 40, 'el primero ya está llegando');
  p.placeAt(L - 12, 0, 25);
  p.lap = 1; p.invuln = 3;
  // mensajes que salen en la pantalla del jugador
  const shown = [];
  const hud = g.views[0].hud, orig = hud.message.bind(hud);
  hud.message = (t, ...a) => { shown.push(t); return orig(t, ...a); };
  // (sin dibujar no corre hud.update: los mensajes de antes no se borran solos)
  const clearMsg = () => { hud.msgT = 0; hud.bigT = 0; };
  run(30, () => { clearMsg(); return p.finished; });
  check(p.finished && p.finishPlace === 1, `el jugador no llega primero (${p.finishPlace})`);
  check(g.cups.cups[0].holder === p, 'la dorada no es del jugador');
  run(3, () => { clearMsg(); return shown.includes('¡LA COPA ES TUYA!'); });
  check(shown.includes('¡LA COPA ES TUYA!'), `mensajes del jugador: ${shown.join(', ')}`);
  run(60, () => g.vehicles.filter((v) => v.finished).length >= 4);
  check(g.cups.cups[1].holder && g.cups.cups[1].holder.finishPlace === 2 && g.cups.cups[2].holder && g.cups.cups[2].holder.finishPlace === 3, '1 vuelta: plata o bronce mal dadas');
  log.push(`1 vuelta: oro el jugador (${p.def.name}), plata ${g.cups.cups[1].holder?.def.name}, bronce ${g.cups.cups[2].holder?.def.name}`);

  // ---------- 4. Cambiar de circuito: copas nuevas y las viejas fuera de la escena
  const old = g.cups;
  g.loadCircuit(id === 'clasico' ? 'nieve' : 'clasico');
  g.settings.laps = 2; g.startRace(); g.countdown = 0.01;
  check(g.cups !== old && allNone(), 'al cambiar de circuito no se renuevan las copas');
  let inScene = false;
  g.scene.traverse((o) => { if (o === old.group) inScene = true; });
  check(!inScene, 'las copas del circuito anterior siguen en la escena');
  return { fails, log };
}, circuit);

for (const l of res.log) console.log('  ' + l);
for (const e of errors) console.log('  ' + e);
if (res.fails.length || errors.length) {
  for (const f of res.fails) console.log('FALLO: ' + f);
  await browser.close();
  process.exit(1);
}
console.log('Meta: OK');
await browser.close();
