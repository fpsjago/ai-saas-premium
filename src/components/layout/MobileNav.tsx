import styles from './MobileNav.module.css';
import type { NavLink } from './Navigation';

export interface MobileNavProps {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
}

export default function MobileNav({ open, links, onClose }: MobileNavProps) {
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`} aria-hidden={!open}>
      {links.map((l) => (
        <a key={l.href} href={l.href} className={styles.link} onClick={onClose} tabIndex={open ? 0 : -1}>
          {l.label}
        </a>
      ))}
    </div>
  );
}
