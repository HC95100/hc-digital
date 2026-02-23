import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { generateLocalBusinessSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import Advantages from '@/components/sections/Advantages'
import Pricing from '@/components/sections/Pricing'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import LocalSection from '@/components/sections/LocalSection'
import ContactForm from '@/components/sections/ContactForm'

// Métadonnées SEO de la page d'accueil
export const metadata: Metadata = generatePageMetadata(
    'Agence Web à Argenteuil (95) — Création de Site Internet pour PME/TPE',
    'Agence web basée à Argenteuil (95100). Création de sites vitrines professionnels pour TPE, PME et artisans en Val-d\'Oise et Île-de-France. Devis gratuit en 24h. À partir de 500€.',
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
            <LocalSection />
            <ContactForm />
        </>
    )
}

