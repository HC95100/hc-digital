'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

/* ──────────────────────────────────────────────────────────
   Mockup data
────────────────────────────────────────────────────────── */
const MOCKUPS = [
    { src: '/images/mockups/bakery.png', alt: 'Site vitrine Boulangerie Artisanale', label: 'Boulangerie' },
    { src: '/images/mockups/lawyer.png', alt: 'Site vitrine Cabinet d\'Avocats', label: 'Cabinet d\'Avocats' },
    { src: '/images/mockups/construction.png', alt: 'Site vitrine Construction & Rénovation', label: 'Construction' },
    { src: '/images/mockups/beauty.png', alt: 'Site vitrine Institut de Beauté', label: 'Institut de Beauté' },
    { src: '/images/mockups/restaurant.png', alt: 'Site vitrine Restaurant Le Petit Bistrot', label: 'Restaurant' },
]

/* ──────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────── */
export default function SiteCarousel() {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)
    const total = MOCKUPS.length

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % total)
    }, [total])

    /* Auto-rotate every 4s */
    useEffect(() => {
        if (paused) return
        const interval = setInterval(next, 4000)
        return () => clearInterval(interval)
    }, [paused, next])

    /* Compute position offset relative to current */
    function getOffset(index: number) {
        let diff = index - current
        if (diff > Math.floor(total / 2)) diff -= total
        if (diff < -Math.floor(total / 2)) diff += total
        return diff
    }

    return (
        <div
            className="relative w-full h-[420px] lg:h-[480px]"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {MOCKUPS.map((mockup, index) => {
                const offset = getOffset(index)
                const isActive = offset === 0
                const isAdjacent = Math.abs(offset) === 1
                const isVisible = Math.abs(offset) <= 2

                if (!isVisible) return null

                /* 3D transforms */
                const rotateY = offset * 25
                const translateX = offset * 220
                const translateZ = isActive ? 0 : isAdjacent ? -120 : -220
                const scale = isActive ? 1 : isAdjacent ? 0.85 : 0.7
                const opacity = isActive ? 1 : isAdjacent ? 0.5 : 0.2
                const zIndex = isActive ? 30 : isAdjacent ? 20 : 10

                return (
                    <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                            opacity,
                            zIndex,
                            transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Browser window frame */}
                        <div className="w-[320px] lg:w-[400px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60">
                            {/* macOS-style title bar */}
                            <div className="h-8 bg-slate-800/90 flex items-center px-3 gap-1.5 border-b border-slate-700/50">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                <div className="ml-3 h-4 flex-1 max-w-[160px] bg-slate-900/50 rounded-full" />
                            </div>
                            {/* Website screenshot */}
                            <div className="relative w-full aspect-[4/5]">
                                <Image
                                    src={mockup.src}
                                    alt={mockup.alt}
                                    fill
                                    className="object-cover object-top"
                                    sizes="400px"
                                    priority={index < 2}
                                />
                            </div>
                        </div>

                        {/* Label under the active slide */}
                        {isActive && (
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-secondary/20 border border-secondary/30 rounded-full backdrop-blur-sm">
                                <span className="text-secondary text-xs font-bold tracking-wider uppercase">
                                    {mockup.label}
                                </span>
                            </div>
                        )}
                    </div>
                )
            })}

            {/* Dot indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {MOCKUPS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                                ? 'bg-secondary w-6'
                                : 'bg-slate-600 hover:bg-slate-400'
                            }`}
                        aria-label={`Voir maquette ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
