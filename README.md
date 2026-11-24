# Mega Monstruos

Carreras de monster trucks en 3D para el navegador, al estilo de los juegos de karts.

## Jugar

Juega en línea en https://monster-game.arsmagnalab.com o abre `index.html` en el navegador (doble clic o `xdg-open index.html`). No hace falta servidor:
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
| F | Ver los fps y la calidad gráfica |

También funciona con mando (stick o cruceta, RT/A acelera, LT/B frena, X/RB objeto, Y vuelve a la pista)
y con botones táctiles en móvil o tableta.

Si el juego va a tirones, elige «Gráficos: Baja» en la elección de camión. En «Auto» (por defecto) el juego
detecta si el ordenador no tiene aceleración gráfica y baja la resolución y las sombras él solo.

Truco: si aceleras justo después del «2» de la cuenta atrás, sales con turbo.

## Dos jugadores

En la portada, elige «2 JUGADORES». Cada uno elige su camión por turnos.

| | Jugador 1 | Jugador 2 |
| --- | --- | --- |
| Conducir | W A S D | Flechas |
| Objeto | Q o Espacio | Intro o Mayús derecha |
| Volver a la pista | R | Retroceso |
| Mando | el primero conectado | el segundo conectado |

Pantalla:

- **Partida** (funciona abriendo `index.html`): arriba/abajo; si la ventana es muy ancha (estirada
  sobre dos monitores), se parte en izquierda/derecha.
- **Jugador 2 en otra ventana** (para dos monitores, cada uno a pantalla completa): arranca el juego
  con `npm start`, que abre `http://localhost:8080`, elige esa opción en la selección de camión,
  arrastra la ventana nueva al segundo monitor y pulsa F11 en cada una. Desde `index.html` como
  fichero no se puede: el navegador no deja que una ventana dibuje en otra.

## Qué hay

- Cinco circuitos, que se eligen en la pantalla del camión:
  - **Valle Monstruo**: el original, con fosos, troncos y cocodrilos.
  - **Pico Helado**: placas de hielo que patinan, bolas de nieve gigantes, muñecos de nieve y agua helada.
  - **Volcán Rugiente**: fosos de lava, rocas rodantes y ceniza.
  - **Selva Salvaje**: mucho barro, troncos, palmeras y un río con cocodrilos.
  - **Gran Ciudad**: asfalto, rascacielos, manchas de aceite, tuberías rodantes y una avenida llena de coches.

- Seis camiones con forma, tamaño y estadísticas distintas: Trituradora, Megalodón, Escorpión, Mamut
  (el más grande), Relámpago (el más pequeño) y Dragón.
- Cuenta atrás con semáforo, cinco rivales controlados por el ordenador y 1, 3 o 5 vueltas.
- Obstáculos: foso con rampa, troncos que ruedan de lado a lado, túnel oscuro, foso de cocodrilos
  (rampa o puente estrecho), la red que baja y atrapa, bolas de demolición, barro, baches,
  barriles explosivos y coches para aplastar.
- Cajas sorpresa con seis objetos: nitro, supersalto, onda expansiva, neumático loco (se lanza hacia
  delante), barril explosivo (se deja detrás) y cohete buscador (va a por el de delante; nunca le toca al primero).
- Récords guardados en el navegador.

## Desarrollo

```bash
npm install
npm start         # servidor local en http://localhost:8080 (necesario para dos ventanas)
npm run build     # compila src/ en dist/game.js
npm run dev       # recompila al guardar
npm test          # prueba de humo (también: node tools/smoke.mjs dos|teclado|carrera) en Chrome sin interfaz (capturas en shots/ y carrera simulada)
node tools/shot.mjs salida.png "g.startRace()" 2000   # captura de depuración
node tools/circuits.mjs [nieve ...]                    # una vuelta simulada y captura de cada circuito
node tools/music.mjs race 30 race.wav [drums,bass]     # renderiza la música (opcional: instrumentos a silenciar)
```

Añade `?auto` a la URL para que el ordenador conduzca tu camión (sirve de demostración).

Código en `src/`: `circuits.js` (trazado, obstáculos y aspecto de cada circuito), `track.js` (geometría y alturas), `trackMesh.js` (mallas de la pista), `trucks.js`
(camiones), `vehicle.js` (física), `ai.js` (rivales), `obstacles.js`, `projectiles.js` (objetos que se lanzan), `world.js` (escenario),
`hud.js`, `audio.js` (sonido sintetizado), `music.js` (canciones), `optimize.js` (trucos de rendimiento), `main.js` (estados del juego y cámara).
