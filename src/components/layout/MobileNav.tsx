"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contactNavLink, mainNav, siteConfig } from "@/data/site";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85vw] sm:max-w-sm">
        <SheetHeader className="border-b">
          <SheetTitle className="font-display text-left text-base">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-3">
          {mainNav.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              // SheetClose closes the drawer as navigation starts, so no effect
              // is needed to react to the pathname changing.
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  {link.description && (
                    <span className="text-muted-foreground mt-0.5 block text-xs font-normal">
                      {link.description}
                    </span>
                  )}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto border-t p-4">
          <SheetClose asChild>
            <Button asChild className="w-full" size="lg">
              <Link href={contactNavLink.href}>Get in touch</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
