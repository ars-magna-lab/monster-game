// Comprueba que cambiar de circuito no deja geometrías ni texturas sin liberar en la GPU:
// recorre los circuitos varias vueltas, dibuja un par de fotogramas en cada uno y apunta
// renderer.info.memory al final de cada vuelta. Uso: node tools/memcheck.mjs [vueltas=3]
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rounds = +(process.argv[2] || 3);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  protocolTimeout: 1200000,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage();
await page.setViewport({ width: 960, height: 540 });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.goto('file://' + resolve(root, 'index.html'), { timeout: 180000 }); // la máquina puede ir cargada
await page.waitForFunction(() => window.__mm, { timeout: 60000 });
await page.evaluate(() => { window.__mm.loop = () => {}; }); // los fotogramas los damos nosotros
const rows = [];
for (let r = 1; r <= rounds; r++) {
  const row = await page.evaluate(() => {
    const g = window.__mm;
    const out = {};
    for (const c of ['clasico', 'nieve', 'volcan', 'selva', 'ciudad']) {
      g.loadCircuit(c);
      g.time = 0; // misma posición de la cámara de portada en cada vuelta
      g.frame(0.05); g.frame(0.05);
      const m = g.renderer.info.memory;
      out[c] = `${m.geometries}/${m.textures}`;
    }
    const m = g.renderer.info.memory;
    return { geometries: m.geometries, textures: m.textures, ...out };
  });
  rows.push({ vuelta: r, ...row });
  console.log(JSON.stringify(rows.at(-1)));
}
await browser.close();
const grow = rows.slice(1).some((x, i) => x.geometries > rows[i].geometries || x.textures > rows[i].textures);
if (errors.length) console.log('Errores:', errors);
console.log(grow ? 'FALLO: la memoria crece de una vuelta a la siguiente' : 'OK: la memoria no crece entre vueltas');
process.exit(grow || errors.length ? 1 : 0);
