import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

// Variantes du bouton
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    isLoading?: boolean
    icon?: React.ReactNode
}

// Styles par variante
const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white shadow-lg shadow-primary/25',
    secondary: 'bg-secondary hover:bg-secondary-dark text-slate-900 shadow-neon',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-slate-600 hover:text-primary hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
}

// Styles par taille
const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

// Composant Button réutilisable
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, icon, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300',
                    'transform hover:-translate-y-0.5 active:translate-y-0',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Envoi...</span>
                    </>
                ) : (
                    <>
                        {children}
                        {icon}
                    </>
                )}
            </button>
        )
    }
)

Button.displayName = 'Button'

export default Button
