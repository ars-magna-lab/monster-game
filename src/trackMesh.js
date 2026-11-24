// Mallas de la pista: camino, barreras, terraplenes, fosos, rampas, puente y túnel.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_HALF, LIMIT } from './track.js';
import * as T from './textures.js';

// Cinta genérica a lo largo de la pista.
// rows: valores de s; profile(s) -> [[d, y], ...]; uv(s, k, d, y) -> [u, v]
function strip(track, rows, profile, uv, skip = null) {
  const pos = [], uvs = [], idx = [];
  let ncol = 0;
  rows.forEach((s) => {
    const P = track.pointAt(s);
    const prof = profile(s);
    ncol = prof.length;
    prof.forEach(([d, y], k) => {
      pos.push(P.x + P.rx * d, y, P.z + P.rz * d);
      const [u, v] = uv(s, k, d, y);
      uvs.push(u, v);
    });
  });
  for (let r = 0; r < rows.length - 1; r++) {
    if (skip && skip(rows[r], rows[r + 1])) continue;
    for (let k = 0; k < ncol - 1; k++) {
      const a = r * ncol + k, b = a + 1, c = a + ncol, e = c + 1;
      idx.push(a, b, c, b, e, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function rowsBetween(track, a, b) {
  const rows = [];
  const i0 = Math.round(a / track.ds), i1 = Math.round(b / track.ds);
  for (let i = i0; i <= i1; i++) rows.push(i * track.ds);
  return rows;
}

// Matriz que coloca un objeto en (s, d, y) mirando a lo largo de la pista (+z local = avance)
export function placeOnTrack(obj, track, s, d = 0, y = 0) {
  const P = track.pointAt(s, d);
  obj.position.set(P.x, y, P.z);
  obj.rotation.set(0, Math.PI / 2 - P.th, 0);
  return obj;
}

export function buildTrackMeshes(track, scene) {
  const group = new THREE.Group();
  const L = track.length;
  const inPit = (s1, s2) => track.pits.some((p) => s1 >= p.s0 - 0.01 && s2 <= p.s1 + 0.01);

  // ---------- Camino ----------
  const roadCols = [-LIMIT, -13, -ROAD_HALF, -8.25, -5.5, -2.75, 0, 2.75, 5.5, 8.25, ROAD_HALF, 13, LIMIT];
  const allRows = [];
  for (let i = 0; i <= track.N; i++) allRows.push(i * track.ds);
  const roadGeo = strip(
    track, allRows,
    (s) => { const h = track.baseAt(s) + 0.03; return roadCols.map((d) => [d, h]); },
    (s, k, d) => [(d + LIMIT) / (2 * LIMIT), s / 12],
    inPit,
  );
  const roadMat = new THREE.MeshStandardMaterial({ map: T.roadTex(), roughness: 0.95, metalness: 0 });
  const road = new THREE.Mesh(roadGeo, roadMat);
  road.receiveShadow = true;
  group.add(road);

  // ---------- Barreras ----------
  const barrierMat = new THREE.MeshStandardMaterial({ map: T.barrierTex(), roughness: 0.8, side: THREE.DoubleSide });
  for (const side of [-1, 1]) {
    const g = strip(
      track, allRows,
      (s) => {
        const h = track.baseAt(s);
        return [[side * LIMIT, h], [side * LIMIT, h + 1.3], [side * (LIMIT + 0.7), h + 1.3], [side * (LIMIT + 0.7), h]];
      },
      (s, k) => [s / 8, [0, 1, 0.92, 0][k]],
    );
    const m = new THREE.Mesh(g, barrierMat);
    m.castShadow = true; m.receiveShadow = true;
    group.add(m);
  }

  // ---------- Terraplenes en las zonas elevadas ----------
  const dirtMat = new THREE.MeshStandardMaterial({ map: T.dirtTex(), roughness: 1, side: THREE.DoubleSide });
  const raised = [
    ...track.plateaus.map((p) => [p.a - 2, p.d + 2]),
    ...track.whoops.map((w) => [w.a - 1, w.b + 1]),
  ];
  for (const [a, b] of raised) {
    const rows = rowsBetween(track, a, b);
    for (const side of [-1, 1]) {
      const g = strip(
        track, rows,
        (s) => {
          const h = track.baseAt(s);
          const w = 1.2 + h * 1.6;
          return [[side * (LIMIT + 0.7), h], [side * (LIMIT + 2.2), h], [side * (LIMIT + 2.2 + w), -0.04]];
        },
        (s, k) => [k * 0.6, s / 8],
      );
      const m = new THREE.Mesh(g, dirtMat);
      m.receiveShadow = true;
      group.add(m);
    }
  }

  // ---------- Fosos ----------
  const pitWallMat = new THREE.MeshStandardMaterial({ map: T.dirtTex(), roughness: 1, side: THREE.DoubleSide, color: 0x9c8a7a });
  for (const p of track.pits) {
    const rows = rowsBetween(track, p.s0, p.s1);
    const bottom = p.water ? 0 : p.floor;
    // paredes laterales
    for (const side of [-1, 1]) {
      const g = strip(track, rows, (s) => [[side * LIMIT, bottom], [side * LIMIT, track.baseAt(s)]], (s, k, d, y) => [s / 6, y / 6]);
      group.add(new THREE.Mesh(g, pitWallMat));
    }
    // paredes de entrada y salida
    for (const s of [p.s0, p.s1]) {
      const P = track.pointAt(s);
      const top = track.baseAt(s) + 0.03;
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(2 * LIMIT, top - bottom), pitWallMat);
      wall.position.set(P.x, (top + bottom) / 2, P.z);
      wall.rotation.y = Math.PI / 2 - P.th;
      group.add(wall);
    }
    // fondo
    const floorMat = p.water
      ? new THREE.MeshStandardMaterial({ color: 0x1d2a1c, roughness: 1 })
      : new THREE.MeshStandardMaterial({ map: T.dirtTex(), color: 0x6b5848, roughness: 1 });
    const fg = strip(track, rows, () => [[-LIMIT, bottom + 0.02], [LIMIT, bottom + 0.02]], (s, k, d) => [d / 8, s / 8]);
    const floor = new THREE.Mesh(fg, floorMat);
    floor.receiveShadow = true;
    group.add(floor);
    if (p.water) {
      const wt = T.waterTex();
      const water = new THREE.Mesh(
        strip(track, rows, () => [[-LIMIT, p.floor], [LIMIT, p.floor]], (s, k, d) => [d / 10, s / 10]),
        new THREE.MeshStandardMaterial({ map: wt, color: 0x5fa08a, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.88 }),
      );
      water.userData.animTex = wt;
      group.add(water);
      p.waterMesh = water;
    } else {
      // pinchos de chatarra y neumáticos viejos en el fondo del foso
      const junk = [];
      const r = mulberry(5);
      for (let i = 0; i < 22; i++) {
        const s = p.s0 + 2 + r() * (p.s1 - p.s0 - 4);
        const d = (r() - 0.5) * 2 * (LIMIT - 2);
        const P = track.pointAt(s, d);
        const t = new THREE.TorusGeometry(0.9, 0.38, 8, 16);
        t.rotateX(Math.PI / 2 + (r() - 0.5) * 0.6);
        t.translate(P.x, bottom + 0.4 + (i % 3) * 0.3, P.z);
        junk.push(t);
      }
      const jm = new THREE.Mesh(mergeGeometries(junk), new THREE.MeshStandardMaterial({ color: 0x1e1e1e, roughness: 0.9 }));
      jm.castShadow = true;
      group.add(jm);
    }
    // carteles de aviso en los laterales
    for (const side of [-1, 1]) {
      const sign = makeSign(p.water ? '¡COCODRILOS!' : '¡FOSO!', p.water ? '#1f8a3a' : '#e0a100');
      placeOnTrack(sign, track, p.s0 - 30, side * (LIMIT + 3), track.baseAt(p.s0 - 30));
      group.add(sign);
    }
  }

  // ---------- Rampas ----------
  const rampMat = new THREE.MeshStandardMaterial({ map: T.planksTex(), roughness: 0.85, side: THREE.DoubleSide });
  const rampSideMat = new THREE.MeshStandardMaterial({ color: 0x5a3a1c, roughness: 0.9, side: THREE.DoubleSide });
  for (const r of track.ramps) {
    const rows = rowsBetween(track, r.s0, r.s1);
    const hAt = (s) => track.baseAt(s) + (r.h * (s - r.s0)) / (r.s1 - r.s0) + 0.06;
    const top = strip(track, rows, (s) => [[r.d0, hAt(s)], [r.d1, hAt(s)]], (s, k, d) => [(d - r.d0) / (r.d1 - r.d0) * ((r.d1 - r.d0) / 8), (s - r.s0) / 8]);
    const m = new THREE.Mesh(top, rampMat);
    m.receiveShadow = true; m.castShadow = true;
    group.add(m);
    for (const d of [r.d0, r.d1]) {
      if (Math.abs(d) >= LIMIT) continue;
      group.add(new THREE.Mesh(strip(track, rows, (s) => [[d, track.baseAt(s)], [d, hAt(s)]], (s, k) => [s, k]), rampSideMat));
    }
    // cara trasera (el borde del salto)
    const P = track.pointAt(r.s1, (r.d0 + r.d1) / 2);
    const bh = r.h + 0.06;
    const face = new THREE.Mesh(new THREE.PlaneGeometry(r.d1 - r.d0, bh), rampSideMat);
    face.position.set(P.x, track.baseAt(r.s1) + bh / 2, P.z);
    face.rotation.y = Math.PI / 2 - P.th;
    group.add(face);
    // bandas amarillas y negras en el borde
    const edge = new THREE.Mesh(new THREE.BoxGeometry(r.d1 - r.d0, 0.15, 0.6), new THREE.MeshStandardMaterial({ color: 0xffc400, emissive: 0x332200 }));
    placeOnTrack(edge, track, r.s1 - 0.3, (r.d0 + r.d1) / 2, track.baseAt(r.s1) + r.h + 0.05);
    group.add(edge);
  }

  // ---------- Puente del foso de cocodrilos ----------
  for (const p of track.pits) {
    if (!p.bridge) continue;
    const [b0, b1] = p.bridge;
    const geos = [];
    const r = mulberry(3);
    for (let s = p.s0 - 0.5; s < p.s1 + 0.5; s += 0.9) {
      const P = track.pointAt(s, (b0 + b1) / 2);
      const g = new THREE.BoxGeometry(b1 - b0 + 0.4, 0.25, 0.75);
      g.rotateY(Math.PI / 2 - P.th + (r() - 0.5) * 0.05);
      g.translate(P.x, p.top + 0.17, P.z);
      geos.push(g);
    }
    for (const d of [b0 - 0.1, b1 + 0.1]) {
      for (let s = p.s0; s <= p.s1 + 0.01; s += (p.s1 - p.s0) / 4) {
        const P = track.pointAt(s, d);
        const g = new THREE.CylinderGeometry(0.15, 0.18, 2.4, 6);
        g.translate(P.x, p.top + 0.6, P.z);
        geos.push(g);
      }
    }
    const plank = new THREE.Mesh(mergeGeometries(geos), new THREE.MeshStandardMaterial({ map: T.planksTex(), color: 0xb08a5a, roughness: 0.9 }));
    plank.castShadow = true; plank.receiveShadow = true;
    group.add(plank);
    // cuerdas
    for (const d of [b0 - 0.1, b1 + 0.1]) {
      const rows = rowsBetween(track, p.s0, p.s1);
      const rope = strip(track, rows, (s) => {
        const t = (s - p.s0) / (p.s1 - p.s0);
        const y = p.top + 1.6 - Math.sin(t * Math.PI) * 0.5;
        return [[d, y], [d, y + 0.12]];
      }, (s, k) => [s, k]);
      group.add(new THREE.Mesh(rope, new THREE.MeshStandardMaterial({ color: 0xd9c08a, side: THREE.DoubleSide })));
    }
  }

  // ---------- Túnel ----------
  const tun = track.tunnel;
  const tRows = rowsBetween(track, tun.s0, tun.s1);
  const R = LIMIT + 0.8, wallH = 7;
  const arch = [];
  arch.push([-R, 0]);
  for (let a = 0; a <= 16; a++) {
    const ang = Math.PI - (a / 16) * Math.PI;
    arch.push([Math.cos(ang) * R, wallH + Math.sin(ang) * R * 0.85]);
  }
  arch.push([R, 0]);
  const rockMat = new THREE.MeshStandardMaterial({ map: T.rockTex(), roughness: 1, side: THREE.DoubleSide, color: 0xb0a89c });
  const inner = new THREE.Mesh(strip(track, tRows, (s) => arch.map(([d, y]) => [d, y + track.baseAt(s)]), (s, k) => [k / 4, s / 10]), rockMat);
  inner.receiveShadow = true;
  group.add(inner);

  // montaña exterior
  const W = 75, H = 34;
  const hash = (i, k) => {
    const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  const outerProfile = (s) => {
    const i = Math.round(s / track.ds);
    const pts = [];
    for (let k = 0; k <= 20; k++) {
      const d = -W + (k / 20) * 2 * W;
      const t = Math.abs(d) / W;
      let y = H * (1 - Math.pow(t, 1.6));
      y += (hash(Math.floor(i / 6), k) - 0.5) * 6 * (1 - t);
      if (k === 0 || k === 20) y = -0.5;
      pts.push([d, Math.max(-0.5, y)]);
    }
    return pts;
  };
  const mRows = tRows.filter((_, i) => i % 6 === 0 || i === tRows.length - 1);
  const mountainMat = new THREE.MeshStandardMaterial({ map: T.rockTex(), color: 0xb9cf8c, roughness: 1, flatShading: true, side: THREE.DoubleSide });
  const mountain = new THREE.Mesh(strip(track, mRows, outerProfile, (s, k) => [k / 3, s / 20]), mountainMat);
  mountain.castShadow = true; mountain.receiveShadow = true;
  group.add(mountain);
  // caras de las bocas del túnel
  for (const s of [mRows[0], mRows[mRows.length - 1]]) {
    const prof = outerProfile(s);
    const shape = new THREE.Shape();
    shape.moveTo(prof[0][0], prof[0][1]);
    for (const [d, y] of prof.slice(1)) shape.lineTo(d, y);
    shape.lineTo(prof[0][0], prof[0][1]);
    const hole = new THREE.Path();
    hole.moveTo(arch[0][0], arch[0][1] - 0.3);
    for (const [d, y] of arch.slice(1)) hole.lineTo(d, y === 0 ? -0.3 : y);
    hole.lineTo(arch[0][0], arch[0][1] - 0.3);
    shape.holes.push(hole);
    const sg = new THREE.ShapeGeometry(shape);
    const P = track.pointAt(s);
    const face = new THREE.Mesh(sg, mountainMat);
    // ShapeGeometry: x = d (derecha), y = altura. Orientamos x local a lo largo del vector derecha.
    face.position.set(P.x, track.baseAt(s), P.z);
    face.rotation.y = Math.atan2(-P.rz, P.rx);
    group.add(face);
    // marco de piedra del portal
    const frameGeos = [];
    for (let a = 0; a <= 12; a++) {
      const ang = Math.PI - (a / 12) * Math.PI;
      const g = new THREE.BoxGeometry(2.2, 2.2, 1.6);
      g.rotateZ(ang - Math.PI / 2);
      g.translate(Math.cos(ang) * (R + 0.6), wallH + Math.sin(ang) * (R * 0.85 + 0.6), 0);
      frameGeos.push(g);
    }
    for (const sd of [-1, 1]) {
      const g = new THREE.BoxGeometry(2.2, wallH, 1.6);
      g.translate(sd * (R + 0.6), wallH / 2, 0);
      frameGeos.push(g);
    }
    const frame = new THREE.Mesh(mergeGeometries(frameGeos), new THREE.MeshStandardMaterial({ color: 0x8d8478, roughness: 0.9, flatShading: true }));
    frame.position.copy(face.position);
    frame.rotation.y = face.rotation.y;
    frame.castShadow = true;
    group.add(frame);
  }
  // lámparas del techo
  const lamps = [];
  for (let s = tun.s0 + 6; s < tun.s1; s += 12) {
    for (const d of [-6, 6]) {
      const P = track.pointAt(s, d);
      const g = new THREE.BoxGeometry(0.6, 0.3, 3);
      g.rotateY(Math.PI / 2 - P.th);
      const yy = wallH + Math.sqrt(Math.max(0, R * R - d * d)) * 0.85 - 0.4;
      g.translate(P.x, track.baseAt(s) + yy, P.z);
      lamps.push(g);
    }
  }
  const lampMesh = new THREE.Mesh(mergeGeometries(lamps), new THREE.MeshBasicMaterial({ color: 0xffe9a8 }));
  group.add(lampMesh);
  // ojos de gato a ras de suelo
  const eyes = [];
  for (let s = tun.s0 + 3; s < tun.s1; s += 6) {
    for (const d of [-LIMIT + 0.05, LIMIT - 0.05]) {
      const P = track.pointAt(s, d);
      const g = new THREE.BoxGeometry(0.2, 0.25, 0.8);
      g.rotateY(Math.PI / 2 - P.th);
      g.translate(P.x, track.baseAt(s) + 0.9, P.z);
      eyes.push(g);
    }
  }
  group.add(new THREE.Mesh(mergeGeometries(eyes), new THREE.MeshBasicMaterial({ color: 0x66e0ff })));

  // ---------- Línea de meta y pórtico de salida ----------
  {
    const tex = T.checkerTex().clone();
    tex.repeat.set(5.5, 0.75);
    tex.needsUpdate = true;
    const holder = new THREE.Group();
    placeOnTrack(holder, track, 0, 0, 0.06);
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(2 * ROAD_HALF, 3), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
    pl.rotation.x = -Math.PI / 2;
    pl.receiveShadow = true;
    holder.add(pl);
    group.add(holder);
  }

  const gantry = new THREE.Group();
  placeOnTrack(gantry, track, 0, 0, 0);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.6, roughness: 0.4 });
  for (const sd of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(1.2, 12, 1.2), postMat);
    post.position.set(sd * (LIMIT + 1.5), 6, 0);
    post.castShadow = true;
    gantry.add(post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(2 * LIMIT + 4.2, 2.6, 1.2), postMat);
  beam.position.y = 11;
  beam.castShadow = true;
  gantry.add(beam);
  for (const sd of [-1, 1]) {
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(2 * LIMIT + 3, 2.4), new THREE.MeshBasicMaterial({ map: T.bannerTex('META  ·  MEGA MONSTRUOS'), side: THREE.FrontSide }));
    ban.position.set(0, 11, sd * 0.62);
    if (sd < 0) ban.rotation.y = Math.PI;
    gantry.add(ban);
  }
  // semáforo de salida
  const lights = [];
  const box = new THREE.Mesh(new THREE.BoxGeometry(8, 2.2, 1), new THREE.MeshStandardMaterial({ color: 0x111111 }));
  box.position.set(0, 8.6, -0.3);
  gantry.add(box);
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 12), new THREE.MeshBasicMaterial({ color: 0x331111 }));
    m.position.set((i - 1) * 2.4, 8.6, -0.85);
    gantry.add(m);
    lights.push(m);
  }
  group.add(gantry);

  scene.add(group);
  return { group, lights, lampMesh };
}

function mulberry(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSign(text, color) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = color; x.fillRect(0, 0, 256, 128);
  x.strokeStyle = '#111'; x.lineWidth = 10; x.strokeRect(5, 5, 246, 118);
  x.fillStyle = '#111'; x.font = 'bold 40px Impact, Arial Black, sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  for (let fs = 40; fs > 16 && x.measureText(text).width > 228; fs -= 2) x.font = `bold ${fs}px Impact, Arial Black, sans-serif`;
  x.fillText(text, 128, 66);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide }));
  board.position.y = 4.5;
  board.castShadow = true;
  g.add(board);
  for (const sx of [-2.4, 2.4]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 6), new THREE.MeshStandardMaterial({ color: 0x555555 }));
    p.position.set(sx, 2.25, 0.05);
    g.add(p);
  }
  return g;
}
