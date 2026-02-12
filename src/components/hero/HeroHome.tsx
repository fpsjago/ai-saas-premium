import styles from './HeroHome.module.css';
import GradientOrb from '../effects/GradientOrb';
import GridBackground from '../effects/GridBackground';

interface MetricCard {
  value: string;
  label: string;
  trend?: string;
}

interface SocialAvatar {
  initials: string;
}

export interface HeroHomeProps {
  badge?: string;
  headline: string;
  headlineGradient: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  avatars?: SocialAvatar[];
  proofText?: string;
  terminalLines?: { prompt?: string; cmd?: string; output?: string; comment?: string }[];
  metrics?: MetricCard[];
}

export default function HeroHome({
  badge = "Now in Public Beta",
  headline = "Build AI Products",
  headlineGradient = "That Ship Fast",
  subtitle = "NexusAI is the developer productivity platform that helps modern teams build, test, and deploy AI-powered applications 10x faster.",
  primaryCTA = { text: "Start Free Trial", href: "#" },
  secondaryCTA = { text: "View Demo", href: "#" },
  avatars = [
    { initials: "JD" }, { initials: "AK" }, { initials: "MR" }, { initials: "SL" },
  ],
  proofText = "Join <strong>10,000+</strong> developers shipping with NexusAI",
  terminalLines = [
    { prompt: "~", cmd: "npx create-nexus-app my-project" },
    { output: "✓ Project scaffolded in 2.3s" },
    { output: "✓ AI models configured" },
    { output: "✓ Deploy pipeline ready" },
    { comment: "# Your AI app is live" },
  ],
  metrics = [
    { value: "99.9%", label: "Uptime SLA", trend: "↑" },
    { value: "2.3s", label: "Avg Deploy", trend: "↓" },
    { value: "10x", label: "Faster Dev", trend: "↑" },
  ],
}: HeroHomeProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.bgEffects} aria-hidden="true">
        <GridBackground />
        <GradientOrb color="rgba(139, 92, 246, 0.12)" size={600} top="10%" left="15%" />
        <GradientOrb color="rgba(34, 211, 238, 0.08)" size={500} top="60%" left="70%" delay={5} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={`${styles.badge} fade-up`}>
            <span className={styles.badgeDot} />
            {badge}
          </div>

          <h1 className={`${styles.headline} fade-up`}>
            {headline}<br />
            <span className={styles.gradientText}>{headlineGradient}</span>
          </h1>

          <p className={`${styles.subtitle} fade-up`}>{subtitle}</p>

          <div className={`${styles.ctas} fade-up`}>
            <a href={primaryCTA.href} className={styles.btnPrimary}>{primaryCTA.text} →</a>
            {secondaryCTA && (
              <a href={secondaryCTA.href} className={styles.btnSecondary}>{secondaryCTA.text}</a>
            )}
          </div>

          <div className={`${styles.socialProof} fade-up`}>
            <div className={styles.avatars}>
              {avatars.map((a, i) => (
                <div key={i} className={styles.avatar}>{a.initials}</div>
              ))}
            </div>
            <p className={styles.proofText} dangerouslySetInnerHTML={{ __html: proofText }} />
          </div>
        </div>

        <div className={`${styles.visual} fade-up`}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.terminalTitle}>terminal</span>
            </div>
            <div className={styles.terminalBody}>
              {terminalLines.map((line, i) => (
                <div key={i} className={styles.terminalLine}>
                  {line.prompt && <span className={styles.terminalPrompt}>{line.prompt} $</span>}
                  {line.cmd && <span className={styles.terminalCmd}>{line.cmd}</span>}
                  {line.output && <span className={styles.terminalOutput}>{line.output}</span>}
                  {line.comment && <span className={styles.terminalComment}>{line.comment}</span>}
                </div>
              ))}
            </div>
          </div>

          {metrics.map((m, i) => (
            <div key={i} className={styles.metricCard} aria-label={`${m.label}: ${m.value}`}>
              <div className={styles.metricValue}>
                {m.trend && <span className={styles.metricUp}>{m.trend}</span>} {m.value}
              </div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
