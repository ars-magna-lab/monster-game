// Pilotos controlados por el ordenador.
import { ROAD_HALF } from './track.js';

const rand = (a, b) => a + Math.random() * (b - a);
const wrapAng = (a) => {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
};

export class AIDriver {
  constructor(vehicle, track, { skill = 1, preferBridge = false } = {}) {
    this.v = vehicle;
    this.track = track;
    this.skill = skill;
    this.lane = rand(-6, 6);
    this.laneTarget = this.lane;
    this.laneTimer = rand(2, 6);
    this.preferBridge = preferBridge;
    this.itemDelay = 0;
    this.noise = 0;
    this.noiseT = 0;
  }

  laneAt(s) {
    const tr = this.track;
    // foso de cocodrilos: por el puente o por la rampa
    for (const p of tr.pits) {
      if (!p.bridge) continue;
      const before = tr.ahead(s, p.s0);
      const after = tr.ahead(p.s1, s);
      if (before < 110 || after < 6) {
        return this.preferBridge ? (p.bridge[0] + p.bridge[1]) / 2 : -5;
      }
    }
    // charcos de barro: esquivarlos si se puede
    for (const m of tr.mud) {
      const ds = tr.ahead(s, m.s);
      if (ds < m.rs + 12 || tr.ahead(m.s, s) < m.rs) {
        if (Math.abs(this.laneTarget - m.d) < m.rd + 2.5) {
          return m.d > 0 ? Math.max(-ROAD_HALF + 2, m.d - m.rd - 3) : Math.min(ROAD_HALF - 2, m.d + m.rd + 3);
        }
      }
    }
    return this.laneTarget;
  }

  control(dt, game) {
    const v = this.v;
    const tr = this.track;
    this.laneTimer -= dt;
    if (this.laneTimer <= 0) {
      this.laneTimer = rand(3, 7);
      this.laneTarget = rand(-7, 7);
    }
    // esquivar al camión de delante
    for (const o of game.vehicles) {
      if (o === v) continue;
      const ds = tr.ahead(v.s, o.s);
      if (ds > 0 && ds < 14 && Math.abs(o.d - this.lane) < 3.2) {
        this.laneTarget = o.d > 0 ? o.d - 5 : o.d + 5;
        this.laneTarget = Math.max(-ROAD_HALF + 2, Math.min(ROAD_HALF - 2, this.laneTarget));
      }
    }
    // esquivar barriles y neumáticos que hay en la pista
    for (const p of game.projectiles.list) {
      if (p.kind === 'rocket' || p.owner === v) continue;
      const ds = tr.ahead(v.s, p.s);
      if (ds > 2 && ds < 30 && Math.abs(p.d - this.lane) < 3.5 && Math.random() < this.skill * 0.6) {
        this.laneTarget = Math.max(-ROAD_HALF + 2, Math.min(ROAD_HALF - 2, p.d > 0 ? p.d - 5.5 : p.d + 5.5));
      }
    }
    const speed = Math.max(0, v.vF);
    const la = 9 + speed * 0.45;
    const want = this.laneAt(v.s + la);
    this.lane += (want - this.lane) * Math.min(1, dt * 1.2);
    const P = tr.pointAt(v.s + la, this.lane);
    this.noiseT -= dt;
    if (this.noiseT <= 0) { this.noiseT = rand(0.3, 1.2); this.noise = rand(-0.12, 0.12) / this.skill; }
    const target = Math.atan2(P.z - v.z, P.x - v.x);
    const err = wrapAng(target - v.th);
    let steer = Math.max(-1, Math.min(1, err * 2.6 + this.noise));
    let throttle = 1, brake = 0;
    if (Math.abs(err) > 1.7) {
      // mirando al revés: marcha atrás girando
      throttle = 0; brake = 1; steer = -Math.sign(err);
    } else if (Math.abs(err) > 0.55 && speed > 18) {
      throttle = 0.3;
    }
    const curv = Math.abs(tr.curvatureAhead(v.s, 25));
    if (curv > 0.9 && speed > 30) throttle = Math.min(throttle, 0.5);

    // objetos
    let useItem = false;
    if (v.item) {
      this.itemDelay -= dt;
      if (this.itemDelay <= 0) {
        if (v.item === 'nitro') {
          useItem = Math.abs(tr.curvatureAhead(v.s, 70)) < 0.3;
        } else if (v.item === 'jump') {
          useItem = game.obstacles.dangerAhead(v.s, 12 + speed * 0.15) && v.onGround;
          if (!useItem) {
            for (const p of tr.pits) {
              const toEnd = tr.ahead(v.s, p.s0);
              if (toEnd < 6 && v.onGround && speed < 24 && Math.abs(v.d - (p.bridge ? (p.bridge[0] + p.bridge[1]) / 2 : 99)) > 3) useItem = true;
            }
          }
        } else if (v.item === 'wave') {
          useItem = game.vehicles.some((o) => o !== v && o.state === 'ok' && Math.hypot(o.x - v.x, o.z - v.z) < 16);
        } else if (v.item === 'tire') {
          // alguien delante, en un carril parecido
          useItem = game.vehicles.some((o) => o !== v && o.state === 'ok' && tr.ahead(v.s, o.s) < 45 && Math.abs(o.d - v.d) < 3.5);
        } else if (v.item === 'barrel') {
          useItem = game.vehicles.some((o) => o !== v && o.state === 'ok' && tr.ahead(o.s, v.s) < 30) || this.itemDelay < -6;
        } else if (v.item === 'rocket') {
          useItem = v.place > 1;
        }
      }
    } else {
      this.itemDelay = rand(0.8, 3);
    }
    return { steer, throttle, brake, item: useItem };
  }
}
