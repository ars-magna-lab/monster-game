// Pilotos controlados por el ordenador.
import { ROAD_HALF, LIMIT } from './track.js';
import { RAIN_HIT_R } from './obstacles.js';

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
    this.rollerTry = null;
    this.rollerBest = null;
    this.meteorBest = null;
    this.pitPick = null; // foso y carril elegidos para cruzarlo
    this.careful = false; // cruzando un puente estrecho: sin titubeos y sin correr tanto
  }

  // Carriles por los que se puede cruzar un foso (puentes y rampas que no ocupan todo el ancho).
  // null si hay rampa de lado a lado: se cruza por cualquier sitio.
  pitLanes(p) {
    if (p.aiLanes !== undefined) return p.aiLanes;
    const ramps = this.track.ramps.filter((r) => Math.abs(r.s1 - p.s0) < 1.5);
    if (ramps.some((r) => r.d0 <= -ROAD_HALF && r.d1 >= ROAD_HALF)) return (p.aiLanes = null);
    const lanes = p.bridges.map(([a, b]) => ({ d: (a + b) / 2, w: b - a, bridge: true }));
    for (const r of ramps) {
      const d = r.d0 <= -LIMIT ? r.d1 - 8 : r.d1 >= LIMIT ? r.d0 + 8 : (r.d0 + r.d1) / 2;
      lanes.push({ d, w: Math.min(r.d1, ROAD_HALF) - Math.max(r.d0, -ROAD_HALF), bridge: false });
    }
    return (p.aiLanes = lanes.length ? lanes : null);
  }

  laneAt(s) {
    const tr = this.track;
    // fosos con puente o rampa a un lado: elige por dónde cruzar y no lo cambia hasta pasarlo
    for (const p of tr.pits) {
      const lanes = this.pitLanes(p);
      if (!lanes) continue;
      const before = tr.ahead(s, p.s0);
      const after = tr.ahead(p.s1, s);
      if (before < 110 || after < 6) {
        if (this.pitPick?.p !== p) {
          let cands = lanes.filter((l) => l.bridge === this.preferBridge);
          if (!cands.length) cands = lanes;
          let best = cands[0];
          for (const l of cands) if (Math.abs(l.d - this.lane) < Math.abs(best.d - this.lane)) best = l;
          this.pitPick = { p, lane: best.d, narrow: best.w < 8 };
        }
        return this.pitPick.lane;
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
    // puente estrecho delante o debajo: va derecho a su carril, sin titubeos y sin correr tanto
    const pk = this.pitPick;
    this.careful = !!pk?.narrow && (tr.ahead(v.s, pk.p.s0) < 70 || tr.ahead(pk.p.s0, v.s) < pk.p.s1 - pk.p.s0 + 2);
    const la0 = this.careful ? 7 + speed * 0.3 : 9 + speed * 0.45;
    const rl = this.rollerLane(game, speed);
    // esquivando una roca de fuego: el volantazo tiene que ser rápido (mira más cerca)
    const ml = rl === null ? this.meteorLane(game, speed) : null;
    const la = ml !== null && !this.careful ? 6 + speed * 0.25 : la0;
    const want = rl ?? ml ?? this.laneAt(v.s + la0);
    this.lane += (want - this.lane) * Math.min(1, dt * (ml !== null ? 6 : rl === null && !this.careful ? 1.2 : 3));
    const P = tr.pointAt(v.s + la, this.lane);
    this.noiseT -= dt;
    if (this.noiseT <= 0) { this.noiseT = rand(0.3, 1.2); this.noise = rand(-0.12, 0.12) / this.skill; }
    const target = Math.atan2(P.z - v.z, P.x - v.x);
    const err = wrapAng(target - v.th);
    let steer = Math.max(-1, Math.min(1, err * (ml !== null ? 5 : 2.6) + (this.careful ? 0 : this.noise)));
    let throttle = 1, brake = 0;
    if (this.careful && speed > 27) { throttle = 0; brake = speed > 31 ? 0.5 : 0; }
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
    if (v.item === 'jump' && this.rocketClose(game)) useItem = true;
    else if (v.item) {
      this.itemDelay -= dt;
      if (this.itemDelay <= 0) {
        if (v.item === 'nitro') {
          useItem = Math.abs(tr.curvatureAhead(v.s, 70)) < 0.3;
        } else if (v.item === 'jump') {
          useItem = game.obstacles.dangerAhead(v.s, 12 + speed * 0.15) && v.onGround;
          if (!useItem) {
            for (const p of tr.pits) {
              const toEnd = tr.ahead(v.s, p.s0);
              if (toEnd < 6 && v.onGround && speed < 24 && !p.bridges.some(([a, b]) => v.d > a - 0.5 && v.d < b + 0.5)) useItem = true;
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

  // Zona de rodillos (troncos, bolas...): carril por el que cruzarla sin que le pillen, o null.
  // Se decide una vez por pasada si se intenta (más a menudo cuanto más hábil es el piloto).
  rollerLane(game, speed) {
    const v = this.v, tr = this.track, ob = game.obstacles;
    const zone = ob.logs.map((o) => {
      let ds = tr.ahead(v.s, o.s);
      if (ds > tr.length / 2) ds -= tr.length; // ya pasado: negativo
      return { o, ds, reach: o.len / 2 + 2.6 };
    }).filter((z) => z.ds > -z.reach && z.ds < 80);
    if (!zone.length) { this.rollerTry = null; return null; }
    // las bolas grandes (nieve, rocas) se ven venir de lejos: se intenta esquivarlas más a menudo
    if (this.rollerTry == null) this.rollerTry = Math.random() < 0.5 * this.skill * (zone[0].o.ball ? 1.5 : 1);
    if (!this.rollerTry) return null;
    const sp = Math.max(speed, 10);
    let best = null, bestCost = Infinity;
    for (let d = -10; d <= 10; d++) {
      let cost = Math.abs(d - v.d) * 0.05 - (d === this.rollerBest ? 0.3 : 0);
      for (const { o, ds, reach } of zone) {
        const t0 = Math.max(0, (ds - reach) / sp - 0.2), t1 = (ds + reach) / sp + 0.2;
        for (let t = t0; t <= t1; t += 0.05) {
          // el camión no cambia de carril al instante: unos 7 m/s de lado
          const dv = v.d + Math.max(-7 * t, Math.min(7 * t, d - v.d));
          if (Math.abs(ob.rollerD(o, t) - dv) < o.r + 2 * v.size + 0.6) { cost += 10; break; }
        }
      }
      if (cost < bestCost) { bestCost = cost; best = d; }
    }
    this.rollerBest = best;
    return best;
  }

  // Lluvia de rocas: si una diana le pilla de camino (la roca cae justo cuando pasa por ahí),
  // carril para apartarse, o null. Cada roca se decide una vez si se intenta esquivar.
  meteorLane(game, speed) {
    const R = game.obstacles.rain;
    if (!R || !R.active.length) return null;
    const v = this.v, tr = this.track;
    const sp = Math.max(speed, 8);
    const reach = RAIN_HIT_R + 2.2 * v.size;
    const threats = [];
    for (const m of R.active) {
      const left = m.T - m.t;
      let ds = tr.ahead(v.s, m.s);
      if (ds > tr.length / 2) ds -= tr.length;
      // dónde estará el camión cuando caiga la roca, respecto a la diana
      const at = ds - sp * left;
      if (Math.abs(at) > reach + 3) continue;
      m.ai = m.ai || new Map();
      if (!m.ai.has(this)) m.ai.set(this, Math.random() < 0.05 + 0.4 * this.skill);
      if (m.ai.get(this)) threats.push({ m, left });
    }
    if (!threats.length) return null;
    let best = null, bestCost = Infinity;
    for (let d = -11; d <= 11; d++) {
      let cost = Math.abs(d - v.d) * 0.05 - (d === this.meteorBest ? 0.5 : 0);
      for (const { m, left } of threats) {
        const dv = v.d + Math.max(-7 * left, Math.min(7 * left, d - v.d));
        // si no hay carril del todo libre, el que más se aleje de la diana
        const gap = Math.abs(dv - m.d);
        if (gap < reach) cost += 10 + 2 * (reach - gap);
      }
      if (cost < bestCost) { bestCost = cost; best = d; }
    }
    this.meteorBest = best;
    return best;
  }

  // ¿Un cohete que va a por mí está a punto de alcanzarme? Se decide una vez por cohete
  // si se intenta esquivar con el supersalto (más a menudo cuanto más hábil es el piloto).
  rocketClose(game) {
    const v = this.v, tr = this.track;
    for (const p of game.projectiles.list) {
      if (p.kind !== 'rocket' || p.target !== v || p.dead) continue;
      const gap = tr.ahead(p.s, v.s);
      if (gap > tr.length / 2) continue;
      const tt = (gap - 2.6 * v.size) / Math.max(1, p.speed - v.vF);
      if (tt > 0.35) continue;
      if (p.aiDodge === undefined) p.aiDodge = Math.random() < 0.4 * this.skill;
      if (p.aiDodge) return true;
    }
    return false;
  }
}
