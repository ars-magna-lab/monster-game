// Obstáculos y elementos de la pista que se mueven o interactúan con los camiones.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LIMIT, ROAD_HALF, STREET_GAP } from './track.js';
import { placeOnTrack } from './trackMesh.js';
import { HALF_W } from './vehicle.js';
import * as T from './textures.js';
import { normPlaces } from './circuits.js';

const rand = (a, b) => a + Math.random() * (b - a);
const UP = new THREE.Vector3(0, 1, 0);

// Lluvia de rocas: cada cuánto cae una (s), cuánto avisa (s), radio del golpe (m), parte de
// las rocas apuntadas a un camión, separación mínima entre rocas en el aire (m), marca (s)
export const RAIN_EVERY = [0.6, 0.9];
export const RAIN_FALL = [1.25, 1.45];
export const RAIN_HIT_R = 4.5;
const RAIN_AIMED = 0.7;
const RAIN_GAP = 12;
const RAIN_SCORCH = 5;
const RAIN_POOL = 6;
// Tráfico: los coches dan la vuelta a TRAFFIC_D metros del eje de la pista; la calle
// transversal mide STREET_W de ancho (más un paso de cebra a cada lado); la barrera se abre
// en ±STREET_GAP alrededor del centro del cruce (track.js y trackMesh.js)
const TRAFFIC_D = 80;
export const STREET_W = 10;

export class Obstacles {
  constructor(track, scene, game) {
    this.track = track;
    this.game = game;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.time = 0;
    this.turbos = []; this.boxes = []; this.logs = []; this.balls = [];
    this.nets = []; this.cars = []; this.barrels = []; this.crocs = [];
    this.rain = null; this.crossings = []; this.traffic = [];
    this.build();
    this.buildRain();
    this.buildTraffic();
    // lo que la IA esquiva eligiendo carril (rodillos y tráfico: misma cuenta en rollerD)
    this.dodge = [...this.logs, ...this.traffic];
  }

  // ¿Hay algún camión a menos de R metros (a lo largo de la pista) del tramo [s0, s1]?
  // Las mecánicas caras solo se actualizan y se dibujan entonces.
  anyNear(vehicles, s0, s1, R = 250) {
    const tr = this.track;
    for (const v of vehicles) {
      if (tr.ahead(v.s, s0) < R || tr.ahead(s1, v.s) < R || tr.ahead(s0, v.s) < s1 - s0) return true;
    }
    return false;
  }

  rel(a, b) {
    const L = this.track.length;
    let d = (a - b) % L;
    if (d > L / 2) d -= L;
    if (d < -L / 2) d += L;
    return d;
  }

  holder(s, d = 0, yOff = 0) {
    const g = new THREE.Group();
    placeOnTrack(g, this.track, s, d, this.track.baseAt(s) + yOff);
    this.group.add(g);
    return g;
  }

  build() {
    const tr = this.track;
    const A = (k, rel) => tr.at(k, rel);
    const PL = normPlaces(tr.circuit.places);
    const TH = tr.theme;

    // ---------- Turbos ----------
    const turboMat = new THREE.MeshBasicMaterial({ map: T.turboTex(), transparent: true, opacity: 0.95 });
    const tg = new THREE.PlaneGeometry(4.5, 7);
    tg.rotateX(-Math.PI / 2); tg.rotateY(Math.PI);
    const turboAt = PL.turbos.map(([k, rel, d]) => [A(k, rel), d]);
    for (const [s, d] of turboAt) {
      const h = this.holder(s, d, 0.07);
      h.add(new THREE.Mesh(tg, turboMat));
      this.turbos.push({ s, d });
    }
    this.turboTex = turboMat.map;

    // ---------- Cajas sorpresa ----------
    const boxGeo = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    const boxMat = new THREE.MeshStandardMaterial({ map: T.itemBoxTex(), emissive: 0xffffff, emissiveMap: T.itemBoxTex(), emissiveIntensity: 0.35, transparent: true, opacity: 0.92, roughness: 0.2 });
    for (const s of PL.boxes.map(([k, rel]) => A(k, rel))) {
      for (const d of [-8, -4, 0, 4, 8]) {
        const m = new THREE.Mesh(boxGeo, boxMat);
        m.castShadow = true;
        const P = tr.pointAt(s, d);
        m.position.set(P.x, tr.baseAt(s) + 1.8, P.z);
        this.group.add(m);
        this.boxes.push({ s, d, mesh: m, base: tr.baseAt(s) + 1.8, active: true, timer: 0, phase: Math.random() * 6 });
      }
    }

    // ---------- Cosas que ruedan de lado a lado (troncos, bolas de nieve, rocas, tuberías) ----------
    const roller = makeRoller(TH.roller);
    for (const RO of PL.rollers) {
      RO.list.forEach(([rel, period, phase]) => {
        const s = A(RO.seg, rel);
        const h = this.holder(s);
        const m = roller.mesh();
        m.castShadow = true;
        m.position.y = roller.r;
        h.add(m);
        this.logs.push({ s, period, phase, amp: 12.5, r: roller.r, len: roller.len, mesh: m, d: 0, vd: 0, ball: roller.ball });
      });
      if (RO.sign) this.signs(TH.rollerName, '#e0a100', A(RO.sign[0], RO.sign[1]));
    }

    // ---------- Bolas de demolición ----------
    // (en la selva son troncos colgantes: misma mecánica, otra malla)
    const swingLog = TH.swing === 'log';
    const frameMat = new THREE.MeshStandardMaterial(swingLog ? { map: T.barkTex(), color: 0xe0c8a8, roughness: 1 } : { color: 0xf0b400, metalness: 0.4, roughness: 0.5 });
    const chainMat = swingLog ? new THREE.MeshStandardMaterial({ color: 0xb89a62, roughness: 1 }) : new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.8, roughness: 0.4 });
    for (const B of PL.balls) {
      const g5 = tr.segs[B.seg];
      const s = tr.snap(g5.s0 + (B.frac !== undefined ? g5.length * B.frac : B.rel));
      const phase = B.phase || 0;
      const h = this.holder(s);
      const geos = [];
      for (const sd of [-1, 1]) {
        const p = swingLog ? new THREE.CylinderGeometry(0.6, 0.8, 19.6, 7) : new THREE.BoxGeometry(1, 19, 1);
        p.translate(sd * (LIMIT + 1.8), 9.5, 0);
        geos.push(p);
        for (let k = 0; k < (swingLog ? 0 : 6); k++) {
          const b = new THREE.BoxGeometry(0.2, 3.4, 0.2);
          b.rotateZ(0.5 * (k % 2 ? 1 : -1));
          b.translate(sd * (LIMIT + 1.8), 1.6 + k * 3, 0.55);
          geos.push(b);
        }
      }
      const beam = swingLog ? new THREE.CylinderGeometry(0.7, 0.7, 2 * LIMIT + 5, 8).rotateZ(Math.PI / 2) : new THREE.BoxGeometry(2 * LIMIT + 4.6, 1.2, 1.2);
      beam.translate(0, 19, 0);
      geos.push(beam);
      const frame = new THREE.Mesh(mergeGeometries(geos), frameMat);
      frame.castShadow = true;
      h.add(frame);
      const pivot = new THREE.Group();
      pivot.position.y = 18.4;
      h.add(pivot);
      if (swingLog) {
        // tronco horizontal colgado de dos lianas, a lo largo de la pista
        const ropes = [];
        for (const z of [-2.2, 2.2]) ropes.push(new THREE.CylinderGeometry(0.1, 0.1, 15, 5).translate(0, -7.5, z));
        pivot.add(new THREE.Mesh(mergeGeometries(ropes), chainMat));
        const lg = new THREE.CylinderGeometry(1.5, 1.5, 6.5, 12);
        lg.rotateX(Math.PI / 2);
        const ball = new THREE.Mesh(lg, swingLogMats());
        ball.position.y = -14 - 1.5;
        ball.castShadow = true;
        pivot.add(ball);
      } else {
        const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 14, 6), chainMat);
        chain.position.y = -7;
        pivot.add(chain);
        const ball = new THREE.Mesh(new THREE.SphereGeometry(2.2, 20, 16), new THREE.MeshStandardMaterial({ color: 0x2b2b2e, metalness: 0.7, roughness: 0.35 }));
        ball.position.y = -14 - 1.5;
        ball.castShadow = true;
        pivot.add(ball);
        const band = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.18, 8, 24), new THREE.MeshStandardMaterial({ color: 0xffcc00 }));
        band.position.copy(ball.position);
        band.rotation.y = Math.PI / 2;
        pivot.add(band);
      }
      this.balls.push({ s, pivot, phase, period: 3.8, amp: 1.05, L: 15.5, top: 18.4, d: 0, y: 0, vd: 0, len: swingLog ? 1.5 : 0 });
    }

    // ---------- La red ----------
    for (const [nk, nrel] of PL.nets) {
      const s = A(nk, nrel);
      const h = this.holder(s);
      const postMat = new THREE.MeshStandardMaterial({ color: 0x3a3a44, metalness: 0.6, roughness: 0.4 });
      const geos = [];
      for (const sd of [-1, 1]) {
        const p = new THREE.BoxGeometry(1.2, 12, 1.2);
        p.translate(sd * (LIMIT + 1.2), 6, 0);
        geos.push(p);
      }
      const beam = new THREE.BoxGeometry(2 * LIMIT + 3.6, 1.4, 1.4);
      beam.translate(0, 11.4, 0);
      geos.push(beam);
      const frame = new THREE.Mesh(mergeGeometries(geos), postMat);
      frame.castShadow = true;
      h.add(frame);
      // rollo de la red arriba
      const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2 * LIMIT + 1, 12), new THREE.MeshStandardMaterial({ color: 0xc9b98e, roughness: 1 }));
      roll.rotation.z = Math.PI / 2;
      roll.position.set(0, 10.3, 0.4);
      h.add(roll);
      const W = 2 * LIMIT + 1, H = 9.6;
      const ng = new THREE.PlaneGeometry(W, H, 30, 12);
      ng.translate(0, -H / 2, 0);
      const tex = T.netTex().clone();
      tex.needsUpdate = true;
      tex.repeat.set(W / 2.4, H / 2.4);
      const net = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1 }));
      net.position.set(0, 10.3, 0.4);
      net.castShadow = true;
      h.add(net);
      const lamps = [];
      for (const sd of [-1, 1]) {
        const l = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 10), new THREE.MeshBasicMaterial({ color: 0x22ff44 }));
        l.position.set(sd * (LIMIT - 1), 12.4, -0.6);
        h.add(l);
        lamps.push(l);
      }
      const board = makeBoard('¡CUIDADO CON LA RED!', '#e0a100', 512);
      board.position.set(0, 13.6, -0.75);
      board.rotation.y = Math.PI;
      board.scale.set(1.6, 1.6, 1.6);
      h.add(board);
      this.nets.push({ s, mesh: net, geo: ng, base0: Float32Array.from(ng.attributes.position.array), lamps, H, open: 0, cycle: 5.6, bulge: 0, bulgeX: 0, catchers: [] });
    }

    // ---------- Coches para aplastar ----------
    const carColors = [0x3d7ebf, 0xc0392b, 0x27ae60, 0xf39c12, 0x8e44ad, 0x95a5a6, 0x16a085, 0xd35400, 0xecf0f1];
    let ci = 0;
    for (const CR of PL.crush) {
      for (const [rel, ds] of CR.rows) {
        for (const d of ds) {
          const s = A(CR.seg, rel) + rand(-1, 1);
          const car = TH.crush === 'snowman' ? makeSnowman() : makeJunkCar(carColors[ci++ % carColors.length]);
          placeOnTrack(car.group, tr, s, d, tr.baseAt(s) + 0.03);
          car.group.rotation.y += rand(-0.25, 0.25) + (Math.random() < 0.3 ? Math.PI : 0);
          this.group.add(car.group);
          this.cars.push({ s, d, ...car, crushed: false, t: 0, timer: 0 });
        }
      }
      if (CR.sign) this.signs('¡APLASTA!', '#2ecc71', A(CR.sign[0], CR.sign[1]));
    }

    // ---------- Barriles explosivos (en el túnel) ----------
    const barrelGeo = new THREE.CylinderGeometry(0.75, 0.75, 1.6, 14);
    const barrelMat = [
      new THREE.MeshStandardMaterial({ map: T.barrelTex(), roughness: 0.5, metalness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x8a1010, roughness: 0.5, metalness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x8a1010 }),
    ];
    for (const BA of PL.barrels) for (const [rel, ds] of BA.rows) {
      for (const d of ds) {
        const s = A(BA.seg, rel);
        const P = tr.pointAt(s, d);
        const m = new THREE.Mesh(barrelGeo, barrelMat);
        m.position.set(P.x, tr.baseAt(s) + 0.8, P.z);
        m.rotation.y = Math.random() * 6;
        m.castShadow = true;
        this.group.add(m);
        this.barrels.push({ s, d, mesh: m, alive: true, timer: 0, fuse: 0 });
      }
    }

    // ---------- Barro ----------
    const slick = TH.patch === 'ice' || TH.patch === 'oil';
    const mudMat = new THREE.MeshStandardMaterial({ map: T.mudTex(), transparent: true, roughness: slick ? 0.05 : 0.18, metalness: TH.patch === 'oil' ? 0.5 : 0.05, depthWrite: false });
    for (const m of tr.mud) {
      const g = new THREE.PlaneGeometry(2 * m.rd * 1.15, 2 * m.rs * 1.15);
      g.rotateX(-Math.PI / 2);
      const h = this.holder(m.s, m.d, 0.06);
      const mesh = new THREE.Mesh(g, mudMat);
      mesh.receiveShadow = true;
      mesh.renderOrder = 1;
      h.add(mesh);
    }
    for (const [k, rel] of PL.patchSigns) {
      this.signs(TH.patchName, TH.patch === 'ice' ? '#2a6fdb' : TH.patch === 'oil' ? '#333333' : '#8b5a2b', A(k, rel));
    }

    // ---------- Cocodrilos ----------
    // en cada foso de agua con puente (si el tema tiene cocodrilos); unos 6 en total
    const crocPits = TH.crocs ? tr.pits.filter((p) => p.liquid === 'water' && (p.crocs ?? p.bridges.length > 0)) : [];
    crocPits.forEach((pit, k) => {
      // franjas de agua libres de puentes, para que paseen sin meterse bajo las tablas
      const free = [];
      let d0 = -LIMIT + 2.5;
      for (const [b0, b1] of [...pit.bridges].sort((a, b) => a[0] - b[0])) {
        if (b0 - 1.5 - d0 > 2) free.push([d0, b0 - 1.5]);
        d0 = Math.max(d0, b1 + 1.5);
      }
      if (LIMIT - 2.5 - d0 > 2) free.push([d0, LIMIT - 2.5]);
      pit.crocFree = free.length ? free : [[-LIMIT + 2.5, LIMIT - 2.5]];
      const n = Math.max(2, Math.floor(6 / crocPits.length) + (k < 6 % crocPits.length ? 1 : 0));
      for (let i = 0; i < n; i++) {
        const c = makeCroc();
        const croc = {
          ...c, pit, s: 0, d: 0, heading: rand(0, Math.PI * 2),
          ts: 0, td: 0, timer: 0, jaw: 0, snapT: rand(0, 3), wag: rand(0, 6), target: null,
        };
        this.pickCrocTarget(croc);
        croc.s = rand(pit.s0 + 3, pit.s1 - 3); croc.d = croc.td;
        this.group.add(c.group);
        this.crocs.push(croc);
      }
    });
  }

  // Cartel de aviso a los dos lados de la pista
  signs(text, color, s) {
    for (const side of [-1, 1]) {
      const sign = makeBoard(text, color);
      placeOnTrack(sign, this.track, s, side * (LIMIT + 3), 0);
      this.group.add(sign);
    }
  }

  pickCrocTarget(c) {
    const p = c.pit;
    const [a, b] = p.crocFree[Math.floor(Math.random() * p.crocFree.length)];
    c.ts = rand(p.s0 + 3, p.s1 - 3);
    c.td = rand(a, b);
    c.timer = rand(3, 7);
  }

  // ¿Hay algo peligroso delante? (para que la IA use el supersalto)
  dangerAhead(s, dist) {
    const ahead = (o) => { const r = this.rel(o.s, s); return r > 2 && r < dist; };
    if (this.logs.some(ahead)) return true;
    if (this.balls.some(ahead)) return true;
    if (this.traffic.some((o) => ahead(o) && Math.abs(o.d) < LIMIT + o.r)) return true;
    if (this.nets.some((n) => ahead(n) && n.open > 0.3)) return true;
    return false;
  }

  // Para la IA: dónde estará (d) un rodillo dentro de dt segundos (misma cuenta que en update)
  rollerD(o, dt) {
    // tráfico: avanza a velocidad constante y da la vuelta lejos de la pista
    if (o.loop) return o.dir * ((((this.time + dt) * o.speed + o.off) % o.P + o.P) % o.P - o.P / 2);
    const u = (((this.time + dt) / o.period + o.phase) % 1 + 1) % 1;
    return o.amp * (u < 0.5 ? 4 * u - 1 : 3 - 4 * u);
  }

  update(dt, vehicles) {
    this.time += dt;
    const t = this.time;
    const tr = this.track;
    const game = this.game;
    this.turboTex.offset.y = (this.turboTex.offset.y - dt * 1.6) % 1;

    // turbos
    for (const o of this.turbos) {
      for (const v of vehicles) {
        if (v.state !== 'ok' || !v.onGround) continue;
        if (Math.abs(this.rel(v.s, o.s)) < 3.6 && Math.abs(v.d - o.d) < 2.6) {
          if (v.boost < 1.0) v.events.push({ type: 'turbo' });
          v.boost = Math.max(v.boost, 1.3);
        }
      }
    }

    // cajas
    for (const b of this.boxes) {
      if (!b.active) {
        b.timer -= dt;
        if (b.timer <= 0) b.active = true;
      }
      const target = b.active ? 1 : 0;
      const sc = b.mesh.scale.x + (target - b.mesh.scale.x) * Math.min(1, dt * (b.active ? 4 : 14));
      b.mesh.scale.setScalar(Math.max(0.001, sc));
      b.mesh.visible = sc > 0.02;
      b.mesh.rotation.y += dt * 1.4;
      b.mesh.rotation.x = Math.sin(t * 1.3 + b.phase) * 0.35;
      b.mesh.position.y = b.base + Math.sin(t * 2 + b.phase) * 0.3;
      if (!b.active) continue;
      for (const v of vehicles) {
        if (v.state === 'fallen') continue;
        if (Math.abs(this.rel(v.s, b.s)) < 2.8 && Math.abs(v.d - b.d) < 2.8 && Math.abs(v.y + 1.5 - b.base) < 3.5) {
          b.active = false; b.timer = 4;
          if (!v.item && v.itemRoll <= 0) { v.itemRoll = v.isPlayer ? 1.3 : 0.8; }
          v.events.push({ type: 'box' });
          game.fx.sparks(b.mesh.position.x, b.mesh.position.y, b.mesh.position.z, 14);
          break;
        }
      }
    }

    // troncos
    for (const o of this.logs) {
      const u = ((t / o.period + o.phase) % 1 + 1) % 1;
      const tri = u < 0.5 ? 4 * u - 1 : 3 - 4 * u;
      o.d = o.amp * tri;
      o.vd = ((o.amp * 4) / o.period) * (u < 0.5 ? 1 : -1);
      o.mesh.position.x = -o.d;
      o.mesh.rotation.z += (o.vd / o.r) * dt;
      const top = tr.baseAt(o.s) + o.r * 2;
      for (const v of vehicles) {
        if (v.state !== 'ok') continue;
        if (Math.abs(this.rel(v.s, o.s)) < o.len / 2 + 2.6 && Math.abs(v.d - o.d) < o.r + HALF_W && v.y < top - 0.3) {
          const P = tr.pointAt(v.s);
          const sg = Math.sign(o.vd) || 1;
          if (v.hit({ dirX: P.rx * sg, dirZ: P.rz * sg, push: 10, up: 4, speedMul: 0.45, stun: 0.9, kind: 'log' })) {
            game.fx.sparks(v.x, v.y + 1.5, v.z, 8);
            game.fx.dust(v.x, v.y, v.z, 0, 0, [0.45, 0.3, 0.18], 8, 1.5);
          }
        }
      }
    }

    // bolas de demolición
    for (const o of this.balls) {
      const w = (2 * Math.PI) / o.period;
      const phi = o.amp * Math.sin(w * t + o.phase);
      const dphi = o.amp * w * Math.cos(w * t + o.phase);
      o.pivot.rotation.z = -phi;
      o.d = o.L * Math.sin(phi);
      o.y = tr.baseAt(o.s) + o.top - o.L * Math.cos(phi);
      o.vd = o.L * Math.cos(phi) * dphi;
      for (const v of vehicles) {
        if (v.state !== 'ok') continue;
        // el tronco colgante es alargado a lo largo de la pista
        const ds = Math.max(0, Math.abs(this.rel(v.s, o.s)) - o.len), dd = v.d - o.d, dy = v.y + 2 - o.y;
        if (ds * ds + dd * dd + dy * dy < 4.3 * 4.3) {
          const P = tr.pointAt(v.s);
          const sg = Math.sign(o.vd) || Math.sign(dd) || 1;
          if (v.hit({ dirX: P.rx * sg, dirZ: P.rz * sg, push: 16, up: 6, speedMul: 0.35, stun: 1.3, kind: 'ball' })) {
            game.fx.sparks(v.x, v.y + 2.5, v.z, 20);
          }
        }
      }
    }

    // red
    for (const n of this.nets) {
      const u = (t % n.cycle) / n.cycle * n.cycle;
      let open;
      if (u < 2.8) open = 0;
      else if (u < 3.2) open = (u - 2.8) / 0.4;
      else if (u < 4.9) open = 1;
      else open = 1 - (u - 4.9) / 0.7;
      n.open = open;
      n.mesh.scale.y = 0.06 + 0.94 * open;
      const warn = u > 1.6 && u < 2.8;
      for (const l of n.lamps) {
        const red = open > 0.05 || (warn && Math.floor(t * 6) % 2 === 0);
        l.material.color.setHex(red ? 0xff2222 : 0x22ff44);
      }
      const bottom = tr.baseAt(n.s) + 10.3 - n.H * n.mesh.scale.y;
      for (const v of vehicles) {
        if (v.state !== 'ok') continue;
        const r0 = this.rel(v.prevS, n.s), r1 = this.rel(v.s, n.s);
        if (r0 < 0 && r1 >= 0 && Math.abs(r1) < 10 && bottom < v.y + 3 && Math.abs(v.d) < LIMIT) {
          if (v.catchNet(n)) n.catchers.push(v);
        }
      }
      // deformación de la red alrededor de los atrapados
      n.catchers = n.catchers.filter((v) => v.state === 'caught' && v.netCaught === n);
      let target = 0, bx = n.bulgeX;
      for (const v of n.catchers) {
        target = Math.max(target, Math.min(5, Math.max(0, this.rel(v.s, n.s) + 2.5)));
        bx = -v.d;
      }
      n.bulge += (target - n.bulge) * Math.min(1, dt * 8);
      n.bulgeX = bx;
      if (n.bulge > 0.01 || n.dirty) {
        const pos = n.geo.attributes.position;
        const b0 = n.base0;
        for (let i = 0; i < pos.count; i++) {
          const x = b0[i * 3], y = b0[i * 3 + 1];
          const fy = Math.max(0, 1 - Math.pow((y + n.H * 0.55) / (n.H * 0.55), 2));
          pos.array[i * 3 + 2] = n.bulge * Math.exp(-((x - bx) ** 2) / 14) * fy;
        }
        pos.needsUpdate = true;
        n.dirty = n.bulge > 0.01;
      }
    }

    // coches aplastables
    for (const c of this.cars) {
      if (c.crushed) {
        c.t = Math.min(1, c.t + dt * 6);
        c.timer -= dt;
        if (c.timer <= 0) { c.crushed = false; }
      } else {
        c.t = Math.max(0, c.t - dt * 2);
      }
      const sy = 1 - 0.68 * c.t;
      c.group.scale.set(1 + 0.12 * c.t, sy, 1 + 0.08 * c.t);
      c.paint.color.copy(c.baseColor).multiplyScalar(1 - 0.35 * c.t);
      if (c.crushed) continue;
      for (const v of vehicles) {
        if (v.state !== 'ok') continue;
        if (Math.abs(this.rel(v.s, c.s)) < 3.3 && Math.abs(v.d - c.d) < 2.6 && v.y < tr.baseAt(c.s) + 1.8) {
          c.crushed = true; c.timer = 25;
          if (v.onGround) { v.vy = Math.max(v.vy, 4.5); v.onGround = false; }
          v.compV -= 1.2;
          v.boost = Math.max(v.boost, 0.35);
          v.events.push({ type: 'crush' });
          const P = tr.pointAt(c.s, c.d);
          game.fx.sparks(P.x, tr.baseAt(c.s) + 1, P.z, 12);
          game.fx.dust(P.x, tr.baseAt(c.s), P.z, 0, 0, [0.6, 0.6, 0.65], 4, 1.4);
          break;
        }
      }
    }

    // barriles
    for (const b of this.barrels) {
      if (!b.alive) {
        b.timer -= dt;
        if (b.timer <= 0) { b.alive = true; }
        b.mesh.scale.setScalar(Math.max(0.001, b.mesh.scale.x * 0.5));
        b.mesh.visible = false;
        continue;
      }
      // mecha encendida por la explosión de un barril vecino (en tiempo de juego)
      if (b.fuse > 0) {
        b.fuse -= dt;
        if (b.fuse <= 0) { this.explodeBarrel(b, vehicles); continue; }
      }
      b.mesh.visible = true;
      const sc = Math.min(1, b.mesh.scale.x + dt * 3);
      b.mesh.scale.setScalar(sc);
      for (const v of vehicles) {
        if (v.state !== 'ok') continue;
        if (Math.abs(this.rel(v.s, b.s)) < 3.2 && Math.abs(v.d - b.d) < 2.5 && v.y < tr.baseAt(b.s) + 1.8) {
          this.explodeBarrel(b, vehicles);
          break;
        }
      }
    }

    // cocodrilos
    this.updateCrocs(dt, vehicles);

    // lluvia de rocas y tráfico (solo con camiones cerca)
    this.updateRain(dt, vehicles);
    this.updateTraffic(dt, vehicles);
  }

  // ---------- Lluvia de rocas de fuego (volcán) ----------
  // Cada roca avisa con una diana en el suelo que se va llenando mientras cae; al llegar,
  // explota y golpea a quien esté cerca. Mallas de un pool pequeño, sin luces nuevas.
  buildRain() {
    const z = this.track.meteors[0];
    if (!z) return;
    const g = new THREE.Group();
    this.group.add(g);
    // roca incandescente con su estela: una sola malla (colores por vértice, sin luz)
    const rock = new THREE.DodecahedronGeometry(1.5, 0).toNonIndexed();
    const rc = [], pal = [0xff5a00, 0xc02800, 0xff9a20, 0x7a1800];
    for (let f = 0; f < rock.attributes.position.count / 3; f++) {
      const c = new THREE.Color(pal[f % pal.length]);
      for (let k = 0; k < 3; k++) rc.push(c.r, c.g, c.b);
    }
    rock.setAttribute('color', new THREE.Float32BufferAttribute(rc, 3));
    const tail = new THREE.ConeGeometry(1.25, 11, 7, 1, true).translate(0, 5.5, 0).toNonIndexed();
    const tc = [];
    const tailPos = tail.attributes.position;
    for (let i = 0; i < tailPos.count; i++) {
      const c = new THREE.Color(0xffd040).lerp(new THREE.Color(0xff3a00), tailPos.getY(i) / 11);
      tc.push(c.r, c.g, c.b);
    }
    tail.setAttribute('color', new THREE.Float32BufferAttribute(tc, 3));
    tail.deleteAttribute('uv'); rock.deleteAttribute('uv');
    const meteorGeo = mergeGeometries([rock, tail]);
    rock.dispose(); tail.dispose();
    const meteorMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    // diana: aro amarillo del tamaño del golpe y disco rojo que crece hasta llenarlo
    const decal = { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 };
    const ringGeo = new THREE.RingGeometry(RAIN_HIT_R - 0.7, RAIN_HIT_R, 28).rotateX(-Math.PI / 2);
    const discGeo = new THREE.CircleGeometry(RAIN_HIT_R - 0.7, 20).rotateX(-Math.PI / 2);
    const discMat = new THREE.MeshBasicMaterial({ color: 0xd42000, ...decal });
    const scorchGeo = new THREE.CircleGeometry(3.0, 16).rotateX(-Math.PI / 2);
    const scorchMat = new THREE.MeshBasicMaterial({ color: 0x2e1c14, ...decal });
    const free = [], scorch = [];
    for (let i = 0; i < RAIN_POOL; i++) {
      const m = new THREE.Mesh(meteorGeo, meteorMat);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xffd000, ...decal });
      const disc = new THREE.Mesh(discGeo, discMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      const mark = new THREE.Group();
      mark.add(disc, ring);
      const sc = new THREE.Mesh(scorchGeo, scorchMat);
      m.visible = mark.visible = sc.visible = false;
      g.add(m, mark, sc);
      free.push({ rock: m, mark, disc, ringMat });
      scorch.push({ mesh: sc, t: 0 });
    }
    this.rain = { s0: z.s0, s1: z.s1, group: g, timer: 0.3, active: [], free, scorch, on: false, aimed: new Map(), emitT: 0 };
    g.visible = false;
    if (z.sign !== undefined) this.signs('¡LLUVIA DE ROCAS!', '#ff6a00', z.sign);
  }

  // Lanza una roca: unas apuntadas un poco por delante de algún camión que esté en la zona
  // y otras al azar. Nunca dos a la vez en la misma franja de pista: siempre queda hueco.
  spawnMeteor(vehicles) {
    const tr = this.track, R = this.rain;
    if (!R.free.length) return;
    const T = rand(RAIN_FALL[0], RAIN_FALL[1]);
    const len = R.s1 - R.s0;
    const clear = (s) => R.active.every((m) => Math.abs(this.rel(m.s, s)) > RAIN_GAP);
    let s = null, d = 0;
    if (Math.random() < RAIN_AIMED) {
      const cands = vehicles.filter((v) => v.state === 'ok' && tr.ahead(R.s0 - 30, v.s) < len + 30 && !(R.aimed.get(v) > this.time));
      if (cands.length) {
        const v = cands[Math.floor(Math.random() * cands.length)];
        const ts = tr.wrap(v.s + Math.max(0, v.vF) * T * rand(0.85, 1.05));
        if (tr.ahead(R.s0 + 2, ts) < len - 4 && clear(ts)) {
          s = ts; d = Math.max(-12, Math.min(12, v.d + rand(-2, 2)));
          R.aimed.set(v, this.time + 1.4);
        }
      }
    }
    for (let k = 0; s === null && k < 4; k++) {
      const ts = R.s0 + rand(3, len - 3);
      if (clear(ts)) { s = ts; d = rand(-12, 12); }
    }
    if (s === null) return;
    const m = R.free.pop();
    const P = tr.pointAt(s, d);
    m.s = s; m.d = d; m.t = 0; m.T = T;
    m.x = P.x; m.z = P.z; m.y = tr.baseAt(s);
    // cae en diagonal desde lo alto, del lado del volcán
    m.sx = P.x + 22; m.sy = m.y + 62; m.sz = P.z - 16;
    const back = new THREE.Vector3(m.sx - m.x, m.sy - m.y, m.sz - m.z).normalize();
    m.rock.quaternion.setFromUnitVectors(UP, back);
    m.rock.visible = true;
    m.mark.position.set(P.x, m.y + 0.09, P.z);
    m.mark.visible = true;
    m.disc.scale.setScalar(0.05);
    m.ringMat.color.setHex(0xffd000);
    m.ai = null; // decisiones de la IA sobre esta roca (ver AIDriver.meteorLane)
    R.active.push(m);
  }

  updateRain(dt, vehicles) {
    const R = this.rain;
    if (!R) return;
    if (!this.anyNear(vehicles, R.s0, R.s1)) {
      // nadie cerca: no cae nada y no se actualiza nada
      if (R.on) {
        for (const m of R.active) { m.rock.visible = m.mark.visible = false; R.free.push(m); }
        R.active.length = 0;
        for (const c of R.scorch) { c.t = 0; c.mesh.visible = false; }
        R.aimed.clear();
        R.on = false; R.group.visible = false;
      }
      return;
    }
    R.on = true; R.group.visible = true;
    R.timer -= dt;
    if (R.timer <= 0) { R.timer = rand(RAIN_EVERY[0], RAIN_EVERY[1]); this.spawnMeteor(vehicles); }
    const fx = this.game.fx;
    R.emitT += dt;
    const emit = R.emitT >= 1 / 30;
    if (emit) R.emitT = 0;
    for (let i = R.active.length - 1; i >= 0; i--) {
      const m = R.active[i];
      m.t += dt;
      const f = Math.min(1, m.t / m.T);
      const x = m.sx + (m.x - m.sx) * f, y = m.sy + (m.y + 1.2 - m.sy) * f, z = m.sz + (m.z - m.sz) * f;
      m.rock.position.set(x, y, z);
      m.disc.scale.setScalar(0.05 + 0.95 * f);
      // el último momento: el aro parpadea
      if (m.T - m.t < 0.4) m.ringMat.color.setHex(Math.floor(m.t * 14) % 2 ? 0xff2000 : 0xffffff);
      if (emit) fx.glow.emit({ x, y, z, vx: (Math.random() - 0.5) * 3, vy: 2, vz: (Math.random() - 0.5) * 3, life: 0.45, size: 2.2, grow: -2, color: [1, 0.5, 0.12], alpha: 1, gravity: 0, drag: 2 });
      if (m.t < m.T) continue;
      this.meteorImpact(m, vehicles);
      m.rock.visible = m.mark.visible = false;
      R.active.splice(i, 1);
      R.free.push(m);
    }
    for (const c of R.scorch) {
      if (c.t <= 0) continue;
      c.t -= dt;
      c.mesh.scale.setScalar(Math.max(0.01, Math.min(1, c.t / 1.2)));
      if (c.t <= 0) c.mesh.visible = false;
    }
  }

  meteorImpact(m, vehicles) {
    const game = this.game, R = this.rain;
    game.fx.explosion(m.x, m.y, m.z);
    game.boom(m.x, m.y, m.z);
    for (const v of vehicles) {
      if (v.state !== 'ok') continue;
      const dx = v.x - m.x, dz = v.z - m.z;
      const dist = Math.hypot(dx, dz);
      if (dist < RAIN_HIT_R && v.y < m.y + 4) {
        const k = 1 / Math.max(0.5, dist);
        // a quien acaba de llevarse una no se le apunta en un rato (que no le caigan en cadena)
        if (v.hit({ dirX: dx * k, dirZ: dz * k, push: 6, up: 10, speedMul: 0.5, stun: 1.1, kind: 'meteor' })) R.aimed.set(v, this.time + 2.5);
      }
    }
    // marca chamuscada unos segundos (la más vieja se reutiliza)
    let c = R.scorch[0];
    for (const o of R.scorch) if (o.t < c.t) c = o;
    c.t = RAIN_SCORCH;
    c.mesh.position.set(m.x, m.y + 0.07, m.z);
    c.mesh.rotation.y = Math.random() * 6;
    c.mesh.scale.setScalar(1);
    c.mesh.visible = true;
  }

  // ---------- Tráfico que cruza (ciudad) ----------
  // Calle transversal con coches a velocidad constante, siempre en el mismo sentido en cada
  // cruce y con huecos fijos entre ellos. Se tratan como los rodillos (otra ley de movimiento
  // en rollerD), así la IA los esquiva eligiendo carril con rollerLane.
  buildTraffic() {
    const tr = this.track;
    if (!tr.crossings.length) return;
    const A = trafficAssets();
    this.trafficAssets = A;
    tr.crossings.forEach((c, ci) => {
      const h = this.holder(c.s);
      const base = tr.baseAt(c.s);
      // postes justo donde acaba la barrera (el hueco va ajustado a las muestras de la pista)
      const gate = new THREE.Group();
      gate.scale.z = (c.g1 - c.g0) / (2 * STREET_GAP);
      gate.position.z = (c.g0 + c.g1) / 2 - c.s;
      h.add(gate);
      const street = new THREE.Mesh(A.streetGeo, A.streetMat);
      street.position.y = 0.06;
      street.receiveShadow = true;
      h.add(street);
      const st = new THREE.Mesh(A.staticGeo, A.metalMat);
      st.castShadow = true;
      const arms = new THREE.Mesh(A.armGeo, A.armMat);
      arms.castShadow = true;
      gate.add(st, arms, new THREE.Mesh(A.kerbGeo, A.kerbMat));
      h.add(new THREE.Mesh(A.lampGeoA, A.lampA), new THREE.Mesh(A.lampGeoB, A.lampB));
      // coches: posiciones fijas en un circuito cerrado de P metros (vuelven a salir por el otro lado)
      const kinds = ci % 2 ? ['car', 'car', 'van', 'car', 'car'] : ['car', 'bus', 'car', 'car', 'car'];
      const P = 2 * TRAFFIC_D;
      const total = kinds.reduce((a, k) => a + A.size[k].len, 0);
      const gap = (P - total) / kinds.length;
      const jit = [1.18, 0.86, 1.08, 0.88, 1.0];
      let q = 0;
      const cars = [];
      kinds.forEach((k, i) => {
        const sz = A.size[k];
        const geo = k === 'car' ? A.carGeos[(ci * 2 + i) % A.carGeos.length] : A.geos[k];
        const mesh = new THREE.Mesh(geo, A.carMat);
        mesh.castShadow = true;
        mesh.rotation.y = c.dir > 0 ? -Math.PI / 2 : Math.PI / 2;
        h.add(mesh);
        const o = {
          s: c.s, loop: true, dir: c.dir, speed: c.speed, P, off: q + sz.len / 2, r: sz.len / 2, len: sz.w,
          ball: true, d: 0, vd: c.dir * c.speed, mesh, top: base + sz.h, kind: k,
        };
        q += sz.len + gap * jit[i % jit.length];
        cars.push(o);
        this.traffic.push(o);
      });
      if (c.sign !== undefined) this.signs('¡CRUCE!', '#ffcc00', c.sign);
      this.crossings.push({ c, holder: h, cars, on: true, hornT: 0 });
    });
  }

  updateTraffic(dt, vehicles) {
    if (!this.crossings.length) return;
    const tr = this.track, game = this.game, A = this.trafficAssets;
    let any = false;
    for (const X of this.crossings) {
      const on = this.anyNear(vehicles, X.c.s0, X.c.s1);
      if (on !== X.on) { X.on = on; X.holder.visible = on; }
      if (!on) continue;
      any = true;
      for (const o of X.cars) {
        o.d = this.rollerD(o, 0);
        o.mesh.position.x = -o.d;
        if (Math.abs(o.d) > LIMIT + o.r + HALF_W) continue;
        for (const v of vehicles) {
          if (v.state !== 'ok') continue;
          if (Math.abs(this.rel(v.s, o.s)) < o.len / 2 + 2.6 && Math.abs(v.d - o.d) < o.r + HALF_W && v.y < o.top - 0.3) {
            const P = tr.pointAt(v.s);
            if (v.hit({ dirX: P.rx * o.dir, dirZ: P.rz * o.dir, push: 12, up: 3, speedMul: 0.4, stun: 0.9, kind: 'car' })) {
              game.fx.sparks(v.x, v.y + 1.5, v.z, 10);
            }
          }
        }
      }
      // claxon flojo si un jugador se acerca al cruce y viene un coche
      X.hornT -= dt;
      if (X.hornT > 0) continue;
      for (const v of vehicles) {
        if (!v.isPlayer || v.state !== 'ok') continue;
        const ahead = tr.ahead(v.s, X.c.s);
        if (ahead < 12 || ahead > 70) continue;
        const car = X.cars.find((o) => o.dir * o.d < -LIMIT + 2 && o.dir * o.d > -45);
        if (car) {
          const P = tr.pointAt(car.s, car.d);
          game.sound3d('horn', P.x, P.z, 0.55);
          X.hornT = 3.5;
          break;
        }
      }
    }
    // luces de aviso que se encienden por turnos
    if (any) {
      const ph = Math.floor(this.time * 2.4) % 2;
      A.lampA.color.setHex(ph ? 0xffb000 : 0x3a2a10);
      A.lampB.color.setHex(ph ? 0x3a2a10 : 0xffb000);
    }
  }

  explodeBarrel(b, vehicles) {
    b.alive = false; b.timer = 12; b.fuse = 0;
    const P = this.track.pointAt(b.s, b.d);
    const y = this.track.baseAt(b.s);
    this.game.fx.explosion(P.x, y, P.z);
    this.game.boom(P.x, y, P.z);
    for (const v of vehicles) {
      if (v.state !== 'ok') continue;
      const dx = v.x - P.x, dz = v.z - P.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 7 && v.y < y + 4) {
        const k = 1 / Math.max(1, dist);
        v.hit({ dirX: dx * k, dirZ: dz * k, push: 6, up: 11, speedMul: 0.5, stun: 1.1, kind: 'boom' });
      }
    }
    // reacción en cadena con los barriles cercanos
    for (const o of this.barrels) {
      if (o.alive && o !== b && !(o.fuse > 0) && Math.abs(this.rel(o.s, b.s)) < 5 && Math.abs(o.d - b.d) < 5) {
        o.fuse = 0.18;
      }
    }
  }

  updateCrocs(dt, vehicles) {
    if (!this.crocs.length) return;
    const tr = this.track;
    for (const c of this.crocs) {
      const p = c.pit;
      // ¿alguien ha caído al agua de este foso?
      let prey = null;
      for (const v of vehicles) if (v.state === 'fallen' && v.fall?.water && v.fall.pit === p) prey = v;
      c.timer -= dt;
      let ts = c.ts, td = c.td, speed = 1.6;
      if (prey) {
        const pp = tr.project(prey.x, prey.z, prey.idx);
        ts = pp.s; td = pp.d; speed = 5.5;
      } else if (c.timer <= 0) this.pickCrocTarget(c);
      const ds = this.rel(ts, c.s), dd = td - c.d;
      const dist = Math.hypot(ds, dd);
      const want = Math.atan2(dd, ds);
      let da = want - c.heading;
      while (da > Math.PI) da -= 2 * Math.PI;
      while (da < -Math.PI) da += 2 * Math.PI;
      c.heading += Math.max(-1.5 * dt, Math.min(1.5 * dt, da));
      if (dist > (prey ? 2.5 : 1)) {
        c.s += Math.cos(c.heading) * speed * dt;
        c.d += Math.sin(c.heading) * speed * dt;
      }
      c.s = Math.max(p.s0 + 2.5, Math.min(p.s1 - 2.5, c.s));
      c.d = Math.max(-LIMIT + 2, Math.min(LIMIT - 2, c.d));
      // mandíbula
      c.snapT -= dt * (prey && dist < 6 ? 3 : 1);
      if (c.snapT <= 0) {
        c.snapT = rand(2, 4);
        c.jaw = 0.75;
        if (prey && dist < 7) this.game.sound3d('snap', prey.x, prey.z, 0.8);
      }
      c.jaw = Math.max(0, c.jaw - dt * (c.jaw > 0.4 ? 0.6 : 2.5));
      const open = c.jaw > 0.4 ? (0.75 - c.jaw) / 0.35 * 0.7 : c.jaw / 0.4 * 0.7;
      c.jawPivot.rotation.x = open;
      c.headPivot.rotation.x = -open * 0.4;
      c.wag += dt * (speed > 2 ? 9 : 3);
      c.tail.rotation.y = Math.sin(c.wag) * 0.45;
      const P = tr.pointAt(c.s, c.d);
      c.group.position.set(P.x, p.floor - 0.05 + Math.sin(c.wag * 0.5) * 0.05, P.z);
      c.group.rotation.y = Math.PI / 2 - (P.th + c.heading);
    }
  }
}

function makeBoard(text, color, w = 256) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = w; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = color; x.fillRect(0, 0, w, 128);
  x.strokeStyle = '#111'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, 118);
  x.fillStyle = '#111'; x.font = 'bold 44px Impact, Arial Black, sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  for (let fs = 44; fs > 16 && x.measureText(text).width > w - 28; fs -= 2) x.font = `bold ${fs}px Impact, Arial Black, sans-serif`;
  x.fillText(text, w / 2, 66);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const bw = (w / 128) * 3;
  const board = new THREE.Mesh(new THREE.PlaneGeometry(bw, 3), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide }));
  board.position.y = w > 256 ? 0 : 4.5;
  g.add(board);
  if (w <= 256) {
    for (const sx of [-bw / 2 + 0.4, bw / 2 - 0.4]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 6), new THREE.MeshStandardMaterial({ color: 0x555555 }));
      p.position.set(sx, 2.25, 0.05);
      g.add(p);
    }
  }
  return g;
}

// Lo que rueda de lado a lado: mallas compartidas y medidas para los choques
function makeRoller(kind) {
  if (kind === 'snowball' || kind === 'boulder') {
    const r = kind === 'snowball' ? 2.0 : 1.9;
    const geo = kind === 'snowball' ? new THREE.IcosahedronGeometry(r, 2) : new THREE.DodecahedronGeometry(r, 1);
    const mat = kind === 'snowball'
      ? new THREE.MeshStandardMaterial({ color: 0xf6f9fc, roughness: 0.85, flatShading: true })
      : new THREE.MeshStandardMaterial({ map: T.rockTex(), color: 0x6a5a52, roughness: 1, flatShading: true, emissive: 0x3a0a00 });
    return { r, len: 2 * r, ball: true, mesh: () => new THREE.Mesh(geo, mat) };
  }
  if (kind === 'pipe') {
    const geo = new THREE.CylinderGeometry(1.3, 1.3, 7, 16, 1, true);
    geo.rotateX(Math.PI / 2);
    const inner = new THREE.CylinderGeometry(1.0, 1.0, 7.02, 16, 1, true);
    inner.rotateX(Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x9a9a96, roughness: 0.9, side: THREE.DoubleSide });
    const dark = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 1, side: THREE.BackSide });
    return {
      r: 1.3, len: 7, ball: false,
      mesh: () => { const g = new THREE.Group(); const a = new THREE.Mesh(geo, mat); a.castShadow = true; g.add(a, new THREE.Mesh(inner, dark)); return g; },
    };
  }
  const logGeo = new THREE.CylinderGeometry(1.0, 1.0, 7, 14);
  logGeo.rotateX(Math.PI / 2);
  const logMats = [
    new THREE.MeshStandardMaterial({ map: T.barkTex(), roughness: 1 }),
    new THREE.MeshStandardMaterial({ map: T.ringsTex(), roughness: 1 }),
    new THREE.MeshStandardMaterial({ map: T.ringsTex(), roughness: 1 }),
  ];
  return { r: 1.0, len: 7, ball: false, mesh: () => new THREE.Mesh(logGeo, logMats) };
}

let swingMats = null;
function swingLogMats() {
  if (!swingMats) swingMats = [new THREE.MeshStandardMaterial({ map: T.barkTex(), roughness: 1 }), new THREE.MeshStandardMaterial({ map: T.ringsTex(), roughness: 1 }), new THREE.MeshStandardMaterial({ map: T.ringsTex(), roughness: 1 })];
  return swingMats;
}

// Muñeco de nieve para aplastar (mismo formato que los coches)
function makeSnowman() {
  const group = new THREE.Group();
  const snow = new THREE.MeshStandardMaterial({ color: 0xf4f8fc, roughness: 0.9 });
  const parts = [];
  for (const [r, y] of [[1.1, 1.0], [0.8, 2.5], [0.55, 3.6]]) {
    const g = new THREE.SphereGeometry(r, 12, 9);
    g.translate(0, y, 0);
    parts.push(g);
  }
  const body = new THREE.Mesh(mergeGeometries(parts), snow);
  body.castShadow = true;
  group.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.6, 8).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xff7a00 }));
  nose.position.set(0, 3.6, 0.75);
  group.add(nose);
  const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.7, 12), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
  hat.position.y = 4.3;
  group.add(hat);
  const paint = new THREE.MeshStandardMaterial({ color: 0xd42a20 });
  const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.14, 6, 14).rotateX(Math.PI / 2), paint);
  scarf.position.y = 3.15;
  group.add(scarf);
  return { group, paint, baseColor: paint.color.clone() };
}

function makeJunkCar(color) {
  const group = new THREE.Group();
  const baseColor = new THREE.Color(color);
  const paint = new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.55 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x9fc6d8, metalness: 0.4, roughness: 0.15 });
  const bodyG = new THREE.BoxGeometry(1.9, 0.75, 4.3);
  bodyG.translate(0, 0.75, 0);
  const cabG = new THREE.BoxGeometry(1.7, 0.65, 2.1);
  cabG.translate(0, 1.45, -0.25);
  const body = new THREE.Mesh(mergeGeometries([bodyG, cabG]), paint);
  body.castShadow = true;
  group.add(body);
  const win = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.45, 1.9), glass);
  win.position.set(0, 1.47, -0.25);
  group.add(win);
  const wg = [];
  for (const x of [-0.85, 0.85]) for (const z of [-1.35, 1.35]) {
    const w = new THREE.CylinderGeometry(0.38, 0.38, 0.3, 12);
    w.rotateZ(Math.PI / 2);
    w.translate(x, 0.38, z);
    wg.push(w);
  }
  group.add(new THREE.Mesh(mergeGeometries(wg), dark));
  // óxido
  const rust = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.3, 1.2), new THREE.MeshStandardMaterial({ color: 0x8a4b20, roughness: 1 }));
  rust.position.set(0, 0.55, 1.2);
  group.add(rust);
  return { group, paint, baseColor };
}

function makeCroc() {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0x3f6b2a, roughness: 0.7 });
  const belly = new THREE.MeshStandardMaterial({ color: 0x9fb36a, roughness: 0.8 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 3.2), skin);
  body.castShadow = true;
  group.add(body);
  // escamas del lomo
  for (let i = 0; i < 6; i++) {
    const sp = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 4), skin);
    sp.position.set(0, 0.4, -1.2 + i * 0.45);
    group.add(sp);
  }
  const headPivot = new THREE.Group();
  headPivot.position.set(0, 0.1, 1.55);
  group.add(headPivot);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 1.5), skin);
  head.position.set(0, 0.12, 0.75);
  headPivot.add(head);
  for (let i = 0; i < 5; i++) for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.18, 4), white);
    t.position.set(sx * 0.4, -0.08, 0.3 + i * 0.28);
    t.rotation.x = Math.PI;
    headPivot.add(t);
  }
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffe14d, emissive: 0x332a00 }));
    eye.position.set(sx * 0.28, 0.38, 0.25);
    headPivot.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshStandardMaterial({ color: 0x000000 }));
    pupil.position.set(sx * 0.3, 0.42, 0.37);
    headPivot.add(pupil);
  }
  const jawPivot = new THREE.Group();
  jawPivot.position.set(0, 0, 1.55);
  group.add(jawPivot);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.2, 1.45), belly);
  jaw.position.set(0, -0.12, 0.72);
  jawPivot.add(jaw);
  const tail = new THREE.Group();
  tail.position.set(0, 0, -1.6);
  group.add(tail);
  const tg = new THREE.ConeGeometry(0.5, 2.6, 6);
  tg.rotateX(-Math.PI / 2);
  tg.translate(0, 0, -1.3);
  const tm = new THREE.Mesh(tg, skin);
  tm.scale.set(1, 0.6, 1);
  tail.add(tm);
  for (const sx of [-1, 1]) for (const z of [-0.9, 0.9]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.25, 0.5), skin);
    leg.position.set(sx * 0.75, -0.2, z);
    leg.rotation.y = sx * 0.5;
    group.add(leg);
  }
  group.scale.setScalar(1.5);
  return { group, headPivot, jawPivot, tail };
}

// ---------- Piezas del tráfico de la ciudad ----------
// Se crean una vez por circuito y las comparten los dos cruces: coches con colores por
// vértice (una sola malla y un solo material para todos), calle, postes y luces.
const tint = (geo, hex) => {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  g.deleteAttribute('uv');
  return g;
};
const tbox = (w, h, l, x, y, z, hex) => tint(new THREE.BoxGeometry(w, h, l).translate(x, y, z), hex);
const twheels = (x, zs, r, w = 0.32) => {
  const out = [];
  for (const sx of [-x, x]) for (const z of zs) out.push(tint(new THREE.CylinderGeometry(r, r, w, 10).rotateZ(Math.PI / 2).translate(sx, r, z), 0x161616));
  return out;
};
const GLASS = 0x7fa6bd, TYRE = 0x161616;

function trafficCar(color) {
  return mergeGeometries([
    tbox(1.9, 0.75, 4.3, 0, 0.75, 0, color),
    tbox(1.7, 0.65, 2.1, 0, 1.45, -0.25, color),
    tbox(1.74, 0.45, 1.9, 0, 1.47, -0.25, GLASS),
    tbox(1.56, 0.48, 0.06, 0, 1.45, 0.81, GLASS),
    tbox(0.42, 0.18, 0.06, -0.6, 0.85, 2.16, 0xfff2b0), tbox(0.42, 0.18, 0.06, 0.6, 0.85, 2.16, 0xfff2b0),
    tbox(0.42, 0.18, 0.06, -0.6, 0.85, -2.16, 0xd01010), tbox(0.42, 0.18, 0.06, 0.6, 0.85, -2.16, 0xd01010),
    tbox(1.95, 0.22, 0.2, 0, 0.45, 2.17, TYRE), tbox(1.95, 0.22, 0.2, 0, 0.45, -2.17, TYRE),
    ...twheels(0.85, [-1.35, 1.35], 0.38),
  ]);
}

function trafficBus() {
  return mergeGeometries([
    tbox(2.5, 2.5, 10, 0, 1.65, 0, 0xf2b700),
    tbox(2.54, 0.9, 8.4, 0, 2.2, -0.2, GLASS),
    tbox(2.2, 1.3, 0.06, 0, 2.0, 5.02, GLASS),
    tbox(2.54, 0.25, 10.02, 0, 1.05, 0, 0x2a5db0),
    tbox(2.56, 0.35, 0.25, 0, 0.55, 5.0, TYRE), tbox(2.56, 0.35, 0.25, 0, 0.55, -5.0, TYRE),
    tbox(0.5, 0.25, 0.06, -0.8, 0.9, 5.02, 0xfff2b0), tbox(0.5, 0.25, 0.06, 0.8, 0.9, 5.02, 0xfff2b0),
    ...twheels(1.1, [-3.4, 3.4], 0.55, 0.4),
  ]);
}

function trafficVan() {
  return mergeGeometries([
    tbox(2.1, 1.7, 1.8, 0, 1.25, 2.3, 0xe23d28),
    tbox(2.14, 0.6, 1.0, 0, 1.75, 2.45, GLASS),
    tbox(1.9, 0.62, 0.06, 0, 1.72, 3.21, GLASS),
    tbox(2.3, 2.6, 4.6, 0, 1.75, -0.95, 0xf4f4f4),
    tbox(2.34, 0.45, 4.62, 0, 1.6, -0.95, 0xe23d28),
    tbox(0.4, 0.2, 0.06, -0.7, 0.85, 3.21, 0xfff2b0), tbox(0.4, 0.2, 0.06, 0.7, 0.85, 3.21, 0xfff2b0),
    ...twheels(0.95, [2.3, -2.4], 0.5, 0.36),
  ]);
}

function stripeTex(a, b, n = 8) {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 128;
  const x = c.getContext('2d');
  for (let i = 0; i < n; i++) { x.fillStyle = i % 2 ? b : a; x.fillRect(0, (i * 128) / n, 16, 128 / n); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Calle transversal: asfalto, aceras, pasos de cebra y cuadrícula amarilla donde cruza la pista
function streetTex(halfLen, w, zebra) {
  const W = 2048, H = 256;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const px = W / (2 * halfLen), pz = H / (w + 2 * zebra);
  const X = (m) => W / 2 + m * px, Z = (m) => H / 2 + m * pz;
  g.fillStyle = '#8f9196'; g.fillRect(0, 0, W, H);
  // juntas de las baldosas de la acera
  g.fillStyle = '#7f8186';
  for (let m = -halfLen; m < halfLen; m += 1.5) { g.fillRect(X(m), 0, 1, Z(-w / 2)); g.fillRect(X(m), Z(w / 2), 1, H); }
  g.fillStyle = '#3a3c40'; g.fillRect(0, Z(-w / 2), W, w * pz);
  const r = (() => { let s = 7; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  for (let i = 0; i < 2600; i++) {
    const v = 50 + Math.floor(r() * 30);
    g.fillStyle = `rgb(${v},${v},${v + 3})`;
    g.fillRect(r() * W, Z(-w / 2) + r() * w * pz, 2, 2);
  }
  // bordillos
  g.fillStyle = '#c9c9c4';
  g.fillRect(0, Z(-w / 2) - 3, W, 3); g.fillRect(0, Z(w / 2), W, 3);
  // líneas discontinuas del carril, fuera de la pista
  g.fillStyle = '#e8e8e8';
  for (let m = -halfLen; m < halfLen; m += 6) {
    if (Math.abs(m + 1.5) < LIMIT + 3) continue;
    g.fillRect(X(m), Z(-w / 2 + 0.8), 3 * px, 4);
    g.fillRect(X(m), Z(w / 2 - 0.8) - 4, 3 * px, 4);
  }
  // donde cruza la pista: asfalto, pasos de cebra y cuadrícula amarilla
  const x0 = X(-LIMIT), x1 = X(LIMIT);
  g.fillStyle = '#45474b';
  g.fillRect(x0, 0, x1 - x0, Z(-w / 2)); g.fillRect(x0, Z(w / 2), x1 - x0, H - Z(w / 2));
  g.fillStyle = '#f2f2f2';
  for (let m = -LIMIT + 0.6; m < LIMIT - 0.5; m += 1.2) {
    g.fillRect(X(m), Z(-w / 2 - zebra + 0.35), 0.6 * px, (zebra - 0.7) * pz);
    g.fillRect(X(m), Z(w / 2 + 0.35), 0.6 * px, (zebra - 0.7) * pz);
  }
  g.save();
  g.beginPath(); g.rect(x0, Z(-w / 2), x1 - x0, w * pz); g.clip();
  g.strokeStyle = '#ffcc00'; g.lineWidth = 5;
  for (let m = -LIMIT - w; m < LIMIT + w; m += 2.2) {
    g.beginPath(); g.moveTo(X(m), Z(-w / 2)); g.lineTo(X(m - w), Z(w / 2)); g.stroke();
    g.beginPath(); g.moveTo(X(m), Z(-w / 2)); g.lineTo(X(m + w), Z(w / 2)); g.stroke();
  }
  g.restore();
  g.strokeStyle = '#ffcc00'; g.lineWidth = 8;
  g.strokeRect(x0 + 4, Z(-w / 2) + 4, x1 - x0 - 8, w * pz - 8);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function trafficAssets() {
  const size = { car: { len: 4.3, w: 1.9, h: 1.8 }, bus: { len: 10, w: 2.5, h: 2.9 }, van: { len: 6.6, w: 2.3, h: 3.05 } };
  const carGeos = [0x3d7ebf, 0xc0392b, 0x27ae60, 0xf39c12, 0x8e44ad, 0xecf0f1].map(trafficCar);
  const geos = { bus: trafficBus(), van: trafficVan() };
  const carMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.15 });
  // calle
  const halfLen = TRAFFIC_D + 10, zebra = 3;
  const streetGeo = new THREE.PlaneGeometry(2 * halfLen, STREET_W + 2 * zebra).rotateX(-Math.PI / 2);
  const streetMat = new THREE.MeshStandardMaterial({ map: streetTex(halfLen, STREET_W, zebra), roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  // en coordenadas del cruce: x = -d, z = a lo largo de la pista
  const P = LIMIT + 0.35, G = STREET_GAP;
  const metal = [], arm = [], kerb = [], la = [], lb = [];
  for (const sx of [-1, 1]) {
    for (const z of [-G, G]) metal.push(new THREE.BoxGeometry(1.0, 2.0, 1.0).translate(sx * P, 1.0, z));
    // barrera levadiza abierta (de pie) en un poste de cada lado
    arm.push(new THREE.BoxGeometry(0.3, 6.5, 0.3).translate(0, 3.25, 0).rotateZ(sx * 0.12).translate(sx * P, 2.0, sx * G));
    // bordillo bajo donde falta la barrera: los camiones topan con él, los coches pasan por encima
    kerb.push(new THREE.BoxGeometry(0.8, 0.32, 2 * G - 1).translate(sx * P, 0.16, 0));
    // poste de las luces de aviso, antes del cruce y mirando a los camiones
    const lx = sx * (LIMIT + 2.6), lz = -G - 3;
    metal.push(new THREE.CylinderGeometry(0.14, 0.14, 5.6, 6).translate(lx, 2.8, lz));
    metal.push(new THREE.BoxGeometry(2.1, 0.95, 0.4).translate(lx, 5.8, lz));
    la.push(new THREE.SphereGeometry(0.36, 10, 8).translate(lx - 0.55, 5.8, lz - 0.25));
    lb.push(new THREE.SphereGeometry(0.36, 10, 8).translate(lx + 0.55, 5.8, lz - 0.25));
  }
  const merge = (list) => { const m = mergeGeometries(list); list.forEach((x) => x.dispose()); return m; };
  return {
    size, carGeos, geos, carMat, streetGeo, streetMat,
    staticGeo: merge(metal), armGeo: merge(arm), kerbGeo: merge(kerb), lampGeoA: merge(la), lampGeoB: merge(lb),
    metalMat: new THREE.MeshStandardMaterial({ color: 0x30343a, metalness: 0.5, roughness: 0.5 }),
    armMat: new THREE.MeshStandardMaterial({ map: stripeTex('#d42a20', '#f4f4f4'), roughness: 0.6 }),
    kerbMat: new THREE.MeshStandardMaterial({ color: 0xffc400, roughness: 0.7 }),
    lampA: new THREE.MeshBasicMaterial({ color: 0xffb000 }),
    lampB: new THREE.MeshBasicMaterial({ color: 0x3a2a10 }),
  };
}
