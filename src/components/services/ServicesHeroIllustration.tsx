import * as React from "react";

import { cubicLength, cubicPath, type Point } from "@/lib/bezier";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

/**
 * Services-hero illustration: a glowing hub with a spoke to each service,
 * arranged in a pentagon since there are five. The badge at each spoke tip
 * uses that service's real icon from `data/services.ts`, so this stays in
 * sync automatically if a service is added, removed or reordered — as long
 * as the count stays workable for a pentagon (five or six reads fine).
 *
 * Built as an HTML wrapper with the background art as one <svg> and the icon
 * badges as ordinary positioned elements — same layering approach as the
 * homepage hero's floating chips — rather than nesting <svg> inside <svg>.
 */

const CENTER = { x: 200, y: 200 };
const HUB_R = 34;
const NODE_R = 140;

const angleFor = (index: number, total: number) => -90 + (360 / total) * index;

const pointFor = (angleDeg: number, radius: number): Point => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + radius * Math.cos(rad), y: CENTER.y + radius * Math.sin(rad) };
};

type ServicesHeroIllustrationProps = {
  className?: string;
};

export function ServicesHeroIllustration({ className }: ServicesHeroIllustrationProps) {
  const total = services.length;

  const spokes = services.map((service, index) => {
    const angle = angleFor(index, total);
    const hubEdge = pointFor(angle, HUB_R);
    const node = pointFor(angle, NODE_R - 24);
    const badgeCenter = pointFor(angle, NODE_R);
    return { service, angle, hubEdge, node, badgeCenter, delay: index * 120 };
  });

  return (
    <div className={cn("relative aspect-square", className)} aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="ns-services-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--chart-2)" />
          </linearGradient>
        </defs>

        <circle cx={CENTER.x} cy={CENTER.y} r={HUB_R + 18} fill="var(--primary-foreground)" opacity="0.16" />
        <circle cx={CENTER.x} cy={CENTER.y} r={HUB_R} fill="url(#ns-services-hub)" stroke="var(--primary)" strokeWidth="1.5" />
        <circle cx={CENTER.x} cy={CENTER.y} r="10" fill="var(--chart-2)" opacity="0.85" />

        {spokes.map(({ service, hubEdge, node, delay }) => {
          const c1 = { x: (hubEdge.x + node.x) / 2, y: (hubEdge.y + node.y) / 2 };
          const d = cubicPath(hubEdge, c1, c1, node);
          const length = cubicLength(hubEdge, c1, c1, node);
          return (
            <React.Fragment key={service.slug}>
              <path
                d={d}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
                className="animate-draw"
                style={{ "--ns-draw-length": length, animationDelay: `${delay}ms`, animationDuration: "1.2s" } as React.CSSProperties}
              />
              <circle cx={node.x} cy={node.y} r="3.5" fill="var(--primary)" />
            </React.Fragment>
          );
        })}
      </svg>

      {spokes.map(({ service, badgeCenter, delay }) => {
        const Icon = service.icon;
        return (
          <span
            key={service.slug}
            className="bg-card border-border animate-float absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border shadow-sm"
            style={{
              left: `${(badgeCenter.x / 400) * 100}%`,
              top: `${(badgeCenter.y / 400) * 100}%`,
              animationDelay: `${delay}ms`,
            }}
            title={service.title}
          >
            <Icon className="text-primary size-5" aria-hidden="true" />
          </span>
        );
      })}
    </div>
  );
}
