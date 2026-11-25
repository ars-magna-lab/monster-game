// Obstáculos y elementos de la pista que se mueven o interactúan con los camiones.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LIMIT, ROAD_HALF } from './track.js';
import { placeOnTrack } from './trackMesh.js';
import { HALF_W } from './vehicle.js';
import * as T from './textures.js';
import { normPlaces } from './circuits.js';

const rand = (a, b) => a + Math.random() * (b - a);

export class Obstacles {
  constructor(track, scene, game) {
    this.track = track;
    this.game = game;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.time = 0;
    this.turbos = []; this.boxes = []; this.logs = []; this.balls = [];
    this.nets = []; this.cars = []; this.barrels = []; this.crocs = [];
    this.build();
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
    const frameMat = new THREE.MeshStandardMaterial(swingLog ? { map: T.barkTex(), color: 0x9a7a5a, roughness: 1 } : { color: 0xf0b400, metalness: 0.4, roughness: 0.5 });
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
      this.balls.push({ s, pivot, phase, period: 3.8, amp: 1.05, L: 15.5, top: 18.4, d: 0, y: 0, vd: 0, len: swingLog ? 2.2 : 0 });
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
    if (this.nets.some((n) => ahead(n) && n.open > 0.3)) return true;
    return false;
  }

  // Para la IA: dónde estará (d) un rodillo dentro de dt segundos (misma cuenta que en update)
  rollerD(o, dt) {
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
