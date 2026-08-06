import { GithubIcon } from "@/components/common/icons/GithubIcon";
import { LinkedinIcon } from "@/components/common/icons/LinkedinIcon";
import { XIcon } from "@/components/common/icons/XIcon";
import type { NavLink, SocialLink } from "@/types/content";

/**
 * Phone, address, GitHub and LinkedIn are real. Email, the domain (`url`)
 * and the X handle below are still PLACEHOLDER — replace before launch.
 */
export const siteConfig = {
  name: "Nibble Square",
  shortName: "Nibble Square",
  /** PLACEHOLDER domain — used for canonical URLs and OG metadata. */
  url: "https://nibblesquare.com",
  tagline: "Envision. Engineer. Excel.",
  description:
    "Nibble Square is a product engineering studio. We design, build and run software that companies depend on — including Passlay, our event ticketing platform.",
  email: "hello@nibblesquare.com", // PLACEHOLDER
  careersEmail: "careers@nibblesquare.com", // PLACEHOLDER
  phone: "+923086802787",
  address: {
    line1: "545 G4, Johar Town",
    line2: "Lahore",
    country: "Pakistan",
  },
  /** PLACEHOLDER: replace with a real availability statement. */
  availability: "Currently booking projects starting next quarter.",
} as const;

export const mainNav: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    description: "Who we are and how we work",
  },
  {
    href: "/products",
    label: "Products",
    description: "Passlay and what we've shipped",
  },
  {
    href: "/services",
    label: "Services",
    description: "How we can help your team",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    description: "What clients say",
  },
  // Careers is hidden from navigation for now — the route and its content
  // still exist at /careers, just unlinked. Re-add here to bring it back.
];

/** Rendered as the trailing CTA in the header and mobile menu. */
export const contactNavLink: NavLink = { href: "/contact", label: "Contact" };

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/products", label: "Products" },
      { href: "/products#passlay", label: "Passlay" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services#custom-software", label: "Custom software" },
      { href: "/services#product-engineering", label: "Product engineering" },
      { href: "/services#web-mobile", label: "Web & mobile" },
      { href: "/services#cloud-devops", label: "Cloud & DevOps" },
      { href: "/services#ai-ml", label: "AI & ML" },
    ],
  },
];

/** Rendered in the footer's bottom bar, next to the copyright line. */
export const legalNav: NavLink[] = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nibble-square",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nibble-square/",
    icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/nibblesquare", icon: XIcon }, // PLACEHOLDER — confirm handle
];
