import styles from './GradientText.module.css';

export interface GradientTextProps {
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ as: Tag = 'span', children, className = '' }: GradientTextProps) {
  return <Tag className={`${styles.gradient} ${className}`}>{children}</Tag>;
}
