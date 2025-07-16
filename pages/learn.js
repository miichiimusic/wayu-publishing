// pages/learn.js
import { useState } from 'react'
import styles from '../styles/LearnMore.module.css'

export default function Learn() {
  const [form, setForm] = useState({
    name: '',
    artist: '',
    _replyto: '',
    spotify: '',
  })
  const [status, setStatus] = useState(null) // 'SUCCESS' | 'ERROR' | null

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formElement = e.target
    const formData = new FormData(formElement)

    try {
      const res = await fetch(formElement.action, {
        method: formElement.method,
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('SUCCESS')
        setForm({ name: '', artist: '', _replyto: '', spotify: '' })
      } else {
        setStatus('ERROR')
      }
    } catch (err) {
      setStatus('ERROR')
    }
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
          <h1 className={styles.title}>SHAPE YOUR MUSIC FUTURE</h1>
          <p className={styles.subtitle}>
            We partner with artists ready to take control of their publishing,
            protect their rights, and grow with purpose.
          </p>
          <p className={styles.subtitle}>
            Access our discovery form to learn how we can support your journey.
          </p>
        </div>

        {/* Right column: form */}
        <div className={styles.formColumn}>
          <h2 className={styles.formTitle}>Tell Us About Yourself</h2>

          {status === 'SUCCESS' ? (
            <p className={styles.successMessage}>
              Thanks for reaching out! We’ll be in touch shortly.
            </p>
          ) : (
            <form
              className={styles.form}
              action="https://formspree.io/f/mjkovjzn"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Artist Name
                <input
                  type="text"
                  name="artist"
                  value={form.artist}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="_replyto"
                  value={form._replyto}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Artist Spotify Link (Optional)
                <input
                  type="url"
                  name="spotify"
                  placeholder="https://open.spotify.com/artist/..."
                  value={form.spotify}
                  onChange={handleChange}
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>

              {status === 'ERROR' && (
                <p className={styles.errorMessage}>
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  )
}