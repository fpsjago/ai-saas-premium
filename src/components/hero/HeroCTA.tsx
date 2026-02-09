import styles from './HeroCTA.module.css';

export interface HeroCTAProps {
  headline: string;
  headlineGradient?: string;
  subtitle: string;
  cta: { text: string; href: string };
}

export default function HeroCTA({
  headline = "Start Building",
  headlineGradient = "The Future Today",
  subtitle = "Join thousands of developers who are already shipping AI-powered products with NexusAI.",
  cta = { text: "Get Started Free", href: "#" },
}: HeroCTAProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.bgEffects} aria-hidden="true" />
      <div className={styles.inner}>
        <h1 className={`${styles.headline} fade-up`}>
          {headline}<br />
          <span className={styles.gradientText}>{headlineGradient}</span>
        </h1>
        <p className={`${styles.subtitle} fade-up`}>{subtitle}</p>
        <div className="fade-up">
          <a href={cta.href} className={styles.cta}>{cta.text} →</a>
        </div>
      </div>
    </section>
  );
}
