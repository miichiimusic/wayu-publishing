import styles from '../styles/Home.module.css';
import whyStyles from '../styles/WhyChoose.module.css';

export default function Home() {
  return (
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

    
  );
}