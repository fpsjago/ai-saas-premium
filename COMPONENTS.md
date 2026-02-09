# NexusAI — Component List

> 42 components total. Every component has hover states and micro-interactions.

---

## Layout Components (5)

### 1. `Navigation`
Glassmorphic sticky header. Logo + links + dark mode toggle + CTA button. Shrinks on scroll (padding reduction + subtle bg opacity increase). Mobile: hamburger → slide-in drawer. Active link: animated underline. Blur background.

### 2. `MobileNav`
Full-screen overlay with staggered link entrances. Dark backdrop, glass panel slides from right. Each link fades up with 80ms stagger. Close button with rotate animation.

### 3. `Footer`
4-column grid: Brand (logo + tagline + socials), Product links, Resources links, Company links. Bottom bar: copyright + legal links. Gradient divider line at top. Newsletter input inline.

### 4. `Container`
Max-width wrapper (1400px) with responsive padding. Used by all sections.

### 5. `Section`
Vertical padding wrapper with optional ID for anchor links. Accepts `variant` prop for background variations (default, elevated, gradient).

---

## Hero Components (4)

### 6. `HeroHome`
Full-viewport hero. Left: badge + headline (gradient text) + subtitle + dual CTAs + social proof (avatar stack + stats). Right: Terminal UI visual with floating metric cards (3D float animation). Background: grid + orbs + particles.

### 7. `HeroPage`
Reusable page header for inner pages. Centered: breadcrumb + title + description. Background: grid + single gradient orb. Fade-up entrance.

### 8. `HeroCTA`
Alternative hero for landing pages. Centered layout, massive headline, two-line subtitle, single prominent CTA with glow. Background: animated gradient mesh.

### 9. `ParticleField`
Canvas-based particle system. 60 small dots with slow drift, connecting lines within 120px distance. Responds to scroll velocity (particles scatter slightly on fast scroll). Configurable color, count, speed.

---

## Feature Components (6)

### 10. `BentoGrid`
CSS Grid container with predefined layout slots (large, medium, small, wide). 4-column on desktop, 2 on tablet, 1 on mobile. Gap: 16px. Children are BentoCard components.

### 11. `BentoCard`
Card with size variant prop (large/medium/small/wide). Hover: translateY(-6px) + top-border gradient reveal + shadow expansion. Contains: icon, title, description, optional stat or visual. 3D tilt on hover (±6deg based on cursor position).

### 12. `FeatureShowcase`
Split layout (text left, visual right — alternating). Text side: label + title + description + bullet list with check icons. Visual side: screenshot/mockup in styled frame with floating accent elements. Scroll-triggered entrance.

### 13. `FeatureList`
Simple 3-column grid of feature items. Each item: icon (gradient bg circle) + title + description. Staggered fade-up on scroll. Hover: icon scales up, card lifts.

### 14. `StatsBar`
Horizontal row of 3-4 stats. Each: large number (gradient text, counts up on scroll) + label. Dividers between. Numbers use mono font. Background: subtle glass effect.

### 15. `IntegrationGrid`
Logo cloud showing integration partners. 4×2 grid of logo cards. Each card: glass bg, logo centered, name below. Hover: scale(1.05) + border glow. Infinite horizontal scroll animation option.

---

## Social Proof Components (5)

### 16. `TestimonialCarousel`
3-card visible carousel with peek at edges. Each card: quote, author photo, name, title, company. Auto-advance with pause on hover. Navigation dots + arrow buttons. Cards have glass effect.

### 17. `TestimonialGrid`
Masonry-style grid of testimonials. Mixed sizes (some with photos, some text-only). Staggered fade-up entrance. Hover: subtle lift.

### 18. `LogoBar`
Horizontal row of client/partner logos. Grayscale → color on hover. Optional: infinite scroll marquee. "Trusted by" label above.

### 19. `SocialProofBadge`
Inline component: avatar stack (overlapping circles) + "Join 10,000+ developers" text. Used in hero and CTA sections.

### 20. `ReviewCard`
Individual testimonial card. Quote text, star rating, author info. Glass background. Hover: lift + border glow.

---

## Pricing Components (4)

### 21. `PricingTable`
3-4 column pricing cards. Popular plan highlighted (gradient border + "Popular" badge + slight scale). Each card: plan name, price (toggle monthly/annual with animated switch), feature list with check/x icons, CTA button. Hover: lift + shadow.

### 22. `PricingToggle`
Monthly/Annual toggle switch. Pill-shaped with sliding indicator. "Save 20%" badge appears on annual selection with pop animation.

### 23. `PricingFAQ`
Accordion-style FAQ below pricing. Expand/collapse with smooth height animation + chevron rotation. 6-8 common questions.

### 24. `ComparisonTable`
Full feature comparison grid. Sticky header row. Check/x/partial icons. Alternating row colors. Highlighted column for recommended plan.

---

## Content Components (7)

### 25. `TeamGrid`
3-4 column grid of team members. Each card: photo (grayscale → color on hover), name, role, social links. Hover: photo color transition + card lift + social icons appear. Staggered entrance.

### 26. `CaseStudyCard`
Large card with: background image (gradient overlay), client logo, headline, metrics (3 stats), "Read More" link. Hover: image scale + overlay lighten. Used in a 2-column or full-width layout.

### 27. `CaseStudyPage`
Full case study layout: hero (client + challenge), solution section, results (stat cards), testimonial, related cases. Inner page component.

### 28. `BlogCard`
Card with: image (aspect 16:9), category tag, title, excerpt, author + date. Hover: image zoom + card lift. Grid layout: 3 columns.

### 29. `BlogPostLayout`
Article page layout: narrow content column (max 720px), table of contents sidebar (sticky), author bar, related posts at bottom. Typography optimized for reading.

### 30. `TimelineSection`
Vertical timeline with alternating cards (left/right on desktop, all left on mobile). Each node: date, title, description. Connecting line with animated dots. Scroll-triggered: line draws as you scroll.

### 31. `ChangelogEntry`
Individual changelog card: version badge, date, title, description with markdown-style formatting. Tags for: new, improved, fixed.

---

## CTA Components (3)

### 32. `CTABanner`
Full-width section with gradient background (animated mesh). Large headline + subtitle + CTA button with glow. Optional: floating decorative elements. Entrance: scale-up.

### 33. `CTAInline`
Compact CTA embedded between sections. Single line: text + button. Glass background with border.

### 34. `NewsletterForm`
Email input + submit button inline. Validation states. Success: checkmark animation + "You're in!" message. Glass card styling.

---

## UI Primitives (8)

### 35. `Button`
Variants: primary (gradient bg + glow), secondary (outlined + hover fill), ghost (text only + underline). Sizes: sm, md, lg. Loading state with spinner. Hover: translateY(-2px) + shadow increase. Optional icon slot.

### 36. `Badge`
Pill-shaped label. Variants: primary, accent, neutral, success, warning. Used for: section labels, pricing badges, status indicators. Optional pulse dot.

### 37. `Card`
Base card component. Glass variant, solid variant. Hover: lift + border glow. Accepts children. Used as foundation for all card-type components.

### 38. `TerminalWindow`
Styled code block with: traffic-light dots header bar, file/tab name, monospace content. Optional typing animation for content. Optional line numbers. Syntax highlighting via CSS classes.

### 39. `DarkModeToggle`
Sun/moon icon toggle. Smooth icon morph transition (sun rays rotate out, moon crescent rotates in). Persists to localStorage. Transitions all CSS variables (0.3s).

### 40. `GradientText`
Wrapper that applies animated gradient to text. Configurable gradient colors. `background-size: 200%` with slow shift animation.

### 41. `SectionLabel`
Uppercase, small text with colored dot or icon. Used above every section title for categorization ("FEATURES", "PRICING", etc.). Pill variant with border.

### 42. `Accordion`
Expandable content panel. Chevron rotates on toggle. Smooth height transition. Used in FAQ and documentation pages.

---

## Decorative / Effect Components (3 — bonus)

### 43. `GradientOrb`
Positioned blurred circle. Props: size, color, position, animation-delay. Used in section backgrounds.

### 44. `GridBackground`
SVG/CSS grid pattern with radial mask. Fixed or relative positioning. Configurable opacity and cell size.

### 45. `ScrollProgress`
Thin progress bar at top of page showing scroll position. Gradient colored (violet → cyan). Only appears on long pages.
