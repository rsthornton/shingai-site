// Small geometry helpers for the drawings. Everything here runs at build time; the page gets plain SVG.

export type Pt = [number, number];

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A triangular arrowhead with its tip at (x, y), pointing along angle `a` (radians). */
export function head(x: number, y: number, a: number, s = 6): string {
  const l: Pt = [x - s * Math.cos(a - 0.42), y - s * Math.sin(a - 0.42)];
  const r: Pt = [x - s * Math.cos(a + 0.42), y - s * Math.sin(a + 0.42)];
  return `M${r1(l[0])} ${r1(l[1])} L${r1(x)} ${r1(y)} L${r1(r[0])} ${r1(r[1])} Z`;
}

/**
 * A straight or curved arrow from `a` to `b`, stopping `gapA`/`gapB` short of each end (to clear a node).
 * `bend` pushes the midpoint sideways for a curve (positive bends left of the direction of travel).
 */
export function arrow(a: Pt, b: Pt, opts: { gapA?: number; gapB?: number; bend?: number; size?: number } = {}) {
  const { gapA = 0, gapB = 0, bend = 0, size = 6 } = opts;
  const dx = b[0] - a[0],
    dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  const ux = dx / len,
    uy = dy / len;
  const c: Pt = [(a[0] + b[0]) / 2 - uy * bend, (a[1] + b[1]) / 2 + ux * bend];
  // trim along the tangent at each end
  const ta = norm([c[0] - a[0], c[1] - a[1]]),
    tb = norm([b[0] - c[0], b[1] - c[1]]);
  const s: Pt = [a[0] + ta[0] * gapA, a[1] + ta[1] * gapA];
  const e: Pt = [b[0] - tb[0] * gapB, b[1] - tb[1] * gapB];
  const d = bend
    ? `M${r1(s[0])} ${r1(s[1])} Q${r1(c[0])} ${r1(c[1])} ${r1(e[0])} ${r1(e[1])}`
    : `M${r1(s[0])} ${r1(s[1])} L${r1(e[0])} ${r1(e[1])}`;
  return { d, head: head(e[0], e[1], Math.atan2(tb[1], tb[0]), size) };
}

function norm(v: Pt): Pt {
  const l = Math.hypot(v[0], v[1]) || 1;
  return [v[0] / l, v[1] / l];
}

/** A polyline through points. */
export const poly = (pts: Pt[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');

/** A circular arc as an open path, angles in degrees, clockwise from 3 o'clock. */
export function arc(cx: number, cy: number, r: number, from: number, to: number): string {
  const p = (deg: number): Pt => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  const [x1, y1] = p(from),
    [x2, y2] = p(to);
  const large = Math.abs(to - from) > 180 ? 1 : 0;
  return `M${r1(x1)} ${r1(y1)} A${r} ${r} 0 ${large} 1 ${r1(x2)} ${r1(y2)}`;
}

/** The arrowhead at the end of `arc(...)`. */
export function arcHead(cx: number, cy: number, r: number, to: number, s = 6): string {
  const t = (to * Math.PI) / 180;
  return head(cx + r * Math.cos(t), cy + r * Math.sin(t), t + Math.PI / 2, s);
}

/** A regular polygon's points attribute. */
export function ngon(cx: number, cy: number, r: number, n: number, rot = -90): string {
  return Array.from({ length: n }, (_, i) => {
    const a = ((rot + (360 / n) * i) * Math.PI) / 180;
    return `${r1(cx + r * Math.cos(a))},${r1(cy + r * Math.sin(a))}`;
  }).join(' ');
}

/** A gear outline with `teeth` teeth. */
export function gear(cx: number, cy: number, r: number, teeth: number, depth = 4): string {
  const pts: Pt[] = [];
  const n = teeth * 4;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = i % 4 < 2 ? r + depth : r;
    pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
  }
  return poly(pts) + ' Z';
}

/** Deterministic pseudo-random numbers, so builds are identical. */
export function rng(seed: number) {
  let s = seed >>> 0;
  return () => (s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32;
}

/** Ground (heat sink) symbol from Odum's energy language, hanging from (x, y). */
export const ground = (x: number, y: number) =>
  `M${x} ${y} V${y + 8} M${x - 10} ${y + 8} H${x + 10} M${x - 6} ${y + 12} H${x + 6} M${x - 2} ${y + 16} H${x + 2}`;
