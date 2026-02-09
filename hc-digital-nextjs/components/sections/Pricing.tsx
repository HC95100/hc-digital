import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { pricingPlans } from '@/lib/utils'
import { PricingCard } from '@/components/ui/Card'

// Composant Section Tarifs
export default function Pricing() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-background-dark/50 relative" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre de section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Solutions de Croissance
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Choisissez le niveau d'impact adapté à vos ambitions.
                    </p>
                </div>

                {/* Grille des packs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.id} featured={plan.popular}>
                            {/* Barre de couleur */}
                            <div
                                className={`h-1 w-20 mb-6 rounded-full ${plan.popular ? 'bg-secondary' : 'bg-primary'
                                    }`}
                            />

                            {/* Nom du pack */}
                            <h3
                                className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'
                                    }`}
                            >
                                {plan.name}
                            </h3>

                            {/* Cible */}
                            <p
                                className={`text-sm mb-6 ${plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                                    }`}
                            >
                                {plan.target}
                            </p>

                            {/* Prix */}
                            <div className="flex items-baseline mb-8">
                                <span
                                    className={`font-extrabold ${plan.popular
                                            ? 'text-5xl text-white'
                                            : 'text-4xl text-primary'
                                        }`}
                                >
                                    {plan.price}
                                </span>
                                {plan.price !== 'Sur devis' && (
                                    <span
                                        className={`ml-1 text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                                            }`}
                                    >
                                        / projet
                                    </span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle
                                            className={`mr-3 flex-shrink-0 ${plan.popular ? 'text-secondary' : 'text-green-500'
                                                }`}
                                            size={20}
                                        />
                                        <span
                                            className={`font-medium ${plan.popular ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Idéal pour */}
                            <p
                                className={`text-xs mb-6 ${plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                                    }`}
                            >
                                🚀 <strong>Idéal pour:</strong> {plan.ideal}
                            </p>

                            {/* CTA */}
                            <Link
                                href={`/contact?pack=${plan.id}`}
                                className={`w-full block text-center py-4 px-4 rounded-xl font-bold transition-all ${plan.popular
                                        ? 'bg-secondary hover:bg-secondary-dark text-slate-900 shadow-neon transform hover:scale-105'
                                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {plan.id === 'expert' ? "Parler d'un projet" : 'Choisir ce pack'}
                            </Link>
                        </PricingCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
