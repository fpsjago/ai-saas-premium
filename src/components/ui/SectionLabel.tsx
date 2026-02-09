import styles from './SectionLabel.module.css';

export interface SectionLabelProps {
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ pulse = false, children, className = '' }: SectionLabelProps) {
  return (
    <span className={`${styles.label} ${className}`}>
      {pulse && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
