// Validador de trazados, sin navegador. Comprueba en cada circuito que cierra, que gira 360°,
// que no hay partes de la pista demasiado cerca entre sí (ni de la montaña del túnel), que
// cada elemento cabe en su tramo y que no se pisan unos a otros. Saca la longitud, el orden de
// los obstáculos y un dibujo del trazado (ASCII aquí y SVG en shots/trazado-<id>.svg).
// Uso: node tools/trazado.mjs [id…] [--sin-dibujo]
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

process.removeAllListeners('warning'); // el aviso de «módulo sin tipo» de src/*.js no aporta nada
const { Track, LIMIT, ROAD_HALF } = await import('../src/track.js');
const { CIRCUITS, normPlaces } = await import('../src/circuits.js');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const ids = argv.filter((a) => !a.startsWith('--'));
const draw = !argv.includes('--sin-dibujo');

const MIN_GAP = 100;     // separación mínima entre ejes de partes no contiguas
const NEAR_ALONG = 160;  // a partir de cuántos metros de recorrido dos puntos se consideran «no contiguos»
const MOUNTAIN = 75;     // la montaña del túnel ocupa 75 m a cada lado del eje

// Avisos de «at(tramo, m)» fuera de su tramo
let atErrors = [];
const origAt = Track.prototype.at;
Track.prototype.at = function (k, rel) {
  const g = this.segs[k];
  if (!g) atErrors.push(`tramo ${k} no existe`);
  else if (rel < -0.01 || rel > g.length + 0.01) atErrors.push(`tramo ${k} +${rel} m se sale (mide ${g.length.toFixed(0)} m)`);
  return origAt.call(this, k, rel);
};

let failures = 0;
const list = ids.length ? CIRCUITS.filter((c) => ids.includes(c.id)) : CIRCUITS;
for (const c of list) {
  const errs = [], warns = [];
  atErrors = [];
  let t;
  try {
    t = new Track(c);
  } catch (e) {
    console.log(`\n### ${c.id}: ${e.message}`);
    failures++;
    continue;
  }
  const L = t.length;
  const wrap = (s) => t.wrap(s);
  const along = (a, b) => { const d = Math.abs(wrap(a) - wrap(b)); return Math.min(d, L - d); };
  // ¿se tocan los intervalos [a0,a1] y [b0,b1]? (con la vuelta)
  const overlap = (a0, a1, b0, b1) => {
    for (const k of [-L, 0, L]) if (a0 < b1 + k && b0 + k < a1) return true;
    return false;
  };

  // --- giro total y tramos resueltos
  const turn = c.layout.reduce((a, g) => a + (g.type === 'A' ? g.ang : 0), 0);
  if (Math.abs(turn - 360) > 1e-6) errs.push(`el giro total es ${turn}°, no 360°`);
  const solved = t.segs.filter((g) => g.solve).map((g) => `${g.solve}=${g.length.toFixed(0)} m`).join(', ');

  // --- partes de la pista demasiado cerca
  const step = 4;
  const P = [];
  for (let s = 0; s < L; s += step) P.push({ s, ...t.pointAt(s) });
  let worst = Infinity, worstAt = null;
  for (let i = 0; i < P.length; i++) {
    for (let j = i + 1; j < P.length; j++) {
      if (along(P[i].s, P[j].s) < NEAR_ALONG) continue;
      const dd = Math.hypot(P[i].x - P[j].x, P[i].z - P[j].z);
      if (dd < worst) { worst = dd; worstAt = [P[i].s, P[j].s]; }
    }
  }
  if (worst < MIN_GAP - 0.5) errs.push(`dos partes de la pista a ${worst.toFixed(0)} m (s=${worstAt[0].toFixed(0)} y s=${worstAt[1].toFixed(0)}); mínimo ${MIN_GAP} m`);

  // --- túnel: uno, en curva amplia, y su montaña sin pisar otra parte de la pista
  const tun = t.tunnel;
  if (!tun || Array.isArray(tun)) errs.push('tiene que haber exactamente un túnel');
  else {
    for (const g of t.segs) {
      if (g.type === 'A' && overlap(g.s0, g.s0 + g.length, tun.s0, tun.s1) && g.r < 90) errs.push(`el túnel pasa por una curva de radio ${g.r} m (< 90 m: la montaña se pliega)`);
    }
    let bad = null;
    for (let s = tun.s0; s <= tun.s1; s += 2) {
      const T0 = t.pointAt(s);
      for (const q of P) {
        if (q.s > tun.s0 - 40 && q.s < tun.s1 + 40) continue;
        if (along(q.s, tun.s0) < 40 || along(q.s, tun.s1) < 40) continue;
        const dx = q.x - T0.x, dz = q.z - T0.z;
        const a = dx * T0.tx + dz * T0.tz, lat = dx * T0.rx + dz * T0.rz;
        if (Math.abs(a) < 2.5 && Math.abs(lat) < MOUNTAIN + LIMIT) { bad = [s, q.s, lat]; break; }
      }
      if (bad) break;
    }
    if (bad) errs.push(`la montaña del túnel (s=${bad[0].toFixed(0)}) pisa la pista en s=${bad[1].toFixed(0)} (a ${Math.abs(bad[2]).toFixed(0)} m del eje)`);
  }

  // --- elementos con su intervalo de s
  const PL = normPlaces(c.places);
  const A = (k, rel) => t.at(k, rel);
  const E = []; // { kind, s0, s1, label }
  const add = (kind, s0, s1, label = kind, extra = {}) => E.push({ kind, s0, s1, label, ...extra });
  for (const p of t.pits) add('foso', p.s0, p.s1, `foso ${p.liquid || 'seco'}${p.bridges.length ? ` (${p.bridges.length} puente${p.bridges.length > 1 ? 's' : ''})` : ''}`, { p });
  for (const r of t.ramps) add('rampa', r.s0, r.s1, r.d0 <= -ROAD_HALF && r.d1 >= ROAD_HALF ? 'rampa' : 'rampa lateral');
  for (const k of t.lakes) add('lago', k.s0, k.s1, 'lago helado');
  if (tun) add('túnel', tun.s0, tun.s1, `túnel ${Math.round(tun.s1 - tun.s0)} m`);
  for (const p of t.plateaus) { add('pendiente', p.a, p.b, 'subida'); add('pendiente', p.c, p.d, 'bajada'); }
  for (const w of t.whoops) add('baches', w.a, w.b);
  for (const m of t.mud) add('mancha', m.s - m.rs, m.s + m.rs);
  // zonas de las mecánicas propias (lluvia de rocas, cruces con tráfico) y las aún reservadas
  for (const r of t.reserved) add('zona', r.s0, r.s1, `reservado: ${r.kind}`, { r });
  for (const m of t.meteors) {
    add('zona', m.s0, m.s1, 'lluvia de rocas');
    if (m.sign !== undefined) add('cartel', m.sign, m.sign, 'cartel lluvia de rocas', { of: m.s0 });
  }
  for (const c of t.crossings) {
    add('zona', c.s0, c.s1, 'cruce');
    if (c.sign !== undefined) add('cartel', c.sign, c.sign, 'cartel cruce', { of: c.s0 });
  }
  for (const RO of PL.rollers) {
    const ss = RO.list.map(([rel]) => A(RO.seg, rel));
    add('rodillos', Math.min(...ss) - 6, Math.max(...ss) + 6, `rodillos ×${ss.length}`);
    if (RO.sign) add('cartel', A(...RO.sign), A(...RO.sign), 'cartel rodillos', { of: Math.min(...ss) - 6 });
  }
  for (const B of PL.balls) {
    const g = t.segs[B.seg];
    const rel = B.frac !== undefined ? g.length * B.frac : B.rel;
    if (rel < 0 || rel > g.length) errs.push(`bola en tramo ${B.seg} +${rel} se sale`);
    const s = t.snap(g.s0 + rel);
    add('bola', s - 5, s + 5, c.theme.swing === 'log' ? 'tronco colgante' : 'bola');
  }
  for (const n of PL.nets) { const s = A(...n); add('red', s - 6, s + 6); }
  for (const CR of PL.crush) {
    const ss = CR.rows.map(([rel]) => A(CR.seg, rel));
    add('aplastar', Math.min(...ss) - 3, Math.max(...ss) + 3, `${c.theme.crush === 'snowman' ? 'muñecos' : 'coches'} ×${CR.rows.reduce((a, r) => a + r[1].length, 0)}`);
    if (CR.sign) add('cartel', A(...CR.sign), A(...CR.sign), 'cartel aplastar', { of: Math.min(...ss) - 3 });
  }
  const barrels = [];
  for (const BA of PL.barrels) {
    const ss = BA.rows.map(([rel]) => A(BA.seg, rel));
    add('barriles', Math.min(...ss) - 3, Math.max(...ss) + 3, `barriles ×${BA.rows.reduce((a, r) => a + r[1].length, 0)}`);
    for (const [rel, ds] of BA.rows) for (const d of ds) barrels.push({ s: A(BA.seg, rel), d });
  }
  for (const [k, rel] of PL.boxes) { const s = A(k, rel); add('cajas', s - 2, s + 2); }
  for (const [k, rel, d] of PL.turbos) { const s = A(k, rel); add('turbo', s - 4, s + 4, 'turbo', { d }); }
  for (const [k, rel] of PL.patchSigns) { const s = A(k, rel); add('cartel', s, s, 'cartel manchas'); }
  for (const p of t.pits) add('cartel', p.s0 - 30, p.s0 - 30, 'cartel foso', { of: p.s0 });
  for (const k of t.lakes) add('cartel', k.s0 - 25, k.s0 - 25, 'cartel lago', { of: k.s0 });
  errs.push(...atErrors);

  const pairs = (ka, kb, why) => {
    for (const a of E) if (a.kind === ka) for (const b of E) {
      if (b === a || b.kind !== kb) continue;
      if (ka === kb && E.indexOf(b) < E.indexOf(a)) continue;
      if (overlap(a.s0, a.s1, b.s0, b.s1)) errs.push(`${a.label} (${a.s0.toFixed(0)}–${a.s1.toFixed(0)}) y ${b.label} (${b.s0.toFixed(0)}–${b.s1.toFixed(0)}) se pisan${why ? ': ' + why : ''}`);
    }
  };
  const HARD = ['foso', 'lago', 'baches', 'rodillos', 'bola', 'red', 'aplastar', 'barriles', 'zona'];
  for (const k of ['foso', 'túnel', 'lago', 'pendiente', 'mancha', ...HARD]) pairs('foso', k);
  for (const k of ['lago', 'baches', 'mancha', 'rodillos', 'bola', 'red', 'aplastar', 'barriles', 'zona', 'pendiente']) pairs('rampa', k);
  for (const k of ['túnel', 'baches', 'rodillos', 'bola', 'red', 'barriles', 'zona', 'pendiente']) pairs('lago', k);
  for (const [i, ka] of ['rodillos', 'bola', 'red', 'aplastar', 'barriles', 'baches'].entries()) {
    for (const kb of ['rodillos', 'bola', 'red', 'aplastar', 'barriles', 'baches'].slice(i)) pairs(ka, kb);
  }
  for (const k of ['bola', 'red']) pairs(k, 'túnel', 'el pórtico no cabe en el túnel');
  for (const k of ['rodillos', 'bola', 'red', 'aplastar', 'barriles', 'baches', 'mancha', 'cajas', 'turbo', 'túnel', 'pendiente', 'zona']) pairs('zona', k, 'la lluvia de rocas y los cruces tienen su tramo para ellos solos');
  // rampas pegadas a su foso, no dentro
  for (const r of E.filter((e) => e.kind === 'rampa')) {
    const p = t.pits.find((q) => Math.abs(q.s0 - r.s1) < 1.5);
    if (!p) warns.push(`${r.label} en ${r.s0.toFixed(0)} no acaba en ningún foso`);
  }
  // fosos: dentro o fuera de una meseta, nunca en la cuesta; aterrizaje libre; algo para cruzarlo
  for (const p of t.pits) {
    const land = [p.s1, p.s1 + 25];
    for (const e of E) {
      if (['rodillos', 'bola', 'red', 'aplastar', 'barriles', 'baches', 'foso', 'mancha'].includes(e.kind) && e.p !== p && overlap(land[0], land[1], e.s0, e.s1)) {
        errs.push(`${e.label} en la zona de aterrizaje del foso (${p.s0.toFixed(0)}–${p.s1.toFixed(0)})`);
      }
    }
    const ramps = t.ramps.filter((r) => Math.abs(r.s1 - p.s0) < 1.5);
    if (!ramps.length && !p.bridges.length) errs.push(`foso en ${p.s0.toFixed(0)} sin rampa ni puente`);
    for (const [b0, b1] of p.bridges) if (b0 < -LIMIT || b1 > LIMIT || b1 - b0 < 4.5) errs.push(`puente [${b0}, ${b1}] fuera de la pista o demasiado estrecho`);
  }
  // cajas y turbos fuera de fosos y rampas
  for (const e of E.filter((x) => x.kind === 'cajas' || x.kind === 'turbo')) {
    for (const f of E.filter((x) => x.kind === 'foso' || x.kind === 'rampa')) {
      if (overlap(e.s0, e.s1, f.s0 - 2, f.s1 + 2)) errs.push(`${e.label} en ${((e.s0 + e.s1) / 2).toFixed(0)} dentro de ${f.label}`);
    }
  }
  // carteles: con sitio, fuera del túnel y delante de lo que avisan
  const signs = E.filter((e) => e.kind === 'cartel');
  for (const sg of signs) {
    const s = sg.s0;
    if (tun && overlap(s - 8, s + 8, tun.s0, tun.s1)) errs.push(`${sg.label} en ${s.toFixed(0)} queda dentro de la montaña del túnel`);
    for (const e of E.filter((x) => x.kind === 'bola' || x.kind === 'red')) if (along(s, (e.s0 + e.s1) / 2) < 5) errs.push(`${sg.label} en ${s.toFixed(0)} choca con el pórtico de ${e.label}`);
    for (const o of signs) if (o !== sg && signs.indexOf(o) > signs.indexOf(sg) && along(s, o.s0) < 7) errs.push(`${sg.label} y ${o.label} en el mismo sitio (${s.toFixed(0)})`);
    if (sg.of !== undefined) {
      const gap = wrap(sg.of - s);
      if (gap > 70) errs.push(`${sg.label} en ${s.toFixed(0)} está a ${gap.toFixed(0)} m de lo que avisa (máx. 70)`);
    }
  }
  // cruces con tráfico: en recta (los coches cruzan en línea recta de lado a lado)
  for (const r of [...t.reserved.filter((q) => q.kind === 'cruce'), ...t.crossings]) {
    const g = t.segs.find((q) => r.s0 >= q.s0 - 0.5 && r.s1 <= q.s0 + q.length + 0.5);
    if (!g || g.type !== 'S') errs.push(`el cruce ${r.s0.toFixed(0)}–${r.s1.toFixed(0)} no está en una recta`);
  }
  // barriles: en grupos que encadenan (vecino a < 5 m) y con hueco para pasar
  const near = (a, b) => along(a.s, b.s) < 5 && Math.abs(a.d - b.d) < 5;
  const groups = [];
  const seen = new Set();
  for (const b of barrels) {
    if (seen.has(b)) continue;
    const gq = [b]; seen.add(b);
    for (let i = 0; i < gq.length; i++) for (const o of barrels) if (!seen.has(o) && near(gq[i], o)) { seen.add(o); gq.push(o); }
    groups.push(gq);
  }
  // (Valle Monstruo conserva sus barriles sueltos de siempre: ahí solo es un aviso)
  const barrelMsgs = c.id === 'clasico' ? warns : errs;
  for (const gq of groups) {
    if (gq.length < 2) barrelMsgs.push(`barril suelto en s=${gq[0].s.toFixed(0)} d=${gq[0].d}: no encadena`);
    let free = false;
    for (let d = -ROAD_HALF + 1.5; d <= ROAD_HALF - 1.5; d += 0.5) if (gq.every((b) => Math.abs(d - b.d) >= 3.6)) free = true;
    if (!free) barrelMsgs.push(`el grupo de barriles de s=${gq[0].s.toFixed(0)} cierra el paso`);
  }

  // --- informe
  const order = E.filter((e) => !['cartel', 'pendiente', 'cajas', 'turbo', 'mancha'].includes(e.kind)).sort((a, b) => a.s0 - b.s0);
  const mud = t.mud.length;
  console.log(`\n### ${c.id} (${c.name}${c.rev > 1 ? `, rev ${c.rev}` : ''}): ${L.toFixed(0)} m; ${solved}; separación mínima ${worst.toFixed(0)} m`);
  console.log('  ' + order.map((e) => `${e.label} @${e.s0.toFixed(0)}`).join(' → '));
  console.log(`  ${PL.turbos.length} turbos, ${PL.boxes.length} filas de cajas, ${mud} manchas, ${barrels.length} barriles en ${groups.length} grupos`);
  for (const w of warns) console.log('  aviso: ' + w);
  for (const e of errs) console.log('  ERROR: ' + e);
  if (errs.length) failures++;
  if (draw) {
    console.log(ascii(t, E));
    mkdirSync(resolve(root, 'shots'), { recursive: true });
    writeFileSync(resolve(root, `shots/trazado-${c.id}.svg`), svg(t, E, c));
  }
}
console.log(failures ? `\n${failures} circuito(s) con fallos` : '\nTodos los trazados son válidos');
process.exit(failures ? 1 : 0);

function bounds(t) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let i = 0; i < t.N; i++) { x0 = Math.min(x0, t.px[i]); x1 = Math.max(x1, t.px[i]); z0 = Math.min(z0, t.pz[i]); z1 = Math.max(z1, t.pz[i]); }
  return { x0, x1, z0, z1 };
}

// Dibujo en texto: «#» pista, «T» túnel, «O» foso, «~» lago, «S» salida
function ascii(t, E) {
  const { x0, x1, z0, z1 } = bounds(t);
  const W = 78, sc = (W - 1) / (x1 - x0), H = Math.ceil((z1 - z0) * sc * 0.5) + 1;
  const grid = Array.from({ length: H }, () => Array(W).fill(' '));
  const put = (s, ch) => {
    const p = t.pointAt(s);
    const cx = Math.round((p.x - x0) * sc), cz = Math.round((p.z - z0) * sc * 0.5);
    if (grid[cz] && grid[cz][cx] !== undefined) grid[cz][cx] = ch;
  };
  for (let s = 0; s < t.length; s += 2) put(s, '#');
  for (let s = t.tunnel.s0; s < t.tunnel.s1; s += 2) put(s, 'T');
  for (const k of t.lakes) for (let s = k.s0; s < k.s1; s += 2) put(s, '~');
  for (const p of t.pits) for (let s = p.s0; s < p.s1; s += 1) put(s, 'O');
  put(0, 'S');
  return grid.map((r) => '  ' + r.join('').trimEnd()).join('\n');
}

function svg(t, E, c) {
  const { x0, x1, z0, z1 } = bounds(t);
  const pad = 40, W = x1 - x0 + 2 * pad, H = z1 - z0 + 2 * pad;
  const pts = (a, b, st = 3) => { const r = []; for (let s = a; s <= b; s += st) { const p = t.pointAt(s); r.push(`${(p.x - x0 + pad).toFixed(1)},${(p.z - z0 + pad).toFixed(1)}`); } return r.join(' '); };
  const line = (a, b, col, w) => `<polyline points="${pts(a, b)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  const out = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}" width="${W.toFixed(0)}" height="${H.toFixed(0)}" style="background:#f4f1ea">`];
  out.push(line(0, t.length, '#444', 34), line(0, t.length, '#d9b98c', 26));
  out.push(line(t.tunnel.s0, t.tunnel.s1, '#666', 30));
  const col = { rodillos: '#e0a100', bola: '#c0392b', red: '#8e44ad', aplastar: '#27ae60', barriles: '#d35400', baches: '#7f8c8d', zona: '#2980b9' };
  for (const e of E) if (col[e.kind]) out.push(line(e.s0, e.s1, col[e.kind], 16));
  for (const k of t.lakes) out.push(line(k.s0, k.s1, '#9fd3f0', 28));
  for (const p of t.pits) out.push(line(p.s0, p.s1, p.liquid === 'lava' ? '#ff5a00' : p.water ? '#2bb3a0' : '#222', 30));
  const s0 = t.pointAt(0);
  out.push(`<circle cx="${(s0.x - x0 + pad).toFixed(1)}" cy="${(s0.z - z0 + pad).toFixed(1)}" r="14" fill="#fff" stroke="#000" stroke-width="4"/>`);
  out.push(`<text x="${pad}" y="${pad - 10}" font-size="28" font-family="sans-serif">${c.name} · ${t.length.toFixed(0)} m</text></svg>`);
  return out.join('\n');
}
