import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import ContactForm from '@/components/sections/ContactForm'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'Contact — Agence Web à Argenteuil (95) — Devis Gratuit en 24h',
    'Contactez HC Digital, votre agence web à Argenteuil (Val-d\'Oise). Devis gratuit sous 24h. Tél : 0652937631 (WhatsApp) — Email : contact.chohabi@gmail.com.',
    '/contact'
)

// Page Contact
export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-background-dark relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Lancez Votre Projet
                    </h1>
                    <p className="text-xl text-slate-300">
                        Réponse garantie sous 24h. Devis gratuit et sans engagement.
                    </p>
                </div>
            </section>

            {/* Formulaire de contact */}
            <ContactForm />

            {/* Garanties */}
            <section className="py-16 bg-background-light dark:bg-surface-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                        Nos Garanties
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: '✓', text: 'Devis gratuit et sans engagement' },
                            { icon: '✓', text: 'Premier échange offert (30min)' },
                            { icon: '✓', text: 'Transparence totale sur les délais et tarifs' },
                            { icon: '✓', text: 'Satisfaction garantie ou remboursé' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark rounded-xl border border-slate-100 dark:border-slate-700"
                            >
                                <span className="text-green-500 text-xl font-bold">{item.icon}</span>
                                <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
