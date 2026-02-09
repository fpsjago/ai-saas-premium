export function initTheme(): void {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme-transitioning', '');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nexusai-theme', next);

    setTimeout(() => {
      document.documentElement.removeAttribute('data-theme-transitioning');
    }, 350);
  });
}

export function getTheme(): string {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}
