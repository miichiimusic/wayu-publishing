// pages/education/index.js
import { useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Search, Calendar } from 'lucide-react'
import { getAllArticlesMeta } from '../../lib/articles'
import styles from '../../styles/EducationHome.module.css'

export async function getStaticProps() {
  const articles = getAllArticlesMeta()
  const tags = Array.from(new Set(articles.flatMap(a => a.tags)))
  // newest first
  const [featured, ...rest] = articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  return { props: { featured, articles: rest, tags } }
}

export default function Education({ featured, articles, tags }) {
  const [search, setSearch] = useState('')
  const [filterTag, setFilterTag] = useState('All')

  const dropdownResults = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return []
    return articles
      .filter(a =>
        a.title.toLowerCase().includes(term) ||
        a.description.toLowerCase().includes(term)
      )
      .slice(0, 5)
  }, [search, articles])

  const gridArticles = useMemo(
    () =>
      articles.filter(
        a => filterTag === 'All' || a.tags.includes(filterTag)
      ),
    [articles, filterTag]
  )

  return (
    <>
      <Head>
        <title>Education • WAYU Publishing</title>
        <meta
          name="description"
          content="Deep dive into music publishing tutorials, guides, and more."
        />
      </Head>

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        {/* left column */}
        <div className={styles.heroLeft}>
          <h1>Learn Music Publishing</h1>
          <p>Dive into articles, tutorials, and resources to master your rights.</p>
        </div>

        {/* right column: featured */}
        <Link href={`/education/${featured.slug}`} className={styles.heroRight}>
          <img
            src={featured.image}
            alt={featured.title}
            className={styles.featuredImage}
          />
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Last Updated</span>
            <Calendar size={16} className={styles.metaIcon} />
            <span className={styles.metaDate}>
              {new Date(featured.date).toLocaleDateString('en-US',{
                 year:'numeric', month:'long', day:'numeric'
              })}
            </span>
          </div>
        </Link>
      </section>

      <main className={styles.container}>
        {/* Grid Header */}
        <div className={styles.gridHeader}>
          <div className={styles.gridHeaderTop}>
            <h2 className={styles.gridTitle}>Browse All</h2>
            <div className={styles.searchContainerSmall}>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInputSmall}
              />
              <Search className={styles.searchIconSmall} />
              {dropdownResults.length > 0 && (
                <ul className={styles.searchDropdown}>
                  {dropdownResults.map(a => (
                    <li key={a.slug} className={styles.dropdownItem}>
                      <Link href={`/education/${a.slug}`} className={styles.dropdownLink}>
                        <img
                          src={a.image}
                          alt={a.title}
                          className={styles.dropdownImage}
                        />
                        <span className={styles.dropdownTitle}>{a.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.tagFiltersSmall}>
            <button
              className={filterTag === 'All' ? styles.activeTag : styles.tag}
              onClick={() => setFilterTag('All')}
            >
              All
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                className={filterTag === tag ? styles.activeTag : styles.tag}
                onClick={() => setFilterTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <section className={styles.grid}>
          {gridArticles.map(a => (
            <Link href={`/education/${a.slug}`} key={a.slug} className={styles.card}>
              <img src={a.image} alt={a.title} className={styles.cardImage} />
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <div className={styles.meta}>
                <span className={styles.metaLabel}>Last Updated</span>
                <Calendar size={16} className={styles.metaIcon} />
                <span className={styles.metaDate}>
                  {new Date(a.date).toLocaleDateString('en-US',{
                    year:'numeric',month:'long',day:'numeric'
                  })}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}