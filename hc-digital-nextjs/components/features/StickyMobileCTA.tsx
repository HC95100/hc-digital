'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Rocket } from 'lucide-react'

// Composant CTA sticky mobile
export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(true)
    const pathname = usePathname()

    // Masquer sur la page contact
    const isContactPage = pathname === '/contact'

    useEffect(() => {
        // Masquer quand on approche du footer ou de la section contact
        const handleScroll = () => {
            const footer = document.querySelector('footer')
            const contactSection = document.getElementById('contact')

            if (footer) {
                const footerRect = footer.getBoundingClientRect()
                if (footerRect.top < window.innerHeight) {
                    setIsVisible(false)
                    return
                }
            }

            if (contactSection) {
                const contactRect = contactSection.getBoundingClientRect()
                if (contactRect.top < window.innerHeight) {
                    setIsVisible(false)
                    return
                }
            }

            setIsVisible(true)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Ne pas afficher sur la page contact ou si masqué
    if (isContactPage || !isVisible) return null

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-background-dark/95 backdrop-blur-lg border-t border-slate-700 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
            >
                <Rocket size={20} />
                Devis Gratuit en 24h
            </Link>
        </div>
    )
}
