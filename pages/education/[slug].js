// pages/education/[slug].js
import Head from 'next/head'
import { getAllArticlesMeta, getArticleBySlug } from '../../lib/articles'
import styles from '../../styles/EducationArticle.module.css'
import { Calendar } from 'lucide-react'

export async function getStaticPaths() {
  const articles = getAllArticlesMeta()
  const paths = articles.map(a => ({ params: { slug: a.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug)
  return { props: { article } }
}

export default function ArticlePage({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} • WAYU Publishing</title>
        <meta name="description" content={article.description} />
      </Head>

      <main className={styles.articleContainer}>
        {/* Title */}
        <h1 className={styles.articleTitle}>{article.title}</h1>

        {/* Summary (frontmatter description) */}
        <p className={styles.articleDescription}>
          {article.description}
        </p>

      

        <div className={styles.articleMeta}>
   <span className={styles.metaLabel}>Last Updated</span>
   <Calendar size={16} className={styles.metaIcon} />
   <span className={styles.metaDate}>
     {new Date(article.date).toLocaleDateString('en-US', {
       year: 'numeric',
       month: 'long',
       day: 'numeric',
     })}
   </span>

   {/* Tags as non-italic spans */}
   <div className={styles.tagList}>
     {article.tags.map(tag => (
       <span key={tag} className={styles.metaTag}>
         {tag}
       </span>
     ))}
   </div>
 </div>

        {/* Header image */}
        <img
          src={article.image}
          alt={article.title}
          className={styles.articleImage}
        />

        {/* Markdown content */}
        <article
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </main>
    </>
  )
}