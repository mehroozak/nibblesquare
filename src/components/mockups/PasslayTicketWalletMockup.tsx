import { QrGlyph } from "@/components/mockups/QrGlyph";
import { passlay } from "@/components/mockups/passlayTheme";

/**
 * Illustrated Passlay customer ticket wallet — redrawn to match the real
 * portal: order history, a scannable QR per ticket, and the fee breakdown
 * behind the "Download Tickets PDF" action. Decorative inline SVG.
 */

const costs = [
  { label: "Subtotal", value: "Rs 350" },
  { label: "Platform fee", value: "Rs 9" },
  { label: "Processing fee", value: "Rs 10" },
];

type PasslayTicketWalletMockupProps = {
  className?: string;
};

export function PasslayTicketWalletMockup({ className }: PasslayTicketWalletMockupProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="presentation"
      aria-hidden="true"
      style={{ fontFamily: passlay.fontBody }}
    >
      <rect width="800" height="500" fill={passlay.page} />

      {/* ---------- Sidebar ---------- */}
      <rect width="150" height="500" fill={passlay.sidebar} />
      <line x1="150" y1="0" x2="150" y2="500" stroke={passlay.border} />

      <text
        x="20"
        y="34"
        fontSize="15"
        fontWeight="800"
        fill={passlay.text}
        style={{ fontFamily: passlay.fontDisplay }}
      >
        Passlay
      </text>

      <rect x="16" y="50" width="118" height="28" rx="9" fill={passlay.cardAlt} stroke={passlay.border} />
      <circle cx="30" cy="64" r="8" fill={passlay.accent} />
      <text x="46" y="67" fontSize="8.5" fontWeight="600" fill={passlay.text}>
        Alex Rivera
      </text>

      <text x="20" y="96" fontSize="7.5" fill={passlay.textFaint} letterSpacing="0.08em">
        MENU
      </text>

      {["My events", "Profile"].map((item, index) => {
        const y = 110 + index * 32;
        const active = index === 0;
        return (
          <g key={item}>
            <rect x="10" y={y} width="130" height="26" rx="8" fill={active ? passlay.accentSoft : "transparent"} />
            <rect x="22" y={y + 10} width="7" height="7" rx="2" fill={active ? passlay.accent : passlay.textFaint} />
            <text x="38" y={y + 17} fontSize="9.5" fontWeight={active ? 700 : 500} fill={active ? passlay.text : passlay.textMuted}>
              {item}
            </text>
          </g>
        );
      })}

      <line x1="16" y1="428" x2="134" y2="428" stroke={passlay.border} />
      <circle cx="24" cy="446" r="6" fill="none" stroke={passlay.textMuted} strokeWidth="1.2" />
      <text x="36" y="449" fontSize="8" fill={passlay.textMuted}>
        Browse public site
      </text>
      {["sun", "moon", "monitor"].map((mode, index) => {
        const x = 16 + index * 33;
        const active = mode === "moon";
        return (
          <g key={mode}>
            <rect x={x} y="460" width="28" height="22" rx="7" fill={active ? passlay.cardAlt : "transparent"} stroke={active ? passlay.border : "none"} />
            <circle cx={x + 14} cy="471" r="4" fill={active ? passlay.text : passlay.textFaint} />
          </g>
        );
      })}
      <text x="16" y="494" fontSize="8.5" fill={passlay.textMuted}>
        Logout
      </text>

      {/* ---------- Main content ---------- */}
      <text
        x="178"
        y="46"
        fontSize="20"
        fontWeight="800"
        fill={passlay.text}
        style={{ fontFamily: passlay.fontDisplay }}
      >
        My tickets
      </text>
      <text x="178" y="66" fontSize="9" fill={passlay.textFaint}>
        Your booking history and QR codes.
      </text>

      {/* Primary, expanded ticket */}
      <rect x="178" y="82" width="574" height="326" rx="14" fill={passlay.card} stroke={passlay.border} />

      <rect x="196" y="98" width="44" height="44" rx="10" fill={passlay.cardAlt} stroke={passlay.border} />
      <text x="218" y="112" fontSize="7" fill={passlay.textFaint} textAnchor="middle">
        JUL
      </text>
      <text x="218" y="130" fontSize="15" fontWeight="800" fill={passlay.text} textAnchor="middle">
        17
      </text>

      <text x="252" y="112" fontSize="12.5" fontWeight="700" fill={passlay.text}>
        Street Food Festival
      </text>
      <rect x="400" y="100" width="62" height="17" rx="8" fill={passlay.successSoft} />
      <text x="431" y="112" fontSize="7.5" fontWeight="700" fill={passlay.success} textAnchor="middle">
        confirmed
      </text>
      <text x="252" y="128" fontSize="8" fill={passlay.textMuted}>
        17 Jul 2026 · 05:00 pm · Order #29
      </text>
      <text x="252" y="144" fontSize="8.5" fill={passlay.textMuted}>
        1 ticket
      </text>
      <text x="738" y="144" fontSize="10" fontWeight="700" fill={passlay.text} textAnchor="end">
        Rs 369
      </text>

      <line x1="196" y1="160" x2="738" y2="160" stroke={passlay.border} />

      <text x="196" y="180" fontSize="7.5" fill={passlay.textFaint} letterSpacing="0.03em">
        GENERAL ADMISSION · 1 × Rs 350
      </text>

      {/* QR card */}
      <rect x="196" y="192" width="150" height="150" rx="14" fill="#0b0d12" stroke={passlay.border} />
      <QrGlyph x={214} y={210} size={114} color="#f2f4f8" />
      <text x="271" y="356" fontSize="8" fill={passlay.textMuted} textAnchor="middle">
        Ticket 1
      </text>
      <rect x="241" y="362" width="60" height="17" rx="8" fill={passlay.successSoft} />
      <text x="271" y="374" fontSize="7.5" fontWeight="700" fill={passlay.success} textAnchor="middle">
        valid
      </text>

      {/* Cost breakdown */}
      {costs.map((cost, index) => {
        const y = 210 + index * 22;
        return (
          <g key={cost.label}>
            <text x="380" y={y} fontSize="9" fill={passlay.textMuted}>
              {cost.label}
            </text>
            <text x="738" y={y} fontSize="9" fontWeight="600" fill={passlay.text} textAnchor="end">
              {cost.value}
            </text>
          </g>
        );
      })}
      <line x1="380" y1="288" x2="738" y2="288" stroke={passlay.border} />
      <text x="380" y="308" fontSize="10" fontWeight="700" fill={passlay.text}>
        Total paid
      </text>
      <text x="738" y="308" fontSize="12" fontWeight="800" fill={passlay.text} textAnchor="end">
        Rs 369
      </text>

      <rect x="380" y="324" width="176" height="30" rx="9" fill={passlay.accent} />
      <path d="M398 336 v9 M394 341 l4 4 l4 -4" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="475" y="343" fontSize="8.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
        Download tickets PDF
      </text>

      {/* Second, collapsed ticket */}
      <rect x="178" y="422" width="574" height="52" rx="12" fill={passlay.card} stroke={passlay.border} />
      <rect x="194" y="434" width="30" height="30" rx="8" fill={passlay.cardAlt} stroke={passlay.border} />
      <text x="209" y="446" fontSize="6" fill={passlay.textFaint} textAnchor="middle">
        JUL
      </text>
      <text x="209" y="458" fontSize="10" fontWeight="800" fill={passlay.text} textAnchor="middle">
        17
      </text>
      <text x="236" y="446" fontSize="10.5" fontWeight="700" fill={passlay.text}>
        Wellness &amp; Yoga Retreat
      </text>
      <rect x="360" y="436" width="58" height="15" rx="7" fill={passlay.successSoft} />
      <text x="389" y="446.5" fontSize="7" fontWeight="700" fill={passlay.success} textAnchor="middle">
        confirmed
      </text>
      <text x="236" y="461" fontSize="7.5" fill={passlay.textMuted}>
        17 Jul 2026 · 01:00 pm · Order #28
      </text>
      <text x="738" y="453" fontSize="9" fontWeight="600" fill={passlay.textMuted} textAnchor="end">
        2 tickets · Rs 631
      </text>
    </svg>
  );
}
