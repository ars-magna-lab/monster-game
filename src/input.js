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

const PAD_BUTTONS = { 0: 'A', 1: 'B', 2: 'X', 3: 'Y', 5: 'RB', 9: 'Start', 12: 'Up', 13: 'Down', 14: 'Left', 15: 'Right' };

export class Input {
  constructor() {
    this.keys = new Set();
    this.edges = new Set();
    this.touch = { left: false, right: false, gas: false, brake: false, item: false };
    this.prevPad = {};
    this.windows = [];
    this.attach(window);
  }

  // Escucha el teclado en otra ventana (la del jugador 2)
  attach(win) {
    if (this.windows.includes(win)) return;
    this.windows.push(win);
    win.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Backspace'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.edges.add(e.code);
      this.keys.add(e.code);
    });
    win.addEventListener('keyup', (e) => this.keys.delete(e.code));
    win.addEventListener('blur', () => this.keys.clear());
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
    return [...best.values()].sort((a, b) => a.index - b.index);
  }

  // Flancos de los botones: "PadA" (cualquier mando) y "PadA@0" (mando número 0)
  padEdges() {
    this.padList = this.pads();
    this.padList.forEach((p, slot) => {
      const mark = (name, down) => {
        const key = name + '@' + slot;
        if (down && !this.prevPad[key]) { this.edges.add('Pad' + name); this.edges.add('Pad' + name + '@' + slot); }
        this.prevPad[key] = down;
      };
      for (const [i, name] of Object.entries(PAD_BUTTONS)) mark(name, !!p.buttons[i]?.pressed);
      mark('Left', !!p.buttons[14]?.pressed || p.axes[0] < -0.6);
      mark('Right', !!p.buttons[15]?.pressed || p.axes[0] > 0.6);
    });
  }

  // Controles de un jugador. who: 'solo' | 'p1' | 'p2'
  drive(who = 'solo') {
    const map = KEYMAP[who];
    const k = this.keys;
    const any = (codes) => codes.some((c) => k.has(c));
    const isP1 = who !== 'p2';
    let steer = 0, throttle = 0, brake = 0;
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
      if (Math.abs(ax) > 0.15) steer = Math.max(-1, Math.min(1, steer + ax));
      if (p.buttons[14]?.pressed) steer = -1;
      if (p.buttons[15]?.pressed) steer = 1;
      const rt = p.buttons[7]?.value || 0;
      if (rt > 0.05) throttle = Math.max(throttle, rt);
      if (p.buttons[0]?.pressed) throttle = 1;
      const lt = p.buttons[6]?.value || 0;
      if (lt > 0.05) brake = Math.max(brake, lt);
      if (p.buttons[1]?.pressed) brake = 1;
    }
    const padCodes = who === 'solo' ? ['PadX', 'PadRB'] : ['PadX@' + slot, 'PadRB@' + slot];
    const item = this.pressed(...map.item, ...padCodes, ...(isP1 ? ['TouchItem'] : []));
    const reset = this.pressed(...map.reset, who === 'solo' ? 'PadY' : 'PadY@' + slot);
    return { steer, throttle, brake, item, reset };
  }
}
