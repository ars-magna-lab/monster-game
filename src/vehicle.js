// Física arcade de un monster truck sobre la pista.
import { LIMIT } from './track.js';
import { buildTruck, animateTruck, WHEEL_R, WHEEL_Z } from './trucks.js';

// Ángulo del caballito (rad): unos 35°
export const WHEELIE_ANG = 0.61;

export const G = 24;
export const HALF_W = 2.0;
export const RADIUS = 2.3; // para choques entre camiones

const SURF_SPEED = { road: 1, ramp: 1, bridge: 0.92, grass: 0.74, mud: 0.5, ice: 1, pit: 1, water: 1 };

// Derrape con turbo (como en los juegos de karts). Se mantiene el botón de derrapar girando:
// la carga sube y, al soltar, da un turbo mayor cuanto más se haya derrapado.
export const DRIFT = {
  minSpeed: 0.45,   // fracción de la velocidad punta para empezar
  minSteer: 0.3,    // giro mínimo para empezar (fija el lado)
  keepSpeed: 0.3,   // por debajo de esta fracción se cancela
  maxAir: 0.35,     // segundos en el aire antes de cancelar
  steerOpen: 0.45,  // dirección efectiva con el stick en contra (curva abierta)
  steerMid: 0.85,   // con el stick suelto
  steerTight: 1.25, // con el stick a favor (más cerrado que el giro normal)
  grip: 0.45,       // agarre lateral durante el derrape
  keep: 0.9,        // parte de la velocidad lateral que se recupera hacia delante
  yaw: 18 * Math.PI / 180, // giro visual de la carrocería hacia dentro
  levels: [0.8, 1.7, 2.8], // carga de cada nivel (chispas azules, naranjas y moradas)
  boost: [0, 0.7, 1.2, 1.9], // segundos de turbo al soltar según el nivel
  hop: 0.25,        // duración del saltito visual al empezar
};

// Modo gigante (el objeto de la superremontada): crece, corre como con turbo, no le afecta nada
// y chafa a quien toque.
export const GIANT = {
  time: 6,        // segundos que dura
  scale: 1.6,     // tamaño
  grow: 0.3,      // segundos que tarda en crecer y en encoger
  speed: 1.35,    // velocidad punta (como un turbo algo más fuerte)
  accel: 2.2,     // aceleración
  blink: 1,       // parpadea el último segundo
  stomp: 0.42,    // segundos entre pisadas
};

// Chafado: aplastado y casi parado un momento; después no se le puede volver a chafar en un rato.
export const CRUSH = {
  min: 0.9,       // segundos parado con poca diferencia de tamaño
  max: 1.4,       // con mucha diferencia, si es el gigante o si le caen encima
  immune: 2.5,    // segundos sin poder ser chafado otra vez (tras levantarse)
  flatY: 0.3,     // alto aplastado
  flatXZ: 1.15,   // ancho y largo aplastado
  rise: 0.45,     // segundos que tarda en recuperarse (con rebote)
};

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const wrapAng = (a) => {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
};

export class Vehicle {
  constructor(def, track, isPlayer = false) {
    this.def = def;
    this.track = track;
    this.isPlayer = isPlayer;
    this.baseSize = def.size || 1;
    this.size = this.baseSize;
    const st = def.stats;
    this.maxSpeed = 31 + st.speed * 2.3;
    this.accel = 8 + st.accel * 2.3;
    this.turnRate = 1.1 + st.handling * 0.17;
    this.grip = 3.2 + st.handling * 0.7;
    this.mass = 0.8 + st.weight * 0.3;
    this.stunMul = 1.3 - st.weight * 0.1;
    this.speedMul = 1;
    this.parts = buildTruck(def);
    this.mesh = this.parts.root;
    this.events = [];
    this.reset();
  }

  reset() {
    this.x = 0; this.y = 0; this.z = 0; this.th = 0;
    // caballito (solo visual, para levantar la copa de la meta): objetivo 0..1 y valor suavizado
    this.wheelie = 0; this.wheelieK = 0;
    this.vx = 0; this.vz = 0; this.vy = 0;
    this.onGround = true; this.groundH = 0; this.wasGround = true;
    this.idx = -1; this.s = 0; this.d = 0; this.prevS = 0;
    this.lap = 0; this.checkpoint = true; this.finished = false; this.finishTime = 0;
    this.lapStart = 0; this.lapTimes = []; this.place = 1;
    // stall: motor ahogado en la salida (no acelera); rev: ruedas patinando en la parrilla
    this.stall = 0; this.rev = 0;
    this.boost = 0; this.stun = 0; this.spin = 0; this.spinT = 0; this.spinDur = 0;
    this.state = 'ok'; this.stateTimer = 0; this.fall = null;
    this.comp = 0; this.compV = 0; this.pitch = 0; this.roll = 0;
    this.item = null; this.itemRoll = 0; this.invuln = 0; this.blink = 0; this.hitCool = 0;
    this.wrongT = 0; this.stuckT = 0; this.airT = 0; this.surf = 'road';
    this.control = { steer: 0, throttle: 0, brake: 0 };
    this.vF = 0; this.accelVis = 0; this.steerVis = 0; this.lastSlopeV = 0;
    this.netCaught = null;
    this.cool = {};
    // derrape: { side: -1 | 1, t: carga, level: 0..3 } mientras dura; driftYaw y hopT son solo visuales
    this.drift = null; this.driftYaw = 0; this.hopT = 0; this.driftLock = false;
    // modo gigante: giant segundos que quedan, giantK 0..1 cuánto ha crecido
    this.giant = 0; this.giantK = 0; this.stompT = 0; this.size = this.baseSize;
    // chafado: squash segundos parado (de squashDur), squashT tiempo desde que le chafaron (visual)
    this.squash = 0; this.squashDur = 0; this.squashT = 9; this.crushImmune = 0;
  }

  // ¿Se le puede chafar ahora? (no reapareciendo, ni invulnerable, ni gigante, ni recién chafado)
  get crushable() {
    return this.state === 'ok' && this.invuln <= 0 && this.giant <= 0 && this.squash <= 0 && this.crushImmune <= 0;
  }

  // Le chafan: se aplasta y se queda casi parado dur segundos. by: quien le chafa;
  // how: 'giant' (el gigante), 'fall' (le cae encima) o 'size' (le embiste uno más grande).
  crush(by, dur, how = 'size') {
    if (!this.crushable) return false;
    this.squash = dur; this.squashDur = dur; this.squashT = 0;
    this.crushImmune = dur + CRUSH.immune;
    if (this.drift) { this.endDrift(false); this.driftLock = true; }
    this.boost = 0;
    this.events.push({ type: 'crushed', by, how });
    by.events.push({ type: 'crushTruck', victim: this, how });
    return true;
  }

  get speed() { return Math.hypot(this.vx, this.vz); }

  get progress() { return this.lap * this.track.length + this.s; }

  placeAt(s, d, speed = 0) {
    const P = this.track.pointAt(s, d);
    this.x = P.x; this.z = P.z; this.th = P.th;
    const p = this.track.project(this.x, this.z, -1);
    this.idx = p.i; this.s = p.s; this.d = p.d; this.prevS = p.s;
    const surf = this.track.surfaceAt(this.s, this.d);
    this.y = surf.h; this.groundH = surf.h;
    this.vx = Math.cos(this.th) * speed; this.vz = Math.sin(this.th) * speed; this.vy = 0;
    this.onGround = true; this.wasGround = true;
    this.state = 'ok'; this.stun = 0; this.spinDur = 0; this.spin = 0;
    this.pitch = 0; this.roll = 0;
    this.drift = null; this.driftYaw = 0; this.hopT = 0; this.driftLock = false;
    this.syncMesh(0);
  }

  // Vuelve a poner el camión en la pista (tras caer o si se atasca)
  respawn(s, d = 0, speed = 10) {
    for (const p of this.track.pits) {
      if (this.track.ahead(p.s0 - 4, s) < p.s1 - p.s0 + 8) s = p.respawnS;
    }
    this.placeAt(s, clamp(d, -8, 8), speed);
    this.invuln = 1.6;
    this.blink = 1.6;
    this.events.push({ type: 'respawn' });
  }

  hit({ dirX = 0, dirZ = 0, push = 0, up = 0, speedMul = 1, stun = 0, kind = 'hit' }) {
    if (this.invuln > 0 || this.hitCool > 0 || this.state !== 'ok' || this.giant > 0) return false;
    const k = this.stunMul;
    this.vx *= speedMul; this.vz *= speedMul;
    this.vx += dirX * push * k; this.vz += dirZ * push * k;
    if (up > 0) { this.vy = Math.max(this.vy, up * Math.min(1.2, k)); this.onGround = false; }
    if (stun > 0) {
      this.stun = Math.max(this.stun, stun * k);
      this.spinDur = this.stun; this.spinT = 0;
    }
    this.hitCool = 0.9;
    if (this.drift) { this.endDrift(false); this.driftLock = true; } // un golpe corta el derrape sin turbo
    this.events.push({ type: kind });
    return true;
  }

  catchNet(net) {
    if (this.state !== 'ok' || this.invuln > 0 || this.giant > 0) return false;
    this.state = 'caught';
    this.stateTimer = 1.1;
    this.netCaught = net;
    this.events.push({ type: 'net' });
    return true;
  }

  useItem(game) {
    if (!this.item || this.itemRoll > 0 || this.state !== 'ok') return;
    const it = this.item;
    this.item = null;
    if (it === 'nitro') {
      this.boost = Math.max(this.boost, 2.2);
      this.events.push({ type: 'nitro' });
    } else if (it === 'jump') {
      this.vy = Math.max(this.vy, this.onGround ? 13 : 10);
      this.onGround = false;
      this.wasGround = false;
      this.invuln = Math.max(this.invuln, 0.6);
      this.events.push({ type: 'jump' });
    } else if (it === 'giant') {
      this.giant = GIANT.time;
      this.stompT = GIANT.stomp;
      this.stun = 0; this.spinDur = 0; this.spin = 0;
      this.events.push({ type: 'giant' });
    } else if (it === 'wave') {
      game.shockwave(this);
      this.events.push({ type: 'wave' });
    } else if (it === 'tire' || it === 'barrel' || it === 'rocket') {
      game.projectiles.launch(it, this);
      this.events.push({ type: it === 'rocket' ? 'rocket' : 'throw' });
    }
  }

  update(dt, ctrl, game) {
    const tr = this.track;
    this.control = ctrl;
    this.prevS = this.s;
    this.boost = Math.max(0, this.boost - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.blink = Math.max(0, this.blink - dt);
    this.hitCool = Math.max(0, this.hitCool - dt);
    if (this.stun > 0) this.stun = Math.max(0, this.stun - dt);
    if (this.stall > 0) this.stall = Math.max(0, this.stall - dt);
    this.crushImmune = Math.max(0, this.crushImmune - dt);
    this.squashT += dt;
    if (this.squash > 0) this.squash = Math.max(0, this.squash - dt);
    this.updateGiant(dt);
    if (this.spinDur > 0) {
      this.spinT += dt;
      if (this.spinT >= this.spinDur) { this.spinDur = 0; this.spin = 0; }
      else { const t = this.spinT / this.spinDur; this.spin = Math.PI * 2 * (1 - (1 - t) * (1 - t)); }
    }
    if (this.itemRoll > 0) {
      this.itemRoll -= dt;
      if (this.itemRoll <= 0) { this.itemRoll = 0; this.item = game.rollItem(this); this.events.push({ type: 'gotItem' }); }
    }

    if (this.state === 'fallen') { this.updateFallen(dt); return; }

    const stunned = this.stun > 0 || this.state === 'caught' || this.squash > 0;
    let fx = Math.cos(this.th), fz = Math.sin(this.th);
    let vF = this.vx * fx + this.vz * fz;
    const steer = this.updateDrift(dt, ctrl, vF, stunned);
    this.steerVis += ((stunned ? 0 : ctrl.steer) - this.steerVis) * Math.min(1, dt * 10);
    if (this.onGround) {
      const spdF = clamp(Math.abs(vF) / 9, 0, 1);
      const hi = clamp(Math.abs(vF) / this.maxSpeed, 0, 1.3);
      const turn = steer * this.turnRate * spdF * (1 - 0.32 * hi) * (this.surf === 'mud' ? 0.8 : this.surf === 'ice' ? 0.6 : 1);
      this.th += turn * dt * (vF >= -0.5 ? 1 : -1);
    } else {
      this.th += steer * 0.9 * dt;
    }
    fx = Math.cos(this.th); fz = Math.sin(this.th);
    const rx = -fz, rz = fx;
    vF = this.vx * fx + this.vz * fz;
    let vL = this.vx * rx + this.vz * rz;
    const vF0 = vF;

    if (this.onGround) {
      // el gigante no se frena en el barro
      const surfMul = this.giant > 0 && this.surf === 'mud' ? 1 : SURF_SPEED[this.surf] ?? 1;
      const maxV = this.maxSpeed * this.speedMul * surfMul * (this.giant > 0 ? GIANT.speed : this.boost > 0 ? 1.32 : 1);
      const thr = stunned || this.stall > 0 ? 0 : ctrl.throttle;
      const brk = stunned ? 0 : ctrl.brake;
      if (thr > 0 && vF < maxV) {
        const a = this.accel * thr * (this.giant > 0 ? GIANT.accel : this.boost > 0 ? 2.2 : 1) * (vF < 0 ? 2 : 1) * (1 - 0.35 * clamp(vF / maxV, 0, 1));
        vF = Math.min(maxV, vF + a * dt);
      }
      if (brk > 0) {
        if (vF > 1) vF -= 32 * brk * dt;
        else vF = Math.max(-13, vF - this.accel * 0.6 * brk * dt);
      }
      if (vF > maxV) vF = Math.max(maxV, vF - ((vF - maxV) * 1.3 + 2) * dt);
      if (thr === 0 && brk === 0) {
        const fr = (2.5 + Math.abs(vF) * 0.04 + (stunned ? 8 : 0)) * dt;
        vF = Math.abs(vF) <= fr ? 0 : vF - Math.sign(vF) * fr;
      }
      // chafado: se queda casi parado
      if (this.squash > 0) vF *= Math.exp(-5 * dt);
      const grip = this.grip * (this.surf === 'mud' && this.giant <= 0 ? 0.35 : this.surf === 'ice' ? 0.1 : 1) * (stunned ? 0.35 : 1) * (this.drift ? DRIFT.grip : 1);
      const vL0 = vL;
      vL *= Math.exp(-grip * dt);
      // derrapando, lo que la trasera pierde de lado se convierte casi todo en velocidad hacia
      // delante (sin pasar de la punta): derrapar no frena
      if (this.drift && vF > 0 && vF < maxV) {
        const lost = Math.hypot(vF, vL0) - Math.hypot(vF, vL);
        vF = Math.min(maxV, vF + lost * DRIFT.keep);
      }
    } else {
      vF *= Math.exp(-0.05 * dt);
    }
    if (this.state === 'caught') {
      vF *= Math.exp(-7 * dt);
      vL *= Math.exp(-7 * dt);
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) { this.state = 'ok'; this.netCaught = null; this.invuln = 0.8; this.blink = 0.8; }
    }
    this.accelVis += ((vF - vF0) / Math.max(dt, 1e-4) - this.accelVis) * Math.min(1, dt * 6);
    this.vF = vF;
    this.vx = fx * vF + rx * vL;
    this.vz = fz * vF + rz * vL;

    // --- movimiento horizontal ---
    const ox = this.x, oz = this.z, oIdx = this.idx, oS = this.s, oD = this.d;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    let p = tr.project(this.x, this.z, this.idx);
    this.idx = p.i; this.s = p.s; this.d = p.d;

    // barreras
    const lim = LIMIT - HALF_W * this.size;
    if (Math.abs(this.d) > lim) {
      const sg = Math.sign(this.d);
      const pen = Math.abs(this.d) - lim;
      const P = tr.pointAt(this.s);
      this.x -= P.rx * pen * sg; this.z -= P.rz * pen * sg;
      this.d = sg * lim;
      const vOut = (this.vx * P.rx + this.vz * P.rz) * sg;
      if (vOut > 0) {
        this.vx -= P.rx * sg * vOut * 1.35;
        this.vz -= P.rz * sg * vOut * 1.35;
        if (vOut > 5) this.events.push({ type: 'scrape', v: vOut });
      }
      const k = Math.exp(-0.8 * dt);
      this.vx *= k; this.vz *= k;
    }

    // --- suelo y vertical ---
    let surf = tr.surfaceAt(this.s, this.d);
    if (surf.h - this.y > 0.9) {
      // escalón demasiado alto: es una pared (borde de foso o lateral de rampa)
      const longBlocked = tr.surfaceAt(this.s, oD).h - this.y > 0.9;
      this.x = ox; this.z = oz; this.idx = oIdx; this.s = oS; this.d = oD;
      const P = tr.pointAt(this.s);
      if (longBlocked) {
        const v = this.vx * P.tx + this.vz * P.tz;
        this.vx -= P.tx * v * 1.2; this.vz -= P.tz * v * 1.2;
      } else {
        const v = this.vx * P.rx + this.vz * P.rz;
        this.vx -= P.rx * v * 1.3; this.vz -= P.rz * v * 1.3;
      }
      if (this.speed > 6) this.events.push({ type: 'wall' });
      surf = tr.surfaceAt(this.s, this.d);
    }
    const newGround = surf.h;
    this.vy -= G * dt;
    this.y += this.vy * dt;
    if (this.y <= newGround) {
      if (!this.onGround) {
        const impact = -this.vy;
        if (impact > 6) {
          this.compV -= Math.min(impact, 22) * 0.11;
          this.events.push({ type: 'land', v: impact });
        }
        this.vy = 0;
      } else {
        const slopeV = clamp((newGround - this.groundH) / dt, -30, 16);
        this.vy = Math.max(this.vy, slopeV);
        const curv = slopeV - this.lastSlopeV;
        if (curv > 4) this.compV -= curv * 0.01;
        this.lastSlopeV = slopeV;
      }
      this.y = newGround;
      this.onGround = true;
      this.airT = 0;
    } else {
      this.onGround = false;
      this.lastSlopeV = 0;
      this.airT += dt;
    }
    this.groundH = newGround;
    this.surf = surf.type;

    // ¿se ha caído al foso?
    if ((surf.type === 'pit' || surf.type === 'water') && this.y < surf.top - 1.4) {
      this.state = 'fallen';
      this.endDrift(false); this.driftLock = true;
      this.stateTimer = surf.type === 'water' ? 2.1 : 1.7;
      this.fall = { pit: surf.pit, water: surf.type === 'water', floor: surf.h, splashed: false };
      this.events.push({ type: surf.type === 'water' ? 'fallWater' : 'fallPit', liquid: surf.pit?.liquid });
    }

    this.updateLap(game);
    this.updateMisc(dt, tr, p);
  }

  // Modo gigante: crece y encoge suave; mientras dura no le afecta nada (ni aturdido ni red)
  updateGiant(dt) {
    if (this.giant > 0) {
      this.giant = Math.max(0, this.giant - dt);
      this.stun = 0;
      if (this.state === 'caught') { this.state = 'ok'; this.netCaught = null; }
      if (this.onGround && this.state === 'ok' && (this.stompT -= dt) <= 0) { this.stompT = GIANT.stomp; this.events.push({ type: 'stomp' }); }
    }
    const k = clamp(this.giantK + (this.giant > 0 ? dt : -dt) / GIANT.grow, 0, 1);
    this.giantK = k;
    this.size = this.baseSize * (1 + (GIANT.scale - 1) * k * k * (3 - 2 * k));
  }

  // Lleva el derrape y devuelve la dirección que se usa para girar este paso
  updateDrift(dt, ctrl, vF, stunned) {
    const steerIn = stunned ? 0 : ctrl.steer;
    const top = this.maxSpeed * this.speedMul;
    let d = this.drift;
    if (!ctrl.drift) this.driftLock = false;
    if (d) {
      const cancel = stunned || this.state !== 'ok' || this.stall > 0 || this.airT > DRIFT.maxAir || (ctrl.brake || 0) > 0.1 || vF < DRIFT.keepSpeed * top;
      if (cancel) { this.endDrift(false); this.driftLock = true; } // tras cancelarse hay que soltar y volver a pulsar
      else if (!ctrl.drift) this.endDrift(true);
    } else if (ctrl.drift && !this.driftLock && !((ctrl.brake || 0) > 0.1) && this.onGround && this.state === 'ok' && !stunned && this.stall <= 0 &&
      vF >= DRIFT.minSpeed * top && Math.abs(steerIn) >= DRIFT.minSteer) {
      // empieza: el lado queda fijado hacia donde se gira; si no se gira, queda armado
      this.drift = { side: Math.sign(steerIn), t: 0, level: 0 };
      this.hopT = DRIFT.hop;
      this.events.push({ type: 'driftStart', side: this.drift.side });
    }
    d = this.drift;
    if (!d) return steerIn;
    // a favor (1) cierra la curva, en contra (-1) la abre; siempre hacia el lado fijado
    const a = clamp(steerIn * d.side, -1, 1);
    const eff = a < 0 ? DRIFT.steerMid + (DRIFT.steerOpen - DRIFT.steerMid) * -a : DRIFT.steerMid + (DRIFT.steerTight - DRIFT.steerMid) * a;
    d.t += dt * (0.7 + 0.6 * Math.max(0, a));
    const lv = d.t >= DRIFT.levels[2] ? 3 : d.t >= DRIFT.levels[1] ? 2 : d.t >= DRIFT.levels[0] ? 1 : 0;
    if (lv > d.level) { d.level = lv; this.events.push({ type: 'driftLevel', level: lv }); }
    return d.side * eff;
  }

  // Termina el derrape; release: se ha soltado el botón (con nivel da turbo), si no se cancela
  endDrift(release) {
    const d = this.drift;
    if (!d) return;
    this.drift = null;
    if (release && d.level >= 1) {
      this.boost = Math.max(this.boost, DRIFT.boost[d.level]);
      this.events.push({ type: 'driftBoost', level: d.level });
    }
  }

  updateFallen(dt) {
    this.stateTimer -= dt;
    const f = this.fall;
    this.vx *= Math.exp(-3 * dt); this.vz *= Math.exp(-3 * dt);
    this.x += this.vx * dt; this.z += this.vz * dt;
    this.vy -= G * dt;
    this.y += this.vy * dt;
    if (f.water) {
      if (this.y < f.floor && !f.splashed) { f.splashed = true; this.events.push({ type: 'splash' }); this.vy = -2; }
      if (this.y < f.floor) this.vy = Math.max(this.vy, -1.2);
    } else if (this.y < f.floor) {
      if (this.vy < -6) this.events.push({ type: 'land', v: -this.vy });
      this.y = f.floor; this.vy = 0;
    }
    this.pitch += (0.5 - this.pitch) * Math.min(1, dt * 2);
    this.syncMesh(dt);
    if (this.stateTimer <= 0) this.respawn(f.pit.respawnS, 0, 12);
  }

  updateLap(game) {
    const L = this.track.length;
    if (this.prevS > L * 0.75 && this.s < L * 0.25) {
      if (this.checkpoint) {
        this.lap++;
        this.checkpoint = false;
        game.onLap(this);
      }
    } else if (this.prevS < L * 0.25 && this.s > L * 0.75) {
      this.lap--;
      this.checkpoint = true;
    }
    if (this.s > L * 0.4 && this.s < L * 0.6) this.checkpoint = true;
  }

  updateMisc(dt, tr, p) {
    // dirección contraria y atascos
    const tdot = Math.cos(this.th - p.th);
    if (tdot < -0.4 && this.vF > 3) this.wrongT += dt; else this.wrongT = 0;
    if (this.control.throttle > 0 && this.speed < 2 && this.state === 'ok' && this.squash <= 0) this.stuckT += dt; else this.stuckT = 0;

    // suspensión
    this.compV += (-95 * this.comp - 9 * this.compV) * dt;
    this.comp += this.compV * dt;
    if (this.comp < -0.3) { this.comp = -0.3; this.compV = 0; }
    if (this.comp > 0.55) { this.comp = 0.55; this.compV = 0; }

    // inclinación según el terreno o el vuelo
    if (this.onGround) {
      const rel = this.th - p.th;
      const c = Math.cos(rel), sn = Math.sin(rel);
      const hAt = (ds, dd) => {
        const q = tr.surfaceAt(this.s + ds * c - dd * sn, this.d + ds * sn + dd * c);
        return q.type === 'pit' || q.type === 'water' ? q.top : q.h;
      };
      const hf = hAt(1.9, 0), hb = hAt(-1.9, 0), hl = hAt(0, -1.6), hr = hAt(0, 1.6);
      const tp = Math.atan2(hf - hb, 3.8) + clamp(this.accelVis * 0.004, -0.06, 0.06);
      const trl = Math.atan2(hl - hr, 3.2) + clamp(-this.steerVis * this.vF * 0.0025, -0.07, 0.07);
      this.pitch += (tp - this.pitch) * Math.min(1, dt * 12);
      this.roll += (trl - this.roll) * Math.min(1, dt * 10);
    } else {
      const tp = clamp(Math.atan2(this.vy, Math.max(8, Math.abs(this.vF))) * 0.8, -0.55, 0.45);
      this.pitch += (tp - this.pitch) * Math.min(1, dt * 2.5);
      this.roll += (0 - this.roll) * Math.min(1, dt * 3);
    }
    this.syncMesh(dt);
  }

  syncMesh(dt) {
    const m = this.mesh;
    // derrape (solo visual): la carrocería gira hacia dentro de la curva y da un saltito al empezar
    const yawT = this.drift ? this.drift.side * DRIFT.yaw : 0;
    this.driftYaw += (yawT - this.driftYaw) * Math.min(1, dt / 0.15 * 2.5);
    if (this.hopT > 0) this.hopT = Math.max(0, this.hopT - dt);
    const hop = this.hopT > 0 ? Math.sin(Math.PI * (1 - this.hopT / DRIFT.hop)) * 0.5 * this.size : 0;
    // caballito: gira sobre el eje trasero, que sigue en el suelo (la física no cambia)
    this.wheelieK = (this.wheelieK || 0) + ((this.wheelie || 0) - (this.wheelieK || 0)) * Math.min(1, dt * 7);
    const wa = this.wheelieK * WHEELIE_ANG, rz = WHEEL_Z * this.size;
    const back = rz * (1 - Math.cos(wa));
    m.position.set(this.x - Math.cos(this.th) * back, this.y + hop + rz * Math.sin(wa), this.z - Math.sin(this.th) * back);
    // tamaño: gigante y aplastado (al chafarle: plano y ancho; se levanta con un rebote)
    let sy = 1;
    if (this.squashT < this.squashDur + CRUSH.rise) {
      const t = this.squashT;
      if (t < 0.07) sy = 1 - (1 - CRUSH.flatY) * (t / 0.07);
      else if (t < this.squashDur) sy = CRUSH.flatY;
      else { const u = (t - this.squashDur) / CRUSH.rise; sy = 1 - (1 - CRUSH.flatY) * Math.exp(-5 * u) * Math.cos(3 * Math.PI * u); }
    }
    const sxz = 1 + (CRUSH.flatXZ - 1) * clamp((1 - sy) / (1 - CRUSH.flatY), 0, 1.5);
    m.scale.set(this.size * sxz, this.size * sy, this.size * sxz);
    m.rotation.order = 'YXZ';
    m.rotation.set(-this.pitch - wa, Math.PI / 2 - this.th - this.driftYaw + this.spin, this.roll);
    // parpadea solo al reaparecer o al salir de la red; el supersalto protege sin parpadear
    // el gigante parpadea el último segundo, avisando de que se acaba
    const blink = this.blink > 0 && this.state === 'ok' ? Math.floor(this.blink * 12) % 2 === 0
      : this.giant > 0 && this.giant < GIANT.blink ? Math.floor(this.giant * 14) % 2 === 0 : true;
    m.visible = blink;
    animateTruck(this.parts, {
      wheelSpin: (this.onGround ? this.vF + this.rev * 28 : this.control.throttle * 30) * dt / WHEEL_R,
      steer: this.steerVis,
      comp: this.comp,
      dt,
    });
  }
}

export { wrapAng, clamp };
