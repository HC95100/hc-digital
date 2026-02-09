'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Vérifier si le consentement a déjà été donné
        const consent = localStorage.getItem('cookie_consent')
        if (consent === null) {
            // Petit délai pour l'animation d'entrée
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        setIsVisible(false)
        localStorage.setItem('cookie_consent', 'accepted')
        // Ici, on pourrait initialiser les outils de tracking (ex: GA)
    }

    const handleDecline = () => {
        setIsVisible(false)
        localStorage.setItem('cookie_consent', 'refused')
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)] animate-slide-up">
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-2xl shadow-black/50">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                        <Cookie className="text-secondary" size={20} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-sm mb-1">Cookies & Confidentialité</h3>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                            Nous utilisons des cookies pour garantir la meilleure expérience sur notre site.
                            Conformément à la loi, vous pouvez choisir de les accepter ou non.
                        </p>

                        <div className="flex gap-2">
                            <button
                                onClick={handleDecline}
                                className="flex-1 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                                Tout refuser
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-3 py-2 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow-neon"
                            >
                                Tout accepter
                            </button>
                        </div>

                        <div className="mt-3 text-center">
                            <Link href="/politique-confidentialite" className="text-[10px] text-slate-500 hover:text-secondary underline decoration-slate-700 hover:decoration-secondary transition-all">
                                En savoir plus sur notre politique
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
