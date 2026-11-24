// Trazado de la pista: geometría analítica (rectas y curvas), alturas,
// fosos, rampas y zonas especiales. Todo se describe en coordenadas de pista:
//   s = metros recorridos desde la línea de meta, d = desplazamiento lateral (+ derecha).

export const ROAD_HALF = 11; // mitad del ancho del camino de tierra
export const LIMIT = 15;     // posición de las barreras
export const CAR_HALF_W = 1.4;

const DEG = Math.PI / 180;

// Recorrido "tortuga": rectas (len) y curvas (ang en grados, + = derecha).
// Las dos rectas marcadas con solve se calculan para que el circuito cierre.
function layout() {
  return [
    { type: 'S', len: 230 },               // 0  recta de meta: turbos, coches para aplastar
    { type: 'A', ang: 90, r: 70 },         // 1
    { type: 'S', len: 330 },               // 2  troncos y el gran foso
    { type: 'A', ang: 90, r: 65 },         // 3
    { type: 'A', ang: -35, r: 60 },        // 4  chicane con bola de demolición
    { type: 'A', ang: 70, r: 60 },         // 5
    { type: 'A', ang: -35, r: 60 },        // 6
    { type: 'S', len: 290 },               // 7  túnel
    { type: 'A', ang: 90, r: 70 },         // 8
    { type: 'S', len: 0, solve: 'X' },     // 9  barro, baches y foso de cocodrilos
    { type: 'A', ang: 90, r: 65 },         // 10
    { type: 'S', len: 0, solve: 'Y' },     // 11 la red y recta final
  ];
}

const rightOf = (th) => [-Math.sin(th), Math.cos(th)];

function walk(segs) {
  let s = 0, x = 0, z = 0, th = 0;
  for (const g of segs) {
    g.s0 = s; g.x0 = x; g.z0 = z; g.th0 = th;
    if (g.type === 'S') {
      g.length = g.len;
      x += Math.cos(th) * g.len;
      z += Math.sin(th) * g.len;
    } else {
      const a = g.ang * DEG;
      const sg = Math.sign(a);
      g.length = Math.abs(a) * g.r;
      const [rx, rz] = rightOf(th);
      g.cx = x + rx * g.r * sg;
      g.cz = z + rz * g.r * sg;
      th += a;
      const [rx2, rz2] = rightOf(th);
      x = g.cx - rx2 * g.r * sg;
      z = g.cz - rz2 * g.r * sg;
    }
    s += g.length;
  }
  return { s, x, z, th };
}

function solveLayout() {
  const segs = layout();
  const end0 = walk(segs);
  const gx = segs.find((g) => g.solve === 'X');
  const gy = segs.find((g) => g.solve === 'Y');
  const ux = Math.cos(gx.th0), uz = Math.sin(gx.th0);
  const vx = Math.cos(gy.th0), vz = Math.sin(gy.th0);
  const det = ux * vz - uz * vx;
  const X = (-end0.x * vz + end0.z * vx) / det;
  const Y = (-ux * end0.z + uz * end0.x) / det;
  gx.len = X;
  gy.len = Y;
  const end = walk(segs);
  if (Math.hypot(end.x, end.z) > 0.01 || X < 50 || Y < 50) {
    throw new Error('El circuito no cierra');
  }
  return { segs, length: end.s };
}

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export class Track {
  constructor() {
    const { segs, length } = solveLayout();
    this.segs = segs;
    this.length = length;
    this.N = Math.round(length);
    this.ds = length / this.N;
    const N = this.N;
    this.px = new Float32Array(N);
    this.pz = new Float32Array(N);
    this.th = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const p = this.evalAt(i * this.ds);
      this.px[i] = p.x; this.pz[i] = p.z; this.th[i] = p.th;
    }
    this.buildFeatures();
  }

  // s relativo al inicio del tramo k, ajustado a la rejilla de muestras
  at(k, rel) {
    return this.snap(this.segs[k].s0 + rel);
  }

  snap(s) {
    return Math.round(s / this.ds) * this.ds;
  }

  wrap(s) {
    const L = this.length;
    s %= L;
    return s < 0 ? s + L : s;
  }

  evalAt(s) {
    s = this.wrap(s);
    let g = this.segs[this.segs.length - 1];
    for (const seg of this.segs) {
      if (s < seg.s0 + seg.length) { g = seg; break; }
    }
    const t = s - g.s0;
    if (g.type === 'S') {
      return { x: g.x0 + Math.cos(g.th0) * t, z: g.z0 + Math.sin(g.th0) * t, th: g.th0 };
    }
    const sg = Math.sign(g.ang);
    const th = g.th0 + (sg * t) / g.r;
    const [rx, rz] = rightOf(th);
    return { x: g.cx - rx * g.r * sg, z: g.cz - rz * g.r * sg, th };
  }

  buildFeatures() {
    const A = (k, rel) => this.at(k, rel);

    // Mesetas elevadas donde están los fosos (subida, llano, bajada)
    this.plateaus = [
      { a: A(2, 115), b: A(2, 160), c: A(2, 270), d: A(2, 315), h: 5 },
      { a: A(9, 130), b: A(9, 172), c: A(9, 275), d: A(9, 318), h: 4.5 },
    ];
    // Baches seguidos (whoops) para que los camiones boten
    this.whoops = [{ a: A(9, 65), b: A(9, 65) + 6 * 9, amp: 0.75, wl: 9 }];

    // Rampas: suben linealmente de s0 a s1 en el rango lateral [d0, d1]
    this.ramps = [
      { s0: A(2, 180), s1: A(2, 196), d0: -LIMIT, d1: LIMIT, h: 3.5 },
      { s0: A(9, 190), s1: A(9, 206), d0: -LIMIT, d1: 3, h: 3.5 },
    ];

    // Fosos. El de cocodrilos tiene agua y un puente estrecho en el lado derecho.
    this.pits = [
      { name: 'foso', s0: A(2, 196), s1: A(2, 214), floor: 0, water: false },
      { name: 'cocodrilos', s0: A(9, 206), s1: A(9, 228), floor: 1.4, water: true, bridge: [6.5, 11.5] },
    ];
    for (const p of this.pits) {
      p.top = this.baseAt((p.s0 + p.s1) / 2);
      p.respawnS = p.s1 + 10;
    }

    // Charcos de barro (elipses en coordenadas de pista)
    this.mud = [
      { s: A(9, 18), d: -5, rs: 9, rd: 5 },
      { s: A(9, 34), d: 4, rs: 10, rd: 6 },
      { s: A(9, 52), d: -2, rs: 8, rd: 5.5 },
    ];

    this.tunnel = { s0: A(7, 30), s1: A(7, 250) };

    this.startLine = 0;
  }

  baseAt(s) {
    s = this.wrap(s);
    let h = 0;
    for (const p of this.plateaus) {
      if (s > p.a && s < p.d) h += p.h * smooth(p.a, p.b, s) * (1 - smooth(p.c, p.d, s));
    }
    for (const w of this.whoops) {
      if (s > w.a && s < w.b) h += (w.amp * (1 - Math.cos((2 * Math.PI * (s - w.a)) / w.wl))) / 2;
    }
    return h;
  }

  // Superficie bajo el punto (s, d): altura y tipo de terreno
  surfaceAt(s, d) {
    s = this.wrap(s);
    let h = this.baseAt(s);
    let type = Math.abs(d) <= ROAD_HALF ? 'road' : 'grass';
    for (const r of this.ramps) {
      if (s >= r.s0 && s < r.s1 && d >= r.d0 && d <= r.d1) {
        h += (r.h * (s - r.s0)) / (r.s1 - r.s0);
        type = 'ramp';
      }
    }
    for (const p of this.pits) {
      if (s >= p.s0 && s < p.s1) {
        if (p.bridge && d >= p.bridge[0] && d <= p.bridge[1]) {
          return { h: h + 0.3, type: 'bridge', top: h };
        }
        return { h: p.floor, type: p.water ? 'water' : 'pit', top: h, pit: p };
      }
    }
    if (type === 'road') {
      for (const m of this.mud) {
        let ds = s - m.s;
        if (ds > this.length / 2) ds -= this.length;
        const q = (ds / m.rs) ** 2 + ((d - m.d) / m.rd) ** 2;
        if (q < 1) { type = 'mud'; break; }
      }
    }
    return { h, type };
  }

  inTunnel(s) {
    s = this.wrap(s);
    return s > this.tunnel.s0 && s < this.tunnel.s1;
  }

  // Punto del mundo para coordenadas de pista (interpolando muestras)
  pointAt(s, d = 0) {
    s = this.wrap(s);
    const f = s / this.ds;
    const i = Math.floor(f) % this.N;
    const j = (i + 1) % this.N;
    const t = f - Math.floor(f);
    let th0 = this.th[i], th1 = this.th[j];
    let dth = th1 - th0;
    while (dth > Math.PI) dth -= 2 * Math.PI;
    while (dth < -Math.PI) dth += 2 * Math.PI;
    const th = th0 + dth * t;
    const x = this.px[i] + (this.px[j] - this.px[i]) * t;
    const z = this.pz[i] + (this.pz[j] - this.pz[i]) * t;
    const rx = -Math.sin(th), rz = Math.cos(th);
    return { x: x + rx * d, z: z + rz * d, th, rx, rz, tx: Math.cos(th), tz: Math.sin(th) };
  }

  // Proyecta un punto del mundo sobre la pista. hint = índice de muestra anterior.
  project(x, z, hint = -1) {
    const N = this.N, px = this.px, pz = this.pz;
    let best = 0, bestD = Infinity;
    if (hint >= 0) {
      for (let k = -40; k <= 40; k++) {
        const i = (hint + k + N) % N;
        const dx = x - px[i], dz = z - pz[i];
        const dd = dx * dx + dz * dz;
        if (dd < bestD) { bestD = dd; best = i; }
      }
    }
    if (hint < 0 || bestD > 40 * 40) {
      bestD = Infinity;
      for (let i = 0; i < N; i++) {
        const dx = x - px[i], dz = z - pz[i];
        const dd = dx * dx + dz * dz;
        if (dd < bestD) { bestD = dd; best = i; }
      }
    }
    const th = this.th[best];
    const tx = Math.cos(th), tz = Math.sin(th);
    const dx = x - px[best], dz = z - pz[best];
    const along = dx * tx + dz * tz;
    const lat = -dx * tz + dz * tx;
    return { s: this.wrap(best * this.ds + along), d: lat, i: best, th };
  }

  // Curvatura media por delante (para que la IA frene y use objetos)
  curvatureAhead(s, dist) {
    const a = this.pointAt(s).th;
    const b = this.pointAt(s + dist).th;
    let d = b - a;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    return d;
  }

  // Distancia hacia delante de s1 a s2 (siempre positiva, con vuelta)
  ahead(s1, s2) {
    return this.wrap(s2 - s1);
  }
}
