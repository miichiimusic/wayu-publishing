// pages/_app.js
import Head from 'next/head'
import '../styles/globals.css'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Crucial for mobile layouts */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Load Inter (400 & 700); swap ensures text remains visible during load */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </Head>
      {/* sticky nav */}
      <Nav />
      
     {/* SVG gradient definition for icon strokes/fills */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#639affff" />
            <stop offset="100%" stopColor="#9f6be3ff" />
          </linearGradient>
        </defs>
      </svg>

      <Component {...pageProps} />
    </>
  )
}