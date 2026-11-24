// Interfaz durante la carrera: posición, vueltas, tiempos, objeto, velocidad y minimapa.
import * as THREE from 'three';

export const ITEM_SVG = {
  nitro: `<svg viewBox="0 0 64 64"><path d="M26 8h12v6h-12z" fill="#ddd"/><rect x="20" y="14" width="24" height="40" rx="7" fill="#1f8fff" stroke="#fff" stroke-width="3"/><path d="M32 22c5 6 7 10 3 16-1-4-3-5-5-6 1 4-2 7-4 9-2-6 0-12 6-19z" fill="#ffd400"/></svg>`,
  jump: `<svg viewBox="0 0 64 64"><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 46l24-6-24-6 24-6-24-6 24-6" fill="none" stroke="#ffd400" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M32 4l10 10H22z" fill="#2ee86b"/></svg>`,
  wave: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="6" fill="#ff4fd8"/><circle cx="32" cy="32" r="15" fill="none" stroke="#ff4fd8" stroke-width="5"/><circle cx="32" cy="32" r="25" fill="none" stroke="#b07bff" stroke-width="4" stroke-dasharray="8 5"/></svg>`,
};
export const ITEM_NAME = { nitro: 'Nitro', jump: 'Supersalto', wave: 'Onda expansiva' };
const ITEM_KEYS = Object.keys(ITEM_SVG);

const $ = (id) => document.getElementById(id);

export function fmtTime(t) {
  if (!isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

export class HUD {
  constructor(game) {
    this.game = game;
    this.root = $('hud');
    this.el = {
      pos: $('pos-num'), posSuf: $('pos-suf'), posTotal: $('pos-total'), lap: $('lap-num'), lapTotal: $('lap-total'),
      time: $('time-total'), best: $('time-best'), item: $('item-slot'), itemName: $('item-name'), speed: $('speed-num'),
      boost: $('boost-fill'), msg: $('hud-msg'), big: $('hud-big'), ranking: $('ranking'), hint: $('hud-hint'),
    };
    this.map = $('minimap');
    this.mctx = this.map.getContext('2d');
    this.cache = {};
    this.msgT = 0;
    this.bigT = 0;
    this.rollT = 0;
    this.rollIdx = 0;
    this.prepMap();
  }

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
    const bg = document.createElement('canvas');
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
    const vs = [...this.game.vehicles].sort((a, b) => (a.isPlayer ? 1 : 0) - (b.isPlayer ? 1 : 0));
    for (const v of vs) {
      const [x, y] = this.toMap(v.x, v.z);
      g.beginPath();
      g.arc(x, y, v.isPlayer ? 7 : 5, 0, Math.PI * 2);
      g.fillStyle = '#' + new THREE.Color(v.def.color).getHexString();
      g.fill();
      g.lineWidth = v.isPlayer ? 3 : 1.5;
      g.strokeStyle = v.isPlayer ? '#fff' : '#111';
      g.stroke();
    }
  }

  message(text, dur = 1.6, cls = '') {
    this.el.msg.textContent = text;
    this.el.msg.className = 'show ' + cls;
    this.msgT = dur;
  }

  big(text, dur = 0.9, cls = '') {
    this.el.big.textContent = text;
    this.el.big.className = '';
    void this.el.big.offsetWidth; // reinicia la animación
    this.el.big.className = 'show ' + cls;
    this.bigT = dur;
  }

  update(dt) {
    const game = this.game;
    const p = game.player;
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
      this.el.item.parentElement.classList.add('rolling');
    } else {
      this.el.item.parentElement.classList.remove('rolling');
      this.set('item', this.el.item, p.item ? ITEM_SVG[p.item] : '', 'innerHTML');
      this.set('itemName', this.el.itemName, p.item ? ITEM_NAME[p.item] : '');
      this.el.item.parentElement.classList.toggle('ready', !!p.item);
    }

    // clasificación
    const order = [...game.vehicles].sort((a, b) => a.place - b.place);
    const html = order.map((v) => `<li class="${v.isPlayer ? 'me' : ''}${v.finished ? ' done' : ''}"><i style="background:#${new THREE.Color(v.def.color).getHexString()}"></i>${v.place}. ${v.def.name}</li>`).join('');
    this.set('ranking', this.el.ranking, html, 'innerHTML');

    if (this.msgT > 0) {
      this.msgT -= dt;
      if (this.msgT <= 0) this.el.msg.className = '';
    }
    if (this.bigT > 0) {
      this.bigT -= dt;
      if (this.bigT <= 0) this.el.big.className = '';
    }
    this.drawMap();
  }

  hint(text) { this.set('hint', this.el.hint, text || ''); this.el.hint.classList.toggle('show', !!text); }
}
