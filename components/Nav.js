// components/Nav.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import styles from './Nav.module.css'

export default function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}>
      <div className={styles.inner}>
        <Link href="#hero">
          <img
            src="/images/logo-dark.svg"
            alt="WAYU Publishing"
            className={styles.logo}
          />
        </Link>

        <div className={styles.menu}>
          {/* Hamburger: only shown on mobile */}
          <Menu size={24} className={styles.hamburger} />

          {/* Desktop links (hidden on mobile) */}
          <ul className={styles.links}>
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#education">Education</Link></li>
            <li><Link href="#join">Join</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Always show the CTA */}
          <Link href="#learn" className={styles.cta}>
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  )
}