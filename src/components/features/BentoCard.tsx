import { useEffect, useRef, type ReactNode } from 'react';
import styles from './BentoCard.module.css';
import { getIcon, type IconName } from '../icons/IconMap';

export interface BentoCardProps {
  icon: ReactNode | IconName;
  title: string;
  description: string;
  stat?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

export default function BentoCard({ icon, title, description, stat, size = 'small' }: BentoCardProps) {
  const iconElement = typeof icon === 'string' ? getIcon(icon as IconName, 24) : icon;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const maxDeg = 6;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg) translateY(-6px)`;
    };

    const onLeave = () => {
      el.style.transition = 'transform 0.4s ease-out';
      el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 400);
    };

    const onEnter = () => {
      el.style.transition = 'transform 0.15s ease-out';
    };

    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.card} ${styles[size]} fade-up`} data-tilt>
      <div className={styles.icon} aria-hidden="true">{iconElement}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {stat && <div className={styles.stat}>{stat}</div>}
    </div>
  );
}
