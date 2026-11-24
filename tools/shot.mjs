// Captura de depuración: ejecuta código en la página y guarda una imagen.
// Uso: node tools/shot.mjs salida.png "código JS" [espera_ms] [ancho] [alto]
// El código recibe la partida en la variable g (window.__mm).
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [outPath, code = '', waitMs = '1500', w = '1280', h = '720'] = process.argv.slice(2);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', `--window-size=${w},${h}`],
});
const page = await browser.newPage();
await page.setViewport({ width: +w, height: +h });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'log') console.log(`[${m.type()}]`, m.text()); });
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 60000 });
const ret = await page.evaluate((src) => { const g = window.__mm; return (new Function('g', src))(g); }, code);
if (ret !== undefined) console.log(JSON.stringify(ret));
await new Promise((r) => setTimeout(r, +waitMs));
await page.screenshot({ path: resolve(outPath) });
await browser.close();
