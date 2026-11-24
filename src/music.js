// Música sintetizada: dos temas de rock (menú y carrera) con batería, bajo,
// guitarra distorsionada y una melodía. Todo se programa por pasos de semicorchea,
// así que lo mismo sirve para sonar en directo o para renderizar un WAV de prueba.

const mtof = (n) => 440 * Math.pow(2, (n - 69) / 12);
const curves = new WeakMap();

function distCurve(ctx, amount) {
  let byAmt = curves.get(ctx);
  if (!byAmt) { byAmt = {}; curves.set(ctx, byAmt); }
  if (byAmt[amount]) return byAmt[amount];
  const n = 2048, c = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    c[i] = Math.tanh(x * amount) / Math.tanh(amount);
  }
  byAmt[amount] = c;
  return c;
}

const noiseBufs = new WeakMap();
function noise(ctx) {
  let b = noiseBufs.get(ctx);
  if (b) return b;
  b = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = b.getChannelData(0);
  let seed = 12345;
  for (let i = 0; i < d.length; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; d[i] = (seed / 0x7fffffff) * 2 - 1; }
  noiseBufs.set(ctx, b);
  return b;
}

// Cuerda pulsada (Karplus-Strong): una ráfaga de ruido que se repite y se apaga
const strings = new WeakMap();
function pluck(ctx, midi, { secs = 1.2, damp = 0.996, bright = 0.5, seed = 1 } = {}) {
  let cache = strings.get(ctx);
  if (!cache) { cache = new Map(); strings.set(ctx, cache); }
  const key = `${midi}|${secs}|${damp}|${bright}|${seed}`;
  if (cache.has(key)) return cache.get(key);
  const sr = ctx.sampleRate;
  const len = Math.ceil(secs * sr);
  const buf = ctx.createBuffer(1, len, sr);
  const y = buf.getChannelData(0);
  const period = sr / mtof(midi);
  const N = Math.max(2, Math.floor(period));
  const frac = period - N;
  let r = seed * 9301 + 49297;
  const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280 * 2 - 1; };
  // ráfaga inicial suavizada (menos brillo = púa más blanda)
  let prev = 0;
  for (let i = 0; i < N; i++) { prev += bright * (rnd() - prev); y[i] = prev; }
  for (let i = N; i < len; i++) {
    const a = y[i - N], b = i - N - 1 >= 0 ? y[i - N - 1] : a;
    y[i] = damp * (0.5 * (a + b) * (1 - frac) + a * frac);
  }
  let peak = 0;
  for (let i = 0; i < len; i++) peak = Math.max(peak, Math.abs(y[i]));
  if (peak > 0) for (let i = 0; i < len; i++) y[i] /= peak;
  cache.set(key, buf);
  return buf;
}

// ---------------------------------------------------------------- instrumentos
const I = {
  kick(ctx, out, t, v = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(160, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(1.0 * v, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.35);
    I.noiseHit(ctx, out, t, 0.015, 0.25 * v, 'highpass', 2500);
  },
  noiseHit(ctx, out, t, dur, vol, type, freq, q = 0.8) {
    const s = ctx.createBufferSource();
    s.buffer = noise(ctx);
    const f = ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(out);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  },
  snare(ctx, out, t, v = 1) {
    I.noiseHit(ctx, out, t, 0.2, 0.55 * v, 'bandpass', 2200, 0.6);
    I.noiseHit(ctx, out, t, 0.12, 0.3 * v, 'highpass', 5000);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(240, t);
    o.frequency.exponentialRampToValueAtTime(170, t + 0.08);
    g.gain.setValueAtTime(0.45 * v, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.12);
  },
  hat(ctx, out, t, v = 1, open = false) {
    I.noiseHit(ctx, out, t, open ? 0.28 : 0.045, 0.22 * v, 'highpass', 7500);
  },
  crash(ctx, out, t, v = 1) {
    I.noiseHit(ctx, out, t, 1.6, 0.3 * v, 'highpass', 4500, 0.5);
    I.noiseHit(ctx, out, t, 0.6, 0.18 * v, 'bandpass', 3000, 0.4);
  },
  tom(ctx, out, t, note, v = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(mtof(note) * 1.5, t);
    o.frequency.exponentialRampToValueAtTime(mtof(note), t + 0.08);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.8 * v, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.4);
    I.noiseHit(ctx, out, t, 0.05, 0.15 * v, 'bandpass', 1200);
  },
  bass(ctx, out, t, note, dur, v = 1) {
    const src = ctx.createBufferSource();
    src.buffer = pluck(ctx, note, { secs: 1.0, damp: 0.998, bright: 0.35, seed: note });
    const sat = ctx.createWaveShaper(); sat.curve = distCurve(ctx, 1.8);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1100; f.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.9 * v, t);
    g.gain.setValueAtTime(0.9 * v, t + dur * 0.85);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.04);
    src.connect(sat).connect(f).connect(g).connect(out);
    src.start(t); src.stop(t + dur + 0.06);
  },
  // acorde de quinta con guitarra distorsionada y doblada (izquierda y derecha);
  // mute = apagado con la palma
  guitar(ctx, out, t, root, dur, { v = 1, mute = false, drive = 9, bright = 4200 } = {}) {
    const len = mute ? Math.min(dur, 0.16) : dur;
    for (const [pan, delay, seed] of [[-0.75, 0, 1], [0.75, 0.011, 2]]) {
      const tt = t + delay;
      const pre = ctx.createGain(); pre.gain.value = 2.2;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 100;
      const ws = ctx.createWaveShaper(); ws.curve = distCurve(ctx, drive); ws.oversample = '2x';
      const scoop = ctx.createBiquadFilter(); scoop.type = 'peaking'; scoop.frequency.value = 500; scoop.gain.value = -3; scoop.Q.value = 1;
      const mid = ctx.createBiquadFilter(); mid.type = 'peaking'; mid.frequency.value = 1700; mid.gain.value = 4; mid.Q.value = 0.9;
      const cab = ctx.createBiquadFilter(); cab.type = 'lowpass'; cab.Q.value = 0.7; cab.frequency.value = mute ? 1800 : bright;
      const cab2 = ctx.createBiquadFilter(); cab2.type = 'lowpass'; cab2.Q.value = 0.5; cab2.frequency.value = mute ? 2600 : bright * 1.5;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.17 * v, tt);
      g.gain.setValueAtTime(0.17 * v, tt + len * 0.8);
      g.gain.exponentialRampToValueAtTime(0.0001, tt + len + 0.03);
      for (const [iv, k] of [[0, 0], [7, 1], [12, 2]]) {
        const src = ctx.createBufferSource();
        src.buffer = pluck(ctx, root + iv, { secs: 1.4, damp: mute ? 0.985 : 0.9985, bright: mute ? 0.4 : 0.8, seed: seed * 7 + k });
        src.connect(pre);
        src.start(tt + k * 0.004); src.stop(tt + len + 0.05);
      }
      let chain = pre.connect(hp).connect(ws).connect(scoop).connect(mid).connect(cab).connect(cab2).connect(g);
      if (ctx.createStereoPanner) { const pn = ctx.createStereoPanner(); pn.pan.value = pan; chain = chain.connect(pn); }
      chain.connect(out);
    }
  },
  // guitarra solista: cuerda larga, distorsión suave, vibrato y un poco de eco
  lead(ctx, out, t, note, dur, v = 1) {
    const src = ctx.createBufferSource();
    src.buffer = pluck(ctx, note, { secs: 2.5, damp: 0.9996, bright: 0.7, seed: 3 });
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 5.8;
    lg.gain.setValueAtTime(0, t);
    lg.gain.linearRampToValueAtTime(dur > 0.3 ? 0.012 : 0, t + Math.min(dur, 0.3));
    lfo.connect(lg).connect(src.playbackRate);
    const pre = ctx.createGain(); pre.gain.value = 2.5;
    const ws = ctx.createWaveShaper(); ws.curve = distCurve(ctx, 6); ws.oversample = '2x';
    const mid = ctx.createBiquadFilter(); mid.type = 'peaking'; mid.frequency.value = 1200; mid.gain.value = 5; mid.Q.value = 0.8;
    const cab = ctx.createBiquadFilter(); cab.type = 'lowpass'; cab.frequency.value = 3600; cab.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.14 * v, t);
    g.gain.setValueAtTime(0.14 * v, t + dur * 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.08);
    const dl = ctx.createDelay(1); dl.delayTime.value = 0.18;
    const fb = ctx.createGain(); fb.gain.value = 0.25;
    const wet = ctx.createGain(); wet.gain.value = 0.3;
    src.connect(pre).connect(ws).connect(mid).connect(cab).connect(g);
    g.connect(out);
    g.connect(dl); dl.connect(fb).connect(dl); dl.connect(wet).connect(out);
    src.start(t); src.stop(t + dur + 0.1);
    lfo.start(t); lfo.stop(t + dur + 0.1);
  },
};

// ---------------------------------------------------------------- canciones
// Cada compás tiene 16 pasos. Los acordes son la nota raíz (MIDI) del bajo.
const E = 40, G = 43, A = 45, B = 47, C = 48, D = 50, F = 41;

function rockBeat(step, bar, { half = false, fill = false } = {}) {
  const ev = [];
  if (fill && step >= 8) {
    if (step % 2 === 0) ev.push(['tom', 50 - (step - 8) * 2]);
    if (step === 15) ev.push(['snare', 1.1]);
    return ev;
  }
  if (half) {
    if (step === 0 || step === 10) ev.push(['kick', 1]);
    if (step === 8) ev.push(['snare', 1]);
  } else {
    if (step === 0 || step === 6 || step === 8 || step === 11) ev.push(['kick', step === 0 ? 1 : 0.85]);
    if (step === 4 || step === 12) ev.push(['snare', 1]);
  }
  if (step % 2 === 0) ev.push(['hat', step % 4 === 0 ? 0.9 : 0.6]);
  return ev;
}

// Tema de carrera: Mi menor, rápido. Intro, estrofa, estribillo y puente.
const RACE = {
  bpm: 150,
  sections: [
    { name: 'intro', bars: [E, E, E, E], guitar: 'mute', drums: 'build', lead: null },
    { name: 'estrofa', bars: [E, E, C, D, E, E, C, B], guitar: 'mute', drums: 'rock', lead: null },
    { name: 'estribillo', bars: [G, D, E, C, G, D, C, D], guitar: 'open', drums: 'rock', lead: 'chorus' },
    { name: 'estrofa', bars: [E, E, C, D, E, E, C, B], guitar: 'mute', drums: 'rock', lead: 'riff' },
    { name: 'puente', bars: [C, C, D, D, A, A, B, B], guitar: 'open', drums: 'half', lead: null },
    { name: 'estribillo', bars: [G, D, E, C, G, D, C, D], guitar: 'open', drums: 'rock', lead: 'chorus' },
  ],
  loopFrom: 1,
  // melodías: [paso, nota, duración en pasos]
  leads: {
    chorus: [
      [[0, 71, 4], [4, 74, 4], [8, 76, 6], [14, 74, 2]],
      [[0, 74, 3], [3, 71, 3], [6, 69, 2], [8, 71, 8]],
      [[0, 67, 4], [4, 71, 4], [8, 74, 4], [12, 76, 4]],
      [[0, 79, 6], [6, 78, 2], [8, 76, 4], [12, 74, 4]],
      [[0, 71, 4], [4, 74, 4], [8, 76, 6], [14, 79, 2]],
      [[0, 78, 3], [3, 76, 3], [6, 74, 2], [8, 74, 8]],
      [[0, 72, 4], [4, 76, 4], [8, 79, 4], [12, 76, 4]],
      [[0, 78, 8], [8, 74, 4], [12, 69, 4]],
    ],
    riff: [
      [[0, 64, 2], [3, 67, 2], [6, 69, 2], [10, 67, 2], [12, 71, 3]],
      [[0, 69, 2], [2, 67, 2], [4, 64, 4], [12, 62, 2], [14, 64, 2]],
      [[0, 64, 2], [3, 67, 2], [6, 69, 2], [10, 72, 2], [12, 71, 3]],
      [[0, 74, 3], [4, 71, 2], [6, 69, 2], [8, 71, 8]],
    ],
  },
};

// Tema de menú: La menor, más tranquilo, guitarra más limpia.
const MENU = {
  bpm: 112,
  sections: [
    { name: 'a', bars: [A, A, F, F, C, C, G, G], guitar: 'stab', drums: 'groove', lead: null },
    { name: 'b', bars: [A, A, F, F, C, C, G, E], guitar: 'stab', drums: 'groove', lead: 'menu' },
  ],
  loopFrom: 0,
  leads: {
    menu: [
      [[0, 76, 3], [4, 72, 2], [6, 74, 2], [8, 76, 6]],
      [[0, 79, 4], [6, 76, 2], [8, 74, 8]],
      [[0, 72, 3], [4, 69, 2], [6, 72, 2], [8, 77, 6]],
      [[0, 76, 4], [4, 74, 4], [8, 72, 8]],
      [[0, 67, 2], [2, 72, 2], [4, 76, 4], [8, 79, 6]],
      [[0, 79, 2], [2, 77, 2], [4, 76, 4], [8, 74, 8]],
      [[0, 74, 3], [4, 71, 3], [8, 74, 4], [12, 79, 4]],
      [[0, 76, 12]],
    ],
  },
};

export const SONGS = { race: RACE, menu: MENU };

// Instrumentos silenciados (solo para pruebas): 'drums', 'bass', 'guitar', 'lead'
const MUTED = new Set();

// Total de compases de la canción, contando a partir de loopFrom en bucle
function barInfo(song, barIndex) {
  const secs = song.sections;
  let i = barIndex;
  const total = (from) => secs.slice(from).reduce((a, s) => a + s.bars.length, 0);
  const first = total(0);
  if (i >= first) i = song.sections.slice(0, song.loopFrom).reduce((a, s) => a + s.bars.length, 0) + ((i - first) % total(song.loopFrom));
  for (const s of secs) {
    if (i < s.bars.length) return { sec: s, inSec: i, root: s.bars[i], next: s.bars[i + 1] };
    i -= s.bars.length;
  }
  return { sec: secs[0], inSec: 0, root: secs[0].bars[0] };
}

// Programa un paso (semicorchea) de la canción en el instante t
// Mesa de mezcla por salida: un bus por instrumento y una sala de reverberación
// calculada (ruido que decae), compartida.
const mixers = new WeakMap();
function mixer(ctx, out) {
  let m = mixers.get(out);
  if (m) return m;
  const len = Math.floor(ctx.sampleRate * 1.3);
  const ir = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = ir.getChannelData(c);
    let seed = 777 + c * 31;
    for (let i = 0; i < len; i++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      const tt = i / ctx.sampleRate;
      d[i] = ((seed / 0x7fffffff) * 2 - 1) * Math.exp(-tt * 4.2) * (tt < 0.012 ? tt / 0.012 : 1) * 0.5;
    }
  }
  const verb = ctx.createConvolver(); verb.buffer = ir;
  const verbHp = ctx.createBiquadFilter(); verbHp.type = 'highpass'; verbHp.frequency.value = 300;
  const verbOut = ctx.createGain(); verbOut.gain.value = 0.35;
  verbHp.connect(verb).connect(verbOut).connect(out);
  const bus = (gain, send) => {
    const g = ctx.createGain(); g.gain.value = gain; g.connect(out);
    if (send) { const s = ctx.createGain(); s.gain.value = send; g.connect(s).connect(verbHp); }
    return g;
  };
  m = { drums: bus(1.9, 0.35), bass: bus(0.55, 0), guitar: bus(1.0, 0.2), lead: bus(1.0, 0.45) };
  mixers.set(out, m);
  return m;
}

export function scheduleStep(ctx, outMain, song, n, t, stepDur) {
  const mx = mixer(ctx, outMain);
  let out = mx.drums;
  const bar = Math.floor(n / 16), step = n % 16;
  const { sec, inSec, root } = barInfo(song, bar);
  const last = inSec === sec.bars.length - 1;
  const menu = song === MENU;
  // batería
  if (MUTED.has('drums')) { /* silenciada */ } else if (sec.drums === 'build') {
    if (step % 4 === 0) I.kick(ctx, out, t, 0.9);
    if (inSec >= 2 && step % 2 === 0) I.hat(ctx, out, t, 0.5);
    if (inSec === 3 && step >= 8) I.snare(ctx, out, t, 0.4 + (step - 8) * 0.08);
  } else {
    if (inSec === 0 && step === 0) I.crash(ctx, out, t, 0.9);
    const evs = menu
      ? (() => {
        const ev = [];
        if (step === 0 || step === 7 || step === 10) ev.push(['kick', 0.9]);
        if (step === 4 || step === 12) ev.push(['snare', 0.8]);
        ev.push(['hat', step % 4 === 2 ? 0.7 : 0.4]);
        if (step === 14) ev.push(['hatOpen', 0.6]);
        return ev;
      })()
      : rockBeat(step, bar, { half: sec.drums === 'half', fill: last && sec.name !== 'puente' && (inSec % 8 === 7) });
    for (const [k, v] of evs) {
      if (k === 'kick') I.kick(ctx, out, t, v);
      else if (k === 'snare') I.snare(ctx, out, t, v);
      else if (k === 'hat') I.hat(ctx, out, t, v);
      else if (k === 'hatOpen') I.hat(ctx, out, t, v, true);
      else if (k === 'tom') I.tom(ctx, out, t, v);
    }
  }
  // bajo
  out = mx.bass;
  if (MUTED.has('bass')) { /* silenciado */ } else if (menu) {
    const pat = [0, 3, 6, 8, 11, 14];
    if (pat.includes(step)) I.bass(ctx, out, t, root + (step === 11 ? 12 : step === 14 ? 7 : 0), stepDur * 2, 0.9);
  } else if (sec.drums !== 'build' || inSec >= 2) {
    if (step % 2 === 0) I.bass(ctx, out, t, root + (sec.drums === 'half' && step >= 8 ? 7 : 0), stepDur * 1.8, step % 4 === 0 ? 1 : 0.8);
  }
  // guitarra
  out = mx.guitar;
  const groot = root + 12;
  if (MUTED.has('guitar')) { /* silenciada */ } else if (sec.guitar === 'mute') {
    if (step % 2 === 0) I.guitar(ctx, out, t, groot, stepDur * 2, { mute: step % 8 !== 0, v: step % 8 === 0 ? 1 : 0.75 });
  } else if (sec.guitar === 'open') {
    if (step === 0) I.guitar(ctx, out, t, groot, stepDur * 6, { v: 1 });
    if (step === 6) I.guitar(ctx, out, t, groot, stepDur * 2, { mute: true, v: 0.8 });
    if (step === 8) I.guitar(ctx, out, t, groot, stepDur * 6, { v: 0.95 });
    if (step === 14) I.guitar(ctx, out, t, groot, stepDur * 2, { mute: true, v: 0.8 });
  } else if (sec.guitar === 'stab') {
    if (step === 2 || step === 6 || step === 10 || step === 13) I.guitar(ctx, out, t, groot, stepDur * 1.5, { v: 0.8, drive: 4, bright: 2600 });
  }
  // melodía
  out = mx.lead;
  if (sec.lead && !MUTED.has('lead')) {
    const lines = song.leads[sec.lead];
    const line = lines[inSec % lines.length];
    for (const [st, note, len] of line) {
      if (st === step) I.lead(ctx, out, t, note, stepDur * len * 0.95, menu ? 0.85 : 1);
    }
  }
}

// Reproductor en directo con programación anticipada
export class MusicPlayer {
  constructor(ctx, out) {
    this.ctx = ctx;
    this.out = out;
    this.song = null;
    this.timer = null;
    this.tempoMul = 1;
  }

  play(name) {
    const song = SONGS[name];
    if (this.song === song && this.timer) return;
    this.stop();
    this.song = song;
    this.n = 0;
    this.next = this.ctx.currentTime + 0.12;
    this.tempoMul = 1;
    this.timer = setInterval(() => this.tick(), 40);
  }

  setTempo(mul) { this.tempoMul = mul; }

  tick() {
    const ctx = this.ctx;
    while (this.next < ctx.currentTime + 0.25) {
      const stepDur = 60 / (this.song.bpm * this.tempoMul) / 4;
      if (this.enabled()) scheduleStep(ctx, this.out, this.song, this.n, this.next, stepDur);
      this.next += stepDur;
      this.n++;
    }
  }

  enabled() { return true; }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.song = null;
  }
}

// Súbelo al cambiar las canciones: invalida la música guardada en el navegador
export const MUSIC_VERSION = 1;

// Dónde empieza y acaba el bucle de una canción renderizada (en segundos)
export function songLoop(name) {
  const song = SONGS[name];
  const bar = 60 / song.bpm * 4;
  const count = (arr) => arr.reduce((a, s) => a + s.bars.length, 0);
  const intro = count(song.sections.slice(0, song.loopFrom));
  const loop = count(song.sections.slice(song.loopFrom));
  const loopStart = 0.05 + intro * bar;
  const loopEnd = loopStart + loop * bar;
  return { loopStart, loopEnd, seconds: loopEnd + 0.05 };
}

// Renderiza unos segundos de una canción a un AudioBuffer
export async function renderSong(name, seconds = 30, sampleRate = 44100, mute = []) {
  MUTED.clear();
  for (const m of mute) MUTED.add(m);
  const ctx = new OfflineAudioContext(2, Math.ceil(seconds * sampleRate), sampleRate);
  const bus = ctx.createGain(); bus.gain.value = 0.5;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
  bus.connect(comp).connect(ctx.destination);
  const song = SONGS[name];
  const stepDur = 60 / song.bpm / 4;
  for (let n = 0, t = 0.05; t < seconds; n++, t += stepDur) scheduleStep(ctx, bus, song, n, t, stepDur);
  const buf = await ctx.startRendering();
  MUTED.clear();
  return buf;
}
