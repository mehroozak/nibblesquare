import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** Renders a tinted band instead of the page background. */
  muted?: boolean;
  /** Reduces vertical rhythm for tighter, secondary sections. */
  compact?: boolean;
};

export function Section({
  className,
  muted = false,
  compact = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        muted && "bg-muted/40 border-y",
        compact ? "py-14 sm:py-16" : "py-20 sm:py-24 lg:py-28",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
