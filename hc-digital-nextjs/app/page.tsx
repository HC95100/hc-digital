import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { generateLocalBusinessSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import Advantages from '@/components/sections/Advantages'
import Pricing from '@/components/sections/Pricing'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'

// Métadonnées SEO de la page d'accueil
export const metadata: Metadata = generatePageMetadata(
    'Création de Site Web à votre image',
    'Votre vitrine digitale haut de gamme. Agence web spécialisée en sites vitrines pour TPE/PME. Devis gratuit en 24h. À partir de 500€.',
    '/'
)

// Page d'accueil
export default function HomePage() {
    return (
        <>
            {/* Schéma LocalBusiness JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateLocalBusinessSchema()),
                }}
            />

            {/* Sections de la page */}
            <Hero />
            <Advantages />
            <Pricing />
            <Process />
            <FAQ />
            <ContactForm />
        </>
    )
}
