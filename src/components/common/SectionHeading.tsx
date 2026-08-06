import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Heading level — sections nested inside a page should stay at h2. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-primary font-mono text-xs font-medium tracking-[0.14em] uppercase">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-balance",
          eyebrow && "mt-3",
          Heading === "h1"
            ? "text-4xl font-semibold sm:text-5xl"
            : "text-3xl font-semibold sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
