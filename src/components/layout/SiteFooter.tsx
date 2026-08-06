import Link from "next/link";

import { Logo } from "@/components/common/Logo";
import { footerNav, legalNav, siteConfig, socialLinks } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring/50 grid size-9 place-items-center rounded-md transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-display text-sm font-semibold">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${group.heading}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-xs">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="text-muted-foreground flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            {legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
