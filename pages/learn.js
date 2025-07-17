// pages/learn.js
import { useState } from 'react'
import styles from '../styles/LearnMore.module.css'

export default function Learn() {
  const [form, setForm] = useState({
    name: '',
    artist: '',
    email: '',
    spotify: '',
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* Left column */}
        <div className={styles.textColumn}>
          <div className={styles.prefix}>
            <span />
            Your Journey Starts Here
          </div>
          <h1 className={styles.title}>
            SHAPE YOUR MUSIC FUTURE
          </h1>
          <p className={styles.subtitle}>
            We partner with artists ready to take control of their publishing,
            protect their rights, and grow with purpose.
          </p>
        </div>

        {/* Right column: form */}
        <div className={styles.formColumn}>
          <h2 className={styles.formTitle}>
            Fill the form below to get started, and we will reach out to you within 24 hours.
          </h2>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mjkovjzn"
            method="POST"
            className={styles.form}
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              id="artist"
              type="text"
              name="artist"
              placeholder="Artist Name"
              value={form.artist}
              onChange={handleChange}
              required
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              id="spotify"
              type="url"
              name="spotify"
              placeholder="Artist Spotify Link (Optional)"
              value={form.spotify}
              onChange={handleChange}
            />

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}