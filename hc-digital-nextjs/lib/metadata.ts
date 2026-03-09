import type { Metadata } from 'next'

// Configuration des métadonnées par défaut
export const siteConfig = {
    name: 'HC Digital',
    description: 'Agence web spécialisée dans la création de sites vitrines pour PME et artisans',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hc-digital-web.com',
    email: 'contact.chohabi@gmail.com',
    phone: '0652937631',
    locale: 'fr_FR',
    city: 'Argenteuil',
    postalCode: '95100',
    department: 'Val-d\'Oise',
    region: 'Île-de-France',
    address: 'Argenteuil, 95100',
}

// Métadonnées par défaut pour toutes les pages
export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} — Agence Web | Création de Sites Vitrines`,
        template: `%s | ${siteConfig.name}`,
    },
    description: 'Agence web. Création de sites vitrines professionnels pour TPE, PME et artisans. Devis gratuit en 24h. À partir de 500€.',
    keywords: [
        'agence web',
        'création site internet',
        'création site vitrine',
        'site internet PME',
        'site internet TPE',
        'site internet artisan',
        'développeur web',
        'site web professionnel',
        'combien coûte un site internet',
        'site vitrine prix',
        'refonte site web',
        'agence web Argenteuil',
        'création site internet Val-d\'Oise',
        'créer un site web pour son entreprise',
        'SEO local',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: {
        canonical: siteConfig.url,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} — Agence Web`,
        description: 'Agence web. Spécialistes des sites vitrines pour PME et artisans. Boostez votre visibilité et attirez de nouveaux clients. Devis gratuit !',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'HC Digital — Agence Web',
            },
        ],
    },
    icons: {
        icon: '/icon.png',
        apple: '/apple-icon.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} — Agence Web`,
        description: 'Spécialistes des sites vitrines pour PME et artisans. Devis gratuit !',
        images: ['/images/og-image.jpg'],
    },
}

// Fonction pour générer les métadonnées d'une page
export function generatePageMetadata(
    title: string,
    description: string,
    path: string = '/'
): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: `${siteConfig.url}${path}`,
        },
        openGraph: {
            title,
            description,
            url: `${siteConfig.url}${path}`,
        },
        twitter: {
            title,
            description,
        },
    }
}
