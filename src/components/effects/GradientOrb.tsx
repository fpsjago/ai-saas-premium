import type { CSSProperties } from 'react';

interface Props {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
  className?: string;
}

export default function GradientOrb({
  color = 'rgba(139, 92, 246, 0.12)',
  size = 600,
  top = '20%',
  left = '20%',
  delay = 0,
  className = '',
}: Props) {
  const style: CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    top,
    left,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color}, transparent 70%)`,
    filter: 'blur(120px)',
    pointerEvents: 'none',
    zIndex: -1,
    animation: `orb-drift 25s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  };

  return (
    <>
      <div className={className} style={style} aria-hidden="true" />
      <style>{`
        @keyframes orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </>
  );
}
