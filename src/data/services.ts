import { Blocks, BrainCircuit, Cloud, Code2, Smartphone } from "lucide-react";

import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom software development",
    summary:
      "Systems built around how your business actually operates, not around a template.",
    description:
      "Some problems do not have an off-the-shelf answer. For Sahti, a French healthcare practice, that meant a practice management system covering scheduling, patient records and doctor workflows in one place — replacing a patchwork of spreadsheets and paper. We start by learning the workflow properly, then build the smallest thing that replaces it, so the software matches how the team already works rather than the other way round.",
    icon: Code2,
    deliverables: [
      "Discovery and technical scoping",
      "Domain modelling and data architecture",
      "Application build and rollout",
      "Migration from spreadsheets or legacy systems",
      "Handover documentation and team training",
    ],
    stack: ["TypeScript", "Python", "PostgreSQL", "Django", "Next.js"],
  },
  {
    slug: "product-engineering",
    title: "Product engineering",
    summary:
      "An embedded team that takes a product from first sketch to something with real users on it.",
    description:
      "This is how Passlay got built, and it is the work we know best. We join as a product team rather than a set of hands: shaping scope, making the architectural calls, shipping in increments you can put in front of users, and staying on past launch to fix what the first cohort actually complains about.",
    icon: Blocks,
    deliverables: [
      "Product discovery and scope shaping",
      "Architecture and technical direction",
      "Iterative delivery in two-week cycles",
      "Instrumentation and usage analytics",
      "Post-launch iteration and support",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    slug: "web-mobile",
    title: "Web & mobile applications",
    summary:
      "Fast, accessible web apps and installable, mobile-first builds that share one codebase where it makes sense.",
    description:
      "Interfaces are where most software is judged, so we treat the front end as engineering rather than decoration. For Zee Soft we built a mobile-first platform that installs and behaves like a native app while shipping from a single PWA codebase — no separate iOS and Android builds to keep in sync. That means measurable performance budgets and accessibility checked against WCAG rather than assumed, on web or mobile.",
    icon: Smartphone,
    deliverables: [
      "Design system and component library",
      "Responsive web application build",
      "Installable, mobile-first (PWA) builds",
      "Accessibility audit and remediation",
      "Performance budgets and Core Web Vitals work",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "PWA", "Vercel"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud, DevOps & integrations",
    summary:
      "The infrastructure and plumbing that keeps everything above running without drama.",
    description:
      "Deploys should be boring. For Dev Geon we rebuilt their AWS architecture as infrastructure as code, turning changes that used to need a support ticket into a config change. That is the same approach we bring to CI/CD, observability, and the third-party integrations — payments, identity, messaging, ERP — that production software inevitably needs. Existing setups are welcome; we are as happy stabilising something as building it fresh.",
    icon: Cloud,
    deliverables: [
      "Infrastructure as code and environment setup",
      "CI/CD pipelines and release automation",
      "Monitoring, logging and alerting",
      "Third-party and payment integrations",
      "Cost review and scaling plans",
    ],
    stack: ["AWS", "Terraform", "Docker", "GitHub Actions", "Grafana"],
  },
  {
    slug: "ai-ml",
    title: "AI & machine learning",
    summary:
      "Applied models wired into real products — with evaluation, guardrails and a fallback when they get it wrong.",
    description:
      "We build AI features that survive contact with production. For Safe and Fit's CEO, that was Trial Rocket — an OpenAI-based chat agent that drafts reply suggestions and sends messages, including WhatsApp, on her behalf. The engineering around the model matters more than the model itself: evaluation sets, cost controls, latency budgets, and a sensible answer for what happens when confidence is low.",
    icon: BrainCircuit,
    deliverables: [
      "Feasibility review and data assessment",
      "Retrieval and RAG pipelines",
      "Model integration and prompt architecture",
      "Messaging and WhatsApp integrations",
      "Evaluation harnesses and quality benchmarks",
    ],
    stack: ["Python", "OpenAI", "LangChain", "pgvector", "Node.js"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
