// Interfaz durante la carrera: posición, vueltas, tiempos, objeto, velocidad y minimapa.
import * as THREE from 'three';

export const ITEM_SVG = {
  nitro: `<svg viewBox="0 0 64 64"><path d="M26 8h12v6h-12z" fill="#ddd"/><rect x="20" y="14" width="24" height="40" rx="7" fill="#1f8fff" stroke="#fff" stroke-width="3"/><path d="M32 22c5 6 7 10 3 16-1-4-3-5-5-6 1 4-2 7-4 9-2-6 0-12 6-19z" fill="#ffd400"/></svg>`,
  jump: `<svg viewBox="0 0 64 64"><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 46l24-6-24-6 24-6-24-6 24-6" fill="none" stroke="#ffd400" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M32 4l10 10H22z" fill="#2ee86b"/></svg>`,
  wave: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="6" fill="#ff4fd8"/><circle cx="32" cy="32" r="15" fill="none" stroke="#ff4fd8" stroke-width="5"/><circle cx="32" cy="32" r="25" fill="none" stroke="#b07bff" stroke-width="4" stroke-dasharray="8 5"/></svg>`,
  tire: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="#222" stroke="#555" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="#ffd400"/><g stroke="#666" stroke-width="5">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M32 4v8" transform="rotate(${a} 32 32)"/>`).join('')}</g><path d="M4 50l8-4M2 40l9-1" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
  barrel: `<svg viewBox="0 0 64 64"><rect x="16" y="8" width="32" height="48" rx="6" fill="#d42a1a" stroke="#fff" stroke-width="3"/><rect x="16" y="18" width="32" height="5" fill="#ffd400"/><rect x="16" y="41" width="32" height="5" fill="#ffd400"/><path d="M32 25l-5 9h4l-2 7 7-10h-4l3-6z" fill="#fff"/></svg>`,
  rocket: `<svg viewBox="0 0 64 64"><path d="M50 14c-10 0-20 6-26 16l10 10c10-6 16-16 16-26z" fill="#eee" stroke="#fff" stroke-width="2"/><circle cx="40" cy="24" r="4" fill="#1f8fff"/><path d="M24 30l-10 2 6 6zM34 40l-2 10-6-6z" fill="#ff3030"/><path d="M22 42c-4 2-8 6-10 10 4-2 8-6 10-10z" fill="#ffd400"/><path d="M50 14l-6 0 6 6z" fill="#ff3030"/></svg>`,
};
export const ITEM_NAME = { nitro: 'Nitro', jump: 'Supersalto', wave: 'Onda expansiva', tire: 'Neumático loco', barrel: 'Barril explosivo', rocket: 'Cohete buscador' };
const ITEM_KEYS = Object.keys(ITEM_SVG);


export function fmtTime(t) {
  if (!isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

const TEMPLATE = `
  <div class="h-pos"><span class="pos-num">1</span><span class="pos-suf">º</span><small class="pos-total">/6</small></div>
  <div class="h-lap">VUELTA <b class="lap-num">1</b>/<span class="lap-total">3</span></div>
  <ol class="ranking"></ol>
  <div class="h-time"><div class="time-total">0:00.00</div><div class="time-best"></div></div>
  <div class="h-item"><div class="item-slot"></div><div class="item-name"></div><small class="keyhint"></small></div>
  <canvas class="minimap" width="220" height="220"></canvas>
  <div class="h-speed"><span class="speed-num">0</span><small>km/h</small><div class="boost-bar"><div class="boost-fill"></div></div></div>
  <div class="h-msg"></div>
  <div class="h-big"></div>
  <div class="h-hint"></div>
  <div class="h-tag"></div>`;

export class HUD {
  // player: el vehículo de este jugador; doc/parent: dónde se dibuja (puede ser otra ventana)
  constructor(game, player, { doc = document, parent = null, tag = '', keyhint = 'ESPACIO' } = {}) {
    this.game = game;
    this.player = player;
    this.doc = doc;
    this.root = doc.createElement('div');
    this.root.className = 'hud hidden';
    this.root.innerHTML = TEMPLATE;
    (parent || doc.body).appendChild(this.root);
    const q = (c) => this.root.querySelector('.' + c);
    this.el = {
      pos: q('pos-num'), posTotal: q('pos-total'), lap: q('lap-num'), lapTotal: q('lap-total'),
      time: q('time-total'), best: q('time-best'), item: q('item-slot'), itemBox: q('h-item'), itemName: q('item-name'), speed: q('speed-num'),
      boost: q('boost-fill'), msg: q('h-msg'), big: q('h-big'), ranking: q('ranking'), hint: q('h-hint'), tag: q('h-tag'),
    };
    q('keyhint').textContent = keyhint;
    this.el.tag.textContent = tag;
    this.el.tag.classList.toggle('hidden', !tag);
    this.map = q('minimap');
    this.mctx = this.map.getContext('2d');
    this.cache = {};
    this.msgT = 0;
    this.bigT = 0;
    this.rollT = 0;
    this.rollIdx = 0;
    this.prepMap();
  }

  // Coloca el HUD sobre su trozo de pantalla (fracciones 0..1)
  place(x, y, w, h, pxW, pxH) {
    const st = this.root.style;
    st.left = x * 100 + '%'; st.top = y * 100 + '%'; st.width = w * 100 + '%'; st.height = h * 100 + '%';
    this.root.classList.toggle('compact', pxW < 760 || pxH < 520);
  }

  remove() { this.root.remove(); }

  set(key, el, val, prop = 'textContent') {
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    el[prop] = val;
  }

  show(on) { this.root.classList.toggle('hidden', !on); }

  prepMap() {
    const tr = this.game.track;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < tr.N; i++) {
      minX = Math.min(minX, tr.px[i]); maxX = Math.max(maxX, tr.px[i]);
      minZ = Math.min(minZ, tr.pz[i]); maxZ = Math.max(maxZ, tr.pz[i]);
    }
    const W = this.map.width, pad = 18;
    const sc = (W - 2 * pad) / Math.max(maxX - minX, maxZ - minZ);
    const ox = pad + ((W - 2 * pad) - (maxX - minX) * sc) / 2;
    const oz = pad + ((W - 2 * pad) - (maxZ - minZ) * sc) / 2;
    this.toMap = (x, z) => [ox + (x - minX) * sc, oz + (z - minZ) * sc];
    // fondo precalculado
    const bg = this.doc.createElement('canvas');
    bg.width = bg.height = W;
    const g = bg.getContext('2d');
    const path = (from, to, step = 3) => {
      g.beginPath();
      for (let s = from; s <= to; s += step) {
        const p = tr.pointAt(s);
        const [x, y] = this.toMap(p.x, p.z);
        if (s === from) g.moveTo(x, y); else g.lineTo(x, y);
      }
    };
    g.lineJoin = 'round'; g.lineCap = 'round';
    path(0, tr.length); g.closePath();
    g.strokeStyle = 'rgba(0,0,0,0.55)'; g.lineWidth = 12; g.stroke();
    g.strokeStyle = '#d9b98c'; g.lineWidth = 7; g.stroke();
    path(tr.tunnel.s0, tr.tunnel.s1);
    g.strokeStyle = '#555'; g.lineWidth = 7; g.stroke();
    for (const p of tr.pits) {
      path(p.s0, p.s1, 1);
      g.strokeStyle = p.water ? '#2bb3a0' : '#222'; g.lineWidth = 9; g.stroke();
    }
    const st = tr.pointAt(0);
    const [sx, sy] = this.toMap(st.x, st.z);
    g.fillStyle = '#fff';
    g.save(); g.translate(sx, sy); g.rotate(st.th + Math.PI / 2);
    g.fillRect(-6, -2, 12, 4);
    g.restore();
    this.mapBg = bg;
  }

  drawMap() {
    const g = this.mctx;
    const W = this.map.width;
    g.clearRect(0, 0, W, W);
    g.drawImage(this.mapBg, 0, 0);
    const me = this.player;
    const rank = (v) => (v === me ? 2 : v.isPlayer ? 1 : 0);
    const vs = [...this.game.vehicles].sort((a, b) => rank(a) - rank(b));
    for (const v of vs) {
      const [x, y] = this.toMap(v.x, v.z);
      g.beginPath();
      g.arc(x, y, v === me ? 7 : v.isPlayer ? 6 : 5, 0, Math.PI * 2);
      g.fillStyle = '#' + new THREE.Color(v.def.color).getHexString();
      g.fill();
      g.lineWidth = v.isPlayer ? 3 : 1.5;
      g.strokeStyle = v === me ? '#fff' : v.isPlayer ? (v.human === 1 ? '#3ca0ff' : '#ffcc00') : '#111';
      g.stroke();
    }
  }

  message(text, dur = 1.6, cls = '') {
    this.el.msg.textContent = text;
    this.el.msg.className = 'h-msg show ' + cls;
    this.msgT = dur;
  }

  big(text, dur = 0.9, cls = '') {
    this.el.big.textContent = text;
    this.el.big.className = 'h-big';
    void this.el.big.offsetWidth; // reinicia la animación
    this.el.big.className = 'h-big show ' + cls;
    this.bigT = dur;
  }

  update(dt) {
    const game = this.game;
    const p = this.player;
    if (!p) return;
    const n = game.vehicles.length;
    this.set('pos', this.el.pos, String(p.place));
    this.set('posTotal', this.el.posTotal, '/' + n);
    this.set('lap', this.el.lap, String(Math.max(1, Math.min(game.laps, p.lap))));
    this.set('lapTotal', this.el.lapTotal, String(game.laps));
    const tShow = p.finished ? p.finishTime : game.raceTime;
    this.set('time', this.el.time, fmtTime(tShow));
    const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
    this.set('best', this.el.best, isFinite(best) ? 'Mejor vuelta ' + fmtTime(best) : '');
    this.set('speed', this.el.speed, String(Math.round(Math.abs(p.vF) * 3.6)));
    this.el.boost.style.width = Math.min(100, (p.boost / 2.2) * 100) + '%';

    // objeto (con ruleta)
    if (p.itemRoll > 0) {
      this.rollT -= dt;
      if (this.rollT <= 0) {
        this.rollT = 0.08;
        this.rollIdx = (this.rollIdx + 1) % ITEM_KEYS.length;
        game.sound.play('tick', 0.6);
      }
      this.set('item', this.el.item, ITEM_SVG[ITEM_KEYS[this.rollIdx]], 'innerHTML');
      this.set('itemName', this.el.itemName, '...');
      this.el.itemBox.classList.add('rolling');
    } else {
      this.el.itemBox.classList.remove('rolling');
      this.set('item', this.el.item, p.item ? ITEM_SVG[p.item] : '', 'innerHTML');
      this.set('itemName', this.el.itemName, p.item ? ITEM_NAME[p.item] : '');
      this.el.itemBox.classList.toggle('ready', !!p.item);
    }

    // clasificación
    const order = [...game.vehicles].sort((a, b) => a.place - b.place);
    const html = order.map((v) => `<li class="${v.isPlayer ? (v.human === 1 ? 'other' : 'me') : ''}${v.finished ? ' done' : ''}"><i style="background:#${new THREE.Color(v.def.color).getHexString()}"></i>${v.place}. ${v.def.name}</li>`).join('');
    this.set('ranking', this.el.ranking, html, 'innerHTML');

    if (this.msgT > 0) {
      this.msgT -= dt;
      if (this.msgT <= 0) this.el.msg.className = 'h-msg';
    }
    if (this.bigT > 0) {
      this.bigT -= dt;
      if (this.bigT <= 0) this.el.big.className = 'h-big';
    }
    this.drawMap();
  }

  hint(text) { this.set('hint', this.el.hint, text || ''); this.el.hint.classList.toggle('show', !!text); }
}
