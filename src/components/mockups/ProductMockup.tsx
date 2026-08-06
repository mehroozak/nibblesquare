import { PasslayDashboardMockup } from "@/components/mockups/PasslayDashboardMockup";
import { PasslayEventSetupMockup } from "@/components/mockups/PasslayEventSetupMockup";
import { PasslayTicketWalletMockup } from "@/components/mockups/PasslayTicketWalletMockup";
import { MOCKUP_SRCS } from "@/components/mockups/mockupRegistry";

type ProductMockupProps = {
  /** The `ProductScreenshot.src` this mockup stands in for. */
  src: string;
  className?: string;
};

/**
 * Renders the illustrated stand-in for a product screenshot.
 *
 * These are hand-drawn SVG interpretations of the real product, not captures.
 * When a genuine screenshot exists, drop it at the same `src` path under
 * /public and remove the entry from `MOCKUP_SRCS` — `ProductScreenshotFigure`
 * then falls through to <Image> automatically.
 */
export function ProductMockup({ src, className }: ProductMockupProps) {
  switch (src) {
    case MOCKUP_SRCS.dashboard:
      return <PasslayDashboardMockup className={className} />;
    case MOCKUP_SRCS.eventSetup:
      return <PasslayEventSetupMockup className={className} />;
    case MOCKUP_SRCS.ticketWallet:
      return <PasslayTicketWalletMockup className={className} />;
    default:
      return null;
  }
}
