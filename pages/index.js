// pages/index.js
import styles from '../styles/Home.module.css'
import whyStyles from '../styles/WhyChoose.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img
          src="/images/logo.svg"
          alt="WAYU Publishing logo"
          className={styles.logo}
        />

        <div className={styles.bottomContainer}>
          <p className={styles.bottomText}>
            MUSIC PUBLISHING{'\n'}
            BUILT ON VALUES
          </p>
          <button className={styles.learnMoreButton}>
            LEARN MORE
          </button>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className={whyStyles.whySection}>
        {/* Left: heading, paragraph, button */}
        <div className={whyStyles.left}>
          <h2 className={whyStyles.title}>DID YOU KNOW?</h2>
          <p className={whyStyles.text}>
            Every song you create has two distinct revenue streams that can earn you money simultaneously. The Song (Composition Revenue) and the Master Recording (Sound Recording Revenue).
          </p>
        </div>

        {/* Right: illustrative image */}
        <div className={whyStyles.right}>
          <img
            src="/images/why-choose-us.svg"
            alt="Diagram showing where Songtrust plays in publishing versus recording"
          />
        </div>
      </section>
    </>
  )
}