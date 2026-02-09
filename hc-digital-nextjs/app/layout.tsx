import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/lib/metadata'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ExitPopup from '@/components/features/ExitPopup'
import StickyMobileCTA from '@/components/features/StickyMobileCTA'
import CookieBanner from '@/components/features/CookieBanner'

// Police Plus Jakarta Sans optimisée via next/font
const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jakarta',
    weight: ['400', '500', '600', '700', '800'],
})

// Configuration du Viewport (Mobile Friendly)
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#0F172A',
}

// Métadonnées par défaut du site
export const metadata: Metadata = defaultMetadata

// Layout principal de l'application
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${jakarta.variable} scroll-smooth`}>
            <head>
                {/* Schémas JSON-LD globaux */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateOrganizationSchema()),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateWebSiteSchema()),
                    }}
                />
            </head>
            <body className="font-sans antialiased">
                {/* Header sticky avec navigation */}
                <Header />

                {/* Contenu principal */}
                <main>{children}</main>

                {/* Footer */}
                <Footer />

                <StickyMobileCTA />
                <ExitPopup />
                <CookieBanner />
            </body>
        </html>
    )
}
