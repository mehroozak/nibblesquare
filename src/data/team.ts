import {
  ClipboardList,
  Compass,
  Database,
  Palette,
  ShieldCheck,
  Layers,
} from "lucide-react";

import type { TeamRole } from "@/types/content";

/**
 * The disciplines on every engagement, not named individuals — deliberately
 * kept generic rather than listing people.
 */
export const teamRoles: TeamRole[] = [
  {
    id: "role-business-analysts",
    title: "Business Analysts",
    descriptor: "Genius",
    description:
      "Turn a vague brief into a requirements doc that survives contact with engineering. They ask the questions that save you six weeks later.",
    icon: ClipboardList,
  },
  {
    id: "role-product-owners",
    title: "Product Owners",
    descriptor: "Awesome",
    description:
      "Own the roadmap and the trade-offs, so scope creep gets caught in planning instead of in production.",
    icon: Compass,
  },
  {
    id: "role-designers",
    title: "Art & Graphic Designers",
    descriptor: "Intelligent",
    description:
      "Design the interfaces and brand assets that make software feel considered, not assembled.",
    icon: Palette,
  },
  {
    id: "role-architects",
    title: "Software Architects",
    descriptor: "Brilliant",
    description:
      "Make the calls on structure and scale before the first line of code, so the system holds up under real load.",
    icon: Layers,
  },
  {
    id: "role-data-scientists",
    title: "Data Scientists",
    descriptor: "Sharp",
    description:
      "Build the models and the evaluation sets that prove they work, not just demo well.",
    icon: Database,
  },
  {
    id: "role-qa",
    title: "Quality Assurance",
    descriptor: "Meticulous",
    description:
      "Break the build before your users do — test plans, edge cases, and the paths nobody thought to check.",
    icon: ShieldCheck,
  },
];
