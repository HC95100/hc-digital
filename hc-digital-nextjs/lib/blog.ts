// Types pour les articles de blog
export interface BlogPost {
    title: string
    slug: string
    excerpt: string
    content: string // HTML
    category: BlogCategory
    keywords: string[]
    publishedAt: string // ISO 8601
    updatedAt: string   // ISO 8601
    author: string
    coverImage?: string
    readingTime?: number // en minutes
}

export type BlogCategory =
    | 'guide'
    | 'conseil'
    | 'comparatif'
    | 'actualite'
    | 'seo'

export const categoryLabels: Record<BlogCategory, string> = {
    guide: 'Guide',
    conseil: 'Conseil',
    comparatif: 'Comparatif',
    actualite: 'Actualité',
    seo: 'SEO',
}

import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Calculer le temps de lecture (environ 200 mots/min)
function calculateReadingTime(html: string): number {
    const text = html.replace(/<[^>]*>/g, '')
    const words = text.split(/\s+/).length
    return Math.max(1, Math.ceil(words / 200))
}

// Récupérer tous les articles triés par date (plus récent d'abord)
export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) return []

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'))

    const posts: BlogPost[] = files
        .map((file) => {
            try {
                const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
                const post: BlogPost = JSON.parse(raw)
                post.readingTime = calculateReadingTime(post.content)
                return post
            } catch {
                return null
            }
        })
        .filter((p): p is BlogPost => p !== null)

    // Trier par date de publication (plus récent d'abord)
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return posts
}

// Récupérer un article par son slug
export function getPostBySlug(slug: string): BlogPost | null {
    const posts = getAllPosts()
    return posts.find((p) => p.slug === slug) || null
}

// Récupérer les articles par catégorie
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
    return getAllPosts().filter((p) => p.category === category)
}

// Récupérer tous les slugs (pour generateStaticParams)
export function getAllPostSlugs(): string[] {
    return getAllPosts().map((p) => p.slug)
}
