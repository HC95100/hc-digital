import Link from 'next/link'
import { Rocket, TrendingUp, Clock, HeadphonesIcon, Wallet } from 'lucide-react'
import SiteCarousel from '@/components/features/SiteCarousel'

// Composant Hero - Section principale de l'accueil
export default function Hero() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-background-dark">
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
                            Agence Web · Argenteuil (95)
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
                    <p className="text-xl lg:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Un site <span className="text-white font-semibold">clé en main</span>, moderne et professionnel,
                        conçu pour <span className="text-secondary font-semibold">mettre en valeur votre expertise</span> et
                        <span className="text-secondary font-semibold"> convertir vos visiteurs en clients</span>.
                    </p>
                    <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
                        📍 Basés à Argenteuil (95100), nous accompagnons les PME et TPE du Val-d&apos;Oise mais aussi partout en france.
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

                {/* Carrousel 3D de maquettes */}
                <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end relative z-10">
                    <SiteCarousel />
                </div>
            </div>
        </section>
    )
}
