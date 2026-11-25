// Prueba del mando: simula un mando falso en Chrome sin interfaz y recorre los menús con él.
// Uso: node tools/mando.mjs [carpeta de capturas]
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] || resolve(root, 'shots'));
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--window-size=1280,720'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
page.setDefaultTimeout(600000);
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 120000 });

// Mando falso, y el bucle del juego parado: los fotogramas se avanzan a mano con g.frame()
await page.evaluate(() => {
  const g = window.__mm;
  g.loop = (t) => { requestAnimationFrame((x) => g.loop(x)); g.last = t; };
  const pad = { index: 0, connected: true, timestamp: 0, buttons: [...Array(17)].map(() => ({ pressed: false, value: 0 })), axes: [0, 0, 0, 0] };
  window.__pad = pad;
  Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => [window.__padOff ? null : { ...pad, timestamp: performance.now() }] });
  // utilidades de la prueba
  window.__f = (n = 1) => { for (let i = 0; i < n; i++) g.frame(1 / 60); };
  window.__btn = (i, on) => { pad.buttons[i] = { pressed: on, value: on ? 1 : 0 }; };
  window.__tap = (i, n = 1) => { for (let k = 0; k < n; k++) { window.__btn(i, true); window.__f(1); window.__btn(i, false); window.__f(1); } };
  window.__axis = (a, v) => { pad.axes[a] = v; };
  window.__truckChanges = 0;
  const orig = g.changeTruck.bind(g);
  g.changeTruck = (d) => { window.__truckChanges++; orig(d); };
  window.__focus = () => [...document.querySelectorAll('.focus')].map((e) => e.id || e.className).join(' ');
});
const A = 0, B = 1, START = 9, UP = 12, DOWN = 13, LEFT = 14, RIGHT = 15;
const ev = (fn, ...args) => page.evaluate(fn, ...args);
const shot = async (name) => { await page.screenshot({ path: resolve(out, name + '.png') }); console.log('captura', name); };
const r = {};
const check = {};

// Portada: A entra en la selección
await ev(() => { window.__mm.goTitle(); window.__f(2); });
r.padControls = await ev(() => !document.getElementById('pad-controls').classList.contains('hidden'));
await shot('30-mando-portada');
await ev((A) => window.__tap(A), A);
r.trasA = await ev(() => window.__mm.state);
check.portada = r.trasA === 'select' && r.padControls;

// Stick a la izquierda mantenido 20 fotogramas: un solo cambio de camión
r.focoInicial = await ev(() => window.__focus());
r.stick20 = await ev(() => { window.__truckChanges = 0; window.__axis(0, -1); window.__f(20); window.__axis(0, 0); window.__f(2); return window.__truckChanges; });
// mantenido 1 s: primer salto, 0,4 s de espera y luego cada 0,15 s → 5 saltos
r.stick60 = await ev(() => { window.__truckChanges = 0; window.__axis(0, -1); window.__f(60); window.__axis(0, 0); window.__f(2); return window.__truckChanges; });
// lo mismo con la cruceta y con la flecha del teclado
r.cruceta60 = await ev((RIGHT) => { window.__truckChanges = 0; window.__btn(RIGHT, true); window.__f(60); window.__btn(RIGHT, false); window.__f(2); return window.__truckChanges; }, RIGHT);
await page.keyboard.down('ArrowRight');
r.teclado60 = await ev(() => { window.__truckChanges = 0; window.__f(60); return window.__truckChanges; });
await page.keyboard.up('ArrowRight');
await ev(() => window.__f(2));
await shot('31a-mando-seleccion-camion');
check.repeticion = r.stick20 === 1 && r.stick60 === 5 && r.cruceta60 === 5 && r.teclado60 === 5 && /truck-name/.test(r.focoInicial);

// Circuito y vueltas con el mando (el stick vertical baja de fila)
r.circuito = await ev((RIGHT) => {
  const g = window.__mm;
  const antes = g.circuit.id;
  window.__axis(1, 1); window.__f(1); window.__axis(1, 0); window.__f(1);
  const foco = window.__focus();
  window.__tap(RIGHT);
  return { antes, despues: g.circuit.id, foco };
}, RIGHT);
r.vueltas = await ev(([DOWN, RIGHT]) => {
  const g = window.__mm;
  const antes = g.settings.laps;
  window.__tap(DOWN);
  const foco = window.__focus();
  window.__tap(RIGHT);
  return { antes, despues: g.settings.laps, foco };
}, [DOWN, RIGHT]);
await ev(() => window.__f(2));
await shot('31-mando-seleccion');
check.opciones = r.circuito.antes !== r.circuito.despues && /opt-circuit/.test(r.circuito.foco) && r.vueltas.antes !== r.vueltas.despues;
// abajo hasta la fila de botones: el foco queda en «¡A correr!»
r.botones = await ev((DOWN) => { window.__tap(DOWN, 6); return window.__focus(); }, DOWN);
await shot('32-mando-seleccion-botones');
r.arranca = await ev((A) => { window.__tap(A); return window.__mm.state; }, A);
check.arranca = r.arranca === 'countdown' && r.botones === 'btn-start';

// Carrera: dirección analógica sin retraso
r.analogico = await ev(() => {
  const g = window.__mm;
  g.countdown = 0.01; window.__f(2);
  window.__axis(0, 0.5);
  window.__f(1);
  const s = g.views[0].steerSmooth;
  const analog = g.input.drive('solo').analog;
  window.__axis(0, 0); window.__f(1);
  return { state: g.state, analog, steer: +s.toFixed(3) };
});
check.analogico = r.analogico.state === 'race' && r.analogico.analog && r.analogico.steer > 0.3;

// Start pausa; abajo hasta «Salir al menú» y A
r.pausa = await ev((START) => { window.__tap(START); return window.__mm.state; }, START);
r.focoPausa = await ev(() => window.__focus());
r.focoSalir = await ev((DOWN) => { window.__tap(DOWN, 5); return window.__focus(); }, DOWN);
await shot('33-mando-pausa');
r.salir = await ev((A) => { window.__tap(A); return window.__mm.state; }, A);
check.pausa = r.pausa === 'paused' && r.focoPausa === 'btn-resume' && r.focoSalir === 'btn-quit' && r.salir === 'title';

// B y Start también reanudan
r.reanuda = await ev(([START, B]) => {
  const g = window.__mm;
  g.startRace(); g.countdown = 0.01; window.__f(2);
  window.__tap(START); const p1 = g.state; window.__tap(B); const r1 = g.state;
  window.__tap(START); window.__tap(START); const r2 = g.state;
  return [p1, r1, r2];
}, [START, B]);
check.reanuda = r.reanuda.join() === 'paused,race,race';

// Desconectar el mando en plena carrera pausa la partida
r.desconecta = await ev(() => {
  const g = window.__mm;
  window.__padOff = true;
  const e = new Event('gamepaddisconnected');
  Object.defineProperty(e, 'gamepad', { value: { index: 0 } });
  window.dispatchEvent(e);
  const st = g.state;
  window.__padOff = false;
  window.__f(1);
  return st;
});
check.desconecta = r.desconecta === 'paused';

// Resultados: carrera de 1 vuelta con piloto automático, y con el mando hasta «Menú»
r.resultados = await ev(() => {
  const g = window.__mm;
  g.settings.laps = 1; g.autopilot = true; g.startRace();
  for (let i = 0; i < 40 && g.state !== 'finished'; i++) g.simulate(5);
  g.autopilot = false;
  const st = g.state;
  g.resultsT = 0.01; window.__f(2);
  return { st, foco: window.__focus() };
});
r.focoMenu = await ev(([DOWN, RIGHT]) => { window.__tap(DOWN); window.__tap(RIGHT); return window.__focus(); }, [DOWN, RIGHT]);
await shot('34-mando-resultados');
r.menu = await ev((A) => { window.__tap(A); return window.__mm.state; }, A);
check.resultados = r.resultados.st === 'finished' && r.resultados.foco === 'btn-again' && r.focoMenu === 'btn-menu' && r.menu === 'title';

console.log(JSON.stringify(r, null, 1));
console.log(JSON.stringify(check));
const ok = Object.values(check).every(Boolean);
console.log(ok ? 'Mando: OK' : 'Mando: FALLA');
console.log(errors.length ? 'ERRORES:\n' + errors.join('\n') : 'Sin errores en consola');
await browser.close();
process.exit(ok ? 0 : 1);
