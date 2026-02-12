import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import DarkModeToggle from '../ui/DarkModeToggle';
import Button from '../ui/Button';
import MobileNav from './MobileNav';
import Dropdown from './Dropdown';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavigationProps {
  links?: NavLink[];
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Features', href: import.meta.env.BASE_URL + 'features/' },
  { label: 'Pricing', href: import.meta.env.BASE_URL + 'pricing/' },
  { label: 'About', href: import.meta.env.BASE_URL + 'about/' },
  { label: 'Contact', href: import.meta.env.BASE_URL + 'contact/' },
];

const resourcesLinks = [
  { label: 'Documentation', href: import.meta.env.BASE_URL + 'docs/' },
  { label: 'Blog', href: import.meta.env.BASE_URL + 'blog/' },
  { label: 'Community', href: 'https://discord.gg/nexusai', external: true },
];

export default function Navigation({ links = defaultLinks, className = '' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${className}`} role="navigation" aria-label="Main navigation">
        <div className={styles.inner}>
          <a href={import.meta.env.BASE_URL} className={styles.logo}>
            <span className={styles.logoIcon}>N</span>
            NexusAI
          </a>

          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`${styles.link} ${l.active ? styles.linkActive : ''}`}>{l.label}</a>
              </li>
            ))}
            <li>
              <Dropdown label="Resources" links={resourcesLinks} />
            </li>
          </ul>

          <div className={styles.actions}>
            <DarkModeToggle />
            <Button variant="primary" size="sm" href="#cta">Get Started</Button>
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <MobileNav open={mobileOpen} links={links} onClose={() => setMobileOpen(false)} />
    </>
  );
}
