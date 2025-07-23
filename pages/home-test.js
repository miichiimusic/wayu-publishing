// pages/home-test.js
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/HomeTest.module.css'

export default function HomeTest() {
  return (
    <>
      <Head>
        <title>Home Test • WAYU Publishing</title>
        <meta name="description" content="Experimenting with a new home layout" />
      </Head>
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1>🚧 Test Layout</h1>
            <p>Feel free to play with this without touching your real homepage.</p>
            <Link href="/" className={styles.backLink}>← Back to real home</Link>
          </div>
        </section>

<section className={styles.cardGridSection}>
  <div className={styles.glassCard}>
    <div className={styles.cardImage}>
      <img src="/images/articles/test.jpg" alt="Cover" />
    </div>
    <div className={styles.cardOverlay}>
      <h3>Accelerating Results</h3>
      <p>
        Designed for independent artists and storytellers ready to build lasting impact.
      </p>
    </div>
  </div>

  <div className={styles.glassCard}>
    <div className={styles.cardImage}>
      <img src="/images/articles/test.jpg" alt="Cover" />
    </div>
    <div className={styles.cardOverlay}>
      <h3>Creative Empowerment</h3>
      <p>
        Designed for independent artists and storytellers ready to build lasting impact.
      </p>
    </div>
  </div>

  <div className={styles.glassCard}>
    <div className={styles.cardImage}>
      <img src="/images/articles/your-second-image.jpg" alt="Cover" />
    </div>
    <div className={styles.cardOverlay}>
      <h3>Creative Empowerment</h3>
      <p>
        Designed for independent artists and storytellers ready to build lasting impact.
      </p>
    </div>
  </div>

  <div className={styles.glassCard}>
    <div className={styles.cardImage}>
      <img src="/images/articles/your-second-image.jpg" alt="Cover" />
    </div>
    <div className={styles.cardOverlay}>
      <h3>Creative Empowerment</h3>
      <p>
        Designed for independent artists and storytellers ready to build lasting impact.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  )
}