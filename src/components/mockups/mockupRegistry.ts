/**
 * Which `ProductScreenshot.src` paths are covered by an illustrated mockup.
 *
 * Keep in sync with the switch in `ProductMockup.tsx`. Removing an entry here
 * makes `ProductScreenshotFigure` render a real <Image> from that path instead.
 */
export const MOCKUP_SRCS = {
  dashboard: "/products/passlay/dashboard.svg",
  eventSetup: "/products/passlay/event-setup.svg",
  ticketWallet: "/products/passlay/ticket-wallet.svg",
} as const;

const covered = new Set<string>(Object.values(MOCKUP_SRCS));

export const hasMockup = (src: string) => covered.has(src);
