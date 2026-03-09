import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/metadata'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import { CheckCircle, Info } from 'lucide-react'
import Link from 'next/link'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'Création de Site Internet — Nos Offres & Tarifs',
    'Agence web. 3 formules adaptées à votre budget : Pack Visibilité (500€), Pack Performance (700€), Pack Expert (sur devis). Hébergement gratuit, vous êtes propriétaire.',
    '/services'
)

// Page Services
export default function ServicesPage() {
    return (
        <>
            {/* Schéma Service JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateServiceSchema()),
                }}
            />

            {/* Schéma BreadcrumbList JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { name: 'Accueil', url: siteConfig.url },
                        { name: 'Services', url: `${siteConfig.url}/services` },
                    ])),
                }}
            />

            {/* Hero services */}
            <section className="pt-32 pb-16 bg-background-dark relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Nos Offres de Création de Sites Web
                    </h1>
                    <p className="text-xl text-slate-300 mb-8">
                        Des solutions claires, à prix fixe, avec transfert total de propriété.
                    </p>
                </div>
            </section>



            {/* Section tarifs */}
            <Pricing />

            {/* Ce qui est inclus */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                        Ce qui est inclus dans tous nos packs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Design 100% personnalisé à votre image',
                            'Site responsive (mobile, tablette, desktop)',
                            'Hébergement Vercel GRATUIT (plan Hobby)',
                            'Optimisation SEO complète (meta, Schema.org)',
                            'Certificat SSL/HTTPS automatique',
                            'Transfert sur VOTRE compte Vercel',
                            'Configuration Google Search Console',
                            'Emails de guidance étape par étape',
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <span className="text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Ce qui est à votre charge */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
                        Ce qui est à votre charge
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { item: 'Nom de domaine', detail: '~10€/an via Vercel' },
                            { item: 'Créer un compte Vercel', detail: '2 min, gratuit' },
                            { item: 'Accepter le transfert du projet', detail: '1 clic' },
                            { item: 'Créer Google Search Console', detail: '3 min' },
                        ].map((entry, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <span className="text-slate-700 dark:text-slate-300">{entry.item}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">{entry.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info importante */}
            <section className="py-8 bg-primary/10 border-y border-primary/20">
                <div className="max-w-4xl mx-auto px-4 flex items-start gap-4">
                    <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="text-slate-700 dark:text-slate-300 text-sm">
                        <strong className="text-primary">Important :</strong> L'hébergement Vercel est <strong>GRATUIT</strong>.
                        Seul le nom de domaine est payant (<strong>~10€/an</strong>) et vous l'achetez sur votre propre compte.
                        Vous êtes 100% propriétaire de votre site.
                    </div>
                </div>
            </section>

            {/* Garantie */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Garantie 7 jours post-livraison
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                            <h3 className="font-bold text-green-400 mb-4">✓ Inclus dans la garantie</h3>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li>• Corrections de bugs mineurs</li>
                                <li>• Problèmes d'affichage mobile</li>
                                <li>• Fautes d'orthographe</li>
                            </ul>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                            <h3 className="font-bold text-red-400 mb-4">✗ Hors garantie (sur devis)</h3>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li>• Ajout de nouvelles pages</li>
                                <li>• Modifications de design importantes</li>
                                <li>• Changement de textes massif</li>
                                <li>• Maintenance continue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ />

            {/* CTA */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Prêt à lancer votre projet ?
                    </h2>
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
