"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Fraction of the element that must be visible before it counts as in view. */
  threshold?: number;
  /** Shrinks the viewport so elements trigger slightly before they reach the edge. */
  rootMargin?: string;
  /** When true (default) the element stays "in view" once it has been seen. */
  once?: boolean;
};

/**
 * Reports whether the returned ref is inside the viewport.
 *
 * Degrades open rather than closed: if IntersectionObserver is unavailable, or
 * the user has asked for reduced motion, the element is treated as visible
 * immediately so content is never hidden behind an animation that will not run.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      // Reveal on the next frame rather than synchronously, so this stays a
      // one-way notification into React instead of a cascading render.
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
