// Navegación con foco por los menús, para mando y teclado.
//
// Un menú es una lista de filas. Cada fila puede ser:
//   { items: () => [botones] }   arriba/abajo llega a la fila, izquierda/derecha elige botón, A lo pulsa
//   { els: () => [elementos], change: (dir) => …, ok: () => … }
//                                izquierda/derecha cambia su valor (change); A hace ok (o el ok del menú)
// El elemento enfocado lleva la clase «focus»; solo se ve con body.nav-on (ver style.css).

const visible = (el) => !!el && el.getClientRects().length > 0;

export class MenuNav {
  constructor(rows, { row = 0, col = 0, ok = null } = {}) {
    this.allRows = rows;
    this.start = [row, col];
    this.defaultOk = ok;
    this.painted = [];
    this.row = row;
    this.col = col;
  }

  // filas que se ven ahora mismo (p. ej. «Pantalla» solo con dos jugadores)
  rows() {
    return this.allRows.filter((r) => (r.items ? r.items() : r.els()).some(visible));
  }

  items(r) { return r.items ? r.items().filter(visible) : null; }

  current() {
    const rows = this.rows();
    this.row = Math.max(0, Math.min(rows.length - 1, this.row));
    return rows[this.row];
  }

  clear() {
    for (const el of this.painted) el.classList.remove('focus');
    this.painted = [];
  }

  reset() {
    [this.row, this.col] = this.start;
    this.paint();
  }

  move(dy) {
    const n = this.rows().length;
    const r = Math.max(0, Math.min(n - 1, this.row + dy));
    if (r === this.row) return false;
    this.row = r;
    this.paint();
    return true;
  }

  side(dx) {
    const r = this.current();
    if (!r) return false;
    if (r.change) { r.change(dx); this.paint(); return true; }
    const items = this.items(r);
    const c = Math.max(0, Math.min(items.length - 1, this.col + dx));
    if (c === this.col) return false;
    this.col = c;
    this.paint();
    return true;
  }

  ok() {
    const r = this.current();
    if (!r) return;
    if (r.items) { const it = this.items(r); it[Math.min(this.col, it.length - 1)]?.click(); return; }
    (r.ok || this.defaultOk)?.();
  }

  // pone el foco en la fila del elemento pulsado con el ratón o el dedo
  sync(target) {
    const rows = this.rows();
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      if (r.items) {
        const j = this.items(r).findIndex((el) => el.contains(target));
        if (j >= 0) { this.row = i; this.col = j; this.paint(); return; }
      } else if (r.els().some((el) => el.contains(target))) { this.row = i; this.paint(); return; }
    }
  }

  paint() {
    this.clear();
    const r = this.current();
    if (!r) { this.painted = []; return; }
    if (r.items) {
      const it = this.items(r);
      this.col = Math.max(0, Math.min(it.length - 1, this.col));
      this.painted = it.length ? [it[this.col]] : [];
    } else this.painted = r.els();
    for (const el of this.painted) el.classList.add('focus');
  }
}
