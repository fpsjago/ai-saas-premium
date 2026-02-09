import styles from './FeatureShowcase.module.css';

export interface FeatureShowcaseProps {
  label: string;
  title: string;
  description: string;
  bullets?: string[];
  visual?: string;
  reversed?: boolean;
}

export default function FeatureShowcase({
  label,
  title,
  description,
  bullets = [],
  visual = "Visual Placeholder",
  reversed = false,
}: FeatureShowcaseProps) {
  return (
    <div className={`${styles.showcase} ${reversed ? styles.reversed : ''}`}>
      <div className={reversed ? 'fade-right' : 'fade-left'}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {bullets.length > 0 && (
          <div className={styles.bullets}>
            {bullets.map((b, i) => (
              <div key={i} className={styles.bullet}>
                <span className={styles.checkIcon}>✓</span>
                {b}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`${styles.visualSide} ${reversed ? 'fade-left' : 'fade-right'}`}>
        <div className={styles.visualFrame}>{visual}</div>
      </div>
    </div>
  );
}
