// Decorado propio de Cañón Jurásico (mesetas rojas, huesos, pterosaurios) y de Bahía Pirata
// (mar, arena bajo la pista, muelle, faro y sombrillas). Lo llama buildWorld según el tema.
// Todo con mallas unidas o instanciadas y colores por vértice: pocas órdenes de dibujo.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LIMIT } from './track.js';
import { splitInstancedByArea } from './optimize.js';
import * as T from './textures.js';

const UP = new THREE.Vector3(0, 1, 0);
const tint = (geo, hex) => {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  g.deleteAttribute('uv');
  return g;
};
const merge = (list) => { const m = mergeGeometries(list); list.forEach((x) => x.dispose()); return m; };
const vcMat = (o = {}) => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true, ...o });

// ¿Está (x, z) en el mar de Bahía Pirata?
export const inSea = (sea, x, z) => !!sea && (z < sea.z || x > sea.x);

// ---------------------------------------------------------------- Cañón Jurásico
export function buildDinoScenery(scene, track, r, { cx, cz, distTrack, nearTunnel }) {
  // paredes del cañón: mesetas de roca roja de techo plano, con franjas de colores
  const mesas = [];
  for (let i = 0; i < 46; i++) {
    const a = r() * Math.PI * 2, dist = 420 + r() * 380;
    const x = cx + Math.cos(a) * dist, z = cz + Math.sin(a) * dist;
    const R = 40 + r() * 70;
    if (distTrack(x, z) < R + 70) continue;
    const h = 45 + r() * 90;
    const g = new THREE.CylinderGeometry(R * 0.82, R, h, 8);
    g.translate(x, h / 2 - 2, z);
    mesas.push(tint(g, r() < 0.5 ? 0xb4603e : 0xa4523a));
    const band = new THREE.CylinderGeometry(R * 0.86, R * 0.9, h * 0.12, 8);
    band.translate(x, h * 0.55, z);
    mesas.push(tint(band, 0xd89a6a));
  }
  if (mesas.length) {
    const m = new THREE.Mesh(merge(mesas), vcMat());
    m.receiveShadow = true;
    scene.add(m);
  }

  // huesos gigantes tirados por el cañón: fémures y costillares sueltos (instanciados)
  const bone = merge([
    tint(new THREE.CylinderGeometry(0.7, 0.7, 7, 6).rotateZ(Math.PI / 2), 0xeee2c4),
    ...[-1, 1].flatMap((sx) => [tint(new THREE.SphereGeometry(1.1, 6, 5).translate(sx * 3.6, 0, 0.6), 0xeee2c4), tint(new THREE.SphereGeometry(1.1, 6, 5).translate(sx * 3.6, 0, -0.6), 0xe2d4b0)]),
  ]).translate(0, 0.8, 0);
  const ribs = [];
  for (let k = 0; k < 5; k++) {
    const t = new THREE.TorusGeometry(4.5 - k * 0.4, 0.35, 4, 10, Math.PI);
    t.translate(0, 0, k * 2.2 - 4.4);
    ribs.push(tint(t, 0xeee2c4));
  }
  ribs.push(tint(new THREE.CylinderGeometry(0.45, 0.45, 11, 6).rotateX(Math.PI / 2).translate(0, 4.3, 0), 0xe2d4b0));
  const ribGeo = merge(ribs);
  const spotsB = [], spotsR = [];
  for (let tries = 0; tries < 3000 && spotsB.length + spotsR.length < 60; tries++) {
    const x = cx + (r() - 0.5) * 1100, z = cz + (r() - 0.5) * 1000;
    const dt = distTrack(x, z);
    if (dt < LIMIT + 12 || dt > 160 || nearTunnel(x, z)) continue;
    (r() < 0.6 ? spotsB : spotsR).push([x, z, 0.8 + r() * 0.7, r() * 6]);
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion();
  const inst = (geo, list) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, vcMat({ flatShading: false }), list.length);
    list.forEach(([x, z, s, a], i) => {
      q.setFromAxisAngle(UP, a);
      m4.compose(new THREE.Vector3(x, -0.1, z), q, new THREE.Vector3(s, s, s));
      im.setMatrixAt(i, m4);
    });
    im.castShadow = true;
    for (const part of splitInstancedByArea(im)) scene.add(part);
  };
  inst(bone, spotsB);
  inst(ribGeo, spotsR);

  // charcas de alquitrán fuera de la pista (con burbujas)
  const tar = [];
  for (let tries = 0; tries < 2000 && tar.length < 16; tries++) {
    const x = cx + (r() - 0.5) * 1000, z = cz + (r() - 0.5) * 900;
    const dt = distTrack(x, z);
    if (dt < LIMIT + 14 || dt > 120 || nearTunnel(x, z)) continue;
    const R = 5 + r() * 7;
    tar.push(tint(new THREE.CircleGeometry(R, 12).rotateX(-Math.PI / 2).scale(1, 1, 0.6 + r() * 0.4).translate(x, 0.02, z), 0x16110e));
    for (let k = 0; k < 3; k++) tar.push(tint(new THREE.SphereGeometry(0.5 + r() * 0.4, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2).translate(x + (r() - 0.5) * R, 0, z + (r() - 0.5) * R * 0.5), 0x2a221c));
  }
  if (tar.length) scene.add(new THREE.Mesh(merge(tar), vcMat({ roughness: 0.1, metalness: 0.3, flatShading: false })));

  // pterosaurios dando vueltas por encima del cañón (cuerpo y dos alas que aletean)
  const body = merge([
    tint(new THREE.SphereGeometry(1, 8, 6).scale(0.6, 0.5, 2.2), 0x9a5a3a),
    tint(new THREE.ConeGeometry(0.35, 2.4, 5).rotateX(Math.PI / 2).translate(0, 0.1, 3.0), 0xe8c048), // pico
    tint(new THREE.ConeGeometry(0.4, 1.8, 4).rotateX(-Math.PI / 2.6).translate(0, 0.9, 1.4), 0xc0502a), // cresta
  ]);
  const wingL = tint(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 1.2, 0, 0, -1.0, 7, 0, -0.6, 0, 0, 1.2, 7, 0, -0.6, 0, 0, -1.0], 3)), 0x7a4a34);
  wingL.computeVertexNormals();
  const wingR = wingL.clone().scale(-1, 1, 1);
  const wingMat = vcMat({ side: THREE.DoubleSide, flatShading: false });
  const bodyMat = vcMat({ flatShading: false });
  const birds = [];
  for (let i = 0; i < 5; i++) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(body, bodyMat));
    const L = new THREE.Mesh(wingL, wingMat), R = new THREE.Mesh(wingR, wingMat);
    g.add(L, R);
    g.scale.setScalar(1.6);
    scene.add(g);
    const P = track.pointAt((i / 5) * track.length + 60);
    birds.push({ g, L, R, x: P.x, z: P.z, rad: 35 + r() * 40, h: 45 + r() * 30, ph: r() * 6, sp: (0.25 + r() * 0.15) * (i % 2 ? 1 : -1) });
  }
  let time = 0;
  return {
    update(dt) {
      time += dt;
      for (const b of birds) {
        const a = b.ph + time * b.sp;
        b.g.position.set(b.x + Math.cos(a) * b.rad, b.h + Math.sin(time * 0.7 + b.ph) * 3, b.z + Math.sin(a) * b.rad);
        b.g.rotation.y = -a + (b.sp > 0 ? Math.PI : 0);
        b.g.rotation.z = (b.sp > 0 ? -1 : 1) * 0.35;
        const f = Math.sin(time * 4 + b.ph) * 0.45;
        b.L.rotation.z = f; b.R.rotation.z = -f;
      }
    },
  };
}

// ---------------------------------------------------------------- Bahía Pirata
export function buildBeachScenery(scene, track, r, { distTrack }) {
  const TH = track.theme, sea = TH.sea;
  // el mar: dos rectángulos grandes (lo que queda más allá de la playa y del espigón),
  // dibujados justo después del suelo y sin escribir profundidad, como el suelo
  const wt = T.waterTex(['#1fb5c8', 'rgba(255,255,255,0.45)']).clone();
  wt.needsUpdate = true;
  wt.repeat.set(160, 160);
  const quads = [[-3000, sea.z, 3000, -3000], [sea.x, sea.z, 3000, 3000]];
  const seaGeos = quads.map(([x0, z0, x1, z1]) => {
    const g = new THREE.PlaneGeometry(Math.abs(x1 - x0), Math.abs(z1 - z0)).rotateX(-Math.PI / 2);
    g.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    const uv = g.attributes.uv, pos = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) / 6000 + 0.5, pos.getZ(i) / 6000 + 0.5);
    return g;
  });
  const seaMesh = new THREE.Mesh(mergeGeometries(seaGeos), new THREE.MeshStandardMaterial({ map: wt, color: 0x9fe8ee, roughness: 0.25, metalness: 0.1, depthWrite: false }));
  seaGeos.forEach((g) => g.dispose());
  seaMesh.position.y = -0.06;
  seaMesh.renderOrder = -0.45;
  seaMesh.receiveShadow = true;
  scene.add(seaMesh);
  // orilla: franja de espuma y arena mojada
  const shore = [];
  const strip = (x0, z0, x1, z1, w, hex, y) => {
    const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
    const g = new THREE.PlaneGeometry(L, w).rotateX(-Math.PI / 2).rotateY(-Math.atan2(dz, dx)).translate((x0 + x1) / 2, y, (z0 + z1) / 2);
    shore.push(tint(g, hex));
  };
  strip(-3000, sea.z - 1.5, sea.x + 1.5, sea.z - 1.5, 3, 0xffffff, 0);
  strip(sea.x + 1.5, sea.z - 1.5, sea.x + 1.5, 3000, 3, 0xffffff, 0);
  strip(-3000, sea.z + 3, sea.x - 3, sea.z + 3, 6, 0xcdb27a, -0.01);
  strip(sea.x - 3, sea.z + 3, sea.x - 3, 3000, 6, 0xcdb27a, -0.01);
  // arena bajo la pista allí donde pasa por encima del mar (menos el muelle) y el islote del faro
  const pier = track.pier || { s0: -1, s1: -1 };
  for (let s = 0; s < track.length; s += 8) {
    if (s > pier.s0 - 4 && s < pier.s1 - 30) continue;
    const P = track.pointAt(s);
    if (!inSea({ z: sea.z + 34, x: sea.x - 34 }, P.x, P.z)) continue;
    shore.push(tint(new THREE.CircleGeometry(30, 14).rotateX(-Math.PI / 2).translate(P.x, -0.02, P.z), 0xe8d29c));
  }
  const hp = track.segs.find((g) => g.type === 'A' && g.ang >= 170); // la horquilla del faro
  if (hp) shore.push(tint(new THREE.CircleGeometry(34, 16).rotateX(-Math.PI / 2).translate(hp.cx, -0.02, hp.cz), 0xe8d29c));
  const shoreMesh = new THREE.Mesh(merge(shore), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, depthWrite: false }));
  shoreMesh.renderOrder = -0.4;
  shoreMesh.receiveShadow = true;
  scene.add(shoreMesh);

  // el muelle: tablones de lado a lado y bolardos con cuerda
  const deck = [], posts = [];
  if (track.pier) {
    for (let s = pier.s0; s < pier.s1; s += 1.25) {
      if (track.pits.some((p) => s > p.s0 - 0.6 && s < p.s1 + 0.6)) continue;
      const P = track.pointAt(s);
      const g = new THREE.BoxGeometry(2 * LIMIT + 2, 0.14, 1.1);
      g.rotateY(Math.PI / 2 - P.th + (r() - 0.5) * 0.02);
      g.translate(P.x, track.baseAt(s) + 0.1, P.z);
      deck.push(g);
    }
    for (let s = pier.s0 + 4; s < pier.s1; s += 10) {
      for (const sd of [-1, 1]) {
        const P = track.pointAt(s, sd * (LIMIT + 1.1));
        posts.push(tint(new THREE.CylinderGeometry(0.35, 0.4, 2.2, 6).translate(P.x, 1.0, P.z), 0x5a3a1c));
        posts.push(tint(new THREE.CylinderGeometry(0.45, 0.45, 0.25, 6).translate(P.x, 2.15, P.z), 0x3a2a14));
      }
    }
    const d = new THREE.Mesh(mergeGeometries(deck), new THREE.MeshStandardMaterial({ map: T.planksTex(), color: 0xc8a070, roughness: 0.9 }));
    deck.forEach((g) => g.dispose());
    d.receiveShadow = true;
    scene.add(d);
  }

  // el faro, en el centro de la horquilla, sobre unas rocas
  const lh = [];
  if (hp) {
    const x = hp.cx, z = hp.cz;
    for (let k = 0; k < 6; k++) lh.push(tint(new THREE.DodecahedronGeometry(5 + r() * 3, 0).translate(x + Math.cos(k) * 7, 1, z + Math.sin(k) * 7), 0x8a7a68));
    for (let k = 0; k < 6; k++) {
      const r0 = 4.2 - k * 0.32, r1 = 4.2 - (k + 1) * 0.32;
      lh.push(tint(new THREE.CylinderGeometry(r1, r0, 4.5, 12).translate(x, 3 + k * 4.5 + 2.25, z), k % 2 ? 0xffffff : 0xd42a20));
    }
    lh.push(tint(new THREE.CylinderGeometry(3.4, 3.4, 0.6, 12).translate(x, 30.3, z), 0x333333));
    lh.push(tint(new THREE.ConeGeometry(2.8, 3.2, 12).translate(x, 35.4, z), 0xd42a20));
    lh.push(tint(new THREE.CylinderGeometry(2.5, 2.5, 0.4, 12).translate(x, 33.6, z), 0x333333));
  }
  lh.push(...posts);
  // sombrillas de playa y toallas, en tierra cerca de la pista
  const spots = [];
  for (let tries = 0; tries < 3000 && spots.length < 34; tries++) {
    const P = track.pointAt(r() * track.length, (r() < 0.5 ? -1 : 1) * (LIMIT + 8 + r() * 30));
    if (inSea(sea, P.x, P.z) || distTrack(P.x, P.z) < LIMIT + 6) continue;
    if (Math.abs(P.z) < 75 && P.x > -120 && P.x < 140) continue; // gradas
    spots.push([P.x, P.z]);
  }
  const UMB = [0xe63946, 0xffd60a, 0x2a9df4, 0x2ec4b6, 0xf15bb5, 0xff9f1c];
  spots.forEach(([x, z], i) => {
    const c = UMB[i % UMB.length];
    lh.push(tint(new THREE.CylinderGeometry(0.1, 0.1, 4, 5).translate(x, 2, z), 0xf4f4f4));
    lh.push(tint(new THREE.ConeGeometry(2.8, 1.3, 8, 1, true).translate(x, 4.2, z), c));
    lh.push(tint(new THREE.PlaneGeometry(1.6, 3.4).rotateX(-Math.PI / 2).rotateY(i).translate(x + 2.2, 0.03, z + 1), UMB[(i + 2) % UMB.length]));
  });
  scene.add(new THREE.Mesh(merge(lh), vcMat({ flatShading: false, side: THREE.DoubleSide })));

  let time = 0;
  return {
    update(dt) {
      time += dt;
      wt.offset.set((time * 0.004) % 1, (time * 0.0025) % 1);
    },
  };
}
