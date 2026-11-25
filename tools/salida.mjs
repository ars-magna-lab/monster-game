// Prueba de la salida: vuelta de la cámara, cuenta atrás y salidas (ahogado, perfecta, buena, normal).
// Recorre la salida fotograma a fotograma con g.frame(1/60) y controles simulados.
// Uso: node tools/salida.mjs [capturas] [carpeta de capturas]
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const shots = process.argv[2] === 'capturas';
const out = resolve(process.argv[3] || resolve(root, 'shots'));
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--window-size=1280,720'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
page.setDefaultTimeout(900000);
page.setDefaultNavigationTimeout(300000);
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 300000 });

// Bucle del juego parado: los fotogramas se avanzan a mano. Sin dibujar salvo en las capturas.
await page.evaluate(() => {
  const g = window.__mm;
  g.loop = (t) => { requestAnimationFrame((x) => g.loop(x)); g.last = t; };
  g.__render = g.render;
  g.render = () => {};
  const pad = { index: 0, connected: true, timestamp: 0, buttons: [...Array(17)].map(() => ({ pressed: false, value: 0 })), axes: [0, 0, 0, 0] };
  window.__pad = pad;
  Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => [window.__padOn ? { ...pad, timestamp: performance.now() } : null] });
  window.__key = (code, on) => { if (on) { g.input.keys.add(code); g.input.edges.add(code); } else g.input.keys.delete(code); };
  window.__start = (mode = 1, diff = 'normal') => {
    g.input.keys.clear();
    g.settings.mode = mode; g.settings.diff = diff; g.settings.truck = 0; g.settings.truck2 = 3;
    g.autopilot = false;
    g.startRace();
  };
  // avanza hasta que la cuenta baje de c y guarda la cámara de cada vista (camPos: sin la sacudida
  // aleatoria de los choques, que es a propósito y salta si se arranca contra el camión de delante)
  window.__cams = [];
  window.__until = (c) => {
    let n = 0;
    while (g.state === 'countdown' && g.countdown > c && n < 2000) {
      g.frame(1 / 60); n++;
      window.__cams.push(g.views.map((v) => [v.camPos.x, v.camPos.y, v.camPos.z]));
    }
  };
  // en carrera deja de apuntar en cuanto hay un choque (los empujones del choque mueven al camión de golpe)
  window.__frames = (n) => {
    for (let i = 0; i < n; i++) {
      g.frame(1 / 60);
      if (g.views.some((v) => v.shake > 0)) window.__crash = true;
      if (!window.__crash) window.__cams.push(g.views.map((v) => [v.camPos.x, v.camPos.y, v.camPos.z]));
    }
  };
  window.__msg = (i = 0) => g.views[i].hud.el.msg.textContent;
});

const ev = (fn, ...args) => page.evaluate(fn, ...args);
const fails = [];
const check = (name, ok, info) => { console.log((ok ? 'ok   ' : 'FALLO') + ' ' + name + (ok ? '' : ' ' + JSON.stringify(info))); if (!ok) fails.push(name); };
const shot = async (name) => {
  await ev(() => { const g = window.__mm; g.__render(0); });
  await page.screenshot({ path: resolve(out, name + '.png') });
  console.log('captura', resolve(out, name + '.png'));
};

// Escenario de 1 jugador: pulsa en «on» (valor de la cuenta), suelta en «off», vuelve a pulsar en «on2»
async function salida({ on = null, off = null, on2 = null, key = 'ArrowUp' }) {
  return ev(({ on, off, on2, key }) => {
    const g = window.__mm;
    window.__start(1);
    const p = g.views[0].player;
    const marks = [on, off, on2].filter((x) => x !== null);
    for (const [i, m] of marks.entries()) { window.__until(m); window.__key(key, i !== 1); }
    window.__until(0);
    window.__frames(1);
    const r = { state: g.state, msg: window.__msg(), boost: p.boost, stall: p.stall, v0: p.vF };
    window.__frames(66); // 1,1 s
    r.v11 = p.vF;
    window.__frames(36);
    r.v17 = p.vF;
    window.__key(key, false);
    return r;
  }, { on, off, on2, key });
}

// 1. Demasiado pronto: motor ahogado
const a = await salida({ on: 3.5 });
check('pronto → motor ahogado', a.state === 'race' && a.msg === '¡MOTOR AHOGADO!' && a.stall > 1.1 && a.boost === 0 && Math.abs(a.v11) < 0.5 && a.v17 > 3, a);
// 2. Justo tras el «2»: salida perfecta
const b = await salida({ on: 1.9 });
check('justo tras el 2 → salida perfecta', b.msg === '¡SALIDA PERFECTA!' && b.boost > 1.7 && b.stall === 0, b);
// 3. Tarde: buena salida
const c = await salida({ on: 1.0 });
check('tarde → buena salida', c.msg === '¡BUENA SALIDA!' && b.boost > 1.7 && c.boost > 0.7 && c.boost < 0.85 && c.stall === 0, c);
// 4. Sin acelerar
const d = await salida({});
check('sin acelerar → salida normal', d.boost === 0 && d.stall === 0 && !/SALIDA|AHOGADO/.test(d.msg), d);
// 5. Pronto, suelta y vuelve a pulsar en la ventana
const e = await salida({ on: 3.0, off: 2.3, on2: 1.85 });
check('pronto, suelta y vuelve a pulsar → perfecta', e.msg === '¡SALIDA PERFECTA!' && e.boost > 1.7 && e.stall === 0, e);
// 6. Pronto y suelta antes del «¡YA!» → nada
const f = await salida({ on: 3.0, off: 1.0 });
check('pronto y suelta antes del ¡YA! → normal', f.boost === 0 && f.stall === 0, f);

// 7. Mando: el gatillo por debajo de 0,3 no cuenta; por encima, sí
const m = await ev(() => {
  const g = window.__mm;
  window.__padOn = true;
  window.__start(1);
  const p = g.views[0].player;
  window.__until(3.5); window.__pad.buttons[7] = { pressed: false, value: 0.2 };
  window.__until(1.8); window.__pad.buttons[7] = { pressed: true, value: 0.6 };
  window.__until(0); window.__frames(1);
  const r = { msg: window.__msg(), boost: p.boost, stall: p.stall };
  window.__pad.buttons[7] = { pressed: false, value: 0 };
  window.__padOn = false;
  window.__frames(1);
  return r;
});
check('mando: gatillo suave no ahoga, a fondo tras el 2 es perfecta', m.msg === '¡SALIDA PERFECTA!' && m.stall === 0 && m.boost > 1.7, m);

// 8. Piloto automático: los humanos salen normal
const ap = await ev(() => {
  const g = window.__mm;
  window.__start(1);
  g.autopilot = true;
  const p = g.views[0].player;
  window.__until(3.5); window.__key('ArrowUp', true);
  window.__until(0); window.__frames(1);
  window.__key('ArrowUp', false);
  const r = { boost: p.boost, stall: p.stall };
  g.autopilot = false;
  return r;
});
check('piloto automático: salida normal', ap.stall === 0 && ap.boost === 0, ap);

// 9. Dos jugadores: J1 ahogado y J2 perfecto a la vez
const two = await ev(() => {
  const g = window.__mm;
  window.__start(2);
  window.__until(3.4); window.__key('KeyW', true);
  window.__until(1.9); window.__key('ArrowUp', true);
  window.__until(0); window.__frames(1);
  const [p1, p2] = g.views.map((v) => v.player);
  const r = { views: g.views.length, m1: window.__msg(0), m2: window.__msg(1), s1: p1.stall, b1: p1.boost, s2: p2.stall, b2: p2.boost };
  window.__frames(60);
  r.v1 = p1.vF; r.v2 = p2.vF;
  window.__key('KeyW', false); window.__key('ArrowUp', false);
  return r;
});
check('2 jugadores: J1 ahogado y J2 perfecto', two.views === 2 && two.m1 === '¡MOTOR AHOGADO!' && two.s1 > 1 && two.b1 === 0
  && two.m2 === '¡SALIDA PERFECTA!' && two.b2 > 1.7 && two.s2 === 0 && Math.abs(two.v1) < 0.5 && two.v2 > 10, two);

// 10. Cámara sin tirones: desplazamiento entre fotogramas consecutivos sin picos
async function camara(mode, label) {
  const r = await ev((mode) => {
    const g = window.__mm;
    window.__start(mode);
    window.__cams = [];
    window.__crash = false;
    // al acabar la vuelta la cámara está justo en la de persecución
    window.__until(3.1);
    const ends = g.views.map((v) => g.chaseTarget(v, v.player).want.distanceTo(v.camPos));
    window.__until(1.9);
    for (const k of ['KeyW', 'ArrowUp']) window.__key(k, true);
    window.__until(0);
    // 0,75 s de carrera con salida perfecta (antes de alcanzar al camión de delante)
    window.__frames(45);
    for (const k of ['KeyW', 'ArrowUp']) window.__key(k, false);
    const res = [];
    const nv = window.__cams[0].length;
    for (let j = 0; j < nv; j++) {
      const d = [];
      for (let i = 1; i < window.__cams.length; i++) {
        const A = window.__cams[i - 1][j], B = window.__cams[i][j];
        d.push(Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]));
      }
      let jump = 0, at = 0;
      for (let i = 1; i < d.length; i++) { const x = Math.abs(d[i] - d[i - 1]); if (x > jump) { jump = x; at = i; } }
      // fotogramas de la cuenta (desde el «3») con la cámara quieta
      const nIntro = Math.round((4.7 - 3.0) * 60);
      const still = Math.max(...d.slice(nIntro, nIntro + 150));
      res.push({ max: Math.max(...d), jump, at, still, frames: d.length });
    }
    return { res, ends };
  }, mode);
  for (const [j, x] of r.res.entries()) {
    x.end = r.ends[j];
    check(`cámara ${label} J${j + 1}: sin tirones`, x.jump < 0.03 && x.max < 1.0 && x.still < 1e-6 && x.end < 1e-6, x);
  }
  return r;
}
await camara(1, '1 jugador');
await camara(2, '2 jugadores');
await page.setViewport({ width: 420, height: 820 });
await ev(() => window.dispatchEvent(new Event('resize')));
await camara(1, 'vertical');
await page.setViewport({ width: 1280, height: 720 });
await ev(() => window.dispatchEvent(new Event('resize')));

// 11. g.countdown = 0.01 sigue saltando la salida (y simulate también)
const skip = await ev(() => {
  const g = window.__mm;
  window.__start(1);
  g.countdown = 0.01;
  g.frame(1 / 60); g.frame(1 / 60);
  const r = { state: g.state, stall: g.views[0].player.stall };
  window.__start(1);
  g.simulate(0.5);
  r.sim = g.state;
  return r;
});
check('g.countdown = 0.01 salta la salida', skip.state === 'race' && skip.stall === 0 && skip.sim === 'race', skip);

// Capturas de la secuencia
if (shots) {
  const seq = async (mode, pre, marks) => {
    await ev((mode) => { window.__start(mode); }, mode);
    for (const [c, name, fn] of marks) {
      await ev((c, fn) => { window.__until(c); if (fn) (new Function('g', fn))(window.__mm); }, c, fn || null);
      if (name) await shot(pre + name);
    }
  };
  await seq(1, '40-salida-', [
    [4.6, 'vuelta-1'], [4.2, 'vuelta-2'], [3.85, 'vuelta-3'], [3.5, 'vuelta-4'], [3.2, 'vuelta-5'],
    [2.95, 'tres'],
    [2.6, null, "window.__key('ArrowUp', true)"], [0.9, 'humo-pronto'],
    [0, null], [-1, 'ahogado', 'window.__frames(20)'],
  ]);
  await ev(() => window.__key('ArrowUp', false));
  await seq(1, '41-salida-', [
    [1.85, null, "window.__key('ArrowUp', true)"], [1.0, 'humo-bueno'],
    [0, null], [-1, 'perfecta', 'window.__frames(20)'],
  ]);
  await ev(() => window.__key('ArrowUp', false));
  await seq(2, '42-salida-2j-', [
    [4.2, 'vuelta'], [2.95, 'tres'],
    [2.6, null, "window.__key('KeyW', true)"], [1.85, null, "window.__key('ArrowUp', true)"],
    [0, null], [-1, 'ahogado-y-perfecta', 'window.__frames(20)'],
  ]);
  await ev(() => { window.__key('KeyW', false); window.__key('ArrowUp', false); });
  await page.setViewport({ width: 420, height: 820 });
  await ev(() => window.dispatchEvent(new Event('resize')));
  await seq(1, '43-salida-vertical-', [[4.4, 'vuelta-1'], [3.9, 'vuelta-2'], [2.95, 'tres']]);
}

if (errors.length) { console.log(errors.join('\n')); fails.push('errores en la consola'); }
await browser.close();
console.log(fails.length ? 'Salida: FALLO (' + fails.join('; ') + ')' : 'Salida: OK');
process.exit(fails.length ? 1 : 0);
