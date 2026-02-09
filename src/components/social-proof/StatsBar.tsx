import { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface StatsBarProps {
  stats: Stat[];
}

function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={styles.value}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className={`${styles.bar} stagger`}>
      {stats.map((s, i) => (
        <div key={i} className={`${styles.stat} fade-up`}>
          <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
