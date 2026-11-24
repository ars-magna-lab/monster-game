// Mide el coste por fotograma en carrera (Chrome sin gráficos). Uso: node tools/perf.mjs
import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 600000, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 720 });
await p.goto('file://' + resolve('index.html'));
await p.waitForFunction(() => window.__mm);
await p.evaluate(() => {
  const g = window.__mm; g.settings.quality = 'baja'; g.applyQuality(true); g.autopilot = true; g.startRace(); g.countdown = 0.01;
  const T = (g.__t = { sim: 0, render: 0, n: 0 });
  const r0 = g.render.bind(g);
  g.render = (dt) => { const a = performance.now(); r0(dt); T.render += performance.now() - a; T.n++; };
  const f0 = g.frame.bind(g);
  g.frame = (dt) => { const a = performance.now(); f0(dt); T.sim += performance.now() - a; };
});
await new Promise((r) => setTimeout(r, 25000));
console.log(await p.evaluate(() => {
  const g = window.__mm, T = g.__t, info = g.renderer.info;
  let meshes = 0, tris = 0; g.scene.traverse((o) => { if (o.isMesh && o.visible) meshes++; });
  return { frames: T.n, renderMs: +(T.render / T.n).toFixed(1), totalFrameMs: +(T.sim / T.n).toFixed(1), calls: info.render.calls, tris: info.render.triangles, meshes };
}));
await b.close();
