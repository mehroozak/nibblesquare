import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { contactNavLink } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href={contactNavLink.href}>{contactNavLink.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
