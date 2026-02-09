import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = 'primary', pulse = false, children, className = '' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {pulse && <span className={`${styles.dot} ${styles.pulse}`} aria-hidden="true" />}
      {children}
    </span>
  );
}
