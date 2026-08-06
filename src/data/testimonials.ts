import type { Testimonial } from "@/types/content";

export const testimonials: Testimonial[] = [
  {
    id: "t-erika-bientexeler",
    quote:
      "Trial Rocket handles my replies now — it drafts AI-based suggestions and can send messages and WhatsApp messages on my behalf, so I'm not chained to my phone all day. Nibble Square built exactly what I described and made it feel effortless.",
    authorName: "Erika Bientexeler",
    authorRole: "CEO",
    company: "Safe and Fit",
    relatedProduct: "AI & ML",
    featured: true,
  },
  {
    id: "t-joel",
    quote:
      "We needed our infrastructure to be configurable, not deployed once and left alone. Nibble Square built our AWS architecture as code from the ground up, so changes that used to mean a support ticket are now a config change.",
    authorName: "Joel",
    authorRole: "CTO",
    company: "Dev Geon",
    relatedProduct: "Cloud & DevOps",
    featured: true,
  },
  {
    id: "t-zee",
    quote:
      "I wanted something that felt native without building two separate apps. What Nibble Square delivered works like a PWA — mobile-first, installable, and fast from day one.",
    authorName: "Zee",
    authorRole: "Owner",
    company: "Zee Soft",
    relatedProduct: "Web & mobile",
    featured: true,
  },
  {
    id: "t-sahti",
    quote:
      "Nibble Square built our practice management system from the ground up — scheduling, patient records and doctor workflows all in one place. It has become the system our whole practice runs on.",
    authorName: "Sahti",
    authorRole: "Healthcare practice",
    company: "France",
    relatedProduct: "Custom software",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter(
  (testimonial) => testimonial.featured,
);
