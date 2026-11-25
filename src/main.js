// Mega Monstruos: carreras de monster trucks en 3D, para uno o dos jugadores.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Track, LIMIT } from './track.js';
import { buildTrackMeshes } from './trackMesh.js';
import { buildWorld } from './world.js';
import { TRUCKS, buildTruck, animateTruck } from './trucks.js';
import { Vehicle, RADIUS, CRUSH } from './vehicle.js';
import { AIDriver } from './ai.js';
import { Obstacles } from './obstacles.js';
import { Projectiles } from './projectiles.js';
import { FX } from './particles.js';
import { Sound } from './audio.js';
import { Input } from './input.js';
import { MenuNav } from './menunav.js';
import { HUD, fmtTime } from './hud.js';
import { setAnisotropy, checkerTex, softDotTex, setTexTheme } from './textures.js';
import { CIRCUITS, circuitById, pitText } from './circuits.js';
import { renderSong } from './music.js';
import { setCheapMaterials, disposeScene, cheapTextureFilter } from './optimize.js';
import { newCup, addRace, standings, buildPodium } from './copa.js';

const STEP = 1 / 120;
const DIFF = {
  facil: { mul: 0.86, skill: 0.7, label: 'Fácil' },
  normal: { mul: 0.95, skill: 1, label: 'Normal' },
  dificil: { mul: 1.03, skill: 1.5, label: 'Difícil' },
};
const PLAYER_MSG = {
  log: '¡TRONCO!', ball: '¡BOLAZO!', boom: '¡BOOM!', net: '¡ATRAPADO EN LA RED!', crush: '¡CRUNCH!',
  fallPit: '¡AL FOSO!', fallWater: '¡COCODRILOS!', waved: '¡ONDA EXPANSIVA!', nitro: '¡NITRO!', jump: '¡SUPERSALTO!',
  tired: '¡NEUMATAZO!', barreled: '¡BARRILAZO!', rocketed: '¡COHETAZO!', rocketWarn: '¡TE SIGUE UN COHETE!',
  meteor: '¡ROCA DE FUEGO!', car: '¡CUIDADO CON EL TRÁFICO!', superDrift: '¡SUPERDERRAPE!', giant: '¡MODO GIGANTE!',
  crushed: '¡TE HAN CHAFADO!', crushTruck: '¡CHAFADO!',
};
// Chafar a otro camión: cayéndole encima (siempre), siendo el gigante (siempre) o embistiéndole
// siendo bastante más grande y más rápido que él en la dirección del choque.
const CRUSH_RULE = {
  start: 3,       // segundos de carrera sin chafar (en la parrilla van pegados)
  ratio: 1.16,    // tamaño mínimo del grande respecto al pequeño
  ratioMax: 1.5,  // con esta diferencia (o más), el chafado dura lo máximo
  closing: 8,     // m/s mínimos a los que el grande se echa encima del pequeño (más que él)
  push: 4,        // y lo que va él mismo hacia el pequeño
  head: 0.5,      // parte de su velocidad que va hacia el pequeño (0,5: choque a menos de 60° de su rumbo)
  fallH: 1.2,     // el de arriba tiene que venir de por encima del techo (× tamaño del de abajo)
};
// Modo gigante: solo a los últimos, con la carrera ya estirada, y nunca dos a la vez
const GIANT_ROLL = { last: 0.45, second: 0.15, minTime: 12, minGap: 120, minTrucks: 3 };
// Colores de las chispas del derrape (y de la barra de carga) por nivel: humo, azul, naranja y morado
const DRIFT_COLORS = [[0.85, 0.85, 0.85], [0.1, 0.4, 1], [1, 0.4, 0.02], [0.6, 0.1, 1]];
const AI_EVEN = 0.85; // cuánto se igualan las velocidades punta de los camiones de la IA (0 = nada, 1 = del todo)
const ORDINAL = ['PRIMERO', 'SEGUNDO', 'TERCERO', 'CUARTO', 'QUINTO', 'SEXTO'];
const KEYHINT = { solo: 'ESPACIO', p1: 'Q / ESPACIO', p2: 'INTRO' };
// Salida: this.countdown baja de START.total a 0. Primero la vuelta de la cámara
// (START.intro segundos, con «¡PREPARADOS!»), después 3, 2, 1 y «¡YA!» al llegar a 0.
const START = {
  total: 4.7,
  intro: 1.5,
  two: 2.0,          // momento en que sale el «2»
  perfect: 0.4,      // ventana de la salida perfecta tras el «2»
  boostPerfect: 1.8, // turbo de la salida perfecta
  boostGood: 0.8,    // turbo de la buena salida
  stall: 1.2,        // motor ahogado por acelerar antes del «2»
  press: 0.3,        // por encima de esto el gatillo cuenta como pulsado
  aiBoost: 0.35,     // probabilidad de que un camión de la IA salga con turbo
};
const AI_STALL = { facil: 0.12, normal: 0.06, dificil: 0.015 }; // probabilidad de que se le ahogue a la IA
// Tipo de salida según cuándo empezó la pulsación que sigue mantenida (valor de la cuenta en ese momento)
const startKind = (held) => (held === null ? null : held > START.two ? 'stall' : held > START.two - START.perfect ? 'perfect' : 'good');
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

// ¿Dibuja el procesador en vez de la tarjeta gráfica? (portátiles sin aceleración)
function softwareGL() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2') || document.createElement('canvas').getContext('webgl');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    return /swiftshader|llvmpipe|softpipe|software|basic render/i.test(name);
  } catch { return false; }
}

// Calidad gráfica: escala de resolución máxima y sombras
const QUALITY = {
  alta: { scale: 1.75, minScale: 0.8, shadows: 2, aa: true },
  media: { scale: 1, minScale: 0.65, shadows: 1, aa: true },
  baja: { scale: 0.7, minScale: 0.45, shadows: 0, aa: false, cheap: true },
};
const SOFTWARE = softwareGL();
const BOOT_QUALITY = (() => {
  let q = 'auto';
  try { q = JSON.parse(localStorage.getItem('megamonstruos.ajustes') || '{}').quality || 'auto'; } catch { /* sin almacenamiento */ }
  return q;
})();
const levelFor = (q) => (q === 'auto' ? (SOFTWARE ? 'baja' : 'alta') : q);

function makeRenderer(canvas) {
  const aa = QUALITY[levelFor(BOOT_QUALITY)].aa;
  const r = new THREE.WebGLRenderer({ canvas, antialias: aa, powerPreference: 'high-performance' });
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
    // dibujando con el procesador el filtro anisotrópico es carísimo (el camino y el suelo
    // llenan media pantalla): sin él cada fotograma cuesta ~20 % menos
    setAnisotropy(SOFTWARE ? 1 : Math.min(8, this.renderer.capabilities.getMaxAnisotropy()));

    this.envMap = new THREE.PMREMGenerator(this.renderer).fromScene(new RoomEnvironment(), 0.04).texture;
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.5, 4000); // cámara de la portada
    this.sound = new Sound();
    this.input = new Input();
    this.vehicles = TRUCKS.map((def) => new Vehicle(def, null));

    this.settings = loadJSON('megamonstruos.ajustes', { truck: 0, truck2: 1, laps: 3, diff: 'normal', music: true, mode: 1, split: 'auto', quality: 'auto', circuit: 'clasico', cup: false });
    if (this.settings.truck2 === this.settings.truck) this.settings.truck2 = (this.settings.truck + 1) % TRUCKS.length;
    this.records = loadJSON('megamonstruos.records', {});
    this.sound.musicOn = this.settings.music;
    this.laps = this.settings.laps;
    this.perf = { acc: 0, n: 0, fps: 60, scale: 1, shadows: -1 };
    this.loadCircuit(this.settings.circuit);
    this.applyQuality(true);
    this.views = [];
    this.humans = [];
    this.win2 = null;
    this.renderer2 = null;
    this.buildShowroom();
    setCheapMaterials(this.show.scene, !!this.qualityLevel().cheap);
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

  // Construye (o reconstruye) todo lo que depende del circuito
  loadCircuit(id) {
    const c = circuitById(id);
    if (this.circuit === c) return;
    this.circuit = c;
    if (this.scene) {
      this.projectiles.clear();
      // lo que se reutiliza en el circuito nuevo sale antes de liberar la escena vieja:
      // los camiones y los proyectiles (sus geometrías y materiales son compartidos)
      for (const v of this.vehicles) this.scene.remove(v.mesh);
      for (const list of Object.values(this.projectiles.pool)) for (const m of list) this.scene.remove(m);
      disposeScene(this.scene);
    }
    setTexTheme(c.theme.tex);
    const scene = (this.scene = new THREE.Scene());
    scene.environment = this.envMap;
    // intensidad base del entorno en este circuito (el túnel la atenúa a partir de ella)
    this.envBase = scene.environmentIntensity = c.theme.volcano ? 0.3 : 0.45;
    this.track = new Track(c);
    this.trackMeshes = buildTrackMeshes(this.track, scene);
    this.world = buildWorld(scene, this.track);
    this.fx = new FX(scene);
    this.fx.dustColor = c.theme.dust;
    this.obstacles = new Obstacles(this.track, scene, this);
    this.projectiles = new Projectiles(scene, this);
    for (const v of this.vehicles) { v.track = this.track; scene.add(v.mesh); }
    // sombra redonda bajo cada camión (cuando las sombras de verdad están apagadas)
    const blobGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    const blobMat = new THREE.MeshBasicMaterial({ map: softDotTex(), color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false });
    this.blobs = this.vehicles.map(() => { const m = new THREE.Mesh(blobGeo, blobMat.clone()); m.renderOrder = 1; m.visible = false; scene.add(m); return m; });
    // luces del túnel: faros del jugador y luz que "pasa" bajo las lámparas
    this.headlight = new THREE.SpotLight(0xfff4d0, 0, 90, 0.55, 0.5, 1.2);
    scene.add(this.headlight, this.headlight.target);
    this.tunnelColor = new THREE.Color(c.theme.volcano ? 0xff7a30 : 0xffe2a0);
    this.tunnelLight = new THREE.PointLight(this.tunnelColor, 0, 45, 1.4);
    scene.add(this.tunnelLight);
    this.flash = new THREE.PointLight(0xffa040, 0, 60, 1.5);
    scene.add(this.flash);
    this.rings = [];
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 8, 40), new THREE.MeshBasicMaterial({ color: 0xff4fd8, transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = Math.PI / 2;
      m.visible = false;
      scene.add(m);
      this.rings.push({ mesh: m, t: 1 });
    }
    // nieve que cae alrededor de la cámara
    this.snowT = 0;
    // calidad gráfica actual sobre la escena nueva
    if (this.perf.shadows >= 0) {
      const q = this.qualityLevel();
      this.world.setShadowSize(this.perf.shadows === 2 ? 2048 : 1024);
      setCheapMaterials(scene, !!q.cheap);
    }
    this.lowQualityExtras();
    // los camiones vuelven a la parrilla del circuito nuevo
    this.vehicles.forEach((v, i) => v.placeAt(this.track.wrap(-12 - i * 8), (i % 2 ? 5 : -5), 0));
    if (SOFTWARE) cheapTextureFilter(scene);
    this.views = this.views || [];
  }

  // Nieve que cae (Pico Helado) o ascuas que suben (volcán) alrededor de cada cámara
  ambient(dt) {
    const TH = this.track.theme;
    if (!TH.snow && !TH.volcano) return;
    const cams = this.views.length && this.state !== 'title' ? this.views.map((v) => v.camera) : [this.camera];
    this.snowT += dt * (TH.snow ? 70 : 18) * (this.perf.shadows === 0 ? 0.6 : 1);
    while (this.snowT >= 1) {
      this.snowT -= 1;
      for (const cam of cams) {
        const p = cam.position;
        const x = p.x + (Math.random() - 0.5) * 90, z = p.z + (Math.random() - 0.5) * 90;
        if (TH.snow) {
          this.fx.soft.emit({ x, y: p.y + 10 + Math.random() * 18, z, vx: 1.5, vy: -4, vz: 0.6, life: 6, size: 0.35, color: [1, 1, 1], alpha: 0.9, gravity: 0, drag: 0 });
        } else {
          this.fx.glow.emit({ x, y: p.y - 4 + Math.random() * 6, z, vx: (Math.random() - 0.5), vy: 2 + Math.random() * 2, vz: (Math.random() - 0.5), life: 3, size: 0.3, color: [1, 0.45, 0.1], alpha: 0.9, gravity: 0, drag: 0 });
        }
      }
    }
  }

  // Los récords van por circuito y por revisión del trazado (rev > 1: claves nuevas, los
  // récords del trazado antiguo no se mezclan). Valle Monstruo conserva sus claves de siempre.
  circuitTag() {
    const c = this.circuit;
    return c.id + (c.rev > 1 ? '@' + c.rev : '');
  }

  recordKey(defId, laps) {
    return (this.circuit.id === 'clasico' ? '' : this.circuitTag() + '_') + defId + '_' + laps;
  }

  lapRecordKey() {
    return this.circuit.id === 'clasico' ? 'vuelta' : 'vuelta_' + this.circuitTag();
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
    on('btn-fs', () => this.toggleFullscreen());
    on('btn-fs-pause', () => this.toggleFullscreen());
    on('btn-cup-next', () => this.cupNext());
    on('btn-cup-quit', () => this.goTitle());
    on('btn-cup-again', () => this.startCup());
    on('btn-cup-menu', () => this.goTitle());
    document.querySelectorAll('[data-cup]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.cup = b.dataset.cup === '1'; this.refreshOptions(); this.updateSelect();
    }));
    document.querySelectorAll('[data-laps]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.laps = +b.dataset.laps; this.refreshOptions(); this.updateSelect();
    }));
    document.querySelectorAll('[data-diff]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.diff = b.dataset.diff; this.refreshOptions();
    }));
    $('circuit-opts').innerHTML = CIRCUITS.map((c) => `<button data-circuit="${c.id}">${c.short}</button>`).join('');
    document.querySelectorAll('[data-circuit]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click');
      this.settings.circuit = b.dataset.circuit;
      this.loadCircuit(this.settings.circuit);
      this.refreshOptions();
      this.updateSelect();
    }));
    document.querySelectorAll('[data-quality]').forEach((b) => b.addEventListener('click', () => {
      this.sound.play('click'); this.settings.quality = b.dataset.quality; this.applyQuality(true); this.refreshOptions();
    }));
    window.addEventListener('keydown', (e) => { if (e.code === 'KeyF' && !e.repeat) this.toggleFps(); });
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
    const firstGesture = () => {
      this.sound.init();
      if (this.state === 'title' || this.state === 'select') this.sound.musicStart(false);
    };
    window.addEventListener('pointerdown', firstGesture, { once: true });
    window.addEventListener('keydown', firstGesture, { once: true });
    window.addEventListener('beforeunload', () => { if (this.win2 && !this.win2.closed) this.win2.close(); });
    this.buildMenus();
    this.refreshOptions();
  }

  // Menús con foco para mando y teclado
  buildMenus() {
    const els = (...ids) => () => ids.map($);
    const all = (sel) => () => [...document.querySelectorAll(sel)];
    // fila de opciones: izquierda/derecha pulsa el botón de al lado del elegido
    const opt = (sel) => ({
      els: () => [document.querySelector(sel).closest('.opt')],
      change: (dir) => {
        const bs = [...document.querySelectorAll(sel)];
        const i = Math.max(0, bs.findIndex((b) => b.classList.contains('sel')));
        bs[(i + dir + bs.length) % bs.length].click();
      },
    });
    this.menus = {
      title: new MenuNav([
        { items: all('.corner-btns .round') },
        {
          els: () => [this.titleSel === 1 ? $('btn-play2') : $('btn-play')],
          change: () => { this.titleSel = 1 - this.titleSel; this.sound.play('click'); this.updateTitle(); },
          ok: () => { this.sound.init(); this.sound.play('click'); this.goSelect(this.titleSel + 1); },
        },
      ], { row: 1 }),
      select: new MenuNav([
        { els: els('btn-prev', 'btn-next', 'truck-name'), change: (dir) => { this.sound.play('click'); this.changeTruck(dir); } },
        opt('[data-cup]'), opt('[data-circuit]'), opt('[data-laps]'), opt('[data-diff]'), opt('[data-quality]'), opt('[data-split]'),
        { items: els('btn-back', 'btn-start') },
      ], { ok: () => { this.sound.play('click'); this.confirmSelect(); }, col: 1 }),
      pause: new MenuNav(['btn-resume', 'btn-restart', 'btn-fs-pause', 'btn-quit'].map((id) => ({ items: els(id) }))),
      results: new MenuNav([{ items: els('btn-again', 'btn-cup-next') }, { items: els('btn-change', 'btn-menu', 'btn-cup-quit') }]),
      podium: new MenuNav([{ items: els('btn-cup-again', 'btn-cup-menu') }]),
    };
    // el foco solo se ve al manejar con mando o teclado; el ratón o el dedo lo esconden
    const hide = (e) => {
      if (e.type === 'pointermove' && !e.movementX && !e.movementY) return;
      document.body.classList.remove('nav-on');
      if (e.type === 'pointerdown') this.menus[this.menuName()]?.sync(e.target);
    };
    window.addEventListener('pointermove', hide);
    window.addEventListener('pointerdown', hide);
    if (!document.fullscreenEnabled) document.querySelectorAll('.fs-btn').forEach((b) => b.classList.add('hidden'));
    document.addEventListener('fullscreenchange', () => {
      const fs = !!document.fullscreenElement;
      $('btn-fs-pause').textContent = fs ? 'Salir de pantalla completa' : 'Pantalla completa';
      $('btn-fs').classList.toggle('on', fs);
    });
    // si se desconecta en plena carrera un mando que se estaba usando, pausa
    this.input.onPadLost = () => this.pause();
  }

  // menú que se está viendo (o null en carrera)
  menuName() {
    if (this.state === 'finished') return this.resultsT < -1 ? 'results' : null;
    return { title: 'title', select: 'select', paused: 'pause', podium: 'podium' }[this.state] || null;
  }

  toggleFullscreen() {
    try {
      if (document.fullscreenElement) document.exitFullscreen?.()?.catch?.(() => {});
      else document.documentElement.requestFullscreen?.()?.catch?.(() => {});
    } catch { /* el navegador no deja */ }
  }

  refreshOptions() {
    document.querySelectorAll('[data-laps]').forEach((b) => b.classList.toggle('sel', +b.dataset.laps === this.settings.laps));
    document.querySelectorAll('[data-diff]').forEach((b) => b.classList.toggle('sel', b.dataset.diff === this.settings.diff));
    document.querySelectorAll('[data-quality]').forEach((b) => b.classList.toggle('sel', b.dataset.quality === this.settings.quality));
    document.querySelectorAll('[data-circuit]').forEach((b) => b.classList.toggle('sel', b.dataset.circuit === this.settings.circuit));
    $('circuit-desc').textContent = `${this.circuit.name}: ${this.circuit.desc}`;
    // campeonato: la fila de circuito se cambia por el recorrido
    const cup = !!this.settings.cup;
    document.querySelectorAll('[data-cup]').forEach((b) => b.classList.toggle('sel', (b.dataset.cup === '1') === cup));
    document.querySelector('.opt-circuit').classList.toggle('hidden', cup);
    $('circuit-desc').classList.toggle('hidden', cup);
    $('cup-route').classList.toggle('hidden', !cup);
    $('cup-route').textContent = 'Recorrido: ' + newCup([]).ids.map((id) => circuitById(id).short).join(' → ');
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
    this.sound.setMusicOn(!this.sound.musicOn);
    this.settings.music = this.sound.musicOn;
    this.refreshOptions();
  }

  showScreen(name) {
    for (const id of ['title', 'select', 'pause', 'results', 'cupnext', 'podium']) $('screen-' + id).classList.toggle('hidden', id !== name);
    const racing = name === null;
    for (const v of this.views) v.hud.show(racing || name === 'pause');
    $('touch').classList.toggle('hidden', !(racing && this.isTouch && this.humans.length === 1));
    $('btn-pause').classList.toggle('hidden', !racing);
    this.setWindow2Waiting(!(racing || name === 'pause' || name === 'results'));
    for (const [k, m] of Object.entries(this.menus || {})) if (k === name) m.reset(); else m.clear();
  }

  updateTitle() {
    $('btn-play').classList.toggle('sel', this.titleSel === 0);
    $('btn-play2').classList.toggle('sel', this.titleSel === 1);
  }

  goTitle() {
    this.endCup();
    this.sound.engineStop();
    this.sound.musicStart(false);
    this.state = 'title';
    this.setupRace(1);
    this.state = 'title';
    this.showScreen('title');
    this.updateTitle();
  }

  goSelect(mode = this.settings.mode) {
    this.endCup();
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
      this.menus.select.reset();
      return;
    }
    if (this.settings.cup) this.startCup();
    else this.startRace();
  }

  backSelect() {
    if (this.selectStep === 1) { this.selectStep = 0; this.updateSelect(); this.menus.select.reset(); return; }
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
    $('select-keys').textContent = 'J1: W A S D, derrapar Mayús izq., objeto Q · J2: flechas, derrapar Mayús der., objeto Intro · o un mando para cada uno';
    $('btn-start').textContent = two && this.selectStep === 0 ? 'SIGUIENTE' : '¡A CORRER!';
    $('truck-name').textContent = def.name;
    $('truck-name').style.color = hex(def.color);
    $('truck-desc').textContent = def.desc;
    const labels = { speed: 'Velocidad', accel: 'Aceleración', handling: 'Manejo', weight: 'Peso' };
    $('truck-stats').innerHTML = Object.entries(labels).map(([k, l]) =>
      `<div class="stat"><span>${l}</span><div class="bar">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= def.stats[k] ? 'on' : ''}"></i>`).join('')}</div></div>`).join('');
    const rec = this.records[this.recordKey(def.id, this.settings.laps)];
    $('truck-record').textContent = rec ? `Récord con ${this.settings.laps} ${this.settings.laps === 1 ? 'vuelta' : 'vueltas'}: ${fmtTime(rec)}` : '';
    if (this.settings.cup) $('truck-record').textContent = this.cupRecordText();
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
    this.renderer2.setPixelRatio(this.perf.scale);
    this.renderer2.shadowMap.enabled = this.perf.shadows > 0;
    this.renderer2.shadowMap.type = this.perf.shadows === 2 ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
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
    this.projectiles.clear();
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
    this.countdown = START.total;
    this.finishCount = 0;
    this.resultsT = 0;
    this.allDoneT = null;
    for (const l of this.trackMeshes.lights) l.material.color.setHex(0x331111);
    this.buildViews();
    this.lightsWarm = !this.leanLights; // se preparan en el primer dibujo de la carrera
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
    document.body.classList.toggle('two', this.views.filter((v) => !v.external).length === 2);
    if (this.cup) $('cup-banner').textContent = `CARRERA ${this.cup.round + 1} DE ${this.cup.ids.length} · ${this.circuit.name.toUpperCase()}`;
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

  // ¿Le toca el modo gigante? Al último un 45 %, al penúltimo un 15 %; hace falta que la carrera
  // lleve un rato, ir lejos del primero y que no haya otro gigante (ni otro con el objeto en la mano).
  giantRoll(v) {
    const n = this.vehicles.length;
    if (n < GIANT_ROLL.minTrucks || this.raceTime < GIANT_ROLL.minTime) return false;
    if (this.vehicles.some((o) => o.giant > 0 || o.item === 'giant')) return false;
    const lead = Math.max(...this.vehicles.map((o) => o.progress));
    if (lead - v.progress < GIANT_ROLL.minGap) return false;
    const p = v.place === n ? GIANT_ROLL.last : v.place === n - 1 ? GIANT_ROLL.second : 0;
    return Math.random() < p;
  }

  rollItem(v) {
    if (this.giantRoll(v)) return 'giant';
    const t = (v.place - 1) / Math.max(1, this.vehicles.length - 1);
    // los de atrás reciben objetos más fuertes; el cohete nunca le toca al primero
    const w = {
      nitro: 0.26, jump: 0.2 - 0.08 * t, wave: 0.12 + 0.08 * t,
      tire: 0.17, barrel: 0.18 - 0.1 * t, rocket: v.place > 1 ? 0.04 + 0.2 * t : 0,
    };
    let r = Math.random() * Object.values(w).reduce((a, b) => a + b, 0);
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
      if (v.lap === this.laps) { view.hud.big('¡ÚLTIMA VUELTA!', 1.6, 'small'); this.sound.play('final'); this.sound.musicTempo(1.1); }
      else { view.hud.big(`VUELTA ${v.lap}`, 1.2, 'small'); this.sound.play('lap'); }
    }
  }

  playerFinished(p) {
    const view = this.viewOf(p);
    view.hud.big(p.finishPlace === 1 ? '¡GANASTE!' : `¡${ORDINAL[p.finishPlace - 1]}!`, 3, 'small');
    this.sound.play('finish');
    this.fx.confetti(p.x, p.y, p.z, 160);
    const key = this.recordKey(p.def.id, this.laps);
    p.newRecord = !this.records[key] || p.finishTime < this.records[key];
    if (p.newRecord) this.records[key] = p.finishTime;
    const best = p.lapTimes.length ? Math.min(...p.lapTimes) : Infinity;
    const lk = this.lapRecordKey();
    p.newLapRecord = isFinite(best) && (!this.records[lk] || best < this.records[lk]);
    if (p.newLapRecord) this.records[lk] = best;
    saveJSON('megamonstruos.records', this.records);
    if (this.humans.every((h) => h.finished)) this.endRace();
    else if (this.allDoneT === null) this.allDoneT = 45; // el otro jugador tiene 45 s para llegar
  }

  endRace() {
    if (this.state === 'finished') return;
    this.state = 'finished';
    this.resultsT = 3.2;
    this.sound.musicStop();
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
    this.cupResults(rows);
    this.showScreen('results');
    this.sound.musicStart(false);
    for (const v of this.views) if (v.external) v.hud.message(placeOf(v.player) === 1 ? '¡GANASTE!' : `¡${ORDINAL[placeOf(v.player) - 1]}!`, 1e9, 'warn');
  }

  // ------------------------------------------------------------ campeonato
  // Empieza un campeonato con los camiones, vueltas y dificultad elegidos
  startCup() {
    this.leavePodium();
    const ids = [this.settings.truck];
    if (this.settings.mode === 2) ids.push(this.settings.truck2);
    this.cup = newCup(ids.map((i) => TRUCKS[i].id));
    this.cupGo();
  }

  // Botón «Siguiente circuito» (o «Ver podio» tras la última)
  cupNext() {
    const c = this.cup;
    if (!c || this.state !== 'finished') return;
    if (c.round >= c.ids.length - 1) { this.showPodium(); return; }
    c.round++;
    this.cupGo();
  }

  // Va a la carrera actual del campeonato; si hay que cargar el circuito, antes enseña un aviso
  cupGo() {
    const c = this.cup;
    const id = c.ids[c.round];
    if (this.circuit.id === id) { this.startRace(); return; }
    this.sound.engineStop();
    this.state = 'cupnext';
    this.cupWait = 2; // dos fotogramas: el aviso se dibuja antes de la carga, que bloquea
    $('cupnext-round').textContent = `CARRERA ${c.round + 1} DE ${c.ids.length}`;
    $('cupnext-name').textContent = `Siguiente: ${circuitById(id).name}`;
    this.showScreen('cupnext');
  }

  cupLoad() {
    this.loadCircuit(this.cup.ids[this.cup.round]);
    this.startRace();
  }

  // Sale del campeonato (menú, abandonar…) y deja el circuito elegido en la selección
  endCup() {
    this.leavePodium();
    if (!this.cup) return;
    this.cup = null;
    this.cupResults(null);
    if (this.circuit.id !== this.settings.circuit) this.loadCircuit(this.settings.circuit);
  }

  cupRecordText() {
    const n = this.records.copas || 0, best = this.records.copaMejor || 0;
    return `Copas ganadas: ${n}` + (best ? ` · Mejor: ${best} puntos` : '');
  }

  // Tabla de la clasificación general
  cupTableHTML() {
    const c = this.cup;
    const two = c.humans.length === 2;
    return standings(c).map((e, i) => {
      const def = TRUCKS.find((t) => t.id === e.id);
      const h = c.humans.indexOf(e.id);
      const cls = h === 0 ? 'me' : h === 1 ? 'me2' : '';
      const tag = two && h >= 0 ? ` <b class="tag">J${h + 1}</b>` : '';
      return `<tr class="${cls}" data-id="${e.id}"><td>${i + 1}</td><td><i style="background:${hex(def.color)}"></i>${def.name}${tag}</td><td>${e.pts} <small>ptos.</small></td></tr>`;
    }).join('');
  }

  // Resultados de una carrera del campeonato: puntos ganados y clasificación general (rows = null: carrera suelta)
  cupResults(rows) {
    const on = !!(this.cup && rows);
    for (const id of ['btn-again', 'btn-change', 'btn-menu']) $(id).classList.toggle('hidden', on);
    for (const id of ['btn-cup-next', 'btn-cup-quit', 'res-round', 'cup-general']) $(id).classList.toggle('hidden', !on);
    $('screen-results').classList.toggle('cup', on);
    if (!on) return;
    const c = this.cup;
    addRace(c, rows.map((r) => r.v.def.id));
    $('res-round').textContent = `CARRERA ${c.round + 1} DE ${c.ids.length} · ${this.circuit.name.toUpperCase()}`;
    [...$('res-table').rows].forEach((tr, i) => {
      const td = tr.insertCell();
      td.className = 'pts';
      td.textContent = '+' + c.table[rows[i].v.def.id].gained;
    });
    $('cup-table').innerHTML = this.cupTableHTML();
    $('btn-cup-next').textContent = c.round === c.ids.length - 1 ? 'Ver podio' : 'Siguiente circuito';
  }

  // Podio final en la sala de exposición
  showPodium() {
    const c = this.cup;
    const st = standings(c);
    const S = this.show;
    this.sound.engineStop();
    this.state = 'podium';
    if (!this.podium) {
      this.podium = buildPodium();
      S.scene.add(this.podium.group);
    }
    const P = this.podium;
    P.trucks = st.slice(0, 3).map((e, i) => {
      const t = S.trucks[TRUCKS.findIndex((d) => d.id === e.id)];
      P.group.add(t.root);
      t.root.position.copy(P.spots[i]);
      t.root.rotation.set(0, [0.35, 0.75, -0.05][i], 0);
      t.root.visible = true;
      return t;
    });
    P.group.visible = true;
    S.table.visible = false;
    setCheapMaterials(S.scene, !!this.qualityLevel().cheap);
    // rótulos
    const two = c.humans.length === 2;
    const nameOf = (id) => TRUCKS.find((t) => t.id === id).name;
    const placeOf = (id) => st.findIndex((e) => e.id === id) + 1;
    const champ = st[0];
    const h = c.humans.indexOf(champ.id);
    $('screen-podium').classList.toggle('ai', h < 0);
    if (h >= 0) {
      $('podium-title').textContent = `¡CAMPEÓN: JUGADOR ${h + 1}!`;
      $('podium-sub').textContent = `${nameOf(champ.id)} · ${champ.pts} puntos` + (two ? ` · Jugador ${2 - h}: ${placeOf(c.humans[1 - h])}.º` : '');
    } else {
      $('podium-title').textContent = `Campeón: ${nameOf(champ.id)}`;
      $('podium-sub').textContent = two
        ? c.humans.map((id, i) => `Jugador ${i + 1}: ${placeOf(id)}.º`).join(' · ')
        : `Has quedado ${placeOf(c.humans[0])}.º con ${c.table[c.humans[0]].pts} puntos`;
    }
    $('podium-table').innerHTML = this.cupTableHTML();
    // récords: copas ganadas y mejor puntuación de los jugadores
    if (!c.done) {
      c.done = true;
      const best = Math.max(...c.humans.map((id) => c.table[id].pts));
      c.newBest = best > (this.records.copaMejor || 0);
      if (h >= 0) this.records.copas = (this.records.copas || 0) + 1;
      if (c.newBest) this.records.copaMejor = best;
      saveJSON('megamonstruos.records', this.records);
    }
    $('podium-record').textContent = this.cupRecordText() + (c.newBest ? ' · ¡Nuevo récord!' : '');
    // confeti de papel (CSS: no cuesta nada dibujarlo)
    const conf = $('confetti');
    if (!conf.children.length) {
      const cols = ['#ffcc00', '#ff6a00', '#e2231a', '#3ca0ff', '#39e639', '#ff4fd8', '#fff'];
      conf.innerHTML = [...Array(70)].map((_, i) => `<i style="left:${(Math.random() * 100).toFixed(1)}%;background:${cols[i % cols.length]};animation-delay:${(-Math.random() * 6).toFixed(2)}s;animation-duration:${(3.5 + Math.random() * 3).toFixed(2)}s"></i>`).join('');
    }
    this.sound.play('finish');
    this.showScreen('podium');
  }

  leavePodium() {
    const P = this.podium;
    if (!P || !P.group.visible) return;
    for (const t of P.trucks) {
      this.show.table.add(t.root);
      t.root.position.set(0, 0, 0);
      t.root.rotation.set(0, 0, 0);
      t.root.visible = false;
    }
    P.trucks = [];
    P.group.visible = false;
    this.show.table.visible = true;
    this.resize();
  }

  renderPodium(dt) {
    const r = this.renderer;
    const S = this.show, cam = S.cam;
    const W = window.innerWidth, H = window.innerHeight;
    // con el panel a la derecha, el podio queda centrado en el hueco de la izquierda
    const side = W > H * 1.2;
    const pw = side ? Math.min(440, W * 0.4) + W * 0.03 : 0;
    const far = side ? 1 : 1.5;
    cam.position.set(Math.sin(this.time * 0.3) * 4, 7.5 * far, 29 * far);
    if (side) {
      cam.aspect = (W + pw) / H;
      cam.setViewOffset(W + pw, H, pw, 0, W, H);
    } else {
      const c = H * 0.22;
      cam.aspect = W / (H + 2 * c);
      cam.setViewOffset(W, H + 2 * c, 0, 2 * c, W, H);
    }
    cam.lookAt(0, 2.4, 0);
    cam.updateProjectionMatrix();
    this.podium.trucks.forEach((t, i) => {
      t.root.position.y = this.podium.spots[i].y + (i === 0 ? Math.abs(Math.sin(this.time * 3)) * 0.5 : 0);
      animateTruck(t, { wheelSpin: 0, steer: Math.sin(this.time * 1.2 + i) * 0.5, comp: Math.sin(this.time * 4 + i) * 0.05, dt });
    });
    r.setScissorTest(false);
    r.setViewport(0, 0, W, H);
    r.render(S.scene, cam);
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
    this.projectiles.update(dt);
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
        const R2 = RADIUS * (a.size + b.size);
        if (d2 > R2 * R2 || Math.abs(a.y - b.y) > 2.8 * Math.max(a.size, b.size)) continue;
        if (a.squash > 0 || b.squash > 0) continue; // chafado, queda plano: los demás le pasan por encima
        const d = Math.sqrt(d2) || 0.01;
        const nx = dx / d, nz = dz / d;
        const over = R2 - d;
        // el gigante apenas se deja empujar
        const ma = a.mass * (a.giant > 0 ? 4 : 1), mb = b.mass * (b.giant > 0 ? 4 : 1);
        a.x -= nx * over * (mb / (ma + mb)); a.z -= nz * over * (mb / (ma + mb));
        b.x += nx * over * (ma / (ma + mb)); b.z += nz * over * (ma / (ma + mb));
        const vn = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        const cr = this.crushPair(a, b, nx, nz, d / R2);
        if (cr && cr.small.crush(cr.big, cr.dur, cr.how)) {
          // el que chafa sigue casi igual; el chafado se queda donde está, casi parado
          cr.big.vx *= 0.95; cr.big.vz *= 0.95;
          cr.small.vx *= 0.2; cr.small.vz *= 0.2;
          if (cr.fall) { cr.big.vy = Math.max(cr.big.vy, 7); cr.big.onGround = false; } // rebota en el techo
          const sm = cr.small;
          this.fx.sparks(sm.x, sm.y + 1.5 * sm.size, sm.z, 10);
          for (let k = 0; k < 10; k++) {
            const an = (k / 10) * Math.PI * 2;
            this.fx.dust(sm.x + Math.cos(an) * 2 * sm.size, sm.y, sm.z + Math.sin(an) * 2 * sm.size, Math.cos(an) * 14, Math.sin(an) * 14, undefined, 1, 2);
          }
          continue;
        }
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

  // ¿Chafa uno al otro en este contacto? Devuelve { big, small, dur } o null. n: de a hacia b.
  crushPair(a, b, nx, nz, near) {
    if (this.raceTime < CRUSH_RULE.start) return null;
    // el gigante chafa a cualquiera que toque
    if (a.giant > 0 && b.crushable) return { big: a, small: b, dur: CRUSH.max, how: 'giant' };
    if (b.giant > 0 && a.crushable) return { big: b, small: a, dur: CRUSH.max, how: 'giant' };
    // caerle encima: en el aire, bajando y llegando desde más arriba que su techo
    for (const [up, lo] of [[a, b], [b, a]]) {
      if (!up.onGround && up.vy < -1 && up.y - lo.y > CRUSH_RULE.fallH * lo.size && near < 0.9 && lo.crushable) return { big: up, small: lo, dur: CRUSH.max, fall: true, how: 'fall' };
    }
    // embestir siendo bastante más grande y más rápido en la dirección del choque (rozarse en paralelo no vale)
    const [big, small, sg] = a.baseSize >= b.baseSize ? [a, b, 1] : [b, a, -1];
    const ratio = big.baseSize / small.baseSize;
    // al que ya está aturdido (le ha dado un tronco, un barril...) se le empuja, no se le chafa
    if (ratio < CRUSH_RULE.ratio || !small.crushable || small.stun > 0 || big.state !== 'ok' || big.squash > 0 || big.stun > 0) return null;
    // el grande tiene que ir hacia el pequeño (si es el pequeño el que le da por detrás, no le chafa)
    const bigIn = (big.vx * nx + big.vz * nz) * sg, smallIn = (small.vx * nx + small.vz * nz) * sg; // n va de a hacia b
    // y de frente: el choque tiene que ir más o menos hacia donde va el grande (un golpe de lado empuja)
    if (bigIn < CRUSH_RULE.push || bigIn < CRUSH_RULE.head * big.speed || bigIn - smallIn < CRUSH_RULE.closing) return null;
    const k = clamp((ratio - CRUSH_RULE.ratio) / (CRUSH_RULE.ratioMax - CRUSH_RULE.ratio), 0, 1);
    return { big, small, dur: CRUSH.min + (CRUSH.max - CRUSH.min) * k, how: 'size' };
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
    // la IA va casi siempre a fondo, así que entre sus camiones decidía solo la velocidad punta
    // (Escorpión siempre último, Megalodón casi siempre primero): se acercan entre sí
    const avgMax = this.vehicles.reduce((a, v) => a + v.maxSpeed, 0) / this.vehicles.length;
    const racing = this.humans.filter((h) => !h.finished);
    const ref = racing.length ? Math.max(...racing.map((h) => h.progress)) : null;
    for (const v of this.vehicles) {
      if (v.isPlayer) { v.speedMul = 1; continue; }
      const even = base * (1 + AI_EVEN * (avgMax - v.maxSpeed) / v.maxSpeed);
      v.speedMul = ref === null ? even : even * clamp(1 + (ref - v.progress) / 900, 0.92, 1.1);
    }
  }

  handleEvents() {
    for (const v of this.vehicles) {
      const view = this.viewOf(v);
      const isP = !!view;
      const shake = (k) => { if (view) { view.shake = Math.max(view.shake, k); this.input.rumble(view.who, Math.min(1, 0.35 + k * 0.6), 120 + 220 * k); } };
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
          case 'meteor': shake(1); break; // la explosión ya suena (boom)
          case 'car': near('horn'); near('crash', 0.8); shake(0.7); break;
          case 'waved': shake(0.5); break;
          case 'tired': near('crash', 0.8); shake(0.6); break;
          case 'barreled': case 'rocketed': shake(1); break;
          case 'throw': near('throw'); break;
          case 'rocket': near('rocket'); break;
          case 'rocketWarn': if (isP) this.sound.play('wrong'); break;
          case 'net': near('net'); break;
          case 'crush': near('crunch', 0.9); shake(0.3); break;
          case 'giant': near('giant', 0.8); if (view) this.input.rumble(view.who, 0.6, 400); break;
          case 'stomp': near('stomp', 0.35); if (view) this.input.rumble(view.who, 0.15, 60); break;
          case 'crushTruck': near('crunch', 0.8); shake(0.25); break;
          case 'crushed': near('crunch', 0.9); near('bump', 0.6); shake(0.6); break;
          case 'fallPit': case 'fallWater': near('fall', 0.8); if (view) this.input.rumble(view.who, 1, 400); break;
          case 'splash':
            if (v.fall?.pit?.liquid === 'lava') { near('boom', 0.7); this.fx.explosion(v.x, v.y - 1, v.z); }
            else { near('splash'); this.fx.splash(v.x, v.y + 0.5, v.z); }
            break;
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
          case 'driftLevel': if (view) { this.sound.play('drift' + e.level, 0.8); this.input.rumble(view.who, 0.2 + 0.12 * e.level, 90); } break;
          case 'driftBoost': if (isP) this.sound.play('turbo', 0.55 + 0.1 * e.level); break;
        }
        const msg = e.type === 'driftBoost' ? (e.level === 3 ? PLAYER_MSG.superDrift : null) : e.type === 'fallWater' ? pitText(this.track.theme, e.liquid) : e.type === 'log' ? this.track.theme.rollerHit : e.type === 'ball' ? this.track.theme.ballHit || PLAYER_MSG.ball : PLAYER_MSG[e.type];
        if (view && msg) {
          const big = ['fallPit', 'fallWater', 'net', 'ball', 'boom', 'rocketWarn', 'meteor', 'car', 'giant', 'crushed'].includes(e.type);
          view.hud.message(msg, big ? 1.6 : 1.0, big ? 'warn' : '');
        }
      }
      v.events.length = 0;
    }
  }

  // ------------------------------------------------------------ calidad gráfica
  qualityLevel() { return QUALITY[levelFor(this.settings.quality)]; }

  applyQuality(reset) {
    const q = this.qualityLevel();
    const dpr = window.devicePixelRatio || 1;
    if (reset) this.perf.scale = Math.min(dpr, q.scale);
    this.perf.scale = Math.max(q.minScale, Math.min(Math.min(dpr, q.scale), this.perf.scale));
    for (const r of [this.renderer, this.renderer2]) if (r) r.setPixelRatio(this.perf.scale);
    this.lowQualityExtras();
    if (reset) {
      this.setShadows(q.shadows);
      setCheapMaterials(this.scene, !!q.cheap);
      if (this.show) setCheapMaterials(this.show.scene, !!q.cheap);
    }
    if (this.show) this.resize();
  }

  // Calidad baja (dibujo por procesador): cada luz encendida en la escena se calcula en cada
  // píxel aunque su intensidad sea 0 (con todas, el fotograma cuesta un 20–30 % más). Se
  // encienden solo cuando hacen falta, y nunca más de estas combinaciones (cada una necesita
  // sus propios sombreadores): ninguna; los faros y la luz del túnel dentro del túnel (y la luz
  // del túnel hace también de destello de las explosiones); o, fuera del túnel, una sola luz
  // puntual más, que es el destello de una explosión o, si no hay, el resplandor del foso de
  // lava más cercano. Los sombreadores de esas combinaciones se
  // preparan al empezar la carrera, para que no haya tirones al encenderlas la primera vez.
  // Además, en calidad baja las partículas tienen un tamaño máximo en pantalla (FX.setScale).
  lowQualityExtras() {
    const lean = !!this.qualityLevel().cheap;
    this.leanLights = lean;
    this.fx.cheap = lean;
    for (const l of [this.headlight, this.tunnelLight, this.flash, ...this.trackMeshes.glows]) l.visible = !lean;
  }

  // Dibuja la vista una vez con cada combinación de luces en un solo píxel: así se compilan
  // sus sombreadores (con renderer.compile no basta: el dibujo por procesador prepara cada
  // combinación la primera vez que dibuja con ella)
  warmLights(view) {
    const r = this.renderer;
    const combos = [[this.headlight, this.tunnelLight], [this.flash]];
    for (const l of [this.headlight, this.tunnelLight, this.flash, ...this.trackMeshes.glows]) l.visible = false;
    r.setScissorTest(true);
    r.setViewport(0, 0, 1, 1);
    r.setScissor(0, 0, 1, 1);
    for (const ls of combos) {
      for (const l of ls) l.visible = true;
      r.render(this.scene, view.camera);
      for (const l of ls) l.visible = false;
    }
  }

  leanLightsFor(view, inTunnel) {
    this.headlight.visible = this.tunnelLight.visible = inTunnel;
    const boom = this.flash.intensity >= 1;
    this.flash.visible = boom && !inTunnel;
    // dentro del túnel, el destello lo hace la propia luz del túnel (otra luz más sería otra
    // combinación de sombreadores, y prepararla también daba tirones)
    const tl = this.tunnelLight;
    if (inTunnel && boom && this.flash.intensity > tl.intensity) {
      tl.position.copy(this.flash.position);
      tl.intensity = this.flash.intensity;
      tl.color.copy(this.flash.color); tl.distance = this.flash.distance; tl.decay = this.flash.decay;
    } else {
      tl.color.copy(this.tunnelColor); tl.distance = 45; tl.decay = 1.4;
    }
    let near = null, best = 150 * 150;
    if (!inTunnel && !boom) {
      const c = view.camera.position;
      for (const l of this.trackMeshes.glows) {
        const d = (l.position.x - c.x) ** 2 + (l.position.z - c.z) ** 2;
        if (d < best) { best = d; near = l; }
      }
    }
    for (const l of this.trackMeshes.glows) l.visible = l === near;
  }

  // 0 = sin sombras, 1 = sombras sencillas, 2 = sombras suaves
  setShadows(level) {
    if (this.perf.shadows === level) return;
    const changed = this.perf.shadows !== -1 && (this.perf.shadows === 0) !== (level === 0);
    this.perf.shadows = level;
    for (const r of [this.renderer, this.renderer2]) {
      if (!r) continue;
      r.shadowMap.enabled = level > 0;
      r.shadowMap.type = level === 2 ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
      r.shadowMap.needsUpdate = true;
    }
    this.world.setShadowSize(level === 2 ? 2048 : 1024);
    // los materiales se recompilan para quitar o poner las sombras
    if (changed) this.scene.traverse((o) => { if (o.material) for (const m of [].concat(o.material)) m.needsUpdate = true; });
  }

  // En «auto» la resolución sube o baja para mantener la partida fluida
  adaptQuality(dt) {
    const p = this.perf;
    p.acc += dt; p.n++;
    if (p.acc < 1.5) return;
    p.fps = p.n / p.acc;
    p.acc = 0; p.n = 0;
    this.fpsText = `${p.fps.toFixed(0)} fps · ${Math.round(p.scale * 100)}% · sombras ${['no', 'sí', 'suaves'][p.shadows]}`;
    if (this.settings.quality !== 'auto' || !(this.state === 'race' || this.state === 'countdown' || this.state === 'title')) return;
    const q = this.qualityLevel();
    if (p.fps < 40) {
      if (p.scale > q.minScale + 0.01) { p.scale = Math.max(q.minScale, p.scale * (p.fps < 25 ? 0.8 : 0.9)); this.applyQuality(false); }
      else if (p.shadows > 0) this.setShadows(p.shadows - 1);
    } else if (p.fps > 56 && p.scale < Math.min(window.devicePixelRatio || 1, q.scale) - 0.01) {
      p.scale = Math.min(q.scale, p.scale * 1.06);
      this.applyQuality(false);
    }
  }

  toggleFps() {
    if (this.fpsEl) { this.fpsEl.remove(); this.fpsEl = null; return; }
    this.fpsEl = document.createElement('div');
    this.fpsEl.id = 'fps';
    this.fpsEl.textContent = '…';
    document.body.appendChild(this.fpsEl);
  }

  // ------------------------------------------------------------ bucle principal
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const raw = Math.max(0, (now - this.last) / 1000);
    const dt = Math.min(0.05, raw);
    this.last = now;
    this.adaptQuality(Math.min(raw, 0.5));
    this.frame(dt);
  }

  readControls(dt) {
    const two = this.views.length === 2;
    return this.views.map((view) => {
      const pc = this.input.drive(two ? view.who : 'solo');
      // la dirección digital del teclado se suaviza para que no dé tirones; la del stick ya es gradual
      const rate = pc.analog ? 40 : pc.steer === 0 ? 10 : Math.sign(pc.steer) !== Math.sign(view.steerSmooth) ? 9 : 6;
      view.steerSmooth += (pc.steer - view.steerSmooth) * Math.min(1, dt * rate);
      if (Math.abs(view.steerSmooth) < 0.01 && pc.steer === 0) view.steerSmooth = 0;
      return { steer: view.steerSmooth, throttle: pc.throttle, brake: pc.brake, item: pc.item, reset: pc.reset, drift: pc.drift };
    });
  }

  frame(dt) {
    this.frames = (this.frames || 0) + 1;
    this.time += dt;
    const inp = this.input;
    if (this.win2 && this.win2.closed) this.onWindow2Closed();
    inp.padEdges();
    if (this.fpsEl) this.fpsEl.textContent = (this.fpsText || '…') + (inp.padList.length ? '\n' + inp.padDebug() : '');
    this.menuInput(dt);
    // campeonato: el aviso «Siguiente…» se dibuja antes de cargar el circuito
    if (this.state === 'cupnext' && --this.cupWait <= 0) this.cupLoad();
    { const on = !!this.cup && this.state === 'countdown'; if (on !== this.cupBannerOn) { this.cupBannerOn = on; $('cup-banner').classList.toggle('hidden', !on); } }

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
        v.hud.hint(this.state === 'race' && !p.finished ? (p.wrongT > 1.2 ? '¡DIRECCIÓN CONTRARIA!' : p.stuckT > 2 ? `Pulsa ${key}${this.input.padList?.length ? ' (o Y en el mando)' : ''} para volver a la pista` : '') : '');
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
      let thr = this.state === 'countdown' ? Math.max(...ctrls.map((c) => c.throttle)) : this.state === 'finished' ? 0.3 : best.control.throttle;
      // en la parrilla, si se acelera demasiado pronto el motor suena forzado; ahogado, petardea al ralentí
      let rev = this.state === 'countdown' ? thr * 0.6 + (this.startStrain || 0) * (0.45 + Math.random() * 0.3) : 0;
      if (best.stall > 0 && i >= 0) { thr = 0; rev = Math.random() < 0.25 ? 0.25 : -0.3; }
      this.sound.engineUpdate(Math.abs(best.vF) / best.maxSpeed + rev, thr, best.boost > 0 && i >= 0, !best.onGround);
    }
    // chirrido de neumáticos mientras algún jugador derrapa (se apaga en pausa y en los menús)
    this.sound.skid(this.state === 'race' || this.state === 'finished' ? Math.max(0, ...this.humans.map((h) => (h.drift && h.onGround ? 1 : 0))) : 0);

    this.updateRings(dt);
    this.flash.intensity *= Math.exp(-dt * 8);
    this.ambient(dt);
    this.fx.update(dt);
    this.world.update(dt);
    for (const pit of this.track.pits) if (pit.waterMesh) pit.waterMesh.material.map.offset.y += dt * 0.03;
    if (this.state === 'title') this.updateTitleCamera();
    else if (this.state !== 'select') for (const v of this.views) this.updateViewCamera(v, dt);
    if (this.state !== 'select' && this.state !== 'title') for (const v of this.views) v.hud.update(dt);
    this.render(dt);
    inp.endFrame();
  }

  menuInput(dt = 0) {
    const inp = this.input;
    const name = this.menuName();
    const menu = name && this.menus[name];
    if (!menu) inp.navReset();
    const dir = menu ? inp.nav(dt) : {};
    const ok = inp.pressed('Enter', 'NumpadEnter', 'PadA', 'Space');
    const back = inp.pressed('Escape', 'PadB');
    // al manejar con mando o teclado se enseña el foco
    if (menu && (dir.Up || dir.Down || dir.Left || dir.Right || ok || back)) document.body.classList.add('nav-on');
    if (menu) {
      if (dir.Up && menu.move(-1)) this.sound.play('click');
      if (dir.Down && menu.move(1)) this.sound.play('click');
      // las filas que cambian de valor ya suenan; aquí solo el clic al moverse entre botones
      if (dir.Left || dir.Right) { const r = menu.current(); if (menu.side(dir.Left ? -1 : 1) && !r?.change) this.sound.play('click'); }
    }
    switch (this.state) {
      case 'title':
        if (inp.pressed('Digit1', 'Numpad1', 'Digit2', 'Numpad2')) {
          this.titleSel = inp.pressed('Digit2', 'Numpad2') ? 1 : 0;
          this.sound.init(); this.sound.play('click'); this.goSelect(this.titleSel + 1);
        } else if (ok || inp.pressed('PadStart')) {
          this.sound.init();
          if (inp.pressed('PadStart')) { this.sound.play('click'); this.goSelect(this.titleSel + 1); } else menu.ok();
        }
        // enseña los controles del mando en cuanto hay uno conectado
        { const has = !!inp.padList?.length; if (has !== this.padShown) { this.padShown = has; $('pad-controls').classList.toggle('hidden', !has); } }
        break;
      case 'select':
        if (inp.pressed('PadStart')) { this.sound.play('click'); this.confirmSelect(); }
        else if (ok) menu.ok();
        else if (back) this.backSelect();
        break;
      case 'race': case 'countdown':
        if (inp.pressed('KeyP', 'Escape', 'PadStart')) this.pause();
        break;
      case 'paused':
        if (inp.pressed('KeyP', 'PadStart') || back) this.resume();
        else if (ok) menu.ok();
        break;
      case 'podium':
        if (inp.pressed('Enter', 'NumpadEnter', 'PadA', 'PadStart')) menu.ok();
        else if (back) { this.sound.play('click'); this.goTitle(); }
        break;
      case 'finished':
        if (menu) {
          // sin Espacio: es la tecla del objeto y alguien podría seguir pulsándola al llegar
          if (inp.pressed('Enter', 'NumpadEnter', 'PadA', 'PadStart')) menu.ok();
        } else if (this.resultsT > 0.4 && inp.pressed('Enter', 'NumpadEnter', 'PadA', 'PadStart')) this.resultsT = 0.01;
        break;
    }
    if (inp.pressed('KeyM')) this.toggleMute();
    // si el panel no cabe entero, se desplaza hasta la fila enfocada
    if (menu && (dir.Up || dir.Down)) document.querySelector('.focus')?.scrollIntoView?.({ block: 'nearest' });
  }

  updateCountdown(dt, ctrls) {
    const before = this.countdown;
    this.countdown -= dt;
    const c = this.countdown;
    // salida: cuenta cuándo empezó la pulsación que sigue mantenida (si se suelta, vuelve a empezar)
    this.views.forEach((v, i) => {
      if (ctrls[i].throttle > START.press) { if (v.heldSince === null) v.heldSince = c; } else v.heldSince = null;
    });
    this.startStrain = 0;
    if (!this.autopilot) for (const v of this.views) this.startHint(v, dt, c);
    const lights = this.trackMeshes.lights;
    for (const k of [3, 2, 1]) {
      if (before > k && c <= k) {
        for (const v of this.views) v.hud.big(String(k), 0.9);
        this.sound.play('count');
        lights[3 - k].material.color.setHex(0xff2020);
      }
    }
    if (before > START.total - 0.05 && c <= START.total - 0.05) for (const v of this.views) v.hud.message('¡PREPARADOS!', START.intro);
    if (c <= 0) {
      this.state = 'race';
      this.sound.play('go');
      for (const l of lights) l.material.color.setHex(0x22ff44);
      for (const v of this.views) {
        v.hud.big('¡YA!', 1.0, 'go');
        const p = v.player;
        p.rev = 0;
        const kind = this.autopilot ? null : startKind(v.heldSince);
        if (kind === 'stall') {
          p.stall = START.stall;
          v.hud.message('¡MOTOR AHOGADO!', 1.4, 'warn');
          this.sound.play('stall');
        } else if (kind === 'perfect') {
          p.boost = START.boostPerfect;
          v.hud.message('¡SALIDA PERFECTA!', 1.4);
          this.sound.play('perfect');
          this.sound.play('nitro', 0.7);
        } else if (kind === 'good') {
          p.boost = START.boostGood;
          v.hud.message('¡BUENA SALIDA!', 1.2);
          this.sound.play('turbo', 0.8);
        }
      }
      // la IA también: unos salen con turbo y a alguno se le ahoga el motor
      const pStall = AI_STALL[this.settings.diff] ?? AI_STALL.normal;
      for (const v of this.vehicles) {
        if (v.isPlayer) continue;
        const r = Math.random();
        if (r < pStall) v.stall = START.stall;
        else if (r < pStall + START.aiBoost) v.boost = 1.2;
      }
      this.sound.musicStart(true);
    }
    for (const v of this.vehicles) v.syncMesh(dt);
  }

  // Pistas de la salida mientras se acelera en la parrilla: las ruedas patinan y echan humo;
  // si la pulsación empezó antes del «2», el humo va a más y se oscurece (se va a ahogar)
  startHint(view, dt, c) {
    const p = view.player;
    const held = view.heldSince !== null && c > 0;
    p.rev = held ? 1 : 0;
    if (!held) return;
    const early = view.heldSince > START.two;
    const dark = early ? clamp(0.3 + (view.heldSince - c) / 1.2, 0, 1) : 0;
    if (early) this.startStrain = Math.max(this.startStrain, dark);
    const n = (early ? 16 + 22 * dark : 14) * dt;
    const fx = Math.cos(p.th), fz = Math.sin(p.th), sz = p.size;
    for (let i = 0; i < 4 && Math.random() < n - i; i++) {
      const side = (Math.random() < 0.5 ? 1.5 : -1.5) * sz, back = -1.9 * sz;
      this.fx.smoke(p.x + fx * back - fz * side, p.y, p.z + fz * back + fx * side, -fx * 4, -fz * 4, dark, (1.1 + 0.5 * dark) * sz);
    }
  }

  vehicleFx(dt) {
    for (const v of this.vehicles) {
      if (v.state === 'fallen') continue;
      if (v.stall > 0 && Math.random() < dt * 20) {
        // motor ahogado: humo negro a borbotones por los escapes
        const fx = Math.cos(v.th), fz = Math.sin(v.th), side = (Math.random() < 0.5 ? -0.85 : 0.85) * v.size;
        this.fx.smoke(v.x - fx * 2.4 * v.size - fz * side, v.y + 3.2 * v.size, v.z - fz * 2.4 * v.size + fx * side, -fx * 2, -fz * 2, 1, 1.2 * v.size);
      }
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
      if (v.drift && v.onGround) this.driftFx(v, dt);
      if (v.boost > 0) {
        const bx = v.x - Math.cos(v.th) * 2.6, bz = v.z - Math.sin(v.th) * 2.6;
        for (const side of [-0.85, 0.85]) {
          const ex = bx - Math.sin(v.th) * side, ez = bz + Math.cos(v.th) * side;
          this.fx.boostFlame(ex, v.y + 3.6, ez, -Math.cos(v.th) * 10, -Math.sin(v.th) * 10);
        }
      }
    }
  }

  // Derrape: chispas del color del nivel en las dos ruedas traseras (humo claro antes del nivel 1).
  // Los camiones de la IA echan menos y solo si alguna cámara los tiene cerca.
  driftFx(v, dt) {
    let few = 1;
    if (!this.viewOf(v)) {
      let near = Infinity;
      for (const view of this.views) near = Math.min(near, view.camera.position.distanceToSquared(v.mesh.position));
      if (near > 90 * 90) return;
      few = 0.6;
    }
    const lv = v.drift.level;
    const th = v.th + v.driftYaw; // la carrocería se dibuja girada
    const fx = Math.cos(th), fz = Math.sin(th), sz = v.size;
    const rate = (lv ? 32 : 14) * few * (this.fx.cheap ? 0.5 : 1) * dt; // partículas por rueda y fotograma
    for (const side of [-1.5, 1.5]) {
      const x = v.x - fx * 1.9 * sz - fz * side * sz, z = v.z - fz * 1.9 * sz + fx * side * sz;
      for (let i = 0; i < 3 && Math.random() < rate - i; i++) {
        if (lv) this.fx.driftSpark(x, v.y + 0.3, z, v.vx, v.vz, DRIFT_COLORS[lv], lv);
        else this.fx.smoke(x, v.y, z, -fx * 3, -fz * 3, 0, 0.9 * sz);
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
    this.scene.environmentIntensity = this.envBase * (1 - 0.7 * k);
    const fx = Math.cos(p.th), fz = Math.sin(p.th);
    this.headlight.intensity = 260 * k;
    this.headlight.position.set(p.x + fx * 2.5, p.y + 2.6, p.z + fz * 2.5);
    this.headlight.target.position.set(p.x + fx * 30, p.y, p.z + fz * 30);
    this.headlight.target.updateMatrixWorld();
    const lampPhase = Math.cos(((p.s - tr.tunnel.s0 - 6) / 12) * Math.PI * 2);
    this.tunnelLight.intensity = k * (150 + 90 * lampPhase);
    this.tunnelLight.position.set(p.x + fx * 6, tr.baseAt(p.s) + 15, p.z + fz * 6);
    if (this.leanLights) this.leanLightsFor(view, k > 0.002);
    w.focus(p.mesh.position);
  }

  // Luces sin el efecto del túnel (portada): por si se salió al menú desde dentro del túnel
  resetLights() {
    const w = this.world;
    w.hemi.intensity = w.baseHemi;
    w.sun.intensity = w.baseSun;
    this.scene.environmentIntensity = this.envBase;
    this.headlight.intensity = 0;
    this.tunnelLight.intensity = 0;
    if (this.leanLights) for (const l of [this.headlight, this.tunnelLight, this.flash]) l.visible = false;
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
      view.camYaw = p.th;
      const ch = this.chaseTarget(view, p);
      fovTarget = ch.fov;
      const u = clamp((START.total - this.countdown) / START.intro, 0, 1);
      if (u >= 1) {
        // cuenta atrás: la cámara ya está quieta donde va a estar en la carrera
        view.camPos.copy(ch.want);
        view.camLook.copy(ch.look);
      } else {
        // vuelta rápida: empieza delante (por el lado de fuera de la parrilla) y acaba justo en la cámara de carrera
        const e = u * u * u * (u * (u * 6 - 15) + 10); // suave al empezar y al acabar
        const fx = Math.cos(p.th), fz = Math.sin(p.th);
        const tp = this.track.pointAt(p.s);
        const out = Math.abs(p.d) > 1 ? Math.sign(p.d) * Math.sign(-fz * tp.rx + fx * tp.rz || 1) : view.idx === 1 ? -1 : 1;
        const big = 0.55 + 0.45 * p.size;
        const r0 = 7.5 * big * (portrait ? 1.25 : 1);
        const rx = ch.want.x - p.x, rz = ch.want.z - p.z;
        const backD = -(rx * fx + rz * fz), latD = rx * -fz + rz * fx; // cámara de carrera en ejes del camión
        const phi = 0.6 + (Math.PI - 0.6) * e;
        const along = Math.cos(phi) * (r0 + (backD - r0) * e);
        const lat = out * Math.sin(phi) * 6 * big + latD * e;
        const h0 = p.y + 3.2 * big;
        view.camPos.set(p.x + fx * along - fz * lat, h0 + (ch.want.y - h0) * e, p.z + fz * along + fx * lat);
        view.camLook.set(p.x, p.y + 1.8 * big, p.z).lerp(ch.look, e);
      }
    } else if (p.finished && (st === 'race' || this.resultsT < 2.2)) {
      const a = this.time * 0.25 + view.idx * Math.PI;
      view.camPos.lerp(new THREE.Vector3(p.x + Math.cos(a) * 16, p.y + 7, p.z + Math.sin(a) * 16), 1 - Math.exp(-dt * 2));
      view.camLook.set(p.x, p.y + 2, p.z);
    } else {
      if (p.state !== 'fallen') {
        const moving = Math.abs(p.vF) > 1;
        view.camYaw = lerpAng(view.camYaw, moving || p.stun <= 0 ? p.th : view.camYaw, 1 - Math.exp(-dt * 5));
      }
      const ch = this.chaseTarget(view, p);
      const want = ch.want;
      const kxz = 1 - Math.exp(-dt * 9), ky = 1 - Math.exp(-dt * 5);
      view.camPos.x += (want.x - view.camPos.x) * kxz;
      view.camPos.z += (want.z - view.camPos.z) * kxz;
      view.camPos.y += (want.y - view.camPos.y) * ky;
      view.camLook.copy(ch.look);
      fovTarget = ch.fov;
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

  // Dónde quiere ir la cámara de persecución (la salida la usa para acabar justo ahí)
  chaseTarget(view, p) {
    const cam = view.camera;
    const portrait = cam.aspect < 1;
    const sp = Math.abs(p.vF);
    const wide = cam.aspect > 2.6; // media pantalla apaisada: un poco más de altura
    // los camiones grandes llevan la cámara algo más lejos; el gigante, un poco más todavía
    const big = (0.55 + 0.45 * p.size) * (1 + 0.15 * p.giantK);
    const dist = (10.5 + clamp(sp * 0.07, 0, 3.2)) * (portrait ? 1.55 : 1) * big;
    const height = (4.4 + clamp(sp * 0.02, 0, 0.8)) * (portrait ? 1.35 : wide ? 0.9 : 1) * big;
    const baseY = p.state === 'fallen' && p.fall ? Math.max(p.y, p.fall.pit.top - 1) : p.y;
    const want = new THREE.Vector3(p.x - Math.cos(view.camYaw) * dist, baseY + height, p.z - Math.sin(view.camYaw) * dist);
    const q = this.track.project(want.x, want.z, p.idx);
    const g = this.track.surfaceAt(q.s, clamp(q.d, -LIMIT, LIMIT));
    const gh = g.type === 'pit' || g.type === 'water' ? g.top : g.h;
    want.y = Math.max(want.y, gh + 2.2);
    const look = new THREE.Vector3(p.x + Math.cos(view.camYaw) * 5, p.y + 2.4, p.z + Math.sin(view.camYaw) * 5);
    const fov = (portrait ? 78 : wide ? 58 : 68) + clamp(sp / p.maxSpeed, 0, 1.3) * 8 + (p.boost > 0 ? 7 : 0);
    return { want, look, fov };
  }

  updateBlobs() {
    const on = this.perf.shadows === 0 && this.state !== 'title';
    this.vehicles.forEach((v, i) => {
      const b = this.blobs[i];
      b.visible = on && v.mesh.visible && v.state !== 'fallen';
      if (!b.visible) return;
      const g = this.track.surfaceAt(v.s, v.d).h;
      const air = Math.max(0, v.y - g);
      const k = Math.max(0.35, 1 - air / 12);
      b.position.set(v.x, g + 0.08, v.z);
      b.scale.setScalar(6.5 * v.mesh.scale.x * (0.7 + 0.3 * k));
      b.material.opacity = 0.55 * k;
    });
  }

  render(dt) {
    this.updateBlobs();
    const r = this.renderer;
    if (this.state === 'podium') { this.renderPodium(dt); return; }
    if (this.state === 'cupnext') return; // el aviso tapa la pantalla mientras se carga
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
      this.resetLights();
      this.world.focus(this.track.pointAt(this.track.length - 20));
      r.setScissorTest(false);
      r.setViewport(0, 0, window.innerWidth, window.innerHeight);
      this.fx.setScale(r.domElement.height, this.camera.fov);
      r.render(this.scene, this.camera);
      return;
    }
    const W = window.innerWidth, H = window.innerHeight;
    const main = this.views.filter((v) => !v.external);
    if (!this.lightsWarm && this.leanLights) { this.lightsWarm = true; this.prepareLights(this.views[0], dt); this.warmLights(this.views[0]); }
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
    if (w >= 900 || (w >= 600 && h <= 500 && w > h)) {
      // (en móvil apaisado el panel también va a la derecha: ver style.css)
      const P = w >= 900 ? Math.min(470, w * 0.42) + w * 0.03 : w * 0.45 + 16;
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

// Para pruebas: renderiza una canción y la devuelve como WAV en base64
window.__renderSong = async (name, seconds = 30, mute = []) => {
  const buf = await renderSong(name, seconds, 44100, mute);
  const n = buf.length, ch = buf.numberOfChannels;
  const view = new DataView(new ArrayBuffer(44 + n * ch * 2));
  const w = (o, s) => { for (let i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)); };
  w(0, 'RIFF'); view.setUint32(4, 36 + n * ch * 2, true); w(8, 'WAVEfmt ');
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, ch, true);
  view.setUint32(24, buf.sampleRate, true); view.setUint32(28, buf.sampleRate * ch * 2, true);
  view.setUint16(32, ch * 2, true); view.setUint16(34, 16, true); w(36, 'data'); view.setUint32(40, n * ch * 2, true);
  const data = [...Array(ch)].map((_, c) => buf.getChannelData(c));
  let o = 44;
  for (let i = 0; i < n; i++) for (let c = 0; c < ch; c++) { view.setInt16(o, Math.max(-1, Math.min(1, data[c][i])) * 32767, true); o += 2; }
  const bytes = new Uint8Array(view.buffer);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
};

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
