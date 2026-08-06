import {
  BarChart3,
  CreditCard,
  QrCode,
  Settings2,
  Ticket,
  Users,
} from "lucide-react";

import type { Product } from "@/types/content";

/**
 * All metrics, screenshots and the Passlay URL are PLACEHOLDER values.
 */
export const products: Product[] = [
  {
    slug: "passlay",
    name: "Passlay",
    tagline: "Event ticketing and event management, end to end.",
    summary:
      "Passlay gives organisers one place to publish an event, sell tickets, manage attendees and run the door on the night — without stitching together four separate tools.",
    description:
      "Passlay started from a simple observation: most event organisers were running ticket sales in one tool, the attendee list in a spreadsheet, and entry on the night from a printed sheet or a staff member's phone. Passlay collapses that into a single system. Organisers create an event, configure ticket types and pricing, and get a public sales page they can share. Orders, refunds and attendee records stay in one place. On the day, gate staff open the scanner, check tickets in against live data, and see immediately if a ticket has already been used. It is our flagship product and the clearest example of what our team does — we designed it, built it, and continue to run it.",
    status: "live",
    featured: true,
    categories: ["Ticketing", "Events", "SaaS"],
    url: "https://passlay.com", // PLACEHOLDER — replace with the real URL or remove
    year: "2024 — present",
    features: [
      {
        title: "Event creation & setup",
        description:
          "Organisers configure events, venues, sessions and multiple ticket tiers with their own pricing, capacity limits and sale windows.",
        icon: Settings2,
      },
      {
        title: "Ticket sales & checkout",
        description:
          "A hosted, mobile-first sales page with card payments, order confirmation emails and delivery of scannable tickets.",
        icon: Ticket,
      },
      {
        title: "Payments & payouts",
        description:
          "Integrated payment processing with refunds, order history and reconciliation that matches what actually landed in the account.",
        icon: CreditCard,
      },
      {
        title: "Attendee management",
        description:
          "A live attendee list with search, guest lists, transfers and exports — the spreadsheet, replaced by the system of record.",
        icon: Users,
      },
      {
        title: "Gate scanning",
        description:
          "Staff scan tickets at entry from any phone. Duplicate and invalid tickets are flagged instantly, and check-ins sync across every device on the door.",
        icon: QrCode,
      },
      {
        title: "Reporting & insight",
        description:
          "Sales over time, ticket-type breakdowns and door throughput, so organisers can see how an event performed while it is still fresh.",
        icon: BarChart3,
      },
    ],
    screenshots: [
      {
        src: "/products/passlay/dashboard.svg", // PLACEHOLDER graphic
        alt: "Placeholder: Passlay organiser dashboard showing sales and upcoming events",
        caption: "Organiser dashboard — sales, upcoming events, recent orders",
      },
      {
        src: "/products/passlay/event-setup.svg", // PLACEHOLDER graphic
        alt: "Placeholder: Passlay event setup screen with ticket tiers",
        caption: "Event setup — ticket tiers, pricing and capacity",
      },
      {
        src: "/products/passlay/ticket-wallet.svg", // PLACEHOLDER graphic
        alt: "Placeholder: Passlay attendee ticket wallet with QR codes and order summary",
        caption: "Ticket wallet — QR codes, order summary and PDF download",
      },
    ],
    metrics: [
      { label: "Tickets processed", value: "120k+" }, // PLACEHOLDER
      { label: "Events run", value: "800+" }, // PLACEHOLDER
      { label: "Median check-in time", value: "1.4s" }, // PLACEHOLDER
      { label: "Uptime, trailing 12mo", value: "99.95%" }, // PLACEHOLDER
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Stripe",
      "AWS",
      "React Native",
    ],
  },
  {
    slug: "pookiepaw",
    name: "Pookiepaw",
    tagline: "An AI agent that makes sure pet groomers never miss a lead.",
    summary:
      "Pookiepaw watches every channel a grooming business gets booked through and replies instantly, so an enquiry never sits unanswered long enough to walk to a competitor.",
    description:
      "Pet groomers lose bookings the same way most small service businesses do: a message comes in while they have their hands full with a client, and by the time they reply, the lead has gone elsewhere. Pookiepaw is an AI-based agent that picks up enquiries as they arrive, answers the questions groomers get asked every day, and captures the booking details so nothing falls through the cracks. Currently under development.",
    status: "in-development",
    featured: false,
    categories: ["Pet care", "AI & ML", "SaaS"],
    year: "2026",
    features: [],
    screenshots: [],
    metrics: [],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
  },
];

export const featuredProduct = products.find((product) => product.featured);

export const otherProducts = products.filter((product) => !product.featured);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
