import type { ReactNode } from 'react';
import styles from './FeatureList.module.css';
import { getIcon, type IconName } from '../icons/IconMap';

export interface Feature {
  icon: ReactNode | IconName;
  title: string;
  description: string;
}

export interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className={`${styles.grid} stagger`}>
      {features.map((f, i) => {
        const iconElement = typeof f.icon === 'string' ? getIcon(f.icon as IconName, 24) : f.icon;
        return (
          <div key={i} className={`${styles.item} fade-up`}>
            <div className={styles.icon} aria-hidden="true">{iconElement}</div>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.description}>{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}
