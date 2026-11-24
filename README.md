# Mega Monstruos

Carreras de monster trucks en 3D para el navegador, al estilo de los juegos de karts. Uso privado.

## Jugar

Abre `index.html` en el navegador (doble clic o `xdg-open index.html`). No hace falta servidor:
el juego ya compilado está en `dist/game.js`.

Controles:

| Tecla | Acción |
| --- | --- |
| ← → / A D | Girar |
| ↑ / W | Acelerar |
| ↓ / S | Frenar y marcha atrás |
| Espacio / Mayús / E | Usar objeto |
| R | Volver a la pista |
| P / Esc | Pausa |
| M | Silencio |

También funciona con mando (stick o cruceta, RT/A acelera, LT/B frena, X/RB objeto, Y vuelve a la pista)
y con botones táctiles en móvil o tableta.

Truco: si aceleras justo después del «2» de la cuenta atrás, sales con turbo.

## Qué hay

- Seis camiones con estadísticas distintas: Trituradora, Megalodón, Escorpión, Mamut, Relámpago y Dragón.
- Cuenta atrás con semáforo, cinco rivales controlados por el ordenador y 1, 3 o 5 vueltas.
- Obstáculos: foso con rampa, troncos que ruedan de lado a lado, túnel oscuro, foso de cocodrilos
  (rampa o puente estrecho), la red que baja y atrapa, bolas de demolición, barro, baches,
  barriles explosivos y coches para aplastar.
- Cajas sorpresa con tres objetos: nitro, supersalto y onda expansiva.
- Récords guardados en el navegador.

## Desarrollo

```bash
npm install
npm run build     # compila src/ en dist/game.js
npm run dev       # recompila al guardar
npm test          # prueba de humo en Chrome sin interfaz (capturas en shots/ y carrera simulada)
node tools/shot.mjs salida.png "g.startRace()" 2000   # captura de depuración
```

Añade `?auto` a la URL para que el ordenador conduzca tu camión (sirve de demostración).

Código en `src/`: `track.js` (trazado y alturas), `trackMesh.js` (mallas de la pista), `trucks.js`
(camiones), `vehicle.js` (física), `ai.js` (rivales), `obstacles.js`, `world.js` (escenario),
`hud.js`, `audio.js` (sonido sintetizado), `main.js` (estados del juego y cámara).
