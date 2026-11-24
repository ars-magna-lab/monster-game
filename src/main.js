// Mega Monstruos: carreras de monster trucks en 3D, para uno o dos jugadores.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
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
import { HUD, fmtTime } from './hud.js';
import { setAnisotropy, checkerTex } from './textures.js';

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
const KEYHINT = { solo: 'ESPACIO', p1: 'Q / ESPACIO', p2: 'INTRO' };
const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const hex = (c) => '#' + new THREE.Color(c).getHexString();
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

function makeRenderer(canvas) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const win = canvas.ownerDocument.defaultView || window;
  r.setPixelRatio(Math.min(win.devicePixelRatio || 1, 1.75));
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.PCFSoftShadowMap;
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.0;
  return r;
}

// Lo que ve un jugador: cámara, HUD y su trozo de pantalla
class View {
  constructor(game, player, idx, { doc, who, tag }) {
    this.game = game;
    this.player = player;
    this.idx = idx;
    this.who = who;
    this.doc = doc;
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.5, 4000);
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.camYaw = player.th;
    this.fov = 68;
    this.shake = 0;
    this.tunnelF = 0;
    this.steerSmooth = 0;
    this.heldSince = null;
    this.rect = { x: 0, y: 0, w: 1, h: 1 };
    this.hud = new HUD(game, player, { doc, tag, keyhint: KEYHINT[who] });
    this.hud.el.tag.classList.toggle('p2', idx === 1);
  }

  get external() { return this.doc !== document; }

  dispose() { this.hud.remove(); }
}

class Game {
  constructor() {
    const params = new URLSearchParams(location.search);
    this.autopilot = params.has('auto');
    this.renderer = makeRenderer($('game'));
    setAnisotropy(Math.min(8, this.renderer.capabilities.getMaxAnisotropy()));

    this.scene = new THREE.Scene();
    this.envMap = new THREE.PMREMGenerator(this.renderer).fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.45;
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.5, 4000); // cámara de la portada
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

    this.rings = [];
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 8, 40), new THREE.MeshBasicMaterial({ color: 0xff4fd8, transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = Math.PI / 2;
      m.visible = false;
      this.scene.add(m);
      this.rings.push({ mesh: m, t: 1 });
    }

    this.settings = loadJSON('megamonstruos.ajustes', { truck: 0, truck2: 1, laps: 3, diff: 'normal', music: true, mode: 1, split: 'auto' });
    if (this.settings.truck2 === this.settings.truck) this.settings.truck2 = (this.settings.truck + 1) % TRUCKS.length;
    this.records = loadJSON('megamonstruos.records', {});
    this.sound.musicOn = this.settings.music;
    this.laps = this.settings.laps;
    this.views = [];
    this.humans = [];
    this.win2 = null;
    this.renderer2 = null;
    this.buildShowroom();
    this.bindUI();

    this.state = 'title';
    this.titleSel = this.settings.mode === 2 ? 1 : 0;
    this.selectStep = 0;
    this.time = 0;
    this.raceTime = 0;
    this.acc = 0;
    this.titlePos = new THREE.Vector3();
    this.titleLook = new THREE.Vector3();
    this.setupRace(1);
    this.state = 'title';

    window.addEventListener('resize', () => this.resize());
    this.resize();
    document.addEventListener('visibilitychange', () => { if (document.hidden && (this.state === 'race' || this.state === 'countdown')) this.pause(); });
    this.last = performance.now();
    $('loading').classList.add('hidden');
    this.showScreen('title');
    this.updateTitle();
    requestAnimationFrame((t) => this.loop(t));
  }

  get player() { return this.humans[0]; }

  // ------------------------------------------------------------ UI
  bindUI() {
    const on = (id, f) => $(id).addEventListener('click', () => { this.sound.init(); this.sound.play('click'); f(); });
    on('btn-play', () => this.goSelect(1));
    on('btn-play2', () => this.goSelect(2));
    on('btn-prev', () => this.changeTruck(-1));
    on('btn-next', () => this.changeTruck(1));
    on('btn-start', () => this.confirmSelect());
    on('btn-back', () => this.backSelect());
    on('btn-resume', () => this.resume());
    on('btn-restart', () => this.startRace());
    on('btn-quit', () => this.goTitle());
    on('btn-again', () => this.startRace());
    on('btn-change', () => this.goSelect(this.settings.mode));
    on('btn-menu', () => this.goTitle());
    on('btn-sound', () => this.toggleMute());
    on('btn-music', () => this.toggleMusic());
    on('btn-pause', () => this.pause());
    document.querySelectorAll('[data-laps]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.laps = +b.dataset.laps; this.refreshOptions(); this.updateSelect();
    }));
    document.querySelectorAll('[data-diff]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.diff = b.dataset.diff; this.refreshOptions();
    }));
    document.querySelectorAll('[data-split]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click');
      if (b.dataset.split === 'window') {
        if (!this.openWindow2()) return;
      } else this.closeWindow2();
      this.settings.split = b.dataset.split;
      this.refreshOptions();
    }));
    this.input.bindTouch($('touch'));
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;
    window.addEventListener('pointerdown', () => this.sound.init(), { once: true });
    window.addEventListener('keydown', () => this.sound.init(), { once: true });
    window.addEventListener('beforeunload', () => { if (this.win2 && !this.win2.closed) this.win2.close(); });
    this.refreshOptions();
  }

  refreshOptions() {
    document.querySelectorAll('[data-laps]').forEach((b) => b.classList.toggle('sel', +b.dataset.laps === this.settings.laps));
    document.querySelectorAll('[data-diff]').forEach((b) => b.classList.toggle('sel', b.dataset.diff === this.settings.diff));
    const useWin = this.settings.split === 'window' && this.win2Ready();
    document.querySelectorAll('[data-split]').forEach((b) => b.classList.toggle('sel', (b.dataset.split === 'window') === useWin));
    const fileMode = location.protocol === 'file:';
    $('screen2-note').textContent = fileMode
      ? 'Para usar dos monitores: estira esta ventana por los dos (pantalla partida lado a lado) o abre el juego con «npm start» para tener una ventana por jugador.'
      : useWin ? 'Arrastra la ventana del jugador 2 al otro monitor y ponla a pantalla completa (F11).' : '';
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
    for (const v of this.views) v.hud.show(racing || name === 'pause');
    $('touch').classList.toggle('hidden', !(racing && this.isTouch && this.humans.length === 1));
    $('btn-pause').classList.toggle('hidden', !racing);
    this.setWindow2Waiting(!(racing || name === 'pause' || name === 'results'));
  }

  updateTitle() {
    $('btn-play').classList.toggle('sel', this.titleSel === 0);
    $('btn-play2').classList.toggle('sel', this.titleSel === 1);
  }

  goTitle() {
    this.sound.engineStop();
    this.state = 'title';
    this.setupRace(1);
    this.state = 'title';
    this.showScreen('title');
    this.updateTitle();
  }

  goSelect(mode = this.settings.mode) {
    this.settings.mode = mode;
    this.titleSel = mode === 2 ? 1 : 0;
    this.selectStep = 0;
    this.sound.engineStop();
    this.sound.init();
    this.sound.musicStart(false);
    this.state = 'select';
    this.showScreen('select');
    this.refreshOptions();
    this.updateSelect();
  }

  selKey() { return this.selectStep === 1 ? 'truck2' : 'truck'; }

  changeTruck(dir) {
    const key = this.selKey();
    let t = this.settings[key];
    do { t = (t + dir + TRUCKS.length) % TRUCKS.length; } while (this.selectStep === 1 && t === this.settings.truck);
    this.settings[key] = t;
    this.showSpin = 0;
    this.updateSelect();
    this.refreshOptions();
  }

  confirmSelect() {
    if (this.settings.mode === 2 && this.selectStep === 0) {
      this.selectStep = 1;
      if (this.settings.truck2 === this.settings.truck) this.settings.truck2 = (this.settings.truck + 1) % TRUCKS.length;
      this.showSpin = 0;
      this.updateSelect();
      return;
    }
    this.startRace();
  }

  backSelect() {
    if (this.selectStep === 1) { this.selectStep = 0; this.updateSelect(); return; }
    this.goTitle();
  }

  updateSelect() {
    const two = this.settings.mode === 2;
    const cur = this.settings[this.selKey()];
    const def = TRUCKS[cur];
    this.show.trucks.forEach((t, i) => { t.root.visible = i === cur; });
    $('select-who').classList.toggle('hidden', !two);
    $('select-who').classList.toggle('p2', this.selectStep === 1);
    $('select-who').textContent = this.selectStep === 1 ? 'JUGADOR 2' : 'JUGADOR 1';
    $('opt-screen2').classList.toggle('hidden', !two);
    $('select-keys').classList.toggle('hidden', !two);
    $('select-keys').textContent = 'J1: W A S D, objeto Q · J2: flechas, objeto Intro · o un mando para cada uno';
    $('btn-start').textContent = two && this.selectStep === 0 ? 'SIGUIENTE' : '¡A CORRER!';
    $('truck-name').textContent = def.name;
    $('truck-name').style.color = hex(def.color);
    $('truck-desc').textContent = def.desc;
    const labels = { speed: 'Velocidad', accel: 'Aceleración', handling: 'Manejo', weight: 'Peso' };
    $('truck-stats').innerHTML = Object.entries(labels).map(([k, l]) =>
      `<div class="stat"><span>${l}</span><div class="bar">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= def.stats[k] ? 'on' : ''}"></i>`).join('')}</div></div>`).join('');
    const rec = this.records[def.id + '_' + this.settings.laps];
    $('truck-record').textContent = rec ? `Récord con ${this.settings.laps} ${this.settings.laps === 1 ? 'vuelta' : 'vueltas'}: ${fmtTime(rec)}` : '';
    $('truck-dots').innerHTML = TRUCKS.map((t, i) => {
      const taken = this.selectStep === 1 && i === this.settings.truck;
      return `<i class="${i === cur ? 'on' : ''}${taken ? ' taken' : ''}" style="background:${hex(t.color)}"></i>`;
    }).join('');
  }

  // ------------------------------------------------------------ segunda ventana (jugador 2)
  win2Ready() {
    return !!(this.win2 && !this.win2.closed && this.renderer2);
  }

  openWindow2() {
    if (location.protocol === 'file:') {
      this.refreshOptions();
      return false;
    }
    if (this.win2Ready()) return true;
    const w = window.open(location.pathname + '?pantalla2', 'megamonstruos-j2', 'popup,width=1280,height=720');
    if (!w) {
      $('screen2-note').textContent = 'El navegador ha bloqueado la ventana: permite las ventanas emergentes para esta página.';
      return false;
    }
    this.win2 = w;
    const t0 = performance.now();
    const poll = setInterval(() => {
      if (w.closed || performance.now() - t0 > 15000) { clearInterval(poll); this.refreshOptions(); return; }
      let ready = false;
      try { ready = !!w.__screen2Ready; } catch { ready = false; }
      if (!ready) return;
      clearInterval(poll);
      this.setupWindow2(w);
    }, 150);
    return true;
  }

  setupWindow2(w) {
    this.renderer2 = makeRenderer(w.document.getElementById('game'));
    this.envMap2 = new THREE.PMREMGenerator(this.renderer2).fromScene(new RoomEnvironment(), 0.04).texture;
    this.input.attach(w);
    w.addEventListener('resize', () => this.layoutViews());
    w.addEventListener('pagehide', () => setTimeout(() => this.onWindow2Closed(), 0));
    this.layoutViews();
    this.refreshOptions();
    this.setWindow2Waiting(!(this.state === 'race' || this.state === 'countdown' || this.state === 'finished'));
  }

  closeWindow2() {
    if (this.win2 && !this.win2.closed) this.win2.close();
    this.onWindow2Closed();
  }

  onWindow2Closed() {
    if (!this.win2) return;
    this.input.detach(this.win2);
    this.win2 = null;
    if (this.renderer2) { try { this.renderer2.dispose(); } catch { /* ventana cerrada */ } }
    this.renderer2 = null;
    // si había una carrera, el jugador 2 pasa a pantalla partida
    if (this.views.some((v) => v.external)) {
      const racing = this.state !== 'title' && this.state !== 'select';
      this.buildViews();
      if (racing) for (const v of this.views) v.hud.show(true);
    }
    this.refreshOptions();
  }

  setWindow2Waiting(waiting) {
    if (!this.win2Ready()) return;
    try { this.win2.document.getElementById('screen2-wait').classList.toggle('hidden', !waiting); } catch { /* cerrada */ }
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
    this.show = { scene, cam, table, trucks };
    this.showSpin = 0;
  }

  // ------------------------------------------------------------ carrera
  setupRace(mode = this.settings.mode) {
    const diff = DIFF[this.settings.diff] || DIFF.normal;
    this.laps = this.settings.laps;
    const L = this.track.length;
    const humans = [this.vehicles[this.settings.truck]];
    if (mode === 2) humans.push(this.vehicles[this.settings.truck2]);
    const others = this.vehicles.filter((v) => !humans.includes(v)).sort(() => Math.random() - 0.5);
    // los humanos salen en la tercera fila, como en los juegos de karts
    const grid = mode === 2 ? [...others.slice(0, 4), ...humans] : [...others.slice(0, 4), humans[0], others[4]];
    this.drivers = new Map();
    grid.forEach((v, i) => {
      v.reset();
      v.isPlayer = humans.includes(v);
      v.human = humans.indexOf(v);
      v.speedMul = v.isPlayer ? 1 : diff.mul;
      v.placeAt(L - 10 - Math.floor(i / 2) * 10, i % 2 ? 5.5 : -5.5, 0);
      v.place = i + 1;
      this.drivers.set(v, new AIDriver(v, this.track, { skill: v.isPlayer ? 1.5 : diff.skill, preferBridge: Math.random() < 0.5 }));
    });
    this.humans = humans;
    this.raceTime = 0;
    this.countdown = 4.2;
    this.finishCount = 0;
    this.resultsT = 0;
    this.allDoneT = null;
    for (const l of this.trackMeshes.lights) l.material.color.setHex(0x331111);
    this.buildViews();
  }

  buildViews() {
    for (const v of this.views) v.dispose();
    const two = this.humans.length === 2;
    const useWin = two && this.settings.split === 'window' && this.win2Ready();
    this.views = this.humans.map((p, i) => new View(this, p, i, {
      doc: i === 1 && useWin ? this.win2.document : document,
      who: two ? (i === 0 ? 'p1' : 'p2') : 'solo',
      tag: two ? 'J' + (i + 1) : '',
    }));
    for (const v of this.views) {
      const p = v.player;
      v.camPos.set(p.x + Math.cos(p.th) * 16, p.y + 4, p.z + Math.sin(p.th) * 16);
    }
    this.layoutViews();
  }

  // Reparte la pantalla: completa, partida arriba/abajo, lado a lado o en otra ventana
  layoutViews() {
    const W = window.innerWidth, H = window.innerHeight;
    const main = this.views.filter((v) => !v.external);
    const side = W / H > 2.0;
    main.forEach((v, i) => {
      if (main.length === 1) v.rect = { x: 0, y: 0, w: 1, h: 1 };
      else v.rect = side ? { x: i * 0.5, y: 0, w: 0.5, h: 1 } : { x: 0, y: i * 0.5, w: 1, h: 0.5 };
      const pw = v.rect.w * W, ph = v.rect.h * H;
      v.camera.aspect = pw / ph;
      v.camera.updateProjectionMatrix();
      v.hud.place(v.rect.x, v.rect.y, v.rect.w, v.rect.h, pw, ph);
      v.hud.root.classList.toggle('div-top', i === 1 && !side);
      v.hud.root.classList.toggle('div-left', i === 1 && side);
    });
    for (const v of this.views.filter((x) => x.external)) {
      const w2 = this.win2;
      const pw = w2.innerWidth, ph = w2.innerHeight;
      this.renderer2.setSize(pw, ph, false);
      v.rect = { x: 0, y: 0, w: 1, h: 1 };
      v.camera.aspect = pw / ph;
      v.camera.updateProjectionMatrix();
      v.hud.place(0, 0, 1, 1, pw, ph);
    }
  }

  viewOf(v) { return this.views.find((x) => x.player === v); }

  startRace() {
    this.sound.init();
    this.setupRace(this.settings.mode);
    this.state = 'countdown';
    this.showScreen(null);
    this.sound.musicStop();
    this.sound.engineStart();
  }

  pause() {
    if (this.state !== 'race' && this.state !== 'countdown') return;
    this.prevState = this.state;
    this.state = 'paused';
    this.sound.engineStop();
    this.showScreen('pause');
    for (const v of this.views) if (v.external) v.hud.message('PAUSA', 1e9, 'warn');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.prevState;
    this.showScreen(null);
    for (const v of this.views) if (v.external) v.hud.message('', 0.01);
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

  // volumen según la distancia al jugador más cercano
  sound3d(name, x, z, vol = 1) {
    let d = this.humans.length ? Infinity : 0;
    for (const p of this.humans) d = Math.min(d, Math.hypot(p.x - x, p.z - z));
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
      if (v.isPlayer) this.playerFinished(v);
      return;
    }
    const view = this.viewOf(v);
    if (view) {
      if (v.lap === this.laps) { view.hud.big('¡ÚLTIMA VUELTA!', 1.6, 'small'); this.sound.play('final'); }
      else { view.hud.big(`VUELTA ${v.lap}`, 1.2, 'small'); this.sound.play('lap'); }
    }
  }

  playerFinished(p) {
    const view = this.viewOf(p);
    view.hud.big(p.finishPlace === 1 ? '¡GANASTE!' : `¡${ORDINAL[p.finishPlace - 1]}!`, 3, 'small');
    this.sound.play('finish');
    this.fx.confetti(p.x, p.y, p.z, 160);
    const key = p.def.id + '_' + this.laps;
    p.newRecord = !this.records[key] || p.finishTime < this.records[key];
    if (p.newRecord) this.records[key] = p.finishTime;
    const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
    p.newLapRecord = isFinite(best) && (!this.records.vuelta || best < this.records.vuelta);
    if (p.newLapRecord) this.records.vuelta = best;
    saveJSON('megamonstruos.records', this.records);
    if (this.humans.every((h) => h.finished)) this.endRace();
    else if (this.allDoneT === null) this.allDoneT = 45; // el otro jugador tiene 45 s para llegar
  }

  endRace() {
    if (this.state === 'finished') return;
    this.state = 'finished';
    this.resultsT = 3.2;
  }

  showResults() {
    const L = this.track.length;
    const avg = 33;
    const rows = [...this.vehicles].map((v) => {
      let t = v.finishTime;
      if (!v.finished) t = this.raceTime + Math.max(0, (this.laps + 1) * L - v.progress) / avg;
      return { v, t, est: !v.finished };
    }).sort((a, b) => a.t - b.t);
    const placeOf = (v) => rows.findIndex((r) => r.v === v) + 1;
    const two = this.humans.length === 2;
    if (!two) {
      const place = placeOf(this.player);
      $('res-title').textContent = place === 1 ? '¡HAS GANADO!' : place <= 3 ? `¡PODIO! QUEDASTE ${ORDINAL[place - 1]}` : `HAS QUEDADO ${ORDINAL[place - 1]}`;
    } else {
      const [a, b] = this.humans.map(placeOf);
      const best = a < b ? 1 : 2;
      $('res-title').textContent = Math.min(a, b) === 1 ? `¡GANA EL JUGADOR ${best}!` : `¡EL JUGADOR ${best} LLEGA ANTES!`;
    }
    $('res-table').innerHTML = rows.map((r, i) => {
      const h = this.humans.indexOf(r.v);
      const cls = h === 0 ? 'me' : h === 1 ? 'me2' : '';
      const tag = two && h >= 0 ? ` <b class="tag">J${h + 1}</b>` : '';
      return `<tr class="${cls}"><td>${i + 1}</td><td><i style="background:${hex(r.v.def.color)}"></i>${r.v.def.name}${tag}</td><td>${r.est ? '~' : ''}${fmtTime(r.t)}</td></tr>`;
    }).join('');
    $('res-extra').innerHTML = this.humans.map((p, i) => {
      const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
      let s = `${two ? `J${i + 1} · ` : ''}Mejor vuelta: ${fmtTime(best)}`;
      if (p.newRecord) s += ' · ¡Nuevo récord de carrera!';
      else if (p.newLapRecord) s += ' · ¡Récord de vuelta!';
      return s;
    }).join('<br>');
    this.showScreen('results');
    for (const v of this.views) if (v.external) v.hud.message(placeOf(v.player) === 1 ? '¡GANASTE!' : `¡${ORDINAL[placeOf(v.player) - 1]}!`, 1e9, 'warn');
  }

  // ------------------------------------------------------------ simulación
  step(dt, ctrls) {
    const racing = this.state === 'race' || this.state === 'finished';
    if (!racing) return;
    this.raceTime += dt;
    for (const v of this.vehicles) {
      let ctrl;
      if (v.isPlayer && !v.finished && !this.autopilot) ctrl = ctrls[v.human];
      else ctrl = this.drivers.get(v).control(dt, this);
      if (ctrl.item) v.useItem(this);
      v.update(dt, ctrl, this);
    }
    for (const c of ctrls) c.item = false;
    this.collide();
    this.obstacles.update(dt, this.vehicles);
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
          const jimp = (-1.4 * vn) / (1 / ma + 1 / mb);
          a.vx -= (jimp * nx) / ma; a.vz -= (jimp * nz) / ma;
          b.vx += (jimp * nx) / mb; b.vz += (jimp * nz) / mb;
          if (-vn > 4) {
            const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
            this.sound3d('bump', mx, mz, clamp(-vn / 15, 0.2, 1));
            this.fx.sparks(mx, (a.y + b.y) / 2 + 1.8, mz, 6);
            for (const v of [a, b]) {
              const view = this.viewOf(v);
              if (view) view.shake = Math.max(view.shake, clamp(-vn / 20, 0.1, 0.5));
            }
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
    // "goma elástica": la IA se ajusta al jugador humano que va delante
    const base = (DIFF[this.settings.diff] || DIFF.normal).mul;
    const racing = this.humans.filter((h) => !h.finished);
    const ref = racing.length ? Math.max(...racing.map((h) => h.progress)) : null;
    for (const v of this.vehicles) {
      if (v.isPlayer) { v.speedMul = 1; continue; }
      if (ref === null) { v.speedMul = base; continue; }
      v.speedMul = base * clamp(1 + (ref - v.progress) / 900, 0.92, 1.1);
    }
  }

  handleEvents() {
    for (const v of this.vehicles) {
      const view = this.viewOf(v);
      const isP = !!view;
      const shake = (k) => { if (view) view.shake = Math.max(view.shake, k); };
      for (const e of v.events) {
        const near = (name, vol = 1) => (isP ? this.sound.play(name, vol) : this.sound3d(name, v.x, v.z, vol));
        switch (e.type) {
          case 'turbo': near('turbo', 0.8); break;
          case 'box': near('pickup', 0.8); break;
          case 'gotItem': if (isP) this.sound.play('item'); break;
          case 'nitro': near('nitro'); break;
          case 'jump': near('boing'); this.fx.dust(v.x, v.y, v.z, 0, 0, undefined, 10, 2); break;
          case 'log': case 'ball': near('crash'); shake(0.7); break;
          case 'boom': shake(0.9); break;
          case 'waved': shake(0.5); break;
          case 'net': near('net'); break;
          case 'crush': near('crunch', 0.9); shake(0.3); break;
          case 'fallPit': case 'fallWater': near('fall', 0.8); break;
          case 'splash': near('splash'); this.fx.splash(v.x, v.y + 0.5, v.z); break;
          case 'land':
            if (e.v > 9) {
              near('land', clamp(e.v / 18, 0.3, 1));
              for (let k = 0; k < 14; k++) {
                const a = (k / 14) * Math.PI * 2;
                this.fx.dust(v.x + Math.cos(a) * 2.5, v.y, v.z + Math.sin(a) * 2.5, Math.cos(a) * 20, Math.sin(a) * 20, undefined, 1, 2.4);
              }
              shake(clamp(e.v / 30, 0.15, 0.6));
            }
            break;
          case 'scrape': near('scrape', clamp(e.v / 12, 0.2, 0.8)); this.fx.sparks(v.x, v.y + 1.2, v.z, 4); break;
          case 'wall': near('bump', 0.6); break;
        }
        if (view && PLAYER_MSG[e.type]) {
          const big = ['fallPit', 'fallWater', 'net', 'ball', 'boom'].includes(e.type);
          view.hud.message(PLAYER_MSG[e.type], big ? 1.6 : 1.0, big ? 'warn' : '');
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

  readControls(dt) {
    const two = this.views.length === 2;
    return this.views.map((view) => {
      const pc = this.input.drive(two ? view.who : 'solo');
      // la dirección digital del teclado se suaviza para que no dé tirones
      const rate = pc.steer === 0 ? 10 : Math.sign(pc.steer) !== Math.sign(view.steerSmooth) ? 9 : 6;
      view.steerSmooth += (pc.steer - view.steerSmooth) * Math.min(1, dt * rate);
      if (Math.abs(view.steerSmooth) < 0.01 && pc.steer === 0) view.steerSmooth = 0;
      return { steer: view.steerSmooth, throttle: pc.throttle, brake: pc.brake, item: pc.item, reset: pc.reset };
    });
  }

  frame(dt) {
    this.frames = (this.frames || 0) + 1;
    this.time += dt;
    const inp = this.input;
    if (this.win2 && this.win2.closed) this.onWindow2Closed();
    inp.padEdges();
    this.menuInput();

    const ctrls = this.readControls(dt);
    if (this.state === 'race') {
      ctrls.forEach((c, i) => {
        const p = this.humans[i];
        if (c.reset && p.state === 'ok' && !p.finished) p.respawn(p.s, p.d * 0.5, 4);
      });
    }

    if (this.state === 'countdown') this.updateCountdown(dt, ctrls);
    if (this.state === 'race' || this.state === 'finished') {
      this.acc += dt;
      let n = 0;
      while (this.acc >= STEP && n < 10) { this.step(STEP, ctrls); this.acc -= STEP; n++; }
      if (n === 10) this.acc = 0;
      this.handleEvents();
      this.vehicleFx(dt);
      for (const v of this.views) {
        const p = v.player;
        const key = v.who === 'p2' ? 'Retroceso' : 'R';
        v.hud.hint(this.state === 'race' && !p.finished ? (p.wrongT > 1.2 ? '¡DIRECCIÓN CONTRARIA!' : p.stuckT > 2 ? `Pulsa ${key} para volver a la pista` : '') : '');
      }
      if (this.state === 'race' && this.allDoneT !== null) {
        this.allDoneT -= dt;
        if (this.allDoneT <= 0) this.endRace();
      }
      if (this.state === 'finished') {
        this.resultsT -= dt;
        if (this.resultsT <= 0 && this.resultsT > -1) { this.resultsT = -5; this.showResults(); }
      }
    } else if (this.state === 'title' || this.state === 'select') {
      this.obstacles.update(dt, []);
    }

    // motor: suena el del jugador que más corre
    if (this.state === 'race' || this.state === 'countdown' || this.state === 'finished') {
      let best = null;
      for (const p of this.humans) if (!best || Math.abs(p.vF) / p.maxSpeed > Math.abs(best.vF) / best.maxSpeed) best = p;
      const i = this.humans.indexOf(best);
      const thr = this.state === 'countdown' ? Math.max(...ctrls.map((c) => c.throttle)) : this.state === 'finished' ? 0.3 : best.control.throttle;
      this.sound.engineUpdate(Math.abs(best.vF) / best.maxSpeed + (this.state === 'countdown' ? thr * 0.6 : 0), thr, best.boost > 0 && i >= 0, !best.onGround);
    }

    this.updateRings(dt);
    this.flash.intensity *= Math.exp(-dt * 8);
    this.fx.update(dt);
    this.world.update(dt);
    for (const pit of this.track.pits) if (pit.waterMesh) pit.waterMesh.material.map.offset.y += dt * 0.03;
    if (this.state === 'title') this.updateTitleCamera();
    else if (this.state !== 'select') for (const v of this.views) this.updateViewCamera(v, dt);
    if (this.state !== 'select' && this.state !== 'title') for (const v of this.views) v.hud.update(dt);
    this.render(dt);
    inp.endFrame();
  }

  menuInput() {
    const inp = this.input;
    const ok = () => inp.pressed('Enter', 'NumpadEnter', 'PadA', 'PadStart');
    switch (this.state) {
      case 'title':
        if (inp.pressed('ArrowLeft', 'KeyA', 'PadLeft', 'ArrowRight', 'KeyD', 'PadRight')) { this.titleSel = 1 - this.titleSel; this.sound.play('click'); this.updateTitle(); }
        if (inp.pressed('Digit1', 'Numpad1')) { this.titleSel = 0; this.updateTitle(); }
        if (inp.pressed('Digit2', 'Numpad2')) { this.titleSel = 1; this.updateTitle(); }
        if (ok() || inp.pressed('Space') || inp.pressed('Digit1', 'Numpad1', 'Digit2', 'Numpad2')) {
          this.sound.init(); this.sound.play('click'); this.goSelect(this.titleSel + 1);
        }
        break;
      case 'select':
        if (inp.pressed('ArrowLeft', 'KeyA', 'PadLeft')) { this.sound.play('click'); this.changeTruck(-1); }
        if (inp.pressed('ArrowRight', 'KeyD', 'PadRight')) { this.sound.play('click'); this.changeTruck(1); }
        if (ok() || inp.pressed('Space')) { this.sound.play('click'); this.confirmSelect(); }
        if (inp.pressed('Escape', 'PadB')) this.backSelect();
        break;
      case 'race': case 'countdown':
        if (inp.pressed('KeyP', 'Escape', 'PadStart')) this.pause();
        break;
      case 'paused':
        if (inp.pressed('KeyP', 'Escape', 'PadStart')) this.resume();
        break;
      case 'finished':
        if (this.resultsT < -1 && inp.pressed('Enter', 'PadA', 'PadStart')) this.startRace();
        else if (this.resultsT > 0.4 && ok()) this.resultsT = 0.01;
        break;
    }
    if (inp.pressed('KeyM')) this.toggleMute();
  }

  updateCountdown(dt, ctrls) {
    const before = this.countdown;
    this.countdown -= dt;
    const c = this.countdown;
    // salida turbo: acelerar después del "2"
    this.views.forEach((v, i) => {
      if (ctrls[i].throttle > 0) { if (v.heldSince === null) v.heldSince = c; } else v.heldSince = null;
    });
    const lights = this.trackMeshes.lights;
    for (const k of [3, 2, 1]) {
      if (before > k && c <= k) {
        for (const v of this.views) v.hud.big(String(k), 0.9);
        this.sound.play('count');
        lights[3 - k].material.color.setHex(0xff2020);
      }
    }
    if (before > 3.9 && c <= 3.9) for (const v of this.views) v.hud.message('¡PREPARADOS!', 1.2);
    if (c <= 0) {
      this.state = 'race';
      this.sound.play('go');
      for (const l of lights) l.material.color.setHex(0x22ff44);
      for (const v of this.views) {
        v.hud.big('¡YA!', 1.0, 'go');
        if (v.heldSince !== null && v.heldSince <= 2.0 && !this.autopilot) {
          v.player.boost = 1.4;
          v.hud.message('¡SALIDA TURBO!', 1.2);
          this.sound.play('nitro', 0.7);
        }
      }
      for (const v of this.vehicles) if (!v.isPlayer && Math.random() < 0.35) v.boost = 1.2;
      this.sound.musicStart(true);
    }
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

  // Luces que dependen del jugador que se dibuja (túnel y sombras)
  prepareLights(view, dt) {
    const p = view.player;
    const tr = this.track;
    let f = 0;
    if (tr.inTunnel(p.s)) f = clamp(Math.min(p.s - tr.tunnel.s0, tr.tunnel.s1 - p.s) / 30, 0, 1);
    view.tunnelF += (f - view.tunnelF) * Math.min(1, dt * 4);
    const k = view.tunnelF;
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
    w.focus(p.mesh.position);
  }

  updateTitleCamera() {
    const cam = this.camera;
    const c = this.track.pointAt(this.track.length - 20);
    const phi = (150 + 40 * Math.sin(this.time * 0.13)) * Math.PI / 180;
    const R = 26;
    const ox = Math.cos(phi) * R, oz = Math.sin(phi) * R;
    cam.position.set(c.x + c.tx * ox + c.rx * oz, 6.5 + Math.sin(this.time * 0.2) * 1.5, c.z + c.tz * ox + c.rz * oz);
    cam.lookAt(c.x + c.tx * 6, 2.2, c.z + c.tz * 6);
    cam.fov = 68;
    cam.updateProjectionMatrix();
  }

  updateViewCamera(view, dt) {
    const cam = view.camera;
    const p = view.player;
    const st = this.state === 'paused' ? this.prevState : this.state;
    let fovTarget = 68;
    const portrait = cam.aspect < 1;
    if (this.state === 'paused') {
      // cámara quieta
    } else if (st === 'countdown') {
      const t = clamp(1 - (this.countdown - 0.4) / 3.8, 0, 1);
      const e = t * t * (3 - 2 * t);
      const ang = p.th + Math.PI * (1 - e) + (view.idx === 1 ? -0.6 : 0.6) * Math.sin(e * Math.PI);
      const dist = (15 - 4 * e) * (portrait ? 1.4 : 1);
      view.camPos.set(p.x + Math.cos(ang) * dist, p.y + 3.5 + 2 * (1 - e), p.z + Math.sin(ang) * dist);
      view.camLook.set(p.x, p.y + 2.2, p.z);
      view.camYaw = p.th;
    } else if (p.finished && (st === 'race' || this.resultsT < 2.2)) {
      const a = this.time * 0.25 + view.idx * Math.PI;
      view.camPos.lerp(new THREE.Vector3(p.x + Math.cos(a) * 16, p.y + 7, p.z + Math.sin(a) * 16), 1 - Math.exp(-dt * 2));
      view.camLook.set(p.x, p.y + 2, p.z);
    } else {
      if (p.state !== 'fallen') {
        const moving = Math.abs(p.vF) > 1;
        view.camYaw = lerpAng(view.camYaw, moving || p.stun <= 0 ? p.th : view.camYaw, 1 - Math.exp(-dt * 5));
      }
      const sp = Math.abs(p.vF);
      const wide = cam.aspect > 2.6; // media pantalla apaisada: un poco más de altura
      const dist = (10.5 + clamp(sp * 0.07, 0, 3.2)) * (portrait ? 1.55 : 1);
      const height = (4.4 + clamp(sp * 0.02, 0, 0.8)) * (portrait ? 1.35 : wide ? 0.9 : 1);
      const baseY = p.state === 'fallen' && p.fall ? Math.max(p.y, p.fall.pit.top - 1) : p.y;
      const want = new THREE.Vector3(p.x - Math.cos(view.camYaw) * dist, baseY + height, p.z - Math.sin(view.camYaw) * dist);
      const q = this.track.project(want.x, want.z, p.idx);
      const g = this.track.surfaceAt(q.s, clamp(q.d, -LIMIT, LIMIT));
      const gh = g.type === 'pit' || g.type === 'water' ? g.top : g.h;
      want.y = Math.max(want.y, gh + 2.2);
      const kxz = 1 - Math.exp(-dt * 9), ky = 1 - Math.exp(-dt * 5);
      view.camPos.x += (want.x - view.camPos.x) * kxz;
      view.camPos.z += (want.z - view.camPos.z) * kxz;
      view.camPos.y += (want.y - view.camPos.y) * ky;
      view.camLook.set(p.x + Math.cos(view.camYaw) * 5, p.y + 2.4, p.z + Math.sin(view.camYaw) * 5);
      fovTarget = (portrait ? 78 : wide ? 58 : 68) + clamp(sp / p.maxSpeed, 0, 1.3) * 8 + (p.boost > 0 ? 7 : 0);
    }
    view.fov += (fovTarget - view.fov) * Math.min(1, dt * 3);
    cam.fov = view.fov;
    cam.position.copy(view.camPos);
    if (view.shake > 0) {
      view.shake = Math.max(0, view.shake - dt * 1.8);
      const s = view.shake * 0.5;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      cam.position.z += (Math.random() - 0.5) * s;
    }
    cam.lookAt(view.camLook);
    cam.updateProjectionMatrix();
  }

  render(dt) {
    const r = this.renderer;
    if (this.state === 'select') {
      this.showSpin += dt;
      this.show.table.rotation.y = this.time * 0.45;
      const t = this.show.trucks[this.settings[this.selKey()]];
      t.root.position.y = Math.abs(Math.sin(this.time * 2.2)) * 0.25 * Math.max(0, 1 - this.showSpin);
      animateTruck(t, { wheelSpin: 0, steer: Math.sin(this.time * 0.8) * 0.6, comp: Math.sin(this.time * 3) * 0.04, dt });
      r.setScissorTest(false);
      r.setViewport(0, 0, window.innerWidth, window.innerHeight);
      r.render(this.show.scene, this.show.cam);
      return;
    }
    if (this.state === 'title' || !this.views.length) {
      this.world.focus(this.track.pointAt(this.track.length - 20));
      r.setScissorTest(false);
      r.setViewport(0, 0, window.innerWidth, window.innerHeight);
      this.fx.setScale(r.domElement.height, this.camera.fov);
      r.render(this.scene, this.camera);
      return;
    }
    const W = window.innerWidth, H = window.innerHeight;
    const main = this.views.filter((v) => !v.external);
    r.setScissorTest(main.length > 1);
    for (const v of main) {
      const x = v.rect.x * W, y = (1 - v.rect.y - v.rect.h) * H, w = v.rect.w * W, h = v.rect.h * H;
      r.setViewport(x, y, w, h);
      r.setScissor(x, y, w, h);
      this.prepareLights(v, dt);
      this.fx.setScale(h * r.getPixelRatio(), v.camera.fov);
      r.render(this.scene, v.camera);
    }
    for (const v of this.views.filter((x) => x.external)) {
      if (!this.win2Ready()) continue;
      this.prepareLights(v, dt);
      this.fx.setScale(this.renderer2.domElement.height, v.camera.fov);
      this.scene.environment = this.envMap2;
      try { this.renderer2.render(this.scene, v.camera); } finally { this.scene.environment = this.envMap; }
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.layoutViews();
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
    const zero = () => this.humans.map(() => ({ steer: 0, throttle: 0, brake: 0, item: false }));
    for (let i = 0; i < n; i++) {
      if (this.state === 'countdown') { this.countdown = 0; this.updateCountdown(0, zero()); }
      this.step(STEP, zero());
      if (i % 12 === 0) this.handleEvents();
    }
  }
}

// Ventana del jugador 2: solo muestra un aviso; la ventana principal dibuja en ella
function bootScreen2() {
  document.body.classList.add('screen2');
  $('loading').classList.add('hidden');
  const wait = $('screen2-wait');
  wait.addEventListener('click', () => { document.documentElement.requestFullscreen?.().catch(() => {}); });
  document.addEventListener('dblclick', () => { document.documentElement.requestFullscreen?.().catch(() => {}); });
  window.__screen2Ready = true;
}

function boot() {
  if (new URLSearchParams(location.search).has('pantalla2')) { bootScreen2(); return; }
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
