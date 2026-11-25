// Teclado, mandos y botones táctiles, para uno o dos jugadores.
//
// Un jugador: flechas o WASD; Espacio/Mayús/E usa el objeto; cualquier mando.
// Dos jugadores:
//   J1: W A S D, objeto Q o Espacio, volver a la pista R, y el primer mando.
//   J2: flechas, objeto Intro o Mayús derecha, volver a la pista Retroceso, y el segundo mando.

const KEYMAP = {
  solo: {
    left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'], gas: ['ArrowUp', 'KeyW'], brake: ['ArrowDown', 'KeyS'],
    item: ['Space', 'ShiftLeft', 'ShiftRight', 'KeyE'], reset: ['KeyR'],
  },
  p1: {
    left: ['KeyA'], right: ['KeyD'], gas: ['KeyW'], brake: ['KeyS'],
    item: ['KeyQ', 'Space', 'ShiftLeft', 'KeyE'], reset: ['KeyR'],
  },
  p2: {
    left: ['ArrowLeft'], right: ['ArrowRight'], gas: ['ArrowUp'], brake: ['ArrowDown'],
    item: ['Enter', 'NumpadEnter', 'ShiftRight', 'ControlRight', 'Numpad0'], reset: ['Backspace', 'NumpadDecimal'],
  },
};

const PAD_BUTTONS = { 0: 'A', 1: 'B', 2: 'X', 3: 'Y', 4: 'LB', 5: 'RB', 9: 'Start' };

// Mandos con las letras de Nintendo (los de Switch). El juego sigue las letras impresas en el
// mando, no la posición: A acelera y acepta, B frena y vuelve, X usa el objeto e Y devuelve a
// la pista, igual que dicen las ayudas en pantalla. Además, muchos mandos de Switch con cable
// (PDP, HORI, PowerA) no llegan al navegador con la disposición estándar, sino con el orden de
// fábrica: Y B A X L R ZL ZR − + (sticks) Inicio Captura, y la cruceta en los dos últimos ejes.
const NINTENDO = /nintendo|switch|joy-?con|057e/i;
const ON = { pressed: true, value: 1 };
const OFF = { pressed: false, value: 0 };

// Devuelve el mando con los botones en el orden que usa el juego (el estándar de Xbox)
export function adaptPad(p) {
  if (!NINTENDO.test(p.id || '')) return p;
  const b = p.buttons, a = p.axes;
  let buttons, axes;
  if (p.mapping === 'standard') {
    // estándar por posición: 0 abajo (B), 1 derecha (A), 2 izquierda (Y), 3 arriba (X)
    buttons = Array.from(b);
    buttons[0] = b[1]; buttons[1] = b[0]; buttons[2] = b[3]; buttons[3] = b[2];
    axes = a;
  } else if (b.length >= 10 && a.length >= 2) {
    const hat = a.length >= 6;
    const hx = hat ? a[a.length - 2] : 0, hy = hat ? a[a.length - 1] : 0;
    const dir = (on) => (on ? ON : OFF);
    buttons = [b[2], b[1], b[3], b[0], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11],
      dir(hy < -0.5), dir(hy > 0.5), dir(hx < -0.5), dir(hx > 0.5), b[12], b[13]].map((x) => x || OFF);
    axes = [a[0] || 0, a[1] || 0, a[2] || 0, a[3] || 0];
  } else return p;
  return { index: p.index, id: p.id, connected: p.connected, timestamp: p.timestamp, mapping: p.mapping, vibrationActuator: p.vibrationActuator, buttons, axes, raw: p };
}

// Direcciones de los menús: teclas, y botón de la cruceta y eje del stick del mando
const NAV = {
  Left: { keys: ['ArrowLeft', 'KeyA'], button: 14, axis: 0, sign: -1 },
  Right: { keys: ['ArrowRight', 'KeyD'], button: 15, axis: 0, sign: 1 },
  Up: { keys: ['ArrowUp', 'KeyW'], button: 12, axis: 1, sign: -1 },
  Down: { keys: ['ArrowDown', 'KeyS'], button: 13, axis: 1, sign: 1 },
};
const NAV_DELAY = 0.4; // espera antes de empezar a repetir al mantener una dirección
const NAV_REPEAT = 0.15; // y ritmo de la repetición

export class Input {
  constructor() {
    this.keys = new Set();
    this.edges = new Set();
    this.touch = { left: false, right: false, gas: false, brake: false, item: false };
    this.prevPad = {};
    this.padHeld = {}; // dirección mantenida en algún mando
    this.navState = {};
    this.usedPads = new Set(); // mandos que han llegado a usarse
    this.onPadLost = null; // se llama si se desconecta un mando que se estaba usando
    this.windows = [];
    // Xbox (Edge): que el mando llegue al juego en vez de mover un cursor
    try { navigator.gamepadInputEmulation = 'gamepad'; } catch { /* no hace falta */ }
    this.attach(window);
  }

  // Escucha el teclado en otra ventana (la del jugador 2)
  attach(win) {
    if (this.windows.includes(win)) return;
    this.windows.push(win);
    win.addEventListener('keydown', (e) => {
      // Intro y Espacio tampoco deben pulsar el botón que tenga el foco del navegador
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Backspace', 'Enter', 'NumpadEnter'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.edges.add(e.code);
      this.keys.add(e.code);
    });
    win.addEventListener('keyup', (e) => this.keys.delete(e.code));
    win.addEventListener('blur', () => this.keys.clear());
    win.addEventListener('gamepaddisconnected', (e) => {
      const i = e.gamepad?.index;
      if (!this.usedPads.has(i)) return;
      this.usedPads.delete(i);
      if (this.onPadLost) this.onPadLost(i);
    });
  }

  detach(win) {
    this.windows = this.windows.filter((w) => w !== win);
  }

  bindTouch(root) {
    root.querySelectorAll('[data-touch]').forEach((el) => {
      const k = el.dataset.touch;
      const on = (e) => { e.preventDefault(); if (k === 'item' && !this.touch.item) this.edges.add('TouchItem'); this.touch[k] = true; el.classList.add('on'); };
      const off = (e) => { e.preventDefault(); this.touch[k] = false; el.classList.remove('on'); };
      el.addEventListener('pointerdown', on);
      el.addEventListener('pointerup', off);
      el.addEventListener('pointercancel', off);
      el.addEventListener('pointerleave', off);
    });
  }

  pressed(...codes) {
    for (const c of codes) if (this.edges.has(c)) return true;
    return false;
  }

  endFrame() { this.edges.clear(); }

  // Mandos conectados, en orden. Se consultan todas las ventanas porque
  // el navegador solo da datos del mando a la ventana que tiene el foco.
  pads() {
    const best = new Map();
    for (const w of this.windows) {
      let list = [];
      try { list = w.closed ? [] : (w.navigator.getGamepads ? w.navigator.getGamepads() : []); } catch { list = []; }
      for (const p of list) {
        if (!p || !p.connected) continue;
        const prev = best.get(p.index);
        if (!prev || p.timestamp > prev.timestamp) best.set(p.index, p);
      }
    }
    return [...best.values()].sort((a, b) => a.index - b.index).map(adaptPad);
  }

  // Para el panel de la tecla F: qué mandos hay, cómo llegan y qué se está pulsando (sin adaptar)
  padDebug() {
    return (this.padList || []).map((p, slot) => {
      const r = p.raw || p;
      const tipo = p.raw ? 'Nintendo' : r.mapping === 'standard' ? 'estándar' : 'sin adaptar';
      const bot = Array.from(r.buttons, (x, i) => (x?.pressed ? i : -1)).filter((i) => i >= 0).join(',');
      const ejes = Array.from(r.axes, (x) => (x || 0).toFixed(1)).join(' ');
      return `J${slot + 1}: ${tipo} (${r.mapping || 'sin mapa'}, ${r.buttons.length} botones) · pulsados [${bot}] · ejes ${ejes}`;
    }).join('\n');
  }

  // Flancos de los botones: "PadA" (cualquier mando) y "PadA@0" (mando número 0)
  padEdges() {
    this.padList = this.pads();
    const held = {};
    this.padList.forEach((p, slot) => {
      const mark = (name, down) => {
        const key = name + '@' + slot;
        if (down && !this.prevPad[key]) { this.edges.add('Pad' + name); this.edges.add('Pad' + name + '@' + slot); }
        this.prevPad[key] = down;
      };
      for (const [i, name] of Object.entries(PAD_BUTTONS)) mark(name, !!p.buttons[i]?.pressed);
      // cada dirección se calcula una sola vez: botón de la cruceta O stick
      for (const [name, d] of Object.entries(NAV)) {
        const down = !!p.buttons[d.button]?.pressed || (p.axes[d.axis] || 0) * d.sign > 0.6;
        mark(name, down);
        if (down) held[name] = true;
      }
      if (p.buttons.some((b) => b?.pressed) || p.axes.some((a) => Math.abs(a || 0) > 0.3)) { this.usedPads.add(p.index); this.lastPad = p.index; }
    });
    this.padHeld = held;
  }

  // Direcciones para los menús, con repetición al mantenerlas (teclado, cruceta y stick).
  // Devuelve { Left, Right, Up, Down } con true en los fotogramas en que hay que moverse.
  nav(dt) {
    const out = {};
    for (const [name, d] of Object.entries(NAV)) {
      const st = this.navState[name] || (this.navState[name] = { t: 0, next: NAV_DELAY, armed: false });
      const held = d.keys.some((c) => this.keys.has(c)) || !!this.padHeld[name];
      if (this.pressed(...d.keys, 'Pad' + name)) {
        out[name] = true;
        st.t = 0; st.next = NAV_DELAY; st.armed = held;
      } else if (held && st.armed) {
        st.t += dt;
        if (st.t >= st.next) { out[name] = true; st.next = Math.max(st.next + NAV_REPEAT, st.t); }
      } else st.armed = false;
    }
    return out;
  }

  // Fuera de los menús: lo que se esté manteniendo (acelerar, girar) no debe repetir al entrar en uno
  navReset() {
    for (const st of Object.values(this.navState)) st.armed = false;
  }

  // Vibración del mando. who: 'solo' (el último mando usado) | 'p1' | 'p2'; fuerza 0..1
  rumble(who = 'solo', fuerza = 0.6, ms = 200) {
    const pads = this.padList || [];
    const p = who === 'solo' ? pads.find((q) => q.index === this.lastPad) || pads[0] : pads[who === 'p2' ? 1 : 0];
    const act = p?.vibrationActuator;
    if (!act?.playEffect) return;
    const f = Math.max(0, Math.min(1, fuerza));
    try {
      act.playEffect('dual-rumble', { startDelay: 0, duration: ms, weakMagnitude: f, strongMagnitude: f * 0.8 })?.catch?.(() => {});
    } catch { /* el mando no vibra */ }
  }

  // Controles de un jugador. who: 'solo' | 'p1' | 'p2'
  drive(who = 'solo') {
    const map = KEYMAP[who];
    const k = this.keys;
    const any = (codes) => codes.some((c) => k.has(c));
    const isP1 = who !== 'p2';
    let steer = 0, throttle = 0, brake = 0, analog = false;
    if (any(map.left) || (isP1 && this.touch.left)) steer -= 1;
    if (any(map.right) || (isP1 && this.touch.right)) steer += 1;
    if (any(map.gas) || (isP1 && this.touch.gas)) throttle = 1;
    if (any(map.brake) || (isP1 && this.touch.brake)) brake = 1;
    const slot = who === 'p2' ? 1 : 0;
    const pads = this.padList || [];
    // en solitario vale cualquier mando
    const p = who === 'solo' ? pads.find((q) => q.buttons.some((b) => b.pressed) || Math.abs(q.axes[0] || 0) > 0.15) || pads[0] : pads[slot];
    if (p) {
      const ax = p.axes[0] || 0;
      if (Math.abs(ax) > 0.15) { steer = Math.max(-1, Math.min(1, steer + ax)); analog = steer === ax; }
      if (p.buttons[14]?.pressed) { steer = -1; analog = false; }
      if (p.buttons[15]?.pressed) { steer = 1; analog = false; }
      const rt = p.buttons[7]?.value || 0;
      if (rt > 0.05) throttle = Math.max(throttle, rt);
      if (p.buttons[0]?.pressed) throttle = 1;
      const lt = p.buttons[6]?.value || 0;
      if (lt > 0.05) brake = Math.max(brake, lt);
      if (p.buttons[1]?.pressed) brake = 1;
    }
    const padCodes = who === 'solo' ? ['PadX', 'PadRB', 'PadLB'] : ['PadX@' + slot, 'PadRB@' + slot, 'PadLB@' + slot];
    const item = this.pressed(...map.item, ...padCodes, ...(isP1 ? ['TouchItem'] : []));
    const reset = this.pressed(...map.reset, who === 'solo' ? 'PadY' : 'PadY@' + slot);
    return { steer, throttle, brake, item, reset, analog }; // analog: la dirección viene del stick
  }
}
