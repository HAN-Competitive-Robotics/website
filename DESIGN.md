# HAN Competitive Robotics — Homepage Design Spec

Industrial combat-robotics aesthetic for the homepage of a student team building
featherweight combat robots at HAN University of Applied Sciences, Arnhem (NL).
The design reads like a technical drawing: precise hairline grid, oversized condensed
type, one restrained signal color, zero decoration.

---

## 1. Design direction

- **Metaphor:** an engineering blueprint / hazard-striped workshop floor.
- **Energy:** precise, heavy, competitive — not playful, not corporate.
- **Structure:** a strict 7xl (80rem) container with visible left/right hairline borders
  running the full page height, giving the layout a "sheet of paper on a drafting table" feel.
- **Color discipline:** near-black greys for surfaces; HAN Pink is used only for signals —
  key words, section indices, icons, and the primary action. Never as large fills.
- **Texture:** a faint fixed 48×48px blueprint grid across the entire body background,
  plus a diagonal hazard-stripe strip on the hero's right edge.

---

## 2. Color system

All tokens live in `src/styles.css` as semantic CSS variables (oklch). No hardcoded
colors in components.

| Token | Value (oklch) | Approx. hex | Use |
|---|---|---|---|
| `--background` | `0.145 0.006 255` | `#121212`-ish | Page base |
| `--surface-raised` | `0.18 0.008 255` | `#1A1A1A`-ish | Team band section |
| `--surface-deep` | `0.11 0.005 255` | `#0D0D0D`-ish | Divisions band, footer |
| `--card` | `0.19 0.008 255` | `#1A1A1A`-ish | Division cards (70% alpha) |
| `--foreground` | `0.93 0.008 250` | `#E8E8EA` | Body text, headlines |
| `--muted-foreground` | `0.66 0.012 250` | `#9A9AA0` | Descriptions, meta |
| `--primary` / `--signal` | `0.60 0.238 9` | `#E5005B` (HAN Pink) | Accents only |
| `--primary-foreground` | `0.98 0.004 250` | near-white | Text on pink |
| `--border` | `0.31 0.01 255` | `#3A3A3E`-ish | Hairline grid lines |
| `--line-strong` | `0.43 0.012 255` | `#54545A`-ish | Stronger dividers, hero stat rule |
| `--accent` | `0.28 0.012 255` | `#2A2A2E`-ish | Hover fills |
| `--ring` | same as primary | — | Focus states |

Accent usage rules:
- Pink appears as: `HAN Competitive` in the H1, eyebrow rules/dashes, section indices,
  icons, dates, the "Featherweight" tag, the KG unit, and the primary button fill.
- Selection color is pink (`::selection` uses `--signal`).

---

## 3. Typography

| Role | Font | Treatment |
|---|---|---|
| Display / headlines | **Barlow Condensed** (`--font-display`) | Uppercase, bold, tight leading (0.76–0.9) |
| Body | **Manrope** (`--font-sans`) | 14–20px, relaxed leading (6–8) |
| Labels / meta / nav | **IBM Plex Mono** (`--font-mono`) | 9–11px, uppercase, tracking `widest`–`0.24em` |

Key sizes:
- H1: `clamp(4.6rem, 13vw, 10.5rem)`, three stacked lines, leading 0.76.
- H2: 5xl → 7xl, uppercase, leading 0.9–none.
- Card titles: 3xl uppercase; list-row titles: 2xl uppercase.
- All buttons, nav, dates, categories: mono microcopy style.

---

## 4. Layout & grid

- Container: `max-w-7xl`, centered, with `border-x` hairlines; inner padding `px-5 / sm:px-8`.
- Sections alternate background depth to create horizontal bands:
  hero (base) → divisions (`surface-deep`) → updates (base) → team (`surface-raised`) → footer (`surface-deep`).
- Full-width bands get `border-y`; the inner container re-applies `border-x`,
  so vertical rules never break.

### Hero
- Two-column at lg: content left, spec column right (`1fr` / `19rem`, gap 16).
- Content column: eyebrow row (pink dash + "HAN University of Applied Sciences" + pink "Featherweight"),
  giant 3-line H1, pink-left-bordered mission sentence, two action buttons.
- Spec column (desktop only): "13.6" in 7xl display + mono pink "KG" unit, mono tagline
  "Built by students. Engineered for impact.", pink down-right arrow.
- Right edge: 4rem-wide hazard-stripe strip (`industrial-stripes` utility, 60% opacity).
- Hero height: `calc(100vh - header)`.

### Divisions (01)
- `SectionHeading` left rail: pink mono index "01 / Core disciplines" + display H2.
- 3-column grid drawn with shared borders (`border-l/t` on grid, `border-b/r` on cells) —
  cells read as one ruled table. Min height 80 (20rem). Card: icon (pink, 1.5 stroke) +
  index number top row; large gap; title; description. Hover: fills `accent`.

### Updates (02)
- Ledger-style rows: `date (10rem, pink mono) | title + description | category chip`.
- Rows separated by hairlines; header rule is `line-strong`.

### Team band (03)
- Full-bleed raised surface. Left: mono index "03 / The crew" + big display H2.
  Right: "View our team" action link, baseline-aligned with the heading.

### Footer
- Team name + university line left; `hcr@han.nl` mailto right with pink mail icon.
- Bottom rule, then mono microcopy: "© 2026 …" / "Built in Arnhem / Made to compete".

---

## 5. Components & primitives

- **ActionLink** — the only button style. Rectangular (radius 4px token), `min-h-12`,
  mono uppercase label, trailing `ArrowRight` that slides +4px on hover.
  - Primary: pink fill, white text, hover 85% opacity.
  - Secondary: transparent with `line-strong` border, hover border-foreground + accent fill.
- **SectionHeading** — `md:grid-cols-[10rem_1fr]` with items end-aligned; pink mono
  index/eyebrow left, display H2 right.
- **Nav** — desktop: inline mono links (muted → foreground on hover). Mobile (<lg):
  horizontal scroll strip under the header, hairline-divided cells.
- Icons: Lucide only, `strokeWidth 1.5` for display icons, `size-4` inline.

---

## 6. Motion

- **Hero entrance (`animate-rise`):** staggered fade + 18px rise, 600ms,
  `cubic-bezier(.22, 1, .36, 1)`, delays 0/100/200/300ms via `[animation-delay]`.
- **Section reveal:** `[data-reveal]` sections start at 0 opacity / +22px translate;
  an IntersectionObserver (threshold 0.14) adds `.is-visible` once, then unobserves.
  700ms same easing.
- **Hover micro-motion:** arrow slide on buttons, card background fill, link color shift.
- **Reduced motion:** `prefers-reduced-motion` disables all animations/transitions and
  forces reveal sections visible.

---

## 7. Responsive behavior

| Breakpoint | Change |
|---|---|
| < `lg` | Nav moves to scrollable strip; hero collapses to one column (spec column hidden); division grid stacks; H1 scales via clamp |
| < `md` | Section headings stack; update rows stack vertically; footer/team band stack |
| Base | Container padding 5; mono nav at 9px in the strip |

---

## 8. Accessibility & quality bar

- Semantic landmarks: `header`/`nav` (labelled "Main" and "Mobile"), `main`, `section`,
  `article`, `footer`, `time` for dates.
- All decorative icons `aria-hidden`; logo link has an aria-label.
- Pink (`oklch 0.60 0.238 9`) on the 0.145 background meets WCAG AA for large text and
  UI accents; body text uses 0.93 foreground.
- Touch targets ≥ 48px (`min-h-12` buttons, padded nav cells).
- Motion respects `prefers-reduced-motion`.

---

## 9. Token map (Tailwind usage)

Components never use raw colors — only semantic utilities generated from the tokens:
`bg-background`, `bg-surface-deep`, `bg-surface-raised`, `bg-card`, `bg-accent`,
`bg-muted`, `text-foreground`, `text-muted-foreground`, `text-primary`,
`bg-primary`, `border-border`, `border-line-strong`, plus the custom utilities
`animate-rise`, `industrial-stripes`, and `reveal-section`.
