import type { MetadataRoute } from "next";

import { contactNavLink, legalNav, mainNav, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...mainNav, contactNavLink, ...legalNav];
  const legalHrefs = new Set(legalNav.map((link) => link.href));
  const lastModified = new Date();

  return routes.map((route) => {
    const isHome = route.href === "/";
    const isLegal = legalHrefs.has(route.href);

    return {
      url: `${siteConfig.url}${isHome ? "" : route.href}`,
      lastModified,
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isLegal ? 0.3 : isHome ? 1 : 0.8,
    };
  });
}
