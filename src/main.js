// Mega Monstruos: carreras de monster trucks en 3D.
import * as THREE from 'three';
import { Track, LIMIT } from './track.js';
import { buildTrackMeshes } from './trackMesh.js';
import { buildWorld } from './world.js';
import { TRUCKS, buildTruck, animateTruck } from './trucks.js';
import { Vehicle, RADIUS } from './vehicle.js';
import { AIDriver } from './ai.js';
import { Obstacles } from './obstacles.js';
import { FX } from './particles.js';
import { Sound } from './audio.js';
import { Input } from './input.js';
import { HUD, fmtTime, ITEM_SVG, ITEM_NAME } from './hud.js';
import { setAnisotropy, checkerTex } from './textures.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const STEP = 1 / 120;
const DIFF = {
  facil: { mul: 0.86, skill: 0.7, label: 'Fácil' },
  normal: { mul: 0.95, skill: 1, label: 'Normal' },
  dificil: { mul: 1.03, skill: 1.5, label: 'Difícil' },
};
const PLAYER_MSG = {
  log: '¡TRONCO!', ball: '¡BOLAZO!', boom: '¡BOOM!', net: '¡ATRAPADO EN LA RED!', crush: '¡CRUNCH!',
  fallPit: '¡AL FOSO!', fallWater: '¡COCODRILOS!', waved: '¡ONDA EXPANSIVA!', nitro: '¡NITRO!', jump: '¡SUPERSALTO!',
};
const ORDINAL = ['PRIMERO', 'SEGUNDO', 'TERCERO', 'CUARTO', 'QUINTO', 'SEXTO'];
const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerpAng = (a, b, t) => {
  let d = b - a;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return a + d * t;
};

function loadJSON(key, def) {
  try { return { ...def, ...JSON.parse(localStorage.getItem(key) || '{}') }; } catch { return { ...def }; }
}
function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* sin almacenamiento */ }
}

class Game {
  constructor() {
    const params = new URLSearchParams(location.search);
    this.autopilot = params.has('auto');
    this.canvas = $('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    setAnisotropy(Math.min(8, this.renderer.capabilities.getMaxAnisotropy()));

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.45;
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.5, 4000);
    this.track = new Track();
    this.trackMeshes = buildTrackMeshes(this.track, this.scene);
    this.world = buildWorld(this.scene, this.track);
    this.fx = new FX(this.scene);
    this.sound = new Sound();
    this.input = new Input();
    this.obstacles = new Obstacles(this.track, this.scene, this);
    this.vehicles = TRUCKS.map((def) => new Vehicle(def, this.track));
    for (const v of this.vehicles) this.scene.add(v.mesh);

    // luces del túnel: faros del jugador y luz que "pasa" bajo las lámparas
    this.headlight = new THREE.SpotLight(0xfff4d0, 0, 90, 0.55, 0.5, 1.2);
    this.scene.add(this.headlight, this.headlight.target);
    this.tunnelLight = new THREE.PointLight(0xffe2a0, 0, 45, 1.4);
    this.scene.add(this.tunnelLight);
    this.flash = new THREE.PointLight(0xffa040, 0, 60, 1.5);
    this.scene.add(this.flash);

    // anillos de onda expansiva
    this.rings = [];
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 8, 40), new THREE.MeshBasicMaterial({ color: 0xff4fd8, transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = Math.PI / 2;
      m.visible = false;
      this.scene.add(m);
      this.rings.push({ mesh: m, t: 1 });
    }

    this.settings = loadJSON('megamonstruos.ajustes', { truck: 0, laps: 3, diff: 'normal', music: true });
    this.records = loadJSON('megamonstruos.records', {});
    this.sound.musicOn = this.settings.music;
    this.laps = this.settings.laps;
    this.hud = new HUD(this);
    this.buildShowroom();
    this.bindUI();

    this.state = 'title';
    this.time = 0;
    this.raceTime = 0;
    this.acc = 0;
    this.camYaw = 0;
    this.camPos = new THREE.Vector3(0, 30, -60);
    this.camLook = new THREE.Vector3();
    this.shake = 0;
    this.fov = 68;
    this.tunnelF = 0;
    this.setupRace();
    this.state = 'title';

    window.addEventListener('resize', () => this.resize());
    this.resize();
    document.addEventListener('visibilitychange', () => { if (document.hidden && (this.state === 'race' || this.state === 'countdown')) this.pause(); });
    this.last = performance.now();
    $('loading').classList.add('hidden');
    this.showScreen('title');
    requestAnimationFrame((t) => this.loop(t));
  }

  // ------------------------------------------------------------ UI
  bindUI() {
    const on = (id, f) => $(id).addEventListener('click', () => { this.sound.init(); this.sound.play('click'); f(); });
    on('btn-play', () => this.goSelect());
    on('btn-prev', () => this.changeTruck(-1));
    on('btn-next', () => this.changeTruck(1));
    on('btn-start', () => this.startRace());
    on('btn-back', () => this.goTitle());
    on('btn-resume', () => this.resume());
    on('btn-restart', () => this.startRace());
    on('btn-quit', () => this.goTitle());
    on('btn-again', () => this.startRace());
    on('btn-change', () => this.goSelect());
    on('btn-menu', () => this.goTitle());
    on('btn-sound', () => this.toggleMute());
    on('btn-music', () => this.toggleMusic());
    on('btn-pause', () => this.pause());
    document.querySelectorAll('[data-laps]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.laps = +b.dataset.laps; this.refreshOptions();
    }));
    document.querySelectorAll('[data-diff]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.diff = b.dataset.diff; this.refreshOptions();
    }));
    this.input.bindTouch($('touch'));
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;
    window.addEventListener('pointerdown', () => this.sound.init(), { once: true });
    window.addEventListener('keydown', () => this.sound.init(), { once: true });
    this.refreshOptions();
  }

  refreshOptions() {
    document.querySelectorAll('[data-laps]').forEach((b) => b.classList.toggle('sel', +b.dataset.laps === this.settings.laps));
    document.querySelectorAll('[data-diff]').forEach((b) => b.classList.toggle('sel', b.dataset.diff === this.settings.diff));
    $('btn-sound').classList.toggle('off', this.sound.muted);
    $('btn-music').classList.toggle('off', !this.sound.musicOn);
    saveJSON('megamonstruos.ajustes', this.settings);
  }

  toggleMute() { this.sound.toggleMute(); this.refreshOptions(); }

  toggleMusic() {
    this.sound.musicOn = !this.sound.musicOn;
    this.settings.music = this.sound.musicOn;
    this.refreshOptions();
  }

  showScreen(name) {
    for (const id of ['title', 'select', 'pause', 'results']) $('screen-' + id).classList.toggle('hidden', id !== name);
    const racing = name === null;
    this.hud.show(racing || name === 'pause');
    $('touch').classList.toggle('hidden', !(racing && this.isTouch));
    $('btn-pause').classList.toggle('hidden', !racing);
  }

  goTitle() {
    this.sound.engineStop();
    this.state = 'title';
    this.setupRace();
    this.state = 'title';
    this.showScreen('title');
  }

  goSelect() {
    this.sound.engineStop();
    this.sound.init();
    this.sound.musicStart(false);
    this.state = 'select';
    this.showScreen('select');
    this.updateSelect();
  }

  changeTruck(dir) {
    this.settings.truck = (this.settings.truck + dir + TRUCKS.length) % TRUCKS.length;
    this.showSpin = 0;
    this.updateSelect();
    this.refreshOptions();
  }

  updateSelect() {
    const def = TRUCKS[this.settings.truck];
    this.show.trucks.forEach((t, i) => { t.root.visible = i === this.settings.truck; });
    $('truck-name').textContent = def.name;
    $('truck-name').style.color = '#' + new THREE.Color(def.color).getHexString();
    $('truck-desc').textContent = def.desc;
    const labels = { speed: 'Velocidad', accel: 'Aceleración', handling: 'Manejo', weight: 'Peso' };
    $('truck-stats').innerHTML = Object.entries(labels).map(([k, l]) =>
      `<div class="stat"><span>${l}</span><div class="bar">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= def.stats[k] ? 'on' : ''}"></i>`).join('')}</div></div>`).join('');
    const rec = this.records[def.id + '_' + this.settings.laps];
    $('truck-record').textContent = rec ? `Récord con ${this.settings.laps} ${this.settings.laps === 1 ? 'vuelta' : 'vueltas'}: ${fmtTime(rec)}` : '';
    $('truck-dots').innerHTML = TRUCKS.map((t, i) => `<i class="${i === this.settings.truck ? 'on' : ''}" style="background:#${new THREE.Color(t.color).getHexString()}"></i>`).join('');
  }

  // ------------------------------------------------------------ sala de exposición
  buildShowroom() {
    const scene = new THREE.Scene();
    scene.environment = this.envMap;
    scene.environmentIntensity = 0.35;
    const cam = new THREE.PerspectiveCamera(38, 1, 0.5, 500);
    const bg = new THREE.Mesh(new THREE.SphereGeometry(200, 32, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying vec3 vP; void main(){ float h = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.95,0.45,0.12), vec3(0.12,0.08,0.28), smoothstep(0.35, 0.75, h)); gl_FragColor = vec4(c, 1.0); }',
    }));
    scene.add(bg);
    scene.fog = new THREE.Fog(new THREE.Color().setRGB(0.69, 0.33, 0.17, THREE.SRGBColorSpace), 40, 150);
    scene.add(new THREE.HemisphereLight(0xfff0e0, 0x302040, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.6);
    key.position.set(8, 14, 10);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 50 });
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x88aaff, 1.6);
    rim.position.set(-10, 6, -8);
    scene.add(rim);
    const table = new THREE.Group();
    scene.add(table);
    const tex = checkerTex().clone();
    tex.needsUpdate = true;
    tex.repeat.set(6, 6);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(7.5, 7.8, 0.6, 48), [
      new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.4 }),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x222222 }),
    ]);
    disc.position.y = -0.3;
    disc.receiveShadow = true;
    table.add(disc);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(180, 48), new THREE.MeshStandardMaterial({ color: 0x241a33, roughness: 0.65, metalness: 0.1 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.6;
    floor.receiveShadow = true;
    scene.add(floor);
    const trucks = TRUCKS.map((def) => {
      const t = buildTruck(def);
      t.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      table.add(t.root);
      t.root.visible = false;
      return t;
    });
    cam.position.set(10.5, 5.2, 12.5);
    cam.lookAt(0, 2.0, 0);
    this.show = { scene, cam, table, trucks };
    this.showSpin = 0;
  }

  // ------------------------------------------------------------ carrera
  setupRace() {
    const def = TRUCKS[this.settings.truck];
    const diff = DIFF[this.settings.diff] || DIFF.normal;
    this.laps = this.settings.laps;
    const L = this.track.length;
    const player = this.vehicles.find((v) => v.def === def);
    const others = this.vehicles.filter((v) => v !== player).sort(() => Math.random() - 0.5);
    const grid = [...others.slice(0, 4), player, others[4]];
    this.drivers = new Map();
    grid.forEach((v, i) => {
      v.reset();
      v.isPlayer = v === player;
      v.speedMul = v.isPlayer ? 1 : diff.mul;
      v.placeAt(L - 10 - Math.floor(i / 2) * 10, i % 2 ? 5.5 : -5.5, 0);
      v.place = i + 1;
      this.drivers.set(v, new AIDriver(v, this.track, { skill: v.isPlayer ? 1.5 : diff.skill, preferBridge: Math.random() < 0.5 }));
    });
    this.player = player;
    this.raceTime = 0;
    this.countdown = 4.2;
    this.lastCount = 5;
    this.finishCount = 0;
    this.resultsT = 0;
    this.throttleHeldSince = null;
    this.camYaw = player.th;
    for (const l of this.trackMeshes.lights) l.material.color.setHex(0x331111);
  }

  startRace() {
    this.sound.init();
    this.setupRace();
    this.state = 'countdown';
    this.showScreen(null);
    this.hud.message('');
    this.sound.musicStop();
    this.sound.engineStart();
    const p = this.player;
    this.camPos.set(p.x + Math.cos(p.th) * 16, p.y + 4, p.z + Math.sin(p.th) * 16);
  }

  pause() {
    if (this.state !== 'race' && this.state !== 'countdown') return;
    this.prevState = this.state;
    this.state = 'paused';
    this.sound.engineStop();
    this.showScreen('pause');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.prevState;
    this.showScreen(null);
    this.sound.engineStart();
    this.last = performance.now();
  }

  rollItem(v) {
    const t = (v.place - 1) / Math.max(1, this.vehicles.length - 1);
    const w = { nitro: 0.42, jump: 0.36 - 0.14 * t, wave: 0.22 + 0.2 * t };
    let r = Math.random() * (w.nitro + w.jump + w.wave);
    for (const k of Object.keys(w)) { r -= w[k]; if (r <= 0) return k; }
    return 'nitro';
  }

  shockwave(src) {
    const ring = this.rings.find((r) => r.t >= 1) || this.rings[0];
    ring.t = 0;
    ring.mesh.position.set(src.x, src.y + 1.5, src.z);
    ring.mesh.visible = true;
    this.sound3d('wave', src.x, src.z, 1);
    for (const v of this.vehicles) {
      if (v === src || v.state !== 'ok') continue;
      const dx = v.x - src.x, dz = v.z - src.z;
      const d = Math.hypot(dx, dz);
      if (d < 22 && Math.abs(v.y - src.y) < 8) {
        v.hit({ dirX: dx / (d || 1), dirZ: dz / (d || 1), push: 9, up: 5, speedMul: 0.5, stun: 1.0, kind: 'waved' });
      }
    }
  }

  boom(x, y, z) {
    this.flash.position.set(x, y + 3, z);
    this.flash.intensity = 4000;
    this.sound3d('boom', x, z, 1);
  }

  sound3d(name, x, z, vol = 1) {
    const p = this.player;
    const d = p ? Math.hypot(p.x - x, p.z - z) : 0;
    this.sound.play(name, vol * clamp(1 - d / 90, 0, 1));
  }

  onLap(v) {
    if (v.lap === 1) { v.lapStart = this.raceTime; return; }
    v.lapTimes.push(this.raceTime - v.lapStart);
    v.lapStart = this.raceTime;
    if (v.lap > this.laps && !v.finished) {
      v.finished = true;
      v.finishTime = this.raceTime;
      v.finishPlace = ++this.finishCount;
      if (v.isPlayer) this.playerFinished();
      return;
    }
    if (v.isPlayer) {
      if (v.lap === this.laps) { this.hud.big('¡ÚLTIMA VUELTA!', 1.6, 'small'); this.sound.play('final'); }
      else { this.hud.big(`VUELTA ${v.lap}`, 1.2, 'small'); this.sound.play('lap'); }
    }
  }

  playerFinished() {
    const p = this.player;
    this.state = 'finished';
    this.resultsT = 3.2;
    this.hud.big(p.finishPlace === 1 ? '¡GANASTE!' : `¡${ORDINAL[p.finishPlace - 1]}!`, 3, 'small');
    this.sound.play('finish');
    this.fx.confetti(p.x, p.y, p.z, 160);
    // guarda récords
    const key = p.def.id + '_' + this.laps;
    this.newRecord = !this.records[key] || p.finishTime < this.records[key];
    if (this.newRecord) this.records[key] = p.finishTime;
    const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
    this.newLapRecord = isFinite(best) && (!this.records.vuelta || best < this.records.vuelta);
    if (this.newLapRecord) this.records.vuelta = best;
    saveJSON('megamonstruos.records', this.records);
  }

  showResults() {
    const p = this.player;
    const L = this.track.length;
    const avg = 33;
    const rows = [...this.vehicles].map((v) => {
      let t = v.finishTime;
      if (!v.finished) {
        const remaining = (this.laps + 1) * L - v.progress;
        t = this.raceTime + Math.max(0, remaining) / avg;
      }
      return { v, t, est: !v.finished };
    }).sort((a, b) => a.t - b.t);
    const place = rows.findIndex((r) => r.v === p) + 1;
    $('res-title').textContent = place === 1 ? '¡HAS GANADO!' : place <= 3 ? `¡PODIO! QUEDASTE ${ORDINAL[place - 1]}` : `HAS QUEDADO ${ORDINAL[place - 1]}`;
    $('res-table').innerHTML = rows.map((r, i) => `<tr class="${r.v === p ? 'me' : ''}"><td>${i + 1}</td><td><i style="background:#${new THREE.Color(r.v.def.color).getHexString()}"></i>${r.v.def.name}</td><td>${r.est ? '~' : ''}${fmtTime(r.t)}</td></tr>`).join('');
    const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
    let extra = `Mejor vuelta: ${fmtTime(best)}`;
    if (this.newRecord) extra += ' · ¡Nuevo récord de carrera!';
    else if (this.newLapRecord) extra += ' · ¡Récord de vuelta!';
    $('res-extra').textContent = extra;
    this.showScreen('results');
  }

  // ------------------------------------------------------------ simulación
  step(dt, playerCtrl) {
    const racing = this.state === 'race' || this.state === 'finished';
    if (!racing) return;
    this.raceTime += dt;
    for (const v of this.vehicles) {
      let ctrl;
      if (v.isPlayer && !v.finished && !this.autopilot) ctrl = playerCtrl;
      else ctrl = this.drivers.get(v).control(dt, this);
      if (ctrl.item) v.useItem(this);
      v.update(dt, ctrl, this);
    }
    playerCtrl.item = false;
    this.collide();
    this.obstacles.update(dt, this.vehicles);
    // atascados o del revés
    for (const v of this.vehicles) {
      if (v.state !== 'ok') continue;
      const limit = v.isPlayer && !this.autopilot ? 5 : 2.5;
      if (v.stuckT > limit || (!v.isPlayer && v.wrongT > 4)) { v.respawn(v.s, v.d * 0.5, 6); v.stuckT = 0; v.wrongT = 0; }
    }
    this.rank();
  }

  collide() {
    const vs = this.vehicles;
    for (let i = 0; i < vs.length; i++) {
      const a = vs[i];
      if (a.state === 'fallen') continue;
      for (let j = i + 1; j < vs.length; j++) {
        const b = vs[j];
        if (b.state === 'fallen') continue;
        const dx = b.x - a.x, dz = b.z - a.z;
        const d2 = dx * dx + dz * dz;
        const R2 = RADIUS * 2;
        if (d2 > R2 * R2 || Math.abs(a.y - b.y) > 2.8) continue;
        const d = Math.sqrt(d2) || 0.01;
        const nx = dx / d, nz = dz / d;
        const over = R2 - d;
        const ma = a.mass, mb = b.mass;
        a.x -= nx * over * (mb / (ma + mb)); a.z -= nz * over * (mb / (ma + mb));
        b.x += nx * over * (ma / (ma + mb)); b.z += nz * over * (ma / (ma + mb));
        const vn = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        if (vn < 0) {
          const jimp = (-(1.4) * vn) / (1 / ma + 1 / mb);
          a.vx -= (jimp * nx) / ma; a.vz -= (jimp * nz) / ma;
          b.vx += (jimp * nx) / mb; b.vz += (jimp * nz) / mb;
          if (-vn > 4) {
            const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
            this.sound3d('bump', mx, mz, clamp(-vn / 15, 0.2, 1));
            this.fx.sparks(mx, (a.y + b.y) / 2 + 1.8, mz, 6);
            if (a.isPlayer || b.isPlayer) this.shake = Math.max(this.shake, clamp(-vn / 20, 0.1, 0.5));
          }
        }
      }
    }
  }

  rank() {
    const sorted = [...this.vehicles].sort((a, b) => {
      if (a.finished && b.finished) return a.finishPlace - b.finishPlace;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.progress - a.progress;
    });
    sorted.forEach((v, i) => { v.place = i + 1; });
    // ajuste "goma elástica" de la IA según la distancia al jugador
    const p = this.player;
    const base = (DIFF[this.settings.diff] || DIFF.normal).mul;
    for (const v of this.vehicles) {
      if (v.isPlayer) { v.speedMul = 1; continue; }
      if (p.finished) { v.speedMul = base; continue; }
      const gap = p.progress - v.progress;
      v.speedMul = base * clamp(1 + gap / 900, 0.92, 1.1);
    }
  }

  handleEvents() {
    for (const v of this.vehicles) {
      const isP = v.isPlayer;
      for (const e of v.events) {
        const near = (name, vol = 1) => (isP ? this.sound.play(name, vol) : this.sound3d(name, v.x, v.z, vol));
        switch (e.type) {
          case 'turbo': near('turbo', 0.8); break;
          case 'box': near('pickup', 0.8); break;
          case 'gotItem': if (isP) this.sound.play('item'); break;
          case 'nitro': near('nitro'); break;
          case 'jump': near('boing'); this.fx.dust(v.x, v.y, v.z, 0, 0, undefined, 10, 2); break;
          case 'log': case 'ball': near('crash'); if (isP) this.shake = 0.7; break;
          case 'boom': if (isP) this.shake = 0.9; break;
          case 'waved': if (isP) this.shake = 0.5; break;
          case 'net': near('net'); break;
          case 'crush': near('crunch', 0.9); if (isP) this.shake = Math.max(this.shake, 0.3); break;
          case 'fallPit': case 'fallWater': near('fall', 0.8); break;
          case 'splash': near('splash'); this.fx.splash(v.x, v.y + 0.5, v.z); break;
          case 'land':
            if (e.v > 9) {
              near('land', clamp(e.v / 18, 0.3, 1));
              for (let k = 0; k < 14; k++) {
                const a = (k / 14) * Math.PI * 2;
                this.fx.dust(v.x + Math.cos(a) * 2.5, v.y, v.z + Math.sin(a) * 2.5, Math.cos(a) * 20, Math.sin(a) * 20, undefined, 1, 2.4);
              }
              if (isP) this.shake = Math.max(this.shake, clamp(e.v / 30, 0.15, 0.6));
            }
            break;
          case 'scrape': near('scrape', clamp(e.v / 12, 0.2, 0.8)); this.fx.sparks(v.x, v.y + 1.2, v.z, 4); break;
          case 'wall': near('bump', 0.6); break;
        }
        if (isP && PLAYER_MSG[e.type]) {
          const big = ['fallPit', 'fallWater', 'net', 'ball', 'boom'].includes(e.type);
          this.hud.message(PLAYER_MSG[e.type], big ? 1.6 : 1.0, big ? 'warn' : '');
        }
      }
      v.events.length = 0;
    }
  }

  // ------------------------------------------------------------ bucle principal
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const dt = Math.min(0.05, Math.max(0, (now - this.last) / 1000));
    this.last = now;
    this.frame(dt);
  }

  frame(dt) {
    this.frames = (this.frames || 0) + 1;
    this.time += dt;
    const inp = this.input;
    inp.padEdges();
    this.menuInput();

    const pc = inp.drive();
    // la dirección digital del teclado se suaviza para que no dé tirones
    const rate = pc.steer === 0 ? 10 : Math.sign(pc.steer) !== Math.sign(this.steerSmooth || 0) ? 9 : 6;
    this.steerSmooth = (this.steerSmooth || 0) + (pc.steer - (this.steerSmooth || 0)) * Math.min(1, dt * rate);
    if (Math.abs(this.steerSmooth) < 0.01 && pc.steer === 0) this.steerSmooth = 0;
    const playerCtrl = { steer: this.steerSmooth, throttle: pc.throttle, brake: pc.brake, item: pc.item };
    if (this.state === 'race' || this.state === 'finished' || this.state === 'countdown') {
      if (inp.pressed('KeyR', 'PadY') && this.state === 'race' && this.player.state === 'ok') {
        this.player.respawn(this.player.s, this.player.d * 0.5, 4);
      }
    }

    if (this.state === 'countdown') this.updateCountdown(dt, playerCtrl);
    if (this.state === 'race' || this.state === 'finished') {
      this.acc += dt;
      let n = 0;
      while (this.acc >= STEP && n < 10) { this.step(STEP, playerCtrl); this.acc -= STEP; n++; }
      if (n === 10) this.acc = 0;
      this.handleEvents();
      this.vehicleFx(dt);
      const p = this.player;
      if (this.state === 'race') {
        this.hud.hint(p.wrongT > 1.2 ? '¡DIRECCIÓN CONTRARIA!' : p.stuckT > 2 ? 'Pulsa R para volver a la pista' : '');
      } else {
        this.hud.hint('');
        this.resultsT -= dt;
        if (this.resultsT <= 0 && this.resultsT > -1) { this.resultsT = -5; this.showResults(); }
      }
    } else if (this.state === 'title' || this.state === 'select') {
      this.obstacles.update(dt, []);
    }

    // sonido del motor
    const p = this.player;
    if (this.state === 'race' || this.state === 'countdown') {
      const thr = this.state === 'countdown' ? playerCtrl.throttle : p.control.throttle;
      this.sound.engineUpdate(Math.abs(p.vF) / p.maxSpeed + (this.state === 'countdown' ? thr * 0.6 : 0), thr, p.boost > 0, !p.onGround);
    } else if (this.state === 'finished') {
      this.sound.engineUpdate(Math.abs(p.vF) / p.maxSpeed, 0.3, false, false);
    }

    this.updateRings(dt);
    this.flash.intensity *= Math.exp(-dt * 8);
    this.fx.update(dt);
    this.world.update(dt, this.state === 'select' ? new THREE.Vector3() : this.player.mesh.position);
    this.trackMeshes.group.children.forEach((m) => { if (m.userData.animTex) m.userData.animTex.offset.x += dt * 0.02; });
    for (const pit of this.track.pits) if (pit.waterMesh) pit.waterMesh.material.map.offset.y += dt * 0.03;
    this.updateCamera(dt);
    this.updateTunnelLight(dt);
    if (this.state !== 'select' && this.state !== 'title') this.hud.update(dt);
    this.render(dt);
    inp.endFrame();
  }

  menuInput() {
    const inp = this.input;
    const ok = () => inp.pressed('Enter', 'NumpadEnter', 'PadA', 'PadStart');
    switch (this.state) {
      case 'title':
        if (ok() || inp.pressed('Space')) { this.sound.init(); this.sound.play('click'); this.goSelect(); }
        break;
      case 'select':
        if (inp.pressed('ArrowLeft', 'KeyA', 'PadLeft')) { this.sound.play('click'); this.changeTruck(-1); }
        if (inp.pressed('ArrowRight', 'KeyD', 'PadRight')) { this.sound.play('click'); this.changeTruck(1); }
        if (ok()) { this.sound.play('click'); this.startRace(); }
        if (inp.pressed('Escape', 'PadB')) this.goTitle();
        break;
      case 'race': case 'countdown':
        if (inp.pressed('KeyP', 'Escape', 'PadStart')) this.pause();
        break;
      case 'paused':
        if (inp.pressed('KeyP', 'Escape', 'PadStart', 'Enter')) this.resume();
        break;
      case 'finished':
        if (this.resultsT < -1 && (inp.pressed('Enter', 'PadA'))) this.startRace();
        else if (this.resultsT > 0.4 && ok()) { this.resultsT = 0.01; }
        break;
    }
    if (inp.pressed('KeyM')) this.toggleMute();
  }

  updateCountdown(dt, ctrl) {
    const before = this.countdown;
    this.countdown -= dt;
    const c = this.countdown;
    // salida turbo: acelerar justo después del "2"
    if (ctrl.throttle > 0) { if (this.throttleHeldSince === null) this.throttleHeldSince = c; } else this.throttleHeldSince = null;
    const lights = this.trackMeshes.lights;
    for (const k of [3, 2, 1]) {
      if (before > k && c <= k) {
        this.hud.big(String(k), 0.9);
        this.sound.play('count');
        lights[3 - k].material.color.setHex(0xff2020);
      }
    }
    if (before > 3.9 && c <= 3.9) this.hud.message('¡PREPARADOS!', 1.2);
    if (c <= 0) {
      this.state = 'race';
      this.hud.big('¡YA!', 1.0, 'go');
      this.sound.play('go');
      for (const l of lights) l.material.color.setHex(0x22ff44);
      const held = this.throttleHeldSince;
      if (held !== null && held <= 2.0 && !this.autopilot) {
        this.player.boost = 1.4;
        this.hud.message('¡SALIDA TURBO!', 1.2);
        this.sound.play('nitro', 0.7);
      }
      for (const v of this.vehicles) if (!v.isPlayer && Math.random() < 0.35) v.boost = 1.2;
      this.sound.musicStart(true);
    }
    // ruedas quietas, motor rugiendo
    for (const v of this.vehicles) v.syncMesh(dt);
  }

  vehicleFx(dt) {
    for (const v of this.vehicles) {
      if (v.state === 'fallen') continue;
      const sp = v.speed;
      if (v.onGround && sp > 8) {
        const back = -2.2;
        const bx = v.x + Math.cos(v.th) * back, bz = v.z + Math.sin(v.th) * back;
        const rate = v.surf === 'mud' ? 1 : v.surf === 'grass' ? 0.25 : 0.35;
        if (Math.random() < rate * (sp / 30)) {
          if (v.surf === 'mud') this.fx.mud(bx, v.y, bz, v.vx, v.vz, 3);
          else this.fx.dust(bx, v.y, bz, v.vx, v.vz, v.surf === 'grass' ? [0.45, 0.55, 0.3] : undefined, 1, 2);
        }
      }
      if (v.boost > 0) {
        const bx = v.x - Math.cos(v.th) * 2.6, bz = v.z - Math.sin(v.th) * 2.6;
        for (const side of [-0.85, 0.85]) {
          const ex = bx - Math.sin(v.th) * side, ez = bz + Math.cos(v.th) * side;
          this.fx.boostFlame(ex, v.y + 3.6, ez, -Math.cos(v.th) * 10, -Math.sin(v.th) * 10);
        }
      }
    }
  }

  updateRings(dt) {
    for (const r of this.rings) {
      if (r.t >= 1) { r.mesh.visible = false; continue; }
      r.t = Math.min(1, r.t + dt * 1.6);
      const s = 2 + r.t * 22;
      r.mesh.scale.set(s, s, 1 + r.t * 3);
      r.mesh.material.opacity = (1 - r.t) * 0.85;
    }
  }

  updateTunnelLight(dt) {
    const p = this.player;
    const tr = this.track;
    let f = 0;
    if (this.state !== 'select' && tr.inTunnel(p.s)) {
      f = clamp(Math.min(p.s - tr.tunnel.s0, tr.tunnel.s1 - p.s) / 30, 0, 1);
    }
    this.tunnelF += (f - this.tunnelF) * Math.min(1, dt * 4);
    const k = this.tunnelF;
    const w = this.world;
    w.hemi.intensity = w.baseHemi * (1 - 0.72 * k);
    w.sun.intensity = w.baseSun * (1 - 0.97 * k);
    this.scene.environmentIntensity = 0.45 * (1 - 0.7 * k);
    const fx = Math.cos(p.th), fz = Math.sin(p.th);
    this.headlight.intensity = 260 * k;
    this.headlight.position.set(p.x + fx * 2.5, p.y + 2.6, p.z + fz * 2.5);
    this.headlight.target.position.set(p.x + fx * 30, p.y, p.z + fz * 30);
    this.headlight.target.updateMatrixWorld();
    const lampPhase = Math.cos(((p.s - tr.tunnel.s0 - 6) / 12) * Math.PI * 2);
    this.tunnelLight.intensity = k * (150 + 90 * lampPhase);
    this.tunnelLight.position.set(p.x + fx * 6, tr.baseAt(p.s) + 15, p.z + fz * 6);
  }

  updateCamera(dt) {
    const cam = this.camera;
    const p = this.player;
    let fovTarget = 68;
    if (this.state === 'select') return;
    if (this.state === 'title') {
      const c = this.track.pointAt(this.track.length - 20);
      const phi = (150 + 40 * Math.sin(this.time * 0.13)) * Math.PI / 180;
      const R = 26;
      const ox = Math.cos(phi) * R, oz = Math.sin(phi) * R;
      this.camPos.set(c.x + c.tx * ox + c.rx * oz, 6.5 + Math.sin(this.time * 0.2) * 1.5, c.z + c.tz * ox + c.rz * oz);
      this.camLook.set(c.x + c.tx * 6, 2.2, c.z + c.tz * 6);
    } else if (this.state === 'countdown' || (this.state === 'paused' && this.prevState === 'countdown')) {
      const t = clamp(1 - (this.countdown - 0.4) / 3.8, 0, 1);
      const e = t * t * (3 - 2 * t);
      const ang = p.th + Math.PI * (1 - e) + 0.6 * Math.sin(e * Math.PI);
      const dist = 15 - 4 * e;
      this.camPos.set(p.x + Math.cos(ang) * dist, p.y + 3.5 + 2 * (1 - e), p.z + Math.sin(ang) * dist);
      this.camLook.set(p.x, p.y + 2.2, p.z);
      this.camYaw = p.th;
    } else if (this.state === 'finished' && this.resultsT < 2.2) {
      const a = this.time * 0.25;
      this.camPos.lerp(new THREE.Vector3(p.x + Math.cos(a) * 16, p.y + 7, p.z + Math.sin(a) * 16), 1 - Math.exp(-dt * 2));
      this.camLook.set(p.x, p.y + 2, p.z);
    } else if (this.state !== 'paused') {
      if (p.state !== 'fallen') {
        const moving = Math.abs(p.vF) > 1;
        const yawTarget = p.vF < -2 ? p.th : p.th;
        this.camYaw = lerpAng(this.camYaw, moving || p.stun <= 0 ? yawTarget : this.camYaw, 1 - Math.exp(-dt * 5));
      }
      const sp = Math.abs(p.vF);
      const portrait = this.camera.aspect < 1;
      const dist = (10.5 + clamp(sp * 0.07, 0, 3.2)) * (portrait ? 1.55 : 1);
      const height = (4.4 + clamp(sp * 0.02, 0, 0.8)) * (portrait ? 1.35 : 1);
      const baseY = p.state === 'fallen' && p.fall ? Math.max(p.y, p.fall.pit.top - 1) : p.y;
      const want = new THREE.Vector3(p.x - Math.cos(this.camYaw) * dist, baseY + height, p.z - Math.sin(this.camYaw) * dist);
      // no meterse bajo el terreno
      const q = this.track.project(want.x, want.z, p.idx);
      const g = this.track.surfaceAt(q.s, clamp(q.d, -LIMIT, LIMIT));
      const gh = g.type === 'pit' || g.type === 'water' ? g.top : g.h;
      want.y = Math.max(want.y, gh + 2.2);
      const kxz = 1 - Math.exp(-dt * 9), ky = 1 - Math.exp(-dt * 5);
      this.camPos.x += (want.x - this.camPos.x) * kxz;
      this.camPos.z += (want.z - this.camPos.z) * kxz;
      this.camPos.y += (want.y - this.camPos.y) * ky;
      this.camLook.set(p.x + Math.cos(this.camYaw) * 5, p.y + 2.4, p.z + Math.sin(this.camYaw) * 5);
      fovTarget = (portrait ? 78 : 68) + clamp(sp / p.maxSpeed, 0, 1.3) * 8 + (p.boost > 0 ? 7 : 0);
    }
    this.fov += (fovTarget - this.fov) * Math.min(1, dt * 3);
    cam.fov = this.fov;
    cam.position.copy(this.camPos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 1.8);
      const s = this.shake * 0.5;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      cam.position.z += (Math.random() - 0.5) * s;
    }
    cam.lookAt(this.camLook);
    cam.updateProjectionMatrix();
    this.fx.setScale(this.renderer.domElement.height, cam.fov);
  }

  render(dt) {
    if (this.state === 'select') {
      this.showSpin += dt;
      this.show.table.rotation.y = this.time * 0.45;
      const t = this.show.trucks[this.settings.truck];
      t.root.position.y = Math.abs(Math.sin(this.time * 2.2)) * 0.25 * Math.max(0, 1 - this.showSpin);
      animateTruck(t, { wheelSpin: 0, steer: Math.sin(this.time * 0.8) * 0.6, comp: Math.sin(this.time * 3) * 0.04, dt });
      this.renderer.render(this.show.scene, this.show.cam);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // la sala se desplaza para que el camión no quede detrás del panel
    const sc = this.show.cam;
    if (w >= 900) {
      const P = Math.min(470, w * 0.42) + w * 0.03;
      sc.position.set(13.5, 6.4, 16);
      sc.aspect = (w + P) / h;
      sc.setViewOffset(w + P, h, P, 0, w, h);
    } else {
      const c = h * 0.2;
      const far = w < h ? 1.9 : 1.4;
      sc.position.set(10.5 * far, 5.2 * far, 12.5 * far);
      sc.aspect = w / (h + 2 * c);
      sc.setViewOffset(w, h + 2 * c, 0, 2 * c, w, h);
    }
    sc.lookAt(0, 2.0, 0);
    sc.updateProjectionMatrix();
  }

  // ------------------------------------------------------------ utilidades para pruebas
  simulate(seconds) {
    const n = Math.round(seconds / STEP);
    const ctrl = { steer: 0, throttle: 0, brake: 0, item: false };
    for (let i = 0; i < n; i++) {
      if (this.state === 'countdown') { this.countdown = 0; this.updateCountdown(0, ctrl); }
      this.step(STEP, ctrl);
      if (i % 12 === 0) this.handleEvents();
    }
  }
}

function boot() {
  try {
    const game = new Game();
    window.__mm = game;
  } catch (e) {
    console.error(e);
    const l = $('loading');
    l.classList.remove('hidden');
    l.innerHTML = '<b>No se ha podido arrancar el juego.</b><br>Necesitas un navegador con WebGL activado.<br><small>' + String(e.message || e) + '</small>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
