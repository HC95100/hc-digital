// Fonction utilitaire pour combiner les classes CSS
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}

// Données des FAQ - Basées sur le workflow réel de l'agence
export const faqItems = [
    {
        question: 'Combien de temps pour avoir mon site en ligne ?',
        answer: '**1 à 4 semaines** selon la complexité du projet pour la création. Ensuite, **24-48h** pour la propagation DNS une fois le domaine acheté. Le processus est fluide et vous êtes informé à chaque étape.',
    },
    {
        question: "Est-ce que l'hébergement est gratuit ?",
        answer: "**Oui !** L'hébergement sur Vercel (plan Hobby) est **100% gratuit** et suffisant pour un site vitrine. En revanche, le **nom de domaine est payant** (environ **10€/an**) et vous l'achetez directement sur votre compte Vercel. C'est vous qui êtes propriétaire.",
    },
    {
        question: 'Est-ce que je suis propriétaire de mon site ?',
        answer: "**Oui, à 100%.** Le projet est transféré sur **votre propre compte Vercel**. Vous possédez le code source, le domaine, et l'hébergement. Aucune dépendance envers moi : vous êtes libre d'engager un autre développeur si vous le souhaitez.",
    },
    {
        question: 'Dois-je faire des manipulations techniques ?',
        answer: "**Très peu, et c'est guidé étape par étape.** Vous devrez : créer un compte Vercel (2 min), acheter votre domaine (3 min), et créer votre Google Search Console (3 min). Je vous envoie des emails détaillés avec screenshots pour chaque étape. **Total : environ 10 minutes d'actions.**",
    },
    {
        question: 'Quelle garantie après livraison ?',
        answer: "**7 jours de garantie** après livraison pour les corrections de bugs mineurs, problèmes d'affichage mobile, et fautes d'orthographe. Au-delà, ou pour des modifications importantes (nouvelles pages, changement de design), c'est sur devis.",
    },
    {
        question: 'Mon site sera-t-il visible sur Google ?',
        answer: "**Oui, c'est inclus !** Je configure votre Google Search Console, soumets votre sitemap, et crée des backlinks de qualité (Reddit, réseaux sociaux). L'indexation prend généralement **1 à 2 semaines** après la mise en ligne.",
    },
]

// Données des packs tarifaires - Alignées sur le workflow
export const pricingPlans = [
    {
        id: 'visibility',
        name: 'Pack Visibilité',
        price: '500€',
        duration: '7 jours',
        description: 'Livré en 7 jours',
        target: 'Pour artisans & indépendants',
        features: [
            'Site vitrine one-page professionnel',
            'Design responsive (mobile/tablette/desktop)',
            '100% personnalisé à votre image',
            'Optimisation SEO de base (meta tags, structure)',
            'Hébergement Vercel GRATUIT',
            'Certificat SSL/HTTPS inclus',
            'Transfert sur VOTRE compte (vous êtes propriétaire)',
            'Configuration Google Search Console',
        ],
        ideal: 'Artisans, Indépendants, Associations',
        popular: false,
    },
    {
        id: 'performance',
        name: 'Pack Performance',
        price: '700€',
        duration: '14 jours',
        description: 'Livré en 14 jours',
        target: 'Pour professions libérales & PME',
        features: [
            'Tout le Pack Visibilité +',
            'Site multi-pages (5-7 pages)',
            'Formulaires avancés (contact, devis, RDV)',
            'Animations fluides et design premium',
            'SEO poussé (Schema.org, sitemap, robots.txt)',
            'Création de backlinks (Reddit, réseaux)',
            'Suivi Core Web Vitals',
            'Garantie 7 jours post-livraison',
        ],
        ideal: 'Professions libérales, PME, Cabinets',
        popular: true,
    },
    {
        id: 'expert',
        name: 'Pack Expert',
        price: 'Sur devis',
        duration: 'Selon projet',
        description: 'Personnalisé',
        target: 'Sur-mesure & E-commerce',
        features: [
            'Tout le Pack Performance +',
            'Fonctionnalités sur-mesure',
            'Base de données personnalisée',
            'Authentification utilisateur',
            'Tableau de bord admin',
            'Intégrations API tierces',
            'Stratégie SEO long terme',
            'Maintenance & support dédié',
        ],
        ideal: 'E-commerce, SaaS, Plateformes',
        popular: false,
    },
]

// Données du processus - 7 étapes avec indication des interventions client
export const processSteps = [
    {
        step: 1,
        title: 'Prise de Contact',
        description: "Un email, un message ou un appel suffit. On échange 5 minutes sur votre projet, vos besoins et objectifs.",
        icon: 'phone',
        clientAction: false,
    },
    {
        step: 2,
        title: 'Rendez-vous',
        description: "Je vous présente ma méthode de travail, on discute de votre identité visuelle et je vous envoie un devis personnalisé.",
        icon: 'video',
        clientAction: true,
        clientActionText: 'Visio ou présentiel',
    },
    {
        step: 3,
        title: 'Validation & Lancement',
        description: "Vous signez le devis, réglez l'acompte (40%), et m'envoyez vos contenus (textes, photos, logo). Le chrono démarre !",
        icon: 'check',
        clientAction: true,
        clientActionText: 'Signature + envoi contenus',
    },
    {
        step: 4,
        title: 'Conception',
        description: "Création de votre site : design moderne, responsive (mobile/tablette/PC), optimisé pour Google. Vous recevez un lien de prévisualisation.",
        icon: 'palette',
        clientAction: false,
    },
    {
        step: 5,
        title: 'Validation Client',
        description: "Vous testez le site, me donnez vos retours, et on ajuste ensemble jusqu'à être tous deux satisfaits.",
        icon: 'eye',
        clientAction: true,
        clientActionText: 'Tests + retours',
    },
    {
        step: 6,
        title: 'Mise en Ligne',
        description: "Connexion du nom de domaine, mise en hébergement sur votre compte Vercel. Votre site est officiellement live !",
        icon: 'rocket',
        clientAction: true,
        clientActionText: 'Achat domaine (~10€/an)',
    },
    {
        step: 7,
        title: 'Indexation Google & Suivi',
        description: "Je soumets votre site à Google Search Console pour qu'il apparaisse dans les recherches (souvent sous 1 à 2 semaines).",
        icon: 'chart',
        clientAction: false,
    },
]
