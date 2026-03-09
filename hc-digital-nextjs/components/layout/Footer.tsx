import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/metadata'
import { Mail, MapPin, Phone } from 'lucide-react'

// Liens rapides
const quickLinks = [
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
]

const legalLinks = [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/politique-confidentialite', label: 'Confidentialité' },
]

// Footer compact
export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-8 sm:pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grille compacte */}
                <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Logo et contact */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/images/logo-hc-digital.png"
                            alt="HC Digital Logo"
                            width={140}
                            height={40}
                            className="brightness-0 invert w-auto h-auto"
                            loading="lazy"
                        />
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Mail size={14} />
                            <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary transition">
                                {siteConfig.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Phone size={14} />
                            <a href={`https://wa.me/33${siteConfig.phone.slice(1)}`} className="hover:text-secondary transition" target="_blank" rel="noopener noreferrer">
                                {siteConfig.phone} (Appel & WhatsApp)
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <MapPin size={14} />
                            <span>France entière</span>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div className="flex flex-row gap-8 sm:gap-12">
                        <div>
                            <h4 className="font-semibold text-white text-sm mb-3">Navigation</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-slate-400 text-sm hover:text-secondary transition">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white text-sm mb-3">Légal</h4>
                            <ul className="space-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-slate-400 text-sm hover:text-secondary transition">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-slate-800 text-center">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} HC Digital. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}
