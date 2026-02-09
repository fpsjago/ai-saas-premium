import styles from './TerminalWindow.module.css';

export interface TerminalWindowProps {
  title?: string;
  showCursor?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = 'terminal', showCursor = true, children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`${styles.terminal} ${className}`} role="img" aria-label={`Terminal window: ${title}`}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>
        {children}
        {showCursor && <span className={styles.cursor} aria-hidden="true" />}
      </div>
    </div>
  );
}
