// Comprueba, fotograma a fotograma, que bajo cada cámara se ve el camino y no el suelo.
// Sin tarjeta gráfica (SwiftShader) el suelo gigante llegaba a taparlo. Vale para todos los
// circuitos: cada fotograma se vuelve a dibujar sin el suelo y, si los puntos del camino
// cambian de color, es que el suelo los estaba tapando.
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
await page.goto('file://' + resolve(root, 'index.html'), { timeout: 180000 }); // la máquina puede ir cargada
await page.waitForFunction(() => window.__mm, { timeout: 60000 });
const r = await page.evaluate((frames, circuit, players) => {
  const g = window.__mm;
  g.settings.circuit = circuit; g.loadCircuit(circuit);
  g.settings.mode = players; g.settings.laps = 1; g.settings.quality = 'baja'; g.applyQuality(true);
  g.autopilot = true; g.startRace(); g.countdown = 0.01;
  const gl = g.renderer.getContext();
  let ground = null;
  g.scene.traverse((o) => { if (o.isMesh && o.geometry.parameters && o.geometry.parameters.width === 5000) ground = o; });
  if (!ground) throw new Error('no encuentro el suelo');
  // también el mar y la arena de Bahía Pirata: planos que se dibujan como el suelo (renderOrder entre -1 y 0)
  const flats = [ground];
  g.scene.traverse((o) => { if (o.isMesh && o !== ground && o.renderOrder < 0 && o.renderOrder > -1) flats.push(o); });
  const FX = [0.3, 0.4, 0.6, 0.7];
  // lee los puntos de muestra (abajo, en el centro de cada vista) del último dibujo
  const sample = () => {
    const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight;
    return g.views.map((v) => FX.map((fx) => {
      const px = new Uint8Array(4);
      const x = Math.floor((v.rect.x + fx * v.rect.w) * W);
      const y = Math.floor((1 - v.rect.y - v.rect.h + 0.05 * v.rect.h) * H);
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
      return px;
    }));
  };
  const bad = [];
  let total = 0;
  for (let f = 0; f < frames; f++) {
    g.frame(0.05);
    if (f < 12) continue; // la cámara aún gira alrededor del camión tras la salida
    const withGround = sample();
    for (const o of flats) o.visible = false;
    g.render(0); // mismo fotograma, sin el suelo
    for (const o of flats) o.visible = true;
    const without = sample();
    g.views.forEach((v, vi) => {
      const pl = v.player;
      // solo cuenta si el camión va por el centro del camino y en el suelo: si no, ver el suelo es normal
      if (Math.abs(pl.d) > 6 || !pl.onGround || pl.state !== 'ok' || pl.surf !== 'road') return;
      let other = 0;
      withGround[vi].forEach((a, k) => {
        const b = without[vi][k];
        if (Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]), Math.abs(a[2] - b[2])) > 12) other++;
      });
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
