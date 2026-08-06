"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

/**
 * The icons are swapped with CSS `dark:` variants rather than component state,
 * so there is nothing to reconcile at hydration and no mount effect needed.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <MoonIcon className="dark:hidden" aria-hidden="true" />
      <SunIcon className="hidden dark:block" aria-hidden="true" />
      <span className="sr-only">Toggle light and dark mode</span>
    </Button>
  );
}
