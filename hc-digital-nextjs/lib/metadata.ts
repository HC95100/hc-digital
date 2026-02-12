import type { Metadata } from 'next'

// Configuration des métadonnées par défaut
export const siteConfig = {
    name: 'HC Digital',
    description: 'Agence web spécialisée dans la création de sites vitrines pour PME et artisans',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hc-digital-web.com',
    email: 'contact.chohabi@gmail.com',
    phone: '0652937631',
    locale: 'fr_FR',
}

// Métadonnées par défaut pour toutes les pages
export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} - Création de Sites Vitrines pour PME & Artisans`,
        template: `%s | ${siteConfig.name}`,
    },
    description: 'Votre vitrine digitale haut de gamme. Agence web spécialisée en sites vitrines pour TPE/PME. +47 clients satisfaits. Devis gratuit en 24h. À partir de 500€.',
    keywords: ['agence web', 'création site vitrine', 'site internet PME', 'site web artisan', 'développement web France', 'SEO local'],
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
        title: `${siteConfig.name} - Création de Sites Vitrines Premium`,
        description: 'Spécialistes des sites vitrines pour PME et artisans. Boostez votre visibilité et attirez de nouveaux clients. Devis gratuit !',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'HC Digital - Agence Web',
            },
        ],
    },
    icons: {
        icon: '/icon.png',
        apple: '/apple-icon.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} - Agence Web & Sites Vitrines Premium`,
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
