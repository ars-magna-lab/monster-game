// Objetos que se lanzan: neumático loco, barril explosivo y cohete buscador.
// Se mueven en coordenadas de pista (s a lo largo, d de lado), así siguen las curvas.
import * as THREE from 'three';

const TIRE_SPEED = 26;     // m/s más que quien lo lanza
const ROCKET_SPEED = 72;
const HIT_R = 2.6;

let assets = null;
function getAssets() {
  if (assets) return assets;
  const tireGeo = new THREE.TorusGeometry(0.9, 0.42, 8, 14);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x1b1b1b, roughness: 0.9 });
  const rimGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 10).rotateX(Math.PI / 2);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.3, roughness: 0.4 });
  const barrelGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.8, 12);
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0xd42a1a, roughness: 0.5 });
  const bandGeo = new THREE.CylinderGeometry(0.93, 0.93, 0.18, 12);
  const bandMat = new THREE.MeshStandardMaterial({ color: 0xffd400, emissive: 0x553300 });
  const bodyGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.4, 10).rotateZ(Math.PI / 2);
  const noseGeo = new THREE.ConeGeometry(0.35, 0.8, 10).rotateZ(-Math.PI / 2).translate(1.6, 0, 0);
  const finGeo = new THREE.BoxGeometry(0.6, 1.1, 0.08).translate(-1.0, 0, 0);
  const rocketMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.4 });
  const noseMat = new THREE.MeshStandardMaterial({ color: 0xff3030, emissive: 0x661010 });
  assets = { tireGeo, tireMat, rimGeo, rimMat, barrelGeo, barrelMat, bandGeo, bandMat, bodyGeo, noseGeo, finGeo, rocketMat, noseMat };
  return assets;
}

function buildMesh(kind) {
  const A = getAssets();
  const g = new THREE.Group();
  if (kind === 'tire') {
    const t = new THREE.Mesh(A.tireGeo, A.tireMat);
    const r = new THREE.Mesh(A.rimGeo, A.rimMat);
    const spin = new THREE.Group();
    spin.add(t, r);
    g.add(spin);
    g.userData.spin = spin;
  } else if (kind === 'barrel') {
    const b = new THREE.Mesh(A.barrelGeo, A.barrelMat);
    b.position.y = 0.9;
    g.add(b);
    for (const y of [0.45, 1.35]) {
      const band = new THREE.Mesh(A.bandGeo, A.bandMat);
      band.position.y = y;
      g.add(band);
    }
  } else {
    const body = new THREE.Mesh(A.bodyGeo, A.rocketMat);
    const nose = new THREE.Mesh(A.noseGeo, A.noseMat);
    g.add(body, nose);
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(A.finGeo, A.noseMat);
      f.rotation.x = (i * Math.PI) / 2;
      g.add(f);
    }
    g.children.forEach((c) => c.scale.setScalar(1.6));
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export class Projectiles {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.list = [];
    this.pool = { tire: [], barrel: [], rocket: [] };
  }

  clear() {
    for (const p of this.list) this.release(p);
    this.list.length = 0;
  }

  mesh(kind) {
    const m = this.pool[kind].pop() || buildMesh(kind);
    m.visible = true;
    if (!m.parent) this.scene.add(m);
    return m;
  }

  release(p) {
    p.mesh.visible = false;
    this.pool[p.kind].push(p.mesh);
  }

  // Lanza el objeto que lleva el camión v
  launch(kind, v) {
    const tr = this.game.track;
    const vF = Math.max(0, v.vx * Math.cos(v.th) + v.vz * Math.sin(v.th));
    const p = { kind, owner: v, s: v.s, d: v.d, y: v.y + 1, t: 0, vy: 0, mesh: this.mesh(kind), dead: false };
    if (kind === 'tire') {
      p.s = tr.wrap(v.s + 4 * v.size);
      p.speed = vF + TIRE_SPEED;
      p.vy = 6;
      p.life = 7;
    } else if (kind === 'barrel') {
      p.s = tr.wrap(v.s - 4.5 * v.size);
      p.speed = 0;
      p.y = v.y + 1.5;
      p.life = 40;
    } else {
      p.s = tr.wrap(v.s + 3 * v.size);
      p.y = v.y + 3;
      p.speed = Math.max(vF + 20, ROCKET_SPEED);
      p.target = this.pickTarget(v);
      p.life = 9;
      // avisa a la víctima: con el supersalto a tiempo puede esquivarlo
      if (p.target) p.target.events.push({ type: 'rocketWarn' });
    }
    this.list.push(p);
    this.place(p, 0);
  }

  // El cohete va a por el que va justo delante en la clasificación
  pickTarget(v) {
    const ahead = this.game.vehicles.filter((o) => o !== v && !o.finished && o.state !== 'fallen' && o.place < v.place);
    ahead.sort((a, b) => b.place - a.place);
    return ahead[0] || null;
  }

  ground(p) {
    return this.game.track.surfaceAt(p.s, p.d);
  }

  place(p, dt) {
    const P = this.game.track.pointAt(p.s, p.d);
    p.x = P.x; p.z = P.z;
    const m = p.mesh;
    m.position.set(P.x, p.y, P.z);
    m.rotation.y = Math.PI / 2 - P.th;
    if (p.kind === 'tire') {
      m.rotation.y = -P.th;
      m.userData.spin.rotation.z -= (p.speed * dt) / 1.3;
    } else if (p.kind === 'rocket') {
      m.rotation.set(0, -P.th, 0);
    }
  }

  explode(p, victim) {
    const fx = this.game.fx;
    fx.explosion(p.x, p.y, p.z);
    this.game.boom(p.x, p.y, p.z);
    for (const v of this.game.vehicles) {
      // el cohete nunca daña a quien lo lanza (el barril propio sí, una vez armado)
      if (v.state !== 'ok' || (p.kind === 'rocket' && v === p.owner)) continue;
      const dx = v.x - p.x, dz = v.z - p.z;
      const d = Math.hypot(dx, dz);
      if (v !== victim && d > 7) continue;
      v.hit({ dirX: dx / (d || 1), dirZ: dz / (d || 1), push: 6, up: 9, speedMul: 0.35, stun: 1.3, kind: p.kind === 'rocket' ? 'rocketed' : 'barreled' });
    }
    p.dead = true;
  }

  update(dt) {
    const tr = this.game.track;
    const vs = this.game.vehicles;
    for (const p of this.list) {
      p.t += dt;
      if (p.t > p.life) { p.dead = true; continue; }
      p.s = tr.wrap(p.s + p.speed * dt);
      const surf = this.ground(p);
      if (p.kind === 'tire') {
        // bota por la pista; si pasa por un foso, se cae
        p.vy -= 30 * dt;
        p.y += p.vy * dt;
        const floor = surf.h + 0.95;
        if (p.y < floor && !surf.pit) { p.y = floor; p.vy = Math.abs(p.vy) > 3 ? Math.abs(p.vy) * 0.55 : 4.5; }
        if (surf.pit && p.y < surf.h - 3) { p.dead = true; continue; }
        // las barreras la devuelven hacia el centro
        p.d *= 1 - dt * 0.4;
      } else if (p.kind === 'barrel') {
        p.vy -= 30 * dt;
        p.y = Math.max(surf.h, p.y + p.vy * dt);
        if (p.y === surf.h) p.vy = 0;
        if (surf.pit && p.y <= surf.h + 0.01) { p.dead = true; continue; }
      } else {
        // cohete: va hacia el carril del objetivo y baja sobre él al alcanzarlo
        const T = p.target;
        let gap = Infinity;
        if (T && T.state !== 'fallen' && !T.finished) {
          gap = tr.ahead(p.s, T.s);
          if (gap > tr.length / 2) gap = Infinity; // ya lo ha adelantado
          const k = Math.min(1, dt * (gap < 30 ? 6 : 2));
          p.d += (T.d - p.d) * k;
          const want = gap < 12 ? T.y + 1.2 : Math.max(surf.h + 3, T.y + 3);
          p.y += (want - p.y) * Math.min(1, dt * 5);
          p.speed = Math.max(p.speed, (T.vF || 0) + 25);
        } else {
          p.y += (surf.h + 3 - p.y) * Math.min(1, dt * 3);
        }
        this.game.fx.boostFlame(p.x, p.y, p.z, 0, 0);
      }
      this.place(p, dt);

      // choques con camiones
      for (const v of vs) {
        if (v.state !== 'ok' || (v === p.owner && (p.kind === 'rocket' || p.t < (p.kind === 'barrel' ? 1.2 : 0.6)))) continue;
        const dx = v.x - p.x, dz = v.z - p.z;
        const R = HIT_R * v.size;
        if (dx * dx + dz * dz > R * R || Math.abs(v.y + 1.5 - p.y) > 3.5 * v.size) continue;
        if (p.kind === 'tire') {
          const d = Math.hypot(dx, dz) || 1;
          if (v.hit({ dirX: dx / d, dirZ: dz / d, push: 5, up: 4, speedMul: 0.45, stun: 1.2, kind: 'tired' })) {
            this.game.fx.dust(p.x, p.y, p.z, 0, 0, undefined, 12, 2);
            p.dead = true;
          }
        } else {
          this.explode(p, v);
        }
        break;
      }
    }
    for (const p of this.list) if (p.dead) this.release(p);
    this.list = this.list.filter((p) => !p.dead);
  }

  // Para la IA: ¿hay un barril o neumático justo delante en ese carril?
  dangerAhead(s, d, dist) {
    const tr = this.game.track;
    return this.list.some((p) => p.kind !== 'rocket' && Math.abs(p.d - d) < 4 && tr.ahead(s, p.s) < dist);
  }
}
