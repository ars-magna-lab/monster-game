// Optimizaciones de geometría para que el juego vaya mejor en equipos lentos.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Parte una malla grande en trozos por zonas del mapa, para que la cámara
// solo dibuje los trozos que tiene delante.
export function splitByArea(mesh, cell = 160) {
  const geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
  const pos = geo.attributes.position;
  const names = Object.keys(geo.attributes);
  const buckets = new Map();
  for (let t = 0; t < pos.count; t += 3) {
    const cx = (pos.getX(t) + pos.getX(t + 1) + pos.getX(t + 2)) / 3;
    const cz = (pos.getZ(t) + pos.getZ(t + 1) + pos.getZ(t + 2)) / 3;
    const key = Math.floor(cx / cell) + ',' + Math.floor(cz / cell);
    let b = buckets.get(key);
    if (!b) { b = []; buckets.set(key, b); }
    b.push(t);
  }
  if (buckets.size < 2) return [mesh];
  const parts = [];
  for (const tris of buckets.values()) {
    const g = new THREE.BufferGeometry();
    for (const n of names) {
      const a = geo.attributes[n], sz = a.itemSize;
      const arr = new a.array.constructor(tris.length * 3 * sz);
      let o = 0;
      for (const t of tris) for (let v = 0; v < 3; v++) for (let c = 0; c < sz; c++) arr[o++] = a.array[(t + v) * sz + c];
      g.setAttribute(n, new THREE.BufferAttribute(arr, sz, a.normalized));
    }
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, mesh.material);
    m.castShadow = mesh.castShadow;
    m.receiveShadow = mesh.receiveShadow;
    m.renderOrder = mesh.renderOrder;
    m.position.copy(mesh.position); m.quaternion.copy(mesh.quaternion); m.scale.copy(mesh.scale);
    parts.push(m);
  }
  return parts;
}

// Sustituye en un grupo (o la escena) las mallas con muchos triángulos por sus trozos
export function splitBigMeshes(parent, minTris = 3000, cell = 160) {
  for (const m of [...parent.children]) {
    if (!m.isMesh || m.isInstancedMesh || m.isSkinnedMesh) continue;
    const g = m.geometry;
    const tris = (g.index ? g.index.count : g.attributes.position.count) / 3;
    if (tris < minTris) continue;
    const parts = splitByArea(m, cell);
    if (parts.length < 2) continue;
    parent.remove(m);
    for (const p of parts) parent.add(p);
    g.dispose();
  }
}

// Junta las piezas fijas de un objeto (las que no se mueven por separado) en
// una malla por material: muchas menos órdenes de dibujo.
export function mergeStatic(root, keep = new Set()) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const groups = new Map();
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) return;
    for (let p = o; p && p !== root; p = p.parent) if (keep.has(p)) return;
    const g = o.geometry;
    const key = o.material.uuid + '|' + Object.keys(g.attributes).sort().join(',') + '|' + (g.index ? 'i' : 'n') + '|' + (o.castShadow ? 's' : '');
    let e = groups.get(key);
    if (!e) { e = { mat: o.material, cast: o.castShadow, list: [] }; groups.set(key, e); }
    e.list.push(o);
  });
  const m4 = new THREE.Matrix4();
  for (const e of groups.values()) {
    if (e.list.length < 2) continue;
    const geos = e.list.map((o) => {
      const g = o.geometry.clone();
      for (const n of Object.keys(g.morphAttributes)) delete g.morphAttributes[n];
      g.clearGroups();
      m4.multiplyMatrices(inv, o.matrixWorld);
      g.applyMatrix4(m4);
      return g;
    });
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    for (const o of e.list) o.parent.remove(o);
    const m = new THREE.Mesh(merged, e.mat);
    m.castShadow = e.cast;
    root.add(m);
  }
}

// Materiales sencillos (Lambert) en lugar de los físicos (PBR): mucho más baratos
// de dibujar sin tarjeta gráfica. Se guardan los originales para poder volver.
const cheapCache = new WeakMap();
function cheapOf(m) {
  if (!m || !m.isMeshStandardMaterial) return m;
  let c = cheapCache.get(m);
  if (c) return c;
  c = new THREE.MeshLambertMaterial({
    color: m.color, map: m.map, emissive: m.emissive, emissiveMap: m.emissiveMap, emissiveIntensity: m.emissiveIntensity,
    transparent: m.transparent, opacity: m.opacity, side: m.side, vertexColors: m.vertexColors, flatShading: m.flatShading,
    alphaTest: m.alphaTest, depthWrite: m.depthWrite, fog: m.fog,
  });
  // los metales con reflejos quedarían apagados sin el entorno: se aclaran un poco
  // (el color se comparte, así siguen funcionando los cambios de color durante la partida)
  c.color = m.metalness > 0.5 ? m.color.clone().multiplyScalar(1.25) : m.color;
  c.name = m.name;
  cheapCache.set(m, c);
  return c;
}

export function setCheapMaterials(root, on) {
  root.traverse((o) => {
    if (!o.isMesh && !o.isInstancedMesh) return;
    if (on) {
      if (o.userData.richMaterial) return;
      const cheap = Array.isArray(o.material) ? o.material.map(cheapOf) : cheapOf(o.material);
      if (cheap === o.material) return;
      o.userData.richMaterial = o.material;
      o.material = cheap;
    } else if (o.userData.richMaterial) {
      o.material = o.userData.richMaterial;
      delete o.userData.richMaterial;
    }
  });
}
