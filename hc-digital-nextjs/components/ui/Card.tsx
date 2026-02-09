import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    glass?: boolean
}

// Composant Card réutilisable
export default function Card({ children, className, hover = true, glass = false }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-3xl p-6 md:p-8',
                glass
                    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                    : 'bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 shadow-xl',
                hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl',
                className
            )}
        >
            {children}
        </div>
    )
}

// Variante pour les cards de prix
export function PricingCard({
    children,
    featured = false,
    className,
}: {
    children: ReactNode
    featured?: boolean
    className?: string
}) {
    return (
        <div
            className={cn(
                'relative rounded-3xl p-8 transition-all duration-300',
                featured
                    ? 'bg-slate-900 dark:bg-black border border-secondary/50 shadow-2xl md:-translate-y-6 z-10'
                    : 'bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 shadow-xl hover:border-primary hover:-translate-y-2',
                className
            )}
        >
            {featured && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                    <span className="bg-secondary text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-neon">
                        Best Seller
                    </span>
                </div>
            )}
            {children}
        </div>
    )
}
