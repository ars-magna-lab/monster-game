// Servidor local mínimo para jugar con dos ventanas (una por monitor).
// Uso: npm start  (abre el navegador en http://localhost:8080)
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
let port = +(process.env.PORT || 8080);

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = normalize(join(root, path === '/' ? 'index.html' : path));
  if (!file.startsWith(root) || file.includes('node_modules') || file.includes('/.git')) { res.writeHead(403); res.end(); return; }
  try {
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('No encontrado');
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE' && port < 8100) { port++; server.listen(port, '127.0.0.1'); } else { console.error(e.message); process.exit(1); }
});
server.on('listening', () => {
  const url = `http://localhost:${port}/`;
  console.log(`Mega Monstruos en ${url}  (Ctrl+C para parar)`);
  if (!process.argv.includes('--no-open')) spawn('xdg-open', [url], { stdio: 'ignore', detached: true }).on('error', () => {}).unref();
});
server.listen(port, '127.0.0.1');
