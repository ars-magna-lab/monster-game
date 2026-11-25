// Camiones disponibles y construcción de sus modelos 3D con primitivas.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as T from './textures.js';
import { mergeStatic } from './optimize.js';

export const TRUCKS = [
  {
    id: 'trituradora', size: 1.0, style: 'pickup', name: 'Trituradora', num: 1, color: 0xd7261e, accent: 0x1d1d1d, rim: 0xd8d8d8, deco: 'saw',
    stats: { speed: 3, accel: 3, handling: 3, weight: 3 },
    desc: 'Equilibrada, con dos sierras que giran en el morro. Ideal para empezar.',
  },
  {
    id: 'megalodon', size: 1.15, style: 'shark', name: 'Megalodón', num: 2, color: 0x1f6fd1, accent: 0xf2f2f2, rim: 0xffffff, deco: 'shark',
    stats: { speed: 5, accel: 2, handling: 2, weight: 3 },
    desc: 'La velocidad punta más alta, pero cuesta hacerle girar.',
  },
  {
    id: 'escorpion', size: 0.9, style: 'buggy', name: 'Escorpión', num: 3, color: 0x7ed321, accent: 0x1b1b1b, rim: 0x222222, deco: 'scorpion',
    stats: { speed: 2, accel: 4, handling: 5, weight: 1 },
    desc: 'Sale disparado y gira como nadie. Ligero: los golpes le afectan más.',
  },
  {
    id: 'mamut', size: 1.32, style: 'hauler', name: 'Mamut', num: 4, color: 0x8b5a2b, accent: 0xf2e6c9, rim: 0xc9a46a, deco: 'mammoth',
    stats: { speed: 3, accel: 2, handling: 2, weight: 5 },
    desc: 'Pesadísimo: troncos y empujones apenas le frenan.',
  },
  {
    id: 'relampago', size: 0.82, style: 'wedge', name: 'Relámpago', num: 5, color: 0xffcc00, accent: 0x111111, rim: 0x111111, deco: 'bolt',
    stats: { speed: 4, accel: 4, handling: 3, weight: 1 },
    desc: 'Rápido y ágil, pero ligero como una pluma.',
  },
  {
    id: 'dragon', size: 1.12, style: 'dragon', name: 'Dragón', num: 6, color: 0x7b2cbf, accent: 0x39e639, rim: 0x39e639, deco: 'dragon',
    stats: { speed: 4, accel: 3, handling: 2, weight: 3 },
    desc: 'Escamas, cuernos y alas. Corre mucho y aguanta bien los golpes.',
  },
];

// Formas de carrocería: perfil lateral (z adelante, y arriba), ventanilla y
// dónde van los detalles (techo, morro, cola, faros), más qué extras lleva.
const STYLES = {
  pickup: {
    shell: [[-2.35, 0.0], [2.45, 0.0], [2.55, 0.45], [2.35, 0.85], [0.95, 0.98], [0.35, 1.78], [-0.85, 1.82], [-1.05, 1.0], [-2.35, 1.02]],
    glass: [[0.99, 1.0], [0.4, 1.76], [-0.8, 1.76], [-0.98, 1.04]],
    w: 2.1, roofY: 1.82, roofZ: -0.25, noseZ: 2.48, tailZ: -2.45, hlY: 0.62, tlY: 0.75, bar: true, exhaust: true,
  },
  shark: {
    shell: [[-2.6, 0.0], [2.75, 0.0], [2.95, 0.25], [1.7, 0.85], [0.55, 1.6], [-0.95, 1.7], [-1.4, 1.05], [-2.6, 1.1]],
    glass: [[1.45, 0.98], [0.55, 1.58], [-0.9, 1.66], [-1.15, 1.1]],
    w: 2.15, roofY: 1.68, roofZ: -0.3, noseZ: 2.9, tailZ: -2.7, hlY: 0.35, tlY: 0.8, bar: false, exhaust: true,
  },
  buggy: {
    shell: [[-2.05, 0.0], [2.3, 0.0], [2.45, 0.45], [1.2, 0.75], [-1.2, 0.75], [-1.35, 1.15], [-2.05, 1.15]],
    glass: null,
    w: 1.9, roofY: 2.15, roofZ: -0.1, noseZ: 2.4, tailZ: -2.1, hlY: 0.45, tlY: 0.85, bar: true, exhaust: false, cage: true,
  },
  hauler: {
    shell: [[-2.4, 0.0], [2.55, 0.0], [2.6, 1.05], [1.45, 1.15], [1.15, 2.15], [-0.85, 2.2], [-1.15, 1.25], [-2.4, 1.3]],
    glass: [[1.2, 1.2], [1.0, 2.0], [-0.7, 2.06], [-0.95, 1.3]],
    w: 2.45, roofY: 2.2, roofZ: 0.1, noseZ: 2.6, tailZ: -2.45, hlY: 0.75, tlY: 0.95, bar: true, exhaust: true, grille: true,
  },
  wedge: {
    shell: [[-2.4, 0.0], [2.6, 0.0], [2.7, 0.25], [0.95, 0.72], [0.15, 1.32], [-1.0, 1.34], [-1.55, 0.92], [-2.4, 0.95]],
    glass: [[0.92, 0.75], [0.18, 1.3], [-0.95, 1.3], [-1.35, 0.95]],
    w: 2.05, roofY: 1.34, roofZ: -0.4, noseZ: 2.7, tailZ: -2.45, hlY: 0.3, tlY: 0.7, bar: false, exhaust: false, spoiler: true,
  },
  dragon: {
    shell: [[-2.45, 0.0], [2.5, 0.0], [2.75, 0.5], [2.05, 0.95], [0.85, 1.05], [0.3, 1.88], [-0.9, 1.92], [-1.2, 1.12], [-2.45, 1.2]],
    glass: [[0.88, 1.07], [0.35, 1.85], [-0.85, 1.86], [-1.12, 1.15]],
    w: 2.2, roofY: 1.92, roofZ: -0.3, noseZ: 2.6, tailZ: -2.55, hlY: 0.65, tlY: 0.9, bar: false, exhaust: true, eyes: true,
  },
};

export const WHEEL_R = 1.1;
const WHEEL_W = 0.95;
export const WHEEL_X = 1.6;
export const WHEEL_Z = 1.75;
export const BODY_Y = 2.0;

let shared = null;
function sharedAssets() {
  if (shared) return shared;
  const tire = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, WHEEL_W, 22, 1);
  tire.rotateZ(Math.PI / 2);
  const lugs = [];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    for (const side of [-1, 1]) {
      const g = new THREE.BoxGeometry(WHEEL_W * 0.48, 0.22, 0.3);
      g.translate(side * WHEEL_W * 0.26, WHEEL_R + 0.03, (side * 0.08));
      g.rotateX(a + side * 0.12);
      lugs.push(g);
    }
  }
  const lugGeo = mergeGeometries(lugs);
  const rubber = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.95 });
  const tread = new THREE.MeshStandardMaterial({ map: T.treadTex(), roughness: 0.95 });
  const side = new THREE.MeshStandardMaterial({ map: T.tireSideTex(), roughness: 0.9 });
  const rimGeo = new THREE.CylinderGeometry(0.58, 0.58, WHEEL_W + 0.06, 18);
  rimGeo.rotateZ(Math.PI / 2);
  const hubGeo = new THREE.CylinderGeometry(0.2, 0.26, WHEEL_W + 0.2, 8);
  hubGeo.rotateZ(Math.PI / 2);
  const chrome = new THREE.MeshStandardMaterial({ color: 0xcfd3d6, metalness: 0.9, roughness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1c1c1f, metalness: 0.4, roughness: 0.6 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x10151c, metalness: 0.6, roughness: 0.15 });
  const headlight = new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xfff2b0, emissiveIntensity: 1.2 });
  const taillight = new THREE.MeshStandardMaterial({ color: 0xff2222, emissive: 0xaa0000, emissiveIntensity: 1 });
  shared = { tire, lugGeo, rubber, tread, side, rimGeo, hubGeo, chrome, dark, glass, headlight, taillight };
  return shared;
}

function extrudeProfile(points, width, bevel = 0.08) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (const [u, v] of points.slice(1)) shape.lineTo(u, v);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: width, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 4,
  });
  g.translate(0, 0, -width / 2);
  g.rotateY(-Math.PI / 2); // u -> +z (adelante), anchura -> x
  return g;
}

const mesh = (geo, mat, cast = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  return m;
};

// Construye un camión. Devuelve las piezas que se animan.
export function buildTruck(def) {
  const A = sharedAssets();
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = BODY_Y;
  root.add(body);

  const paint = new THREE.MeshStandardMaterial({ color: def.color, metalness: 0.2, roughness: 0.42 });
  const accent = new THREE.MeshStandardMaterial({ color: def.accent, metalness: 0.25, roughness: 0.45 });
  const rimMat = new THREE.MeshStandardMaterial({ color: def.rim, metalness: 0.8, roughness: 0.3 });

  // Carrocería
  const S = STYLES[def.style] || STYLES.pickup;
  const shell = mesh(extrudeProfile(S.shell, S.w), paint);
  body.add(shell);
  if (S.glass) {
    const win = mesh(extrudeProfile(S.glass, S.w + 0.2, 0), A.glass, false);
    body.add(win);
  }
  // chasis y bajos
  const chassis = mesh(new THREE.BoxGeometry(1.7, 0.45, 4.6), A.dark);
  chassis.position.y = -0.3;
  body.add(chassis);
  // franjas laterales
  for (const sx of [-1, 1]) {
    const st = mesh(new THREE.BoxGeometry(0.03, 0.22, 4.4), accent, false);
    st.position.set(sx * (S.w / 2 + 0.09), 0.5, 0.05);
    body.add(st);
    const num = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), new THREE.MeshStandardMaterial({
      map: T.numberTex(def.num, '#' + new THREE.Color(def.color).getHexString(), '#' + new THREE.Color(def.accent).getHexString()),
      transparent: true,
    }));
    num.position.set(sx * (S.w / 2 + 0.11), 0.55, -1.6);
    num.rotation.y = sx * Math.PI / 2;
    body.add(num);
  }
  // franja central en el techo y el capó
  const roofStripe = mesh(new THREE.BoxGeometry(0.5, 0.03, 1.15), accent, false);
  roofStripe.position.set(0, S.roofY + 0.09, S.roofZ);
  if (S.glass) body.add(roofStripe);
  // faros
  for (const sx of [-1, 1]) {
    const hl = mesh(new THREE.BoxGeometry(0.45, 0.25, 0.1), A.headlight, false);
    hl.position.set(sx * 0.7, S.hlY, S.noseZ);
    body.add(hl);
    const tl = mesh(new THREE.BoxGeometry(0.35, 0.22, 0.1), A.taillight, false);
    tl.position.set(sx * 0.75, S.tlY, S.tailZ);
    body.add(tl);
  }
  // barra de luces en el techo
  if (S.bar) {
    const bar = mesh(new THREE.BoxGeometry(1.7, 0.16, 0.25), A.dark);
    bar.position.set(0, S.roofY + 0.16, S.roofZ + 0.5);
    body.add(bar);
    for (let i = 0; i < 4; i++) {
      const l = mesh(new THREE.BoxGeometry(0.28, 0.2, 0.08), A.headlight, false);
      l.position.set(-0.6 + i * 0.4, S.roofY + 0.16, S.roofZ + 0.65);
      body.add(l);
    }
  }
  // escapes cromados (el Mamut lleva chimeneas de camión)
  if (S.exhaust) {
    const tall = def.style === 'hauler';
    for (const sx of [-1, 1]) {
      const ex = mesh(new THREE.CylinderGeometry(tall ? 0.16 : 0.11, tall ? 0.18 : 0.13, tall ? 2.6 : 1.6, 10), A.chrome);
      ex.position.set(sx * (S.w / 2 - 0.2), tall ? 2.2 : 1.55, tall ? 0.95 : -1.2);
      body.add(ex);
    }
  }
  // jaula antivuelco del buggy, con asiento
  if (S.cage) {
    const tube = (a, b, r = 0.08) => {
      const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
      const len = va.distanceTo(vb);
      const m = mesh(new THREE.CylinderGeometry(r, r, len, 8), A.chrome);
      m.position.copy(va).add(vb).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
      body.add(m);
    };
    const x = S.w / 2 - 0.15, top = S.roofY;
    for (const sx of [-x, x]) {
      tube([sx, 0.75, 1.15], [sx * 0.85, top, 0.2]);
      tube([sx * 0.85, top, 0.2], [sx * 0.85, top, -1.0]);
      tube([sx * 0.85, top, -1.0], [sx, 1.15, -1.4]);
    }
    tube([-x * 0.85, top, 0.2], [x * 0.85, top, 0.2]);
    tube([-x * 0.85, top, -1.0], [x * 0.85, top, -1.0]);
    const seat = mesh(new THREE.BoxGeometry(0.8, 0.9, 0.25), A.dark);
    seat.position.set(0, 1.2, -0.75);
    seat.rotation.x = -0.15;
    body.add(seat);
  }
  // rejilla grande del Mamut
  if (S.grille) {
    const gr = mesh(new THREE.BoxGeometry(1.8, 0.85, 0.12), A.chrome);
    gr.position.set(0, 0.55, S.noseZ + 0.02);
    body.add(gr);
    for (let i = 0; i < 6; i++) {
      const sl = mesh(new THREE.BoxGeometry(0.1, 0.7, 0.06), A.dark, false);
      sl.position.set(-0.75 + i * 0.3, 0.55, S.noseZ + 0.09);
      body.add(sl);
    }
  }
  // alerón trasero del Relámpago
  if (S.spoiler) {
    const wing = mesh(new THREE.BoxGeometry(S.w + 0.3, 0.08, 0.6), accent);
    wing.position.set(0, 1.75, -2.15);
    wing.rotation.x = 0.12;
    body.add(wing);
    for (const sx of [-0.7, 0.7]) {
      const st = mesh(new THREE.BoxGeometry(0.1, 0.8, 0.25), accent);
      st.position.set(sx, 1.33, -2.1);
      body.add(st);
    }
  }
  // ojos brillantes del Dragón
  if (S.eyes) {
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xaaff66, emissive: 0x66ff22, emissiveIntensity: 1.6 });
    for (const sx of [-1, 1]) {
      const e = mesh(new THREE.SphereGeometry(0.16, 10, 8), eyeMat, false);
      e.scale.set(1.4, 0.7, 0.6);
      e.position.set(sx * 0.55, 0.88, S.noseZ - 0.12);
      body.add(e);
    }
  }
  // defensa delantera de tubos
  const guard = mesh(new THREE.BoxGeometry(2.0, 0.18, 0.18), A.chrome);
  guard.position.set(0, 0.2, S.noseZ + 0.14);
  body.add(guard);
  for (const sx of [-0.6, 0.6]) {
    const v = mesh(new THREE.BoxGeometry(0.14, 0.6, 0.14), A.chrome);
    v.position.set(sx, 0.35, S.noseZ + 0.14);
    body.add(v);
  }

  // Ruedas, ejes y amortiguadores (no rebotan con la carrocería)
  const wheels = [];
  for (const wz of [WHEEL_Z, -WHEEL_Z]) {
    const axle = mesh(new THREE.CylinderGeometry(0.16, 0.16, WHEEL_X * 2, 8), A.dark);
    axle.rotation.z = Math.PI / 2;
    axle.position.set(0, WHEEL_R, wz);
    root.add(axle);
    const diff = mesh(new THREE.SphereGeometry(0.38, 10, 8), A.dark);
    diff.position.set(0, WHEEL_R, wz);
    root.add(diff);
    for (const wx of [WHEEL_X, -WHEEL_X]) {
      const pivot = new THREE.Group();
      pivot.position.set(wx, WHEEL_R, wz);
      const spin = new THREE.Group();
      pivot.add(spin);
      spin.add(mesh(A.tire, [A.tread, A.side, A.side]));
      spin.add(mesh(A.lugGeo, A.rubber));
      const rim = mesh(A.rimGeo, rimMat, false);
      spin.add(rim);
      const hub = mesh(A.hubGeo, A.chrome, false);
      spin.add(hub);
      root.add(pivot);
      wheels.push({ pivot, spin, front: wz > 0 });
    }
  }
  const shocks = [];
  for (const wz of [WHEEL_Z - 0.35, -WHEEL_Z + 0.35]) {
    for (const sx of [-1, 1]) {
      const sh = mesh(new THREE.CylinderGeometry(0.11, 0.11, 1, 8), new THREE.MeshStandardMaterial({ color: def.accent === 0x111111 ? 0xffcc00 : 0xff7a00, metalness: 0.5, roughness: 0.4 }));
      sh.position.set(sx * 0.95, 0, wz);
      sh.rotation.z = sx * 0.35;
      root.add(sh);
      shocks.push(sh);
    }
  }

  const spinners = [];
  addDeco(def, body, paint, accent, A, spinners);

  root.traverse((o) => { if (o.isMesh) o.receiveShadow = false; });
  mergeStatic(body, new Set(spinners.map((s) => s.obj)));
  root.scale.setScalar(def.size || 1);
  return { root, body, wheels, shocks, spinners, paint };
}

function addDeco(def, body, paint, accent, A, spinners) {
  const white = new THREE.MeshStandardMaterial({ color: 0xf4f1e8, roughness: 0.5 });
  const black = new THREE.MeshStandardMaterial({ color: 0x0d0d0d, roughness: 0.4 });
  switch (def.deco) {
    case 'saw': {
      const shape = new THREE.Shape();
      const teeth = 18, R1 = 0.62, R2 = 0.78;
      for (let i = 0; i < teeth; i++) {
        const a0 = (i / teeth) * Math.PI * 2, a1 = ((i + 0.6) / teeth) * Math.PI * 2;
        const f = i === 0 ? 'moveTo' : 'lineTo';
        shape[f](Math.cos(a0) * R1, Math.sin(a0) * R1);
        shape.lineTo(Math.cos(a1) * R2, Math.sin(a1) * R2);
      }
      shape.closePath();
      const g = new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: false });
      g.translate(0, 0, -0.03);
      g.rotateY(Math.PI / 2);
      for (const sx of [-0.55, 0.55]) {
        const blade = new THREE.Mesh(g, A.chrome);
        blade.position.set(sx, 0.35, 2.75);
        blade.castShadow = true;
        body.add(blade);
        spinners.push({ obj: blade, axis: 'x', speed: 25 });
      }
      // dientes pintados en el capó
      for (let i = 0; i < 6; i++) {
        const t = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.32, 4), white);
        t.position.set(-0.75 + i * 0.3, 0.72, 2.53);
        t.rotation.x = Math.PI;
        body.add(t);
      }
      break;
    }
    case 'shark': {
      const fin = new THREE.Shape();
      fin.moveTo(-0.7, 0); fin.quadraticCurveTo(-0.2, 0.6, -0.55, 1.45);
      fin.quadraticCurveTo(0.3, 0.7, 0.55, 0); fin.closePath();
      const g = new THREE.ExtrudeGeometry(fin, { depth: 0.14, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
      g.translate(0, 0, -0.07);
      g.rotateY(-Math.PI / 2);
      const f = new THREE.Mesh(g, paint);
      f.position.set(0, 1.84, -0.35);
      f.castShadow = true;
      body.add(f);
      const mouth = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.35, 0.08), new THREE.MeshStandardMaterial({ color: 0x8a1010 }));
      mouth.position.set(0, 0.35, 2.5);
      body.add(mouth);
      for (let i = 0; i < 9; i++) {
        for (const up of [1, -1]) {
          const t = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 4), white);
          t.position.set(-0.85 + i * 0.21, 0.35 + up * 0.08, 2.55);
          t.rotation.x = up > 0 ? Math.PI : 0;
          body.add(t);
        }
      }
      for (const sx of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), white);
        eye.position.set(sx * 1.08, 0.72, 1.85);
        body.add(eye);
        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), black);
        pupil.position.set(sx * 1.25, 0.72, 1.9);
        body.add(pupil);
        for (let k = 0; k < 3; k++) {
          const gill = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.45, 0.06), new THREE.MeshStandardMaterial({ color: 0x0c3c7a }));
          gill.position.set(sx * 1.13, 0.55, 1.2 - k * 0.22);
          body.add(gill);
        }
      }
      break;
    }
    case 'scorpion': {
      // cola segmentada que sale de la caja y se curva por encima de la cabina
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 1.05, -2.0), new THREE.Vector3(0, 3.4, -3.4),
        new THREE.Vector3(0, 4.6, -0.6), new THREE.Vector3(0, 3.3, 0.45),
      );
      const n = 12;
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const p = curve.getPoint(t);
        const r = 0.46 - t * 0.24;
        const seg = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), i % 2 ? accent : paint);
        seg.position.copy(p);
        seg.castShadow = true;
        body.add(seg);
      }
      const end = curve.getPoint(1), tan = curve.getTangent(1);
      const sting = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 8), black);
      sting.position.copy(end).addScaledVector(tan, 0.45);
      sting.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
      body.add(sting);
      for (const sx of [-1, 1]) {
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.9), accent);
        arm.position.set(sx * 0.75, 0.45, 2.85);
        body.add(arm);
        for (const k of [-1, 1]) {
          const claw = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.7, 6), paint);
          claw.position.set(sx * 0.75 + k * 0.16, 0.45, 3.45);
          claw.rotation.x = Math.PI / 2;
          claw.rotation.z = -k * 0.35;
          body.add(claw);
        }
      }
      break;
    }
    case 'mammoth': {
      const ivory = new THREE.MeshStandardMaterial({ color: 0xf4ecd6, roughness: 0.4 });
      for (const sx of [-1, 1]) {
        const tusk = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.13, 8, 18, Math.PI * 0.85), ivory);
        tusk.rotation.y = Math.PI / 2;
        tusk.rotation.z = Math.PI * 1.08;
        tusk.position.set(sx * 0.75, 0.6, 2.55 + 0.75);
        tusk.castShadow = true;
        body.add(tusk);
        const ear = new THREE.Mesh(new THREE.SphereGeometry(0.75, 12, 10), new THREE.MeshStandardMaterial({ color: 0x5a3a1c, roughness: 0.9 }));
        ear.scale.set(0.15, 1, 0.8);
        ear.position.set(sx * 1.15, 1.0, 1.3);
        body.add(ear);
      }
      for (let i = 0; i < 5; i++) {
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.22 - i * 0.025, 0.24 - i * 0.025, 0.4, 10), paint);
        seg.position.set(0, 0.7 - i * 0.28, 2.65 + Math.sin(i * 0.5) * 0.25);
        seg.rotation.x = 0.3 - i * 0.12;
        body.add(seg);
      }
      // pelo greñudo en el techo
      for (let i = 0; i < 16; i++) {
        const h = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.45, 5), new THREE.MeshStandardMaterial({ color: 0x4a2c12 }));
        h.position.set(-0.6 + (i % 4) * 0.4, 1.95, -0.7 + Math.floor(i / 4) * 0.3);
        h.rotation.x = -0.5;
        body.add(h);
      }
      break;
    }
    case 'bolt': {
      const bolt = new THREE.Shape();
      bolt.moveTo(1.4, 0.95); bolt.lineTo(0.2, 0.45); bolt.lineTo(0.55, 0.45);
      bolt.lineTo(-1.6, 0.05); bolt.lineTo(-0.2, 0.6); bolt.lineTo(-0.55, 0.6); bolt.closePath();
      const g = new THREE.ShapeGeometry(bolt);
      for (const sx of [-1, 1]) {
        const m = new THREE.Mesh(g, accent);
        m.rotation.y = sx * Math.PI / 2;
        m.position.set(sx * 1.17, 0.05, 0);
        body.add(m);
      }
      const wing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 0.7), accent);
      wing.position.set(0, 2.0, -2.15);
      wing.rotation.x = -0.15;
      wing.castShadow = true;
      body.add(wing);
      for (const sx of [-0.8, 0.8]) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.95, 0.3), accent);
        p.position.set(sx, 1.5, -2.15);
        body.add(p);
      }
      break;
    }
    case 'dragon': {
      for (let i = 0; i < 8; i++) {
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.55, 6), accent);
        const z = 0.25 - i * 0.33;
        const y = z > -0.9 ? 1.88 : 1.08;
        sp.position.set(0, y + 0.25, z);
        sp.rotation.x = -0.4;
        body.add(sp);
      }
      for (const sx of [-1, 1]) {
        const horn = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.9, 8), new THREE.MeshStandardMaterial({ color: 0xeee6cc }));
        horn.position.set(sx * 0.65, 2.15, 0.35);
        horn.rotation.x = -0.9;
        horn.rotation.z = -sx * 0.3;
        body.add(horn);
        const wingS = new THREE.Shape();
        wingS.moveTo(0, 0); wingS.lineTo(1.6, 0.5); wingS.lineTo(1.3, 0.05); wingS.lineTo(1.7, -0.2);
        wingS.lineTo(1.1, -0.35); wingS.lineTo(1.2, -0.7); wingS.lineTo(0.2, -0.5); wingS.closePath();
        const w = new THREE.Mesh(new THREE.ShapeGeometry(wingS), new THREE.MeshStandardMaterial({ color: def.accent, side: THREE.DoubleSide, emissive: 0x0a3a0a }));
        w.position.set(sx * 1.1, 1.1, -1.4);
        w.rotation.y = sx > 0 ? 0 : Math.PI;
        w.rotation.z = 0.5;
        w.rotation.order = 'YZX';
        w.castShadow = true;
        body.add(w);
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffee00, emissive: 0xaa8800 }));
        eye.position.set(sx * 0.6, 0.86, 2.3);
        body.add(eye);
      }
      break;
    }
  }
}

// Animación común del modelo: ruedas, dirección, suspensión y adornos
export function animateTruck(parts, { wheelSpin, steer, comp, dt }) {
  for (const w of parts.wheels) {
    w.spin.rotation.x += wheelSpin;
    if (w.front) w.pivot.rotation.y = steer * 0.45;
  }
  parts.body.position.y = BODY_Y - comp;
  const top = BODY_Y - comp - 0.15;
  for (const sh of parts.shocks) {
    const len = top - (1.1 + 0.05);
    sh.scale.y = Math.max(0.3, len / Math.cos(0.35));
    sh.position.y = 1.15 + len / 2;
  }
  for (const s of parts.spinners) s.obj.rotation[s.axis] += s.speed * dt;
}
