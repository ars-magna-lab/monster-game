// Circuitos: trazado, zonas especiales, sitio de cada obstáculo y aspecto (tema).
//
// El trazado es una lista de rectas S(largo) y curvas A(ángulo, radio) (ángulo positivo:
// a la derecha); las dos rectas marcadas solve: 'X' e 'Y' se calculan para que cierre.
// Las zonas y los obstáculos se colocan con (tramo, metros desde su inicio).
// Valle Monstruo usa el esquema de 12 tramos de siempre (standardFeatures y STANDARD_PLACES);
// los demás tienen trazado y obstáculos propios. `rev` es la revisión del trazado: si cambia,
// los récords de ese circuito empiezan de cero (ver recordKey en main.js).
// Comprobar con: node tools/trazado.mjs

const S = (len, extra) => ({ type: 'S', len, ...extra });
const A = (ang, r) => ({ type: 'A', ang, r });

// Ayudantes para describir zonas: foso con rampa de lado a lado, mancha, fila de cajas…
const fullRamp = (at, LIMIT, k, rel, len = 16, h = 3.5) => ({ s0: at(k, rel), s1: at(k, rel + len), d0: -LIMIT, d1: LIMIT, h });
const patch = (at, k, rel, d, rs = 9, rd = 5) => ({ s: at(k, rel), d, rs, rd });
// fila de coches o muñecos, alternando las dos posiciones de siempre
const CRUSH_A = [-8, -3, 2, 7], CRUSH_B = [-5.5, -0.5, 4.5, 9];
const crushRows = (rels) => rels.map((rel, i) => [rel, i % 2 ? CRUSH_B : CRUSH_A]);
// grupo de barriles apretado (a menos de 5 m entre vecinos: si explota uno, explotan todos)
// en un lado de la pista, dejando libre el otro
const barrelGroup = (rel, side, n = 3) => {
  const o = side < 0 ? [-9, -5.5, -7.3] : [5.5, 9, 7.3];
  const rows = [[rel, [o[0], o[1]]], [rel + 3, [o[2]]]];
  if (n > 3) rows.push([rel + 6, [o[0]]]);
  return rows;
};

// Zonas especiales comunes (en metros desde el inicio de cada tramo)
function standardFeatures(at, LIMIT, o = {}) {
  return {
    plateaus: [
      { a: at(2, 115), b: at(2, 160), c: at(2, 270), d: at(2, 315), h: 5 },
      { a: at(9, 130), b: at(9, 172), c: at(9, 275), d: at(9, 318), h: 4.5 },
    ],
    whoops: [{ a: at(9, 65), b: at(9, 65) + 6 * 9, amp: 0.75, wl: 9 }],
    ramps: [
      { s0: at(2, 180), s1: at(2, 196), d0: -LIMIT, d1: LIMIT, h: 3.5 },
      { s0: at(9, 190), s1: at(9, 206), d0: -LIMIT, d1: 3, h: 3.5 },
    ],
    pits: [
      { name: 'foso', s0: at(2, 196), s1: at(2, 214), floor: o.bigPitLiquid ? 1.4 : 0, liquid: o.bigPitLiquid || null },
      { name: 'puente', s0: at(9, 206), s1: at(9, 228), floor: 1.4, liquid: o.liquid || 'water', bridges: [[6.5, 11.5]] },
    ],
    mud: [
      { s: at(9, 18), d: -5, rs: 9, rd: 5 },
      { s: at(9, 34), d: 4, rs: 10, rd: 6 },
      { s: at(9, 52), d: -2, rs: 8, rd: 5.5 },
      ...(o.extraPatches || []).map(([k, rel, d]) => ({ s: at(k, rel), d, rs: 9, rd: 5 })),
    ],
    tunnel: { s0: at(7, 30), s1: at(7, 250) },
  };
}

// Dónde va cada obstáculo (tramo, metros). Todas las listas admiten cualquier número de elementos:
//   turbos [[tramo, m, d]], boxes [[tramo, m]], rollers [{ seg, list: [[m, periodo, fase]], sign }],
//   balls [{ seg, frac | rel, phase }], nets [[tramo, m]], crush [{ seg, rows: [[m, [d…]]], sign }],
//   barrels [{ seg, rows: [[m, [d…]]] }], patchSigns [[tramo, m]].
const STANDARD_PLACES = {
  turbos: [[0, 50, -6], [0, 50, 6], [2, 166, -5], [2, 166, 5], [7, 150, -5], [7, 150, 5], [9, 178, -5], [11, 120, 0]],
  boxes: [[0, 185], [2, 250], [7, 90], [9, 300], [11, 100]],
  rollers: [{ seg: 2, list: [[35, 4.2, 0], [60, 3.6, 0.45], [85, 4.8, 0.2]], sign: [2, 5] }],
  balls: [{ seg: 5, frac: 0.25, phase: 0 }, { seg: 5, frac: 0.8, phase: Math.PI }],
  nets: [[11, 45]],
  crush: [{ seg: 0, rows: [[100, [-8, -3, 2, 7]], [113, [-5.5, -0.5, 4.5, 9]], [126, [-8, -3, 2, 7]], [139, [-5.5, -0.5, 4.5, 9]]], sign: [0, 80] }],
  barrels: [{ seg: 7, rows: [[190, [-8, -2, 4, 10]], [206, [-5, 1, 7]], [222, [-9, -2, 5]]] }],
  patchSigns: [[9, 2]],
};

// Acepta también la forma antigua (un solo elemento en vez de lista)
export function normPlaces(P) {
  const list = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
  return {
    turbos: P.turbos || [],
    boxes: P.boxes || [],
    rollers: list(P.rollers),
    balls: Array.isArray(P.balls) ? P.balls
      : P.balls ? P.balls.at.map((frac, i) => ({ seg: P.balls.seg, frac, phase: i % 2 ? Math.PI : 0 })) : [],
    nets: P.nets || (P.net ? [P.net] : []),
    crush: list(P.crush),
    barrels: list(P.barrels),
    patchSigns: P.patchSigns || (P.patchSign ? [P.patchSign] : []),
  };
}

export const CIRCUITS = [
  {
    id: 'clasico', name: 'Valle Monstruo', short: 'Valle',
    desc: 'El circuito de siempre: fosos, troncos y cocodrilos.',
    layout: [S(230), A(90, 70), S(330), A(90, 65), A(-35, 60), A(70, 60), A(-35, 60), S(290), A(90, 70), S(0, { solve: 'X' }), A(90, 65), S(0, { solve: 'Y' })],
    features: (at, L) => standardFeatures(at, L, { liquid: 'water' }),
    places: STANDARD_PLACES,
    theme: {
      tex: {},
      sky: [0x3d8fe0, 0xcfe6f5], fog: [0xcfe6f5, 260, 1300],
      hemi: [0xcfe8ff, 0x6b5a3a, 1.0], sun: [0xfff1d6, 2.6],
      mountains: 0x7c8f9c, hills: 0x6f9a45, trees: 'mixed', rocks: 0x8a847a,
      tunnel: { inner: 0xb0a89c, outer: 0xb9cf8c }, crocs: true,
      roller: 'log', crush: 'car', patch: 'mud', patchName: '¡BARRO!', rollerName: '¡TRONCOS!', rollerHit: '¡TRONCO!',
    },
  },
  {
    // Rápido y resbaladizo: curvas amplias, rectas largas, lago helado y una grieta que saltar
    id: 'nieve', name: 'Pico Helado', short: 'Nieve', rev: 2,
    desc: 'Rápido y resbaladizo: un lago helado con muñecos de nieve, bolas gigantes y un salto sobre una grieta.',
    //        0       1           2                    3            4       5             6            7            8                    9            10
    layout: [S(330), A(50, 220), S(0, { solve: 'X' }), A(130, 110), S(450), A(-50, 150), A(50, 150), A(90, 120), S(0, { solve: 'Y' }), A(90, 120), S(150)],
    features: (at, L) => ({
      // el lago empieza en plena curva larga y sigue por la recta: hay que entrar ya colocado
      lakes: [{ s0: at(1, 95), s1: at(2, 40) }],
      ramps: [fullRamp(at, L, 4, 200, 20, 4.5)],
      pits: [{ name: 'grieta', s0: at(4, 220), s1: at(4, 246), floor: 1.4, liquid: 'ice' }],
      whoops: [{ a: at(4, 60), b: at(4, 60) + 6 * 9, amp: 0.75, wl: 9 }],
      mud: [
        patch(at, 0, 200, -5), patch(at, 0, 222, 4), patch(at, 0, 244, -2),
        patch(at, 4, 400, 0), patch(at, 5, 70, 5), patch(at, 6, 45, -5), patch(at, 6, 90, 4),
      ],
      tunnel: { s0: at(8, 120), s1: at(8, 220) }, // cueva de hielo corta
    }),
    places: {
      turbos: [[0, 40, -6], [0, 40, 6], [3, 232, -5], [3, 232, 5], [4, 150, 0], [4, 185, 0], [7, 150, 0], [10, 100, -6], [10, 100, 6]],
      boxes: [[0, 110], [3, 125], [4, 330], [8, 240], [6, 120]],
      rollers: [
        { seg: 2, list: [[90, 4.2, 0], [118, 3.6, 0.45]], sign: [2, 60] },
        { seg: 8, list: [[45, 4.0, 0.1], [72, 4.6, 0.6]], sign: [7, 170] },
      ],
      balls: [],
      nets: [[10, 60]],
      crush: [
        { seg: 1, rows: [[115, [-8, -1, 6]], [135, [-5, 2, 9]], [155, [-9, -2, 5]], [175, [-6, 1, 8]]], sign: [1, 45] },
        { seg: 2, rows: [[8, [-7, 0, 7]], [26, [-4, 3]]] },
      ],
      barrels: [{ seg: 8, rows: [...barrelGroup(150, -1), ...barrelGroup(185, 1)] }],
      patchSigns: [[0, 170], [5, 35]],
    },
    theme: {
      tex: {
        id: 'nieve',
        edge: ['#e7edf3', '#d5dee8', '#f4f7fa', '#c9d4df'],
        road: ['#c9d2dc', '#b9c4d0', '#d8e0e8', '#aab6c4', '#e2e8ee', '#9fadbd'],
        ruts: '#6d7e93', curb: ['#2a6fdb', '#f4f4f4'],
        grass: ['#e9eef4', '#dbe3ec', '#f6f8fb', '#cfd9e4', '#ffffff'],
        dirt: ['#d6dee7', '#c4cfdb', '#e6ecf2', '#b7c4d2'],
        barrier: ['#2a6fdb', '#f2f2f2'],
        rock: ['#7d8a99', '#6b7787', '#8f9bab', '#5d6878', '#a2adbb'],
        patch: [[170, 215, 240], [190, 228, 250], [230, 245, 255]],
        water: ['#5d8fb0', 'rgba(235,250,255,0.5)'],
      },
      sky: [0x6f9fd8, 0xe8f0f8], fog: [0xe6eef6, 200, 1050],
      hemi: [0xeef5ff, 0x8d9db3, 1.15], sun: [0xfff6ee, 2.2],
      mountains: 0xe8eef5, hills: 0xdfe7ef, trees: 'snowpine', rocks: 0x7d8a99,
      tunnel: { inner: 0xbfd8ee, outer: 0xeef3f8 }, crocs: false, snow: true,
      roller: 'snowball', crush: 'snowman', patch: 'ice', patchName: '¡HIELO!', rollerName: '¡BOLAS DE NIEVE!', rollerHit: '¡BOLA DE NIEVE!', dust: [0.93, 0.95, 0.98],
    },
  },
  {
    // Saltos y fuego: el más largo, tres fosos de lava, rocas rodantes y un túnel largo con barriles
    id: 'volcan', name: 'Volcán Rugiente', short: 'Volcán', rev: 2,
    desc: 'El más largo: tres fosos de lava que saltar, rocas rodantes, un túnel lleno de barriles y una recta bajo una lluvia de rocas de fuego.',
    //        0       1            2       3             4            5                    6            7                    8            9
    layout: [S(350), A(120, 120), S(430), A(-60, 150), A(150, 100), S(0, { solve: 'X' }), A(60, 130), S(0, { solve: 'Y' }), A(90, 120), S(150)],
    features: (at, L) => ({
      plateaus: [{ a: at(7, 195), b: at(7, 235), c: at(7, 345), d: at(7, 390), h: 5 }],
      whoops: [{ a: at(3, 40), b: at(3, 40) + 6 * 9, amp: 0.75, wl: 9 }],
      ramps: [
        fullRamp(at, L, 2, 330),
        { s0: at(5, 220), s1: at(5, 236), d0: -L, d1: 2, h: 3.5 },
        fullRamp(at, L, 7, 262),
      ],
      pits: [
        // 1: nada más salir del túnel; 2: rampa a la izquierda o puente a la derecha; 3: el gran salto de la meseta
        { name: 'lava1', s0: at(2, 346), s1: at(2, 366), floor: 1.4, liquid: 'lava' },
        { name: 'lava2', s0: at(5, 236), s1: at(5, 258), floor: 1.4, liquid: 'lava', bridges: [[6, 11]] },
        { name: 'lava3', s0: at(7, 278), s1: at(7, 298), floor: 1.4, liquid: 'lava' },
      ],
      mud: [
        patch(at, 1, 60, -4), patch(at, 1, 95, 5), patch(at, 1, 130, -2),
        patch(at, 4, 100, 4), patch(at, 4, 140, -5), patch(at, 4, 180, 0),
      ],
      tunnel: { s0: at(2, 30), s1: at(2, 290) },
      // lluvia de rocas de fuego: recta de 150 m sin nada más (cartel 35 m antes)
      meteors: [{ s0: at(7, 20), s1: at(7, 170), sign: at(7, 20) - 35 }],
    }),
    places: {
      turbos: [[0, 40, -6], [0, 40, 6], [2, 310, 0], [4, 240, 0], [5, 200, -7], [7, 240, 0], [9, 60, -6], [9, 60, 6]],
      boxes: [[0, 110], [2, 410], [4, 30], [7, 185], [8, 90]],
      rollers: [
        { seg: 0, list: [[185, 4.2, 0], [212, 3.6, 0.45]], sign: [0, 150] },
        { seg: 5, list: [[65, 4.0, 0.15], [92, 4.6, 0.55]], sign: [5, 25] },
      ],
      balls: [],
      nets: [],
      crush: [{ seg: 6, rows: crushRows([30, 43, 56]), sign: [5, 330] }],
      barrels: [{ seg: 2, rows: [...barrelGroup(80, -1), ...barrelGroup(130, 1), [180, [-2, 2]], [183, [0]], ...barrelGroup(230, -1, 4)] }],
      patchSigns: [[1, 25], [4, 70]],
    },
    theme: {
      tex: {
        id: 'volcan',
        edge: ['#3b3533', '#2e2927', '#4a423f', '#5a2a1a', '#332d2b'],
        road: ['#7a665c', '#6a564c', '#8a7468', '#5e4c44', '#9a8274', '#54423a'],
        ruts: '#1e1714', curb: ['#ff6a00', '#1d1d1d'],
        grass: ['#35302e', '#2b2725', '#403a37', '#4c2a20', '#2a2523', '#5a3020'],
        dirt: ['#4a3d37', '#3a2f2a', '#57483f', '#2e2420'],
        barrier: ['#1d1d1d', '#ffb000'],
        rock: ['#3d3836', '#2f2b29', '#4a4442', '#262220', '#56504c'],
        patch: [[40, 36, 34], [58, 52, 50], [110, 100, 96]],
        water: ['#ff5a00', 'rgba(255,230,80,0.75)'],
      },
      sky: [0x4a2020, 0xe08048], fog: [0x9a5a3a, 200, 1000],
      hemi: [0xffc4a0, 0x5a4030, 1.35], sun: [0xffcc99, 2.9],
      mountains: 0x3a3230, hills: 0x332c2a, trees: 'dead', rocks: 0x3d3836,
      tunnel: { inner: 0x6a4a3e, outer: 0x3f3634 }, crocs: false, volcano: true,
      roller: 'boulder', crush: 'car', patch: 'mud', patchName: '¡CENIZA!', rollerName: '¡ROCAS!', rollerHit: '¡ROCA!', dust: [0.4, 0.36, 0.34],
    },
  },
  {
    // Técnico y embarrado: el más corto, curvas enlazadas, río con dos puentes y troncos colgantes
    id: 'selva', name: 'Selva Salvaje', short: 'Selva', rev: 2,
    desc: 'Curvas y barro sin parar, troncos colgantes y un río con cocodrilos: ¿qué puente eliges?',
    //        0       1           2            3            4            5                    6           7       8            9            10           11     12          13     14           15           16           17     18          19
    layout: [S(170), A(90, 55), A(-60, 55), A(120, 55), A(-60, 55), S(0, { solve: 'X' }), A(90, 55), S(130), A(-60, 55), A(120, 55), A(-60, 55), S(50), A(90, 55), S(50), A(-50, 55), A(100, 55), A(-50, 55), S(50), A(90, 55), S(0, { solve: 'Y' })],
    features: (at, L) => ({
      // el río: sin rampa, hay que elegir uno de los dos puentes colgantes
      pits: [{ name: 'río', s0: at(7, 45), s1: at(7, 87), floor: 1.4, liquid: 'water', bridges: [[-11.5, -6.5], [6.5, 11.5]] }],
      whoops: [{ a: at(11, 2), b: at(11, 2) + 5 * 9, amp: 0.75, wl: 9 }],
      mud: [
        patch(at, 1, 30, -4), patch(at, 1, 58, 5), patch(at, 2, 30, 4), patch(at, 4, 30, -4),
        patch(at, 8, 30, 3), patch(at, 9, 25, -3), patch(at, 9, 85, 5), patch(at, 10, 30, -4),
        patch(at, 14, 25, 4), patch(at, 15, 30, -4), patch(at, 15, 70, 4), patch(at, 16, 25, 0),
      ],
      tunnel: { s0: at(19, 10), s1: at(19, 95) }, // el templo
    }),
    places: {
      turbos: [[0, 30, -6], [0, 30, 6], [5, 15, 0], [7, 110, 0], [17, 45, 0], [19, 150, -6], [19, 150, 6]],
      boxes: [[0, 155], [7, 120], [12, 43], [19, 125]],
      rollers: [{ seg: 0, list: [[95, 4.2, 0], [120, 3.6, 0.45]], sign: [0, 62] }],
      // troncos colgantes (theme.swing)
      balls: [{ seg: 3, frac: 0.3, phase: 0 }, { seg: 3, frac: 0.78, phase: Math.PI }, { seg: 9, frac: 0.5, phase: Math.PI / 2 }],
      nets: [[5, 50], [13, 30]],
      crush: [{ seg: 17, rows: [[8, CRUSH_A], [21, CRUSH_B]], sign: [16, 10] }],
      barrels: [{ seg: 19, rows: [...barrelGroup(35, -1), ...barrelGroup(65, 1)] }],
      patchSigns: [[0, 165], [8, 5], [14, 2]],
    },
    theme: {
      tex: {
        id: 'selva',
        edge: ['#3f7a2a', '#336b22', '#4c8a33', '#5a4a28', '#2e5f1e'],
        road: ['#8a4e2c', '#7a4226', '#9a5a34', '#6c3a20', '#a86640', '#5e321b'],
        ruts: '#3a1d0e', curb: ['#ffd400', '#2e8b2e'],
        grass: ['#3a7526', '#2f661e', '#478a30', '#2a5c1a', '#55973a'],
        dirt: ['#6b4026', '#5a341e', '#7a4b2e', '#4a2a17'],
        barrier: ['#c8a050', '#7a5a2a'],
        rock: ['#7d7a5e', '#6a684e', '#8f8c6e', '#5a5840', '#9a9878'],
        water: ['#3e6b3a', 'rgba(200,240,190,0.35)'],
      },
      sky: [0x4aa0d0, 0xd8f0d0], fog: [0xc4e2c0, 170, 900],
      hemi: [0xd8ffd0, 0x3a5a22, 1.0], sun: [0xfff4d0, 2.5],
      mountains: 0x4f7a4a, hills: 0x3f7a35, trees: 'jungle', rocks: 0x6f6c52,
      tunnel: { inner: 0xa89a70, outer: 0x5f8f48 }, crocs: true,
      roller: 'log', crush: 'car', patch: 'mud', patchName: '¡BARRO!', rollerName: '¡TRONCOS!', rollerHit: '¡TRONCO!', dust: [0.6, 0.36, 0.22],
      swing: 'log', ballHit: '¡TRONCAZO!',
    },
  },
  {
    // Velocidad entre manzanas: esquinas de 90° cerradas, avenidas largas, obras y alcantarilla
    id: 'ciudad', name: 'Gran Ciudad', short: 'Ciudad', rev: 2,
    desc: 'Avenidas a toda velocidad, esquinas cerradas, obras, aceite, cruces con tráfico y una alcantarilla con cocodrilos.',
    //        0       1          2       3           4       5          6       7          8                    9          10      11          12      13         14                   15         16
    layout: [S(280), A(90, 38), S(160), A(-90, 38), S(140), A(90, 38), S(210), A(90, 38), S(0, { solve: 'X' }), A(90, 38), S(150), A(-90, 38), S(120), A(90, 38), S(0, { solve: 'Y' }), A(90, 38), S(150)],
    features: (at, L) => ({
      ramps: [{ s0: at(8, 330), s1: at(8, 346), d0: -L, d1: 3, h: 3.5 }],
      pits: [{ name: 'alcantarilla', s0: at(8, 346), s1: at(8, 368), floor: 1.4, liquid: 'water', bridges: [[6.5, 11.5]] }],
      // aceite en las frenadas, antes de cada esquina
      mud: [
        patch(at, 0, 255, 4), patch(at, 4, 118, -4), patch(at, 6, 195, 3),
        patch(at, 8, 425, -3), patch(at, 12, 100, 4), patch(at, 14, 205, 0),
      ],
      tunnel: { s0: at(6, 30), s1: at(6, 180) }, // paso subterráneo
      // cruces con tráfico que atraviesa la pista (30 m de recta sin nada más); dir: sentido
      // de los coches (+1 de izquierda a derecha; en el primero empujan hacia la rampa ancha
      // de la alcantarilla, no hacia el puente); speed en m/s; cartel 45 m antes
      crossings: [
        { s0: at(8, 255), s1: at(8, 285), dir: -1, speed: 13, sign: at(8, 225) },
        { s0: at(10, 60), s1: at(10, 90), dir: 1, speed: 15, sign: at(10, 30) },
      ],
    }),
    places: {
      turbos: [
        [0, 40, -6], [0, 40, 6], [2, 20, 0], [4, 30, -5], [4, 30, 5], [6, 10, 0], [8, 30, -6], [8, 30, 6],
        [8, 230, 0], [10, 20, 0], [12, 15, 0], [14, 30, -6], [14, 30, 6], [16, 60, 0],
      ],
      boxes: [[0, 200], [4, 60], [8, 240], [10, 120], [14, 150]],
      // obras: tuberías rodantes, bolas de demolición y barriles
      rollers: [{ seg: 8, list: [[60, 4.2, 0], [85, 3.6, 0.45], [110, 4.8, 0.2]], sign: [8, 26] }],
      balls: [{ seg: 2, rel: 55, phase: 0 }, { seg: 2, rel: 105, phase: Math.PI }],
      nets: [[14, 100]],
      crush: [
        { seg: 0, rows: crushRows([100, 113, 126, 139]), sign: [0, 75] },
        { seg: 12, rows: crushRows([30, 43, 56]), sign: [11, 30] },
      ],
      barrels: [{ seg: 8, rows: [...barrelGroup(160, -1, 4), ...barrelGroup(195, 1, 4)] }],
      patchSigns: [[0, 225], [4, 90], [8, 400], [12, 72], [14, 175]],
    },
    theme: {
      tex: {
        id: 'ciudad',
        edge: ['#9a9a96', '#8a8a86', '#a8a8a4', '#7e7e7a'],
        road: ['#45474b', '#3d3f43', '#4e5054', '#36383b', '#55575b', '#303235'],
        ruts: '#1c1d1f', lanes: true, curb: ['#d6261f', '#f4f4f4'],
        grass: ['#8d8f93', '#84868a', '#96989c', '#7c7e82'], tiles: true,
        dirt: ['#8a7a68', '#7a6a58', '#9a8a78', '#6a5a48'],
        barrier: ['#f2f2f2', '#ffcc00'],
        rock: ['#9a9a9a', '#8a8a8a', '#a8a8a8', '#7a7a7a'],
        patch: [[18, 18, 22], [30, 30, 38], [90, 70, 140]],
        water: ['#3a5a5a', 'rgba(190,230,220,0.3)'],
      },
      sky: [0x4a90e0, 0xd6e6f2], fog: [0xc8d6e2, 260, 1300],
      hemi: [0xdfeaff, 0x5a5a5e, 1.0], sun: [0xfff4e0, 2.5],
      mountains: null, hills: null, trees: 'park', rocks: null, city: true,
      tunnel: { inner: 0xa0a0a0, outer: 0x6f9a55 }, crocs: true, crocName: '¡COCODRILOS EN LA ALCANTARILLA!',
      roller: 'pipe', crush: 'car', patch: 'oil', patchName: '¡ACEITE!', rollerName: '¡TUBERÍAS!', rollerHit: '¡TUBERÍA!', dust: [0.62, 0.62, 0.64],
    },
  },
];

export const circuitById = (id) => CIRCUITS.find((c) => c.id === id) || CIRCUITS[0];

// Texto del cartel y mensaje al caer en el foso del puente
export function pitText(theme, liquid) {
  if (liquid === 'lava') return '¡LAVA!';
  if (liquid === 'ice') return '¡AGUA HELADA!';
  if (liquid === 'water') return theme.crocs ? (theme.crocName || '¡COCODRILOS!') : '¡AL AGUA!';
  return '¡FOSO!';
}
