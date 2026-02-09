interface ParallaxElement {
  el: HTMLElement;
  speed: number;
}

export function initParallax(): void {
  const items: ParallaxElement[] = [];

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.5');
    items.push({ el, speed });
  });

  if (!items.length) return;

  let ticking = false;

  function update() {
    const scrollY = window.scrollY;
    items.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * (speed - 1);
      el.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}
