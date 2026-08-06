import * as React from "react";

import { cubicLength, cubicPath, type Point } from "@/lib/bezier";

/**
 * Hero illustration: three abstract engineers feeding light into a shared,
 * glowing construct — the "small senior team building something that holds
 * up" idea, rendered as artwork rather than a product screenshot. Figures
 * are deliberately faceless geometric blobs in the site's chart-color
 * palette, not a depiction of any real person.
 *
 * Fully decorative and theme-aware (CSS custom properties), so it tracks
 * light/dark automatically. `className` controls sizing from the caller.
 */

type Figure = {
  key: string;
  x: number;
  deskTop: number;
  scale: number;
  color: string;
  entry: Point;
  delay: number;
};

const figures: Figure[] = [
  { key: "left", x: 170, deskTop: 430, scale: 1, color: "var(--chart-1)", entry: { x: 330, y: 254 }, delay: 0 },
  { key: "front", x: 380, deskTop: 460, scale: 1.12, color: "var(--chart-4)", entry: { x: 380, y: 254 }, delay: 150 },
  { key: "right", x: 590, deskTop: 430, scale: 1, color: "var(--chart-3)", entry: { x: 430, y: 254 }, delay: 300 },
];

type TeamBuildIllustrationProps = {
  className?: string;
};

export function TeamBuildIllustration({ className }: TeamBuildIllustrationProps) {
  return (
    <svg
      viewBox="0 0 760 520"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ns-core-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--chart-2)" />
        </linearGradient>
        <clipPath id="ns-core-clip">
          <rect x="300" y="176" width="160" height="78" rx="16" />
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="380" cy="472" rx="260" ry="20" fill="var(--foreground)" opacity="0.08" />

      {/* ---------- The construct — what the team is building ---------- */}
      <rect x="250" y="290" width="260" height="56" rx="14" fill="var(--primary)" opacity="0.14" stroke="var(--primary)" strokeOpacity="0.3" />
      <rect x="275" y="246" width="210" height="52" rx="12" fill="var(--primary)" opacity="0.22" stroke="var(--primary)" strokeOpacity="0.35" />

      <rect x="300" y="176" width="160" height="78" rx="16" fill="url(#ns-core-grad)" stroke="var(--primary)" strokeWidth="1.5" />
      <g clipPath="url(#ns-core-clip)" opacity="0.25" stroke="var(--background)">
        <line x1="300" y1="200" x2="460" y2="200" strokeWidth="1" />
        <line x1="300" y1="230" x2="460" y2="230" strokeWidth="1" />
        <line x1="350" y1="176" x2="350" y2="254" strokeWidth="1" />
        <line x1="410" y1="176" x2="410" y2="254" strokeWidth="1" />
      </g>

      <circle cx="380" cy="215" r="22" fill="var(--primary-foreground)" opacity="0.18" />
      <circle cx="380" cy="215" r="9" fill="var(--chart-2)" opacity="0.9" />

      {[
        { x: 310, y: 186 },
        { x: 450, y: 186 },
        { x: 310, y: 244 },
        { x: 450, y: 244 },
      ].map((corner, index) => (
        <circle
          key={index}
          cx={corner.x}
          cy={corner.y}
          r="3"
          fill={index % 2 === 0 ? "var(--primary)" : "var(--card)"}
          stroke="var(--primary)"
          strokeWidth="1"
          className={index % 2 === 0 ? "animate-blink" : undefined}
          style={index % 2 === 0 ? { animationDelay: `${index * 300}ms` } : undefined}
        />
      ))}

      <line x1="380" y1="176" x2="380" y2="158" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="380" cy="154" r="4" fill="var(--primary)" className="animate-blink" />

      {/* ---------- Connecting light trails — drawn after the construct so they
          are visible plugging into it, and before the figures so each trail
          appears to originate from underneath its owner's laptop. ---------- */}
      {figures.map((figure) => {
        const start = { x: figure.x, y: figure.deskTop - 40 * figure.scale };
        const c1 = { x: figure.x, y: start.y - 80 };
        const c2 = { x: figure.entry.x, y: figure.entry.y + 70 };
        const d = cubicPath(start, c1, c2, figure.entry);
        const length = cubicLength(start, c1, c2, figure.entry);
        return (
          <path
            key={figure.key}
            d={d}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
            className="animate-draw"
            style={
              {
                "--ns-draw-length": length,
                animationDelay: `${figure.delay}ms`,
                animationDuration: "1.6s",
              } as React.CSSProperties
            }
          />
        );
      })}

      {/* Entry points on the construct, pulsing as if energy keeps arriving */}
      {figures.map((figure) => (
        <g key={`${figure.key}-entry`}>
          <circle cx={figure.entry.x} cy={figure.entry.y} r="5" fill="var(--primary)" />
          <circle
            cx={figure.entry.x}
            cy={figure.entry.y}
            r="5"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            className="animate-pulse-ring"
            style={{ animationDelay: `${figure.delay + 400}ms` }}
          />
        </g>
      ))}

      {/* ---------- Engineers ---------- */}
      {figures.map((figure) => {
        const { x, deskTop, scale, color } = figure;
        const deskW = 84 * scale;
        const deskH = 12 * scale;
        const laptopW = 48 * scale;
        const laptopH = 40 * scale;
        const laptopTop = deskTop - laptopH;
        const bodyW = 44 * scale;
        const bodyH = 54 * scale;
        const bodyTop = laptopTop - 46 * scale;
        const headR = 16 * scale;
        const headCy = bodyTop - 12 * scale;

        return (
          <g key={figure.key} className="animate-float" style={{ animationDelay: `${figure.delay}ms` }}>
            {/* Body + head */}
            <rect x={x - bodyW / 2} y={bodyTop} width={bodyW} height={bodyH} rx={bodyW * 0.4} fill={color} opacity="0.85" />
            <circle cx={x} cy={headCy} r={headR} fill={color} opacity="0.95" />
            <circle cx={x - headR * 0.32} cy={headCy} r={headR * 0.09} fill="var(--card)" />
            <circle cx={x + headR * 0.32} cy={headCy} r={headR * 0.09} fill="var(--card)" />

            {/* Desk */}
            <rect x={x - deskW / 2} y={deskTop} width={deskW} height={deskH} rx="4" fill="var(--card)" stroke="var(--border)" />

            {/* Laptop screen with tiny "code" lines */}
            <rect
              x={x - laptopW / 2}
              y={laptopTop}
              width={laptopW}
              height={laptopH}
              rx="5"
              fill="var(--card)"
              stroke="var(--border)"
            />
            <rect x={x - laptopW / 2 + 6} y={laptopTop + 8} width={laptopW * 0.5} height="4" rx="2" fill="var(--chart-2)" opacity="0.8" />
            <rect x={x - laptopW / 2 + 6} y={laptopTop + 17} width={laptopW * 0.65} height="4" rx="2" fill={color} opacity="0.7" />
            <rect x={x - laptopW / 2 + 6} y={laptopTop + 26} width={laptopW * 0.32} height="4" rx="2" fill="var(--muted-foreground)" opacity="0.5" />
          </g>
        );
      })}

      {/* ---------- Ambient tech particles ---------- */}
      <text
        x="52"
        y="140"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-mono, monospace)"
        fill="var(--muted-foreground)"
        opacity="0.4"
        className="animate-float"
        style={{ animationDelay: "200ms" }}
      >
        {"</>"}
      </text>

      <g className="animate-float" style={{ animationDelay: "900ms" }} transform="translate(650 96)">
        <path
          d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <circle cx="14" cy="16" r="3.5" fill="var(--primary)" opacity="0.7" />
      </g>

      {/* Idea bulb — vertical filament lines, not crossing, so it doesn't read as a cancel mark. */}
      <g className="animate-float" style={{ animationDelay: "500ms" }} transform="translate(150 56)">
        <circle cx="0" cy="-2" r="10" fill="none" stroke="var(--chart-4)" strokeWidth="1.5" opacity="0.55" />
        <line x1="-3" y1="-4" x2="-3" y2="2" stroke="var(--chart-4)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
        <line x1="0" y1="-6" x2="0" y2="2" stroke="var(--chart-4)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
        <line x1="3" y1="-4" x2="3" y2="2" stroke="var(--chart-4)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
        <rect x="-4" y="8" width="8" height="5" rx="1.5" fill="none" stroke="var(--chart-4)" strokeWidth="1.5" opacity="0.55" />
        <line x1="-3" y1="15" x2="3" y2="15" stroke="var(--chart-4)" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
      </g>

      {[
        { x: 96, y: 220, delay: 0 },
        { x: 640, y: 180, delay: 400 },
        { x: 610, y: 320, delay: 800 },
        { x: 110, y: 340, delay: 1200 },
      ].map((particle, index) => (
        <circle
          key={index}
          cx={particle.x}
          cy={particle.y}
          r="2"
          fill="var(--primary)"
          opacity="0.5"
          className="animate-blink"
          style={{ animationDelay: `${particle.delay}ms` }}
        />
      ))}
    </svg>
  );
}
