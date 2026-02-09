import { useRef, useEffect } from 'react';
import styles from './ParticleField.module.css';

export interface ParticleFieldProps {
  count?: number;
  colors?: string[];
  lineDistance?: number;
  className?: string;
}

interface Particle {
  x: number; y: number; vx: number; vy: number; r: number; color: string; opacity: number;
}

export default function ParticleField({
  count = 60,
  colors = ['rgba(139,92,246,', 'rgba(34,211,238,'],
  lineDistance = 120,
  className = '',
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = canvas.width = rect?.width || window.innerWidth;
      h = canvas.height = rect?.height || window.innerHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          color,
          opacity: Math.random() * 0.3 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color + (0.25 * (1 - dist / lineDistance)) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [count, lineDistance]);

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className}`} aria-hidden="true" />;
}
