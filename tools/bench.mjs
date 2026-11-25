// Banco de pruebas de rendimiento sin tarjeta gráfica (Chrome con SwiftShader), repetible.
// Por circuito y número de jugadores: calidad «baja» con la resolución fija (sin adaptación),
// Math.random con semilla (cada ejecución es idéntica), carrera con piloto automático y
// varios puntos de la vuelta (la salida y otros repartidos por el circuito, con todos los
// camiones juntos). En cada punto descarta unos fotogramas de calentamiento y mide N
// fotogramas con g.frame(1/30), separando la simulación (step), el resto de frame (HUD,
// cámaras, partículas...) y el dibujo (render, esperando a que el procesador acabe de
// dibujar), con llamadas de dibujo y triángulos. Cada medida se repite y se da la mediana y
// la dispersión ((máx − mín) / mediana) de las repeticiones.
//
// Uso: node tools/bench.mjs [circuito…] [--jugadores 1,2] [--fotogramas 40] [--calentar 8]
//        [--puntos 4] [--reps 3] [--fps 30] [--ancho 1280] [--alto 720] [--json salida.json]
//        [--js dist/game.js,otra.js] [--var 'compilación.js::código' …]
// Para comparar, cada --var (o cada compilación de --js) es una variante: una compilación y,
// opcionalmente tras «::», código (con g) que se ejecuta tras preparar cada carrera (para
// probar un cambio sin recompilar). La primera es la referencia. Todas se cargan a la vez y
// se miden alternándose punto a punto, y la comparación se hace por parejas (mismo punto,
// misma repetición): la carga de la máquina cambia mucho de un minuto a otro y así casi no
// afecta. Ejemplo: node tools/bench.mjs --var antes.js --var dist/game.js
// No lances varias mediciones a la vez: se estorban.
import puppeteer from 'puppeteer-core';
import { writeFileSync, readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const valued = new Set(['--jugadores', '--fotogramas', '--calentar', '--puntos', '--reps', '--ancho', '--alto', '--js', '--json', '--var', '--fps']);
const opt = (name, def) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : def; };
const ids = argv.filter((a, i) => !a.startsWith('--') && !valued.has(argv[i - 1]));
const modes = opt('--jugadores', '1,2').split(',').map(Number);
const N = +opt('--fotogramas', 40);
const WARM = +opt('--calentar', 8);
const POINTS = +opt('--puntos', 4);
const REPS = +opt('--reps', 3);
const W = +opt('--ancho', 1280), H = +opt('--alto', 720);
const FPS = +opt('--fps', 30); // g.frame(1 / FPS): a menos fotogramas por segundo, más pasos de física por fotograma
const vars = argv.flatMap((a, i) => (a === '--var' ? [argv[i + 1]] : []));
const variants = (vars.length ? vars : opt('--js', 'dist/game.js').split(',')).map((v) => {
  const [js, code = ''] = v.split('::');
  return { js: js || 'dist/game.js', code, label: v };
});
const bundles = variants.map((v) => v.label);
const jsonOut = opt('--json', null);

// Una página por compilación: copia de index.html que carga esa compilación
const tmp = mkdtempSync(join(tmpdir(), 'mm-bench-'));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const pages = variants.map(({ js }, k) => {
  const f = join(tmp, `bench${k}.html`);
  const src = pathToFileURL(resolve(root, js)).href;
  writeFileSync(f, html.replace('<head>', `<head><base href="${pathToFileURL(root + '/').href}">`).replace('src="dist/game.js"', `src="${src}"`));
  return f;
});

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  protocolTimeout: 3600000,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', `--window-size=${W},${H}`],
});

// Prepara una página con la compilación de una variante y deja en ella las funciones de medida
async function openPage(pageFile, extra) {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H });
  page.on('pageerror', (e) => console.log('[pageerror]', e.message));
  await page.goto(pathToFileURL(pageFile).href, { timeout: 180000 });
  await page.waitForFunction(() => window.__mm, { timeout: 120000 });
  await page.evaluate(({ N, WARM, POINTS, FPS, extra }) => {
    const g = window.__mm;
    g.loop = () => {}; // sin bucle propio: solo los fotogramas que pedimos
    const tweak = extra ? new Function('g', extra) : null;
    const mulberry = (seed) => {
      let s = seed >>> 0;
      return () => {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    };
    const gl = g.renderer.getContext();
    const px = new Uint8Array(4);
    const T = { step: 0, render: 0 };
    const step0 = g.step.bind(g), render0 = g.render.bind(g);
    g.step = (dt, c) => { const a = performance.now(); step0(dt, c); T.step += performance.now() - a; };
    g.render = (dt) => {
      const a = performance.now();
      render0(dt);
      gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); // espera a que acabe de dibujar
      T.render += performance.now() - a;
    };
    const info = g.renderer.info;
    let pts = [], order = [];
    window.__bench = {
      list: () => [...document.querySelectorAll('[data-circuit]')].map((b) => b.dataset.circuit),
      setup(c, mode) {
        Math.random = mulberry(12345);
        g.settings.circuit = c; g.loadCircuit(c);
        g.settings.mode = mode; g.settings.laps = 9; g.settings.quality = 'baja'; g.settings.diff = 'normal';
        g.applyQuality(true);
        g.autopilot = true;
        g.startRace();
        g.countdown = 0; g.updateCountdown(0, g.humans.map(() => ({ throttle: 0 })));
        if (tweak) tweak(g);
        const tr = g.track, L = tr.length;
        pts = [];
        for (let k = 0; k < POINTS; k++) {
          let s = k === 0 ? null : L * (k / POINTS) + 37;
          // lejos de los fosos (allí se cae o se salta y el camión desaparece un rato)
          if (s !== null) for (let tries = 0; tries < 20 && tr.pits.some((p) => tr.ahead(p.s0 - 70, s) < p.s1 - p.s0 + 90); tries++) s += 25;
          pts.push(s);
        }
        order = [...g.vehicles].sort((a, b) => a.place - b.place);
      },
      point(k) {
        const s = pts[k], tr = g.track;
        if (s !== null) {
          order.forEach((v, i) => {
            v.placeAt(tr.wrap(s - Math.floor(i / 2) * 10), i % 2 ? 5.5 : -5.5, 22);
            v.fall = null; v.stuckT = 0; v.wrongT = 0;
          });
          for (const v of g.views) { const p = v.player; v.camYaw = p.th; v.camPos.set(p.x - Math.cos(p.th) * 11, p.y + 4.5, p.z - Math.sin(p.th) * 11); }
        }
        for (let i = 0; i < WARM; i++) g.frame(1 / FPS);
        T.step = 0; T.render = 0;
        info.autoReset = false; // con dos vistas se suma lo de las dos
        let total = 0, calls = 0, tris = 0;
        for (let i = 0; i < N; i++) {
          info.reset();
          const a = performance.now();
          g.frame(1 / FPS);
          total += performance.now() - a;
          calls += info.render.calls; tris += info.render.triangles;
        }
        info.autoReset = true;
        return { s: s === null ? 'salida' : Math.round(s), step: T.step / N, other: (total - T.step - T.render) / N, render: T.render / N, calls: calls / N, tris: tris / N };
      },
    };
  }, { N, WARM, POINTS, FPS, extra });
  return page;
}

// Las variantes se alternan punto a punto (y en orden inverso en las repeticiones pares), para
// que los cambios de carga o de temperatura de la máquina les afecten por igual
const runs = bundles.map(() => []);
for (let r = 0; r < REPS; r++) {
  const t0 = Date.now();
  const pg = [];
  for (let k = 0; k < variants.length; k++) pg.push(await openPage(pages[k], variants[k].code));
  const list = ids.length ? ids : await pg[0].evaluate(() => window.__bench.list());
  const vorder = variants.map((_, k) => k);
  if (r % 2) vorder.reverse();
  const res = variants.map(() => []);
  for (const c of list) {
    for (const mode of modes) {
      for (const k of vorder) await pg[k].evaluate((c, mode) => window.__bench.setup(c, mode), c, mode);
      const per = variants.map(() => []);
      for (let p = 0; p < POINTS; p++) {
        const ord = p % 2 ? [...vorder].reverse() : vorder;
        for (const k of ord) per[k].push(await pg[k].evaluate((p) => window.__bench.point(p), p));
      }
      for (const k of vorder) {
        const avg = (f) => per[k].reduce((a, x) => a + x[f], 0) / per[k].length;
        res[k].push({ c, mode, step: avg('step'), other: avg('other'), render: avg('render'), calls: avg('calls'), tris: avg('tris'), per: per[k] });
      }
    }
  }
  for (const page of pg) await page.close();
  for (let k = 0; k < variants.length; k++) runs[k].push(res[k]);
  console.error(`repetición ${r + 1}/${REPS}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
await browser.close();
rmSync(tmp, { recursive: true, force: true });

const median = (a) => { const b = [...a].sort((x, y) => x - y); const m = b.length >> 1; return b.length % 2 ? b[m] : (b[m - 1] + b[m]) / 2; };
const spread = (a) => { const m = median(a); return m ? (Math.max(...a) - Math.min(...a)) / m : 0; };
const summary = bundles.map((js, k) => {
  const rows = runs[k][0].map((row, i) => {
    const vals = (f) => runs[k].map((rep) => f(rep[i]));
    const tot = vals((x) => x.step + x.other + x.render);
    return {
      c: row.c, mode: row.mode,
      step: median(vals((x) => x.step)), other: median(vals((x) => x.other)), render: median(vals((x) => x.render)),
      total: median(tot), disp: spread(tot), dispRender: spread(vals((x) => x.render)),
      calls: median(vals((x) => x.calls)), tris: median(vals((x) => x.tris)),
    };
  });
  return { js, rows };
});

const f1 = (x) => x.toFixed(1);
for (const { js, rows } of summary) {
  console.log(`\n## ${js}  (${REPS} repeticiones × ${POINTS} puntos × ${N} fotogramas, ${W}×${H}, calidad baja)`);
  console.log('circuito\tjug\tsim ms\totro ms\tdibujo ms\ttotal ms\tdisp\tllamadas\ttriángulos');
  for (const r of rows) console.log(`${r.c}\t${r.mode}\t${f1(r.step)}\t${f1(r.other)}\t${f1(r.render)}\t${f1(r.total)}\t±${(r.disp * 100).toFixed(1)} %\t${Math.round(r.calls)}\t${Math.round(r.tris)}`);
  const all = rows.reduce((a, r) => a + r.total, 0) / rows.length;
  console.log(`media\t\t\t\t\t${f1(all)}`);
}
// Comparación por parejas: cada punto de cada repetición se mide con todas las variantes una
// detrás de otra, así que el cociente variante / referencia de ese punto apenas nota la carga
// de la máquina. Se da la mediana de esos cocientes y su rango intercuartílico.
const q = (a, f) => { const b = [...a].sort((x, y) => x - y); const i = (b.length - 1) * f, lo = Math.floor(i); return b[lo] + (b[Math.min(lo + 1, b.length - 1)] - b[lo]) * (i - lo); };
const pct = (x) => `${x >= 0 ? '+' : ''}${(x * 100).toFixed(1)} %`;
if (summary.length > 1) {
  const ref = summary[0].rows;
  for (let k = 1; k < summary.length; k++) {
    const { js, rows } = summary[k];
    console.log(`\n## ${js} frente a ${summary[0].js}`);
    console.log('circuito\tjug\ttotal ms (mediana)\tcambio por parejas (mediana [P25, P75])\tdibujo\tsim\tllamadas\ttriángulos');
    const allT = [], allR = [];
    for (const [i, r] of rows.entries()) {
      const a = ref[i];
      const ratT = [], ratR = [];
      for (let rep = 0; rep < REPS; rep++) {
        runs[0][rep][i].per.forEach((pa, p) => {
          const pb = runs[k][rep][i].per[p];
          ratT.push((pb.step + pb.other + pb.render) / (pa.step + pa.other + pa.render) - 1);
          ratR.push(pb.render / pa.render - 1);
        });
      }
      allT.push(...ratT); allR.push(...ratR);
      console.log(`${r.c}\t${r.mode}\t${f1(a.total)} → ${f1(r.total)}\t${pct(median(ratT))} [${pct(q(ratT, 0.25))}, ${pct(q(ratT, 0.75))}]\t${pct(median(ratR))}\t${f1(a.step)} → ${f1(r.step)}\t${Math.round(a.calls)} → ${Math.round(r.calls)}\t${Math.round(a.tris)} → ${Math.round(r.tris)}`);
    }
    console.log(`en conjunto: ${pct(median(allT))} [${pct(q(allT, 0.25))}, ${pct(q(allT, 0.75))}] (dibujo ${pct(median(allR))}), ${allT.length} parejas`);
  }
}
if (jsonOut) writeFileSync(resolve(jsonOut), JSON.stringify({ args: argv, summary, runs }, null, 1));
