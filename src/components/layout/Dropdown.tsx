import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

interface DropdownLink {
  label: string;
  href: string;
  external?: boolean;
}

interface DropdownProps {
  label: string;
  links: DropdownLink[];
  className?: string;
}

export default function Dropdown({ label, links, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div 
      className={`${styles.dropdown} ${className}`}
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg 
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuInner}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.menuLink}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {link.external && (
                  <svg className={styles.externalIcon} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3.5L3.5 9M9 3.5H5.5M9 3.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
