/**
 * A QR-shaped decorative glyph. Not a real, scannable code — it is a
 * deterministic pattern with the three finder squares, drawn so the ticketing
 * mockups read correctly without encoding anything.
 */

// 25 keeps the three 7-module finder squares in realistic proportion.
const MODULES = 25;

/** Small deterministic PRNG so the pattern is identical on server and client. */
const createRandom = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
};

const isFinderZone = (row: number, column: number) =>
  (row < 8 && column < 8) ||
  (row < 8 && column >= MODULES - 8) ||
  (row >= MODULES - 8 && column < 8);

const buildPattern = () => {
  const random = createRandom(20240921);
  const cells: { row: number; column: number }[] = [];

  for (let row = 0; row < MODULES; row += 1) {
    for (let column = 0; column < MODULES; column += 1) {
      if (isFinderZone(row, column)) continue;
      if (random() > 0.52) cells.push({ row, column });
    }
  }

  return cells;
};

const cells = buildPattern();
const finderOrigins = [
  { row: 0, column: 0 },
  { row: 0, column: MODULES - 7 },
  { row: MODULES - 7, column: 0 },
];

type QrGlyphProps = {
  /** Top-left corner in the parent SVG's user space. */
  x: number;
  y: number;
  /** Rendered width and height in user units. */
  size: number;
  color?: string;
  className?: string;
};

export function QrGlyph({
  x,
  y,
  size,
  color = "var(--foreground)",
  className,
}: QrGlyphProps) {
  const unit = size / MODULES;

  return (
    <g transform={`translate(${x} ${y})`} className={className} aria-hidden="true">
      {cells.map((cell) => (
        <rect
          key={`${cell.row}-${cell.column}`}
          x={cell.column * unit}
          y={cell.row * unit}
          width={unit * 0.86}
          height={unit * 0.86}
          rx={unit * 0.18}
          fill={color}
        />
      ))}

      {finderOrigins.map((origin) => (
        <g key={`${origin.row}-${origin.column}`}>
          <rect
            x={origin.column * unit}
            y={origin.row * unit}
            width={unit * 6.86}
            height={unit * 6.86}
            rx={unit * 1.4}
            fill="none"
            stroke={color}
            strokeWidth={unit * 0.9}
          />
          <rect
            x={(origin.column + 2) * unit}
            y={(origin.row + 2) * unit}
            width={unit * 2.86}
            height={unit * 2.86}
            rx={unit * 0.5}
            fill={color}
          />
        </g>
      ))}
    </g>
  );
}
