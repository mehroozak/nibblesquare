# Session handoff

Where the project stands, and what to do next in VS Code.

---

## 1. Get it running

```bash
cd nibble-square-site
rm -rf node_modules .next        # an interrupted install left a truncated binary
npm install
npm run dev                      # http://localhost:3000
```

The `rm -rf node_modules` is not optional on first run. An install was cut off
mid-download during the build session and left a partial dependency tree — a
plain `npm install` on top of it may not repair the corrupted file. A committed
`package-lock.json` makes the clean reinstall reproducible.

Then confirm everything is healthy:

```bash
npm run typecheck && npm run lint && npm run build
```

Expected: no errors, and all 10 routes listed as `○ (Static)`.

## 2. Put it under version control

Not a git repo yet.

```bash
git init
git add .
git commit -m "Nibble Square marketing site: initial build"
```

`.gitignore` already covers `node_modules`, `.next` and `.env*`.

---

## What's done

All seven requested pages, plus a 404, `sitemap.xml` and `robots.txt`.

| Route | Contains |
|---|---|
| `/` | Hero + CTAs, company intro with process, Passlay callout, services teaser, 3 testimonials, closing CTA |
| `/about` | Story, six values, four-step process, 8-person team grid |
| `/products` | Passlay flagship treatment, 6-feature grid, screenshot frames, "other work" grid |
| `/services` | Five services with deliverables, Passlay credibility section, engagement model |
| `/careers` | Culture, six perks, hiring bar, 4 roles with expandable detail, mailto apply |
| `/testimonials` | Nine testimonial cards |
| `/contact` | Validated form (front-end only) + contact details |

Shared: sticky responsive header with mobile drawer, consistent footer,
light/dark toggle, per-page SEO metadata, semantic HTML throughout.

**Verified:** `tsc --noEmit` clean · `eslint` clean at zero warnings ·
`next build` succeeds with every route prerendered static.

**Two deviations from the original plan.** The shadcn registry was unreachable
from the build sandbox, so `src/components/ui/` was written directly from the
shadcn sources (standard Tailwind-v4 `data-slot` versions). `components.json` is
present and correct, so `npx shadcn@latest add <component>` works normally from
here. Separately, lucide dropped brand icons in v1, so GitHub/LinkedIn/X are
hand-rolled SVGs in `src/components/common/icons/`.

---

## What to do next, in order

### Priority 1 — replace invented content

This is most of the remaining work, and it is all in `src/data/`. No component
changes needed.

1. **`data/site.ts`** — real domain (drives every canonical and OG URL), email
   addresses, phone, address, social URLs, availability line.
2. **`data/testimonials.ts`** — done. Four real quotes (Erika Bientexeler/Safe
   and Fit, Joel/Dev Geon, Zee/Zee Soft, Sahti); placeholder banner and
   mono-type note removed.
3. **`data/team.ts`** — done, by design: no named individuals. The About page
   "team" section now lists generic disciplines (Business Analysts, Product
   Owners, etc.) instead of people, so there's nothing left to fill in here.
4. **`data/careers.ts`** — real openings, and confirm which perks you actually
   offer. Note: Careers is currently hidden from nav (`data/site.ts`) and the
   contact form's topic dropdown — the `/careers` route and content still
   exist, just unlinked. Re-add the nav entries to bring it back.
5. **`data/products.ts`** — Passlay's real URL and real metrics (or delete the
   metrics block). Second entry is now Pookiepaw (real, under development).
6. **`data/company.ts`** — founding year, story, stats.
7. **`data/services.ts`** — done. Descriptions now reference real client work
   (Sahti, Dev Geon, Zee Soft, Trial Rocket for Safe and Fit) instead of
   generic filler.

Search the repo for `PLACEHOLDER` to find every marker. Remove each one as you
replace the content behind it.

### Priority 2 — assets

- **Logo.** Done — `Logo.tsx` now renders the real mark via
  `components/common/icons/LogoMark.tsx`, coloured with the `primary` token
  (teal, adopted from the logo). Source file: `public/logo.svg`.
- **Passlay screenshots.** `ScreenshotPlaceholder` renders a labelled browser
  frame. Once captures are in `/public/products/passlay/`, swap its inner div for
  `<Image src={screenshot.src} alt={screenshot.alt} fill className="object-cover" sizes="..." />`.
- **Favicon** — done. `src/app/icon.svg` (scalable, theme-aware via
  `prefers-color-scheme`) and `src/app/favicon.ico` (16/32/48px, generated from
  the same mark) both use the real logo mark now. Unused create-next-app
  scaffold SVGs removed from `public/`.
- **OG share image** — add `src/app/opengraph-image.png` (1200×630). Without it,
  links shared to Slack/LinkedIn/X have no preview image.

### Priority 3 — make the contact form real

`src/components/contact/ContactForm.tsx` currently simulates a request and shows
a success state. Nothing is sent anywhere. To wire it up:

1. Replace the `setTimeout` in `onSubmit` with a `POST` to `/api/contact`.
2. Create `src/app/api/contact/route.ts` and re-validate the payload with the
   exported `contactFormSchema` — never trust the client copy.
3. Send via Resend, Postmark or SendGrid. Put the key in `.env.local`.
4. Add spam protection (Cloudflare Turnstile or hCaptcha).

The full instructions are also in a comment block at the top of the component.
Adding this route makes only `/api/contact` dynamic — every page stays static.

Careers applications go to a `mailto:` link and need no backend.

### Priority 4 — deploy

Fully static, so anywhere works. Vercel is the least friction:

```bash
npx vercel
```

Before going live: set the real domain in `data/site.ts` (canonical and OG URLs
depend on it), and confirm `robots.ts` still allows indexing.

---

## Open questions

These shape copy, so worth deciding before the content pass:

1. **Passlay's real URL** — is `passlay.com` right, or should the external CTAs
   be removed until there's a public site?
2. **Passlay metrics** — do real numbers exist (tickets processed, uptime), or
   should that block come out? Invented metrics are the riskiest placeholder on
   the site.
3. **Company details** — founding year, whether to publish headcount, whether to
   publish a street address.
4. **Careers** — currently hidden from nav; re-open when ready to publish real
   listings in `data/careers.ts`.

---

## Conventions

`CLAUDE.md` in this folder covers the architecture and coding conventions —
component structure, shadcn usage, theming rules, the static-route constraint.
Claude Code reads it automatically. Worth skimming once before making changes,
particularly the rule about never using raw Tailwind colours.

`README.md` covers the brand direction, the palette table and the full
placeholder inventory.
