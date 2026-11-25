// Sistema de partículas con un único THREE.Points (barato aunque haya muchas).
import * as THREE from 'three';
import { softDotTex } from './textures.js';

const VERT = `
attribute float psize;
attribute float palpha;
attribute vec3 pcolor;
uniform float scale;
varying float vA;
varying vec3 vC;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = psize * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
  vA = palpha;
  vC = pcolor;
}`;

const FRAG = `
uniform sampler2D map;
varying float vA;
varying vec3 vC;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  float a = t.a * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vC, a);
}`;

export class Particles {
  constructor(scene, max = 1600, additive = false) {
    this.max = max;
    this.next = 0;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.alpha0 = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('psize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('palpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: softDotTex() }, scale: { value: 500 } },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 11 : 10;
    scene.add(this.points);
    this.geo = g;
    this.alive = 0;
  }

  setScale(viewH, fovDeg) {
    this.mat.uniforms.scale.value = viewH / (2 * Math.tan((fovDeg * Math.PI) / 360));
  }

  emit(o) {
    const i = this.next;
    this.next = (this.next + 1) % this.max;
    if (this.life[i] <= 0) this.alive++;
    const i3 = i * 3;
    this.pos[i3] = o.x; this.pos[i3 + 1] = o.y; this.pos[i3 + 2] = o.z;
    this.vel[i3] = o.vx || 0; this.vel[i3 + 1] = o.vy || 0; this.vel[i3 + 2] = o.vz || 0;
    const c = o.color || [1, 1, 1];
    this.col[i3] = c[0]; this.col[i3 + 1] = c[1]; this.col[i3 + 2] = c[2];
    this.life[i] = this.maxLife[i] = o.life || 1;
    this.size0[i] = o.size || 1;
    this.grow[i] = o.grow || 0;
    this.alpha0[i] = o.alpha ?? 1;
    this.grav[i] = o.gravity || 0;
    this.drag[i] = o.drag ?? 1;
    this.size[i] = this.size0[i];
    this.alpha[i] = this.alpha0[i];
  }

  update(dt) {
    // sin partículas vivas no hay nada que mover ni que volver a subir a la GPU
    // (la última subida ya las dejó todas transparentes)
    if (this.alive === 0) { this.points.visible = false; return; }
    this.points.visible = true;
    const { pos, vel, life, maxLife, size, size0, grow, alpha, alpha0, grav, drag } = this;
    let alive = 0;
    for (let i = 0; i < this.max; i++) {
      if (life[i] <= 0) { if (alpha[i] !== 0) { alpha[i] = 0; size[i] = 0; } continue; }
      life[i] -= dt;
      if (life[i] > 0) alive++;
      const i3 = i * 3;
      const k = Math.exp(-drag[i] * dt);
      vel[i3] *= k; vel[i3 + 2] *= k;
      vel[i3 + 1] = vel[i3 + 1] * k - grav[i] * dt;
      pos[i3] += vel[i3] * dt; pos[i3 + 1] += vel[i3 + 1] * dt; pos[i3 + 2] += vel[i3 + 2] * dt;
      const t = Math.max(0, life[i] / maxLife[i]);
      size[i] = size0[i] + grow[i] * (1 - t);
      alpha[i] = alpha0[i] * Math.min(1, t * 2.5);
      // bajo el suelo no se ven (el suelo ya no escribe profundidad y no las tapa)
      if (pos[i3 + 1] < -0.1) alpha[i] = 0;
    }
    this.alive = alive;
    for (const n of ['position', 'pcolor', 'psize', 'palpha']) this.geo.attributes[n].needsUpdate = true;
  }
}

// Efectos combinados de alto nivel
export class FX {
  constructor(scene) {
    this.soft = new Particles(scene, 2200, false);
    this.glow = new Particles(scene, 1200, true);
  }

  setScale(h, fov) { this.soft.setScale(h, fov); this.glow.setScale(h, fov); }

  update(dt) { this.soft.update(dt); this.glow.update(dt); }

  dust(x, y, z, vx, vz, color = this.dustColor || [0.62, 0.48, 0.34], n = 1, size = 2.2) {
    for (let i = 0; i < n; i++) {
      this.soft.emit({
        x: x + (Math.random() - 0.5) * 1.2, y: y + 0.3, z: z + (Math.random() - 0.5) * 1.2,
        vx: vx * 0.15 + (Math.random() - 0.5) * 3, vy: 1 + Math.random() * 2.5, vz: vz * 0.15 + (Math.random() - 0.5) * 3,
        life: 0.9 + Math.random() * 0.6, size, grow: 3.5, color, alpha: 0.55, gravity: -0.4, drag: 1.5,
      });
    }
  }

  mud(x, y, z, vx, vz, n = 3) {
    for (let i = 0; i < n; i++) {
      this.soft.emit({
        x, y: y + 0.5, z,
        vx: -vx * 0.1 + (Math.random() - 0.5) * 6, vy: 4 + Math.random() * 6, vz: -vz * 0.1 + (Math.random() - 0.5) * 6,
        life: 0.8 + Math.random() * 0.4, size: 0.7 + Math.random() * 0.6, grow: 0.2,
        color: [0.3 + Math.random() * 0.08, 0.2, 0.1], alpha: 1, gravity: 22, drag: 0.5,
      });
    }
  }

  sparks(x, y, z, n = 10) {
    for (let i = 0; i < n; i++) {
      this.glow.emit({
        x, y, z,
        vx: (Math.random() - 0.5) * 14, vy: Math.random() * 8 + 2, vz: (Math.random() - 0.5) * 14,
        life: 0.3 + Math.random() * 0.4, size: 0.35, grow: -0.2, color: [1, 0.75, 0.3], alpha: 1, gravity: 20, drag: 1,
      });
    }
  }

  splash(x, y, z, n = 50) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 7;
      this.soft.emit({
        x, y, z,
        vx: Math.cos(a) * sp, vy: 6 + Math.random() * 10, vz: Math.sin(a) * sp,
        life: 1 + Math.random() * 0.6, size: 0.8 + Math.random() * 1.2, grow: 1,
        color: [0.75, 0.9, 0.95], alpha: 0.9, gravity: 18, drag: 0.6,
      });
    }
  }

  explosion(x, y, z) {
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI / 2, sp = 6 + Math.random() * 14;
      this.glow.emit({
        x, y: y + 1, z,
        vx: Math.cos(a) * Math.cos(e) * sp, vy: Math.sin(e) * sp + 3, vz: Math.sin(a) * Math.cos(e) * sp,
        life: 0.4 + Math.random() * 0.5, size: 2 + Math.random() * 2, grow: 3,
        color: [1, 0.45 + Math.random() * 0.35, 0.1], alpha: 1, gravity: -2, drag: 3,
      });
    }
    for (let i = 0; i < 40; i++) {
      this.soft.emit({
        x: x + (Math.random() - 0.5) * 3, y: y + 1 + Math.random() * 2, z: z + (Math.random() - 0.5) * 3,
        vx: (Math.random() - 0.5) * 6, vy: 3 + Math.random() * 5, vz: (Math.random() - 0.5) * 6,
        life: 1.6 + Math.random(), size: 3, grow: 7, color: [0.2, 0.2, 0.2], alpha: 0.7, gravity: -1.5, drag: 1.2,
      });
    }
    this.sparks(x, y + 1, z, 30);
  }

  // humo de ruedas o de motor; dark de 0 (gris claro) a 1 (negro)
  smoke(x, y, z, vx, vz, dark = 0, size = 1.2) {
    const c = 0.8 - 0.6 * dark;
    this.soft.emit({
      x: x + (Math.random() - 0.5) * 0.8, y: y + 0.3, z: z + (Math.random() - 0.5) * 0.8,
      vx: vx + (Math.random() - 0.5) * 2.5, vy: 1.5 + Math.random() * 2 + dark * 1.5, vz: vz + (Math.random() - 0.5) * 2.5,
      life: 0.7 + Math.random() * 0.4 + dark * 0.3, size, grow: 2.2 + dark * 1.3, color: [c, c * 0.97, c * 0.95],
      alpha: 0.4 + 0.2 * dark, gravity: -0.8, drag: 1.6,
    });
  }

  boostFlame(x, y, z, vx, vz) {
    this.glow.emit({
      x, y, z, vx: vx * 0.6 + (Math.random() - 0.5) * 2, vy: 1.5 + Math.random(), vz: vz * 0.6 + (Math.random() - 0.5) * 2,
      life: 0.25, size: 1.1, grow: -0.6, color: [0.4, 0.7, 1], alpha: 1, gravity: 0, drag: 2,
    });
  }

  confetti(x, y, z, n = 80) {
    const cols = [[1, 0.2, 0.3], [1, 0.85, 0.1], [0.2, 0.8, 1], [0.4, 1, 0.4], [1, 0.5, 1]];
    for (let i = 0; i < n; i++) {
      this.soft.emit({
        x: x + (Math.random() - 0.5) * 20, y: y + 10 + Math.random() * 6, z: z + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4, vy: Math.random() * 3, vz: (Math.random() - 0.5) * 4,
        life: 3 + Math.random() * 2, size: 0.5, grow: 0, color: cols[i % cols.length], alpha: 1, gravity: 3, drag: 1.5,
      });
    }
  }
}
