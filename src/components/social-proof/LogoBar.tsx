import styles from './LogoBar.module.css';

export interface LogoBarProps {
  logos: string[];
  label?: string;
}

export default function LogoBar({ logos, label = "Trusted by innovative teams" }: LogoBarProps) {
  // Duplicate logos for seamless infinite scroll
  const doubled = [...logos, ...logos];

  return (
    <div className={`${styles.wrapper} fade-up`} aria-label={label}>
      <div className={styles.label}>{label}</div>
      <div className={styles.track} aria-hidden="true">
        {doubled.map((logo, i) => (
          <div key={i} className={styles.logo}>{logo}</div>
        ))}
      </div>
    </div>
  );
}
