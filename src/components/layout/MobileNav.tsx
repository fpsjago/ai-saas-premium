import styles from './MobileNav.module.css';
import type { NavLink } from './Navigation';

export interface MobileNavProps {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
}

const resourcesLinks = [
  { label: 'Documentation', href: '/ai-saas-premium/docs/' },
  { label: 'API Reference', href: '/ai-saas-premium/docs/' },
  { label: 'Blog', href: '/ai-saas-premium/blog/' },
  { label: 'Community', href: 'https://discord.gg/nexusai' },
];

export default function MobileNav({ open, links, onClose }: MobileNavProps) {
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`} aria-hidden={!open}>
      <button 
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {links.map((l) => (
        <a key={l.href} href={l.href} className={styles.link} onClick={onClose} tabIndex={open ? 0 : -1}>
          {l.label}
        </a>
      ))}
      <div className={styles.separator} />
      <span className={styles.sectionLabel}>Resources</span>
      {resourcesLinks.map((l) => (
        <a key={l.href} href={l.href} className={styles.link} onClick={onClose} tabIndex={open ? 0 : -1}>
          {l.label}
        </a>
      ))}
    </div>
  );
}
