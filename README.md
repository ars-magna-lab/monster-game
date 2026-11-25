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
| Mayús (mantener) | Derrapar |
| Espacio / E | Usar objeto |
| R | Volver a la pista |
| P / Esc | Pausa |
| M | Silencio |
| F | Ver los fps, la calidad gráfica y los mandos |

También funciona con botones táctiles en móvil o tableta, y con mando:

| Mando | Acción |
| --- | --- |
| Stick o cruceta | Girar |
| A o gatillo derecho | Acelerar |
| B o gatillo izquierdo | Frenar y marcha atrás |
| RB (mantener) | Derrapar |
| X o LB | Usar objeto |
| Y | Volver a la pista |
| Start | Pausa |

Todos los menús se manejan también con el mando o el teclado: stick, cruceta o flechas para moverse
(arriba y abajo cambian de fila; izquierda y derecha cambian el valor), A o Intro para elegir, B o Escape
para volver y Start para empezar o reanudar. Si un mando se desconecta en plena carrera, el juego se pausa.
El mando vibra con los golpes y las caídas si lo admite.

Con mandos de Nintendo Switch (también los de cable de PDP, HORI o PowerA) el juego sigue las letras impresas
en el mando: A acelera y acepta, B frena y vuelve, X usa el objeto e Y devuelve a la pista; ZR acelera, ZL
frena, R derrapa, L usa el objeto y «+» es la pausa. La tecla F enseña, además de los fps, qué mandos ve el juego
y qué botones se están pulsando.

Para jugar en la tele: conecta el ordenador por HDMI y pulsa el botón de pantalla completa de la portada
(también está en el menú de pausa). En una Xbox, abre la dirección del juego en el navegador Edge.

Si el juego va a tirones, elige «Gráficos: Baja» en la elección de camión. En «Auto» (por defecto) el juego
detecta si el ordenador no tiene aceleración gráfica y baja la resolución y las sombras él solo.

La salida: la cámara da una vuelta rápida al camión y después empieza la cuenta 3, 2, 1, ¡YA! Acelera justo
cuando salga el «2» para una salida perfecta (turbo largo); si aceleras más tarde, pero antes del «¡YA!», sales
con un turbo corto. Si aceleras antes del «2», el humo se vuelve negro y el motor se ahoga: te quedas un momento
parado. A los rivales también les pasa de vez en cuando.

El derrape: mantén el botón de derrapar mientras giras a buena velocidad. El camión da un saltito, la trasera
se va y sigue girando hacia ese lado; con la dirección abres o cierras la curva. Cuanto más dura el derrape (y
más cerrado), más carga: las chispas de las ruedas pasan de azules a naranjas y a moradas, y al soltar sales con
un turbo de 0,7, 1,2 o 1,9 segundos. Si sueltas antes de las chispas azules no hay turbo, y se pierde si te
golpean, frenas o caes. Los rivales también derrapan: en Fácil poco, en Normal en muchas curvas y en Difícil
casi siempre y hasta las chispas moradas.

## Dos jugadores

En la portada, elige «2 JUGADORES». Cada uno elige su camión por turnos.

| | Jugador 1 | Jugador 2 |
| --- | --- | --- |
| Conducir | W A S D | Flechas |
| Derrapar | Mayús izquierda | Mayús derecha |
| Objeto | Q o Espacio | Intro o Control derecho |
| Volver a la pista | R | Retroceso |
| Mando | el primero conectado | el segundo conectado |

Pantalla:

- **Partida** (funciona abriendo `index.html`): arriba/abajo; si la ventana es muy ancha (estirada
  sobre dos monitores), se parte en izquierda/derecha.
- **Jugador 2 en otra ventana** (para dos monitores, cada uno a pantalla completa): arranca el juego
  con `npm start`, que abre `http://localhost:8080`, elige esa opción en la selección de camión,
  arrastra la ventana nueva al segundo monitor y pulsa F11 en cada una. Desde `index.html` como
  fichero no se puede: el navegador no deja que una ventana dibuje en otra.

## Campeonato

En la selección de camión, «Modo: Campeonato» encadena los siete circuitos (Valle, Bahía, Selva, Cañón, Nieve,
Ciudad y Volcán) con los mismos camiones, vueltas y rivales. Cada carrera da 10, 7, 5, 3, 2 y 1 puntos; tras cada una
se ve la clasificación general y al final hay podio. Los empates se deciden por victorias y después por el
puesto en la última carrera. «Reiniciar carrera» repite solo la carrera actual; «Abandonar» o «Salir al menú»
terminan el campeonato. Se guardan las copas ganadas y la mejor puntuación. Vale para uno o dos jugadores.

## Qué hay

- Siete circuitos, cada uno con su trazado, su orden de obstáculos y algo que solo tiene él. Se eligen en la pantalla del camión:
  - **Valle Monstruo** (1,9 km): el original, con fosos, troncos, bolas de demolición y cocodrilos.
  - **Pico Helado** (2,5 km): rápido y resbaladizo. Un lago helado lleno de muñecos de nieve, bolas de nieve
    gigantes, un gran salto sobre una grieta de agua helada y una cueva de hielo.
  - **Volcán Rugiente** (2,7 km): el más largo. Tres fosos de lava, rocas rodantes, un túnel largo con
    barriles que estallan en cadena y una recta con lluvia de rocas de fuego: cada una avisa con una diana en
    el suelo antes de caer.
  - **Selva Salvaje** (1,7 km): el más corto y revirado, con mucho barro. Un río con dos puentes colgantes
    (hay que elegir uno), troncos colgantes, dos redes y un templo.
  - **Gran Ciudad** (2,4 km): esquinas de 90° y avenidas largas con muchos turbos, dos cruces con tráfico
    que atraviesa la pista (hay que colarse por un hueco), una zona de obras con tuberías y barriles, coches
    para aplastar y una alcantarilla con cocodrilos.
  - **Cañón Jurásico** (2,2 km): un cañón prehistórico de roca roja. Curvas largas para derrapar, una zona
    revirada con charcas de alquitrán, dos estampidas de tricerátops que cruzan la pista (hay que colarse por
    un hueco), un saurópodo gigante entre cuyas patas hay que pasar, un foso de alquitrán y un túnel por dentro
    del esqueleto de un dinosaurio.
  - **Bahía Pirata** (2,0 km): arena y mar. Olas que suben por la playa y mojan medio camino (el otro lado queda
    seco), un muelle con salto sobre los tiburones, la vuelta al faro, castillos de arena para chafar, los
    cañonazos del barco pirata (cada bala avisa con una diana) y cangrejos gigantes que cruzan de lado.

- Seis camiones con forma, tamaño y estadísticas distintas: Trituradora, Megalodón, Escorpión, Mamut
  (el más grande), Relámpago (el más pequeño) y Dragón.
- Cuenta atrás con semáforo, cinco rivales controlados por el ordenador y 1, 3 o 5 vueltas.
- Obstáculos: foso con rampa, troncos que ruedan de lado a lado, túnel oscuro, foso de cocodrilos
  (rampa o puente estrecho), la red que baja y atrapa, bolas de demolición, barro, baches,
  barriles explosivos y coches para aplastar.
- Cajas sorpresa con seis objetos: nitro, supersalto, onda expansiva, neumático loco (se lanza hacia
  delante), barril explosivo (se deja detrás) y cohete buscador (va a por el de delante; nunca le toca al primero).
- **Modo gigante**, el objeto de superremontada: solo les puede tocar a los que van últimos y lejos del primero,
  y nunca hay dos a la vez. Durante 6 segundos el camión se hace enorme, corre como con turbo, no le afectan
  troncos, bolas, barriles, cohetes, redes ni barro, y chafa a todo el que toca. A los fosos sí se puede caer.
- **Chafar**: si caes encima de otro camión (con una rampa o el supersalto) lo chafas, sea del tamaño que sea.
  Los camiones grandes también chafan a los pequeños si los embisten de frente y bastante más rápido: el Mamut
  a casi todos, el Megalodón y el Dragón al Escorpión y al Relámpago, y la Trituradora al Relámpago. El chafado
  se queda aplastado y parado un momento, y después no lo pueden volver a chafar durante unos segundos.
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
node tools/trazado.mjs                                 # valida los trazados (cierran, no se pisan, cada obstáculo cabe) y los dibuja
node tools/music.mjs race 30 race.wav [drums,bass]     # renderiza la música (opcional: instrumentos a silenciar)
npm run musica            # vuelve a generar los MP3 de assets/musica (unos 7 minutos)
npm run test:pista        # comprueba que el suelo no tapa la pista al dibujar sin tarjeta gráfica
npm run test:memoria      # comprueba que cambiar de circuito no acumula memoria
node tools/mando.mjs      # prueba los menús con un mando simulado
node tools/copa.mjs       # corre un campeonato entero con piloto automático
node tools/salida.mjs     # prueba la salida: motor ahogado, salida perfecta y cámara sin tirones
node tools/derrape.mjs    # prueba el derrape: niveles, turbos, cancelaciones, controles y el de la IA
node tools/remontada.mjs  # prueba el modo gigante (reparto y efecto) y chafar camiones
node tools/bench.mjs      # mide cuánto cuesta cada fotograma sin tarjeta gráfica (tarda: úsalo con el equipo libre)
node tools/circuits.mjs --medir --carreras 3 --vueltas 2 --dif normal   # cómo se defiende la IA y equilibrio de objetos
```

La música se sintetiza en `src/music.js`, pero el juego carga los dos temas ya renderizados de
`assets/musica/` para que suenen al instante. Si cambias `src/music.js`, sube `MUSIC_VERSION` y ejecuta
`npm run musica` (`node tools/music.mjs comprobar` avisa si no coinciden). Abriendo `index.html` como fichero
el navegador no deja descargar los MP3: ahí la música se sintetiza la primera vez (tarda unos minutos) y
queda guardada en el navegador.

Añade `?auto` a la URL para que el ordenador conduzca tu camión (sirve de demostración).

Código en `src/`: `circuits.js` (trazado, obstáculos y aspecto de cada circuito), `track.js` (geometría y alturas), `trackMesh.js` (mallas de la pista), `trucks.js`
(camiones), `vehicle.js` (física), `ai.js` (rivales), `obstacles.js`, `projectiles.js` (objetos que se lanzan), `world.js` (escenario),
`hud.js`, `input.js` (teclado, mandos y táctil), `menunav.js` (menús con foco), `copa.js` (campeonato y podio), `audio.js` (sonido sintetizado),
`music.js` (canciones), `optimize.js` (trucos de rendimiento), `main.js` (estados del juego y cámara).
