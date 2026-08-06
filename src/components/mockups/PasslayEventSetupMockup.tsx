import { passlay } from "@/components/mockups/passlayTheme";

/**
 * Illustrated Passlay event detail screen — redrawn to match the real
 * console: an approval bar, uploaded banner art, and per-tier cards with
 * quantity, per-person limits and sale windows. Decorative inline SVG.
 */

const tiers = [
  { name: "VIP", price: "Rs 2,000", status: "Active", meta: "Qty: 20 · Max/person: 3 · Sale: 13 Jul → 20 Jul" },
  { name: "General admission", price: "Rs 800", status: "Active", meta: "Qty: 500 · Max/person: 6 · Sale: 1 Jul → 20 Jul" },
  { name: "Early bird", price: "Rs 500", status: "Sold out", meta: "Qty: 200 · Max/person: 4 · Sale: 1 Jun → 30 Jun" },
];

const banners = [
  { from: "#f59e0b", to: "#7c2d12", label: "HARBOUR", sub: "SESSIONS" },
  { from: "#7c3aed", to: "#1e1b4b", label: "HARBOUR", sub: "SESSIONS" },
];

type PasslayEventSetupMockupProps = {
  className?: string;
};

export function PasslayEventSetupMockup({ className }: PasslayEventSetupMockupProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="presentation"
      aria-hidden="true"
      style={{ fontFamily: passlay.fontBody }}
    >
      <defs>
        <linearGradient id="ns-approve-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={passlay.success} />
          <stop offset="100%" stopColor={passlay.accent} />
        </linearGradient>
        {banners.map((banner, index) => (
          <linearGradient key={banner.label + index} id={`ns-banner-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={banner.from} />
            <stop offset="100%" stopColor={banner.to} />
          </linearGradient>
        ))}
      </defs>

      <rect width="800" height="500" fill={passlay.page} />
      <rect width="800" height="4" fill="url(#ns-approve-bar)" />

      {/* ---------- Header ---------- */}
      <text
        x="40"
        y="42"
        fontSize="19"
        fontWeight="800"
        fill={passlay.text}
        style={{ fontFamily: passlay.fontDisplay }}
      >
        Harbour Sessions — Winter
      </text>

      <rect x="40" y="52" width="52" height="18" rx="7" fill={passlay.cardAlt} stroke={passlay.border} />
      <text x="66" y="64.5" fontSize="7.5" fill={passlay.textMuted} textAnchor="middle">
        Music
      </text>
      <rect x="98" y="52" width="66" height="18" rx="7" fill={passlay.cardAlt} stroke={passlay.border} />
      <text x="131" y="64.5" fontSize="7.5" fill={passlay.textMuted} textAnchor="middle">
        Nightlife
      </text>

      <text x="40" y="90" fontSize="9" fill={passlay.textMuted}>
        Fri 21 Nov 2026, 21:00 → Sat 22 Nov 2026, 02:00
      </text>
      <text x="40" y="106" fontSize="9" fill={passlay.textMuted}>
        Pier 9 Warehouse — Austin, TX
      </text>

      <rect x="692" y="26" width="76" height="22" rx="8" fill={passlay.successSoft} stroke={passlay.success} />
      <text x="730" y="40.5" fontSize="8" fontWeight="700" fill={passlay.success} textAnchor="middle">
        Approved
      </text>

      <line x1="40" y1="126" x2="760" y2="126" stroke={passlay.border} />

      {/* ---------- Event banners ---------- */}
      <text x="40" y="150" fontSize="12" fontWeight="700" fill={passlay.text}>
        Event banners
      </text>
      <text x="40" y="164" fontSize="7.5" fill={passlay.textFaint}>
        Recommended 1920 × 1080 (16:9) · JPG or PNG
      </text>
      <rect x="654" y="140" width="106" height="24" rx="8" fill={passlay.cardAlt} stroke={passlay.border} />
      <text x="707" y="155.5" fontSize="8" fontWeight="600" fill={passlay.text} textAnchor="middle">
        Upload banner
      </text>

      {banners.map((banner, index) => {
        const x = 40 + index * 364;
        return (
          <g key={banner.label + index}>
            <rect x={x} y="180" width="348" height="112" rx="12" fill={`url(#ns-banner-${index})`} />
            <text
              x={x + 174}
              y="222"
              fontSize="26"
              fontWeight="800"
              fill="#ffffff"
              textAnchor="middle"
              style={{ fontFamily: passlay.fontDisplay }}
            >
              {banner.label}
            </text>
            <text
              x={x + 174}
              y="248"
              fontSize="22"
              fontWeight="800"
              fill="#ffffff"
              opacity="0.92"
              textAnchor="middle"
              style={{ fontFamily: passlay.fontDisplay }}
            >
              {banner.sub}
            </text>
            <text x={x + 174} y="272" fontSize="8" fill="#ffffff" opacity="0.75" textAnchor="middle">
              21 NOV 2026 · PIER 9
            </text>
          </g>
        );
      })}

      {/* ---------- Ticket tiers ---------- */}
      <text x="40" y="322" fontSize="12" fontWeight="700" fill={passlay.text}>
        Ticket tiers
      </text>
      <text x="40" y="336" fontSize="7.5" fill={passlay.textFaint}>
        Pricing and availability for each ticket type
      </text>
      <rect x="700" y="312" width="60" height="24" rx="8" fill={passlay.accent} />
      <text x="730" y="327.5" fontSize="8" fontWeight="700" fill="#ffffff" textAnchor="middle">
        + Add tier
      </text>

      {tiers.map((tier, index) => {
        const y = 352 + index * 46;
        const active = tier.status === "Active";
        return (
          <g key={tier.name}>
            <rect x="40" y={y} width="720" height="38" rx="10" fill={passlay.card} stroke={passlay.border} />
            <rect x="40" y={y} width="4" height="38" rx="2" fill={passlay.accent} opacity={0.9 - index * 0.22} />

            <text x="60" y={y + 16} fontSize="10" fontWeight="700" fill={passlay.text}>
              {tier.name}
            </text>
            <text x="60" y={y + 29} fontSize="7.5" fill={passlay.textMuted}>
              {tier.meta}
            </text>

            <text x="600" y={y + 22} fontSize="11" fontWeight="800" fill={passlay.text} textAnchor="end">
              {tier.price}
            </text>

            <rect
              x="616"
              y={y + 9}
              width="66"
              height="19"
              rx="9"
              fill={active ? passlay.successSoft : passlay.cardAlt}
              stroke={active ? "none" : passlay.border}
            />
            <text
              x="649"
              y={y + 21.5}
              fontSize="7.5"
              fontWeight="700"
              textAnchor="middle"
              fill={active ? passlay.success : passlay.textMuted}
            >
              {tier.status}
            </text>

            <rect x="694" y={y + 10} width="16" height="16" rx="4" fill="none" stroke={passlay.textFaint} />
            <rect x="718" y={y + 10} width="16" height="16" rx="4" fill="none" stroke={passlay.textFaint} />
          </g>
        );
      })}
    </svg>
  );
}
