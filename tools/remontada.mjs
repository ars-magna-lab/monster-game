// Prueba del modo gigante (superremontada) y de chafar. Sin dibujar: el bucle y el dibujo se
// anulan y la simulación se avanza a mano con g.step.
// Uso: node tools/remontada.mjs
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
  window.__all = g.vehicles;
  // Carrera de seis en el circuito dado, con el piloto automático, ya lanzada (sin cuenta atrás)
  window.__race = (id = 'clasico', diff = 'normal') => {
    g.vehicles = window.__all;
    g.settings.mode = 1; g.settings.truck = 0; g.settings.laps = 3; g.settings.circuit = id; g.settings.diff = diff;
    g.loadCircuit(id);
    g.autopilot = true;
    g.startRace();
    g.countdown = 0; g.updateCountdown(0, [{ steer: 0, throttle: 0, brake: 0 }]);
    return g.state;
  };
  window.__run = (secs) => {
    const n = Math.round(secs * 120);
    for (let i = 0; i < n; i++) { g.step(1 / 120, [{ steer: 0, throttle: 0, brake: 0 }]); if (i % 12 === 0) g.handleEvents(); }
  };
  // Coloca a cada camión en la vuelta 1 a la distancia dada (m) del de delante del todo
  window.__spread = (gaps) => {
    const L = g.track.length;
    g.vehicles.forEach((v, i) => { v.placeAt(1000 - gaps[i], 0, 0); v.lap = 1; v.giant = 0; v.giantK = 0; v.item = null; v.itemRoll = 0; });
    g.rank();
    return g.vehicles.map((v) => v.place);
  };
  window.__rolls = (v, n = 3000) => { let k = 0; for (let i = 0; i < n; i++) if (g.rollItem(v) === 'giant') k++; return +(k / n).toFixed(3); };
});
const ev = (fn, ...a) => page.evaluate(fn, ...a);
const r = {}, check = {};

// 1. Reparto del modo gigante: por puesto, tiempo de carrera, distancia al primero y uno solo a la vez
r.reparto = await ev(() => {
  const g = window.__mm;
  window.__race('clasico');
  window.__spread([0, 20, 40, 60, 100, 220]); // el último a 220 m, el penúltimo a 100 m
  const vs = [...g.vehicles].sort((a, b) => a.place - b.place);
  const last = vs[5], pen = vs[4];
  g.raceTime = 20;
  const out = { ultimo: window.__rolls(last), primero: window.__rolls(vs[0]), tercero: window.__rolls(vs[2]) };
  window.__spread([0, 20, 40, 60, 130, 220]);
  out.penultimo = window.__rolls([...g.vehicles].sort((a, b) => a.place - b.place)[4]);
  g.raceTime = 10; out.antesDe12s = window.__rolls(last);
  g.raceTime = 20;
  window.__spread([0, 10, 20, 30, 50, 100]); // el último solo a 100 m
  out.cerca = window.__rolls([...g.vehicles].sort((a, b) => a.place - b.place)[5]);
  window.__spread([0, 20, 40, 60, 100, 220]);
  const l2 = [...g.vehicles].sort((a, b) => a.place - b.place);
  l2[0].giant = 3; out.otroGigante = window.__rolls(l2[5]); l2[0].giant = 0;
  l2[2].item = 'giant'; out.otroConElObjeto = window.__rolls(l2[5]); l2[2].item = null;
  const all = g.vehicles;
  g.vehicles = [l2[0], l2[5]]; g.rank();
  out.dosCamiones = window.__rolls(l2[5]);
  g.vehicles = all; g.rank();
  return out;
});
{
  const x = r.reparto;
  check.reparto = Math.abs(x.ultimo - 0.45) < 0.04 && Math.abs(x.penultimo - 0.15) < 0.03 && x.primero === 0 && x.tercero === 0 &&
    x.antesDe12s === 0 && x.cerca === 0 && x.otroGigante === 0 && x.otroConElObjeto === 0 && x.dosCamiones === 0;
}

// 2. Uso, duración, tamaño e inmunidades
r.efecto = await ev(() => {
  const g = window.__mm;
  window.__race('clasico');
  window.__run(4);
  const v = g.vehicles.find((o) => !o.isPlayer);
  const others = g.vehicles.filter((o) => o !== v);
  for (const o of others) o.placeAt(400, (others.indexOf(o) - 2) * 4, 0); // lejos
  v.placeAt(60, 0, 25);
  v.item = 'giant'; v.itemRoll = 0;
  const drv = g.drivers.get(v);
  window.__run(1 / 60); // la IA lo usa nada más tenerlo
  const usado = v.giant > 5.9 && v.item === null;
  window.__run(0.35);
  const tam = +(v.size / v.baseSize).toFixed(2);
  const hit = v.hit({ stun: 1, speedMul: 0.3, kind: 'log' });
  const red = v.catchNet({});
  const stun = v.stun;
  let vel = 0;
  for (let k = 0; k < 55; k++) { window.__run(0.1); vel = Math.max(vel, +(v.vF / (v.maxSpeed * v.speedMul)).toFixed(2)); }
  window.__run(0.15); // 6 s en total desde que lo usó
  const quedan = +v.giant.toFixed(2);
  window.__run(0.35);
  return { usado, tam, golpe: hit, red, stun, velRelPunta: vel, quedanA6s: quedan, tamFinal: +(v.size / v.baseSize).toFixed(2), drv: !!drv };
});
check.efecto = r.efecto.usado && Math.abs(r.efecto.tam - 1.6) < 0.01 && !r.efecto.golpe && !r.efecto.red && r.efecto.stun === 0 &&
  r.efecto.velRelPunta > 1.2 && r.efecto.quedanA6s < 0.05 && r.efecto.tamFinal === 1;

// 3. El gigante chafa al tocar (sin importar tamaños) y no se le puede chafar a él
r.chafaGigante = await ev(() => {
  const g = window.__mm;
  window.__race('clasico');
  window.__run(4);
  const vs = g.vehicles;
  const small = vs.find((o) => o.def.id === 'relampago'), big = vs.find((o) => o.def.id === 'mamut');
  for (const o of vs) if (o !== small && o !== big) o.placeAt(500, 0, 0);
  small.invuln = 0; big.invuln = 0;
  small.placeAt(80, 0, 10);
  big.placeAt(80, 4, 10); // al lado, en paralelo y tocándose
  small.giant = 6; small.giantK = 1; small.size = small.baseSize * 1.6;
  window.__run(1 / 60);
  return { chafado: big.squash > 0, dur: +big.squashDur.toFixed(2), gigante: small.squash === 0 };
});
check.chafaGigante = r.chafaGigante.chafado && Math.abs(r.chafaGigante.dur - 1.4) < 0.01 && r.chafaGigante.gigante;

// 4. Remontada: un camión de la IA, último a ~200 m del primero, usa el modo gigante; se compara con
// lo que hace en el mismo sitio sin él (10 s después: 6 s de gigante y 4 s más)
const comeback = (giant, id) => ev(([giant, id]) => {
  const g = window.__mm;
  window.__race(id);
  window.__run(25);
  const vs = g.vehicles;
  const lead = Math.max(...vs.map((o) => o.progress));
  const lastP = Math.min(...vs.map((o) => o.progress));
  const v = [...vs].filter((o) => !o.isPlayer).sort((a, b) => a.progress - b.progress)[1];
  const L = g.track.length;
  const target = Math.min(lead - 200, lastP - 5);
  const lap = Math.floor(target / L), s = target - lap * L;
  v.respawn(s, 0, 28); v.lap = lap; v.invuln = 0; v.blink = 0; v.stun = 0; v.squash = 0;
  g.rank();
  const p0 = v.place, gap0 = lead - v.progress;
  const prog0 = vs.map((o) => o.progress);
  if (giant) { v.item = 'giant'; v.itemRoll = 0; }
  const evs = [];
  const push = v.events.push.bind(v.events);
  v.events.push = (e) => { if (/^(fall|log|ball|net|crushTruck|boom|car|meteor)/.test(e.type)) evs.push(e.type); return push(e); };
  window.__run(10);
  delete v.events.push;
  const lead1 = Math.max(...vs.map((o, i) => (o === v ? -Infinity : o.progress)));
  return { p0, p1: v.place, gap0: +gap0.toFixed(0), gap1: +(lead1 - v.progress).toFixed(0), avance: +(v.progress - prog0[vs.indexOf(v)]).toFixed(0), evs: evs.join(' '), name: v.def.name };
}, [giant, id]);
const runsCon = [], runsSin = [];
for (let i = 0; i < 8; i++) {
  const id = i % 2 ? 'selva' : 'clasico';
  runsCon.push(await comeback(true, id));
  runsSin.push(await comeback(false, id));
}
{
  const avg = (a, f) => a.reduce((x, y) => x + f(y), 0) / a.length;
  const gananciaCon = avg(runsCon, (x) => x.gap0 - x.gap1), gananciaSin = avg(runsSin, (x) => x.gap0 - x.gap1);
  r.remontada = {
    con: runsCon.map((x) => `${x.p0}→${x.p1} ${x.gap0}→${x.gap1} m (${x.avance} m ${x.evs})`).join(', '),
    sin: runsSin.map((x) => `${x.p0}→${x.p1} ${x.gap0}→${x.gap1} m (${x.avance} m ${x.evs})`).join(', '),
    metrosRecortadosCon: +gananciaCon.toFixed(0), metrosRecortadosSin: +gananciaSin.toFixed(0),
    metrosGanadosPorElGigante: +(gananciaCon - gananciaSin).toFixed(0),
    puestosCon: +avg(runsCon, (x) => x.p0 - x.p1).toFixed(2), puestosSin: +avg(runsSin, (x) => x.p0 - x.p1).toFixed(2),
    primeroCon: runsCon.filter((x) => x.p1 === 1).length,
  };
  const z = r.remontada;
  check.remontada = z.metrosGanadosPorElGigante >= 60 && z.metrosGanadosPorElGigante <= 180 && z.primeroCon <= 2;
}

console.log(JSON.stringify(r, null, 1));
console.log(JSON.stringify(check));
const ok = Object.values(check).every(Boolean) && !errors.length;
console.log(errors.length ? 'ERRORES:\n' + errors.join('\n') : 'Sin errores en consola');
console.log(ok ? 'Remontada: OK' : 'Remontada: FALLA');
await browser.close();
process.exit(ok ? 0 : 1);
