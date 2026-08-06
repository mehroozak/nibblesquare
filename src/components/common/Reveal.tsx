"use client";

import * as React from "react";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  /** Which way the element travels in from. */
  direction?: RevealDirection;
  /** Delay in ms — use to stagger siblings. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  /** Element to render. Lists need `li`, grids often want `div`. */
  as?: "div" | "li" | "section" | "span" | "figure";
  className?: string;
};

const offsetFor = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { x: "0px", y: `${distance}px` };
    case "down":
      return { x: "0px", y: `${-distance}px` };
    case "left":
      return { x: `${distance}px`, y: "0px" };
    case "right":
      return { x: `${-distance}px`, y: "0px" };
    case "none":
      return { x: "0px", y: "0px" };
  }
};

/**
 * Fades and slides its children in when they scroll into view.
 *
 * Motion is CSS-only; `useInView` just flips a class. Users with
 * `prefers-reduced-motion: reduce` get the content immediately with no travel.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 18,
  as: Element = "div",
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const offset = offsetFor(direction, distance);

  return (
    <Element
      // The rendered tag varies, so the ref is widened to HTMLElement here.
      ref={ref as React.Ref<never>}
      className={cn("reveal", inView && "reveal-in", className)}
      style={
        {
          "--reveal-x": offset.x,
          "--reveal-y": offset.y,
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Element>
  );
}
