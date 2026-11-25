// Pilotos controlados por el ordenador.
import { ROAD_HALF, LIMIT } from './track.js';
import { RAIN_HIT_R } from './obstacles.js';
import { DRIFT } from './vehicle.js';

const rand = (a, b) => a + Math.random() * (b - a);
// huecos entre las patas del saurópodo (patas en d = -6,5 y +5,5; ver obstacles.js)
const LEG_GAPS = [-0.5, 9.9];
// parte de las pasadas en que se aparta del tiranosaurio (según la habilidad)
const REX_DODGE = (skill) => Math.min(0.9, 0.2 + 0.25 * skill);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// Derrape de la IA. Según la habilidad (fácil 0,7, normal 1, difícil 1,5): en qué parte de las
// curvas lo intenta y hasta qué nivel de chispas aguanta antes de soltar para cobrar el turbo.
const AI_DRIFT = {
  chance: (skill) => clamp(0.2 + (skill - 0.7) * 1.35, 0.1, 0.95),
  maxLevel: (skill) => (skill < 0.85 ? 1 : skill < 1.25 ? 2 : 3),
  minNeed: 0.4,   // giro efectivo que pide la curva (en unidades de stick) para que merezca la pena
  exitNeed: 0.28, // por debajo, la curva se acaba: suelta
  cool: 0.6,      // segundos entre un derrape y el siguiente
};
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
    this.driftHold = false; // mantiene el botón de derrapar
    this.driftCurve = null; // null: no está en curva; true / false: en esta curva derrapa o no
    this.driftCool = 0;
    this.driftOut = 0; // tiempo seguido pidiendo menos giro del que da el derrape
  }

  // Giro (en unidades de stick, positivo hacia el lado de la curva) que pide la pista para
  // recorrer a esta velocidad el tramo [s + a, s + a + len]; con signo según el lado.
  curveNeed(s, a, len, speed) {
    const v = this.v;
    const k = this.track.curvatureAhead(s + a, len) / len; // radianes por metro
    const hi = clamp(speed / v.maxSpeed, 0, 1.3);
    return (k * speed) / (v.turnRate * (1 - 0.32 * hi));
  }

  // ¿Hay delante algo que esquivar o un paso delicado? Entonces no se derrapa (o se suelta).
  hazardAhead(game, dist) {
    const v = this.v, tr = this.track, ob = game.obstacles;
    const rel = (s) => { let d = tr.ahead(v.s, s); if (d > tr.length / 2) d -= tr.length; return d; };
    for (const o of ob.dodge) { const d = rel(o.s); if (d > -o.len / 2 - 3 && d < dist + 25) return true; }
    for (const b of ob.balls) { const d = rel(b.s); if (d > -4 && d < dist + 10) return true; }
    for (const n of ob.nets) { const d = rel(n.s); if (d > -4 && d < dist + 10) return true; }
    for (const b of ob.barrels) { if (!b.alive) continue; const d = rel(b.s); if (d > -3 && d < dist && Math.abs(b.d - v.d) < 7) return true; }
    for (const p of tr.pits) { const d0 = rel(p.s0), d1 = rel(p.s1); if (d1 > -4 && d0 < dist + 30) return true; }
    // olas y patas del saurópodo (Bahía Pirata y Cañón Jurásico)
    for (const w of tr.waves) { if (rel(w.s1) > -2 && rel(w.s0) < dist + 20) return true; }
    for (const L of tr.legs) { const d = rel(L.s); if (d > -6 && d < dist + 20) return true; }
    // tiranosaurios (Cañón Jurásico): nada de derrapar hacia su mordisco
    for (const R of tr.rex) { const d = rel(R.s); if (d > -8 && d < dist + 20) return true; }
    const R = ob.rain;
    if (R && R.active.length && tr.ahead(R.s0 - dist - 20, v.s) < R.s1 - R.s0 + dist + 20) return true;
    for (const p of game.projectiles.list) {
      if (p.kind === 'rocket' || p.owner === v) continue;
      const d = rel(p.s);
      if (d > -2 && d < dist + 10 && Math.abs(p.d - v.d) < 6) return true;
    }
    return false;
  }

  // Decide si mantener el botón de derrapar y, mientras se derrapa, convierte el giro que se
  // quiere en posición de stick (la dirección efectiva derrapando es lado × 0,45…1,25).
  driftControl(dt, game, steerRaw, speed, busy) {
    const v = this.v;
    this.driftCool = Math.max(0, this.driftCool - dt);
    const top = v.maxSpeed * v.speedMul;
    const look = Math.max(30, speed * 1.4);
    const needNow = this.curveNeed(v.s, 2, 18, speed);
    const needLong = this.curveNeed(v.s, 2, look, speed);
    const inCurve = Math.abs(needLong) >= AI_DRIFT.minNeed && Math.abs(needNow) >= AI_DRIFT.minNeed * 0.8 && Math.sign(needNow) === Math.sign(needLong);
    const d = v.drift;
    // hacia dónde va de lado respecto a la pista: derrapando, la trasera se abre hacia fuera
    const P = this.track.pointAt(v.s);
    const vd = v.vx * P.rx + v.vz * P.rz;
    const wall = LIMIT - 2 * v.size; // d del centro del camión al tocar la barrera
    if (d) {
      // en curva: el giro deseado pasa a posición de stick (a favor cierra, en contra abre)
      // derrapando se cierra hacia el lado de dentro (la trasera se abre): así no se acerca a la barrera
      const inside = clamp(0.06 * (4 - d.side * v.d), 0, 0.4);
      const e = steerRaw * d.side + inside;
      const k = clamp((e - DRIFT.steerMid) / (DRIFT.steerTight - DRIFT.steerMid), -1, 1);
      this.driftOut = e < 0.2 ? this.driftOut + dt : 0;
      const ahead = this.curveNeed(v.s, 0, Math.max(12, speed * 0.4), speed) * d.side;
      // por fuera de la curva, cerca de la barrera (o yendo hacia ella): suelta antes de rozarla
      const outer = -d.side * (v.d + vd * 0.6);
      const release = busy || this.driftOut > 0.25 || e < -0.1 || outer > wall - 2.5 || ahead < AI_DRIFT.exitNeed ||
        d.level >= AI_DRIFT.maxLevel(this.skill) || this.hazardAhead(game, speed * 1.2);
      if (release) {
        if (d.level === 0) this.driftCurve = false; // no le ha salido: en esta curva ya no lo intenta
        this.driftHold = false;
        this.driftCool = AI_DRIFT.cool;
        return { steer: clamp(steerRaw, -1, 1), drift: false };
      }
      return { steer: k * d.side, drift: true };
    }
    // sin derrapar: cada curva se decide una vez si se derrapa en ella
    if (!inCurve) this.driftCurve = null;
    else if (this.driftCurve === null) this.driftCurve = Math.random() < AI_DRIFT.chance(this.skill);
    const want = inCurve && this.driftCurve && !busy && this.driftCool <= 0 && v.onGround && v.state === 'ok' &&
      speed >= DRIFT.minSpeed * top * 1.05 && Math.abs(steerRaw) >= DRIFT.minSteer && Math.sign(steerRaw) === Math.sign(needLong) &&
      -Math.sign(needLong) * (v.d + vd * 0.6) < wall - 9 &&
      !this.hazardAhead(game, look + speed * 0.8);
    // si el derrape se canceló (golpe, salto...), hay que soltar el botón un momento para volver a empezar
    this.driftHold = want && !v.driftLock;
    return { steer: clamp(steerRaw, -1, 1), drift: this.driftHold };
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
    // olas y patas del saurópodo (Bahía Pirata y Cañón Jurásico)
    const sp = this.specialLane(s);
    if (sp !== null) return sp;
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
    // carril previsto (foso, barro...); se calcula siempre para que, al esquivar el tráfico,
    // el carril elegido quede cerca del puente o la rampa que viene detrás
    const planned = this.laneAt(v.s + la0);
    const rl = this.rollerLane(game, speed, planned);
    // esquivando una roca de fuego: el volantazo tiene que ser rápido (mira más cerca)
    const ml = rl === null ? this.meteorLane(game, speed) : null;
    const la = ml !== null && !this.careful ? 6 + speed * 0.25 : la0;
    const want = rl ?? ml ?? planned;
    // recién salido de un cruce (o de esquivar algo) con un foso cerca: vuelve rápido a su carril
    if (rl !== null || ml !== null) this.dodgeT = 3;
    else this.dodgeT = Math.max(0, (this.dodgeT || 0) - dt);
    const back = this.dodgeT > 0 && this.pitPick && tr.ahead(v.s, this.pitPick.p.s0) < 90;
    this.lane += (want - this.lane) * Math.min(1, dt * (ml !== null ? 6 : rl === null && !this.careful && !back ? 1.2 : 3));
    const P = tr.pointAt(v.s + la, this.lane);
    this.noiseT -= dt;
    if (this.noiseT <= 0) { this.noiseT = rand(0.3, 1.2); this.noise = rand(-0.12, 0.12) / this.skill; }
    const target = Math.atan2(P.z - v.z, P.x - v.x);
    const err = wrapAng(target - v.th);
    const steerRaw = err * (ml !== null ? 5 : 2.6) + (this.careful ? 0 : this.noise);
    let steer = Math.max(-1, Math.min(1, steerRaw));
    let throttle = 1, brake = 0;
    if (this.careful && speed > 27) { throttle = 0; brake = speed > 31 ? 0.5 : 0; }
    // cruce sin hueco libre ahora mismo: los pilotos hábiles levantan el pie y esperan el hueco
    if (rl !== null && this.rollerCost >= 9 && this.rollerTraffic && this.skill >= 1.5 && speed > 14) { throttle = 0; brake = 0.4; }
    if (Math.abs(err) > 1.7) {
      // mirando al revés: marcha atrás girando
      throttle = 0; brake = 1; steer = -Math.sign(err);
    } else if (Math.abs(err) > 0.55 && speed > 18) {
      throttle = 0.3;
    }
    const curv = Math.abs(tr.curvatureAhead(v.s, 25));
    if (curv > 0.9 && speed > 30) throttle = Math.min(throttle, 0.5);

    // derrape: no con nada que esquivar, frenando, en un puente estrecho ni mirando mal
    const busy = rl !== null || ml !== null || this.careful || brake > 0 || Math.abs(err) > 0.9;
    const dr = this.driftControl(dt, game, steerRaw, speed, busy);
    if (!busy) steer = dr.steer;
    const drift = dr.drift;

    // objetos
    let useItem = false;
    if (v.item === 'jump' && this.rocketClose(game)) useItem = true;
    else if (v.item === 'giant') useItem = true; // el modo gigante, nada más cogerlo
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
    return { steer, throttle, brake, item: useItem, drift };
  }

  // Olas: por el lado seco (si decide intentarlo en esta pasada). Saurópodo: por el hueco entre
  // las patas más cercano a su carril (casi siempre; a veces se despista y se la pega).
  specialLane(s) {
    const tr = this.track;
    if (!tr.waves.length && !tr.legs.length && !tr.rex.length) return null;
    for (const w of tr.waves) {
      if (tr.ahead(w.s0 - 25, s) < w.s1 - w.s0 + 25) {
        if (this.waveTry == null) this.waveTry = Math.random() < 0.3 + 0.2 * this.skill;
        if (!this.waveTry) return null;
        return w.side < 0 ? Math.max(3.5, Math.min(8, this.laneTarget)) : Math.min(-3.5, Math.max(-8, this.laneTarget));
      }
    }
    this.waveTry = null;
    for (const L of tr.legs) {
      if (tr.ahead(s, L.s) < 70 || tr.ahead(L.s, s) < 6) {
        if (this.legTry == null) this.legTry = Math.random() < 0.5 + 0.2 * this.skill;
        if (!this.legTry) return null;
        let best = LEG_GAPS[0];
        for (const g of LEG_GAPS) if (Math.abs(g - this.lane) < Math.abs(best - this.lane)) best = g;
        return best;
      }
    }
    this.legTry = null;
    // tiranosaurio: por la mitad del camino que no muerde (si decide hacer caso al aviso)
    for (const R of tr.rex) {
      if (tr.ahead(s, R.s) < 60 || tr.ahead(R.s, s) < 8) {
        if (this.rexTry?.R !== R) this.rexTry = { R, go: Math.random() < REX_DODGE(this.skill) };
        if (!this.rexTry.go) return null;
        return R.side < 0 ? Math.max(3.5, Math.min(8, this.laneTarget)) : Math.min(-3.5, Math.max(-8, this.laneTarget));
      }
    }
    return null;
  }

  // Zona de rodillos (troncos, bolas...) o de tráfico: carril por el que cruzarla sin que le
  // pillen, o null. Se decide una vez por pasada si se intenta (más a menudo cuanto más hábil
  // es el piloto).
  rollerLane(game, speed, planned = null) {
    const v = this.v, tr = this.track, ob = game.obstacles;
    const zone = ob.dodge.map((o) => {
      let ds = tr.ahead(v.s, o.s);
      if (ds > tr.length / 2) ds -= tr.length; // ya pasado: negativo
      return { o, ds, reach: o.len / 2 + 2.6 };
    }).filter((z) => z.ds > -z.reach && z.ds < 80);
    if (!zone.length) { this.rollerTry = null; return null; }
    // las bolas grandes (nieve, rocas) se ven venir de lejos: se intenta esquivarlas más a menudo
    if (this.rollerTry == null) this.rollerTry = Math.random() < 0.5 * this.skill * (zone[0].o.ball ? 1.5 : 1);
    if (!this.rollerTry) return null;
    const sp = Math.max(speed, 10);
    // con un foso de puente o rampa a un lado justo detrás, mejor un hueco cerca de su carril
    const pitNear = planned !== null && this.pitPick && tr.ahead(v.s, this.pitPick.p.s0) < 150;
    let best = null, bestCost = Infinity;
    for (let d = -10; d <= 10; d++) {
      let cost = Math.abs(d - v.d) * 0.05 - (d === this.rollerBest ? 0.3 : 0) + (pitNear ? Math.abs(d - planned) * 0.2 : 0);
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
    this.rollerCost = bestCost;
    this.rollerTraffic = zone.some((z) => z.o.loop);
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
