import { useEffect, useRef, useState } from 'react';
import styles from './ParallaxImage.module.css';

interface ParallaxImageProps {
  src: string;
  alt?: string;
  speed?: number;
  opacity?: number;
  blur?: number;
  className?: string;
}

export default function ParallaxImage({ 
  src, 
  alt = '', 
  speed = 0.5, 
  opacity = 0.15,
  blur = 0,
  className = '' 
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const viewportHeight = window.innerHeight;
      
      // Calculate parallax offset
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const distance = scrolled - elementTop + viewportHeight;
        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={imageRef}
      className={`${styles.parallax} ${className}`}
      style={{ 
        opacity,
        '--blur': `${blur}px`
      } as React.CSSProperties}
    >
      <div 
        className={styles.image}
        style={{ 
          backgroundImage: `url(${src})`,
          transform: `translateY(${offset}px)`
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
