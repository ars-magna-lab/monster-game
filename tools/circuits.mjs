// Captura y carrera simulada de cada circuito. Uso: node tools/circuits.mjs [id...]
import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
const ids = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 1200000, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 720 });
const errors = [];
p.on('pageerror', (e) => errors.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await p.goto('file://' + resolve('index.html'));
await p.waitForFunction(() => window.__mm);
const list = ids.length ? ids : await p.evaluate(() => [...document.querySelectorAll('[data-circuit]')].map((b) => b.dataset.circuit));
for (const id of list) {
  const r = await p.evaluate((id) => {
    const g = window.__mm;
    g.settings.circuit = id; g.loadCircuit(id);
    g.settings.laps = 1; g.autopilot = true; g.startRace(); g.countdown = 0.01;
    g.simulate(150);
    const out = { id, L: Math.round(g.track.length), state: g.state, res: g.vehicles.map((v) => v.finished ? +v.finishTime.toFixed(1) : 'NO ' + Math.round(v.s)) };
    g.startRace(); g.countdown = 0.01; g.simulate(9);
    return out;
  }, id);
  await new Promise((res) => setTimeout(res, 7000));
  await p.screenshot({ path: `shots/40-${id}.png` });
  console.log(JSON.stringify(r));
}
console.log(errors.length ? 'ERRORES: ' + [...new Set(errors)].join(' | ') : 'Sin errores');
await b.close();
