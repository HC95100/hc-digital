'use client'

import { useState } from 'react'
import Image from 'next/image'

/* ──────────────────────────────────────────────────────────
   Mockup data
────────────────────────────────────────────────────────── */
const MOCKUPS = [
    { src: '/images/mockups/lawyer.png', alt: 'Site vitrine Cabinet d\'Avocats' },
    { src: '/images/mockups/coach.png', alt: 'Site vitrine Coach Travel Birmingham' },
    { src: '/images/mockups/beauchamp.png', alt: 'Site vitrine Immobilier de Prestige' },
    { src: '/images/mockups/dailyblogpost.png', alt: 'Site vitrine Outil SaaS' },
    { src: '/images/mockups/soselectricien.png', alt: 'Site vitrine Dépannage Électricien' },
    { src: '/images/mockups/immobilier.png', alt: 'Site vitrine Agence Immobilière' },
]

// Division en 2 colonnes
const COL1 = [MOCKUPS[0], MOCKUPS[2], MOCKUPS[4]]
const COL2 = [MOCKUPS[1], MOCKUPS[3], MOCKUPS[5]]

// Duplication pour l'effet de boucle infini
const SLIDES_COL1 = [...COL1, ...COL1, ...COL1, ...COL1]
const SLIDES_COL2 = [...COL2, ...COL2, ...COL2, ...COL2]

/* ──────────────────────────────────────────────────────────
   Composant
────────────────────────────────────────────────────────── */
export default function SiteCarousel() {
    const [paused, setPaused] = useState(false)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <div
            className="relative w-full lg:w-[130%] lg:-right-[5%] xl:w-full xl:right-0 h-[350px] sm:h-[450px] lg:h-[750px] flex items-center justify-center overflow-hidden"
            style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
        >
            <div
                className="flex gap-3 sm:gap-5 lg:gap-8 justify-center items-center h-[250%] w-full rotate-[-4deg] scale-105"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Colonne 1 : Défile vers le bas */}
                <div
                    className="flex flex-col gap-3 sm:gap-5 lg:gap-8 w-1/2 max-w-[160px] sm:max-w-[220px] lg:max-w-[320px]"
                    style={{
                        animation: 'scroll-down 25s linear infinite',
                        animationPlayState: paused ? 'paused' : 'running',
                    }}
                >
                    {SLIDES_COL1.map((mockup, idx) => (
                        <CarouselCard
                            key={`col1-${idx}`}
                            mockup={mockup}
                            isHovered={hoveredCard === `col1-${idx}`}
                            onHover={() => setHoveredCard(`col1-${idx}`)}
                            onLeave={() => setHoveredCard(null)}
                            isPriority={idx < 2}
                        />
                    ))}
                </div>

                {/* Colonne 2 : Défile vers le haut */}
                <div
                    className="flex flex-col gap-3 sm:gap-5 lg:gap-8 w-1/2 max-w-[160px] sm:max-w-[220px] lg:max-w-[320px]"
                    style={{
                        animation: 'scroll-up 30s linear infinite',
                        animationPlayState: paused ? 'paused' : 'running',
                    }}
                >
                    {SLIDES_COL2.map((mockup, idx) => (
                        <CarouselCard
                            key={`col2-${idx}`}
                            mockup={mockup}
                            isHovered={hoveredCard === `col2-${idx}`}
                            onHover={() => setHoveredCard(`col2-${idx}`)}
                            onLeave={() => setHoveredCard(null)}
                            isPriority={idx < 2}
                        />
                    ))}
                </div>
            </div>

            {/* Styles pour l'animation continue */}
            <style jsx>{`
                @keyframes scroll-down {
                    0% {
                        transform: translateY(-50%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                @keyframes scroll-up {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }
            `}</style>
        </div>
    )
}

function CarouselCard({ mockup, isHovered, onHover, onLeave, isPriority }: { mockup: any, isHovered: boolean, onHover: () => void, onLeave: () => void, isPriority: boolean }) {
    const title = mockup.alt.replace('Site vitrine ', '')

    return (
        <div
            className="flex-shrink-0 transition-all duration-700 ease-out cursor-pointer relative bg-[#1a1c29] rounded-2xl sm:rounded-3xl overflow-hidden group"
            style={{
                transform: isHovered ? 'scale(1.03) translateY(-8px)' : 'scale(1) translateY(0)',
                boxShadow: isHovered
                    ? '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(56,189,248,0.15)'
                    : '0 20px 40px -15px rgba(0,0,0,0.5)',
                border: isHovered ? '1px solid rgba(56,189,248,0.4)' : '1px solid rgba(255,255,255,0.05)',
                aspectRatio: '4/5',
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="absolute inset-x-0 inset-y-0 p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500">
                <div className="relative w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#11131a]">
                    <Image
                        src={mockup.src}
                        alt={mockup.alt}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 320px"
                        priority={isPriority}
                    />
                </div>
            </div>

            {/* Overlay Gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#0b0d14]/90 via-[#0b0d14]/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

            <div className={`absolute bottom-0 left-0 w-full p-3 sm:p-6 transition-all duration-500 ease-out flex flex-col justify-end ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl">
                    <h3 className="text-white font-bold text-xs sm:text-lg mb-0 sm:mb-1 leading-tight">{title}</h3>
                    <p className="text-secondary text-[10px] sm:text-xs uppercase tracking-wider font-semibold hidden sm:block">Web Design</p>
                </div>
            </div>
        </div>
    )
}
