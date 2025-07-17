// pages/contact.js
import { useState } from 'react'
import Head from 'next/head'
import { Mail } from 'lucide-react'
import styles from '../styles/Contact.module.css'

const FAQ_ITEMS = [
  {
    question: 'What makes WAYU Publishing different from other publishers?',
    answer:
      "We're artists ourselves — so we built WAYU Publishing to reflect the kind of support we always looked for: transparent, fair, and rooted in community."
  },
  {
    question: "I've signed tracks with labels — can I still work with WAYU Publishing?",
    answer:
      "Yes! Labels control recordings, we handle publishing. If you're a writer, we can help collect on your behalf."
  },
  {
    question:
      'If I already distribute my music, am I getting paid for publishing royalties?',
    answer:
      'Not necessarily. Most distribution platforms only pay you for the master recording side of your music. That means you may still be missing out on publishing royalties—like mechanicals and performance royalties—unless you’ve taken steps to collect them through a publisher or administrator.'
  },
  {
    question: 'What kind of royalties do you help with?',
    answer:
      'We handle the full spectrum of publishing royalties. That includes mechanical royalties from streams, downloads, and physical sales; performance royalties from radio, TV, live shows, and public plays; and sync royalties when your music is licensed for film, TV, ads, or games. We also ensure your works are properly registered worldwide so no royalty goes unclaimed.'
  },
  {
    question: 'What information do I need to provide?',
    answer:
      'To start the process, we need basic information about you and your music. After the initial signup, we’ll request more specific details about your compositions, releases, and where your music is distributed.'
  },
  {
    question: 'How often will I get paid?',
    answer:
      'WAYU issues payments quarterly, along with detailed reports showing where your royalties came from. We believe in transparency and ensuring you understand your revenue streams.'
  }
]

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <>
      <Head>
        <title>Contact • WAYU Publishing</title>
        <meta
          name="description"
          content="Get in touch with WAYU Publishing and find answers in our FAQ."
        />
      </Head>

      <section className={styles.introSection}>
        <h1>GET IN TOUCH</h1>
        <p>
          Whether you're an independent artist looking to understand your publishing
          rights or ready to join our community, we're here to help you navigate your
          music career.
        </p>
        <div className={styles.contactInfo}>
          <Mail size={20} className={styles.mailIcon} />
          <a href="mailto:contact@wayupublishing.com">
            contact@wayupublishing.com
          </a>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>

        {FAQ_ITEMS.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {item.question}
            </button>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}