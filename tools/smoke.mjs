// Prueba de humo: abre el juego en Chrome sin interfaz, hace capturas y simula una carrera.
// Uso: node tools/smoke.mjs [capturas|carrera|todo] [carpeta de salida]
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2] || 'todo';
const out = resolve(process.argv[3] || resolve(root, 'shots'));
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--window-size=1280,720'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html') + (mode === 'carrera' ? '?auto' : ''));
await page.waitForFunction(() => window.__mm, { timeout: 60000 });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const shot = async (name) => { await page.screenshot({ path: resolve(out, name + '.png') }); console.log('captura', name); };

if (mode === 'capturas' || mode === 'todo') {
  await wait(1500);
  await shot('01-portada');
  await page.click('#btn-play');
  await wait(800);
  await shot('02-seleccion');
  await page.click('#btn-next');
  await wait(500);
  await shot('03-seleccion-2');
  await page.click('#btn-start');
  await wait(1800);
  await shot('04-cuenta-atras');
  await page.evaluate(() => { window.__mm.countdown = 0.01; });
  await wait(1500);
  await shot('05-salida');
  // recorrido por los obstáculos: coloca al jugador y deja que el piloto automático conduzca un poco
  const spots = [
    ['06-coches', 0, 92], ['07-troncos', 2, 20], ['08-rampa-foso', 2, 165], ['09-salto', 2, 190],
    ['10-bola', 4, 20], ['11-tunel', 7, 60], ['12-barriles', 7, 180], ['13-barro', 9, 5], ['14-cocodrilos', 9, 185],
    ['15-red', 11, 25],
  ];
  for (const [name, seg, rel] of spots) {
    await page.evaluate((seg, rel) => {
      const g = window.__mm;
      g.autopilot = true;
      const s = g.track.at(seg, rel);
      g.player.placeAt(s, 0, 28);
      g.camYaw = g.player.th;
      const P = g.track.pointAt(s - 11);
      g.camPos.set(P.x, g.player.y + 5, P.z);
    }, seg, rel);
    await wait(name === '09-salto' ? 700 : 1200);
    await shot(name);
  }
  await page.evaluate(() => { window.__mm.autopilot = false; window.__mm.pause(); });
  await wait(400);
  await shot('16-pausa');
}

if (mode === 'carrera' || mode === 'todo') {
  const res = await page.evaluate(() => {
    const g = window.__mm;
    g.settings.laps = 2;
    g.autopilot = true;
    g.startRace();
    const log = [];
    const falls = {};
    const hits = {};
    const orig = g.handleEvents.bind(g);
    g.handleEvents = () => {
      for (const v of g.vehicles) {
        for (const e of v.events) {
          if (e.type.startsWith('fall')) falls[v.def.name] = (falls[v.def.name] || 0) + 1;
          if (['log', 'ball', 'net', 'boom', 'waved', 'crush', 'nitro', 'jump', 'wave', 'turbo', 'box', 'respawn'].includes(e.type)) hits[e.type] = (hits[e.type] || 0) + 1;
        }
      }
      orig();
    };
    let t = 0;
    for (; t < 400; t += 1) {
      g.simulate(1);
      const bad = g.vehicles.find((v) => !isFinite(v.x) || !isFinite(v.y) || !isFinite(v.z));
      if (bad) return { error: 'NaN en ' + bad.def.name, t };
      if (t % 20 === 0) log.push(t + 's ' + g.vehicles.map((v) => `${v.def.name}:v${v.lap} ${v.s.toFixed(0)}m ${v.state}`).join(' | '));
      if (g.vehicles.every((v) => v.finished)) break;
    }
    return {
      t, log, falls, hits,
      result: g.vehicles.map((v) => ({ n: v.def.name, fin: v.finished, time: v.finishTime.toFixed(1), place: v.finishPlace, laps: v.lapTimes.map((x) => x.toFixed(1)) })),
      length: g.track.length.toFixed(1),
    };
  });
  console.log(JSON.stringify(res, null, 1));
}

if (mode === 'teclado' || mode === 'todo') {
  const frames = async (n = 3) => {
    const f0 = await page.evaluate(() => window.__mm.frames);
    await page.waitForFunction((f) => window.__mm.frames >= f, { timeout: 60000 }, f0 + n);
  };
  const get = () => page.evaluate(() => { const g = window.__mm; const p = g.player; return { state: g.state, v: +p.speed.toFixed(1), th: +p.th.toFixed(2), boost: +p.boost.toFixed(2), item: p.item }; });
  await page.evaluate(() => window.__mm.goTitle());
  await frames();
  await page.keyboard.press('Enter');
  await frames();
  await page.keyboard.press('ArrowRight');
  await frames();
  await page.keyboard.press('Enter');
  await frames();
  await page.evaluate(() => { window.__mm.countdown = 0.01; window.__mm.autopilot = false; });
  await frames();
  const r = { inicio: await get() };
  await page.keyboard.down('ArrowUp');
  await frames(40);
  r.acelerando = await get();
  await page.keyboard.down('ArrowLeft');
  await frames(20);
  await page.keyboard.up('ArrowLeft');
  r.girando = await get();
  await page.evaluate(() => { window.__mm.player.item = 'nitro'; });
  await page.keyboard.press('Space');
  await frames();
  r.nitro = await get();
  await page.keyboard.up('ArrowUp');
  await page.keyboard.press('KeyP');
  await frames();
  r.pausa = await get();
  await page.keyboard.press('KeyP');
  await frames();
  r.sigue = await get();
  r.fps = await page.evaluate(async () => { const f0 = window.__mm.frames; await new Promise((res) => setTimeout(res, 2000)); return (window.__mm.frames - f0) / 2; });
  console.log(JSON.stringify(r));
  const ok = r.acelerando.v > r.inicio.v + 3 && r.girando.th !== r.acelerando.th && (r.nitro.boost > 0 || r.nitro.item === null) && r.pausa.state === 'paused' && r.sigue.state === 'race';
  console.log(ok ? 'Teclado: OK' : 'Teclado: FALLA');
}

console.log(errors.length ? 'ERRORES:\n' + errors.join('\n') : 'Sin errores en consola');
await browser.close();
