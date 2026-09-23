# Comprehensive Codebase Audit & AI Slop Review Report
**HAN Competitive Robotics (HCR) Official Website**

---

| Audit Metadata | Details |
|---|---|
| **Target Repository** | `HAN-Competitive-Robotics/website` |
| **Workspace Path** | `C:\Users\Luka\.gemini\antigravity\worktrees\website\premium_3d_website_redesign` |
| **Audit Date** | September 23, 2026 |
| **Framework & Tooling** | Next.js 16.1.6 (Turbopack, App Router), React 19.2.3, Tailwind CSS v4, Base UI (shadcn base-nova), Framer Motion 12.35.2 |
| **Build Mode** | Static HTML Export (`output: "export"`, `distDir: "out"`) |
| **Integrity Mode** | Read-Only Audit (Forensic verification; zero application source modifications) |
| **Evaluation Multi-Agent Team** | Static Survey Explorers (1, 2, 3), Playwright Dynamic Verification Worker, Master Report Synthesis Worker |

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Code Smells & AI Slop](#2-code-smells--ai-slop)
   - [2.1 Internal AI Monologue & Scaffolding Comments in Production JSX](#21-internal-ai-monologue--scaffolding-comments-in-production-jsx)
   - [2.2 Hallucinated & Phantom CSS Classes Failing Silently](#22-hallucinated--phantom-css-classes-failing-silently)
   - [2.3 Hallucinated Physical Units & Nonsensical Data](#23-hallucinated-physical-units--nonsensical-data)
   - [2.4 Unused Local Assets vs. Broken External Stock Media](#24-unused-local-assets-vs-broken-external-stock-media)
   - [2.5 Mock Arrays, Unrendered Data & Omitted Team Roster](#25-mock-arrays-unrendered-data--omitted-team-roster)
   - [2.6 Documentation Drift & Outdated Template Placeholders](#26-documentation-drift--outdated-template-placeholders)
3. [Architecture Flaws](#3-architecture-flaws)
   - [3.1 Severe Architectural & Visual Bifurcation (Dual Design System)](#31-severe-architectural--visual-bifurcation-dual-design-system)
   - [3.2 100% Client Components & Complete Abandonment of RSC](#32-100-client-components--complete-abandonment-of-rsc)
   - [3.3 Broken Title Templating & Complete Absence of Page Metadata](#33-broken-title-templating--complete-absence-of-page-metadata)
   - [3.4 Deprecated Link Behavior & Invalid Nested Interactive Elements](#34-deprecated-link-behavior--invalid-nested-interactive-elements)
   - [3.5 Button Primitive Incompatibility & Style Clashing](#35-button-primitive-incompatibility--style-clashing)
   - [3.6 Dead & Orphaned UI Component Library Code](#36-dead--orphaned-ui-component-library-code)
   - [3.7 Semantic HTML & Accessibility Landmark Deficiencies](#37-semantic-html--accessibility-landmark-deficiencies)
4. [Security & Performance Risks](#4-security--performance-risks)
   - [4.1 Critical Data Leak: Developer IP Address & Wikimedia 429 Error Stored as PNG](#41-critical-data-leak-developer-ip-address--wikimedia-429-error-stored-as-png)
   - [4.2 Deceptive Contact Form & PII Exposure via Console Logging](#42-deceptive-contact-form--pii-exposure-via-console-logging)
   - [4.3 Missing Metadata & OpenGraph Assets (404 Harvest)](#43-missing-metadata--opengraph-assets-404-harvest)
   - [4.4 Complete Bypassing of Next.js Image Optimization Pipeline](#44-complete-bypassing-of-nextjs-image-optimization-pipeline)
   - [4.5 Fragile External CDN Dependency (ORB Network Failure)](#45-fragile-external-cdn-dependency-orb-network-failure)
   - [4.6 Redundant Framer Motion Bundle Weight](#46-redundant-framer-motion-bundle-weight)
   - [4.7 Complete Absence of 3D Capabilities ("Ghost 3D Redesign")](#47-complete-absence-of-3d-capabilities-ghost-3d-redesign)
   - [4.8 Production Dependency Misclassification & Broken Start Script](#48-production-dependency-misclassification--broken-start-script)
5. [Visual & UI (Playwright Verification Findings)](#5-visual--ui-playwright-verification-findings)
   - [5.1 Test Matrix & Runtime Environment](#51-test-matrix--runtime-environment)
   - [5.2 Route-by-Route Browser Verification Log](#52-route-by-route-browser-verification-log)
   - [5.3 Critical Mobile Horizontal Layout Overflow (375px Viewport)](#53-critical-mobile-horizontal-layout-overflow-375px-viewport)
   - [5.4 Live Browser Console Error Logs](#54-live-browser-console-error-logs)
   - [5.5 Interactive Element & Form Automation Failures](#55-interactive-element--form-automation-failures)
6. [Prioritized Remediation Roadmap](#6-prioritized-remediation-roadmap)
7. [Verification & Audit Reproduction Guide](#7-verification--audit-reproduction-guide)

---

## 1. Executive Summary

A forensic audit was conducted on the HAN Competitive Robotics (HCR) website codebase to evaluate code quality, architectural integrity, performance, security posture, and the presence of low-grade generative AI artifacts ("AI slop"). The assessment combined static AST analysis, ESLint diagnostics, TypeScript compilation checks, asset verification, and live browser automation across all routes using Playwright at desktop (`1280x800`) and mobile (`375x812`) viewports.

### Key Audit Conclusions

1. **Severe Architectural Bifurcation**: The codebase is split into two conflicting paradigms. The homepage (`app/page.tsx`), navigation (`components/navbar.tsx`), footer (`components/footer.tsx`), and root styles (`app/globals.css`) implement an industrial brutalist design system based on `DESIGN.md` with semantic OKLCH color tokens, technical display fonts, hairline grids, and CSS hardware animations. Conversely, **all five secondary routes (`/about`, `/robot`, `/team`, `/sponsors`, `/contact`) remain stranded in an outdated AI-scaffolded SaaS template** featuring hardcoded hex values (`#0a0a0a`, `#E5005B`), generic rounded cards, heavy Framer Motion bundles, and broken CSS classes.
2. **Prevalence of "AI Slop" & Hallucinated Code**:
   - An internal conversational AI reasoning monologue was committed directly into root production JSX (`app/layout.tsx:103-105`).
   - Multiple phantom CSS utility classes (`.text-gradient` in 26 places, `.bg-grid-pattern` in 5, `.blur-glow` in 5, `.no-scrollbar` in 1) have **zero definition** in CSS, causing headings across all five subpages to render as unstyled flat white text.
   - Physical units and technical specifications are hallucinated: kinetic energy is cited as `"250+ g"` (grams instead of Joules) in `app/about/page.tsx:404`; robot dimensions are `"TBD"`; the current robot `HCR-1` is listed under "Future Robots"; and student degrees in `app/team/page.tsx` are developer joke punchlines (e.g. `"Segmentation fault? I hardly know her"`).
3. **Security & Data Integrity Hazards**:
   - **Critical Data Leak**: `public/images/han-logo.png` is an HTML 429 (Rate Limit) error document downloaded from Wikimedia Varnish cache that exposes an internal developer IP address (`122.172.83.10`).
   - **Deceptive Contact Form**: `app/contact/page.tsx:107-111` performs no network request or API transmission. It dumps user PII (name, email, subject, message) into `console.log` and presents a fake success screen promising a response within 48 hours, causing permanent message loss.
   - **404 Metadata Harvest**: OpenGraph and icon references in `app/layout.tsx` (`/og-image.jpg`, `/favicon-16x16.png`, `/apple-touch-icon.png`, `/site.webmanifest`) do not exist, causing 404 console errors on every page load.
4. **Performance & Modern Best Practice Violations**:
   - Next.js image optimization is 100% disabled (`images.unoptimized: true` in `next.config.ts`), `next/image` is never imported, and raw `<img>` tags are used without dimensions, triggering 4 ESLint warnings and layout shifts.
   - The primary robot hero photo in `app/robot/page.tsx` pulls a generic stock image from an external Unsplash URL that fails with `ERR_BLOCKED_BY_ORB` in modern browsers, collapsing to a 24px broken image, while authentic high-resolution local photos (`public/robot/hcr-1.jpg`, `chassis.jpg`, `workshop.jpg`) sit orphaned on disk.
   - All 6 routes declare `"use client"`, abandoning React Server Components, streaming HTML, and route bundle tree-shaking. Title templating (`"%s | HCR"`) is non-functional because client components cannot export metadata.
   - Complete absence of 3D rendering (zero Three.js, React Three Fiber, WebGL, or 3D models) despite the worktree designation `premium_3d_website_redesign`.
5. **Dynamic Playwright Verification Failures**:
   - Mobile layout blowout: `/about` and `/robot` exhibit a **14px horizontal overflow (`scrollWidth: 389px > 375px`)** caused by uncontained Framer Motion `x: 30` entrance translations.
   - Broken primary CTA: The "Become a Sponsor" button on `/sponsors` links to `#contact`, which does not exist in the DOM, leaving users stranded.

---

## 2. Code Smells & AI Slop

### 2.1 Internal AI Monologue & Scaffolding Comments in Production JSX
In `app/layout.tsx`, lines 103–105 contain an internal LLM prompt/scratchpad comment that was committed into the production root layout:

```tsx
// File: app/layout.tsx (Lines 102–105)
<main>{children}</main>
{/* We will replace the default Footer or override its style in its component, but we can just use the provided one for now or rewrite it later if needed. */}
<Footer />
```
*Impact*: Conveys amateurish development hygiene and confirms that AI code generation was accepted without code review.

Additional scaffolding comments littering the codebase include:
- `app/sponsors/page.tsx:104-105`:
  ```tsx
  // Add more sponsors here as needed:
  // { name: "Company Name", logo: "/sponsors/company-logo.svg" },
  ```
- `app/robot/page.tsx:165`:
  ```tsx
  {/* Robot Render/Placeholder */}
  ```
- `app/team/page.tsx:24-25`:
  ```tsx
  // Team data structure - easy to edit
  // Add or modify team members here
  ```

---

### 2.2 Hallucinated & Phantom CSS Classes Failing Silently
A pervasive hallmark of unverified AI code generation is the hallucination of utility classes that the model assumes exist in Tailwind or CSS modules.

#### 1. `.text-gradient` (26 Occurrences Across 5 Subpages)
Used across major headings and highlighted spans, `.text-gradient` has **no definition** in `app/globals.css`, Tailwind v4, or imported packages. As verified by Playwright runtime inspection (`window.getComputedStyle()`), every element renders with `backgroundImage: "none"` and flat fallback white text.

| File Path | Line Numbers | Target Element / Code Snippet |
|---|---|---|
| `app/about/page.tsx` | 129, 156, 208, 271, 315, 367, 422, 445 | `<span className="text-gradient">HAN University</span>`<br>`<span className="text-gradient">Robotics?</span>`<br>`<span className="text-gradient">Exist</span>`<br>`<span className="text-gradient">Learn</span>`<br>`<span className="text-gradient">Structure</span>`<br>`<span className="text-gradient">250+ g</span>`<br>`<span className="text-gradient">More?</span>` |
| `app/robot/page.tsx` | 147, 200, 258, 315, 371, 425, 495 | `<span className="text-gradient">The Robot</span>`<br>`<span className="text-gradient">Competition</span>`<br>`<span className="text-gradient">Specifications</span>`<br>`<span className="text-gradient">Subsystems</span>`<br>`<span className="text-gradient">Robots</span>`<br>`<span className="text-gradient">HCR</span>` |
| `app/team/page.tsx` | 240, 311 | `<span className="text-gradient">The Team</span>`<br>`<span className="text-gradient">HCR</span>` |
| `app/sponsors/page.tsx` | 126, 179, 220, 266, 303 | `<span className="text-gradient">Sponsors</span>`<br>`<span className="text-gradient">Partner</span>`<br>`<span className="text-gradient">Impact</span>`<br>`<span className="text-gradient">Tiers</span>`<br>`<span className="text-gradient">Support</span>` |
| `app/contact/page.tsx` | 144, 174, 390, 430 | `<span className="text-gradient">Touch</span>`<br>`<span className="text-gradient">Us</span>`<br>`<span className="text-gradient">Asked</span>`<br>`<span className="text-gradient">Ready</span>` |

#### 2. `.bg-grid-pattern` (5 Occurrences)
Used in the background decoration of subpage hero sections:
- `app/about/page.tsx:109`: `<div className="absolute inset-0 bg-grid-pattern opacity-10" />`
- `app/robot/page.tsx:126`: `<div className="absolute inset-0 bg-grid-pattern opacity-10" />`
- `app/team/page.tsx:219`: `<div className="absolute inset-0 bg-grid-pattern opacity-10" />`
- `app/sponsors/page.tsx:113`: `<div className="absolute inset-0 bg-grid-pattern opacity-10" />`
- `app/contact/page.tsx:123`: `<div className="absolute inset-0 bg-grid-pattern opacity-10" />`
*Finding*: `.bg-grid-pattern` is not defined anywhere in the project. The background divs evaluate to `background: none` and render nothing.

#### 3. `.blur-glow` (5 Occurrences)
Intended to cast a radial accent illumination:
- `app/about/page.tsx:110`: `<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-glow" />`
- `app/robot/page.tsx:127`: `<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-glow" />`
- `app/team/page.tsx:220`: `<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-glow" />`
- `app/sponsors/page.tsx:114`: `<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-glow" />`
- `app/contact/page.tsx:124`: `<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-glow" />`
*Finding*: Has zero CSS definition; renders as an invisible element.

#### 4. `.no-scrollbar` (1 Occurrence)
- `components/navbar.tsx:54`: `<div className="lg:hidden border-t border-border overflow-x-auto no-scrollbar bg-surface-deep">`
*Finding*: Undeclared class. The mobile touch scroll strip retains standard system scrollbars because `no-scrollbar` rules (`scrollbar-width: none; -ms-overflow-style: none; &::-webkit-scrollbar { display: none; }`) were never written.

---

### 2.3 Hallucinated Physical Units & Nonsensical Data

#### 1. Kinetic Energy Specified in Grams (`g`)
In an engineering competition robotics showcase, kinetic weapon energy is a primary performance metric:
```tsx
// File: app/about/page.tsx (Lines 403–407)
403:                 {
404:                   stat: "250+",
405:                   unit: "g",
406:                   label: "Energy in a spinning kinetic system",
407:                 },
```
*Error*: Grams (`g`) is a unit of mass (or acceleration if capitalized G). Kinetic energy is measured in **Joules (J)** or **Kilojoules (kJ)** ($E_k = \frac{1}{2} I \omega^2$). Stating energy as "250+ g" is physically nonsensical.

#### 2. Abstract "Infinity" Statistic
```tsx
// File: app/about/page.tsx (Lines 413–417)
413:                 {
414:                   stat: "∞",
415:                   unit: "",
416:                   label: "Learning opportunities in every build",
417:                 },
```
*Critique*: Clichés in place of genuine technical team achievements.

#### 3. Unresolved "TBD" Dimensions in Public Robot Specs
```tsx
// File: app/robot/page.tsx (Lines 38–41)
38:   { label: "Dimensions", value: "TBD", detail: "Length x Width x Height" },
39:   { label: "Armor", value: "Hardox 450", detail: "Chassis protection" },
40:   { label: "Active Element", value: "TBD", detail: "High energy mechanism" },
```
*Finding*: Placeholders were committed to production rather than retrieving the robot's physical dimensions and weapon configuration from the CAD model or build sheet.

#### 4. Current Robot HCR-1 Placed in "Future Robots" Section
```tsx
// File: app/robot/page.tsx (Lines 433–441)
433:           <div className="grid gap-6 md:grid-cols-2">
434:             {[
435:               {
436:                 name: "HCR-1",
437:                 status: "Current",
438:                 description:
439:                   "Our first featherweight robot, focusing on proven design principles and reliability.",
440:               },
441:               {
442:                 name: "HCR-2",
443:                 status: "Planned 2027",
444:                 description:
445:                   "Next-generation platform exploring advanced materials, higher power density, and telemetry.",
446:               },
```
*Finding*: Under a section explicitly headlined `Future Robots` (`line 425`), the active robot `HCR-1` is listed as the first item alongside planned future platforms.

#### 5. Developer Joke Punchlines in Team Degree Field
In `app/team/page.tsx`, the member schema defines `program` (intended for academic degrees such as "B.Sc. Mechanical Engineering"), but has been populated with humorous developer punchlines:
```tsx
// File: app/team/page.tsx
Line 36:  program: "Keeping the chaos organized since 2025"
Line 43:  program: "If it works, don't touch it"
Line 58:  program: "Torque is cheap, grip is everything"
Line 65:  program: "Making things spin since day one"
Line 72:  program: "If it bends, make it stronger"
Line 79:  program: "Measure twice, cut once, panic never"
Line 86:  program: "Spin to win"
Line 93:  program: "More sparks, more fun"
Line 108: program: "Magic smoke is expensive"
Line 115: program: "printf debugging enthusiast"
Line 122: program: "Segmentation fault? I hardly know her"
Line 129: program: "Over the air and under the radar"
```

#### 6. Duplicate Team Member Objects Across Divisions
Rather than modeling cross-functional roles through an array of affiliations, full duplicate member cards were created:
- **Vishaal Girish Gopala Krishnan**: Duplicated at line 34 (Management: Team Lead) and line 63 (Mechanical: Chassis Lead).
- **Neiv Malaviya**: Duplicated at line 41 (Management: Operations Lead) and line 113 (Electrical: Firmware Lead).

---

### 2.4 Unused Local Assets vs. Broken External Stock Media

#### 1. Orphaned Robot Photography vs. Broken Unsplash CDN
`app/robot/page.tsx:174-178` pulls a stock photo from `images.unsplash.com` and labels it "HCR-1 Battlebot":
```tsx
174: <img
175:   src="https://images.unsplash.com/photo-1563178406-4f8025767818?w=800&h=800&fit=crop"
176:   alt="HCR-1 Battlebot"
177:   className="h-full w-full object-cover"
178: />
```
*Playwright Verification*: The browser blocks this request with `net::ERR_BLOCKED_BY_ORB`, collapsing the robot hero photo into a 24px broken element.  
*Orphaned Assets*: Meanwhile, the team's genuine photos sit completely unused in `public/`:
- `public/robot/hcr-1.jpg` (62.6 KB — authentic combat robot photo)
- `public/robot/chassis.jpg` (66.1 KB — authentic chassis build photo)
- `public/robot/workshop.jpg` (56.7 KB — team workshop photo)
- `public/about/competition.jpg` (37.0 KB — competition arena photo)

#### 2. Placeholder Squares in `public/images/`
- `public/images/logo.png` (1,307 bytes): 128x128 pink square with white "HCR" text. Completely unused.
- `public/images/logo-lg.png` (2,541 bytes): 200x200 pink square with white "HCR" text. Completely unused.
- `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`: Unused Next.js template SVGs.

---

### 2.5 Mock Arrays, Unrendered Data & Omitted Team Roster

#### 1. Unrendered Sponsor Logos & Neglected SVGs
In `app/sponsors/page.tsx`:
```tsx
// Lines 99–106:
const currentSponsors = [
  {
    name: "HAN",
    logo: "/sponsors/han-platinum.svg",
  },
];
...
// Lines 145–148:
<div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-[#E5005B]/10">
  <Sparkles className="h-10 w-10 text-[#E5005B]" />
</div>
<h3 className="text-lg font-bold text-white">{sponsor.name}</h3>
```
*Observation*: `sponsor.logo` is defined at line 102 but **never rendered in the JSX**. A generic Lucide `Sparkles` icon is displayed instead.  
Furthermore, `public/sponsors/` contains **8 dedicated sponsor SVGs** that are 100% orphaned:
`han-platinum.svg`, `gold-1.svg`, `gold-2.svg`, `silver-1.svg`, `silver-2.svg`, `silver-3.svg`, `supporter-1.svg`, `supporter-2.svg`.

#### 2. Omitted Team Member Photo
`public/team/mohammed.png` (6,260 bytes) is present in the repository, but Mohammed is completely omitted from the roster in `app/team/page.tsx`.

---

### 2.6 Documentation Drift & Outdated Template Placeholders

#### 1. `README.md`
- **Line 3**: `[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hcr-website)` (Unreplaced placeholder `yourusername`).
- **Line 7**: `🌐 **Live Site:** [https://hcr-han.nl](https://hcr-han.nl) _(update with your URL)_` (Unreplaced template instruction).
- **Lines 9–11, 48, 50**: Claims **Next.js 14** and **TailwindCSS 3.0**, whereas `package.json` installs **Next.js 16.1.6** and **Tailwind CSS v4**.
- **Line 17**: `git clone https://github.com/yourusername/hcr-website.git`
- **Line 58**: Project directory is labeled `my-app/`.
- **Lines 110–118**: Documents obsolete palette hexes (`#121212`, `#1A1A1A`, `#FF6B9A`) instead of the semantic OKLCH design tokens.

#### 2. `DEPLOYMENT.md`
- **Line 44**: `git remote add origin https://github.com/YOUR_USERNAME/hcr-website.git` (Unreplaced placeholder `YOUR_USERNAME`).

---

## 3. Architecture Flaws

### 3.1 Severe Architectural & Visual Bifurcation (Dual Design System)
The project exhibits a split personality caused by an incomplete redesign:

```
┌─────────────────────────────────────────────────────────────┐
│                 Phase 2: Industrial Brutalist                │
│  - app/page.tsx (Home), components/navbar.tsx, footer.tsx   │
│  - DESIGN.md spec: OKLCH semantic tokens, hairline borders  │
│  - Barlow Condensed Display, IBM Plex Mono, Manrope sans    │
│  - CSS keyframes (animate-rise), IntersectionObserver       │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │   Aesthetic & Architectural Chasm
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Phase 1: Generic Dark SaaS                 │
│  - app/about, app/robot, app/team, app/sponsors, app/contact│
│  - Hardcoded hex: bg-[#0a0a0a], bg-[#0f0f0f], text-[#E5005B]│
│  - Large rounded corners: rounded-xl, rounded-2xl           │
│  - Heavy Framer Motion (staggerContainer, fadeInUp)         │
│  - Phantom CSS: .text-gradient, .bg-grid-pattern, .blur-glow │
└─────────────────────────────────────────────────────────────┘
```

#### Code Evidence: Hardcoded Hexes in Subpages
- `app/about/page.tsx:107`: `bg-[#0a0a0a]`
- `app/about/page.tsx:198, 222, 285`: `bg-[#0f0f0f]`, `border-[#1f1f1f]`
- `app/about/page.tsx:455`: `bg-[#E5005B] hover:bg-[#E5005B]/90`
- `app/robot/page.tsx:124, 185`: `bg-[#0a0a0a]`, `bg-[#141414]`
- `app/robot/page.tsx:504`: `bg-[#E5005B]`
- `app/sponsors/page.tsx:111, 146, 195`: `bg-[#0a0a0a]`, `bg-[#E5005B]/10`, `bg-[#E5005B]`
- `app/contact/page.tsx:121, 341`: `bg-[#0a0a0a]`, `bg-[#E5005B]`

*Impact*: Navigating from the homepage to any subpage results in jarring visual whiplash, transitioning from a sharp, precision-engineered industrial layout to a generic, bubbly SaaS template.

---

### 3.2 100% Client Components & Complete Abandonment of RSC
Every single route page begins with `"use client"`:
- `app/page.tsx:1`
- `app/about/page.tsx:1`
- `app/robot/page.tsx:1`
- `app/team/page.tsx:1`
- `app/sponsors/page.tsx:1`
- `app/contact/page.tsx:1`

In Next.js App Router, page routes should be React Server Components (RSC) by default, pushing interactivity to leaf components. Declaring `"use client"` at the route root has catastrophic consequences:
1. **Zero Server Streaming**: Bypasses progressive HTML rendering and Suspense streaming.
2. **Bundle Bloat**: Forces the browser to download, parse, and execute React component code for purely static text/cards.
3. **Loss of Server Metadata**: Client components cannot export `metadata` or `generateMetadata()`, breaking SEO capabilities.

---

### 3.3 Broken Title Templating & Complete Absence of Page Metadata
In `app/layout.tsx`:
```tsx
// File: app/layout.tsx (Lines 27–31)
27: export const metadata: Metadata = {
28:   title: {
29:     default: "HAN Competitive Robotics | HCR",
30:     template: "%s | HCR",
31:   },
```
Because every inner page (`/about`, `/robot`, `/team`, `/sponsors`, `/contact`) is a Client Component, **none of them export a `metadata` object**. As verified via Playwright, the browser title on every single subpage evaluates to:
```
HAN Competitive Robotics | HCR
```
The template `"%s | HCR"` never activates for any route. Furthermore, no subpage provides custom `<meta name="description">` or OpenGraph tags.

---

### 3.4 Deprecated Link Behavior & Invalid Nested Interactive Elements

#### 1. Deprecated `legacyBehavior` on `<Link>`
In `app/page.tsx`:
```tsx
// File: app/page.tsx (Lines 58–63, 64–69, 235–240)
58: <Link href="/team" passHref legacyBehavior>
59:   <Button size="lg" className="group">
60:     Meet the Team
61:     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
62:   </Button>
63: </Link>
```
*Console Error*:
```
[ERROR] legacyBehavior is deprecated and will be removed in a future release. A codemod is available to upgrade your components: npx @next/codemod@latest new-link .
```
In Next.js 13+, `<Link>` renders an `<a>` element by default. `legacyBehavior` clones `href` down to the child. However, `<Button>` renders a `<button type="button">`. This produces `<button type="button" href="/team">`. HTML `<button>` elements do not recognize `href`, breaking middle-click "Open link in new tab" and right-click context menus.

#### 2. Interactive Content Inside Interactive Content (W3C Violation)
Across all subpages:
- `app/about/page.tsx:452, 461`
- `app/robot/page.tsx:221, 230, 501, 510`
- `app/team/page.tsx:317, 326`
- `app/sponsors/page.tsx:192`
- `app/contact/page.tsx:436, 445`

The code wraps `<Button>` directly inside `<Link>`:
```tsx
<Link href="/robot">
  <Button ...>The Robot</Button>
</Link>
```
Without `asChild` or button styling applied directly to `<Link>`, Next.js generates:
```html
<a href="/robot"><button type="button">The Robot</button></a>
```
**This is a W3C HTML5 specification violation**: interactive elements (`<button>`) MUST NOT be nested inside interactive elements (`<a>`). Screen readers and accessibility tools flag this as an invalid accessibility tree structure.

---

### 3.5 Button Primitive Incompatibility & Style Clashing
`components/ui/button.tsx` was rewritten during the homepage redesign to enforce an industrial mono uppercase aesthetic:
```tsx
// File: components/ui/button.tsx (Lines 6–9)
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded border border-transparent min-h-12 bg-clip-padding text-[10px] tracking-widest uppercase font-mono whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
```
However, the subpages pass conflicting Tailwind overrides:
- `app/sponsors/page.tsx:195`: `<Button size="lg" className="bg-[#E5005B] px-10 py-6 text-lg font-semibold text-white hover:bg-[#E5005B]/90">`
- `app/about/page.tsx:455`: `<Button size="lg" className="bg-[#E5005B] px-8 font-semibold text-white hover:bg-[#E5005B]/90">`
- `app/contact/page.tsx:341`: `<Button className="w-full bg-[#E5005B] py-6 font-semibold text-white hover:bg-[#E5005B]/90">`

*Conflict*: The base component sets `text-[10px] font-mono uppercase min-h-12`. Passing `text-lg font-semibold py-6 px-10` creates an unresolvable collision in `tailwind-merge`, producing inconsistent button geometries and unstyled font hierarchies.

---

### 3.6 Dead & Orphaned UI Component Library Code
Three complete Base UI component files in `components/ui/` are 100% unused:
1. **`components/ui/navigation-menu.tsx` (162 lines)**: Zero imports across the repository.
2. **`components/ui/sheet.tsx` (126 lines)**: Zero imports across the repository (orphaned when the mobile menu was changed to an inline scroll strip).
3. **`components/ui/avatar.tsx` (94 lines)**: Imported in `app/team/page.tsx:9` (`Avatar`, `AvatarFallback`, `AvatarImage`), but never rendered in the JSX (triggering 3 ESLint warnings).
4. **`components/ui/card.tsx`**: `CardHeader` and `CardTitle` are imported in `app/robot/page.tsx:19` but never rendered; `CardAction`, `CardFooter`, `CardDescription` are completely dead exports.

---

### 3.7 Semantic HTML & Accessibility Landmark Deficiencies
1. **Unlabeled Navigation Landmarks**: `components/navbar.tsx:34, 55` renders desktop and mobile `<nav>` elements without `aria-label` attributes, violating `DESIGN.md:142` ("Semantic landmarks: header/nav (labelled 'Main' and 'Mobile')").
2. **Non-Semantic Update Dates**: `app/page.tsx:204` displays log update dates inside a plain `<div>` rather than a semantic `<time dateTime="YYYY-MM-DD">` element.
3. **Non-Compliant Specifications Table**: `app/robot/page.tsx:274-295` renders an 8-row technical specifications table using `<tbody>` and `<td>` cells with **no `<thead>`, `<th>`, or `scope` attributes**, failing WCAG 2.1 tabular data navigation standards.

---

## 4. Security & Performance Risks

### 4.1 Critical Data Leak: Developer IP Address & Wikimedia 429 Error Stored as PNG
- **File**: `public/images/han-logo.png` (2,187 bytes)
- **Status**: The file has a `.png` extension, but its content is an **HTML error page** returned when an automated scraper was rate-limited by Wikimedia.

```html
<!-- File: public/images/han-logo.png (Lines 1–4, 38–41) -->
<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<title>Wikimedia Error</title>
...
<div class="footer"><p>If you report this error to the Wikimedia System Administrators, please include the details below.</p><p class="text-muted"><code>Request served via cp5025 cp5025, Varnish XID 1057850940<br>Upstream caches: cp5025 int<br>Error: 429, Use thumbnail steps listed on https://w.wiki/GHai. Please contact noc@wikimedia.org for further information (a765913) at Wed, 11 Mar 2026 09:00:05 GMT<br><details><summary>Sensitive client information</summary>IP address: 122.172.83.10</details></code></p>
```

#### Security & Operational Impacts
1. **Information Leak**: The public web server serves the developer/builder IP address `122.172.83.10` directly to any requester at `https://<domain>/images/han-logo.png`.
2. **MIME-Type Confusion**: Serving an HTML payload with `Content-Type: image/png` triggers MIME-sniffing vulnerabilities and browser rendering errors.
3. **Broken Rendering**: The browser image decoder fails (`naturalWidth: 0, naturalHeight: 0`).

---

### 4.2 Deceptive Contact Form & PII Exposure via Console Logging
- **File**: `app/contact/page.tsx` (Lines 107–111)

```tsx
107:   const handleSubmit = (e: React.FormEvent) => {
108:     e.preventDefault();
109:     console.log("Contact form submitted:", formData);
110:     setFormSubmitted(true);
111:   };
```

#### Forensic Findings
1. **Zero Backend Integration**: The form executes no `fetch`, no XMLHttpRequest, and triggers no Server Action.
2. **Deceptive UX**: Immediately upon clicking "Submit Message", the user is greeted with:
   ```text
   Message Sent!
   Thank you for reaching out. We will get back to you within 48 hours.
   ```
   Prospective sponsors, academic advisors, and students are misled into believing their message was delivered. All submissions are silently discarded.
3. **PII Exposure in Browser Logs**: User names, private email addresses, and message contents are printed in plain text to the browser console (`console.log`), making them accessible to any rogue browser extension or shared workstation user.
4. **Missing Validation**: Inputs have no `maxLength`, regex sanitization, or rate limiting.

---

### 4.3 Missing Metadata & OpenGraph Assets (404 Harvest)
In `app/layout.tsx`:
```tsx
// Lines 58–63, 70, 83–88:
openGraph: {
  images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
},
twitter: {
  images: ["/og-image.jpg"],
},
icons: {
  shortcut: "/favicon-16x16.png",
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",
```
*Finding*: **None of these 4 files exist in `public/`**:
- `public/og-image.jpg` — Missing (404 Not Found)
- `public/favicon-16x16.png` — Missing (404 Not Found)
- `public/apple-touch-icon.png` — Missing (404 Not Found)
- `public/site.webmanifest` — Missing (404 Not Found)

*Impact*: Verified in Playwright, the browser emits active console errors on **every route navigation** when attempting to parse `/site.webmanifest`. Social media link unfurls (Discord, Twitter/X, LinkedIn, Slack) fail to display preview cards.

---

### 4.4 Complete Bypassing of Next.js Image Optimization Pipeline
In `next.config.ts`:
```ts
// File: next.config.ts (Lines 11–13)
images: {
  unoptimized: true,
},
```
- `next/image` is **never imported** anywhere in the project.
- Native `<img>` tags are used throughout without explicit `width` or `height` dimensions:
  - `app/about/page.tsx:185`: `<img src="/about/team-workshop.jpg" alt="Team Workshop" />`
  - `app/robot/page.tsx:174`: `<img src="https://images.unsplash.com/..." alt="HCR-1 Battlebot" />`
  - `app/robot/page.tsx:400`: `<img src="/robot/cad-design.jpg" alt="CAD Design Process" />`
  - `app/team/page.tsx:157`: `<img src={member.image} alt={member.name} />`

*ESLint Warnings*: Triggers 4 `@next/next/no-img-element` warnings.  
*Performance Impact*: Missing dimensions induce Cumulative Layout Shift (CLS). Unoptimized raw JPEGs/PNGs mean mobile visitors receive multi-megabyte desktop assets with no modern AVIF/WebP conversion.

---

### 4.5 Fragile External CDN Dependency (ORB Network Failure)
- `app/robot/page.tsx:175` fetches:
  `https://images.unsplash.com/photo-1563178406-4f8025767818?w=800&h=800&fit=crop`
- **Chromium Runtime Evaluation**: Blocked under `net::ERR_BLOCKED_BY_ORB` (Opaque Response Blocking).
- **Result**: The primary robot image fails to display entirely in the browser, showing an empty broken box. Relying on an unauthenticated third-party CDN introduces DNS latency, potential link rot, and security blocking.

---

### 4.6 Redundant Framer Motion Bundle Weight
- `framer-motion: ^12.35.2` is imported in `app/about/page.tsx`, `app/robot/page.tsx`, `app/team/page.tsx`, `app/sponsors/page.tsx`, and `app/contact/page.tsx`.
- The library is used solely for standard fade-and-slide reveals:
  ```tsx
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  ```
- **Cost**: Injects ~35 KB+ (gzipped) of runtime JavaScript into every subpage.
- **Redundancy**: `app/globals.css:70-96` already provides hardware-accelerated CSS animations (`.animate-rise` and `.reveal-section` with `IntersectionObserver`) that achieve the identical effect at 0 KB additional JavaScript cost.

---

### 4.7 Complete Absence of 3D Capabilities ("Ghost 3D Redesign")
Despite the repository worktree name `premium_3d_website_redesign`:
- **0 3D Libraries**: Neither `three`, `@react-three/fiber`, `@react-three/drei`, `babylonjs`, nor `spline` exist in `package.json`.
- **0 3D Models**: Search for `.glb`, `.gltf`, `.obj`, `.fbx`, `.stl`, `.step` returned 0 files.
- **0 WebGL Code**: Search for `<canvas>` or `getContext('webgl')` returned 0 occurrences.
- **Simulation**: In `app/page.tsx:75`, the "3D" experience is simulated by loading a static 2D JPEG (`/robot/cad-design.jpg`) into a background `<div>`. In `app/robot/page.tsx`, it is simulated with CSS HUD corner borders around a broken stock photo.

---

### 4.8 Production Dependency Misclassification & Broken Start Script

#### 1. CLI Tool in Runtime Dependencies
`package.json:21` lists `"shadcn": "^4.0.3"` under `dependencies`. `shadcn` is a development-time scaffolding CLI and should be in `devDependencies`.

#### 2. Incompatible `npm run start` Script
- `package.json:8`: `"start": "next start"`
- `next.config.ts:5`: `output: "export"`
- Executing `npm run start` fails immediately with exit code 1:
  ```
  Error: Could not find a production build in the 'out' directory. Try building your app with 'next build' before starting the production server.
  "next start" does not work with "output: export".
  ```
  Hosting instructions in `README.md` and `DEPLOYMENT.md` fail to note that production artifacts in `out/` must be served with a static web server (`npx serve out`).

---

## 5. Visual & UI (Playwright Verification Findings)

### 5.1 Test Matrix & Runtime Environment
- **Server**: Next.js 16.1.6 Turbopack (`npm run dev`) active on `http://localhost:3000` (ready in 969ms).
- **Automation Tool**: Playwright MCP integration.
- **Viewports Tested**:
  1. Desktop: `1280 x 800`
  2. Mobile: `375 x 812` (standard mobile portrait baseline)
- **Routes Tested**: `/`, `/about`, `/robot`, `/team`, `/sponsors`, `/contact`.

---

### 5.2 Route-by-Route Browser Verification Log

```
====================================================================================================
ROUTE: / (Homepage)
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE | Broken images: 0
- Viewport 375x812:  scrollWidth: 375px  | Overflow: FALSE
- Mobile Navbar:    scrollWidth: 479px > clientWidth: 375px (Horizontal scroll functional)
                    Computed scrollbarWidth: "auto" (Class .no-scrollbar has 0 CSS rules)
- Design Tokens:    h1 font-family: "Barlow Condensed" | Buttons: "IBM Plex Mono", uppercase
- Console Errors:   1. [DEPRECATION] legacyBehavior is deprecated on <Link>
                    2. [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
----------------------------------------------------------------------------------------------------
ROUTE: /about
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE
- Viewport 375x812:  scrollWidth: 389px > winWidth: 375px | OVERFLOW: TRUE (+14px blowout)
                    Root cause: Framer Motion translateX(30px) without overflow-x-clip
- Phantom Styles:   11 elements with .text-gradient computed backgroundImage: "none"
- Document Title:   "HAN Competitive Robotics | HCR" (Route title template %s | HCR failed)
- Console Errors:   [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
----------------------------------------------------------------------------------------------------
ROUTE: /robot
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE
- Viewport 375x812:  scrollWidth: 389px > winWidth: 375px | OVERFLOW: TRUE (+14px blowout)
- Hero Image:       [FAILED] https://images.unsplash.com/... net::ERR_BLOCKED_BY_ORB
                    img naturalWidth: 0, clientHeight: 24px (BROKEN ELEMENT)
- Anchor Links:     #specs and #subsystems exist and smooth scroll correctly
- Phantom Styles:   7 elements with .text-gradient computed backgroundImage: "none"
- Console Errors:   [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
----------------------------------------------------------------------------------------------------
ROUTE: /team
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE
- Viewport 375x812:  scrollWidth: 375px  | Overflow: FALSE
- Desktop Anchors:  #mechanical (x: 32px, y: 912px) and #electrical-embedded (x: 656px, y: 912px)
                    are side-by-side columns. Clicking #electrical-embedded scrolls to y: 941.5px
                    (identical coordinate as #mechanical), failing to isolate division.
- Roster Integrity: 10 PNGs rendered; public/team/mohammed.png exists but was never loaded.
- Console Errors:   [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
----------------------------------------------------------------------------------------------------
ROUTE: /sponsors
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE
- Viewport 375x812:  scrollWidth: 375px  | Overflow: FALSE
- Primary CTA Test: Clicked <Link href="#contact"><Button>Become a Sponsor</Button></Link>
                    Result: document.querySelector('#contact') === null.
                    Browser URL becomes /sponsors/#contact, scroll position unchanged (DEAD LINK).
- Asset Neglect:    Zero sponsor SVGs loaded. <Sparkles> icon rendered instead of sponsor.logo.
- Console Errors:   [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
----------------------------------------------------------------------------------------------------
ROUTE: /contact
----------------------------------------------------------------------------------------------------
- Viewport 1280x800: scrollWidth: 1280px | Overflow: FALSE
- Viewport 375x812:  scrollWidth: 375px  | Overflow: FALSE
- Form Automation:  Filled: name="Alex Auditor", email="alex.auditor@han.nl", subject="Sponsorship",
                    message="We would love to sponsor HCR featherweight robot!"
                    Clicked: button[type="submit"]
                    Network Tab: 0 POST/GET requests dispatched.
                    Console Log: [LOG] Contact form submitted: {name: Alex Auditor, ...}
                    UI Mutation: Displays false "Message Sent! ... get back to you within 48 hours"
- Console Errors:   [404] GET http://localhost:3000/site.webmanifest 404 (Not Found)
====================================================================================================
```

---

### 5.3 Critical Mobile Horizontal Layout Overflow (375px Viewport)
When tested at `375 x 812` (standard mobile viewport), both `/about` and `/robot` exhibit a **14px horizontal blowout**:
- `window.innerWidth`: `375px`
- `document.documentElement.scrollWidth`: **`389px`**
- `hasHorizontalScroll`: **`true`**

#### DOM Forensic Root Cause
Framer Motion motion components apply initial entrance translations:
```css
transform: matrix(1, 0, 0, 1, 30, 0); /* translateX(30px) */
```
Because the outer `<section>` and `<main>` tags lack `overflow-x-clip` or `overflow-hidden`, elements positioned near the viewport right margin extend 30px beyond the viewport boundary before animating in. This expands the root scroll canvas to 389px, causing mobile devices to wobble horizontally.

---

### 5.4 Live Browser Console Error Logs
Running Playwright across the application captured active runtime console errors:

```text
# Error 1: Emitted on every single route load (/, /about, /robot, /team, /sponsors, /contact)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) @ http://localhost:3000/site.webmanifest:0
[ERROR] Manifest fetch from http://localhost:3000/site.webmanifest failed, code 404 @ http://localhost:3000/:0

# Error 2: Emitted on homepage (/)
[ERROR] legacyBehavior is deprecated and will be removed in a future release. A codemod is available to upgrade your components: npx @next/codemod@latest new-link . Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components @ http://localhost:3000/_next/static/chunks/node_modules_next_dist_f3530cac._.js:3127

# Error 3: Emitted on /robot
[ERROR] Failed to load resource: the server responded with a status of net::ERR_BLOCKED_BY_ORB @ https://images.unsplash.com/photo-1563178406-4f8025767818?w=800&h=800&fit=crop
```

---

### 5.5 Interactive Element & Form Automation Failures

#### 1. Dead Anchor on `/sponsors`
- **Element**: `<Link href="#contact">` (`app/sponsors/page.tsx:192`)
- **Action**: Clicked by Playwright.
- **Result**: `document.querySelector('#contact')` evaluates to `null`. URL fragment updates to `http://localhost:3000/sponsors/#contact` but page scroll remains at `y: 1`.

#### 2. Simulated Form Submission on `/contact`
- **Fields Injected**: `name`, `email`, `subject`, `message`.
- **Action**: Triggered `submit` button.
- **Result**: Form was replaced by fake success dialog. Network inspector confirmed 0 bytes transferred over the network. Console emitted unencrypted PII payload.

---

## 6. Prioritized Remediation Roadmap

The remediation strategy is structured into four sequential phases, prioritizing security vulnerabilities, functional breakage, and design harmonization.

```
┌────────────────────────────────────────────────────────────────────────┐
│ P0: CRITICAL (Security & Fatal Breakage)                              │
│ - Delete/replace leaked Wikimedia 429 HTML in public/images/han-logo.png│
│ - Fix deceptive contact form (integrate Web3Forms/Formspree or mailto) │
│ - Generate missing metadata assets (/og-image.jpg, /site.webmanifest)  │
│ - Replace blocked Unsplash URL with local public/robot/hcr-1.jpg       │
│ - Fix broken #contact anchor in app/sponsors/page.tsx                 │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
┌────────────────────────────────────▼───────────────────────────────────┐
│ P1: HIGH (Visual Harmonization & Layout Fixes)                         │
│ - Add overflow-x-clip to subpages to eliminate 14px mobile overflow    │
│ - Harmonize 5 subpages with DESIGN.md OKLCH tokens & technical fonts   │
│ - Add .text-gradient and .no-scrollbar to globals.css (or refactor)   │
│ - Fix invalid <a><button> nesting and eliminate legacyBehavior        │
│ - Purge AI monologue comment from app/layout.tsx:103-105               │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
┌────────────────────────────────────▼───────────────────────────────────┐
│ P2: MEDIUM (Performance & Next.js Best Practices)                      │
│ - Convert route pages to Server Components; export route metadata      │
│ - Migrate raw <img> tags to next/image with explicit width/height      │
│ - Replace heavy Framer Motion subpage imports with CSS keyframes       │
│ - Delete dead components: sheet.tsx, navigation-menu.tsx, avatar.tsx   │
│ - Resolve all 14 ESLint warnings (unused imports/vars, no-img-element) │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
┌────────────────────────────────────▼───────────────────────────────────┐
│ P3: LOW (Data Accuracy & Housekeeping)                                 │
│ - Correct kinetic energy unit from "250+ g" to Joules (e.g. "250+ J") │
│ - Populate TBD robot dimensions; move HCR-1 out of "Future Robots"     │
│ - Replace joke degree fields with real curricula; render Mohammed      │
│ - Render genuine sponsor SVGs; move shadcn to devDependencies          │
│ - Update README.md and DEPLOYMENT.md placeholders and command notes    │
└────────────────────────────────────────────────────────────────────────┘
```

### Detailed Phase Specifications

#### Phase P0: Security & Fatal Breakage (Immediate)
1. **Remediate Leaked IP in `han-logo.png`**:
   - Delete `public/images/han-logo.png` (Wikimedia 429 HTML containing IP `122.172.83.10`).
   - Replace with a legitimate vector or raster HAN University logo.
2. **Implement Functional Contact Form**:
   - Replace `console.log` submission in `app/contact/page.tsx:107-111` with a client-side form provider compatible with static export (e.g., Web3Forms, Formspree, Formkeep) or provide a fallback `mailto:hcr@han.nl` action.
   - Add input validation, character limits, and honest error handling.
3. **Generate Missing Metadata Assets**:
   - Provide `public/og-image.jpg` (1200x630), `public/favicon-16x16.png`, `public/apple-touch-icon.png`, and a valid `public/site.webmanifest` to resolve 404 console errors.
4. **Fix Broken Robot Hero Image**:
   - In `app/robot/page.tsx:174-178`, replace the external Unsplash URL with the local photo `/robot/hcr-1.jpg`.
5. **Fix Dead Anchor on Sponsors Page**:
   - In `app/sponsors/page.tsx:192`, change `<Link href="#contact">` to `<Link href="/contact">` or add `<section id="contact">` to the page.

#### Phase P1: Visual Harmonization & Layout Repairs
1. **Eliminate 14px Mobile Layout Blowout**:
   - Add `overflow-x-clip` to `<main>` in `app/layout.tsx` or wrap translated Framer Motion containers in `overflow-hidden`.
2. **Align Secondary Pages with `DESIGN.md`**:
   - Refactor `/about`, `/robot`, `/team`, `/sponsors`, `/contact` to use OKLCH semantic tokens (`bg-background`, `bg-surface-deep`, `bg-surface-raised`, `text-primary`, `border-border`, `border-line-strong`).
   - Replace generic sans fonts with `font-display` (Barlow Condensed) and `font-mono` (IBM Plex Mono) headers.
   - Replace rounded `rounded-2xl` cards with hairline industrial panels (`border-border`, `border-radius: 0px` or `rounded-sm`).
3. **Declare or Refactor Phantom Classes**:
   - In `app/globals.css`, declare `.text-gradient` (`background: linear-gradient(135deg, oklch(var(--primary)) 0%, oklch(var(--foreground)) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`) or replace with Tailwind utility classes.
   - Declare `.no-scrollbar` (`scrollbar-width: none; &::-webkit-scrollbar { display: none; }`).
4. **Eliminate Invalid HTML Nesting & Deprecated Link Syntax**:
   - In `app/page.tsx:58, 64, 235`, remove `passHref` and `legacyBehavior`. Render `<Link className={buttonVariants({...})}>` directly.
   - Across all subpages, replace `<Link><Button>...</Button></Link>` with direct styled `<Link>` elements.
5. **Purge AI Reasoning Comments**:
   - Delete lines 103–105 in `app/layout.tsx`.

#### Phase P2: Performance & Architecture Optimization
1. **Adopt React Server Component Architecture**:
   - Remove `"use client"` from `app/**/page.tsx`. Keep routes as Server Components.
   - Extract interactive widgets (`ContactForm`, mobile navigation drawer, interactive filters) into dedicated client leaf components.
   - Export route-specific `metadata` objects from each `page.tsx` to activate the `"%s | HCR"` title template.
2. **Migrate to Next.js Image Optimization**:
   - Replace native `<img>` tags with `next/image` specifying exact `width`, `height`, `alt`, and `priority` for LCP images.
3. **Purge Heavy Framer Motion Subpage Overhead**:
   - Replace `motion.div` reveals on subpages with the existing `.reveal-section` CSS keyframe utility, reducing client bundle size by ~35 KB+ gzipped.
4. **Prune Dead UI Components**:
   - Delete `components/ui/navigation-menu.tsx`, `components/ui/sheet.tsx`, and `components/ui/avatar.tsx`.
5. **Clean All 14 ESLint Warnings**:
   - Remove unused imports (`Zap`, `Wrench`, `CardHeader`, `CardTitle`, `Avatar`) and unused loop variables (`index`).

#### Phase P3: Data Accuracy & Housekeeping
1. **Correct Technical Specifications**:
   - Change `"250+ g"` in `app/about/page.tsx:404` to Joules (`"250+ J"` or `"250 kJ"`).
   - Replace `"TBD"` dimensions in `app/robot/page.tsx:38-40` with genuine measurements.
   - Move `HCR-1` out of "Future Robots" into the active robot section.
2. **Restore Team Roster Authenticity**:
   - Replace joke quotes in `app/team/page.tsx` with actual academic programs.
   - Add Mohammed (`public/team/mohammed.png`) to the roster.
   - Consolidate dual roles into unified profiles with multi-discipline badges.
3. **Render Sponsor SVGs**:
   - Update `app/sponsors/page.tsx` to render the 8 genuine sponsor SVGs from `public/sponsors/`.
4. **Clean Dependencies & Documentation**:
   - Move `shadcn` from `dependencies` to `devDependencies` in `package.json`.
   - Update `README.md` and `DEPLOYMENT.md` to remove boilerplate placeholders and clarify that production builds must be served using `npx serve out`.

---

## 7. Verification & Audit Reproduction Guide

This section provides reproducible commands for an independent auditor or judge to verify every finding documented in this report.

### 7.1 Static Codebase Verification

#### 1. Verify ESLint Warnings (14 Warnings)
```powershell
npm run lint
```
*Expected Output*: Exits with code 0, reporting exactly 14 warnings:
- 4 `@next/next/no-img-element` warnings (`about/page.tsx:185`, `robot/page.tsx:174, 400`, `team/page.tsx:157`).
- 10 `@typescript-eslint/no-unused-vars` warnings (`Zap`, `Wrench`, `index`, `CardHeader`, `CardTitle`, `Avatar`, `AvatarFallback`, `AvatarImage`).

#### 2. Verify AI Monologue Comment in Production Layout
```powershell
Get-Content app\layout.tsx | Select-String "replace the default Footer" -Context 1,1
```
*Expected Output*: Matches lines 103–105 containing the conversational LLM prompt comment.

#### 3. Verify Leaked IP Address in `han-logo.png`
```powershell
Get-Content public\images\han-logo.png -Head 5
Select-String -Path "public\images\han-logo.png" -Pattern "122.172.83.10"
```
*Expected Output*: Head lines display `<!DOCTYPE html><html lang="en"><meta charset="utf-8"><title>Wikimedia Error</title>...`; search matches line 39 with leaked IP `122.172.83.10`.

#### 4. Verify 26 Phantom `.text-gradient` References vs. Absence in CSS
```powershell
# Count references across app TSX files (26 matches)
(Select-String -Path "app\**\*.tsx" -Pattern "text-gradient").Count

# Confirm 0 definitions in globals.css
Select-String -Path "app\globals.css" -Pattern "text-gradient"
```
*Expected Output*: First command outputs `26`; second command outputs nothing.

#### 5. Verify Dead UI Components
```powershell
Select-String -Path "app\**\*.tsx", "components\**\*.tsx" -Pattern "@/components/ui/navigation-menu"
Select-String -Path "app\**\*.tsx", "components\**\*.tsx" -Pattern "@/components/ui/sheet"
```
*Expected Output*: 0 matches found outside the component definitions themselves.

#### 6. Verify Absence of 3D Assets & Libraries
```powershell
# Check for 3D model files
Get-ChildItem -Recurse -Include *.glb,*.gltf,*.obj,*.fbx,*.stl

# Check package.json for 3D libraries
Select-String -Path "package.json" -Pattern "three|@react-three|babylon|spline"
```
*Expected Output*: 0 files returned; 0 dependencies matched.

---

### 7.2 Dynamic Runtime Verification via Browser / Playwright

#### 1. Launch Local Development Server
```powershell
npm run dev
# Confirm server is active on http://localhost:3000
```

#### 2. Verify Mobile Horizontal Overflow (375px Viewport)
Open Chromium DevTools, set responsive viewport to `375 x 812`, and execute in Console:
```javascript
// Test on http://localhost:3000/about and http://localhost:3000/robot
console.log({
  route: window.location.pathname,
  scrollWidth: document.documentElement.scrollWidth,
  viewportWidth: window.innerWidth,
  hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
});
```
*Expected Output*: `{ route: "/about/", scrollWidth: 389, viewportWidth: 375, hasHorizontalOverflow: true }`.

#### 3. Verify Runtime Inertness of `.text-gradient`
In browser Console on `/about`, `/robot`, `/team`, `/sponsors`, or `/contact`:
```javascript
const gradients = Array.from(document.querySelectorAll('.text-gradient')).map(el => ({
  text: el.textContent.trim(),
  bgImage: window.getComputedStyle(el).backgroundImage,
  color: window.getComputedStyle(el).color
}));
console.table(gradients);
```
*Expected Output*: Every row shows `bgImage: "none"`, confirming that the style fails to render.

#### 4. Verify Broken Robot Hero Image (`ERR_BLOCKED_BY_ORB`)
In browser Console on `http://localhost:3000/robot`:
```javascript
const img = document.querySelector('img[alt="HCR-1 Battlebot"]');
console.log({
  src: img.src,
  naturalWidth: img.naturalWidth,
  naturalHeight: img.naturalHeight,
  clientHeight: img.clientHeight
});
```
*Expected Output*: `{ naturalWidth: 0, naturalHeight: 0, clientHeight: 24 }`, confirming image collapse.

#### 5. Verify Dead Sponsor Anchor `#contact`
In browser Console on `http://localhost:3000/sponsors`:
```javascript
const link = document.querySelector('a[href="#contact"]');
const target = document.querySelector('#contact');
console.log({ linkFound: link !== null, targetExists: target !== null });
```
*Expected Output*: `{ linkFound: true, targetExists: false }`.

#### 6. Verify Deceptive Form Submission & Console PII Leak
Navigate to `http://localhost:3000/contact`:
1. Fill Name, Email, Subject, and Message.
2. Open Network tab in DevTools.
3. Click "Submit Message".
4. *Observations*:
   - Network tab records **0 outgoing requests**.
   - DevTools Console outputs: `[LOG] Contact form submitted: { name: "...", email: "...", ... }`.
   - Page displays deceptive message: `"Message Sent! We will get back to you within 48 hours."`

---

*Report authored by Forensic Codebase Auditor (`worker_report_writer`). Verified against static AST rules, Next.js 16 App Router specifications, and dynamic Playwright runtime telemetry.*
