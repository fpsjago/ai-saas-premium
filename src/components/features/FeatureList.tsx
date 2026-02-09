import styles from './FeatureList.module.css';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className={`${styles.grid} stagger`}>
      {features.map((f, i) => (
        <div key={i} className={`${styles.item} fade-up`}>
          <div className={styles.icon} aria-hidden="true">{f.icon}</div>
          <h3 className={styles.title}>{f.title}</h3>
          <p className={styles.description}>{f.description}</p>
        </div>
      ))}
    </div>
  );
}
