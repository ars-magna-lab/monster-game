// Sonido sintetizado con WebAudio: motor, efectos y una música sencilla.

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicOn = true;
    this.engine = null;
    this.musicTimer = null;
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

  // ---------- música: rock sencillo en bucle ----------
  musicStart(intense = true) {
    if (!this.ctx || this.musicTimer) return;
    const bpm = intense ? 148 : 112;
    const step = 60 / bpm / 4;
    // Mi menor: Mi - Sol - La - Sol
    const roots = [41.2, 49.0, 55.0, 49.0];
    let n = 0;
    let nextT = this.ctx.currentTime + 0.1;
    const kick = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0];
    const snare = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
    const bass = [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1];
    const lead = [0, 0, 7, 0, 5, 0, 7, 10, 12, 0, 10, 7, 5, 0, 3, 0];
    this.musicTimer = setInterval(() => {
      if (!this.ctx) return;
      while (nextT < this.ctx.currentTime + 0.2) {
        const i = n % 16, bar = Math.floor(n / 16) % 4;
        const root = roots[bar];
        const t0 = nextT - this.ctx.currentTime;
        if (this.musicOn && !this.muted) {
          if (kick[i]) this.osc('sine', 140, 40, 0.18, 0.9, t0, this.musicBus);
          if (snare[i]) this.noiseBurst(0.14, 0.45, 'highpass', 1200, 1200, 0.7, t0, this.musicBus);
          if (i % 2 === 0) this.noiseBurst(0.04, 0.12, 'highpass', 7000, 7000, 0.7, t0, this.musicBus);
          if (bass[i]) this.osc('sawtooth', root * 2, root * 2, step * 0.9, 0.22, t0, this.musicBus);
          if (intense && lead[i] && Math.floor(n / 64) % 2 === 1) {
            const f = root * 8 * Math.pow(2, lead[i] / 12);
            this.osc('square', f, f, step * 1.6, 0.06, t0, this.musicBus);
          }
        }
        nextT += step;
        n++;
      }
    }, 50);
  }

  musicStop() {
    if (this.musicTimer) clearInterval(this.musicTimer);
    this.musicTimer = null;
  }
}
