import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/metadata'
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getPostBySlug, getAllPostSlugs, categoryLabels } from '@/lib/blog'
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react'

// Générer les pages statiques pour tous les slugs
export async function generateStaticParams() {
    const slugs = getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
}

// Métadonnées dynamiques par article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return {}

    return generatePageMetadata(
        post.title,
        post.excerpt,
        `/blog/${post.slug}`
    )
}

// Page d'article de blog
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    // Générer la table des matières à partir des h2
    const headings = post.content.match(/<h2>(.*?)<\/h2>/g)?.map((h) => {
        const text = h.replace(/<\/?h2>/g, '')
        const id = text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        return { text, id }
    }) || []

    // Injecter les IDs dans le contenu HTML pour la navigation
    let contentWithIds = post.content
    headings.forEach(({ text, id }) => {
        contentWithIds = contentWithIds.replace(
            `<h2>${text}</h2>`,
            `<h2 id="${id}">${text}</h2>`
        )
    })

    return (
        <>
            {/* Schéma BlogPosting JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBlogPostingSchema({
                        title: post.title,
                        description: post.excerpt,
                        slug: post.slug,
                        publishedAt: post.publishedAt,
                        updatedAt: post.updatedAt,
                        author: post.author,
                        coverImage: post.coverImage,
                        category: post.category,
                    })),
                }}
            />

            {/* Schéma BreadcrumbList JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { name: 'Accueil', url: siteConfig.url },
                        { name: 'Blog', url: `${siteConfig.url}/blog` },
                        { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
                    ])),
                }}
            />

            {/* Header article */}
            <section className="pt-32 pb-12 bg-background-dark relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Retour au blog */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Retour au blog
                    </Link>

                    {/* Catégorie */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                            <Tag size={12} />
                            {categoryLabels[post.category]}
                        </span>
                    </div>

                    {/* Titre */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Méta informations */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <User size={14} />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {post.readingTime} min de lecture
                        </span>
                    </div>
                </div>
            </section>

            {/* Contenu de l'article */}
            <section className="py-12 sm:py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contenu principal */}
                        <article className="flex-1 min-w-0">
                            {/* Table des matières (sur mobile, toujours visible avant l'article) */}
                            {headings.length > 2 && (
                                <nav className="mb-10 p-6 bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-700 lg:hidden">
                                    <h2 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                                        Sommaire
                                    </h2>
                                    <ul className="space-y-2">
                                        {headings.map(({ text, id }) => (
                                            <li key={id}>
                                                <a
                                                    href={`#${id}`}
                                                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition leading-tight block"
                                                >
                                                    {text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}

                            {/* Corps de l'article */}
                            <div
                                className="prose prose-slate dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-white prose-table:text-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                            />

                            {/* Mots-clés */}
                            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex flex-wrap gap-2">
                                    {post.keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Article */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Besoin d&apos;un site professionnel ?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        HC Digital crée votre site vitrine clé en main, optimisé SEO, à partir de 500€.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition"
                        >
                            Demander un devis gratuit
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-slate-300 font-bold rounded-xl border border-white/10 hover:bg-white/10 transition"
                        >
                            Lire d&apos;autres articles
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
