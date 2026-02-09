import type { CSSProperties } from 'react';

interface Props {
  cellSize?: number;
  opacity?: number;
  className?: string;
}

export default function GridBackground({ cellSize = 48, opacity = 0.015, className = '' }: Props) {
  const style: CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)
    `,
    backgroundSize: `${cellSize}px ${cellSize}px`,
    mask: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
    WebkitMask: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
  };

  return <div className={className} style={style} aria-hidden="true" />;
}
