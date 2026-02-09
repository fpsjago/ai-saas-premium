import styles from './Card.module.css';

export interface CardProps {
  variant?: 'glass' | 'solid' | 'elevated';
  children: React.ReactNode;
  className?: string;
}

export default function Card({ variant = 'glass', children, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}
