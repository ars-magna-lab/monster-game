// Renderiza la música del juego a WAV para escucharla o analizarla.
// Uso: node tools/music.mjs race|menu segundos salida.wav
import puppeteer from 'puppeteer-core';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [name = 'race', secs = '30', out = 'musica.wav', mute = ''] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto('file://' + resolve(root, 'index.html'));
await p.waitForFunction(() => window.__renderSong);
const b64 = await p.evaluate((n, s, m) => window.__renderSong(n, s, m ? m.split(',') : []), name, +secs, mute);
writeFileSync(out, Buffer.from(b64, 'base64'));
console.log('guardado', out);
await b.close();
