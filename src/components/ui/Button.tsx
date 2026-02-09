import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  href,
  children,
  onClick,
  type = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!loading && iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  );

  if (href) {
    return <a href={href} className={cls} {...rest}>{content}</a>;
  }

  return (
    <button className={cls} onClick={onClick} disabled={disabled || loading} type={type} {...rest}>
      {content}
    </button>
  );
}
