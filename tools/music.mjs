// Renderiza la música del juego con su propio sintetizador (Chrome sin interfaz).
// Usos:
//   node tools/music.mjs race|menu segundos salida.wav [pistas,silenciadas]
//       un WAV suelto para escucharlo o analizarlo
//   node tools/music.mjs todos        (npm run musica)
//       renderiza los dos temas enteros y deja assets/musica/<tema>-v<MUSIC_VERSION>.mp3
//       (con MUSICA_WAV=carpeta guarda también los WAV intermedios)
//   node tools/music.mjs comprobar
//       solo avisa si los MP3 presentes no coinciden con MUSIC_VERSION
import puppeteer from 'puppeteer-core';
import { writeFileSync, readdirSync, mkdirSync, mkdtempSync, rmSync, statSync, unlinkSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dirMusica = resolve(root, 'assets/musica');
const TEMAS = ['menu', 'race'];
// Tope de tamaño por tema: si a 128 kbit/s no cabe, se baja la tasa
const MAX_BYTES = 1.2 * 1024 * 1024;
const TASAS = [128, 112, 96, 80];

const { MUSIC_VERSION, songLoop } = await import(pathToFileURL(resolve(root, 'src/music.js')).href);
const [modo = 'race', secs = '30', out = 'musica.wav', mute = ''] = process.argv.slice(2);

// Compara los MP3 de assets/musica con MUSIC_VERSION. Devuelve true si todo cuadra.
function comprobar() {
  let ficheros = [];
  try { ficheros = readdirSync(dirMusica).filter((f) => f.endsWith('.mp3')); } catch { /* no hay carpeta */ }
  let ok = true;
  for (const t of TEMAS) {
    if (!ficheros.includes(`${t}-v${MUSIC_VERSION}.mp3`)) {
      console.warn(`AVISO: falta assets/musica/${t}-v${MUSIC_VERSION}.mp3 (MUSIC_VERSION = ${MUSIC_VERSION}). Ejecuta «npm run musica».`);
      ok = false;
    }
  }
  const viejos = ficheros.filter((f) => !TEMAS.some((t) => f === `${t}-v${MUSIC_VERSION}.mp3`));
  if (viejos.length) console.warn(`AVISO: ficheros de otra versión en assets/musica: ${viejos.join(', ')}`);
  if (ok && !viejos.length) console.log(`Música al día: v${MUSIC_VERSION} (${TEMAS.join(', ')}).`);
  return ok;
}

async function abrir() {
  const b = await puppeteer.launch({
    executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new',
    // el render de un tema entero tarda varios minutos
    protocolTimeout: 1800000,
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  return b;
}

// Renderiza un tema en una pestaña nueva y guarda el WAV (44,1 kHz, 16 bits)
async function renderWav(b, name, seconds, file, muted = []) {
  const p = await b.newPage();
  p.on('pageerror', (e) => console.log('[pageerror]', e.message));
  await p.goto(pathToFileURL(resolve(root, 'index.html')).href);
  await p.waitForFunction(() => window.__renderSong);
  const b64 = await p.evaluate((n, s, m) => window.__renderSong(n, s, m), name, seconds, muted);
  writeFileSync(file, Buffer.from(b64, 'base64'));
  await p.close();
}

function codificar(wav, mp3) {
  for (const kbps of TASAS) {
    execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', wav,
      '-codec:a', 'libmp3lame', '-b:a', `${kbps}k`, '-ac', '2', mp3]);
    const size = statSync(mp3).size;
    if (size <= MAX_BYTES) return { kbps, size };
  }
  throw new Error(`${mp3} no cabe en ${MAX_BYTES} bytes ni a ${TASAS.at(-1)} kbit/s`);
}

if (modo === 'comprobar') {
  process.exit(comprobar() ? 0 : 1);
} else if (modo === 'todos') {
  comprobar();
  console.log(`Renderizando ${TEMAS.join(' y ')} (MUSIC_VERSION = ${MUSIC_VERSION}); tarda varios minutos...`);
  mkdirSync(dirMusica, { recursive: true });
  // MUSICA_WAV=carpeta conserva los WAV intermedios (para analizarlos)
  const keep = process.env.MUSICA_WAV;
  const tmp = keep ? resolve(keep) : mkdtempSync(join(tmpdir(), 'musica-'));
  mkdirSync(tmp, { recursive: true });
  const t0 = Date.now();
  const b = await abrir();
  try {
    // los dos temas a la vez, cada uno en su pestaña
    await Promise.all(TEMAS.map(async (t) => {
      await renderWav(b, t, songLoop(t).seconds, join(tmp, `${t}.wav`));
      console.log(`  ${t}: renderizado en ${((Date.now() - t0) / 1000).toFixed(0)} s`);
    }));
  } finally {
    await b.close();
  }
  for (const t of TEMAS) {
    const { kbps, size } = codificar(join(tmp, `${t}.wav`), join(dirMusica, `${t}-v${MUSIC_VERSION}.mp3`));
    console.log(`  assets/musica/${t}-v${MUSIC_VERSION}.mp3: ${kbps} kbit/s, ${(size / 1024).toFixed(0)} KiB`);
  }
  if (!keep) rmSync(tmp, { recursive: true, force: true });
  // las versiones viejas ya no se usan: se borran para no engordar el repo
  for (const f of readdirSync(dirMusica)) {
    if (f.endsWith('.mp3') && !TEMAS.some((t) => f === `${t}-v${MUSIC_VERSION}.mp3`)) {
      unlinkSync(join(dirMusica, f));
      console.log(`  borrado ${f} (versión antigua)`);
    }
  }
  comprobar();
} else {
  const b = await abrir();
  await renderWav(b, modo, +secs, out, mute ? mute.split(',') : []);
  console.log('guardado', out);
  await b.close();
}
