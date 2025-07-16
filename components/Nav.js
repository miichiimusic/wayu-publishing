// components/Nav.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/router'
import styles from './Nav.module.css'

export default function Nav() {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  // start hidden on home until the hero logo scrolls up, visible elsewhere
  const [visible, setVisible] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      // always show on non-home pages
      setVisible(true)
      return
    }
    // on home, hide initially then show once logo hits top
    setVisible(false)
    const onScroll = () => {
      const logo = document.getElementById('heroLogo')
      if (!logo) return
      const top = logo.getBoundingClientRect().top
      setVisible(top <= 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // mobile menu open/close
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
    { href: '/learn', label: 'Learn More' },
  ]

  return (
    <>
      <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}>
        <div className={styles.inner}>
          <Link href="/">
            <img
              src="/images/logo-dark.svg"
              alt="WAYU Publishing"
              className={styles.logo}
            />
          </Link>

          <div className={styles.menu}>
            <button
              className={styles.hamburger}
              aria-label="Toggle menu"
              onClick={() => setOpen(o => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* desktop links */}
            <ul className={styles.links}>
              {items.slice(0, 4).map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>

            <Link href="/learn" className={styles.cta}>
              Learn More
            </Link>
          </div>
        </div>
      </nav>

      {/* full‐screen mobile menu overlay */}
      <div className={`${styles.mobileOverlay} ${open ? styles.open : ''}`}>
        <ul className={styles.mobileLinks}>
          {items.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={handleClose}>
                {label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}