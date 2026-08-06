import type { LegalDocument } from "@/types/content";
import { siteConfig } from "@/data/site";

/**
 * Drafted to accurately describe what this site actually does today (a
 * static marketing site with a front-end contact form — see HANDOFF.md for
 * what's wired up). Have a lawyer review before publishing; the governing-law
 * clause in particular follows `siteConfig.address`, which is still
 * placeholder data.
 */
export const privacyPolicy: LegalDocument = {
  lastUpdated: "August 6, 2026",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        `This policy explains what information ${siteConfig.name} collects through this website (${siteConfig.url}) and how it is used. It covers this marketing site only. Our product, Passlay, is a separate application with its own privacy policy covering organiser and attendee data.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information you choose to give us directly. The only place this site gathers personal information is the contact form, which asks for:",
      ],
      items: [
        "Your name and email address",
        "Your company name (optional)",
        "What you are getting in touch about, and a budget range if you provide one",
        "The message you write",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use contact form submissions solely to respond to your enquiry — to reply by email, understand a project brief, or follow up on a job application. We do not use it for advertising, and we do not sell or rent it to third parties.",
      ],
    },
    {
      heading: "Cookies and local storage",
      paragraphs: [
        "This site does not use tracking or advertising cookies. The only thing stored in your browser is your light/dark theme preference, saved locally so the site remembers your choice on your next visit. That preference never leaves your device.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "The contact form does not currently send data to a third-party service provider. If we add one in the future (for example, an email delivery provider) to send your message to us, it will process your submission only to deliver it, and this policy will be updated first.",
      ],
    },
    {
      heading: "Data retention and your rights",
      paragraphs: [
        `We keep contact form submissions only as long as needed to respond and for reasonable business records. You can ask us to access, correct or delete information you have sent us at any time by emailing ${siteConfig.email}.`,
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        "This site is intended for business enquiries and is not directed at children. We do not knowingly collect information from anyone under 16.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "If this policy changes, we will update the date at the top of this page.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions about this policy can go to ${siteConfig.email}.`,
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  lastUpdated: "August 6, 2026",
  sections: [
    {
      heading: "Acceptance of terms",
      paragraphs: [
        `By using this website (${siteConfig.url}), you agree to these terms. If you do not agree, please do not use the site.`,
      ],
    },
    {
      heading: "Use of the site",
      paragraphs: [
        `This site is provided for informational purposes — to describe ${siteConfig.name}, our work, and how to get in touch. You agree not to misuse it: no attempting to disrupt the site, scrape it at scale, or use it for any unlawful purpose.`,
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `The content on this site — including text, the ${siteConfig.name} name and logo, and page design — belongs to ${siteConfig.name} unless stated otherwise. Please don't reproduce it without our permission.`,
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        "This site links to third-party sites, including Passlay and our social profiles. We don't control those sites and aren't responsible for their content or policies.",
      ],
    },
    {
      heading: "Testimonials",
      paragraphs: [
        "Testimonials on this site reflect the individual experiences of the clients quoted. They describe specific engagements and are not a guarantee of results for any future project.",
      ],
    },
    {
      heading: "No warranty",
      paragraphs: [
        'This site is provided "as is," without warranties of any kind, express or implied. We try to keep it accurate and available, but we don\'t guarantee it will be error-free or uninterrupted.',
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        `To the extent permitted by law, ${siteConfig.name} is not liable for any indirect, incidental or consequential damages arising from your use of this site.`,
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. Changes take effect once posted here, with the date at the top of this page updated.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        `These terms are governed by the laws applicable in ${siteConfig.address.country}.`,
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`Questions about these terms can go to ${siteConfig.email}.`],
    },
  ],
};
