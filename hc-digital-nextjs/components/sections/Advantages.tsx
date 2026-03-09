import { TrendingUp, ShieldCheck, Star, Server, BadgeCheck, Clock, Wallet, Headphones } from 'lucide-react'

// Composant Section Avantages - Orienté Business & Marketing
export default function Advantages() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-background-light dark:bg-background-dark relative" id="advantages">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre de section */}
                <div className="mb-10 sm:mb-16 text-center">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        Vos Avantages
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Pourquoi choisir HC Digital ?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Un investissement rentable qui booste votre activité et votre crédibilité.
                    </p>
                </div>

                {/* Grille Bento */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 sm:gap-6 h-auto">
                    {/* Card principale - Plus de clients & CA */}
                    <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-blue-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-glow-blue transition-all duration-500">
                        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500">
                            <TrendingUp size={200} />
                        </div>
                        <div>
                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                ROI Garanti
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6">Plus de clients, plus de CA</h3>
                            <p className="mt-3 sm:mt-4 text-blue-100 text-base sm:text-lg opacity-90 leading-relaxed">
                                Un site professionnel qui <strong>travaille pour vous 24h/24</strong>.
                                Vos futurs clients vous trouvent sur Google, même quand vous ne travaillez pas.
                            </p>
                        </div>
                        <div className="mt-6 sm:mt-8 space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">✓</span>
                                <span>Visible sur Google en permanence</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">✓</span>
                                <span>Conversion visiteurs → prospects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">✓</span>
                                <span>Image professionnelle renforcée</span>
                            </div>
                        </div>
                    </div>

                    {/* Card - Site clé en main */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-start hover:-translate-y-1 transition duration-300">
                        <div className="p-3 bg-green-500/10 rounded-xl mb-4">
                            <BadgeCheck className="text-green-500" size={32} />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                            Site Clé en Main
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            On gère tout : design, développement, mise en ligne. Vous vous concentrez sur votre métier.
                        </p>
                    </div>

                    {/* Card - Meilleur rapport qualité/prix */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-start hover:-translate-y-1 transition duration-300">
                        <div className="p-3 bg-secondary/10 rounded-xl mb-4">
                            <Wallet className="text-secondary" size={32} />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                            Rapport Qualité/Prix
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Packs transparents, sans coûts cachés. Adapté aux budgets PME et artisans.
                        </p>
                    </div>

                    {/* Card - Visible 24h/24 */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-start hover:-translate-y-1 transition duration-300">
                        <div className="p-3 bg-purple-500/10 rounded-xl mb-4">
                            <Clock className="text-purple-500" size={32} />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                            Visible 24h/24, 7j/7
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Vos clients potentiels vous trouvent à toute heure, même le week-end.
                        </p>
                    </div>

                    {/* Card - Accompagnement */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-start hover:-translate-y-1 transition duration-300">
                        <div className="p-3 bg-orange-500/10 rounded-xl mb-4">
                            <Headphones className="text-orange-500" size={32} />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                            Suivi Personnalisé
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Un interlocuteur dédié vous accompagne et vous conseille à chaque étape.
                        </p>
                    </div>

                    {/* Card large - Crédibilité & Confiance */}
                    <div className="md:col-span-2 bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group hover:shadow-lg transition">
                        <div className="absolute inset-0 grid-pattern opacity-10" />
                        <div className="relative z-10">
                            <h3 className="font-bold text-white text-xl sm:text-2xl">Renforcez votre crédibilité</h3>
                            <p className="text-slate-400 mt-2">
                                Un site professionnel inspire confiance. Vos prospects vous prennent au sérieux dès le premier clic.
                            </p>
                        </div>
                        <div className="relative z-10 w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <Star className="text-slate-900" size={28} />
                        </div>
                    </div>

                    {/* Card large - Garantie & Propriété */}
                    <div className="md:col-span-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group hover:shadow-lg transition">
                        <div className="absolute inset-0 grid-pattern opacity-10" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                                    Garantie 7 jours
                                </span>
                                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                    100% Propriétaire
                                </span>
                            </div>
                            <p className="text-slate-400 mt-2">
                                Vous êtes l'unique propriétaire de votre site. Hébergement Vercel gratuit, domaine à votre nom.
                            </p>
                        </div>
                        <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="text-white" size={28} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
