import { processSteps } from '@/lib/utils'
import { Phone, Video, CheckCircle, Palette, Eye, Rocket, BarChart3, User } from 'lucide-react'

// Map des icônes
const iconMap: Record<string, React.ReactNode> = {
    phone: <Phone size={20} />,
    video: <Video size={20} />,
    check: <CheckCircle size={20} />,
    palette: <Palette size={20} />,
    eye: <Eye size={20} />,
    rocket: <Rocket size={20} />,
    chart: <BarChart3 size={20} />,
}

// Composant Section Processus - 7 étapes professionnelles
export default function Process() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-background-light dark:bg-background-dark relative overflow-hidden" id="process">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Titre de section */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        Mon Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        De l'idée à la mise en ligne
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        7 étapes simples et transparentes. Vous êtes impliqué aux moments clés.
                    </p>
                </div>

                {/* Légende */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full bg-primary" />
                        <span className="text-slate-600 dark:text-slate-400">Je m'en occupe</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full bg-secondary" />
                        <span className="text-slate-600 dark:text-slate-400">Vous intervenez</span>
                    </div>
                </div>

                {/* Timeline verticale */}
                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-px" />

                    {/* Étapes */}
                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Numéro de l'étape */}
                                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-background-dark shadow-lg ${step.clientAction ? 'bg-secondary text-slate-900' : 'bg-primary text-white'
                                            }`}
                                    >
                                        <span className="font-bold text-sm">{step.step}</span>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className={`ml-16 sm:ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                    <div
                                        className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-surface-dark border shadow-md hover:shadow-lg transition-shadow ${step.clientAction
                                            ? 'border-secondary/30 dark:border-secondary/30'
                                            : 'border-slate-100 dark:border-slate-700'
                                            }`}
                                    >
                                        {/* Header avec icône */}
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <div
                                                className={`p-2 rounded-lg ${step.clientAction ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                                                    }`}
                                            >
                                                {iconMap[step.icon]}
                                            </div>
                                            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                                                {step.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Badge intervention client */}
                                        {step.clientAction && step.clientActionText && (
                                            <div className={`mt-4 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                                    <User size={12} />
                                                    Vous : {step.clientActionText}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Résumé marketing */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-8 py-5 rounded-2xl bg-slate-900 border border-slate-700">
                        <div className="flex items-center gap-2">
                            <User size={20} className="text-secondary" />
                            <span className="text-white font-bold text-lg">
                                Votre implication : 15 à 20 minutes.
                            </span>
                        </div>
                        <span className="hidden sm:block text-slate-600">•</span>
                        <span className="text-slate-300 text-sm sm:text-base">
                            Pour un site <span className="text-secondary font-semibold">100% personnalisé</span>, <span className="text-secondary font-semibold">sécurisé</span> et <span className="text-secondary font-semibold">entièrement à vous</span>.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
