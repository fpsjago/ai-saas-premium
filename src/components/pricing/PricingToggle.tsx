import styles from './PricingToggle.module.css';

export interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
  saveText?: string;
}

export default function PricingToggle({ isAnnual, onToggle, saveText = "Save 20%" }: PricingToggleProps) {
  return (
    <div className={`${styles.wrapper} fade-up`}>
      <span className={`${styles.label} ${!isAnnual ? styles.labelActive : ''}`}>Monthly</span>
      <button
        className={styles.toggle}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={() => onToggle(!isAnnual)}
      >
        <span className={styles.thumb} />
      </button>
      <span className={`${styles.label} ${isAnnual ? styles.labelActive : ''}`}>Annual</span>
      <span className={`${styles.saveBadge} ${isAnnual ? styles.saveBadgeVisible : ''}`}>{saveText}</span>
    </div>
  );
}
