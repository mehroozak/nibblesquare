"use client";

import { useEffect, useState } from "react";

import { useInView } from "@/hooks/useInView";

type CountUpProps = {
  /** Full display string, e.g. "30+", "2019", "99.9%". Non-digits are preserved. */
  value: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
};

/** Splits "30+" into ["", 30, "+"] so prefixes and suffixes survive the count. */
const parseValue = (value: string) => {
  const match = /^(\D*)([\d,.]+)(.*)$/.exec(value);
  if (!match) return null;

  const [, prefix = "", digits = "", suffix = ""] = match;
  const numeric = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;

  const decimals = digits.includes(".")
    ? (digits.split(".")[1]?.length ?? 0)
    : 0;
  const grouped = digits.includes(",");

  return { prefix, suffix, numeric, decimals, grouped };
};

// Decelerating curve — fast at the start, settles gently on the final number.
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Counts a stat up from zero the first time it scrolls into view. */
export function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const parsed = parseValue(value);
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;

    const target = parsed.numeric;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion collapses the run to a single frame that lands on the
    // final value, rather than a separate synchronous state write.
    const runFor = prefersReducedMotion ? 0 : duration;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = runFor === 0 ? 1 : Math.min((now - start) / runFor, 1);
      setCurrent(target * easeOut(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // `parsed` is derived from `value`, so tracking the primitive is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  const rounded = current.toFixed(parsed.decimals);
  const display = parsed.grouped
    ? Number(rounded).toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : rounded;

  return (
    <span ref={ref} className={className}>
      {/* Screen readers get the final value; the animation is decorative. */}
      <span aria-hidden="true">
        {parsed.prefix}
        {display}
        {parsed.suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
