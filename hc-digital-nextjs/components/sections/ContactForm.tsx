'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { siteConfig } from '@/lib/metadata'

// Schéma de validation Zod
const contactSchema = z.object({
    firstName: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
    lastName: z.string().min(2, 'Nom requis (min. 2 caractères)'),
    email: z.string().email('Email invalide'),
    phone: z.string().optional(),
    projectType: z.string().min(1, 'Sélectionnez un type de projet'),
    message: z.string().min(10, 'Message requis (min. 10 caractères)'),
    consent: z.boolean().refine((val) => val === true, {
        message: 'Vous devez accepter d\'être contacté',
    }),
})

type ContactFormData = z.infer<typeof contactSchema>

// Options pour le select
const projectOptions = [
    { value: 'visibility', label: 'Pack Visibilité (500€)' },
    { value: 'performance', label: 'Pack Performance (700€)' },
    { value: 'expert', label: 'Pack Expert (sur devis)' },
    { value: 'unknown', label: 'Je ne sais pas encore' },
]

// Composant Formulaire de Contact
export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    // Soumission du formulaire
    const onSubmit = async (data: ContactFormData) => {
        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Une erreur est survenue')
            }

            setStatus('success')
            reset()

            // Reset après 5 secondes
            setTimeout(() => setStatus('idle'), 5000)
        } catch (error) {
            console.error('Erreur soumission:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden" id="contact">
            {/* Effets de fond */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full animate-blob" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Colonne gauche - Informations */}
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
                            Contact Rapide
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Prêt à décoller ?
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                            Ne laissez plus vos concurrents prendre de l'avance. Discutons de
                            votre projet et voyons comment nous pouvons multiplier vos
                            résultats.
                        </p>

                        {/* Informations de contact */}
                        <div className="space-y-6">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="flex items-center text-slate-300 hover:text-white transition group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition mr-5">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-400">Email</span>
                                    <span className="font-bold text-lg">{siteConfig.email}</span>
                                </div>
                            </a>

                            <div className="flex items-center text-slate-300 p-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 mr-5">
                                    <MapPin className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-400">Zone d'intervention</span>
                                    <span className="font-bold text-lg">Toute la France (Distanciel)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Formulaire */}
                    <div className="bg-surface-dark/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="text-green-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Message envoyé !</h3>
                                <p className="text-slate-400">Nous vous répondrons sous 24h.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        id="firstName"
                                        label="Prénom"
                                        placeholder="Jean"
                                        error={errors.firstName?.message}
                                        {...register('firstName')}
                                    />
                                    <Input
                                        id="lastName"
                                        label="Nom"
                                        placeholder="Dupont"
                                        error={errors.lastName?.message}
                                        {...register('lastName')}
                                    />
                                </div>

                                <Input
                                    id="email"
                                    label="Email"
                                    type="email"
                                    placeholder="jean@exemple.com"
                                    error={errors.email?.message}
                                    {...register('email')}
                                />

                                <Input
                                    id="phone"
                                    label="Téléphone (optionnel)"
                                    type="tel"
                                    placeholder="06 12 34 56 78"
                                    {...register('phone')}
                                />

                                <Select
                                    id="projectType"
                                    label="Type de projet"
                                    options={projectOptions}
                                    error={errors.projectType?.message}
                                    {...register('projectType')}
                                />

                                <Textarea
                                    id="message"
                                    label="Votre message"
                                    placeholder="Décrivez votre projet, vos objectifs..."
                                    rows={4}
                                    error={errors.message?.message}
                                    {...register('message')}
                                />

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        className="mt-1 rounded border-slate-600 bg-slate-800/50 text-primary focus:ring-primary"
                                        {...register('consent')}
                                    />
                                    <label htmlFor="consent" className="text-sm text-slate-400">
                                        J'accepte d'être contacté(e) par HC Digital concernant ma demande
                                    </label>
                                </div>
                                {errors.consent && (
                                    <p className="text-sm text-red-400">{errors.consent.message}</p>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    isLoading={status === 'loading'}
                                    icon={<Send size={20} />}
                                >
                                    Recevoir mon devis gratuit
                                </Button>

                                {status === 'error' && (
                                    <p className="text-center text-red-400 text-sm">
                                        Erreur lors de l'envoi. Réessayez ou contactez-nous par email.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
