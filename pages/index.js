// pages/index.js
import styles from '../styles/Home.module.css'
import whyStyles from '../styles/WhyChoose.module.css'
import { Globe, TrendingUp, Users, Zap, Headphones, Volume2, Video, Play, Disc, ChevronDown } from 'lucide-react'
import didStyles from '../styles/DidYouKnow.module.css'
import compStyles from '../styles/CompositionRevenue.module.css'
import soundStyles from '../styles/SoundRecordingRevenue.module.css'
import { useState, useMemo } from 'react'
import calcStyles from '../styles/Calculator.module.css'

export default function Home() {

   // you can tweak this per-stream rate
  const RATE_PER_STREAM = 0.003  // e.g. $0.003 per play

  const [totalStreams, setTotalStreams] = useState('')
  const [monthlyStreams, setMonthlyStreams] = useState('')

  // compute earnings whenever inputs change
  const totalEarnings = useMemo(
    () => (parseFloat(totalStreams) || 0) * RATE_PER_STREAM,
    [totalStreams]
  )
  const monthlyEarnings = useMemo(
    () => (parseFloat(monthlyStreams) || 0) * RATE_PER_STREAM,
    [monthlyStreams]
  )

  // helper to format as currency
  const fmt = n =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(n)

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
        <h2 className={whyStyles.sectionTitle}>Why Choose Us</h2>
        <p className={whyStyles.sectionSubtitle}>
        We help artists understand their rights, collect what they’ve earned, and flourish within a supportive creative community. 
        </p>

        <div className={whyStyles.whyGrid}>
          <div className={whyStyles.feature}>
            <Globe size={48} className={whyStyles.icon} />
            <h3 className={whyStyles.featureTitle}>Every Stream Counts</h3>
            <p className={whyStyles.featureText}>
              We collect publishing royalties across a wide range of platforms and regions—and we’re continuously expanding our global reach to help you earn more from every play.
            </p>
          </div>

          <div className={whyStyles.feature}>
            <TrendingUp size={48} className={whyStyles.icon} />
            <h3 className={whyStyles.featureTitle}>Rights Management</h3>
            <p className={whyStyles.featureText}>
              Our team ensures your compositions are properly registered and protected worldwide.
            </p>
          </div>

          <div className={whyStyles.feature}>
            <Users size={48} className={whyStyles.icon} />
            <h3 className={whyStyles.featureTitle}>Sync Opportunities</h3>
            <p className={whyStyles.featureText}>
              We pitch music for film, TV, ads, and visual media—matching the right sound to the right story. Sync placements offer new exposure and additional income for your music.
            </p>
          </div>

          <div className={whyStyles.feature}>
           <Zap size={48} className={whyStyles.icon} />
            <h3 className={whyStyles.featureTitle}>Education</h3>
            <p className={whyStyles.featureText}>
              Access our comprehensive library of articles, guides, and tools to understand your music rights and revenue streams.
            </p>
          </div>
        </div>
      </section>

      {/* DID YOU KNOW? Section */}
      <section className={didStyles.didSection}>
        <h2 className={didStyles.didTitle}>DID YOU KNOW?</h2>
        <p className={didStyles.didText}>
          Every song you create has two distinct revenue streams that can earn you money simultaneously.
          The Song (Composition Revenue) and the Master Recording (Sound Recording Revenue).
        </p>
        <ChevronDown size={32} className={didStyles.downArrow} />
      </section>

      {/* Composition Revenue Section */}
      <section className={compStyles.compSection}>
        <span className={compStyles.pill}>Music Publishers</span>
        <h2 className={compStyles.compTitle}>Composition Revenue</h2>
        <p className={compStyles.compSubtitle}>
          Revenue from your song composition – the melody, lyrics, and chord progression you created.
        </p>

        <div className={compStyles.compGrid}>
          <div className={compStyles.compFeature}>
            <Headphones size={40} className={compStyles.icon} />
            <h3 className={compStyles.featureTitle}>Mechanical Royalties</h3>
            <p className={compStyles.featureText}>
              Earn money every time your song is reproduced, streamed, or downloaded on platforms like Spotify, Apple Music, and digital stores.
            </p>
          </div>

          <div className={compStyles.compFeature}>
            <Volume2 size={40} className={compStyles.icon} />
            <h3 className={compStyles.featureTitle}>Public Performance Royalties</h3>
            <p className={compStyles.featureText}>
              Get paid when your music is played publicly on radio, in venues, restaurants, or any public space.
            </p>
          </div>

          <div className={compStyles.compFeature}>
            <Video size={40} className={compStyles.icon} />
            <h3 className={compStyles.featureTitle}>Sync Licensing</h3>
            <p className={compStyles.featureText}>
              License your music for use in movies, TV shows, commercials, video games, and online content for substantial fees.
            </p>
          </div>
        </div>
      </section>

      {/* Sound Recording Revenue Section */}
      <section className={soundStyles.soundSection}>
  <span className={soundStyles.pill}>Record Labels</span>
  <h2 className={soundStyles.soundTitle}>Sound Recording Revenue</h2>
  <p className={soundStyles.soundSubtitle}>
    Revenue from your specific recording – the actual audio file and performance you created.
  </p>

  <div className={soundStyles.soundGrid}>
    <div className={soundStyles.soundFeature}>
      <Play size={40} className={soundStyles.icon} />
      <h3 className={soundStyles.featureTitle}>
        Sound Recording Streaming
      </h3>
      <p className={soundStyles.featureText}>
        Earn revenue from your master recordings when they’re streamed on digital platforms and music services.
      </p>
    </div>

    <div className={soundStyles.soundFeature}>
      <Disc size={40} className={soundStyles.icon} />
      <h3 className={soundStyles.featureTitle}>
        Physical Sales
      </h3>
      <p className={soundStyles.featureText}>
        Generate income from physical copies of your music including vinyl records, CDs, and merchandise sales.
      </p>
    </div>

    <div className={soundStyles.soundFeature}>
      <Video size={40} className={soundStyles.icon} />
      <h3 className={soundStyles.featureTitle}>
        Sync Licensing
      </h3>
      <p className={soundStyles.featureText}>
        License your specific recording for use in visual media. Get paid when your actual recorded version is used in movies, TV shows, and commercials.
      </p>
    </div>
  </div>
</section>

      {/* Calculator Section */}
<section className={calcStyles.calcSection}>
  <div className={calcStyles.calcCard}>
    {/* Title is now inside the card */}
    <h2 className={calcStyles.calcTitle}>
      Mechanical Royalty Calculator
    </h2>

    <div className={calcStyles.calcForm}>
      <div className={calcStyles.calcRow}>
        <input
          type="number"
          placeholder="Current total streams"
          value={totalStreams}
          onChange={e => setTotalStreams(e.target.value)}
        />
        <span className="result">{fmt(totalEarnings)}</span>
      </div>

      <div className={calcStyles.calcRow}>
        <input
          type="number"
          placeholder="Monthly streams"
          value={monthlyStreams}
          onChange={e => setMonthlyStreams(e.target.value)}
        />
        <span className="result">{fmt(monthlyEarnings)}/mo</span>
      </div>
    </div>
    <p className={calcStyles.calcDisclaimerText}>
      These calculations show potential earnings from streaming platforms.
      Actual payouts vary by platform, country, and your distribution deal.
      Publishing and performance royalties are additional income streams.
    </p>
  </div>
</section>
    </>
  )
}