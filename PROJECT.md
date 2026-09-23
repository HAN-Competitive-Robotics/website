# Project: HAN-Robotics Website Codebase Audit & AI Slop Review

## Architecture
- **Application Framework**: Next.js 16.1.6 (App Router with Turbopack), React 19.2.3, Tailwind CSS v4, Base UI (shadcn base-nova style), Framer Motion 12.35.2.
- **Build Target**: Static site export (`output: "export"` in `next.config.ts`, artifacts emitted to `out/`).
- **Audit Deliverable**: Comprehensive markdown audit report (`AUDIT_REPORT.md` at project root) containing verified evidence chains with file paths and line numbers across:
  1. Code Smells & AI Slop
  2. Architecture Flaws
  3. Security & Performance Risks
  4. Visual & UI (Playwright Findings)

## Feature Inventory (Audit Scope Inventory)
| # | Feature / Audit Dimension | Description | Milestone | Source | Status |
|---|---------------------------|-------------|-----------|--------|--------|
| 1 | R1: Code Quality & Consistency | Scan for unused imports, leftover placeholder comments, dead code, redundant CSS/Tailwind, inconsistent formatting | M1 | Survey Findings & R1 | DONE |
| 2 | R2: AI Slop Identification | Detect hallucinated CSS classes, internal AI prompt comments in JSX, nonsensical units/data, brittle boilerplate | M1 | Survey Findings & R2 | DONE |
| 3 | R3: Next.js Architecture Review | Evaluate client vs server boundaries, missing metadata, broken title template, deprecated Link/Button nesting | M2 | Survey Findings & R3 | DONE |
| 4 | R3: Performance & Asset Review | Audit raw `<img>` vs `<Image>`, unoptimized assets, external CDN dependencies, Framer Motion bloat, 3D absence | M2 | Survey Findings & R3 | DONE |
| 5 | R3: Security & Data Integrity | Audit Wikimedia 429 HTML IP leak in han-logo.png, fake console.log contact form, 404 metadata assets, broken anchors | M2 | Survey Findings & R3 | DONE |
| 6 | R4: Playwright Dynamic Verification | Launch dev server, inspect all 6 routes, check console errors, visual slop, layout overflows, broken interactive elements | M3 | Requirement R4 | DONE |
| 7 | Report Synthesis & Assembly | Aggregate all static and dynamic audit findings into master `AUDIT_REPORT.md` meeting all acceptance criteria | M4 | Project Goal | DONE |
| 8 | Independent Verification & Gate | Multi-agent review (Reviewers, Challenger, Forensic Auditor) to verify report accuracy and reproducibility | M5 | Acceptance Criteria | DONE |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Reconnaissance | Comprehensive multi-agent static mapping of codebase | none | DONE |
| M1 | Static Audit: Code Quality & AI Slop | Deep analysis of R1 & R2 (code smells, hallucinated CSS, placeholder data) | M0 | DONE |
| M2 | Static Audit: Architecture, Performance & Security | Deep analysis of R3 (Next.js patterns, assets, security risks) | M0 | DONE |
| M3 | Dynamic Playwright Verification | Dev server execution, browser navigation across 6 routes, console error logs, interactive element testing | M0 | DONE |
| M4 | Report Synthesis (`AUDIT_REPORT.md`) | Author master audit report with exact line numbers and evidence chains | M1, M2, M3 | DONE |
| M5 | Multi-Agent Gate Review & Forensic Audit | 2 Reviewers, 2 Challengers, and Forensic Auditor verification | M4 | DONE (PASS) |

## Interface Contracts
### Survey / Explorers ↔ Report Synthesis Worker
- **Input**: Explorer reports (`.agents/explorer_survey_1/handoff.md`, `.agents/explorer_survey_2/handoff.md`, `.agents/explorer_survey_3/handoff.md`) and Playwright report (`.agents/worker_playwright/handoff.md`).
- **Format**: Structured findings categorized into Executive Summary, Code Smells & AI Slop, Architecture Flaws, Security & Performance Risks, Visual & UI (Playwright Findings), and Prioritized Remediation Roadmap.

### Playwright Worker ↔ Master Report
- **Input**: Local development server (`http://localhost:3000`).
- **Output**: Verified browser console logs, viewport responsiveness test results (desktop & mobile), broken link clicks, form submission behavior.

## Code Layout
```
/
├── app/
│   ├── layout.tsx         # Root layout, metadata, fonts, header/footer
│   ├── globals.css        # Tailwind v4 theme, OKLCH tokens, animations
│   ├── page.tsx           # Home page ("/")
│   ├── about/page.tsx     # About page ("/about")
│   ├── robot/page.tsx     # Robot specs page ("/robot")
│   ├── team/page.tsx      # Team roster page ("/team")
│   ├── sponsors/page.tsx  # Sponsors page ("/sponsors")
│   └── contact/page.tsx   # Contact form page ("/contact")
├── components/
│   ├── navbar.tsx         # Main navigation bar
│   ├── footer.tsx         # Main footer
│   └── ui/                # UI primitives (Button, Card, Input, Label, Textarea, etc.)
├── public/                # Static images, logos, robot photos, sponsor SVGs
├── AUDIT_REPORT.md        # Master forensic audit report (final deliverable)
└── .agents/               # Agent metadata, audit notes, handoffs
```
