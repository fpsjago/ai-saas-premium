export function initTilt(selector: string = '[data-tilt]', maxDeg: number = 8): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.style.willChange = 'transform';
    el.style.transition = 'transform 0.15s ease-out';

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.4s ease-out';
      el.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
      setTimeout(() => { el.style.transition = 'transform 0.15s ease-out'; }, 400);
    });
  });
}
