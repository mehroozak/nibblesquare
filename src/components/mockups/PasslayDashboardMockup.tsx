import * as React from "react";

import { passlay } from "@/components/mockups/passlayTheme";

/**
 * Illustrated Passlay organiser dashboard — redrawn to match the real
 * console: dark sidebar with an org switcher, KPI tiles, two trend charts
 * with rotated event labels, and recent-event cards. Decorative inline SVG;
 * see the note in `passlayTheme.ts` for why the palette is hard-coded.
 */

const navItems = ["Dashboard", "Events", "Customers", "Members", "Settings"];

const kpis = [
  { label: "Tickets sold", value: "4,182" },
  { label: "Total revenue", value: "Rs 86,240" },
  { label: "Total checked in", value: "1,904" },
];

const eventLabels = [
  "Harbour Sessions",
  "Type & Motion",
  "Night Market",
  "Rooftop Sessions",
  "Winter Warehouse",
];

const ticketsSeries = [22, 34, 28, 45, 58];
const revenueSeries = [30, 26, 44, 39, 62];

const recentEvents = [
  { name: "Winter Warehouse", date: "20 Jul 2026", footfall: "1,180", sold: "1,204", revenue: "Rs 24.6K" },
  { name: "Rooftop Sessions", date: "20 Jul 2026", footfall: "640", sold: "702", revenue: "Rs 14.1K" },
  { name: "Night Market", date: "19 Jul 2026", footfall: "2,310", sold: "2,400", revenue: "Rs 41.9K" },
];

// Card width (288) minus left/right padding — keeps both charts flush with
// the KPI row above (196 to 788, same as the three KPI/recent-event cards).
const CHART = { x: 30, y: 30, width: 238, height: 96 };

const buildPoints = (series: number[]) => {
  const max = Math.max(...series);
  return series.map((value, index) => ({
    x: CHART.x + (index / (series.length - 1)) * CHART.width,
    y: CHART.y + CHART.height - (value / max) * CHART.height,
  }));
};

const buildPath = (points: { x: number; y: number }[]) =>
  points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

const pathLength = (points: { x: number; y: number }[]) =>
  Math.ceil(
    points.reduce((total, point, index) => {
      if (index === 0) return 0;
      const prev = points[index - 1]!;
      return total + Math.hypot(point.x - prev.x, point.y - prev.y);
    }, 0),
  );

type ChartCardProps = {
  x: number;
  title: string;
  series: number[];
  delay: number;
};

function ChartCard({ x, title, series, delay }: ChartCardProps) {
  const points = buildPoints(series);
  const line = buildPath(points);
  const length = pathLength(points);

  return (
    <g transform={`translate(${x} 0)`}>
      <rect width="288" height="150" rx="12" fill={passlay.card} stroke={passlay.border} />
      <text x="16" y="22" fontSize="9.5" fontWeight="700" fill={passlay.text}>
        {title}
      </text>

      {[0, 1, 2, 3].map((row) => (
        <line
          key={row}
          x1={CHART.x}
          y1={CHART.y + (row * CHART.height) / 3}
          x2={CHART.x + CHART.width}
          y2={CHART.y + (row * CHART.height) / 3}
          stroke={passlay.borderSoft}
        />
      ))}

      <path
        d={line}
        fill="none"
        stroke={passlay.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ "--ns-draw-length": length, animationDelay: `${delay}ms` } as React.CSSProperties}
      />
      {points.map((point, index) => (
        <circle key={index} cx={point.x} cy={point.y} r="2.6" fill={passlay.accent} />
      ))}

      {eventLabels.map((label, index) => (
        <text
          key={label}
          x={points[index]!.x}
          y="140"
          fontSize="7"
          fill={passlay.textFaint}
          textAnchor="end"
          transform={`rotate(-25 ${points[index]!.x} 140)`}
        >
          {label}
        </text>
      ))}
    </g>
  );
}

type PasslayDashboardMockupProps = {
  className?: string;
};

export function PasslayDashboardMockup({ className }: PasslayDashboardMockupProps) {
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
      <rect width="168" height="500" fill={passlay.sidebar} />
      <line x1="168" y1="0" x2="168" y2="500" stroke={passlay.border} />

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

      {/* Org switcher */}
      <rect x="16" y="50" width="136" height="30" rx="9" fill={passlay.cardAlt} stroke={passlay.border} />
      <rect x="26" y="59" width="13" height="13" rx="3" fill={passlay.accent} />
      <text x="46" y="69" fontSize="9" fontWeight="600" fill={passlay.text}>
        Royal Events
      </text>
      <path d="M136 63 l4 4 l4 -4" fill="none" stroke={passlay.textMuted} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

      <text x="20" y="106" fontSize="7.5" fill={passlay.textFaint} letterSpacing="0.08em">
        MENU
      </text>

      {navItems.map((item, index) => {
        const y = 120 + index * 34;
        const active = index === 0;
        return (
          <g key={item}>
            <rect
              x="10"
              y={y}
              width="148"
              height="26"
              rx="8"
              fill={active ? passlay.accentSoft : "transparent"}
            />
            <rect
              x="22"
              y={y + 10}
              width="7"
              height="7"
              rx="2"
              fill={active ? passlay.accent : passlay.textFaint}
            />
            <text
              x="38"
              y={y + 17}
              fontSize="9.5"
              fontWeight={active ? 700 : 500}
              fill={active ? passlay.text : passlay.textMuted}
            >
              {item}
            </text>
          </g>
        );
      })}

      <line x1="16" y1="428" x2="152" y2="428" stroke={passlay.border} />

      <circle cx="24" cy="446" r="6" fill="none" stroke={passlay.textMuted} strokeWidth="1.2" />
      <text x="36" y="449" fontSize="8" fill={passlay.textMuted}>
        Browse public site
      </text>

      {["sun", "moon", "monitor"].map((mode, index) => {
        const x = 16 + index * 33;
        const active = mode === "moon";
        return (
          <g key={mode}>
            <rect
              x={x}
              y="460"
              width="28"
              height="22"
              rx="7"
              fill={active ? passlay.cardAlt : "transparent"}
              stroke={active ? passlay.border : "none"}
            />
            <circle cx={x + 14} cy="471" r="4" fill={active ? passlay.text : passlay.textFaint} />
          </g>
        );
      })}

      <text x="16" y="494" fontSize="8.5" fill={passlay.textMuted}>
        Logout
      </text>

      {/* ---------- Main content ---------- */}
      <text
        x="196"
        y="46"
        fontSize="21"
        fontWeight="800"
        fill={passlay.text}
        style={{ fontFamily: passlay.fontDisplay }}
      >
        Dashboard
      </text>
      <text x="196" y="72" fontSize="8.5" fill={passlay.textFaint} letterSpacing="0.08em">
        OVERVIEW
      </text>

      {kpis.map((kpi, index) => {
        const x = 196 + index * 202;
        return (
          <g key={kpi.label}>
            <rect x={x} y="82" width="188" height="86" rx="12" fill={passlay.card} stroke={passlay.border} />
            <text x={x + 18} y="106" fontSize="9" fill={passlay.textMuted}>
              {kpi.label}
            </text>
            <text
              x={x + 18}
              y="140"
              fontSize="22"
              fontWeight="800"
              fill={passlay.text}
              style={{ fontFamily: passlay.fontDisplay }}
            >
              {kpi.value}
            </text>
          </g>
        );
      })}

      <text x="196" y="196" fontSize="12" fontWeight="700" fill={passlay.text}>
        Sales performance
      </text>

      <g transform="translate(196 208)">
        <ChartCard x={0} title="Tickets sold — last 5 events" series={ticketsSeries} delay={0} />
        <ChartCard x={304} title="Revenue — last 5 events" series={revenueSeries} delay={180} />
      </g>

      <text x="196" y="392" fontSize="12" fontWeight="700" fill={passlay.text}>
        Recent events
      </text>

      {recentEvents.map((event, index) => {
        const x = 196 + index * 202;
        const stats = [
          { label: "Footfall", value: event.footfall },
          { label: "Sold", value: event.sold },
          { label: "Revenue", value: event.revenue },
        ];
        return (
          <g key={event.name}>
            <rect x={x} y="404" width="188" height="80" rx="10" fill={passlay.card} stroke={passlay.border} />
            <text x={x + 14} y="426" fontSize="10" fontWeight="700" fill={passlay.text}>
              {event.name}
            </text>
            <text x={x + 14} y="440" fontSize="8" fill={passlay.textMuted}>
              {event.date}
            </text>
            {stats.map((stat, statIndex) => (
              <g key={stat.label} transform={`translate(${x + 14 + statIndex * 58} 458)`}>
                <text fontSize="6.5" fill={passlay.textFaint}>
                  {stat.label}
                </text>
                <text y="14" fontSize="9" fontWeight="700" fill={passlay.text}>
                  {stat.value}
                </text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
