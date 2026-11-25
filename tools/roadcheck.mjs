// Comprueba, fotograma a fotograma, que bajo cada cámara se ve el camino y no la hierba
// del suelo. Sin tarjeta gráfica (SwiftShader) el suelo gigante llegaba a taparlo.
// Uso: node tools/roadcheck.mjs [fotogramas=90] [circuito=clasico] [jugadores=2]
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [frames = '90', circuit = 'clasico', players = '2'] = process.argv.slice(2);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  protocolTimeout: 1200000,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 60000 });
const r = await page.evaluate((frames, circuit, players) => {
  const g = window.__mm;
  g.settings.circuit = circuit; g.loadCircuit(circuit);
  g.settings.mode = players; g.settings.laps = 1; g.settings.quality = 'baja'; g.applyQuality(true);
  g.autopilot = true; g.startRace(); g.countdown = 0.01;
  const gl = g.renderer.getContext();
  const px = new Uint8Array(4);
  const bad = [];
  let total = 0;
  for (let f = 0; f < frames; f++) {
    g.frame(0.05);
    if (f < 12) continue; // la cámara aún gira alrededor del camión tras la salida
    const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight;
    g.views.forEach((v, vi) => {
      const pl = v.player;
      // solo cuenta si el camión va por el centro del camino y en el suelo: si no, ver hierba es normal
      if (Math.abs(pl.d) > 6 || !pl.onGround || pl.state !== 'ok' || pl.surf !== 'road') return;
      let other = 0;
      for (const fx of [0.3, 0.4, 0.6, 0.7]) {
        const x = Math.floor((v.rect.x + fx * v.rect.w) * W);
        const y = Math.floor((1 - v.rect.y - v.rect.h + 0.05 * v.rect.h) * H);
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        // color del suelo de fuera de la pista en esa misma vista (esquina inferior no sirve: se compara con el verde/blanco dominante)
        if (circuit === 'clasico' || circuit === 'selva') { if (px[1] > px[0] * 1.08) other++; }
      }
      total++;
      if (other >= 3) bad.push([f, vi, Math.round(pl.s), +pl.d.toFixed(1)]);
    });
  }
  return { circuit, players, total, bad: bad.length, sample: bad.slice(0, 12) };
}, +frames, circuit, +players);
console.log(JSON.stringify(r));
await browser.close();
if (r.total && r.bad / r.total > 0.03) { console.log('FALLO: el suelo tapa el camino'); process.exit(1); }
console.log('OK');
