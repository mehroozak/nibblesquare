/**
 * Fixed dark palette matching the real Passlay app (organiser console and
 * customer ticket wallet). Unlike the marketing site's own surfaces, these
 * mockups are screenshots of a product that is dark-themed regardless of
 * the visitor's light/dark preference here — so they use hard-coded hex
 * values rather than the site's `var(--...)` theme tokens.
 */
export const passlay = {
  page: "#07080c",
  sidebar: "#0a0c11",
  card: "#131722",
  cardAlt: "#171c28",
  border: "#242a38",
  borderSoft: "#1b2029",
  text: "#f2f4f8",
  textMuted: "#8890a4",
  textFaint: "#5b6274",
  accent: "#2fa3a3",
  accentSoft: "rgba(47,163,163,0.16)",
  success: "#22c55e",
  successSoft: "rgba(34,197,94,0.14)",
  danger: "#ef4444",
  fontDisplay:
    '"Baloo 2","Fredoka","Poppins",ui-rounded,system-ui,sans-serif',
  fontBody: 'system-ui,-apple-system,"Segoe UI",sans-serif',
} as const;
