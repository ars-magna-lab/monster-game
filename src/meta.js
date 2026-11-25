// Las copas de la meta: cuando el primero lleva media última vuelta aparece una copa dorada de
// pie sobre la línea de meta, a la altura de los camiones; el primero que cruza se la lleva
// enganchada en la rueda delantera y la levanta haciendo caballitos. Después espera la de plata
// para el segundo y la de bronce para el tercero.
// Una instancia por circuito cargado: sus mallas viven en la escena y las libera disposeScene.
import * as THREE from 'three';
import { buildCupGeometry } from './copa.js';
import { WHEEL_R, WHEEL_X, WHEEL_Z } from './trucks.js';

// Por puesto: color, tamaño esperando en la meta (la copa mide 3 m a escala 1), tamaño en la
// rueda, caballitos cortos antes del que se mantiene, confeti por caballito y sonido
const TIERS = [
  { name: 'oro', color: 0xffc81e, emissive: 0x8a5a00, scale: 1.1, held: 0.8, lifts: 2, confetti: 90, sound: 'trophy', msg: '¡LA COPA ES TUYA!' },
  { name: 'plata', color: 0xdfe6ef, emissive: 0x4a5866, scale: 0.95, held: 0.72, lifts: 1, confetti: 45, sound: 'trophySmall', msg: '¡COPA DE PLATA!' },
  { name: 'bronce', color: 0xd0813c, emissive: 0x5a2c08, scale: 0.85, held: 0.66, lifts: 1, confetti: 30, sound: 'trophySmall', msg: '¡COPA DE BRONCE!' },
];
// Dónde espera la copa: de pie sobre la línea de meta, en el centro, a un palmo del suelo (CUP_Y);
// no es sólida: los camiones la atraviesan. Un haz de luz vertical y unos rayos que giran la
// hacen visible desde el principio de la recta aunque haya camiones delante.
export const CUP_S = 0;
export const CUP_Y = 0.3;
const FLY = 0.35;      // segundos del salto hasta la rueda
const UP_T = 1.0;      // caballito corto: sube en UP_T s y baja en DOWN_T s
const DOWN_T = 0.4;
const CYCLE = UP_T + DOWN_T;
const APPEAR = 0.45;   // segundos del destello al aparecer
// Cuánto dura la ceremonia (s desde que la copa llega a la rueda): la cámara de la celebración
export const CEREMONY = (T) => T.lifts * CYCLE + UP_T + 1.5;

export class FinishCups {
  constructor(track, scene, game) {
    this.track = track;
    this.game = game;
    this.group = new THREE.Group();
    scene.add(this.group);
    const geo = buildCupGeometry();
    this.cups = TIERS.map((T, i) => {
      // sin niebla y con brillo propio: se ve de lejos en todos los circuitos
      const mat = new THREE.MeshStandardMaterial({ color: T.color, metalness: 0.85, roughness: 0.22, emissive: T.emissive, emissiveIntensity: 0.6, fog: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      this.group.add(mesh);
      return { i, T, mesh, mat };
    });
    // haz de luz y rayos de la copa que espera (aditivos, sin niebla)
    const add = { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false };
    this.beamMat = new THREE.MeshBasicMaterial({ color: 0xffd860, opacity: 0.22, side: THREE.DoubleSide, ...add });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 1.4, 70, 12, 1, true).translate(0, 35, 0), this.beamMat);
    this.raysMat = new THREE.SpriteMaterial({ map: raysTexture(), color: 0xffe080, opacity: 0.85, ...add });
    this.rays = new THREE.Sprite(this.raysMat);
    this.rays.scale.setScalar(16);
    this.glow = new THREE.Group();
    this.glow.add(beam, this.rays);
    this.group.add(this.glow);
    this.reset();
  }

  // Todo como al empezar la carrera: ninguna copa a la vista
  reset() {
    for (const c of this.cups || []) if (c.holder) c.holder.wheelie = 0;
    this.next = 0; // la copa que toca dar (0 oro, 1 plata, 2 bronce; 3: ya no hay más)
    for (const c of this.cups) {
      c.state = 'none'; // none · waiting · flying · held
      c.t = 0; c.holder = null; c.sparkT = 0; c.msgPending = false;
      c.mesh.visible = false;
    }
    this.glow.visible = false;
  }

  // Dónde espera la copa: en el centro de la pista, justo antes de la línea de meta
  linePos(out) {
    const s = this.track.wrap(-CUP_S);
    const P = this.track.pointAt(s, 0);
    return out.set(P.x, this.track.baseAt(s) + CUP_Y, P.z);
  }

  // Dónde va la copa: encima de la rueda delantera del lado side (1: x local +), algo hacia fuera
  // para que no se meta en la carrocería; sigue a la rueda en el caballito
  wheelPos(v, side, out) {
    v.mesh.updateMatrix();
    return out.set(side * (WHEEL_X + 0.35), 2 * WHEEL_R + 0.05, WHEEL_Z).applyMatrix4(v.mesh.matrix);
  }

  show(c) {
    if (c.state !== 'none') return;
    c.state = 'waiting'; c.t = 0;
    c.mesh.visible = true;
    const p = this.linePos(c.mesh.position);
    const g = this.game;
    g.fx?.sparks(p.x, p.y + 1.5, p.z, c.i === 0 ? 40 : 20);
    if (g.sound3d) g.sound3d('cupAppear', p.x, p.z, c.i === 0 ? 0.8 : 0.5);
  }

  // ¿Lleva v una copa encima? (para la cámara)
  heldBy(v) { return this.cups.some((c) => c.holder === v && (c.state === 'held' || c.state === 'flying')); }

  // Lado de la rueda que lleva la copa de v (1: x local +), o 0
  cupSide(v) { const c = this.cups.find((q) => q.holder === v && q.state !== 'waiting'); return c ? c.side : 0; }

  // ¿Está v en plena ceremonia (la copa vuela hacia él o la está levantando)? La cámara la sigue
  // de cerca entonces, en vez de quedarse atrás
  ceremony(v) {
    return this.cups.some((c) => c.holder === v && (c.state === 'flying' || (c.state === 'held' && c.t < CEREMONY(c.T))));
  }

  // Un camión ha cruzado la meta en la última vuelta: si queda copa, para él
  award(v) {
    if (this.next >= this.cups.length) return;
    const c = this.cups[this.next++];
    if (c.state === 'none') this.show(c); // (por si nadie había llegado a media vuelta)
    c.state = 'flying'; c.t = 0; c.holder = v;
    c.from = c.mesh.position.clone();
    // la rueda delantera del lado más cercano a la copa (x local + es el lado de d negativo)
    c.side = v.d > 0 ? 1 : -1;
    c.to = new THREE.Vector3();
    c.msgPending = !!this.game.viewOf?.(v);
    // la siguiente ya espera en la meta
    if (this.next < this.cups.length) this.show(this.cups[this.next]);
  }

  // Avanza las copas (dentro de la simulación: también sin dibujar)
  update(dt, vehicles) {
    const g = this.game, tr = this.track;
    // la dorada aparece cuando el primero lleva media última vuelta
    const gold = this.cups[0];
    if (gold.state === 'none' && this.next === 0) {
      for (const v of vehicles) {
        if (!v.finished && v.lap === g.laps && v.lap >= 1 && tr.ahead(0, v.s) >= tr.length / 2) { this.show(gold); break; }
      }
    }
    // haz y rayos sobre la copa que espera, del color de la copa
    const w = this.cups.find((c) => c.state === 'waiting');
    this.glow.visible = !!w;
    if (w) {
      this.linePos(this.glow.position);
      // el halo, a la altura de la boca de la copa: asoma por encima de los camiones que la tapan
      this.glow.position.y += 3 * w.T.scale + 2.5;
      this.raysMat.color.setHex(w.T.color);
      this.beamMat.color.setHex(w.T.color);
      this.raysMat.rotation += dt * 0.6;
      const k = Math.min(1, w.t / APPEAR);
      this.rays.scale.setScalar((10 + 6 * w.T.scale) * k * (1 + 0.06 * Math.sin(w.t * 5)));
    }
    for (const c of this.cups) {
      if (c.state === 'none') continue;
      c.t += dt;
      const m = c.mesh, T = c.T;
      if (c.state === 'waiting') {
        // gira despacio y flota; al aparecer, crece con un rebote
        const k = Math.min(1, c.t / APPEAR);
        const pop = k < 1 ? Math.sin(k * Math.PI * 0.5) * (1 + 0.35 * Math.sin(k * Math.PI)) : 1;
        m.scale.setScalar(T.scale * Math.max(0.01, pop));
        this.linePos(m.position);
        m.position.y += 0.15 + Math.sin(c.t * 2) * 0.15;
        m.rotation.set(0, c.t * 1.1, 0);
        c.mat.emissiveIntensity = 0.55 + 0.25 * Math.sin(c.t * 4);
        c.sparkT -= dt;
        if (c.sparkT <= 0 && g.fx) { c.sparkT = 0.35; g.fx.sparks(m.position.x, m.position.y + 1.6 * T.scale, m.position.z, 2); }
      } else if (c.state === 'flying') {
        // salto corto hasta encima de la rueda delantera
        const v = c.holder;
        const u = Math.min(1, c.t / FLY), e = u * u * (3 - 2 * u);
        this.wheelPos(v, c.side, c.to);
        m.position.lerpVectors(c.from, c.to, e);
        m.position.y += Math.sin(Math.PI * u) * 2;
        m.scale.setScalar(T.scale + (T.held - T.scale) * e);
        m.rotation.set(0, Math.PI / 2 - v.th + (1 - e) * 4, 0);
        if (u >= 1) { c.state = 'held'; c.t = 0; c.lifted = -1; }
      } else {
        // en la rueda: caballitos cortos (sube UP_T s, baja DOWN_T s) y uno que se mantiene arriba
        const v = c.holder;
        const n = Math.floor(c.t / CYCLE), u = c.t - n * CYCLE;
        let w;
        if (n < T.lifts) w = u < UP_T ? Math.sin((u / UP_T) * Math.PI / 2) : 1 - (u - UP_T) / DOWN_T;
        else w = Math.min(1, Math.sin(Math.min(1, u / UP_T) * Math.PI / 2) + (n > T.lifts ? 1 : 0));
        v.wheelie = Math.max(0, w);
        if (c.lifted < n && u > UP_T * 0.6) {
          // arriba del todo: confeti (y la fanfarria en el primero)
          c.lifted = n;
          if (n <= T.lifts) {
            const p = this.wheelPos(v, c.side, c.to);
            g.fx?.confetti(p.x, p.y + 2, p.z, n < T.lifts ? T.confetti : Math.round(T.confetti * 0.6));
          }
          if (n === 0) {
            const view = g.viewOf?.(v);
            if (view) g.sound.play(T.sound, 0.7); else if (g.sound3d) g.sound3d(T.sound, v.x, v.z, 0.6);
          }
        }
        // derecha (apenas inclinada hacia atrás con el caballito), sin girar con la rueda
        this.wheelPos(v, c.side, m.position);
        m.scale.setScalar(T.held);
        m.rotation.set(0, Math.PI / 2 - v.th, 0);
        m.rotateX(-0.15 * v.wheelieK);
        m.visible = v.mesh.visible;
      }
      // mensaje para el jugador que se la lleva, si no pisa a otro que ya haya en pantalla
      if (c.msgPending && c.state !== 'waiting') {
        const view = g.viewOf?.(c.holder);
        if (!view || c.t > 4) c.msgPending = false;
        // (después del «¡GANASTE!»: no salen los dos a la vez)
        else if (!(view.hud.msgT > 0.15) && !(view.hud.bigT > 0)) { view.hud.message(T.msg, 2.4, 'gold'); c.msgPending = false; }
      }
    }
  }
}

// Rayos de luz que salen del centro (para el halo que gira detrás de la copa)
function raysTexture() {
  const N = 128, cv = document.createElement('canvas');
  cv.width = cv.height = N;
  const x = cv.getContext('2d');
  const grd = x.createRadialGradient(N / 2, N / 2, 0, N / 2, N / 2, N / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,255,255,0.55)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = grd;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    x.beginPath(); x.moveTo(N / 2, N / 2);
    x.arc(N / 2, N / 2, N / 2, a - 0.11, a + 0.11);
    x.closePath(); x.fill();
  }
  x.beginPath(); x.arc(N / 2, N / 2, N * 0.16, 0, Math.PI * 2); x.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
