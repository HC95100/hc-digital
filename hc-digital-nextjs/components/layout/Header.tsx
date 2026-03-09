'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

// Liens de navigation
const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/a-propos', label: 'À propos' },
]

// Composant Header compact avec logo
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`fixed w-full z-50 top-0 transition-all duration-500 ${isScrolled
                    ? 'py-2 bg-background-dark/80 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-black/20'
                    : 'py-4 bg-transparent'
                    }`}
            >
                <nav className="w-full px-4 sm:px-8 xl:px-16">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image
                                src="/images/logo-hc-digital.png"
                                alt="HC Digital - Agence Web"
                                width={160}
                                height={48}
                                className={`transition-transform duration-300 w-auto h-auto ${isScrolled ? 'scale-90' : 'scale-100'}`}
                                priority
                            />
                        </Link>

                        {/* Navigation Desktop */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-semibold text-slate-300 hover:text-secondary transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="ml-4 px-5 py-2 text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all duration-200"
                            >
                                Devis gratuit
                            </Link>
                        </div>

                        {/* Bouton Menu Mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden text-slate-300 hover:text-white p-2"
                            aria-label="Menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                links={navLinks}
            />
        </>
    )
}
