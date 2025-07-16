// lib/articles.js

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// unified + parsers + plugins
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkFootnotes from 'remark-footnotes'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const articlesDir = path.join(process.cwd(), 'articles')

export function getAllArticlesMeta() {
  const files = fs.readdirSync(articlesDir)
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(articlesDir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data }
  })
}

export async function getArticleBySlug(slug) {
  // read raw markdown
  const fullPath = path.join(articlesDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // build unified pipeline
  const processed = await unified()
    .use(remarkParse)                           // parse markdown
    .use(remarkGfm)                             // tables, strikethrough, task lists
    .use(remarkSlug)                            // add ids to headings
    .use(remarkAutolinkHeadings, {               // autolink those headings
      behavior: 'wrap'
    })
    .use(remarkFootnotes, {                      // support footnotes
      inlineNotes: true
    })
    .use(remarkRehype, {                         // switch to rehype (HAST)
      allowDangerousHtml: true
    })
    .use(rehypeRaw)                              // parse raw HTML in markdown
    .use(rehypeHighlight)                        // syntax highlight <code> blocks
    .use(rehypeStringify)                        // stringify HTML
    .process(content)

  const contentHtml = processed.toString()

  return {
    slug,
    contentHtml,
    ...data
  }
}