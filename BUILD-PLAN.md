# NexusAI — Build Plan

## Architecture

```
src/
├── components/
│   ├── layout/          # Navigation, Footer, Container, Section
│   ├── hero/            # HeroHome, HeroPage, HeroCTA
│   ├── features/        # BentoGrid, BentoCard, FeatureShowcase, FeatureList
│   ├── social-proof/    # Testimonials, LogoBar, ReviewCard
│   ├── pricing/         # PricingTable, PricingToggle, PricingFAQ, ComparisonTable
│   ├── content/         # TeamGrid, CaseStudyCard, BlogCard, Timeline, Changelog
│   ├── cta/             # CTABanner, CTAInline, NewsletterForm
│   ├── ui/              # Button, Badge, Card, Accordion, TerminalWindow, etc.
│   └── effects/         # ParticleField, GradientOrb, GridBackground, ScrollProgress
├── layouts/
│   └── Layout.astro     # Base layout with head, nav, footer, effects
├── pages/               # All 12 pages
├── styles/
│   ├── variables.css    # Design tokens (colors, typography, spacing)
│   └── global.css       # Reset, utilities, animation classes
├── lib/
│   ├── scroll-observer.ts   # IntersectionObserver for .fade-up/.visible
│   ├── parallax.ts          # Scroll-linked parallax engine
│   ├── tilt.ts              # 3D card tilt on mousemove
│   └── theme.ts             # Dark/light mode toggle + persistence
└── content/
    ├── blog/            # Markdown blog posts
    └── case-studies/    # Markdown case studies
```

---

## Phases (4 Parallel Agents)

### Phase 1: Foundation (Agent A — "Architect")
**Duration:** ~2 hours

1. Astro 5 project scaffold + TypeScript config
2. `variables.css` — full design token system
3. `global.css` — reset, utilities, animation classes, grain overlay
4. `Layout.astro` — base layout with `<head>`, View Transitions, font loading
5. `Container`, `Section` components
6. `scroll-observer.ts` — IntersectionObserver utility
7. `parallax.ts` — scroll-linked parallax engine
8. `tilt.ts` — 3D card tilt on mousemove
9. `theme.ts` — dark/light mode logic
10. `GridBackground`, `GradientOrb` effect components

**Exit criteria:** `npm run dev` works, design tokens render, scroll observer triggers animations, dark mode toggles.

---

### Phase 2: Core Components (Agents B + C in parallel)
**Duration:** ~3 hours each

#### Agent B — "UI Engineer"
Builds all UI primitives and layout components:

1. `Button` (all variants + sizes + loading + hover)
2. `Badge` (all variants + pulse dot)
3. `Card` (glass + solid + hover states)
4. `TerminalWindow` (header dots + content + typing animation)
5. `GradientText` (animated gradient)
6. `SectionLabel` (pill + dot variants)
7. `Accordion` (expand/collapse + chevron rotation)
8. `DarkModeToggle` (sun/moon morph)
9. `Navigation` (glassmorphic + scroll shrink + active states)
10. `MobileNav` (full-screen overlay + stagger)
11. `Footer` (4-column + newsletter + socials)
12. `ScrollProgress` (top bar)
13. `ParticleField` (canvas particle system)

#### Agent C — "Section Builder"
Builds all section-level components:

1. `HeroHome` (full hero with floating cards + terminal visual)
2. `HeroPage` (reusable inner page header)
3. `HeroCTA` (centered landing page hero)
4. `BentoGrid` + `BentoCard` (varied sizes + 3D tilt)
5. `FeatureShowcase` (split layout, alternating)
6. `FeatureList` (3-column icon grid)
7. `StatsBar` (count-up animation)
8. `TestimonialCarousel` (auto-rotate + navigation)
9. `TestimonialGrid` (masonry)
10. `LogoBar` (marquee + grayscale hover)
11. `PricingTable` + `PricingToggle` (animated toggle + highlight)
12. `ComparisonTable` (feature matrix)
13. `PricingFAQ` (accordion)

**Exit criteria (B+C):** All components render in isolation, all hover states work, scroll animations trigger, responsive down to 320px.

---

### Phase 3: Pages & Content (Agents D + E in parallel)
**Duration:** ~2-3 hours each

#### Agent D — "Page Assembler (Primary)"
Assembles main pages:

1. **Home** (`/`) — all 11 sections composed
2. **Features** (`/features`) — 8 sections
3. **Pricing** (`/pricing`) — 5 sections
4. **About** (`/about`) — 7 sections (Team, Timeline)
5. **Contact** (`/contact`) — 3 sections
6. **404** — error page with effects

#### Agent E — "Page Assembler (Content)"
Assembles content-driven pages:

1. **Case Studies index** (`/case-studies`) — grid + featured
2. **Case Study detail** (`/case-studies/[slug]`) — dynamic route, 3 sample studies
3. **Blog index** (`/blog`) — grid + featured
4. **Blog post** (`/blog/[slug]`) — dynamic route, 6 sample posts w/ markdown
5. **Changelog** (`/changelog`) — 8 entries
6. **Docs** (`/docs`) — API reference page
7. All content collection configs + sample content

**Exit criteria (D+E):** All 12 pages render, navigation works between all pages, View Transitions animate page changes, all scroll animations fire.

---

### Phase 4: Polish & QA (All agents or single agent)
**Duration:** ~2 hours

1. **Performance:** Lighthouse audit → fix anything below 95
2. **Accessibility:** axe-core scan, keyboard navigation, focus styles, aria labels
3. **Responsive QA:** Test at 320, 375, 768, 1024, 1440, 2560px
4. **Animation QA:** Verify all scroll triggers, hover states, parallax layers
5. **Dark/Light mode:** Test toggle on every page, verify all tokens switch
6. **Content QA:** All placeholder text is realistic and consistent
7. **SEO:** Meta tags, Open Graph, sitemap.xml, robots.txt
8. **Reduced motion:** Verify all animations respect `prefers-reduced-motion`
9. **Cross-browser:** Chrome, Firefox, Safari (graceful fallbacks)
10. **Final cleanup:** Remove unused code, optimize images, minify

---

## Agent Instructions Summary

| Agent | Role | Depends On | Deliverables |
|-------|------|------------|-------------|
| A | Foundation | — | Project scaffold, tokens, utilities, effects, JS libs |
| B | UI Primitives | A | 13 components (buttons, nav, footer, particles, etc.) |
| C | Section Components | A | 13 components (heroes, bento, pricing, testimonials, etc.) |
| D | Primary Pages | A, B, C | 6 pages (home, features, pricing, about, contact, 404) |
| E | Content Pages | A, B, C | 6 pages (case studies, blog, changelog, docs) + content |

**Parallel execution:**
- Phase 1: A alone
- Phase 2: B + C in parallel (both depend on A)
- Phase 3: D + E in parallel (both depend on B + C)
- Phase 4: Single agent or whoever finishes first

**Estimated total:** 8-10 hours wall time (with parallelism), 15-18 hours total agent time.
