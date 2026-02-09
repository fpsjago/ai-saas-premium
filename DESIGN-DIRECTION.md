# NexusAI — Design Direction

## Color Palette

### Dark Mode (Default)

```
Background:        #06060A (near-black with blue undertone)
Surface:           #0F0F15 (elevated cards)
Card:              #14141C (card backgrounds)
Card Hover:        #1A1A25 (card hover state)
Border:            #1E1E2E (subtle borders)
Border Hover:      #2A2A3E (hover state borders)
```

### Primary: Electric Violet
```
50:  #F3EEFF
100: #E0D4FE  
200: #C6ADFD
300: #A87FFD
400: #8B5CF6  ← main
500: #7C3AED
600: #6D28D9
700: #5B21B6
900: #3B0764
Glow: rgba(139, 92, 246, 0.4)
```

### Accent: Electric Cyan
```
50:  #ECFEFF
100: #CFFAFE
200: #A5F3FC
300: #67E8F9
400: #22D3EE  ← main
500: #06B6D4
600: #0891B2
Glow: rgba(34, 211, 238, 0.4)
```

### Why Violet + Cyan (not Violet + Lime)?
- Cyan reads "AI/tech/futuristic" more naturally
- Better contrast ratios on dark backgrounds
- More versatile for gradient combinations
- Avoids the "code editor" feel of green accents
- Creates a cohesive cool-tone identity

### Secondary Accents (sparingly)
```
Success:   #22C55E (confirmations, positive stats)
Warning:   #F59E0B (alerts)
Error:     #EF4444 (errors)
Rose:      #F43F5E (for gradient endpoints)
```

### Light Mode
```
Background:  #FAFBFE
Surface:     #F0F1F5
Card:        #FFFFFF
Border:      #E2E4EB
Text:        #0F0F15
Secondary:   #4B5068
```

### Gradient Recipes

```css
/* Hero headline gradient */
linear-gradient(135deg, #A87FFD 0%, #22D3EE 50%, #F43F5E 100%)

/* Card top-border glow on hover */
linear-gradient(90deg, transparent, #8B5CF6, #22D3EE, transparent)

/* Background mesh (animated) */
radial-gradient(600px circle at 20% 30%, rgba(139,92,246,0.12), transparent),
radial-gradient(500px circle at 80% 70%, rgba(34,211,238,0.08), transparent),
radial-gradient(400px circle at 50% 50%, rgba(244,63,94,0.05), transparent)

/* Button primary */
linear-gradient(135deg, #8B5CF6, #7C3AED)

/* CTA glow spread */
box-shadow: 0 0 80px rgba(139,92,246,0.3), 0 0 160px rgba(34,211,238,0.1)
```

---

## Typography

### Font Stack
```
Headings:  'Plus Jakarta Sans', system-ui, sans-serif  (800 weight for display)
Body:      'Inter', system-ui, sans-serif  (400, 500, 600)
Mono:      'JetBrains Mono', monospace  (terminal UI, code, stats)
```

### Type Scale
```
Display:   clamp(3.5rem, 9vw, 6.5rem)   — Hero only
H1:        clamp(2.5rem, 6vw, 4rem)      — Page titles
H2:        clamp(2rem, 4vw, 3rem)         — Section titles
H3:        1.5rem                          — Card titles
H4:        1.25rem                         — Subsection
Body:      1rem / 1.125rem                — Paragraphs
Small:     0.875rem                        — Labels, captions
XS:        0.75rem                         — Badges, tags
```

### Typography Rules
- Headings: `letter-spacing: -0.03em`, `line-height: 1.05`
- Body: `line-height: 1.7` for readability
- Display text: `text-wrap: balance`
- Mono text: `letter-spacing: -0.01em`
- Section labels: ALL CAPS, `letter-spacing: 0.1em`, `font-size: 0.75rem`

---

## Animation Strategy

### Philosophy
Every element earns its animation. No gratuitous motion. Each animation serves one of:
1. **Entrance** — Reveals content as user scrolls (builds anticipation)
2. **Feedback** — Responds to user interaction (confirms action)
3. **Atmosphere** — Background motion that creates depth (never distracts)

### Entrance Animations (Scroll-Triggered)

```css
/* Base: IntersectionObserver adds .visible class */

/* Fade up (default for most elements) */
.fade-up {
  opacity: 0; transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up.visible { opacity: 1; transform: none; }

/* Fade in from left/right (for split layouts) */
.fade-left { transform: translateX(-60px); }
.fade-right { transform: translateX(60px); }

/* Scale up (for images, cards) */
.scale-up {
  opacity: 0; transform: scale(0.92);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Stagger children */
.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: 80ms; }
.stagger > *:nth-child(3) { transition-delay: 160ms; }
.stagger > *:nth-child(4) { transition-delay: 240ms; }
.stagger > *:nth-child(5) { transition-delay: 320ms; }
.stagger > *:nth-child(6) { transition-delay: 400ms; }
```

### Hover & Interaction

```css
/* Card lift + border glow */
.card:hover {
  transform: translateY(-6px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(139,92,246,0.1);
}

/* 3D card tilt (JS: mousemove handler) */
/* rotateX/Y based on cursor position, max ±8deg */
/* Resets smoothly on mouseleave */

/* Button magnetic pull (JS) */
/* Button subtly moves toward cursor within 100px radius */

/* Link underline grow */
.nav-link::after {
  content: ''; width: 0; height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }
```

### Background Atmosphere

```css
/* Gradient orbs — slow float */
@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
/* Duration: 20-30s, ease-in-out, infinite */

/* Grid background with radial mask */
background-image: 
  linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
background-size: 48px 48px;
mask: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);

/* Particle system (canvas-based) */
/* 50-80 small dots, slow random drift, connect lines within 120px */
/* Opacity: 0.15-0.3, responds to scroll speed */
```

### Parallax

```css
/* CSS-based for backgrounds, JS for precision elements */
/* Layer speeds: */
/* Background grid:    0.3x scroll speed */
/* Gradient orbs:      0.5x scroll speed */
/* Floating badges:    0.7x scroll speed */
/* Content:            1.0x (normal) */
/* Foreground accents: 1.2x scroll speed (subtle) */
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .fade-up, .fade-left, .fade-right, .scale-up {
    opacity: 1; transform: none;
  }
}
```

---

## Visual Identity Elements

### 1. Grid Background
Present on every page. 48px squares, near-invisible lines (`rgba(255,255,255,0.015)`), masked with radial gradient. Creates subtle depth without competing with content.

### 2. Gradient Orbs
2-3 per page section. 400-700px diameter, blur(120px), opacity 0.08-0.15. Slow drift animation. Primary (violet) and accent (cyan) colors.

### 3. Noise/Grain Overlay
Fixed SVG noise at 2-3% opacity over entire page. Adds texture, prevents flat digital feel.

### 4. Glass Morphism
Cards and nav: `backdrop-filter: blur(20px)`, semi-transparent backgrounds, 1px borders. Used for: navigation bar, floating cards, modals.

### 5. Terminal UI Motif
Code blocks styled as terminal windows (traffic light dots, monospace font). Used in: Hero visual, feature demos, API documentation page.

### 6. Glow Effects
- Card hover: top-border gradient reveal
- Button hover: box-shadow glow spread
- Active nav: subtle underline glow
- Stats: number color with text-shadow

### 7. Bento Grid
Feature sections use CSS Grid with varied cell sizes:
- Large: `span 2 / span 2` (hero feature)
- Medium: `span 2 / span 1` (secondary features)  
- Small: `span 1 / span 1` (standard features)
- Wide: `span 4 / span 1` (banner/CTA)

### 8. Dark Mode Toggle
Top-right in navigation. Smooth transition (0.3s) on all color properties. Uses CSS custom properties for instant theme swap. Persists choice in localStorage.
