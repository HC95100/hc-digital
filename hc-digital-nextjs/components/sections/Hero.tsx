import Link from 'next/link'
import { Rocket, TrendingUp, Clock, HeadphonesIcon, Wallet } from 'lucide-react'

// Composant Hero - Section principale de l'accueil
export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-dark">
            {/* Pattern de grille en arrière-plan */}
            <div className="absolute inset-0 pointer-events-none grid-pattern opacity-20" />

            {/* Blobs animés */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                {/* Contenu texte */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0 z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                        </span>
                        <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                            Agence Web Nouvelle Génération
                        </span>
                    </div>

                    {/* Titre H1 */}
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05]">
                        <span className="block">Votre site vitrine,</span>
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-cyan-400 to-primary animate-gradient-x">
                                pensé pour performer.
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                                <path d="M0 7 Q50 0 100 7 T200 7" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    {/* Sous-titre H2 */}
                    <p className="text-xl lg:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Un site <span className="text-white font-semibold">clé en main</span>, moderne et professionnel,
                        conçu pour <span className="text-secondary font-semibold">mettre en valeur votre expertise</span> et
                        <span className="text-secondary font-semibold"> convertir vos visiteurs en clients</span>.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-xl overflow-hidden shadow-neon transition-all duration-300 hover:scale-105"
                        >
                            Lancer mon projet
                            <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm"
                        >
                            Découvrir nos offres
                        </Link>
                    </div>

                    {/* Arguments business */}
                    <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-200 text-sm font-medium">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <TrendingUp className="text-secondary" size={16} />
                            <span>Plus de clients</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <Clock className="text-secondary" size={16} />
                            <span>Visible 24h/24</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <Wallet className="text-secondary" size={16} />
                            <span>Meilleur rapport qualité/prix</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <HeadphonesIcon className="text-secondary" size={16} />
                            <span>Accompagnement dédié</span>
                        </div>
                    </div>
                </div>

                {/* Visuel (mockup) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
                    <div className="relative w-full max-w-lg aspect-square animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-purple-600 rounded-full opacity-20 blur-3xl" />

                        {/* Mockup browser */}
                        <div className="relative bg-surface-dark border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 group">
                            <div className="h-10 bg-slate-800/80 backdrop-blur w-full border-b border-slate-700 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 h-5 w-2/3 bg-slate-900/50 rounded-full" />
                            </div>
                            <div className="p-6 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 h-[400px]">
                                <div className="flex justify-between items-center">
                                    <div className="h-8 w-24 bg-slate-700 rounded animate-pulse" />
                                    <div className="flex gap-2">
                                        <div className="h-8 w-16 bg-primary/20 rounded" />
                                        <div className="h-8 w-8 bg-secondary/20 rounded-full" />
                                    </div>
                                </div>
                                <div className="h-32 w-full bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-slate-800/50 rounded-xl border border-slate-700 p-3">
                                        <div className="w-8 h-8 bg-secondary/20 rounded mb-2" />
                                        <div className="w-16 h-2 bg-slate-600 rounded" />
                                    </div>
                                    <div className="h-24 bg-slate-800/50 rounded-xl border border-slate-700 p-3">
                                        <div className="w-8 h-8 bg-primary/20 rounded mb-2" />
                                        <div className="w-16 h-2 bg-slate-600 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card flottante - Visibilité */}
                        <div className="absolute -right-8 top-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl animate-bounce">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-300">Visibilité Google</p>
                                    <p className="text-lg font-bold text-white">Optimisé SEO</p>
                                </div>
                            </div>
                        </div>

                        {/* Card flottante - Livraison */}
                        <div className="absolute -left-4 bottom-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl animate-pulse">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-lg">
                                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-300">Livraison rapide</p>
                                    <p className="text-lg font-bold text-white">7-14 jours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
