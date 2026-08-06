/**
 * Small cubic-bezier helpers shared by the illustrated SVG components (hero,
 * about page). Used to compute exact path lengths so the `.animate-draw`
 * "line drawing itself in" effect starts fully hidden and finishes exactly
 * on the path's end point, instead of guessing a dash length.
 */

export type Point = { x: number; y: number };

export const cubicPoint = (p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point => {
  const mt = 1 - t;
  return {
    x: mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x,
    y: mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y,
  };
};

export const cubicLength = (p0: Point, p1: Point, p2: Point, p3: Point, steps = 40) => {
  let length = 0;
  let previous = p0;
  for (let step = 1; step <= steps; step += 1) {
    const point = cubicPoint(p0, p1, p2, p3, step / steps);
    length += Math.hypot(point.x - previous.x, point.y - previous.y);
    previous = point;
  }
  return Math.ceil(length);
};

export const cubicPath = (p0: Point, p1: Point, p2: Point, p3: Point) =>
  `M${p0.x} ${p0.y} C${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;
