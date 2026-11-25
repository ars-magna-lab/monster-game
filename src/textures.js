// Texturas generadas con canvas: no hace falta ningún fichero externo.
import * as THREE from 'three';

let maxAniso = 4;
export function setAnisotropy(n) { maxAniso = n; }

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvasTex(w, h, draw, { repeat = true, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = maxAniso;
  return t;
}

function speckle(g, w, h, n, colors, rmin, rmax, r) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    const s = rmin + r() * (rmax - rmin);
    g.globalAlpha = 0.25 + r() * 0.5;
    g.fillRect(r() * w, r() * h, s, s);
  }
  g.globalAlpha = 1;
}

const cache = {};
// Texturas compartidas entre escenas (la caché de aquí y alguna otra guardada en su módulo):
// no se liberan al cambiar de circuito. Sus copias (clone) no cuentan como compartidas.
const sharedTex = new WeakSet();
export function keepTexture(t) { sharedTex.add(t); return t; }
export const isSharedTexture = (t) => sharedTex.has(t);
const once = (k, f) => cache[k] || (cache[k] = keepTexture(f()));

// Colores del circuito actual (los pone setTexTheme). Las texturas del terreno
// se guardan por circuito para no repetir el trabajo al volver a uno.
const DEFAULT_PAL = {
  id: 'clasico',
  edge: ['#5f7d34', '#4e6b2a', '#76923f', '#6b5a35', '#839b4a'],
  road: ['#9a7048', '#8a6240', '#a87d52', '#7c5638', '#b58a5c', '#6e4c30'],
  ruts: '#4a321e', lanes: false,
  curb: ['#d6261f', '#f4f4f4'],
  grass: ['#5c8a35', '#4f7a2c', '#6c9c3f', '#7aa94a', '#477026', '#83a650'],
  dirt: ['#7a5434', '#6a4629', '#8c6241', '#5a3a22', '#9b7150'],
  barrier: ['#d42a20', '#f2f2f2'],
  rock: ['#6d6862', '#5b5751', '#7c776f', '#4a4641', '#8a857c'],
  patch: [[70, 44, 22], [84, 55, 30], [120, 90, 60]],
  water: ['#2f6b5e', 'rgba(190,240,220,0.35)'],
};
let PAL = DEFAULT_PAL;
export function setTexTheme(pal) { PAL = { ...DEFAULT_PAL, ...pal }; }
const themed = (k, f) => once(k + '@' + PAL.id, f);

// Camino de tierra: u = ancho completo entre barreras, v = 12 m de pista
export const roadTex = () => themed('road', () => canvasTex(512, 512, (g, w, h) => {
  const r = rng(7);
  // arcén de hierba/tierra
  g.fillStyle = PAL.edge[0]; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 4000, PAL.edge.slice(1), 1, 4, r);
  // camino
  const x0 = Math.round(w * (4 / 30)), x1 = Math.round(w * (26 / 30));
  g.save();
  g.beginPath(); g.rect(x0, 0, x1 - x0, h); g.clip();
  g.fillStyle = PAL.road[0]; g.fillRect(x0, 0, x1 - x0, h);
  speckle(g, w, h, 9000, PAL.road.slice(1), 1, 5, r);
  g.restore();
  // líneas de carril (asfalto)
  if (PAL.lanes) {
    g.fillStyle = 'rgba(245,245,235,0.85)';
    for (const u of [1 / 3, 2 / 3]) g.fillRect(x0 + (x1 - x0) * u - 3, h * 0.1, 6, h * 0.4);
    g.fillRect(x0 + 6, 0, 5, h); g.fillRect(x1 - 11, 0, 5, h);
  }
  // roderas
  g.globalAlpha = 0.18; g.fillStyle = PAL.ruts;
  for (const u of [0.3, 0.38, 0.62, 0.7]) {
    for (let y = 0; y < h; y += 2) g.fillRect(w * u + Math.sin(y * 0.05) * 3, y, 9, 2);
  }
  g.globalAlpha = 1;
  // bordillos rojo/blanco
  const cw = 12, stripes = 8;
  for (let i = 0; i < stripes; i++) {
    g.fillStyle = PAL.curb[i % 2];
    g.fillRect(x0 - cw, (i * h) / stripes, cw, h / stripes);
    g.fillRect(x1, (i * h) / stripes, cw, h / stripes);
  }
}));

export const grassTex = () => themed('grass', () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(3);
  g.fillStyle = PAL.grass[0]; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 5000, PAL.grass.slice(1), 1, 3, r);
  if (PAL.tiles) {
    g.strokeStyle = 'rgba(0,0,0,0.18)'; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * w / 4, 0); g.lineTo(i * w / 4, h); g.moveTo(0, i * h / 4); g.lineTo(w, i * h / 4); g.stroke(); }
  }
}));

export const dirtTex = () => themed('dirt', () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(11);
  g.fillStyle = PAL.dirt[0]; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 6000, PAL.dirt.slice(1), 1, 5, r);
  g.globalAlpha = 0.15; g.fillStyle = '#3b2615';
  for (let y = 0; y < h; y += 16) g.fillRect(0, y + r() * 6, w, 2);
  g.globalAlpha = 1;
}));

export const barrierTex = () => themed('barrier', () => canvasTex(256, 64, (g, w, h) => {
  for (let i = 0; i < 4; i++) {
    g.fillStyle = PAL.barrier[i % 2];
    g.fillRect((i * w) / 4, 0, w / 4, h);
  }
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, h - 8, w, 8);
  g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, 0, w, 4);
  g.fillStyle = 'rgba(0,0,0,0.3)';
  for (let i = 0; i < 4; i++) g.fillRect((i * w) / 4, 0, 2, h);
}));

export const planksTex = () => once('planks', () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(5);
  const n = 8;
  for (let i = 0; i < n; i++) {
    const c = 120 + Math.floor(r() * 40);
    g.fillStyle = `rgb(${c + 40},${c},${Math.floor(c * 0.55)})`;
    g.fillRect(0, (i * h) / n, w, h / n - 3);
    g.fillStyle = 'rgba(60,35,10,0.3)';
    for (let k = 0; k < 6; k++) g.fillRect(0, (i * h) / n + r() * (h / n), w, 1);
    g.fillStyle = '#3a2410';
    g.fillRect(0, ((i + 1) * h) / n - 3, w, 3);
  }
  // flechas amarillas
  g.fillStyle = 'rgba(255,200,0,0.85)';
  for (const cx of [w * 0.25, w * 0.75]) {
    g.beginPath();
    g.moveTo(cx - 40, h * 0.75); g.lineTo(cx, h * 0.35); g.lineTo(cx + 40, h * 0.75);
    g.lineTo(cx + 22, h * 0.75); g.lineTo(cx, h * 0.5); g.lineTo(cx - 22, h * 0.75);
    g.closePath(); g.fill();
  }
}));

export const rockTex = () => themed('rock', () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(21);
  g.fillStyle = PAL.rock[0]; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 5000, PAL.rock.slice(1), 2, 8, r);
  g.strokeStyle = 'rgba(30,28,25,0.5)'; g.lineWidth = 2;
  for (let i = 0; i < 14; i++) {
    g.beginPath();
    let x = r() * w, y = r() * h;
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) { x += (r() - 0.5) * 60; y += (r() - 0.5) * 60; g.lineTo(x, y); }
    g.stroke();
  }
}));

// Banda de rodadura: u alrededor de la rueda, v a lo ancho
export const treadTex = () => once('tread', () => canvasTex(512, 64, (g, w, h) => {
  g.fillStyle = '#1b1b1b'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#2e2e2e';
  const n = 18;
  for (let i = 0; i < n; i++) {
    const x = (i * w) / n;
    g.beginPath();
    g.moveTo(x, 0); g.lineTo(x + 14, 0); g.lineTo(x + 26, h / 2); g.lineTo(x + 14, h);
    g.lineTo(x, h); g.lineTo(x + 12, h / 2); g.closePath(); g.fill();
  }
}));

export const tireSideTex = () => once('tireSide', () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#1c1c1c'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#333'; g.lineWidth = 6;
  for (const rr of [118, 100, 84]) { g.beginPath(); g.arc(128, 128, rr, 0, Math.PI * 2); g.stroke(); }
  g.fillStyle = '#444'; g.font = 'bold 20px sans-serif'; g.textAlign = 'center';
  g.save(); g.translate(128, 128);
  for (let i = 0; i < 2; i++) { g.rotate(Math.PI); g.fillText('MONSTRUO', 0, -102); }
  g.restore();
}, { repeat: false }));

export const itemBoxTex = () => once('itemBox', () => canvasTex(128, 128, (g, w, h) => {
  const grd = g.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#ff4fd8'); grd.addColorStop(0.35, '#ffd400');
  grd.addColorStop(0.7, '#27e3ff'); grd.addColorStop(1, '#7b5cff');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 8; g.strokeRect(4, 4, w - 8, h - 8);
  g.fillStyle = '#fff'; g.font = 'bold 90px Arial Black, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 6; g.strokeStyle = 'rgba(0,0,0,0.35)';
  g.strokeText('?', w / 2, h / 2 + 6); g.fillText('?', w / 2, h / 2 + 6);
}, { repeat: false }));

export const turboTex = () => once('turbo', () => canvasTex(128, 256, (g, w, h) => {
  g.fillStyle = '#1a1206'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 3; i++) {
    const y = i * (h / 3) + 10;
    const grd = g.createLinearGradient(0, y, 0, y + 70);
    grd.addColorStop(0, '#ffe600'); grd.addColorStop(1, '#ff5a00');
    g.fillStyle = grd;
    g.beginPath();
    g.moveTo(w / 2, y); g.lineTo(w - 10, y + 50); g.lineTo(w - 34, y + 50);
    g.lineTo(w / 2, y + 26); g.lineTo(34, y + 50); g.lineTo(10, y + 50); g.closePath(); g.fill();
  }
}));

export const netTex = () => once('net', () => canvasTex(256, 256, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.strokeStyle = '#f3e7c4'; g.lineWidth = 7;
  const n = 4;
  for (let i = 0; i <= n; i++) {
    g.beginPath(); g.moveTo(0, (i * h) / n); g.lineTo(w, (i * h) / n); g.stroke();
    g.beginPath(); g.moveTo((i * w) / n, 0); g.lineTo((i * w) / n, h); g.stroke();
  }
  g.fillStyle = '#c9b98e';
  for (let i = 0; i <= n; i++) for (let k = 0; k <= n; k++) {
    g.beginPath(); g.arc((i * w) / n, (k * h) / n, 7, 0, Math.PI * 2); g.fill();
  }
}));

export const checkerTex = () => once('checker', () => canvasTex(128, 128, (g, w, h) => {
  const n = 8;
  for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) {
    g.fillStyle = (i + k) % 2 ? '#111' : '#f5f5f5';
    g.fillRect((i * w) / n, (k * h) / n, w / n, h / n);
  }
}));

export const bannerTex = (text, bg = '#d42a20', fg = '#fff') => once('banner' + text + bg, () => canvasTex(1024, 128, (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  // cuadros a los lados
  const n = 4, cs = h / n;
  for (const x0 of [0, w - cs * 3]) {
    for (let i = 0; i < 3; i++) for (let k = 0; k < n; k++) {
      g.fillStyle = (i + k) % 2 ? '#111' : '#f5f5f5';
      g.fillRect(x0 + i * cs, k * cs, cs, cs);
    }
  }
  g.fillStyle = fg; g.font = 'bold 84px Impact, Arial Black, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 4);
}, { repeat: false }));

export const mudTex = () => themed('mud', () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(9);
  const [a, b, c] = PAL.patch;
  const grd = g.createRadialGradient(128, 128, 20, 128, 128, 128);
  grd.addColorStop(0, `rgba(${a},1)`);
  grd.addColorStop(0.75, `rgba(${b},0.95)`);
  grd.addColorStop(1, `rgba(${b},0)`);
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(${c[0] + r() * 40},${c[1] + r() * 30},${c[2] + r() * 20},0.35)`;
    g.beginPath(); g.ellipse(r() * w, r() * h, 4 + r() * 14, 2 + r() * 6, r() * 3, 0, Math.PI * 2); g.fill();
  }
}, { repeat: false }));

export const waterTex = (pal = PAL.water) => once('water' + pal.join(), () => canvasTex(256, 256, (g, w, h) => {
  const r = rng(13);
  g.fillStyle = pal[0]; g.fillRect(0, 0, w, h);
  g.strokeStyle = pal[1]; g.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    const x = r() * w, y = r() * h, l = 8 + r() * 24;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + l / 2, y - 4, x + l, y); g.stroke();
  }
}));

export const softDotTex = () => once('dot', () => canvasTex(64, 64, (g, w, h) => {
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.75)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
}, { repeat: false, srgb: false }));

export const numberTex = (num, color, accent) => canvasTex(128, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.fillStyle = accent; g.beginPath(); g.arc(64, 64, 60, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(64, 64, 50, 0, Math.PI * 2); g.fill();
  g.fillStyle = color; g.font = 'bold 72px Impact, Arial Black, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(String(num), 64, 68);
}, { repeat: false });

export const crowdTex = () => once('crowd', () => canvasTex(256, 128, (g, w, h) => {
  const r = rng(17);
  g.fillStyle = '#3b3b48'; g.fillRect(0, 0, w, h);
  const cols = ['#e63946', '#f1fa8c', '#2a9df4', '#ffffff', '#ff9f1c', '#2ec4b6', '#9b5de5', '#f15bb5'];
  for (let row = 0; row < 4; row++) {
    for (let x = 0; x < w; x += 9) {
      g.fillStyle = cols[Math.floor(r() * cols.length)];
      const y = row * 32 + 8 + r() * 4;
      g.fillRect(x + r() * 3, y + 8, 7, 14);
      g.fillStyle = ['#f1c27d', '#c68642', '#8d5524', '#ffdbac'][Math.floor(r() * 4)];
      g.beginPath(); g.arc(x + 4, y + 4, 4, 0, Math.PI * 2); g.fill();
    }
  }
}));

export const barkTex = () => once('bark', () => canvasTex(256, 128, (g, w, h) => {
  const r = rng(31);
  g.fillStyle = '#5b3a1e'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 70; i++) {
    g.fillStyle = r() > 0.5 ? 'rgba(40,24,10,0.6)' : 'rgba(120,84,50,0.4)';
    g.fillRect(0, r() * h, w, 1 + r() * 3);
  }
  for (let i = 0; i < 20; i++) {
    g.fillStyle = 'rgba(30,18,8,0.7)';
    g.beginPath(); g.ellipse(r() * w, r() * h, 6 + r() * 10, 2 + r() * 3, 0, 0, Math.PI * 2); g.fill();
  }
}));

export const ringsTex = () => once('rings', () => canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = '#c9a26b'; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(110,70,30,0.6)'; g.lineWidth = 2;
  for (let r = 6; r < 64; r += 7) { g.beginPath(); g.arc(64, 64, r, 0, Math.PI * 2); g.stroke(); }
  g.strokeStyle = '#5b3a1e'; g.lineWidth = 10;
  g.beginPath(); g.arc(64, 64, 60, 0, Math.PI * 2); g.stroke();
}, { repeat: false }));

export const barrelTex = () => once('barrel', () => canvasTex(256, 128, (g, w, h) => {
  g.fillStyle = '#c4161c'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#ffd200'; g.fillRect(0, h * 0.38, w, h * 0.24);
  g.fillStyle = '#111';
  for (let i = 0; i < 2; i++) {
    const cx = w * (0.25 + i * 0.5), cy = h * 0.5;
    g.beginPath(); g.moveTo(cx, cy - 13); g.lineTo(cx + 15, cy + 12); g.lineTo(cx - 15, cy + 12); g.closePath(); g.fill();
    g.fillStyle = '#ffd200'; g.font = 'bold 18px sans-serif'; g.textAlign = 'center'; g.fillText('!', cx, cy + 10);
    g.fillStyle = '#111';
  }
  g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, 6, w, 5); g.fillRect(0, h - 11, w, 5);
}));
