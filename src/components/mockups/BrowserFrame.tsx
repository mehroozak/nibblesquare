import * as React from "react";

import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  children: React.ReactNode;
  /** Shown in the fake address bar. */
  url?: string;
  className?: string;
};

/**
 * Desktop browser chrome wrapper. Holds the illustrated app mockups so they
 * read as product captures rather than free-floating diagrams.
 */
export function BrowserFrame({
  children,
  url = "app.passlay.com",
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "bg-card overflow-hidden rounded-xl border shadow-sm",
        className,
      )}
    >
      <div className="bg-muted/70 flex h-9 items-center gap-2 border-b px-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
        </span>
        <span
          className="bg-background/80 text-muted-foreground ml-2 hidden truncate rounded px-2 py-0.5 font-mono text-[10px] sm:block"
          aria-hidden="true"
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
