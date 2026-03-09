import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { generateBlogSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'
import { getAllPosts, categoryLabels, BlogCategory } from '@/lib/blog'
import { Clock, ArrowRight, Tag } from 'lucide-react'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'Blog — Conseils Création de Site Internet & SEO',
    'Guides, conseils et astuces pour créer votre site internet, optimiser votre SEO et développer votre activité en ligne. Par HC Digital.',
    '/blog'
)

// Couleurs par catégorie
const categoryColors: Record<BlogCategory, string> = {
    guide: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    conseil: 'bg-green-500/10 text-green-400 border-green-500/20',
    comparatif: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    actualite: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    seo: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <>
            {/* Schéma Blog JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBlogSchema()),
                }}
            />

            {/* Schéma BreadcrumbList JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { name: 'Accueil', url: siteConfig.url },
                        { name: 'Blog', url: `${siteConfig.url}/blog` },
                    ])),
                }}
            />

            {/* Hero Blog */}
            <section className="pt-32 pb-16 bg-background-dark relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Ressources & Guides
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Conseils pratiques pour créer votre site internet, améliorer votre SEO et développer votre activité en ligne.
                    </p>
                </div>
            </section>

            {/* Liste des articles */}
            <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length === 0 ? (
                        <p className="text-center text-slate-500 dark:text-slate-400 text-lg">
                            Aucun article pour le moment. Revenez bientôt !
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <Link href={`/blog/${post.slug}`} className="block p-6 sm:p-8">
                                        {/* Catégorie */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category]}`}>
                                                <Tag size={12} />
                                                {categoryLabels[post.category]}
                                            </span>
                                        </div>

                                        {/* Titre */}
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                                            {post.title}
                                        </h2>

                                        {/* Extrait */}
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {post.readingTime} min de lecture
                                                </span>
                                                <span>
                                                    {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </span>
                                            </div>
                                            <ArrowRight
                                                size={16}
                                                className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                                            />
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Prêt à lancer votre projet ?
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Nos guides vous ont convaincu ? Passez à l&apos;action avec HC Digital.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition"
                    >
                        Demander un devis gratuit
                    </Link>
                </div>
            </section>
        </>
    )
}
