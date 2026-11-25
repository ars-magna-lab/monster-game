// Prueba del modo campeonato: copa completa de 1 vuelta por carrera con piloto automático,
// pasando las pantallas con un mando simulado. Después, una carrera suelta y una copa a dos jugadores.
// Uso: node tools/copa.mjs [carpeta de capturas]
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
page.setDefaultTimeout(900000);
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
await page.goto('file://' + resolve(root, 'index.html'));
await page.waitForFunction(() => window.__mm, { timeout: 180000 });

const COPA = ['clasico', 'selva', 'nieve', 'ciudad', 'volcan'];
const POINTS = [10, 7, 5, 3, 2, 1];
const A = 0, B = 1, UP = 12, DOWN = 13, LEFT = 14, RIGHT = 15;

// Mando falso y bucle parado: los fotogramas se avanzan a mano con g.frame()
await page.evaluate(() => {
  const g = window.__mm;
  g.loop = (t) => { requestAnimationFrame((x) => g.loop(x)); g.last = t; };
  const pad = { index: 0, connected: true, timestamp: 0, buttons: [...Array(17)].map(() => ({ pressed: false, value: 0 })), axes: [0, 0, 0, 0] };
  Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => [{ ...pad, timestamp: performance.now() }] });
  window.__f = (n = 1) => { for (let i = 0; i < n; i++) g.frame(1 / 60); };
  window.__btn = (i, on) => { pad.buttons[i] = { pressed: on, value: on ? 1 : 0 }; };
  window.__tap = (i, n = 1) => { for (let k = 0; k < n; k++) { window.__btn(i, true); window.__f(1); window.__btn(i, false); window.__f(1); } };
  window.__focus = () => [...document.querySelectorAll('.focus')].map((e) => e.id || e.className).join(' ');
  window.__vis = (id) => { const e = document.getElementById(id); return !!e && e.getClientRects().length > 0; };
  // corre la carrera actual con piloto automático hasta que salen los resultados
  window.__race = () => {
    g.autopilot = true;
    if (g.state === 'countdown') g.countdown = 0.01;
    for (let i = 0; i < 60 && g.state !== 'finished'; i++) g.simulate(5);
    const st = g.state;
    g.autopilot = false;
    g.resultsT = 0.01;
    window.__f(2);
    return st;
  };
  // estado del campeonato visto desde fuera
  window.__cup = () => {
    const c = g.cup;
    if (!c) return null;
    const rows = [...document.querySelectorAll('#cup-table tr')].map((tr) => tr.dataset.id);
    const race = [...document.querySelectorAll('#res-table tr')].map((tr) => tr.lastElementChild.textContent);
    return { round: c.round, table: JSON.parse(JSON.stringify(c.table)), rows, race, humans: c.humans };
  };
});
const ev = (fn, ...args) => page.evaluate(fn, ...args);
const shot = async (name) => { await page.screenshot({ path: resolve(out, name + '.png') }); console.log('captura', name); };
const fails = [];
const check = (name, ok, info) => { console.log((ok ? 'ok   ' : 'MAL  ') + name + (ok ? '' : ' → ' + JSON.stringify(info))); if (!ok) fails.push(name); };

// ¿la general está ordenada por puntos, luego victorias, luego puesto en la última carrera?
const ordered = (cup) => cup.rows.every((id, i) => {
  if (i === 0) return true;
  const a = cup.table[cup.rows[i - 1]], b = cup.table[id];
  return a.pts > b.pts || (a.pts === b.pts && (a.wins > b.wins || (a.wins === b.wins && a.last < b.last)));
});

// ---------------------------------------------------------------- un jugador
await ev(() => { localStorage.removeItem('megamonstruos.records'); window.__mm.records = {}; window.__mm.goTitle(); window.__f(2); });
await ev((A) => window.__tap(A), A);
// fila «Modo» (la segunda) y a la derecha: campeonato
const sel = await ev(([DOWN, RIGHT]) => {
  const g = window.__mm;
  g.settings.laps = 1; g.refreshOptions();
  window.__tap(DOWN);
  const foco = window.__focus();
  window.__tap(RIGHT);
  return { state: g.state, foco, cup: g.settings.cup, circuito: window.__vis('circuit-opts'), recorrido: document.getElementById('cup-route').textContent, record: document.getElementById('truck-record').textContent, guardado: JSON.parse(localStorage.getItem('megamonstruos.ajustes')).cup };
}, [DOWN, RIGHT]);
await shot('50-copa-seleccion-1j');
check('selección: fila Modo y campeonato', sel.state === 'select' && /opt-cup/.test(sel.foco) && sel.cup === true && !sel.circuito && /Valle/.test(sel.recorrido) && /Copas ganadas/.test(sel.record) && sel.guardado === true, sel);

// abajo hasta «¡A correr!» y A
const arranque = await ev(([DOWN, A]) => { window.__tap(DOWN, 8); const foco = window.__focus(); window.__tap(A); const g = window.__mm; return { foco, state: g.state, circuit: g.circuit.id }; }, [DOWN, A]);
// si había otro circuito cargado, primero sale el aviso y luego la carga
if (arranque.state === 'cupnext') await ev(() => window.__f(3));
const cuenta = await ev(() => {
  const g = window.__mm;
  g.countdown = 3.2; window.__f(2);
  return { state: g.state, circuit: g.circuit.id, banner: window.__vis('cup-banner') ? document.getElementById('cup-banner').textContent : '' };
});
await shot('52-copa-cuenta-atras');
check('arranca la copa en Valle con rótulo', arranque.foco === 'btn-start' && cuenta.state === 'countdown' && cuenta.circuit === 'clasico' && /CARRERA 1 DE 5/.test(cuenta.banner), { arranque, cuenta });

let total = 0;
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    // pausa → «Reiniciar carrera»: repite solo esta carrera, sin tocar los puntos
    const re = await ev(([DOWN, A]) => {
      const g = window.__mm;
      g.countdown = 0.01; window.__f(2);
      g.autopilot = true; g.simulate(8); g.autopilot = false;
      g.pause(); window.__f(1);
      window.__tap(DOWN); const foco = window.__focus(); window.__tap(A);
      const pts = Object.values(g.cup.table).reduce((s, e) => s + e.pts, 0);
      return { foco, state: g.state, circuit: g.circuit.id, round: g.cup.round, pts, t: g.raceTime };
    }, [DOWN, A]);
    check('pausa: reiniciar carrera en la copa', re.foco === 'btn-restart' && re.state === 'countdown' && re.circuit === COPA[2] && re.round === 2 && re.pts === 56 && re.t === 0, re);
  }
  const st = await ev(() => window.__race());
  const r = await ev(() => ({ circuit: window.__mm.circuit.id, foco: window.__focus(), next: document.getElementById('btn-cup-next').textContent, round: document.getElementById('res-round').textContent, again: window.__vis('btn-again'), quit: window.__vis('btn-cup-quit'), cup: window.__cup() }));
  total += 28;
  const gained = Object.values(r.cup.table).reduce((s, e) => s + e.gained, 0);
  const sum = Object.values(r.cup.table).reduce((s, e) => s + e.pts, 0);
  const raceOk = r.cup.race.join() === POINTS.map((p) => '+' + p).join();
  check(`carrera ${i + 1}: ${r.circuit}, 28 puntos (total ${sum}), general ordenada`,
    st === 'finished' && r.circuit === COPA[i] && gained === 28 && sum === total && raceOk && r.cup.rows.length === 6 && ordered(r.cup)
    && r.foco === 'btn-cup-next' && !r.again && r.quit && new RegExp(`CARRERA ${i + 1} DE 5`).test(r.round) && r.next === (i === 4 ? 'Ver podio' : 'Siguiente circuito'), r);
  if (i === 1) await shot('53-copa-resultados');
  if (i < 4) {
    const nx = await ev((A) => { window.__btn(A, true); window.__f(1); window.__btn(A, false); const g = window.__mm; return { state: g.state, txt: document.getElementById('cupnext-name').textContent }; }, A);
    if (i === 1) await shot('54-copa-siguiente');
    const tras = await ev(() => { window.__f(3); return { state: window.__mm.state, circuit: window.__mm.circuit.id }; });
    check(`aviso y carga de ${COPA[i + 1]}`, nx.state === 'cupnext' && /^Siguiente: /.test(nx.txt) && tras.state === 'countdown' && tras.circuit === COPA[i + 1], { nx, tras });
  }
}

// podio
const final = await ev(() => window.__cup());
const pod = await ev((A) => {
  window.__tap(A);
  const g = window.__mm;
  window.__f(2);
  return {
    state: g.state, foco: window.__focus(), title: document.getElementById('podium-title').textContent,
    sub: document.getElementById('podium-sub').textContent,
    trucks: g.podium.trucks.map((t) => g.show.trucks.indexOf(t)).map((i) => g.vehicles[i].def.id),
    rows: [...document.querySelectorAll('#podium-table tr')].map((tr) => tr.dataset.id),
    rec: JSON.parse(localStorage.getItem('megamonstruos.records') || '{}'),
    recTxt: document.getElementById('podium-record').textContent,
    // con calidad «Baja» (la de SwiftShader en «Auto») el podio también lleva materiales baratos
    baratos: (() => { if (!g.qualityLevel().cheap) return true; let ok = true; g.podium.group.traverse((o) => { if (o.isMesh && o.material.isMeshStandardMaterial) ok = false; }); return ok; })(),
  };
}, A);
await shot('55-copa-podio');
const champHuman = final.humans.includes(final.rows[0]);
const humanBest = Math.max(...final.humans.map((id) => final.table[id].pts));
check('podio con los tres primeros', pod.state === 'podium' && pod.baratos && pod.trucks.join() === final.rows.slice(0, 3).join() && pod.rows.join() === final.rows.join() && pod.foco === 'btn-cup-again'
  && (champHuman ? /^¡CAMPEÓN: JUGADOR 1!$/.test(pod.title) : /^Campeón: /.test(pod.title) && /Has quedado/.test(pod.sub)), { pod, final });
check('récords de copa', (pod.rec.copas || 0) === (champHuman ? 1 : 0) && pod.rec.copaMejor === humanBest && /Copas ganadas/.test(pod.recTxt), pod.rec);

// «Menú» vuelve a la portada sin restos de la copa
const menu = await ev(([RIGHT, A]) => {
  window.__tap(RIGHT); const foco = window.__focus(); window.__tap(A);
  const g = window.__mm;
  return { foco, state: g.state, cup: g.cup, circuit: g.circuit.id, want: g.settings.circuit, podio: g.podium.group.visible, mesa: g.show.table.visible };
}, [RIGHT, A]);
check('Menú vuelve a la portada', menu.foco === 'btn-cup-menu' && menu.state === 'title' && menu.cup === null && menu.circuit === menu.want && !menu.podio && menu.mesa, menu);

// carrera suelta normal después del campeonato (con revancha)
const suelta = await ev(([A, DOWN, LEFT]) => {
  const g = window.__mm;
  window.__tap(A);
  window.__tap(DOWN); window.__tap(LEFT);
  const cup = g.settings.cup;
  const circuito = window.__vis('circuit-opts');
  g.confirmSelect();
  return { cup, circuito, state: g.state, banner: window.__vis('cup-banner') };
}, [A, DOWN, LEFT]);
const st2 = await ev(() => window.__race());
const res2 = await ev(() => ({
  state: window.__mm.state, foco: window.__focus(), again: window.__vis('btn-again'), menu: window.__vis('btn-menu'), next: window.__vis('btn-cup-next'), general: window.__vis('cup-general'), round: window.__vis('res-round'),
  cols: document.querySelector('#res-table tr').cells.length,
}));
await shot('57-carrera-suelta-resultados');
const rev = await ev((A) => { window.__tap(A); const g = window.__mm; return { state: g.state, cup: g.cup, banner: window.__vis('cup-banner') }; }, A);
check('carrera suelta y revancha sin restos', suelta.cup === false && suelta.circuito && suelta.state === 'countdown' && !suelta.banner && st2 === 'finished'
  && res2.foco === 'btn-again' && res2.again && res2.menu && !res2.next && !res2.general && !res2.round && res2.cols === 3 && rev.state === 'countdown' && rev.cup === null && !rev.banner, { suelta, res2, rev });

// ---------------------------------------------------------------- dos jugadores, hasta la segunda carrera
const dos = await ev(() => {
  const g = window.__mm;
  g.goTitle();
  g.goSelect(2);
  g.settings.cup = true; g.settings.laps = 1; g.refreshOptions(); g.updateSelect();
  g.confirmSelect();
  window.__f(2);
  return { step: g.selectStep };
});
await shot('51-copa-seleccion-2j');
const dos1 = await ev(() => {
  const g = window.__mm;
  g.confirmSelect();
  if (g.state === 'cupnext') window.__f(3);
  g.countdown = 3.2; window.__f(2);
  return { state: g.state, circuit: g.circuit.id, humans: g.humans.length, cupHumans: g.cup.humans.length, banner: window.__vis('cup-banner'), two: document.body.classList.contains('two') };
});
await shot('58-copa-dos-cuenta-atras');
check('dos jugadores: arranca la copa', dos.step === 1 && dos1.state === 'countdown' && dos1.circuit === 'clasico' && dos1.humans === 2 && dos1.cupHumans === 2 && dos1.banner && dos1.two, { dos, dos1 });
for (let i = 0; i < 2; i++) {
  const st = await ev(() => window.__race());
  const r = await ev(() => ({ circuit: window.__mm.circuit.id, foco: window.__focus(), cup: window.__cup(), tags: document.querySelectorAll('#cup-table .tag').length }));
  const sum = Object.values(r.cup.table).reduce((s, e) => s + e.pts, 0);
  check(`dos jugadores, carrera ${i + 1}: ${r.circuit}, ${sum} puntos`, st === 'finished' && r.circuit === COPA[i] && sum === 28 * (i + 1) && ordered(r.cup) && r.tags === 2 && r.foco === 'btn-cup-next', r);
  if (i === 1) { await shot('56-copa-dos-resultados'); break; }
  await ev((A) => { window.__tap(A); window.__f(3); }, A);
}
// «Abandonar» vuelve al menú
const aband = await ev(([DOWN, A]) => { window.__tap(DOWN); const foco = window.__focus(); window.__tap(A); const g = window.__mm; return { foco, state: g.state, cup: g.cup, circuit: g.circuit.id, want: g.settings.circuit }; }, [DOWN, A]);
check('Abandonar vuelve al menú', aband.foco === 'btn-cup-quit' && aband.state === 'title' && aband.cup === null && aband.circuit === aband.want, aband);

console.log('Final 1J:', final.rows.map((id) => `${id} ${final.table[id].pts}`).join(' · '));
console.log(errors.length ? 'ERRORES:\n' + errors.join('\n') : 'Sin errores en consola');
const ok = !fails.length && !errors.some((e) => e.startsWith('[pageerror]') || e.startsWith('[error]'));
console.log(ok ? 'Copa: OK' : 'Copa: FALLA (' + (fails.join(', ') || 'errores en consola') + ')');
await browser.close();
process.exit(ok ? 0 : 1);
