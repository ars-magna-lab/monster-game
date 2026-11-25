// Sonido sintetizado con WebAudio: motor, efectos y música.
import { renderSong, songLoop, MUSIC_VERSION } from './music.js';

// Retardo típico de un MP3 de LAME sin recortar (576 del codificador + 529 del
// decodificador, a 44,1 kHz) y margen para decidir si el navegador lo recortó
const MP3_DELAY = 1105 / 44100;
const MP3_TRIM_TOL = 0.012;

// Caché de la música renderizada en IndexedDB (si el navegador la permite)
function idb() {
  return new Promise((res) => {
    try {
      const rq = indexedDB.open('megamonstruos', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('musica');
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => res(null);
    } catch { res(null); }
  });
}
async function cacheGet(key) {
  const db = await idb();
  if (!db) return null;
  return new Promise((res) => {
    try {
      const rq = db.transaction('musica').objectStore('musica').get(key);
      rq.onsuccess = () => res(rq.result || null);
      rq.onerror = () => res(null);
    } catch { res(null); }
  });
}
async function cachePut(key, val) {
  const db = await idb();
  if (!db) return;
  try { db.transaction('musica', 'readwrite').objectStore('musica').put(val, key); } catch { /* sin caché */ }
}

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicOn = true;
    this.engine = null;
    this.last = {};
  }

  init() {
    if (this.ctx) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { this.ctx = new AC(); } catch { return; }
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = this.muted ? 0 : 0.7;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp).connect(c.destination);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.9; this.sfx.connect(this.master);
    this.musicBus = c.createGain(); this.musicBus.gain.value = 0.22; this.musicBus.connect(this.master);
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.7, this.ctx.currentTime, 0.05);
    return this.muted;
  }

  // ---------- utilidades ----------
  osc(type, f0, f1, dur, vol, t0 = 0, dest = this.sfx) {
    const c = this.ctx, t = c.currentTime + t0;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dest);
    o.start(t); o.stop(t + dur + 0.05);
  }

  noiseBurst(dur, vol, filterType, f0, f1 = f0, q = 1, t0 = 0, dest = this.sfx) {
    const c = this.ctx, t = c.currentTime + t0;
    const src = c.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter();
    f.type = filterType; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(dest);
    src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }

  play(name, vol = 1) {
    if (!this.ctx || this.muted || vol < 0.02) return;
    const now = this.ctx.currentTime;
    if (this.last[name] && now - this.last[name] < 0.06) return;
    this.last[name] = now;
    const v = vol;
    switch (name) {
      case 'count': this.osc('square', 520, 520, 0.22, 0.25 * v); break;
      case 'go': this.osc('square', 1040, 1040, 0.6, 0.28 * v); this.osc('square', 1560, 1560, 0.6, 0.12 * v); break;
      case 'stall': // motor ahogado: petardeos que se van apagando
        for (let i = 0; i < 7; i++) {
          const t0 = i * 0.17 + Math.random() * 0.05, k = 1 - i * 0.1;
          this.noiseBurst(0.09, 0.8 * k * v, 'lowpass', 700, 150, 1, t0);
          this.osc('square', 75 - i * 4, 40, 0.1, 0.3 * k * v, t0);
        }
        this.osc('sawtooth', 120, 35, 0.9, 0.12 * v);
        break;
      case 'perfect': // salida perfecta: arpegio que sube
        [523, 784, 1046, 1568].forEach((f, i) => this.osc('triangle', f, f, 0.14, 0.22 * v, i * 0.05));
        break;
      case 'crash':
        this.noiseBurst(0.45, 0.9 * v, 'lowpass', 1600, 200);
        this.osc('sine', 120, 45, 0.35, 0.8 * v);
        break;
      case 'crunch':
        for (let i = 0; i < 4; i++) this.noiseBurst(0.12, 0.6 * v, 'bandpass', 900 + i * 500, 400, 3, i * 0.05);
        this.osc('square', 140, 60, 0.3, 0.25 * v);
        break;
      case 'splash':
        this.noiseBurst(0.9, 0.8 * v, 'highpass', 500, 2500, 0.7);
        this.noiseBurst(0.5, 0.5 * v, 'lowpass', 600, 150);
        break;
      case 'boing':
        this.osc('sine', 180, 720, 0.25, 0.4 * v);
        this.osc('sine', 720, 360, 0.3, 0.25 * v, 0.2);
        break;
      case 'boom':
        this.noiseBurst(1.4, 1.0 * v, 'lowpass', 900, 60);
        this.osc('sine', 90, 30, 0.9, 0.9 * v);
        break;
      case 'pickup':
        [660, 880, 1320].forEach((f, i) => this.osc('triangle', f, f, 0.12, 0.25 * v, i * 0.06));
        break;
      case 'tick': this.osc('square', 1800, 1800, 0.03, 0.08 * v); break;
      case 'item': this.osc('triangle', 990, 1480, 0.15, 0.25 * v); break;
      case 'nitro':
        this.noiseBurst(1.0, 0.7 * v, 'bandpass', 400, 3000, 2);
        this.osc('sawtooth', 110, 330, 0.8, 0.12 * v);
        break;
      case 'turbo': this.noiseBurst(0.5, 0.45 * v, 'bandpass', 600, 2400, 2); break;
      case 'wave':
        this.osc('sine', 700, 60, 0.7, 0.6 * v);
        this.noiseBurst(0.6, 0.5 * v, 'lowpass', 2000, 100);
        break;
      case 'snap':
        this.noiseBurst(0.05, 0.9 * v, 'highpass', 1500, 1500);
        this.noiseBurst(0.05, 0.9 * v, 'highpass', 1500, 1500, 1, 0.18);
        this.osc('sawtooth', 70, 50, 0.6, 0.25 * v, 0.05);
        break;
      case 'net':
        this.osc('sine', 110, 55, 0.6, 0.5 * v);
        this.osc('sawtooth', 90, 70, 0.5, 0.1 * v);
        break;
      case 'land':
        this.osc('sine', 90, 40, 0.25, 0.7 * v);
        this.noiseBurst(0.2, 0.4 * v, 'lowpass', 500, 120);
        break;
      case 'scrape': this.noiseBurst(0.18, 0.35 * v, 'bandpass', 2600, 1800, 4); break;
      case 'bump': this.osc('sine', 150, 70, 0.15, 0.5 * v); this.noiseBurst(0.1, 0.3 * v, 'lowpass', 800, 200); break;
      case 'fall': this.osc('sine', 1100, 160, 1.1, 0.3 * v); break;
      case 'lap': [784, 1046].forEach((f, i) => this.osc('triangle', f, f, 0.25, 0.3 * v, i * 0.14)); break;
      case 'final': [784, 988, 1175, 1568].forEach((f, i) => this.osc('square', f, f, 0.16, 0.16 * v, i * 0.1)); break;
      case 'finish':
        [523, 659, 784, 1046, 784, 1046].forEach((f, i) => this.osc('square', f, f, i === 5 ? 0.7 : 0.16, 0.18 * v, i * 0.14));
        break;
      case 'throw':
        this.noiseBurst(0.25, 0.4 * v, 'bandpass', 500, 1800, 1.5);
        this.osc('triangle', 220, 440, 0.18, 0.2 * v);
        break;
      case 'rocket':
        this.noiseBurst(1.2, 0.6 * v, 'bandpass', 1800, 600, 1.2);
        this.osc('sawtooth', 300, 900, 0.6, 0.12 * v);
        break;
      case 'click': this.osc('triangle', 600, 900, 0.07, 0.2 * v); break;
      case 'wrong': this.osc('square', 300, 200, 0.3, 0.15 * v); break;
    }
  }

  // ---------- motor del jugador ----------
  engineStart() {
    if (!this.ctx || this.engine) return;
    const c = this.ctx;
    const g = c.createGain(); g.gain.value = 0;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 3;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const o3 = c.createOscillator(); o3.type = 'sawtooth';
    const g2 = c.createGain(); g2.gain.value = 0.5;
    o1.connect(f); o2.connect(g2).connect(f); o3.connect(f);
    f.connect(g).connect(this.sfx);
    o1.start(); o2.start(); o3.start();
    this.engine = { g, f, o1, o2, o3 };
  }

  engineUpdate(ratio, throttle, boost, air) {
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    const r = Math.min(1.3, Math.max(0, ratio)) + (air ? 0.25 * throttle : 0);
    const base = 38 + r * 95 + (boost ? 25 : 0);
    this.engine.o1.frequency.setTargetAtTime(base, t, 0.06);
    this.engine.o2.frequency.setTargetAtTime(base * 0.5, t, 0.06);
    this.engine.o3.frequency.setTargetAtTime(base * 1.01 + 2, t, 0.06);
    this.engine.f.frequency.setTargetAtTime(300 + r * 900 + throttle * 500, t, 0.08);
    this.engine.g.gain.setTargetAtTime(this.muted ? 0 : 0.07 + throttle * 0.05, t, 0.1);
  }

  engineStop() {
    if (!this.engine) return;
    const e = this.engine;
    const t = this.ctx.currentTime;
    e.g.gain.setTargetAtTime(0, t, 0.1);
    setTimeout(() => { try { e.o1.stop(); e.o2.stop(); e.o3.stop(); } catch { /* ya parado */ } }, 400);
    this.engine = null;
  }

  // ---------- música (ver music.js) ----------
  // Cada tema suena en bucle desde un AudioBuffer, así la música casi no gasta
  // CPU durante la carrera. Primero se intenta el MP3 ya renderizado
  // (assets/musica, se regenera con «npm run musica»); si no se puede (file://,
  // sin red...), se usa la caché de IndexedDB o se renderiza con el sintetizador.
  prepareMusic() {
    if (this.songs || !this.ctx) return;
    this.songs = {};
    const load = async (name) => {
      const lp = songLoop(name);
      try {
        const mp3 = await this.loadMp3(name, lp);
        this.songs[name] = mp3 || { buf: await this.renderOrCache(name, lp), ...lp };
      } catch (e) {
        console.warn('Música no disponible:', name, e?.message || e);
        return;
      }
      if (this.wantSong === name && !this.musicSrc) this.playSong(name);
    };
    load('menu').then(() => load('race'));
  }

  // Descarga y decodifica el MP3 del tema. Devuelve null si no se puede.
  // La ruta es relativa a la página, para que funcione también en subcarpetas.
  async loadMp3(name, lp) {
    if (location.protocol === 'file:' || typeof fetch !== 'function') return null;
    try {
      const res = await fetch(`assets/musica/${name}-v${MUSIC_VERSION}.mp3`);
      if (!res.ok) return null;
      const data = await res.arrayBuffer();
      // Safari antiguo solo admite la forma con callbacks de decodeAudioData
      const buf = await new Promise((ok, ko) => {
        const p = this.ctx.decodeAudioData(data, ok, ko);
        if (p && p.catch) p.catch(ko);
      });
      // El MP3 lleva un retardo del codificador al principio. Chrome (y los
      // navegadores que leen la cabecera LAME) lo recortan y el audio queda
      // alineado con el original (medido en Chrome: 0 muestras de desfase y la
      // misma longitud que el WAV de origen); si un navegador no lo recorta, el búfer sale
      // más largo que el render original y desplazamos el bucle ese retardo.
      const extra = buf.duration - lp.seconds;
      const shift = extra > MP3_TRIM_TOL ? MP3_DELAY : 0;
      if (buf.duration < lp.loopEnd + shift) return null;
      return { buf, loopStart: lp.loopStart + shift, loopEnd: lp.loopEnd + shift, seconds: lp.seconds, from: 'mp3' };
    } catch {
      return null;
    }
  }

  // Camino de reserva: caché de IndexedDB o render con el sintetizador
  async renderOrCache(name, lp) {
    if (typeof OfflineAudioContext === 'undefined') throw new Error('sin OfflineAudioContext');
    const rate = 32000;
    const key = `${name}-v${MUSIC_VERSION}-${rate}`;
    const hit = await cacheGet(key);
    if (hit && hit.ch?.length === 2) {
      const buf = this.ctx.createBuffer(2, hit.ch[0].length, hit.rate);
      hit.ch.forEach((d, c) => buf.copyToChannel(d, c));
      return buf;
    }
    const buf = await renderSong(name, lp.seconds, rate);
    cachePut(key, { rate, ch: [buf.getChannelData(0).slice(), buf.getChannelData(1).slice()] });
    return buf;
  }

  playSong(name) {
    const song = this.songs?.[name];
    this.wantSong = name;
    if (this.currentSong === name && this.musicSrc) return;
    this.stopSong();
    if (!song) return;
    const src = this.ctx.createBufferSource();
    src.buffer = song.buf;
    src.loop = true;
    src.loopStart = song.loopStart;
    src.loopEnd = song.loopEnd;
    const g = this.ctx.createGain();
    const t = this.ctx.currentTime;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(1, t + 0.4);
    src.connect(g).connect(this.musicBus);
    src.start(t + 0.02);
    this.musicSrc = src; this.musicGain = g; this.currentSong = name;
  }

  stopSong() {
    if (!this.musicSrc) return;
    const { musicSrc: src, musicGain: g } = this;
    const t = this.ctx.currentTime;
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(g.gain.value, t);
    g.gain.linearRampToValueAtTime(0, t + 0.3);
    try { src.stop(t + 0.32); } catch { /* ya parado */ }
    this.musicSrc = null; this.currentSong = null;
  }

  musicStart(intense = true) {
    if (!this.ctx) return;
    this.prepareMusic();
    this.musicBus.gain.setTargetAtTime(this.musicOn ? (intense ? 0.34 : 0.26) : 0, this.ctx.currentTime, 0.1);
    this.playSong(intense ? 'race' : 'menu');
    this.musicTempo(1);
  }

  // Última vuelta: un poco más rápida (y algo más aguda, como un disco acelerado)
  musicTempo(mul) {
    if (this.musicSrc) this.musicSrc.playbackRate.setTargetAtTime(mul, this.ctx.currentTime, 0.3);
  }

  musicStop() {
    this.wantSong = null;
    this.stopSong();
  }

  // Encender o apagar la música sin perder la posición
  setMusicOn(on) {
    this.musicOn = on;
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? 0.3 : 0, this.ctx.currentTime, 0.1);
  }
}
