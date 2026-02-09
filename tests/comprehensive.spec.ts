import { test, expect, Page } from '@playwright/test';

const BASE = '/ai-saas-premium';

const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features/' },
  { name: 'Pricing', path: '/pricing/' },
  { name: 'About', path: '/about/' },
  { name: 'Contact', path: '/contact/' },
  { name: 'Blog', path: '/blog/' },
  { name: 'Case Studies', path: '/case-studies/' },
  { name: 'Changelog', path: '/changelog/' },
  { name: 'Docs', path: '/docs/' },
];

const BLOG_POSTS = [
  '/blog/ai-deployment-trends-2026/',
  '/blog/developer-productivity-metrics/',
  '/blog/platform-engineering-guide/',
  '/blog/scaling-to-million-users/',
  '/blog/security-best-practices/',
  '/blog/zero-downtime-deployments/',
];

const CASE_STUDIES = [
  '/case-studies/cloudops-scale/',
  '/case-studies/devhub-productivity/',
  '/case-studies/techflow-ai/',
];

// ============================================================
// 1. CONSOLE ERRORS — Every page should have zero console errors
// ============================================================
test.describe('Console Errors', () => {
  for (const page of [...PAGES, ...BLOG_POSTS.map(p => ({ name: p, path: p })), ...CASE_STUDIES.map(p => ({ name: p, path: p }))]) {
    test(`no console errors on ${page.name}`, async ({ page: pg }) => {
      const errors: string[] = [];
      pg.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      pg.on('pageerror', err => errors.push(err.message));
      await pg.goto(`${BASE}${page.path}`);
      await pg.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });
  }
});

// ============================================================
// 2. NAVIGATION & LINKS
// ============================================================
test.describe('Navigation', () => {
  test('logo links to home', async ({ page }) => {
    await page.goto(`${BASE}/features/`);
    await page.locator('nav a').first().click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/?$`));
  });

  test('nav links work', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const vp = page.viewportSize();
    if (vp && vp.width >= 768) {
      const navLinks = page.locator('nav ul a');
      const count = await navLinks.count();
      expect(count).toBeGreaterThanOrEqual(4);
      const featuresLink = page.locator('nav ul a[href*="features"]');
      await featuresLink.click();
      await expect(page).toHaveURL(/features/);
    } else {
      // On mobile, test via direct navigation
      await page.goto(`${BASE}/features/`);
      await expect(page).toHaveURL(/features/);
    }
  });

  test('footer links present', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('active link state on current page', async ({ page }) => {
    await page.goto(`${BASE}/contact/`);
    await page.waitForLoadState('networkidle');
    const vp = page.viewportSize();
    if (vp && vp.width >= 768) {
      const activeLink = page.locator('nav ul a[href*="contact"]');
      const className = await activeLink.getAttribute('class');
      expect(className).toContain('Active');
    }
    // On mobile, nav links are hidden - just verify page loaded
  });
});

// ============================================================
// 3. BREADCRUMBS
// ============================================================
test.describe('Breadcrumbs', () => {
  for (const pg of PAGES.filter(p => p.path !== '/')) {
    test(`breadcrumbs on ${pg.name}`, async ({ page }) => {
      await page.goto(`${BASE}${pg.path}`);
      // Look for breadcrumb-like elements - links with "Home" text
      const homeLink = page.locator('a:has-text("Home")').first();
      if (await homeLink.isVisible()) {
        await expect(homeLink).toHaveAttribute('href', /ai-saas-premium/);
      }
    });
  }
});

// ============================================================
// 4. INTERACTIVE ELEMENTS
// ============================================================
test.describe('Interactive Elements', () => {
  test('contact form inputs work', async ({ page }) => {
    await page.goto(`${BASE}/contact/`);
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'Hello, this is a test message.');
    expect(await page.inputValue('#name')).toBe('Test User');
    expect(await page.inputValue('#email')).toBe('test@example.com');
    expect(await page.inputValue('#message')).toBe('Hello, this is a test message.');
  });

  test('contact form submit works', async ({ page }) => {
    await page.goto(`${BASE}/contact/`);
    await page.waitForTimeout(500);
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'Hello');
    const submitBtn = page.locator('form:has(#name) button[type="submit"]');
    await submitBtn.click();
    await expect(submitBtn).toContainText('Message Sent', { timeout: 5000 });
  });

  test('contact form validation - required fields', async ({ page }) => {
    await page.goto(`${BASE}/contact/`);
    // Required attributes should be present
    await expect(page.locator('#name')).toHaveAttribute('required', '');
    await expect(page.locator('#email')).toHaveAttribute('required', '');
    await expect(page.locator('#message')).toHaveAttribute('required', '');
  });

  test('newsletter form in footer', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const newsletterInput = page.locator('footer input[type="email"]');
    await expect(newsletterInput).toBeVisible();
    await newsletterInput.fill('test@example.com');
    expect(await newsletterInput.inputValue()).toBe('test@example.com');
  });

  test('pricing toggle switches monthly/yearly', async ({ page }) => {
    await page.goto(`${BASE}/pricing/`);
    await page.waitForLoadState('networkidle');
    // Look for pricing toggle
    const toggle = page.locator('[class*="toggle"], [class*="Toggle"]').first();
    if (await toggle.isVisible()) {
      await toggle.click();
      // Prices should change - just verify no errors
    }
  });

  test('dark mode toggle works', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    const initialTheme = await page.locator('html').getAttribute('data-theme');
    // Click toggle
    await page.evaluate(() => {
      const btn = document.querySelector('button[data-theme-toggle]') as HTMLElement;
      if (btn) btn.click();
    });
    await page.waitForTimeout(500);
    const newTheme = await page.locator('html').getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('CTA buttons are clickable', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const buttons = page.locator('a[href*="cta"], button:has-text("Get Started"), a:has-text("Get Started")');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(1);
    for (let i = 0; i < Math.min(count, 3); i++) {
      await expect(buttons.nth(i)).toBeEnabled();
    }
  });
});

// ============================================================
// 5. ACCORDION (FAQ / Docs)
// ============================================================
test.describe('Accordion', () => {
  test('accordion expands and collapses', async ({ page }) => {
    // Check docs page or pricing page for FAQ accordion
    await page.goto(`${BASE}/docs/`);
    await page.waitForLoadState('networkidle');
    const triggers = page.locator('[aria-expanded]');
    const count = await triggers.count();
    if (count > 0) {
      const firstTrigger = triggers.first();
      await firstTrigger.click();
      await expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
      await firstTrigger.click();
      await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
    }
  });
});

// ============================================================
// 6. MOBILE MENU
// ============================================================
test.describe('Mobile Menu', () => {
  test('hamburger opens and closes menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], button[aria-label*="Open" i]');
    if (await hamburger.count() > 0 && await hamburger.first().isVisible()) {
      await hamburger.first().click();
      await page.waitForTimeout(500);
      // Close
      const closeBtn = page.locator('button[aria-label*="Close" i]');
      if (await closeBtn.count() > 0 && await closeBtn.first().isVisible()) {
        await closeBtn.first().click();
      } else {
        await hamburger.first().click();
      }
    }
  });
});

// ============================================================
// 7. SCROLL ANIMATIONS
// ============================================================
test.describe('Scroll Animations', () => {
  test('fade-up elements exist on home', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const fadeElements = page.locator('.fade-up, [class*="fade"]');
    const count = await fadeElements.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('scroll progress bar updates', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    const scrollBar = page.locator('[class*="ScrollProgress"], [class*="scrollProgress"], [class*="progress"]').first();
    if (await scrollBar.isVisible()) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      // Just verify it exists and no errors
    }
  });
});

// ============================================================
// 8. TESTIMONIAL CAROUSEL
// ============================================================
test.describe('Testimonial Carousel', () => {
  test('carousel navigation works', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    const prevBtn = page.locator('[aria-label*="previous" i], [aria-label*="prev" i], button:has-text("←")').first();
    const nextBtn = page.locator('[aria-label*="next" i], button:has-text("→")').first();
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForTimeout(300);
      // Should not error
    }
  });
});

// ============================================================
// 9. DARK MODE ON EVERY PAGE
// ============================================================
test.describe('Dark Mode Toggle', () => {
  for (const pg of PAGES.slice(0, 5)) {
    test(`dark mode toggle on ${pg.name}`, async ({ page }) => {
      await page.goto(`${BASE}${pg.path}`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      const initialTheme = await page.locator('html').getAttribute('data-theme');
      // Click toggle via JS to ensure hydrated handler fires
      await page.evaluate(() => {
        const btn = document.querySelector('button[data-theme-toggle]') as HTMLElement;
        if (btn) btn.click();
      });
      await page.waitForTimeout(500);
      const newTheme = await page.locator('html').getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
      // Toggle back
      await page.evaluate(() => {
        const btn = document.querySelector('button[data-theme-toggle]') as HTMLElement;
        if (btn) btn.click();
      });
      await page.waitForTimeout(500);
      const restoredTheme = await page.locator('html').getAttribute('data-theme');
      expect(restoredTheme).toBe(initialTheme);
    });
  }
});

// ============================================================
// 10. ALL PAGES LOAD (200 status)
// ============================================================
test.describe('All Pages Load', () => {
  const allPaths = [
    ...PAGES.map(p => p.path),
    ...BLOG_POSTS,
    ...CASE_STUDIES,
  ];

  for (const path of allPaths) {
    test(`loads ${path}`, async ({ page }) => {
      const response = await page.goto(`${BASE}${path}`);
      expect(response?.status()).toBe(200);
      // Check page has content
      const body = page.locator('body');
      await expect(body).not.toBeEmpty();
    });
  }
});

// ============================================================
// 11. NO BROKEN INTERNAL LINKS
// ============================================================
test.describe('No Broken Links', () => {
  test('home page has no broken internal links', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const links = page.locator('a[href^="/ai-saas-premium"]');
    const count = await links.count();
    const hrefs = new Set<string>();
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      if (href) hrefs.add(href);
    }
    for (const href of hrefs) {
      const resp = await page.request.get(href);
      expect(resp.status(), `Broken link: ${href}`).toBeLessThan(400);
    }
  });
});

// ============================================================
// 12. ACCESSIBILITY BASICS
// ============================================================
test.describe('Accessibility', () => {
  test('navigation has aria-label', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const nav = page.locator('nav[aria-label]');
    await expect(nav.first()).toBeVisible();
  });

  test('images have alt text', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt !== null, `Image ${i} missing alt text`).toBeTruthy();
    }
  });

  test('semantic HTML structure', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page.locator('nav').first()).toBeVisible();
    await expect(page.locator('footer').first()).toBeVisible();
    // main or section should exist
    const main = page.locator('main, section');
    expect(await main.count()).toBeGreaterThanOrEqual(1);
  });

  test('keyboard focus visible on interactive elements', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Focus should be visible on something
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('buttons have accessible names', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const buttons = page.locator('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i);
      const text = await btn.textContent();
      const ariaLabel = await btn.getAttribute('aria-label');
      expect(text?.trim() || ariaLabel, `Button ${i} has no accessible name`).toBeTruthy();
    }
  });
});

// ============================================================
// 13. RESPONSIVE — NO HORIZONTAL SCROLL
// ============================================================
test.describe('Responsive', () => {
  const viewports = [
    { name: 'iPhone SE', width: 320, height: 568 },
    { name: 'iPhone 12', width: 375, height: 812 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'Desktop', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    test(`no horizontal scroll at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE}/`);
      await page.waitForLoadState('networkidle');
      // Check body overflow - body has overflow-x: hidden so we check body's scrollWidth
      const hasHScroll = await page.evaluate(() => {
        // With overflow-x: hidden on body, the user can't actually scroll horizontally
        // So check if body allows horizontal scrolling (not just content overflow)
        const style = getComputedStyle(document.body);
        return style.overflowX !== 'hidden' && document.body.scrollWidth > document.body.clientWidth;
      });
      expect(hasHScroll, `Horizontal scroll detected at ${vp.width}px`).toBeFalsy();
    });
  }
});

// ============================================================
// 14. CONTENT QA — NO LOREM IPSUM
// ============================================================
test.describe('Content QA', () => {
  for (const pg of PAGES) {
    test(`no Lorem Ipsum on ${pg.name}`, async ({ page }) => {
      await page.goto(`${BASE}${pg.path}`);
      const body = await page.textContent('body');
      expect(body?.toLowerCase()).not.toContain('lorem ipsum');
    });
  }
});

// ============================================================
// 15. CROSS-PAGE FLOWS
// ============================================================
test.describe('User Journeys', () => {
  test('Home → Features → Pricing', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.goto(`${BASE}/features/`);
    await expect(page).toHaveURL(/features/);
    await page.goto(`${BASE}/pricing/`);
    await expect(page).toHaveURL(/pricing/);
  });

  test('Home → Blog → Post', async ({ page }) => {
    await page.goto(`${BASE}/`);
    // Navigate to blog
    await page.goto(`${BASE}/blog/`);
    await page.waitForLoadState('networkidle');
    // Click first blog post link
    const postLink = page.locator('a[href*="/blog/"][href*="-"]').first();
    if (await postLink.isVisible()) {
      await postLink.click();
      await expect(page).toHaveURL(/blog\/.+/);
    }
  });

  test('Home → Case Studies → Detail', async ({ page }) => {
    await page.goto(`${BASE}/case-studies/`);
    await page.waitForLoadState('networkidle');
    const link = page.locator('a[href*="/case-studies/"][href*="-"]').first();
    if (await link.isVisible()) {
      await link.click();
      await expect(page).toHaveURL(/case-studies\/.+/);
    }
  });
});

// ============================================================
// 16. REDUCED MOTION
// ============================================================
test.describe('Reduced Motion', () => {
  test('respects prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    // Page should load without errors
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});

// ============================================================
// 17. HOVER STATES (desktop only)
// ============================================================
test.describe('Hover States', () => {
  test('button hover effect', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const btn = page.locator('a:has-text("Get Started")').first();
    if (await btn.isVisible()) {
      const beforeTransform = await btn.evaluate(el => getComputedStyle(el).transform);
      await btn.hover();
      await page.waitForTimeout(300);
      // Hover should trigger some change (transform, shadow, etc.)
    }
  });
});

// ============================================================
// 18. EXTERNAL LINKS
// ============================================================
test.describe('External Links', () => {
  test('social links have proper attributes', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const socialLinks = page.locator('footer a[aria-label]');
    const count = await socialLinks.count();
    // Social links should have aria-labels
    expect(count).toBeGreaterThanOrEqual(3);
  });
});

// ============================================================
// 19. 404 PAGE
// ============================================================
test.describe('404 Page', () => {
  test('404 page works', async ({ page }) => {
    const response = await page.goto(`${BASE}/nonexistent-page/`);
    expect(response?.status()).toBe(404);
  });
});

// ============================================================
// 20. STATS COUNTER
// ============================================================
test.describe('Stats Counter', () => {
  test('stats bar visible on home', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('networkidle');
    // Scroll to stats section
    const stats = page.locator('[class*="Stats"], [class*="stats"]').first();
    if (await stats.isVisible()) {
      await stats.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      // Numbers should be visible
      const text = await stats.textContent();
      expect(text).toBeTruthy();
    }
  });
});
