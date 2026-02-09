import styles from './TestimonialGrid.module.css';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating?: number;
}

export interface TestimonialGridProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className={`${styles.grid} stagger`}>
      {testimonials.map((t, i) => (
        <div key={i} className={`${styles.card} fade-up`}>
          {t.rating && (
            <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
          )}
          <p className={styles.quote}>{t.quote}</p>
          <div className={styles.author}>
            <div className={styles.authorAvatar}>{t.initials}</div>
            <div>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
