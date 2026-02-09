import styles from './HeroPage.module.css';
import GradientOrb from '../effects/GradientOrb';
import GridBackground from '../effects/GridBackground';
import ParticleField from '../effects/ParticleField';

interface Breadcrumb {
  label: string;
  href?: string;
}

export interface HeroPageProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function HeroPage({ title, description, breadcrumbs }: HeroPageProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.bgEffects} aria-hidden="true">
        <GridBackground />
        <ParticleField count={100} />
        <GradientOrb color="rgba(139, 92, 246, 0.12)" size={500} top="30%" left="20%" />
        <GradientOrb color="rgba(34, 211, 238, 0.1)" size={400} top="60%" left="70%" delay={3} />
      </div>

      <div className={styles.inner}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={`${styles.breadcrumbs} fade-up`} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className={styles.separator}>/</span>}
                {crumb.href ? (
                  <a href={crumb.href}>{crumb.label}</a>
                ) : (
                  <span className={styles.current}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className={`${styles.title} fade-up`}>{title}</h1>
        {description && <p className={`${styles.description} fade-up`}>{description}</p>}
      </div>
    </section>
  );
}
