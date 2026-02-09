import { useState } from 'react';
import styles from './PricingTable.module.css';
import PricingToggle from './PricingToggle';

interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  cta: string;
  href: string;
  popular?: boolean;
}

export interface PricingTableProps {
  plans: PricingPlan[];
}

export default function PricingTable({ plans }: PricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

      <div className={`${styles.grid} stagger`}>
        {plans.map((plan, i) => (
          <div key={i} className={`${styles.card} ${plan.popular ? styles.popular : ''} fade-up`}>
            {plan.popular && <div className={styles.popularBadge}>Popular</div>}
            <div className={styles.planName}>{plan.name}</div>
            <div className={styles.planDesc}>{plan.description}</div>
            <div className={styles.price}>
              <span className={styles.priceAmount}>
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className={styles.pricePeriod}>/mo</span>
            </div>
            <div className={styles.features}>
              {plan.features.map((f, j) => (
                <div key={j} className={styles.feature}>
                  <span className={f.included ? styles.featureCheck : styles.featureX}>
                    {f.included ? '✓' : '✕'}
                  </span>
                  {f.text}
                </div>
              ))}
            </div>
            <a
              href={plan.href}
              className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : ''}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
