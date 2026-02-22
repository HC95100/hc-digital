import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

const zones = [
    'Argenteuil',
    'Cergy',
    'Pontoise',
    'Sarcelles',
    'Enghien-les-Bains',
    'Val-d\'Oise (95)',
    'Île-de-France',
    'France entière',
]

export default function LocalSection() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden" id="nous-trouver">
            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-5" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        Localisation
                    </span>
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Basés à Argenteuil, actifs partout en France
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Notre agence web est implantée au cœur d&apos;Argenteuil (95100), à deux pas de Paris.
                        Nous intervenons pour tous les artisans, TPE et PME de la région.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left — Info */}
                    <div className="flex flex-col gap-6">
                        {/* Contact cards */}
                        <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 flex flex-col gap-5">
                            <h3 className="text-xl font-bold text-white mb-2">Nous contacter</h3>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
                                    <MapPin className="text-primary" size={22} />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-medium">Adresse</p>
                                    <p className="text-slate-400 text-sm">Argenteuil, 95100 — Val-d&apos;Oise, Île-de-France</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-secondary/10 rounded-xl flex-shrink-0">
                                    <Phone className="text-secondary" size={22} />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-medium">Téléphone &amp; WhatsApp</p>
                                    <a
                                        href={`https://wa.me/33${siteConfig.phone.slice(1)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 text-sm hover:text-secondary transition"
                                    >
                                        {siteConfig.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-green-500/10 rounded-xl flex-shrink-0">
                                    <Mail className="text-green-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-medium">Email</p>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-slate-400 text-sm hover:text-green-400 transition"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-purple-500/10 rounded-xl flex-shrink-0">
                                    <Globe className="text-purple-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-medium">Site web</p>
                                    <a
                                        href={siteConfig.url}
                                        className="text-slate-400 text-sm hover:text-purple-400 transition"
                                    >
                                        hc-digital-web.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Zones d'intervention */}
                        <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8">
                            <h3 className="text-lg font-bold text-white mb-4">Zones d&apos;intervention</h3>
                            <div className="flex flex-wrap gap-2">
                                {zones.map((zone) => (
                                    <span
                                        key={zone}
                                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 border border-primary/20 text-primary"
                                    >
                                        📍 {zone}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm mt-4">
                                Nous travaillons également en 100% distanciel pour les clients hors région.
                            </p>
                        </div>
                    </div>

                    {/* Right — Google Maps */}
                    <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl min-h-[420px]">
                        <iframe
                            title="HC Digital — Argenteuil sur Google Maps"
                            width="100%"
                            height="100%"
                            style={{ minHeight: '420px', display: 'block' }}
                            frameBorder="0"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA-7cvO-vLTs_G3kZLAU_vKF68nHwxLqgk&q=Argenteuil,Val-d%27Oise,France&zoom=13`}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
