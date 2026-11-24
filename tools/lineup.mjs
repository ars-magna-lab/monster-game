// Foto de grupo de los camiones (para comparar tamaños y formas). Uso: node tools/lineup.mjs salida.png
import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
const out = process.argv[2] || 'shots/camiones.png';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 600000, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1600, height: 700 });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto('file://' + resolve('index.html'));
await p.waitForFunction(() => window.__mm);
await p.evaluate((view) => {
  const g = window.__mm;
  g.state = 'lineup';
  g.showScreen('none');
  document.querySelectorAll('.screen').forEach((e) => e.classList.add('hidden'));
  const s0 = 60;
  const side = view === 'side';
  g.vehicles.forEach((v, i) => { if (side) v.placeAt(s0 - 22 + i * 9, 0, 0); else v.placeAt(s0, -12.5 + i * 5, 0); v.syncMesh?.(0); v.mesh.visible = true; });
  const P = side ? g.track.pointAt(s0, 34) : g.track.pointAt(s0 + 22, 0);
  const L = g.track.pointAt(s0, 0);
  g.render = () => {
    const r = g.renderer;
    r.setScissorTest(false);
    r.setViewport(0, 0, innerWidth, innerHeight);
    g.camera.aspect = innerWidth / innerHeight; g.camera.fov = 45; g.camera.updateProjectionMatrix();
    g.camera.position.set(P.x, side ? 5 : 6, P.z); g.camera.lookAt(L.x, 2, L.z);
    g.world.focus({ x: L.x, y: 0, z: L.z });
    r.render(g.scene, g.camera);
  };
}, process.argv[3] || 'front');
await new Promise((r) => setTimeout(r, 6000));
await p.screenshot({ path: out });
await b.close();
