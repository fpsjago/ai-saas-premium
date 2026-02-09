import { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              className={styles.trigger}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
            >
              {item.title}
              <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`panel-${item.id}`}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
              role="region"
              aria-labelledby={`trigger-${item.id}`}
            >
              <div className={styles.panelContent}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
