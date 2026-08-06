import * as React from "react";

import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

/** Handset chrome for the mobile mockups (gate scanning, ticket wallet). */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "bg-card relative overflow-hidden rounded-[1.75rem] border-4 p-1 shadow-sm",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-muted-foreground/25 absolute top-2.5 left-1/2 z-10 h-1 w-12 -translate-x-1/2 rounded-full"
      />
      <div className="overflow-hidden rounded-[1.4rem]">{children}</div>
    </div>
  );
}
