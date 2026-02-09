import { cn } from '@/lib/utils'
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'

// Props pour Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

// Props pour Textarea
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}

// Styles communs
const baseStyles = 'w-full rounded-xl border bg-slate-800/50 text-white py-3 px-4 transition-all focus:bg-slate-800 focus:outline-none focus:ring-2'
const normalStyles = 'border-slate-600 focus:border-primary focus:ring-primary/20'
const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'

// Composant Input
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label htmlFor={id} className="block text-sm font-bold text-slate-300">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={cn(
                        baseStyles,
                        error ? errorStyles : normalStyles,
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

// Composant Textarea
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label htmlFor={id} className="block text-sm font-bold text-slate-300">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={id}
                    className={cn(
                        baseStyles,
                        error ? errorStyles : normalStyles,
                        'min-h-[120px] resize-y',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'

// Composant Select
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    label?: string
    error?: string
    options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, id, options, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label htmlFor={id} className="block text-sm font-bold text-slate-300">
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    id={id}
                    className={cn(
                        baseStyles,
                        error ? errorStyles : normalStyles,
                        className
                    )}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}
            </div>
        )
    }
)

Select.displayName = 'Select'
