import { Mail } from 'lucide-react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* Text area */}
        <div className={styles.textColumn}>
          <div className={styles.prefix}>
            <span />
            Get In Touch
          </div>

          <h1 className={styles.title}>
            LET'S START A CONVERSATION
          </h1>

          <h2 className={styles.subtitle}>
            ABOUT YOUR MUSIC
          </h2>

          <p className={styles.description}>
            Whether you're an independent artist looking to understand your publishing
            rights or ready to join our community, we're here to help you navigate your
            music career.
          </p>

          <div className={styles.contactInfo}>
            <Mail size={20} className={styles.mailIcon} />
            <a href="mailto:contact@wayupublishing.com" className={styles.email}>
              contact@wayupublishing.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}