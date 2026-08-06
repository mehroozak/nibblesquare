import * as React from "react";

import { cubicLength, cubicPath, type Point } from "@/lib/bezier";

/**
 * About-hero illustration: three abstract teammates huddled around a shared,
 * glowing idea. Deliberately a different composition from the homepage hero
 * (engineers feeding a product they're building) — this one is about who the
 * team is and how they think together, not what they ship. Same faceless,
 * color-blob figure language as the rest of the site for continuity.
 */

type Figure = {
  key: string;
  headCx: number;
  headCy: number;
  headR: number;
  color: string;
  entry: Point;
  delay: number;
};

const orb = { cx: 240, cy: 148, r: 34 };

const figures: Figure[] = [
  { key: "left", headCx: 108, headCy: 220, headR: 16, color: "var(--chart-1)", entry: { x: 222, y: 180 }, delay: 0 },
  { key: "right", headCx: 372, headCy: 220, headR: 16, color: "var(--chart-3)", entry: { x: 258, y: 180 }, delay: 220 },
  { key: "front", headCx: 240, headCy: 258, headR: 18, color: "var(--chart-4)", entry: { x: 240, y: 184 }, delay: 110 },
];

type AboutHeroIllustrationProps = {
  className?: string;
};

export function AboutHeroIllustration({ className }: AboutHeroIllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 380"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ns-about-orb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--chart-2)" />
        </linearGradient>
      </defs>

      <ellipse cx="240" cy="344" rx="172" ry="18" fill="var(--foreground)" opacity="0.06" />

      {/* The shared idea */}
      <circle cx={orb.cx} cy={orb.cy} r={orb.r + 16} fill="var(--primary-foreground)" opacity="0.14" />
      <circle cx={orb.cx} cy={orb.cy} r={orb.r} fill="url(#ns-about-orb)" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx={orb.cx} cy={orb.cy} r="12" fill="var(--chart-2)" opacity="0.85" />
      {[
        { x: orb.cx - 22, y: orb.cy - 22 },
        { x: orb.cx + 22, y: orb.cy - 22 },
      ].map((particle, index) => (
        <circle
          key={index}
          cx={particle.x}
          cy={particle.y}
          r="3"
          fill="var(--primary)"
          className="animate-blink"
          style={{ animationDelay: `${index * 500}ms` }}
        />
      ))}

      {/* Trails from each teammate's mind to the shared idea */}
      {figures.map((figure) => {
        const start = { x: figure.headCx, y: figure.headCy - figure.headR - 2 };
        const c1 = { x: figure.headCx, y: (start.y + figure.entry.y) / 2 };
        const c2 = { x: figure.entry.x, y: (start.y + figure.entry.y) / 2 };
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
                animationDuration: "1.4s",
              } as React.CSSProperties
            }
          />
        );
      })}

      {figures.map((figure) => (
        <g key={`${figure.key}-entry`}>
          <circle cx={figure.entry.x} cy={figure.entry.y} r="4" fill="var(--primary)" />
          <circle
            cx={figure.entry.x}
            cy={figure.entry.y}
            r="4"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            className="animate-pulse-ring"
            style={{ animationDelay: `${figure.delay + 350}ms` }}
          />
        </g>
      ))}

      {/* Teammates */}
      {figures.map((figure) => {
        const bodyW = figure.headR * 2.3;
        const bodyH = figure.headR * 3.3;
        const bodyTop = figure.headCy + figure.headR * 0.5;
        return (
          <g key={figure.key} className="animate-float" style={{ animationDelay: `${figure.delay}ms` }}>
            <rect
              x={figure.headCx - bodyW / 2}
              y={bodyTop}
              width={bodyW}
              height={bodyH}
              rx={bodyW * 0.42}
              fill={figure.color}
              opacity="0.88"
            />
            <circle cx={figure.headCx} cy={figure.headCy} r={figure.headR} fill={figure.color} opacity="0.95" />
            <circle cx={figure.headCx - figure.headR * 0.32} cy={figure.headCy} r={figure.headR * 0.09} fill="var(--card)" />
            <circle cx={figure.headCx + figure.headR * 0.32} cy={figure.headCy} r={figure.headR * 0.09} fill="var(--card)" />
          </g>
        );
      })}

      {/* Ambient */}
      <text
        x="36"
        y="90"
        fontSize="24"
        fontWeight="700"
        fontFamily="var(--font-mono, monospace)"
        fill="var(--muted-foreground)"
        opacity="0.35"
        className="animate-float"
        style={{ animationDelay: "600ms" }}
      >
        {"{ }"}
      </text>
      <circle cx="430" cy="110" r="2.2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "900ms" }} />
      <circle cx="60" cy="260" r="2.2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "1300ms" }} />
    </svg>
  );
}
