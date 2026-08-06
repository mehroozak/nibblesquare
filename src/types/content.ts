/**
 * Shared content types for the marketing site.
 *
 * Everything the site renders is described here and populated from `src/data/*`.
 * When this content moves to a CMS or API, keep these shapes as the contract and
 * replace the data modules with fetchers that return the same types.
 */

import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Any SVG icon component. Wider than `LucideIcon` so hand-rolled brand marks
 * (GitHub, LinkedIn, X — lucide dropped brand icons in v1) can be used too.
 */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavLink = {
  href: string;
  label: string;
  /** Short description used by richer nav treatments and the sitemap. */
  description?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Longer body copy shown on the Services page. */
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  /** Representative technologies — kept loose so it is easy to edit. */
  stack: string[];
};

export type ProductStatus = "live" | "beta" | "in-development" | "archived";

export type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductScreenshot = {
  /** Path under /public, or a remote URL once real assets exist. */
  src: string;
  alt: string;
  caption: string;
};

export type ProductMetric = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** One-paragraph pitch used on cards and the homepage callout. */
  summary: string;
  /** Full description used on the product detail block. */
  description: string;
  status: ProductStatus;
  /** Flagship entries render in the large hero treatment. */
  featured: boolean;
  categories: string[];
  url?: string;
  year: string;
  features: ProductFeature[];
  screenshots: ProductScreenshot[];
  metrics: ProductMetric[];
  stack: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  /** Path under /public; falls back to initials when absent. */
  avatarSrc?: string;
  /** Which engagement the quote refers to — used for filtering later. */
  relatedProduct?: string;
  /** Surfaces the 2-3 quotes shown on the homepage. */
  featured: boolean;
};

export type TeamRole = {
  id: string;
  /** e.g. "Business Analysts" — a discipline, not a named person. */
  title: string;
  /** e.g. "Genius" — the adjective paired with the title in the heading. */
  descriptor: string;
  description: string;
  icon: LucideIcon;
};

export type JobListing = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  level: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** Set false to keep the listing in the file but hide it from the page. */
  open: boolean;
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Perk = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  items?: string[];
};

export type LegalDocument = {
  lastUpdated: string;
  sections: LegalSection[];
};
