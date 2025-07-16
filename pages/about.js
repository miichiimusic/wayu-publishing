import {
  Circle,
  Lightbulb,
  Heart,
  Zap,
  Award,
  Users,
} from 'lucide-react'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <main>
      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.prefix}>
            <span />
            Our Story
          </div>
          <h1 className={styles.storyTitle}>FROM ARTISTS, FOR ARTISTS</h1>
          <div className={styles.storyContent}>
            <p>
              WAYU Publishing was born out of a shared vision between Julian Castaneda,
              founder of WAYU Records, and Leonardo Ortegon (MIICHII), a longtime
              producer, DJ, and engineer. They saw artists releasing incredible music
              without understanding how to collect the royalties they deserved.
            </p>
            <p>
              After years building WAYU Records into a respected label,
              Julian recognized many creators were missing out on publishing revenue.
              Leonardo’s experience in music production and business made him keenly
              aware of how confusing rights administration could be for independent artists.
            </p>
            <p>
              Together they created WAYU Publishing to bridge that gap—a platform by
              artists, for artists, delivering transparency, support, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.prefix}>
            <span />
            Artists First
          </div>
          <h2 className={styles.valuesTitle}>OUR VALUES</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <Heart size={24} className={styles.icon} />
              <h3 className={styles.valueTitle}>Transparency</h3>
              <p className={styles.valueText}>
                Clear splits. Honest reporting. No surprises. We believe trust is built through clarity, and that's non-negotiable.
              </p>
            </div>
            <div className={styles.valueItem}>
              <Zap size={24} className={styles.icon} />
              <h3 className={styles.valueTitle}>Fairness</h3>
              <p className={styles.valueText}>
                We ensure artists keep what they've earned — no hidden cuts, just fair deals and respectful publishing support.
              </p>
            </div>
            <div className={styles.valueItem}>
              <Award size={24} className={styles.icon} />
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueText}>
                We're a growing network of creatives who support each other and believe in shared success, not competition.
              </p>
            </div>
            <div className={styles.valueItem}>
              <Users size={24} className={styles.icon} />
              <h3 className={styles.valueTitle}>Education</h3>
              <p className={styles.valueText}>
                We empower artists with the tools and knowledge to understand how their music earns and how to protect it.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Mission & Vision */}
      <section className={styles.mvSection}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <div className={styles.mvItem}>
              <Circle size={24} className={styles.icon} />
              <div className={styles.mvPrefix}>Our Mission</div>
              <h2 className={styles.mvTitle}>Empowering Artists Through Transparency</h2>
              <p className={styles.mvText}>
                To democratize music publishing by providing fair, transparent services
                that help artists understand and maximize their revenue while growing within a community.
              </p>
            </div>

            <div className={styles.mvItem}>
              <Lightbulb size={24} className={styles.icon} />
              <div className={styles.mvPrefix}>Our Vision</div>
              <h2 className={styles.mvTitle}>A World Where Artists Thrive</h2>
              <p className={styles.mvText}>
                We envision an industry where every creator has access to fair publishing services,
                understands their rights, and can focus on making amazing music.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}