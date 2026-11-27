// Compila src/ en dist/game.js y sella la versión.
// - La fecha de compilación va dentro del juego (se ve en la portada) y en dist/version.json.
// - index.html lleva la huella de su propio contenido. La página pregunta por dist/version.json
//   sin caché al cargar: así pide siempre el juego de la última versión y, si ella misma es una
//   copia vieja (una pestaña que el navegador restauró de su caché), se vuelve a pedir.
// La huella de index.html solo cambia cuando cambia su contenido, no en cada compilación.
// Uso: node tools/build.mjs [--watch]
import { build, context } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const d = new Date();
const p2 = (n) => String(n).padStart(2, '0');
const id = `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}`;
const date = `${p2(d.getDate())}/${p2(d.getMonth() + 1)}/${d.getFullYear()} ${p2(d.getHours())}:${p2(d.getMinutes())}`;

// huella de index.html (sin contar la propia huella)
const htmlPath = resolve(root, 'index.html');
const META = /<meta name="mm-html" content="[^"]*">/;
let html = readFileSync(htmlPath, 'utf8');
if (!META.test(html)) throw new Error('index.html no tiene la etiqueta <meta name="mm-html">');
const hash = createHash('sha1').update(html.replace(META, '<meta name="mm-html" content="">')).digest('hex').slice(0, 10);
const stamped = html.replace(META, `<meta name="mm-html" content="${hash}">`);
if (stamped !== html) writeFileSync(htmlPath, stamped);

writeFileSync(resolve(root, 'dist/version.json'), JSON.stringify({ id, date, html: hash }) + '\n');

const opts = {
  entryPoints: [resolve(root, 'src/main.js')], bundle: true, minify: !watch, sourcemap: watch, format: 'iife', target: 'es2020',
  outfile: resolve(root, 'dist/game.js'), define: { __BUILD__: JSON.stringify({ id, date }) }, logLevel: 'info',
};
if (watch) { const ctx = await context(opts); await ctx.watch(); } else await build(opts);
