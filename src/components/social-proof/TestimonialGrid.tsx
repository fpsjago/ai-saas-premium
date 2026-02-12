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
              {Array.from({ length: 5 }, (_, idx) => (
                <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={idx < t.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
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
