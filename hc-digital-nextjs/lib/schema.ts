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
        telephone: siteConfig.phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Argenteuil',
            postalCode: '95100',
            addressRegion: 'Val-d\'Oise',
            addressCountry: 'FR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '48.9472',
            longitude: '2.2467',
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Argenteuil',
            },
            {
                '@type': 'AdministrativeArea',
                name: 'Val-d\'Oise',
            },
            {
                '@type': 'AdministrativeArea',
                name: 'Île-de-France',
            },
            {
                '@type': 'Country',
                name: 'France',
            },
        ],
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
        telephone: siteConfig.phone,
        url: siteConfig.url,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Argenteuil',
            addressLocality: 'Argenteuil',
            postalCode: '95100',
            addressRegion: 'Val-d\'Oise',
            addressCountry: 'FR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '48.9472',
            longitude: '2.2467',
        },
        areaServed: [
            { '@type': 'City', name: 'Argenteuil' },
            { '@type': 'City', name: 'Cergy' },
            { '@type': 'City', name: 'Pontoise' },
            { '@type': 'City', name: 'Sarcelles' },
            { '@type': 'City', name: 'Enghien-les-Bains' },
            { '@type': 'AdministrativeArea', name: 'Val-d\'Oise' },
            { '@type': 'AdministrativeArea', name: 'Île-de-France' },
            { '@type': 'Country', name: 'France' },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '47',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
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
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Argenteuil',
                postalCode: '95100',
                addressRegion: 'Val-d\'Oise',
                addressCountry: 'FR',
            },
        },
        areaServed: [
            { '@type': 'City', name: 'Argenteuil' },
            { '@type': 'AdministrativeArea', name: 'Val-d\'Oise' },
            { '@type': 'AdministrativeArea', name: 'Île-de-France' },
        ],
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
