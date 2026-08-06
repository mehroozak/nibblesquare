import * as React from "react";

/**
 * Nibble Square brand mark — the 4x4 square grid with a notched top-right
 * corner and two punched-out cells, traced from the source brand SVG.
 * Colour is `currentColor` so it follows `text-primary` (or any text colour)
 * and adapts across light/dark; the two punched-out cells are `fill="none"`
 * so the surface behind shows through instead of a hardcoded white.
 */
export function LogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 141.26 140.93"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="currentColor">
        <rect width="30.07" height="30.07" />
        <rect x="37.06" width="30.07" height="30.07" />
        <rect x="74.13" width="30.07" height="30.07" />
        <path d="M227.55,338.17v10.09H197.48V318.19h8.6a6.82,6.82,0,0,0,6.46,4.76,6.75,6.75,0,0,0,1.27-.12,7,7,0,0,0-1.78,4.68,6.88,6.88,0,0,0,6.82,6.95,6.75,6.75,0,0,0,5-2.21A6.93,6.93,0,0,0,227.55,338.17Z" transform="translate(-86.29 -318.19)" />
        <rect y="37.12" width="30.07" height="30.07" />
        <rect x="37.06" y="37.12" width="30.07" height="30.07" />
        <rect x="111.19" y="37.12" width="30.07" height="30.07" />
        <rect y="73.99" width="30.07" height="30.07" />
        <rect x="74.13" y="73.99" width="30.07" height="30.07" />
        <rect x="111.19" y="73.99" width="30.07" height="30.07" />
        <rect y="110.86" width="30.07" height="30.07" />
        <rect x="37.06" y="110.86" width="30.07" height="30.07" />
        <rect x="74.13" y="110.86" width="30.07" height="30.07" />
        <rect x="111.19" y="110.86" width="30.07" height="30.07" />
      </g>
      <rect x="74.13" y="37.12" width="30.07" height="30.07" fill="none" />
      <rect x="37.06" y="73.99" width="30.07" height="30.07" fill="none" />
    </svg>
  );
}
