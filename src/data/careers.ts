import {
  CalendarClock,
  GraduationCap,
  HeartPulse,
  Laptop,
  PiggyBank,
  Plane,
} from "lucide-react";

import type { JobListing, Perk } from "@/types/content";

/**
 * ALL PLACEHOLDER. Roles, requirements and perks are invented and sized for a
 * small senior team. Replace with real openings — or set `open: false` to hide
 * a listing without deleting it.
 */
export const jobListings: JobListing[] = [
  {
    id: "job-senior-fullstack",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (UTC-2 to UTC+3) or Austin, TX",
    type: "Full-time",
    level: "Senior",
    summary:
      "Work across client engagements and Passlay, owning features from data model to interface. You will be one of a small number of engineers, so scope is wide and the work is visible.",
    responsibilities: [
      "Design and build features end to end, from schema to UI",
      "Take technical ownership of at least one client engagement",
      "Review code and raise the bar on what we ship",
      "Work directly with clients rather than through a layer of account managers",
    ],
    requirements: [
      "5+ years building production web applications",
      "Strong TypeScript and React, plus a server-side language you know well",
      "Comfortable making architectural decisions with incomplete information",
      "Able to explain a technical trade-off to a non-technical stakeholder",
    ],
    open: true,
  },
  {
    id: "job-product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote (UTC-2 to UTC+3)",
    type: "Full-time",
    level: "Mid–Senior",
    summary:
      "Own the design of complex operational software — the kind with dense tables, permissions and edge cases — across Passlay and client products.",
    responsibilities: [
      "Design flows for products where the hard part is the logic, not the landing page",
      "Extend and maintain our shared design system",
      "Run lightweight research with real operators and gate staff",
      "Work alongside engineers throughout the build, not just at handoff",
    ],
    requirements: [
      "A portfolio with at least one dense, workflow-heavy product in it",
      "Fluent in Figma and comfortable with component-driven design",
      "Understands accessibility as a requirement rather than a nice-to-have",
      "Happy to be the only designer in the room",
    ],
    open: true,
  },
  {
    id: "job-platform-engineer",
    title: "Platform Engineer",
    department: "Engineering",
    location: "Remote (UTC-2 to UTC+3)",
    type: "Full-time",
    level: "Mid–Senior",
    summary:
      "Own the infrastructure that Passlay and our client systems run on — deployments, observability, cost and the traffic spikes that come with ticket on-sales.",
    responsibilities: [
      "Maintain infrastructure as code across environments",
      "Improve CI/CD, release safety and rollback",
      "Own monitoring, alerting and incident response practice",
      "Plan capacity for predictable spikes and unpredictable growth",
    ],
    requirements: [
      "3+ years in a platform, SRE or DevOps role",
      "AWS and Terraform in production, not just in a tutorial",
      "Container orchestration and CI/CD pipeline experience",
      "Calm under an incident, and good at writing up what happened",
    ],
    open: true,
  },
  {
    id: "job-engineering-intern",
    title: "Engineering Intern",
    department: "Engineering",
    location: "Austin, TX (hybrid)",
    type: "Internship",
    level: "Entry",
    summary:
      "A twelve-week paid internship working on real, shipped features with a named mentor. We do not have a coffee-and-Jira track.",
    responsibilities: [
      "Ship at least one user-facing feature to production",
      "Pair regularly with a senior engineer",
      "Take part in code review, both giving and receiving",
    ],
    requirements: [
      "Some programming experience — coursework, side projects or a bootcamp all count",
      "Curiosity and a willingness to ask questions early",
      "No prior professional experience required",
    ],
    open: true,
  },
];

export const openRoles = jobListings.filter((job) => job.open);

/** PLACEHOLDER: confirm which of these you actually offer before publishing. */
export const perks: Perk[] = [
  {
    title: "Remote-first, genuinely",
    description:
      "The company was built remote from day one. Meetings are scheduled around overlap, and decisions get written down so nobody has to be online to stay informed.",
    icon: Laptop,
  },
  {
    title: "Four-day delivery weeks",
    description:
      "Fridays are kept clear of client commitments for learning, internal work and maintenance. It is protected time, not aspirational time.",
    icon: CalendarClock,
  },
  {
    title: "Health cover",
    description:
      "Medical, dental and vision cover for you and your dependants, wherever we are able to provide it.",
    icon: HeartPulse,
  },
  {
    title: "Learning budget",
    description:
      "An annual budget for conferences, courses and books, with time set aside to actually use it.",
    icon: GraduationCap,
  },
  {
    title: "Meaningful time off",
    description:
      "Generous paid leave with a minimum you are expected to take, plus public holidays wherever you are based.",
    icon: Plane,
  },
  {
    title: "Transparent pay",
    description:
      "Salary bands are published internally and reviewed annually. No negotiating in the dark.",
    icon: PiggyBank,
  },
];
