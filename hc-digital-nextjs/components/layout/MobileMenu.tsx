'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    links: { href: string; label: string }[]
}

// Composant Menu Mobile slide-in
export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    // Fermer avec la touche Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    return (
        <>
            {/* Overlay sombre */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel du menu */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-background-dark z-50 transform transition-transform duration-300 border-l border-slate-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navigation"
            >
                <div className="p-6">
                    {/* Header du menu */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-white">Menu</span>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-white transition p-2"
                            aria-label="Fermer le menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Liens de navigation */}
                    <nav className="space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block py-3 px-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* CTA Contact */}
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="block py-4 mt-6 text-center bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition"
                        >
                            Demander un devis
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}
