import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Couleurs HC Digital
                primary: {
                    DEFAULT: '#0047AB',
                    dark: '#003380',
                },
                secondary: {
                    DEFAULT: '#00E5FF',
                    dark: '#00B2CC',
                },
                background: {
                    light: '#F8FAFC',
                    dark: '#0B1120',
                },
                surface: {
                    dark: '#151E32',
                },
            },
            fontFamily: {
                display: ['var(--font-jakarta)', 'sans-serif'],
                sans: ['var(--font-jakarta)', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.75rem',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(0, 229, 255, 0.3)',
                'glow-blue': '0 0 30px rgba(0, 71, 171, 0.4)',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-in-right': 'slideInRight 0.3s ease-out',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
