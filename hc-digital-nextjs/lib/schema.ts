import { siteConfig } from './metadata'

// Schéma Organization (toutes les pages)
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
        },
    }
}

// Schéma LocalBusiness (accueil + contact)
export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        image: `${siteConfig.url}/images/logo.png`,
        priceRange: '500€ - 2000€',
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
        },
        areaServed: 'FR',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '47',
        },
    }
}

// Schéma Service (page services)
export function generateServiceSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Création de sites vitrines',
        provider: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
        offers: [
            {
                '@type': 'Offer',
                name: 'Pack Visibilité',
                description: 'Site vitrine clé en main pour artisans et indépendants',
                price: '500',
                priceCurrency: 'EUR',
            },
            {
                '@type': 'Offer',
                name: 'Pack Performance',
                description: 'Site multi-pages avec fonctionnalités avancées',
                price: '700',
                priceCurrency: 'EUR',
            },
            {
                '@type': 'Offer',
                name: 'Pack Expert',
                description: 'Solution sur-mesure avec fonctionnalités complexes',
                price: '0',
                priceCurrency: 'EUR',
            },
        ],
    }
}

// Schéma FAQPage
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

// Schéma BreadcrumbList
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

// Schéma WebSite avec SearchAction
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: siteConfig.url,
        name: siteConfig.name,
    }
}
