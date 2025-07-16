// components/Nav.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/router'
import styles from './Nav.module.css'

export default function Nav() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [visible, setVisible] = useState(!isHome)

  useEffect(() => {
    if (!isHome) return          // if not home, leave visible=true and skip listener

    setVisible(false)             // on home, start hidden
    const onScroll = () => {
      setVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
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
          <Menu size={24} className={styles.hamburger} />
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <Link href="learn" className={styles.cta}>
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  )
}