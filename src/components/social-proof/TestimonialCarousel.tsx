import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './TestimonialCarousel.module.css';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayMs?: number;
}

export default function TestimonialCarousel({ testimonials, autoPlayMs = 5000 }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const total = testimonials.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const id = setInterval(() => {
      if (!paused.current) next();
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [next, autoPlayMs]);

  return (
    <div
      className={`${styles.carousel} fade-up`}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      role="region"
      aria-label="Testimonials"
      aria-roledescription="carousel"
    >
      <div className={styles.track} style={{ transform: `translateX(-${active * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={styles.card}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${i + 1} of ${total}`}
          >
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

      <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
