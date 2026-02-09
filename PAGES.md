# NexusAI — Pages

> 12 pages total. Every section has scroll-triggered entrance animations.

---

## 1. Home (`/`)

| # | Section | Components | Animation |
|---|---------|-----------|-----------|
| 1 | **Hero** | HeroHome, ParticleField, GridBackground, GradientOrb ×2 | Fade-up staggered (badge → headline → subtitle → CTAs → proof → visual). Floating cards loop animation. Particles drift. |
| 2 | **Logo Bar** | LogoBar | Fade-in on scroll. Marquee infinite scroll. Grayscale → color on hover. |
| 3 | **Features Bento** | BentoGrid, BentoCard ×6 | Staggered fade-up (80ms between cards). 3D tilt hover. Top-border gradient reveal. |
| 4 | **Feature Showcase 1** | FeatureShowcase (text-left) | Split entrance: text fades from left, visual fades from right. |
| 5 | **Feature Showcase 2** | FeatureShowcase (text-right) | Reverse split. Visual includes terminal window with typing animation. |
| 6 | **Stats Bar** | StatsBar | Numbers count up from 0 on scroll-in. Stagger: 150ms between stats. |
| 7 | **Testimonials** | TestimonialCarousel | Cards slide in. Auto-rotate with pause on hover. |
| 8 | **Pricing** | PricingTable, PricingToggle | Cards fade-up with stagger. Toggle slides smoothly. Popular card has pulse glow. |
| 9 | **Integration Grid** | IntegrationGrid | Logo cards fade-up staggered. Hover: scale + glow. |
| 10 | **CTA** | CTABanner | Scale-up entrance. Gradient mesh background animates. Button glow pulses. |
| 11 | **Footer** | Footer | Fade-up. Social icons hover: color + lift. |

---

## 2. Features (`/features`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Everything you need to ship AI" |
| 2 | **Feature Overview** | FeatureList: 6 features in 3×2 grid with icons |
| 3 | **Deep Dive 1** | FeatureShowcase: "AI Code Generation" — terminal visual |
| 4 | **Deep Dive 2** | FeatureShowcase (reversed): "Smart Testing" — dashboard mockup |
| 5 | **Deep Dive 3** | FeatureShowcase: "Team Analytics" — chart visual |
| 6 | **Bento Extras** | BentoGrid: 4 secondary features in varied card sizes |
| 7 | **Stats** | StatsBar: 4 product metrics |
| 8 | **CTA** | CTABanner |

---

## 3. Pricing (`/pricing`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Simple, transparent pricing" |
| 2 | **Pricing Table** | PricingTable: 4 plans (Free, Pro, Team, Enterprise) + toggle |
| 3 | **Comparison** | ComparisonTable: Full feature matrix |
| 4 | **FAQ** | PricingFAQ: 8 questions, accordion style |
| 5 | **CTA** | CTAInline: "Need a custom plan?" |

---

## 4. About (`/about`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Building the future of AI development" |
| 2 | **Mission** | Split layout: text + ambient visual (gradient mesh). Large quote. |
| 3 | **Timeline** | TimelineSection: Company milestones (founding → latest) |
| 4 | **Team** | TeamGrid: 8 team members. Photo grayscale→color, social reveal. |
| 5 | **Values** | 3-column FeatureList: 3 company values with icons |
| 6 | **Stats** | StatsBar: Company metrics (users, countries, uptime, etc.) |
| 7 | **CTA** | CTABanner: "Join our team" |

---

## 5. Case Studies (`/case-studies`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Real results from real teams" |
| 2 | **Featured Case** | CaseStudyCard (full-width): Primary case study |
| 3 | **Case Grid** | 2-column grid of CaseStudyCard ×4 |
| 4 | **Testimonial** | TestimonialGrid: 3 related quotes |
| 5 | **CTA** | CTABanner |

---

## 6. Case Study Detail (`/case-studies/[slug]`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Hero** | Client logo, challenge headline, category tags |
| 2 | **Overview** | Challenge + solution in two columns |
| 3 | **Results** | 3 stat cards (large numbers + descriptions) |
| 4 | **Detail** | Long-form content with images, quotes, pull-stats |
| 5 | **Testimonial** | Featured quote from client |
| 6 | **Related** | 2 related CaseStudyCards |

---

## 7. Blog (`/blog`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Insights & Updates" |
| 2 | **Featured Post** | Full-width BlogCard (large variant) |
| 3 | **Post Grid** | 3-column BlogCard grid, 6 posts |
| 4 | **Newsletter** | NewsletterForm embedded |

---

## 8. Blog Post (`/blog/[slug]`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Article Header** | Category, title, author, date, reading time |
| 2 | **Article Body** | BlogPostLayout: content + sticky TOC sidebar |
| 3 | **Author Card** | Author bio card at end |
| 4 | **Related Posts** | 3 BlogCards |
| 5 | **Newsletter** | NewsletterForm |

---

## 9. Changelog (`/changelog`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "What's New" |
| 2 | **Entries** | ChangelogEntry ×8 in chronological order. Tags: new/improved/fixed. |
| 3 | **Newsletter** | "Get updates" → NewsletterForm |

---

## 10. Contact (`/contact`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "Let's talk" |
| 2 | **Contact Grid** | 2 columns: contact form (left) + info cards (right: email, Discord, office) |
| 3 | **FAQ** | Accordion: 4 quick questions |

---

## 11. Docs/API (`/docs`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Page Hero** | HeroPage: "API Documentation" |
| 2 | **Quick Start** | TerminalWindow with install + setup commands |
| 3 | **Endpoints** | Styled API reference cards (method badges: GET/POST, route, description) |
| 4 | **Code Examples** | TerminalWindow ×3 with different language tabs |
| 5 | **CTA** | CTAInline: "Need help? Contact us" |

---

## 12. 404 (`/404`)

| # | Section | Details |
|---|---------|---------|
| 1 | **Error** | Large "404" in gradient text. "Page not found" subtitle. Animated glitch effect on numbers. CTA: "Go Home" button. Background: grid + single orb. |
