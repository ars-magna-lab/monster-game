// Física arcade de un monster truck sobre la pista.
import { LIMIT } from './track.js';
import { buildTruck, animateTruck, WHEEL_R } from './trucks.js';

export const G = 24;
export const HALF_W = 2.0;
export const RADIUS = 2.3; // para choques entre camiones

const SURF_SPEED = { road: 1, ramp: 1, bridge: 0.92, grass: 0.74, mud: 0.5, pit: 1, water: 1 };

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
    this.vx = 0; this.vz = 0; this.vy = 0;
    this.onGround = true; this.groundH = 0; this.wasGround = true;
    this.idx = -1; this.s = 0; this.d = 0; this.prevS = 0;
    this.lap = 0; this.checkpoint = true; this.finished = false; this.finishTime = 0;
    this.lapStart = 0; this.lapTimes = []; this.place = 1;
    this.boost = 0; this.stun = 0; this.spin = 0; this.spinT = 0; this.spinDur = 0;
    this.state = 'ok'; this.stateTimer = 0; this.fall = null;
    this.comp = 0; this.compV = 0; this.pitch = 0; this.roll = 0;
    this.item = null; this.itemRoll = 0; this.invuln = 0; this.hitCool = 0;
    this.wrongT = 0; this.stuckT = 0; this.airT = 0; this.surf = 'road';
    this.control = { steer: 0, throttle: 0, brake: 0 };
    this.vF = 0; this.accelVis = 0; this.steerVis = 0; this.lastSlopeV = 0;
    this.netCaught = null;
    this.cool = {};
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
    this.syncMesh(0);
  }

  // Vuelve a poner el camión en la pista (tras caer o si se atasca)
  respawn(s, d = 0, speed = 10) {
    for (const p of this.track.pits) {
      if (this.track.ahead(p.s0 - 4, s) < p.s1 - p.s0 + 8) s = p.respawnS;
    }
    this.placeAt(s, clamp(d, -8, 8), speed);
    this.invuln = 1.6;
    this.events.push({ type: 'respawn' });
  }

  hit({ dirX = 0, dirZ = 0, push = 0, up = 0, speedMul = 1, stun = 0, kind = 'hit' }) {
    if (this.invuln > 0 || this.hitCool > 0 || this.state !== 'ok') return false;
    const k = this.stunMul;
    this.vx *= speedMul; this.vz *= speedMul;
    this.vx += dirX * push * k; this.vz += dirZ * push * k;
    if (up > 0) { this.vy = Math.max(this.vy, up * Math.min(1.2, k)); this.onGround = false; }
    if (stun > 0) {
      this.stun = Math.max(this.stun, stun * k);
      this.spinDur = this.stun; this.spinT = 0;
    }
    this.hitCool = 0.9;
    this.events.push({ type: kind });
    return true;
  }

  catchNet(net) {
    if (this.state !== 'ok' || this.invuln > 0) return false;
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
    } else if (it === 'wave') {
      game.shockwave(this);
      this.events.push({ type: 'wave' });
    }
  }

  update(dt, ctrl, game) {
    const tr = this.track;
    this.control = ctrl;
    this.prevS = this.s;
    this.boost = Math.max(0, this.boost - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.hitCool = Math.max(0, this.hitCool - dt);
    if (this.stun > 0) this.stun = Math.max(0, this.stun - dt);
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

    const stunned = this.stun > 0 || this.state === 'caught';
    let fx = Math.cos(this.th), fz = Math.sin(this.th);
    let vF = this.vx * fx + this.vz * fz;
    const steer = stunned ? 0 : ctrl.steer;
    this.steerVis += (steer - this.steerVis) * Math.min(1, dt * 10);
    if (this.onGround) {
      const spdF = clamp(Math.abs(vF) / 9, 0, 1);
      const hi = clamp(Math.abs(vF) / this.maxSpeed, 0, 1.3);
      const turn = steer * this.turnRate * spdF * (1 - 0.32 * hi) * (this.surf === 'mud' ? 0.8 : 1);
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
      const surfMul = SURF_SPEED[this.surf] ?? 1;
      const maxV = this.maxSpeed * this.speedMul * surfMul * (this.boost > 0 ? 1.32 : 1);
      const thr = stunned ? 0 : ctrl.throttle;
      const brk = stunned ? 0 : ctrl.brake;
      if (thr > 0 && vF < maxV) {
        const a = this.accel * thr * (this.boost > 0 ? 2.2 : 1) * (vF < 0 ? 2 : 1) * (1 - 0.35 * clamp(vF / maxV, 0, 1));
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
      const grip = this.grip * (this.surf === 'mud' ? 0.35 : 1) * (stunned ? 0.35 : 1);
      vL *= Math.exp(-grip * dt);
    } else {
      vF *= Math.exp(-0.05 * dt);
    }
    if (this.state === 'caught') {
      vF *= Math.exp(-7 * dt);
      vL *= Math.exp(-7 * dt);
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) { this.state = 'ok'; this.netCaught = null; this.invuln = 0.8; }
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
    const lim = LIMIT - HALF_W;
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
      this.stateTimer = surf.type === 'water' ? 2.1 : 1.7;
      this.fall = { pit: surf.pit, water: surf.type === 'water', floor: surf.h, splashed: false };
      this.events.push({ type: surf.type === 'water' ? 'fallWater' : 'fallPit' });
    }

    this.updateLap(game);
    this.updateMisc(dt, tr, p);
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
    if (this.control.throttle > 0 && this.speed < 2 && this.state === 'ok') this.stuckT += dt; else this.stuckT = 0;

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
    m.position.set(this.x, this.y, this.z);
    m.rotation.order = 'YXZ';
    m.rotation.set(-this.pitch, Math.PI / 2 - this.th + this.spin, this.roll);
    const blink = this.invuln > 0 && this.state === 'ok' ? Math.floor(this.invuln * 12) % 2 === 0 : true;
    m.visible = blink;
    animateTruck(this.parts, {
      wheelSpin: (this.onGround ? this.vF : this.control.throttle * 30) * dt / WHEEL_R,
      steer: this.steerVis,
      comp: this.comp,
      dt,
    });
  }
}

export { wrapAng, clamp };
