'use client'

import { useState, useEffect } from 'react'
import { X, CalendarCheck, CheckCircle2 } from 'lucide-react'

/* ──────────────────────────────────────────────────────────
   Types
────────────────────────────────────────────────────────── */
type Step = 'invite' | 'form' | 'confirmed'

interface FormData {
    fullName: string
    phone: string
    website: string
    date: string
    time: string
}

/* ──────────────────────────────────────────────────────────
   Available time slots
────────────────────────────────────────────────────────── */
const TIME_SLOTS = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
]

/* ──────────────────────────────────────────────────────────
   Helpers
────────────────────────────────────────────────────────── */
function minBookingDate() {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
}

/* ──────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────── */
export default function ExitPopup() {
    const [step, setStep] = useState<Step>('invite')
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<FormData>({
        fullName: '',
        phone: '',
        website: '',
        date: '',
        time: '',
    })
    const [errors, setErrors] = useState<Partial<FormData>>({})

    /* ── Exit-intent trigger ── */
    useEffect(() => {
        const shown = sessionStorage.getItem('exitPopupShown')
        if (shown) { setHasShown(true); return }

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

    /* ── Close / Reset ── */
    const closePopup = () => {
        setIsVisible(false)
        setTimeout(() => setStep('invite'), 400)
    }

    /* ── Form helpers ── */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }

    const validate = () => {
        const e: Partial<FormData> = {}
        if (!form.fullName.trim()) e.fullName = 'Ce champ est requis.'
        if (!form.phone.trim()) e.phone = 'Ce champ est requis.'
        if (!form.date) e.date = 'Veuillez choisir une date.'
        if (!form.time) e.time = 'Veuillez choisir un créneau.'
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            const res = await fetch('/api/demo-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error('Erreur serveur')
            setStep('confirmed')
        } catch {
            setErrors({ fullName: 'Une erreur est survenue. Veuillez réessayer.' })
        } finally {
            setLoading(false)
        }
    }

    if (!isVisible) return null

    /* ════════════════════════════════════════════════════════
       Overlay
    ════════════════════════════════════════════════════════ */
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-up px-4"
            onClick={closePopup}
        >
            <div
                className="bg-surface-dark border border-slate-700 rounded-3xl p-8 w-full max-w-md relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                    aria-label="Fermer"
                >
                    <X size={22} />
                </button>

                {/* ── STEP 1 : invitation ──────────────────────────────── */}
                {step === 'invite' && (
                    <div className="text-center">
                        <div className="text-5xl mb-4">👋</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Attendez !</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Programmez une{' '}
                            <strong className="text-secondary">démonstration gratuite</strong>{' '}
                            et un appel personnalisé avec notre équipe pour :
                        </p>

                        <ul className="text-slate-300 text-sm text-left space-y-2 mb-6 pl-4">
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-0.5">•</span>
                                analyser vos objectifs,
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-0.5">•</span>
                                comprendre vos besoins,
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-0.5">•</span>
                                booster votre visibilité en ligne.
                            </li>
                        </ul>

                        <button
                            onClick={() => setStep('form')}
                            className="w-full py-3 px-6 rounded-xl bg-secondary text-white font-semibold text-base hover:opacity-90 transition flex items-center justify-center gap-2"
                        >
                            <CalendarCheck size={18} />
                            Réserver ma démo gratuite
                        </button>

                        <button
                            onClick={closePopup}
                            className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition"
                        >
                            Non merci, je passe mon tour
                        </button>
                    </div>
                )}

                {/* ── STEP 2 : booking form ────────────────────────────── */}
                {step === 'form' && (
                    <form onSubmit={handleSubmit} noValidate>
                        <h3 className="text-xl font-bold text-white mb-1 text-center">
                            📅 Choisissez un créneau
                        </h3>
                        <p className="text-slate-400 text-sm text-center mb-6">
                            Sélectionnez le jour et l'heure qui vous conviennent pour votre appel.
                        </p>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-1" htmlFor="pp-fullName">
                                Nom &amp; Prénom <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="pp-fullName"
                                name="fullName"
                                type="text"
                                placeholder="Jean Dupont"
                                value={form.fullName}
                                onChange={handleChange}
                                className={`w-full bg-slate-800 border ${errors.fullName ? 'border-red-500' : 'border-slate-600'} rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-secondary transition`}
                            />
                            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-1" htmlFor="pp-phone">
                                Téléphone <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="pp-phone"
                                name="phone"
                                type="tel"
                                placeholder="+33 6 00 00 00 00"
                                value={form.phone}
                                onChange={handleChange}
                                className={`w-full bg-slate-800 border ${errors.phone ? 'border-red-500' : 'border-slate-600'} rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-secondary transition`}
                            />
                            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Website (optional) */}
                        <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-1" htmlFor="pp-website">
                                Lien de votre site web{' '}
                                <span className="text-slate-500 font-normal">(facultatif)</span>
                            </label>
                            <input
                                id="pp-website"
                                name="website"
                                type="url"
                                placeholder="https://monsite.fr"
                                value={form.website}
                                onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-secondary transition"
                            />
                        </div>

                        {/* Date + Time in a row */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <label className="block text-sm text-slate-300 mb-1" htmlFor="pp-date">
                                    Date <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="pp-date"
                                    name="date"
                                    type="date"
                                    min={minBookingDate()}
                                    value={form.date}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-800 border ${errors.date ? 'border-red-500' : 'border-slate-600'} rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-secondary transition`}
                                />
                                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                            </div>
                            <div>
                                <label className="block text-sm text-slate-300 mb-1" htmlFor="pp-time">
                                    Créneau <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="pp-time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-800 border ${errors.time ? 'border-red-500' : 'border-slate-600'} rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-secondary transition`}
                                >
                                    <option value="">-- heure --</option>
                                    {TIME_SLOTS.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                            </div>
                        </div>

                        {/* Reassurance micro-text */}
                        <p className="text-slate-500 text-xs text-center mb-4">
                            🔒 Cet appel est gratuit et sans engagement. Vos données restent confidentielles.
                        </p>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-6 rounded-xl bg-secondary text-white font-semibold text-base hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <CalendarCheck size={18} />
                                    Confirmer mon rendez-vous
                                </>
                            )}
                        </button>
                    </form>
                )}

                {/* ── STEP 3 : confirmation ────────────────────────────── */}
                {step === 'confirmed' && (
                    <div className="text-center py-4">
                        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-5" />
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Rendez-vous confirmé ! 🎉
                        </h3>
                        <p className="text-slate-300 mb-2 leading-relaxed">
                            Merci <strong className="text-white">{form.fullName}</strong> !<br />
                            Nous vous appellerons le{' '}
                            <strong className="text-secondary">
                                {form.date &&
                                    new Date(form.date).toLocaleDateString('fr-FR', {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                    })}
                            </strong>{' '}
                            à <strong className="text-secondary">{form.time}</strong>.
                        </p>
                        <p className="text-slate-400 text-sm mt-4 mb-6">
                            Un email de confirmation sera envoyé à votre équipe. À très vite ! 👋
                        </p>
                        <button
                            onClick={closePopup}
                            className="py-2.5 px-8 rounded-xl border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 text-sm transition"
                        >
                            Fermer
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
