// Optimizaciones de geometría para que el juego vaya mejor en equipos lentos.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { isSharedTexture } from './textures.js';

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

// Reparte un InstancedMesh en varios por zonas del mapa (según dónde está cada instancia),
// para que la cámara descarte las zonas que no ve: uno solo con cientos de árboles
// repartidos por todo el mapa no se puede recortar y se dibuja siempre entero.
export function splitInstancedByArea(im, cell = 200) {
  const n = im.count, a = im.instanceMatrix.array, col = im.instanceColor;
  const buckets = new Map();
  for (let i = 0; i < n; i++) {
    const key = Math.floor(a[i * 16 + 12] / cell) + ',' + Math.floor(a[i * 16 + 14] / cell);
    let b = buckets.get(key);
    if (!b) { b = []; buckets.set(key, b); }
    b.push(i);
  }
  if (buckets.size < 2) return [im];
  const parts = [];
  for (const list of buckets.values()) {
    const m = new THREE.InstancedMesh(im.geometry, im.material, list.length);
    if (col) m.setColorAt(0, new THREE.Color()); // crea el atributo de color
    list.forEach((i, k) => {
      m.instanceMatrix.array.set(a.subarray(i * 16, i * 16 + 16), k * 16);
      if (col) m.instanceColor.array.set(col.array.subarray(i * 3, i * 3 + 3), k * 3);
    });
    m.castShadow = im.castShadow; m.receiveShadow = im.receiveShadow;
    m.renderOrder = im.renderOrder;
    m.computeBoundingSphere();
    parts.push(m);
  }
  return parts;
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

// Dibujando con el procesador: las texturas eligen un solo nivel de detalle (mipmap) en vez
// de mezclar dos (un ~7 % menos por fotograma y apenas se nota)
export function cheapTextureFilter(root) {
  root.traverse((o) => {
    if (!o.material) return;
    for (const m of [].concat(o.material, o.userData.richMaterial || [])) {
      for (const t of [m.map, m.emissiveMap]) {
        if (t && t.minFilter === THREE.LinearMipmapLinearFilter) { t.minFilter = THREE.LinearMipmapNearestFilter; t.needsUpdate = true; }
      }
    }
  });
}

// Libera en la GPU todo lo propio de una escena que ya no se va a usar: geometrías,
// materiales (también los baratos y los originales guardados), texturas exclusivas
// (no las compartidas de la caché) y los mapas de sombras. Antes hay que sacar de la
// escena lo que se reutiliza en otra (camiones, proyectiles...).
export function disposeScene(scene) {
  const geos = new Set(), mats = new Set(), texs = new Set();
  const addMat = (m) => {
    if (!m) return;
    if (Array.isArray(m)) { m.forEach(addMat); return; }
    mats.add(m);
    for (const v of Object.values(m)) if (v && v.isTexture) texs.add(v);
    if (m.uniforms) for (const u of Object.values(m.uniforms)) if (u && u.value && u.value.isTexture) texs.add(u.value);
  };
  scene.traverse((o) => {
    if (o.geometry) geos.add(o.geometry);
    addMat(o.material);
    addMat(o.userData.richMaterial);
    if (o.isInstancedMesh) o.dispose();
    if (o.isLight && o.shadow) o.shadow.dispose();
  });
  for (const g of geos) g.dispose();
  for (const m of mats) m.dispose();
  for (const t of texs) if (t !== scene.environment && !isSharedTexture(t)) t.dispose();
}
