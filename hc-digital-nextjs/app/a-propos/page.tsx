import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Process from '@/components/sections/Process'
import Link from 'next/link'
import { Target, Heart, Zap, Shield } from 'lucide-react'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'À Propos - Notre Mission & Valeurs',
    'Découvrez HC Digital, votre partenaire web dédié aux PME et artisans. Notre mission: créer des sites vitrines performants qui génèrent des résultats.',
    '/a-propos'
)

// Valeurs de l'entreprise
const values = [
    {
        icon: Target,
        title: 'Résultats concrets',
        description: 'Nous ne créons pas des sites pour faire joli. Chaque élément est pensé pour convertir vos visiteurs en clients.',
    },
    {
        icon: Heart,
        title: 'Relation de confiance',
        description: 'Un interlocuteur unique qui comprend votre métier et vos objectifs. Pas de jargon technique, que des solutions.',
    },
    {
        icon: Zap,
        title: 'Réactivité exemplaire',
        description: 'Réponse sous 24h garantie. Support accessible 7j/7. Nous sommes là quand vous avez besoin de nous.',
    },
    {
        icon: Shield,
        title: 'Transparence totale',
        description: 'Prix fixes sans surprise, délais respectés, et vous êtes propriétaire à 100% de votre site.',
    },
]

// Page À propos
export default function AProposPage() {
    return (
        <>
            {/* Hero - Notre Mission */}
            <section className="pt-32 pb-16 bg-background-dark relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        Notre mission
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Rendre les sites vitrines professionnels accessibles aux entreprises ambitieuses
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        En alliant <span className="text-secondary font-semibold">design soigné</span>, <span className="text-secondary font-semibold">performance technique</span> et <span className="text-secondary font-semibold">accompagnement client</span>, pour obtenir de vrais résultats concrets et une satisfaction complète.
                    </p>
                </div>
            </section>

            {/* Vision - Pourquoi HC Digital */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            Pourquoi HC Digital ?
                        </h2>

                        <div className="space-y-6 text-lg">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Trop d'entreprises sérieuses souffrent d'une image en ligne qui ne reflète pas leur niveau réel : sites dépassés, bricolés ou inexistants, pendant que la concurrence capte l'attention et les opportunités.
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">HC Digital est né d'une conviction simple :</strong> un site vitrine ne doit pas seulement « exister », il doit <span className="text-primary font-semibold">inspirer confiance</span>, <span className="text-primary font-semibold">valoriser votre expertise</span> et <span className="text-primary font-semibold">travailler pour votre activité 24h/24</span>.
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                C'est pourquoi nous proposons des <strong className="text-slate-900 dark:text-white">packs clairs et transparents</strong>, à prix fixes, pensés pour éliminer la complexité : pas de jargon inutile, pas de devis flous, pas de mauvaises surprises.
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Au-delà de la création du site, nous vous accompagnons à chaque étape, avec des objectifs définis et une approche orientée résultats, pour faire de votre vitrine digitale un véritable <span className="text-secondary font-semibold">levier de crédibilité</span>, de <span className="text-secondary font-semibold">visibilité</span> et de <span className="text-secondary font-semibold">conversion</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos valeurs */}
            <section className="py-24 bg-slate-50 dark:bg-surface-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Nos Valeurs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-background-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-700"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <value.icon className="text-primary" size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processus */}
            <Process />

            {/* CTA - Réduit et sans "Voir nos réalisations" */}
            <section className="py-10 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Prêt à travailler ensemble ?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition"
                    >
                        Nous contacter
                    </Link>
                </div>
            </section>
        </>
    )
}
