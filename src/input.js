// Teclado, mando y botones táctiles.

export class Input {
  constructor() {
    this.keys = new Set();
    this.edges = new Set();
    this.touch = { left: false, right: false, gas: false, brake: false, item: false };
    this.prevPad = {};
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.edges.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
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

  // Llamar una vez por fotograma, al final
  endFrame() { this.edges.clear(); }

  pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  // Botones del mando como "flancos" (pulsado este fotograma)
  padEdges() {
    const p = this.pad();
    const out = {};
    if (!p) return out;
    const map = { 0: 'PadA', 1: 'PadB', 2: 'PadX', 3: 'PadY', 5: 'PadRB', 9: 'PadStart', 12: 'PadUp', 13: 'PadDown', 14: 'PadLeft', 15: 'PadRight' };
    for (const [i, name] of Object.entries(map)) {
      const b = p.buttons[i];
      const down = !!(b && b.pressed);
      if (down && !this.prevPad[name]) this.edges.add(name);
      this.prevPad[name] = down;
    }
    if (p.axes[0] < -0.6 && !this.prevPad.AxL) this.edges.add('PadLeft');
    if (p.axes[0] > 0.6 && !this.prevPad.AxR) this.edges.add('PadRight');
    this.prevPad.AxL = p.axes[0] < -0.6;
    this.prevPad.AxR = p.axes[0] > 0.6;
    return out;
  }

  drive() {
    const k = this.keys;
    let steer = 0, throttle = 0, brake = 0;
    if (k.has('ArrowLeft') || k.has('KeyA') || this.touch.left) steer -= 1;
    if (k.has('ArrowRight') || k.has('KeyD') || this.touch.right) steer += 1;
    if (k.has('ArrowUp') || k.has('KeyW') || this.touch.gas) throttle = 1;
    if (k.has('ArrowDown') || k.has('KeyS') || this.touch.brake) brake = 1;
    const p = this.pad();
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
    const item = this.pressed('Space', 'ShiftLeft', 'ShiftRight', 'KeyE', 'TouchItem', 'PadX', 'PadRB');
    return { steer, throttle, brake, item };
  }
}
