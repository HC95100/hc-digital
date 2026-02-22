import type { Metadata } from 'next'

// Configuration des métadonnées par défaut
export const siteConfig = {
    name: 'HC Digital',
    description: 'Agence web basée à Argenteuil, spécialisée dans la création de sites vitrines pour PME et artisans en Val-d\'Oise et Île-de-France',
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
        default: `${siteConfig.name} — Agence Web à Argenteuil (95) | Création de Sites Vitrines`,
        template: `%s | ${siteConfig.name} — Argenteuil`,
    },
    description: 'Agence web à Argenteuil (95). Création de sites vitrines professionnels pour TPE, PME et artisans en Val-d\'Oise et Île-de-France. Devis gratuit en 24h. À partir de 500€.',
    keywords: [
        'agence web Argenteuil',
        'création site internet Argenteuil',
        'site vitrine Argenteuil 95',
        'agence web Val-d\'Oise',
        'création site vitrine Île-de-France',
        'site internet PME Argenteuil',
        'développeur web Argenteuil',
        'agence web 95100',
        'site web artisan Argenteuil',
        'création site internet Val-d\'Oise',
        'agence web',
        'création site vitrine',
        'site internet PME',
        'développement web France',
        'SEO local',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} — Agence Web à Argenteuil (95)`,
        description: 'Agence web à Argenteuil. Spécialistes des sites vitrines pour PME et artisans en Val-d\'Oise. Boostez votre visibilité et attirez de nouveaux clients. Devis gratuit !',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'HC Digital — Agence Web à Argenteuil (95)',
            },
        ],
    },
    icons: {
        icon: '/icon.png',
        apple: '/apple-icon.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} — Agence Web à Argenteuil (95)`,
        description: 'Spécialistes des sites vitrines pour PME et artisans en Val-d\'Oise. Devis gratuit !',
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
