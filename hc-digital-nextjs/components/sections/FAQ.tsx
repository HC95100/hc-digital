'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

// Composant Section FAQ avec accordion
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-slate-50 dark:bg-surface-dark relative" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre de section */}
                <div className="text-center mb-16">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        FAQ
                    </span>
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Questions Fréquentes
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Les réponses à vos questions avant de vous lancer
                    </p>
                </div>

                {/* Liste des FAQ */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-background-dark rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                            {/* Question (bouton toggle) */}
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-bold text-lg text-slate-900 dark:text-white pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    size={24}
                                />
                            </button>

                            {/* Réponse (contenu accordéon) */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <p
                                        className="text-slate-600 dark:text-slate-300"
                                        dangerouslySetInnerHTML={{
                                            __html: item.answer.replace(
                                                /\*\*(.*?)\*\*/g,
                                                '<strong>$1</strong>'
                                            ),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
