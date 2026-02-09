import type { ReactNode } from 'react';
import styles from './BentoGrid.module.css';

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`${styles.grid} stagger ${className}`.trim()}>
      {children}
    </div>
  );
}
