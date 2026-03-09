import Link from 'next/link'
import { Rocket, TrendingUp, Clock, HeadphonesIcon, Wallet } from 'lucide-react'
import SiteCarousel from '@/components/features/SiteCarousel'

// Composant Hero - Section principale de l'accueil
export default function Hero() {
    return (
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-background-dark">
            {/* Pattern de grille en arrière-plan */}
            <div className="absolute inset-0 pointer-events-none grid-pattern opacity-20" />

            {/* Blobs animés */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />

            <div className="relative w-full px-4 sm:px-8 xl:px-16 flex flex-col lg:flex-row items-center">
                {/* Contenu texte */}
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center mb-8 lg:mb-0 z-10 xl:pr-16">

                    {/* Titre H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.1]">
                        <span className="block">Votre site vitrine,</span>
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-cyan-400 to-primary animate-gradient-x">
                                pensé pour performer.
                            </span>
                            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-secondary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                                <path d="M0 7 Q50 0 100 7 T200 7" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    {/* Sous-titre */}
                    <p className="text-base sm:text-lg lg:text-2xl text-slate-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                        Un site <span className="text-white font-semibold">clé en main</span>, moderne et professionnel,
                        conçu pour <span className="text-secondary font-semibold">mettre en valeur votre expertise</span> et
                        <span className="text-secondary font-semibold"> convertir vos visiteurs en clients</span>.
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-10 max-w-xl mx-auto">
                        Contactez-nous sur <a href="https://wa.me/33652937631" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-200 font-bold transition-colors underline decoration-white/30 hover:decoration-white/60">WhatsApp au 06 52 93 76 31</a> pour un appel découverte gratuit
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 min-h-[48px] text-sm sm:text-base font-bold text-white bg-primary rounded-xl overflow-hidden shadow-neon transition-all duration-300 hover:scale-105"
                        >
                            Lancer mon projet
                            <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-4 min-h-[48px] text-sm sm:text-base font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm"
                        >
                            Découvrir nos offres
                        </Link>
                    </div>

                    {/* Arguments business */}
                    <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4 text-slate-200 text-xs sm:text-sm font-medium">
                        <div className="flex items-center gap-2 bg-white/5 px-3 sm:px-4 py-2 rounded-full border border-white/10">
                            <TrendingUp className="text-secondary flex-shrink-0" size={14} />
                            <span>Plus de clients</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-3 sm:px-4 py-2 rounded-full border border-white/10">
                            <Clock className="text-secondary flex-shrink-0" size={14} />
                            <span>Visible 24h/24</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-3 sm:px-4 py-2 rounded-full border border-white/10">
                            <Wallet className="text-secondary flex-shrink-0" size={14} />
                            <span>Qualité/prix</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-3 sm:px-4 py-2 rounded-full border border-white/10">
                            <HeadphonesIcon className="text-secondary flex-shrink-0" size={14} />
                            <span>Suivi dédié</span>
                        </div>
                    </div>
                </div>

                {/* Carrousel de maquettes — visible sur tous les écrans */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
                    <SiteCarousel />
                </div>
            </div>
        </section>
    )
}
