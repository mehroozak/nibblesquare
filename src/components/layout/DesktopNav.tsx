"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { mainNav } from "@/data/site";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden md:flex md:items-center md:gap-1">
      {mainNav.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
