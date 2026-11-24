// Escenario: cielo, luces, terreno, montañas, árboles, gradas y decoración.
import * as THREE from 'three';
import { splitBigMeshes } from './optimize.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LIMIT } from './track.js';
import { placeOnTrack } from './trackMesh.js';
import * as T from './textures.js';

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildWorld(scene, track) {
  const r = rng(42);
  const SKY_TOP = new THREE.Color(0x3d8fe0);
  const SKY_HORIZON = new THREE.Color(0xcfe6f5);
  scene.background = SKY_HORIZON.clone();
  scene.fog = new THREE.Fog(0xcfe6f5, 260, 1300);

  // cielo con degradado
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(1800, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: SKY_TOP }, horizon: { value: SKY_HORIZON }, sunDir: { value: new THREE.Vector3(0.5, 0.6, 0.3).normalize() } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vP;
        void main(){ float h = clamp(vP.y, 0.0, 1.0); vec3 c = mix(horizon, top, pow(h, 0.55));
        float s = max(0.0, dot(vP, sunDir)); c += vec3(1.0,0.9,0.6) * (pow(s, 400.0) * 1.5 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0); }`,
    }),
  );
  sky.renderOrder = -1;
  scene.add(sky);

  // luces
  const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x6b5a3a, 1.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1d6, 2.6);
  sun.position.set(120, 160, 70);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -75; sc.right = 75; sc.top = 75; sc.bottom = -75; sc.near = 10; sc.far = 500;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);

  // suelo
  const gt = T.grassTex();
  gt.repeat.set(220, 220);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.08;
  ground.receiveShadow = true;
  scene.add(ground);

  // distancia mínima a la pista (muestreando cada 6 m)
  const pts = [];
  for (let i = 0; i < track.N; i += 6) pts.push([track.px[i], track.pz[i]]);
  const distTrack = (x, z) => {
    let best = Infinity;
    for (const [px, pz] of pts) {
      const d = (x - px) ** 2 + (z - pz) ** 2;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  };
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const [x, z] of pts) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z); }
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  const tunnelMid = track.pointAt((track.tunnel.s0 + track.tunnel.s1) / 2);
  const nearTunnel = (x, z) => {
    const a = track.pointAt(track.tunnel.s0), b = track.pointAt(track.tunnel.s1);
    const xmin = Math.min(a.x, b.x) - 10, xmax = Math.max(a.x, b.x) + 10;
    return x > xmin && x < xmax && Math.abs(z - tunnelMid.z) < 85;
  };

  // montañas lejanas
  const mGeos = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2 + r() * 0.1;
    const dist = 950 + r() * 350;
    const h = 120 + r() * 220;
    const g = new THREE.ConeGeometry(140 + r() * 160, h, 7, 1);
    g.translate(cx + Math.cos(a) * dist, h / 2 - 5, cz + Math.sin(a) * dist);
    mGeos.push(g);
  }
  const mountains = new THREE.Mesh(mergeGeometries(mGeos), new THREE.MeshStandardMaterial({ color: 0x7c8f9c, flatShading: true, roughness: 1 }));
  scene.add(mountains);

  // colinas cercanas
  const hGeos = [];
  for (let i = 0; i < 70; i++) {
    const a = r() * Math.PI * 2;
    const dist = 520 + r() * 300;
    const x = cx + Math.cos(a) * dist, z = cz + Math.sin(a) * dist;
    if (distTrack(x, z) < 120) continue;
    const g = new THREE.SphereGeometry(40 + r() * 60, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    g.scale(1, 0.35 + r() * 0.4, 1);
    g.translate(x, -2, z);
    hGeos.push(g);
  }
  if (hGeos.length) {
    const hills = new THREE.Mesh(mergeGeometries(hGeos), new THREE.MeshStandardMaterial({ color: 0x6f9a45, flatShading: true, roughness: 1 }));
    hills.receiveShadow = true;
    scene.add(hills);
  }

  // árboles (instanciados)
  const trunkGeo = new THREE.CylinderGeometry(0.4, 0.6, 3, 6); trunkGeo.translate(0, 1.5, 0);
  const pineGeo = new THREE.ConeGeometry(3.2, 9, 7); pineGeo.translate(0, 7, 0);
  const roundGeo = new THREE.IcosahedronGeometry(3.4, 0); roundGeo.translate(0, 5.6, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3b22, roughness: 1 });
  const pineMat = new THREE.MeshStandardMaterial({ color: 0x2f6b34, roughness: 1, flatShading: true });
  const roundMat = new THREE.MeshStandardMaterial({ color: 0x4f8f3a, roughness: 1, flatShading: true });
  const spots = [];
  let tries = 0;
  while (spots.length < 650 && tries < 20000) {
    tries++;
    const x = cx + (r() - 0.5) * 1300, z = cz + (r() - 0.5) * 1200;
    const dt = distTrack(x, z);
    if (dt < LIMIT + 18 || nearTunnel(x, z)) continue;
    if (Math.abs(z) < 75 && x > -120 && x < 140) continue; // gradas
    spots.push([x, z, 0.7 + r() * 0.8, r() < 0.55]);
  }
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, spots.length);
  const pines = new THREE.InstancedMesh(pineGeo, pineMat, spots.filter((s) => s[3]).length);
  const rounds = new THREE.InstancedMesh(roundGeo, roundMat, spots.filter((s) => !s[3]).length);
  let ip = 0, ir = 0;
  spots.forEach(([x, z, s, pine], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 6);
    m4.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(s, s, s));
    trunks.setMatrixAt(i, m4);
    if (pine) pines.setMatrixAt(ip++, m4); else rounds.setMatrixAt(ir++, m4);
  });
  for (const m of [trunks, pines, rounds]) { m.castShadow = true; m.receiveShadow = true; scene.add(m); }

  // rocas
  const rockGeo = new THREE.DodecahedronGeometry(1.6, 0);
  const rocks = new THREE.InstancedMesh(rockGeo, new THREE.MeshStandardMaterial({ color: 0x8a847a, flatShading: true, roughness: 1 }), 160);
  for (let i = 0; i < 160; i++) {
    let x, z;
    do { x = cx + (r() - 0.5) * 1100; z = cz + (r() - 0.5) * 1000; } while (distTrack(x, z) < LIMIT + 6 || nearTunnel(x, z));
    const s = 0.5 + r() * 1.6;
    q.setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3));
    m4.compose(new THREE.Vector3(x, s * 0.4, z), q, new THREE.Vector3(s, s * 0.7, s));
    rocks.setMatrixAt(i, m4);
  }
  rocks.castShadow = true;
  scene.add(rocks);

  // gradas junto a la recta de meta (lado izquierdo, fuera del circuito)
  const crowdMat = new THREE.MeshStandardMaterial({ map: T.crowdTex(), roughness: 0.9 });
  const standMat = new THREE.MeshStandardMaterial({ color: 0x9aa3ad, roughness: 0.8 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.6, side: THREE.DoubleSide });
  const crowds = [];
  for (const [s0, len] of [[-95, 70], [-15, 70], [65, 60]]) {
    const g = new THREE.Group();
    placeOnTrack(g, track, s0 + len / 2, -(LIMIT + 9), 0);
    for (let k = 0; k < 6; k++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2 + k * 1.2, len), standMat);
      step.position.set(k * 2.2, (1.2 + k * 1.2) / 2, 0);
      step.castShadow = true; step.receiveShadow = true;
      g.add(step);
      const tex = crowdMat.map.clone();
      tex.needsUpdate = true;
      tex.repeat.set(len / 12, 0.5);
      tex.offset.set(r(), k % 2 ? 0 : 0.5);
      const people = new THREE.Mesh(new THREE.PlaneGeometry(len, 1.3), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
      people.rotation.y = -Math.PI / 2;
      people.position.set(k * 2.2 - 1.12, 1.2 + k * 1.2 + 0.55, 0);
      g.add(people);
      crowds.push(people);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(15, 0.4, len + 2), roofMat);
    roof.position.set(6, 12, 0);
    roof.rotation.z = -0.12;
    roof.castShadow = true;
    g.add(roof);
    for (const z of [-len / 2, 0, len / 2]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 0.5), standMat);
      p.position.set(13, 6, z);
      g.add(p);
    }
    scene.add(g);
  }

  // banderas a lo largo de la pista
  const flagGeos = [], poleGeos = [];
  const flagCols = [0xe63946, 0xffd60a, 0x2a9df4, 0x2ec4b6, 0xf15bb5, 0xff9f1c];
  const flagMeshes = [];
  for (let s = 20; s < track.length; s += 45) {
    if (track.inTunnel(s) || track.inTunnel(s + 20) || track.inTunnel(s - 20)) continue;
    for (const side of [-1, 1]) {
      const P = track.pointAt(s, side * (LIMIT + 2.2));
      const base = track.baseAt(s);
      const pole = new THREE.CylinderGeometry(0.08, 0.08, 6, 5);
      pole.translate(P.x, base + 3, P.z);
      poleGeos.push(pole);
      const fg = new THREE.BufferGeometry();
      fg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, -1.6, 0, 2.4, -0.8, 0], 3));
      fg.computeVertexNormals();
      const flag = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ color: flagCols[Math.floor(r() * flagCols.length)], side: THREE.DoubleSide }));
      flag.position.set(P.x, base + 6, P.z);
      flag.rotation.y = r() * 6;
      flag.userData.phase = r() * 6;
      scene.add(flag);
      flagMeshes.push(flag);
    }
  }
  scene.add(new THREE.Mesh(mergeGeometries(poleGeos), new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.5 })));

  // pilas de neumáticos en el exterior de las curvas
  // neumático sencillo (cilindro hueco): pocos triángulos, se ve igual desde la pista
  const tireGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.6, 12, 1, false);
  const stackGeos = [];
  for (const g of track.segs) {
    if (g.type !== 'A') continue;
    const outer = g.ang > 0 ? -1 : 1;
    for (let t = 6; t < g.length - 4; t += 4.5) {
      const s = g.s0 + t;
      const P = track.pointAt(s, outer * (LIMIT + 1.9));
      for (let k = 0; k < 3; k++) {
        const tg = tireGeo.clone();
        tg.translate(P.x, track.baseAt(s) + 0.32 + k * 0.62, P.z);
        stackGeos.push(tg);
      }
    }
  }
  const stacks = new THREE.Mesh(mergeGeometries(stackGeos), new THREE.MeshStandardMaterial({ color: 0x1d1d1d, roughness: 0.9 }));
  stacks.castShadow = true;
  scene.add(stacks);
  splitBigMeshes(scene, 3000);

  // nubes
  const cloudGeos = [];
  for (let i = 0; i < 26; i++) {
    const x = cx + (r() - 0.5) * 2200, z = cz + (r() - 0.5) * 2200, y = 260 + r() * 140;
    for (let k = 0; k < 5; k++) {
      const g = new THREE.IcosahedronGeometry(25 + r() * 25, 1);
      g.scale(1.6, 0.6, 1);
      g.translate(x + (k - 2) * 35 + r() * 10, y + r() * 12, z + r() * 25);
      cloudGeos.push(g);
    }
  }
  const clouds = new THREE.Mesh(mergeGeometries(cloudGeos), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xbfd6ea, emissiveIntensity: 0.55, flatShading: true, roughness: 1, fog: false }));
  scene.add(clouds);

  // dirigible publicitario sobrevolando la recta
  const blimp = new THREE.Group();
  const bb = new THREE.Mesh(new THREE.SphereGeometry(8, 20, 14), new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.5 }));
  bb.scale.set(2.6, 1, 1);
  blimp.add(bb);
  const ban = new THREE.Mesh(new THREE.PlaneGeometry(30, 4), new THREE.MeshBasicMaterial({ map: T.bannerTex('MEGA MONSTRUOS'), side: THREE.DoubleSide }));
  ban.position.set(0, -2, 8.05);
  blimp.add(ban);
  const ban2 = ban.clone(); ban2.position.z = -8.05; ban2.rotation.y = Math.PI; blimp.add(ban2);
  for (const z of [-4, 4]) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 0.4), new THREE.MeshStandardMaterial({ color: 0xd42a20 }));
    fin.position.set(-18, 0, 0);
    fin.rotation.x = z > 0 ? 0 : Math.PI / 2;
    blimp.add(fin);
  }
  const gond = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 2.5), new THREE.MeshStandardMaterial({ color: 0x333333 }));
  gond.position.y = -8.5;
  blimp.add(gond);
  scene.add(blimp);

  let time = 0;
  return {
    sun, hemi, sky,
    baseHemi: hemi.intensity, baseSun: sun.intensity,
    setShadowSize(n) {
      if (sun.shadow.mapSize.x === n) return;
      sun.shadow.mapSize.set(n, n);
      if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    },
    // la zona con sombras sigue al jugador que se va a dibujar
    focus(p) {
      sun.target.position.set(p.x, p.y, p.z);
      sun.position.set(p.x + 120, p.y + 160, p.z + 70);
      sun.target.updateMatrixWorld();
    },
    update(dt) {
      time += dt;
      for (const f of flagMeshes) f.rotation.y += Math.sin(time * 3 + f.userData.phase) * 0.01;
      for (let i = 0; i < crowds.length; i++) {
        crowds[i].position.y += Math.sin(time * 9 + i * 1.7) * 0.006;
      }
      const a = time * 0.03;
      blimp.position.set(cx + Math.cos(a) * 380, 120, cz + Math.sin(a) * 300);
      blimp.rotation.y = -a - Math.PI / 2 + Math.PI;
    },
  };
}
