// Las copas de la meta: cuando el primero lleva media última vuelta aparece una copa dorada
// flotando sobre la línea de meta; el primero que cruza se la lleva (vuela hasta su techo y la
// levanta). Después espera la de plata para el segundo y la de bronce para el tercero.
// Una instancia por circuito cargado: sus mallas viven en la escena y las libera disposeScene.
import * as THREE from 'three';
import { buildCupGeometry } from './copa.js';

// Por puesto: color, tamaño esperando en la meta, tamaño sobre el camión, veces que la levanta,
// altura de cada levantamiento (m), confeti por levantamiento y sonido
const TIERS = [
  { name: 'oro', color: 0xffc81e, emissive: 0x8a5a00, scale: 1.7, held: 1.0, lifts: 4, lift: 2.6, confetti: 90, sound: 'trophy', msg: '¡LA COPA ES TUYA!' },
  { name: 'plata', color: 0xdfe6ef, emissive: 0x4a5866, scale: 1.45, held: 0.85, lifts: 2, lift: 2.0, confetti: 45, sound: 'trophySmall', msg: '¡COPA DE PLATA!' },
  { name: 'bronce', color: 0xd0813c, emissive: 0x5a2c08, scale: 1.3, held: 0.75, lifts: 2, lift: 1.6, confetti: 30, sound: 'trophySmall', msg: '¡COPA DE BRONCE!' },
];
// Dónde espera la copa: sobre la línea de meta, encima del travesaño del pórtico (acaba a 12,3 m),
// para que se vea desde el principio de la recta por encima del propio camión; la dorada mide
// 5 m. Un haz de luz vertical y unos rayos que giran detrás la hacen visible de lejos.
export const CUP_S = 0;
export const CUP_Y = 13.4;
const FLY = 0.7;       // segundos del vuelo hasta el camión
const LIFT_T = 0.75;   // segundos de cada levantamiento
const APPEAR = 0.45;   // segundos del destello al aparecer

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

  // Altura del techo del camión (la copa se apoya encima)
  roofY(v) { return v.y + 3.0 * v.size + 0.8; }

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

  // ¿Está v en plena ceremonia (la copa vuela hacia él o la está levantando)? La cámara la sigue
  // de cerca entonces, en vez de quedarse atrás
  ceremony(v) {
    return this.cups.some((c) => c.holder === v && (c.state === 'flying' || (c.state === 'held' && c.t < c.T.lifts * LIFT_T + 1.2)));
  }

  // Un camión ha cruzado la meta en la última vuelta: si queda copa, para él
  award(v) {
    if (this.next >= this.cups.length) return;
    const c = this.cups[this.next++];
    if (c.state === 'none') this.show(c); // (por si nadie había llegado a media vuelta)
    c.state = 'flying'; c.t = 0; c.holder = v;
    c.from = c.mesh.position.clone();
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
      this.glow.position.y += 1.5 * w.T.scale;
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
        m.position.y += Math.sin(c.t * 2) * 0.25;
        m.rotation.set(0, c.t * 1.1, 0);
        c.mat.emissiveIntensity = 0.55 + 0.25 * Math.sin(c.t * 4);
        c.sparkT -= dt;
        if (c.sparkT <= 0 && g.fx) { c.sparkT = 0.35; g.fx.sparks(m.position.x, m.position.y + 1.6 * T.scale, m.position.z, 2); }
      } else if (c.state === 'flying') {
        // vuela en arco hasta el techo del camión, encogiendo
        const v = c.holder;
        const u = Math.min(1, c.t / FLY), e = u * u * (3 - 2 * u);
        m.position.set(
          c.from.x + (v.x - c.from.x) * e,
          c.from.y + (this.roofY(v) - c.from.y) * e + Math.sin(Math.PI * u) * 5,
          c.from.z + (v.z - c.from.z) * e,
        );
        m.scale.setScalar(T.scale + (T.held - T.scale) * e);
        m.rotation.set(0, c.t * 9, 0);
        if (u >= 1) { c.state = 'held'; c.t = 0; c.lifted = 0; c.confettiN = -1; }
      } else {
        // sobre el techo: la levanta T.lifts veces (el camión da un saltito) y se queda encima
        const v = c.holder;
        const n = Math.floor(c.t / LIFT_T), u = (c.t % LIFT_T) / LIFT_T;
        let up = 0, tilt = 0;
        if (n < T.lifts) {
          if (c.lifted <= n) {
            c.lifted = n + 1;
            if (v.state === 'ok' && v.onGround) { v.vy = Math.max(v.vy, 4.5); v.onGround = false; }
            if (n === 0) {
              const view = g.viewOf?.(v);
              if (view) g.sound.play(T.sound, 0.7); else if (g.sound3d) g.sound3d(T.sound, v.x, v.z, 0.6);
            }
          }
          up = Math.sin(Math.PI * u) * T.lift;
          tilt = Math.sin(Math.PI * 2 * u) * 0.25;
          if (u > 0.45 && c.confettiN !== n) { c.confettiN = n; g.fx?.confetti(v.x, this.roofY(v) + up + 1.5, v.z, T.confetti); }
        }
        m.position.set(v.x, this.roofY(v) + up, v.z);
        m.scale.setScalar(T.held);
        m.rotation.set(0, c.t * 0.8, tilt);
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
