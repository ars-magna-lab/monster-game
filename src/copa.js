// Modo campeonato: los siete circuitos seguidos, puntos por carrera y podio final.
import * as THREE from 'three';

// orden de los circuitos de la copa
export const COPA = ['clasico', 'playa', 'selva', 'dinos', 'nieve', 'ciudad', 'volcan'];
// puntos por puesto (6 camiones): 28 por carrera
export const POINTS = [10, 7, 5, 3, 2, 1];

export function newCup(humanIds) {
  return { round: 0, ids: [...COPA], humans: [...humanIds], table: {}, awarded: -1 };
}

// Suma una carrera: order son los id de camión en el orden de la tabla de resultados
export function addRace(cup, order) {
  if (cup.awarded === cup.round) return;
  cup.awarded = cup.round;
  order.forEach((id, i) => {
    const e = (cup.table[id] ||= { pts: 0, wins: 0, last: 0, gained: 0 });
    e.gained = POINTS[i] || 0;
    e.pts += e.gained;
    if (i === 0) e.wins++;
    e.last = i + 1;
  });
}

// Clasificación general: puntos; si empatan, más victorias; después, mejor puesto en la última carrera
export function standings(cup) {
  return Object.entries(cup.table)
    .map(([id, e]) => ({ id, ...e }))
    .sort((a, b) => b.pts - a.pts || b.wins - a.wins || a.last - b.last);
}

// Podio de tres alturas para la sala de exposición: devuelve el grupo y dónde va cada camión
export function buildPodium() {
  const group = new THREE.Group();
  const spots = [];
  const blocks = [
    { place: 1, x: 0, h: 3.0, color: 0xffc81e },
    { place: 2, x: -6.6, h: 2.0, color: 0xc9d2de },
    { place: 3, x: 6.6, h: 1.3, color: 0xd0813c },
  ];
  for (const b of blocks) {
    const box = new THREE.Mesh(new THREE.BoxGeometry(6.2, b.h, 6.2), new THREE.MeshStandardMaterial({ color: b.color, metalness: 0.35, roughness: 0.45 }));
    box.position.set(b.x, b.h / 2 - 0.6, 0);
    box.castShadow = true;
    box.receiveShadow = true;
    group.add(box);
    // número en la cara de delante
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    g.font = 'bold 104px Bangers, Impact, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineWidth = 10;
    g.strokeStyle = '#141018';
    g.strokeText(String(b.place), 64, 70);
    g.fillStyle = '#ffffff';
    g.fillText(String(b.place), 64, 70);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const s = Math.min(2.2, b.h * 0.85);
    const num = new THREE.Mesh(new THREE.PlaneGeometry(s, s), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
    num.position.set(b.x, b.h / 2 - 0.6, 3.11);
    group.add(num);
    spots[b.place - 1] = new THREE.Vector3(b.x, b.h - 0.6, 0);
  }
  group.visible = false;
  return { group, spots };
}
