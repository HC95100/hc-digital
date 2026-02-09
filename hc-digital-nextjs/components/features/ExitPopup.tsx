'use client'

import { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'
import Button from '@/components/ui/Button'

// Composant Popup de sortie (Exit Intent)
export default function ExitPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        // Vérifier si déjà affiché dans la session
        const shown = sessionStorage.getItem('exitPopupShown')
        if (shown) {
            setHasShown(true)
            return
        }

        // Détecter l'intention de sortie (souris sort vers le haut)
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY < 10 && !hasShown) {
                setIsVisible(true)
                setHasShown(true)
                sessionStorage.setItem('exitPopupShown', 'true')
            }
        }

        document.addEventListener('mouseout', handleMouseLeave)
        return () => document.removeEventListener('mouseout', handleMouseLeave)
    }, [hasShown])

    // Fermer le popup
    const closePopup = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-up"
            onClick={closePopup}
        >
            <div
                className="bg-surface-dark border border-slate-700 rounded-3xl p-8 max-w-md mx-4 text-center relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Bouton fermer */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                    aria-label="Fermer"
                >
                    <X size={24} />
                </button>

                {/* Icône cadeau */}
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-8 h-8 text-secondary" />
                </div>

                {/* Contenu */}
                <h3 className="text-2xl font-bold text-white mb-3">Attendez !</h3>
                <p className="text-slate-300 mb-6">
                    Obtenez votre{' '}
                    <strong className="text-secondary">audit SEO gratuit</strong> d'une
                    valeur de 150€. Découvrez comment améliorer votre visibilité en ligne.
                </p>

                {/* CTA */}
                <a href="/contact" onClick={closePopup}>
                    <Button variant="secondary" size="lg" className="w-full">
                        Recevoir mon audit gratuit
                    </Button>
                </a>

                {/* Lien refuser */}
                <button
                    onClick={closePopup}
                    className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition"
                >
                    Non merci, je passe mon tour
                </button>
            </div>
        </div>
    )
}
