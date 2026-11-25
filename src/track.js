// Trazado de la pista: geometría analítica (rectas y curvas), alturas,
// fosos, rampas y zonas especiales. Todo se describe en coordenadas de pista:
//   s = metros recorridos desde la línea de meta, d = desplazamiento lateral (+ derecha).

export const ROAD_HALF = 11; // mitad del ancho del camino de tierra
export const LIMIT = 15;     // posición de las barreras
export const CAR_HALF_W = 1.4;
export const STREET_GAP = 6.5; // en los cruces con tráfico la barrera se abre ±6,5 m alrededor del centro
export const PIT_DEPTH = 3;  // el fondo (o el líquido) de un foso queda al menos 3 m por debajo de la pista

const DEG = Math.PI / 180;

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

function solveLayout(layout) {
  const segs = layout.map((g) => ({ ...g }));
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

// Olas: periodo (s), largo de cada lengua (m), retraso entre lenguas (fracción del periodo),
// lo que entra en la pista desde la barrera (m: con 15 llega hasta el centro y deja seco el otro
// lado) y dónde espera el agua cuando se retira (m fuera de la barrera)
export const WAVE = { period: 6.5, lobe: 26, lag: 0.07, reach: 15, out: 26 };
// fase de la ola: fuera (0) hasta 0,3; entra hasta 0,48; se queda hasta 0,75; se retira hasta 0,95
export function waveEnv(u) {
  if (u < 0.3) return 0;
  if (u < 0.48) return smooth(0.3, 0.48, u);
  if (u < 0.75) return 1;
  return 1 - smooth(0.75, 0.95, u);
}

export class Track {
  constructor(circuit) {
    this.circuit = circuit;
    this.theme = circuit.theme;
    const { segs, length } = solveLayout(circuit.layout);
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
    const f = this.circuit.features((k, rel) => this.at(k, rel), LIMIT);
    // listas vacías por defecto: cada circuito pone solo lo que usa
    Object.assign(this, { plateaus: [], whoops: [], ramps: [], pits: [], mud: [], lakes: [], reserved: [], meteors: [], crossings: [], waves: [], legs: [] }, f);
    this.time = 0; // reloj de las olas (lo avanza Obstacles.update)
    // centro de cada cruce (los coches pasan por ahí) y hueco de la barrera, ajustado a las muestras
    for (const c of this.crossings) {
      c.s = (c.s0 + c.s1) / 2;
      c.g0 = Math.ceil((c.s - STREET_GAP) / this.ds) * this.ds;
      c.g1 = Math.floor((c.s + STREET_GAP) / this.ds) * this.ds;
    }
    for (const p of this.pits) {
      p.water = !!p.liquid; // se cae dentro de algo (agua, hielo o lava)
      p.top = this.baseAt((p.s0 + p.s1) / 2);
      // un foso es un agujero: si está a ras de suelo (sin meseta debajo) se excava, para que
      // el líquido no quede por encima de la pista y haga de escalón
      p.floor = Math.min(p.floor, p.top - PIT_DEPTH);
      p.respawnS = p.s1 + 10;
      // 0, 1 o 2 puentes por foso: [[d0, d1], …] (se admite también el antiguo bridge: [d0, d1])
      p.bridges = p.bridges || (p.bridge ? [p.bridge] : []);
    }
    this.patchKind = this.theme.patch || 'mud';
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
        for (const b of p.bridges) {
          if (d >= b[0] && d <= b[1]) return { h: h + 0.3, type: 'bridge', top: h };
        }
        return { h: p.floor, type: p.water ? 'water' : 'pit', top: h, pit: p };
      }
    }
    // lago helado: hielo de barrera a barrera
    for (const k of this.lakes) {
      if (s >= k.s0 && s < k.s1 && Math.abs(d) <= LIMIT) return { h, type: 'ice' };
    }
    // olas (Bahía Pirata): donde ha entrado el agua, frena como el barro
    for (const w of this.waves) {
      if (s >= w.s0 && s < w.s1 && (w.side < 0 ? d + LIMIT : LIMIT - d) < this.waveAt(w, s, this.time)) return { h, type: 'mud', wave: w };
    }
    if (type === 'road') {
      for (const m of this.mud) {
        let ds = s - m.s;
        if (ds > this.length / 2) ds -= this.length;
        const q = (ds / m.rs) ** 2 + ((d - m.d) / m.rd) ** 2;
        if (q < 1) { type = this.patchKind === 'mud' ? 'mud' : 'ice'; break; }
      }
    }
    return { h, type };
  }

  // Olas: cuántos metros ha entrado el agua desde la barrera del lado del mar en (s, t).
  // Negativo: el agua está todavía en la arena, fuera de la pista. La zona se parte en lenguas
  // de WAVE.lobe metros que llegan un poco desfasadas, como una ola que rompe en diagonal.
  waveAt(w, s, t) {
    const x = (s - w.s0) / WAVE.lobe;
    const k = Math.floor(x), fx = x - k;
    const u = (((t / WAVE.period - k * WAVE.lag) % 1) + 1) % 1;
    const env = waveEnv(u);
    const shape = Math.sqrt(Math.max(0, Math.sin(Math.PI * fx)));
    return -WAVE.out + (WAVE.reach + WAVE.out) * env * shape;
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
