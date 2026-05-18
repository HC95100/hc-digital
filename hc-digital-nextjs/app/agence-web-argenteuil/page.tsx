import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import Pricing from '@/components/sections/Pricing'
import SiteCarousel from '@/components/features/SiteCarousel'
import Process from '@/components/sections/Process'
import LocalSection from '@/components/sections/LocalSection'
import { ArrowRight, MapPin, CheckCircle, ChevronDown, Palette, Code2, LayoutDashboard, TrendingUp, Server, Globe } from 'lucide-react'

// Métadonnées SEO
export const metadata: Metadata = {
    title: 'Agence Web à Argenteuil (95) — Création de Site Internet | HC Digital',
    description: "Agence web basée à Argenteuil (95100). Création de sites vitrines pour PME, artisans et indépendants du Val-d'Oise. Devis gratuit en 24h. À partir de 500€.",
    alternates: {
        canonical: `${siteConfig.url}/agence-web-argenteuil`,
    },
    openGraph: {
        title: 'Agence Web à Argenteuil (95) — Création de Site Internet | HC Digital',
        description: "Agence web basée à Argenteuil (95100). Création de sites vitrines pour PME, artisans et indépendants du Val-d'Oise. Devis gratuit en 24h. À partir de 500€.",
        url: `${siteConfig.url}/agence-web-argenteuil`,
    },
    twitter: {
        title: 'Agence Web à Argenteuil (95) — Création de Site Internet | HC Digital',
        description: "Agence web basée à Argenteuil (95100). Création de sites vitrines pour PME, artisans et indépendants du Val-d'Oise. Devis gratuit en 24h. À partir de 500€.",
    },
}

// Schema LocalBusiness spécifique à cette page
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HC Digital — Agence Web Argenteuil',
    description: "Agence web basée à Argenteuil spécialisée dans la création de sites vitrines pour PME, artisans et indépendants du Val-d'Oise.",
    url: `${siteConfig.url}/agence-web-argenteuil`,
    telephone: '+33652937631',
    email: siteConfig.email,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Argenteuil',
        postalCode: '95100',
        addressRegion: "Val-d'Oise",
        addressCountry: 'FR',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.9472,
        longitude: 2.2467,
    },
    areaServed: [
        { '@type': 'City', name: 'Argenteuil' },
        { '@type': 'City', name: 'Bezons' },
        { '@type': 'City', name: 'Colombes' },
        { '@type': 'City', name: 'Sartrouville' },
        { '@type': 'City', name: 'Cormeilles-en-Parisis' },
        { '@type': 'City', name: 'Cergy' },
        { '@type': 'City', name: 'Pontoise' },
        { '@type': 'AdministrativeArea', name: "Val-d'Oise" },
        { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    ],
    priceRange: '€€',
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
    },
    sameAs: [],
}

// FAQ spécifique à Argenteuil
const argenteuilFaqs = [
    {
        question: "Combien coûte la création d'un site internet à Argenteuil ?",
        answer: "Chez HC Digital, nos tarifs sont transparents et fixes. Le Pack Visibilité démarre à 500€ pour un site vitrine one-page. Le Pack Performance est à 700€ pour un site multi-pages avec SEO avancé. Et le Pack Expert est sur devis pour les projets sur-mesure. L'hébergement est gratuit (Vercel), et le seul coût récurrent est le nom de domaine, soit environ 10€ par an.",
    },
    {
        question: 'Est-ce que HC Digital est vraiment basé à Argenteuil ?',
        answer: "Oui. HC Digital est implanté à Argenteuil (95100), en Val-d'Oise. Nous ne sommes pas une agence parisienne qui prétend couvrir Argenteuil — nous y vivons et y travaillons. Cela nous permet de proposer des rendez-vous en personne et de comprendre les enjeux des entrepreneurs locaux.",
    },
    {
        question: 'Peut-on se rencontrer en personne pour discuter de mon projet ?',
        answer: "Absolument. Nous privilégions les rendez-vous en présentiel avec nos clients d'Argenteuil et des communes voisines. Un premier échange de 15 à 20 minutes suffit pour cadrer votre projet, définir vos besoins et recevoir un devis personnalisé. Nous pouvons aussi travailler en visio si vous préférez.",
    },
    {
        question: "Mon site sera-t-il visible sur Google pour les recherches à Argenteuil ?",
        answer: "C'est notre priorité. Nous optimisons chaque site pour le référencement local : balises meta ciblées sur votre ville et votre activité, données structurées (Schema.org), inscription sur Google Search Console, création de backlinks, et un contenu rédigé pour capter les recherches locales comme \"plombier Argenteuil\" ou \"avocat Val-d'Oise\".",
    },
    {
        question: "Travaillez-vous uniquement avec les entreprises d'Argenteuil ?",
        answer: "Non. Argenteuil est notre base, mais nous intervenons dans tout le Val-d'Oise, en Île-de-France et partout en France en distanciel. Nos clients se trouvent aussi bien à Bezons, Colombes et Cergy qu'à Lyon ou Marseille.",
    },
    {
        question: 'En combien de temps mon site sera-t-il en ligne ?',
        answer: "Entre 1 et 4 semaines selon la formule choisie. Le Pack Visibilité (site one-page) est généralement livré en 7 jours ouvrés. Le Pack Performance (multi-pages) en 14 jours ouvrés. L'indexation Google intervient dans les 1 à 2 semaines suivant la mise en ligne.",
    },
    {
        question: 'Est-ce que je suis propriétaire de mon site ?',
        answer: "Oui, à 100%. Le projet est transféré sur votre propre compte Vercel. Vous possédez le code source, le nom de domaine et l'hébergement. Si demain vous souhaitez travailler avec un autre développeur, vous êtes totalement libre de le faire.",
    },
]

// Avantages listés dans "Ce que nous faisons"
const services = [
    'Création de sites vitrines pour artisans et indépendants',
    'Sites multi-pages pour PME et professions libérales',
    'Optimisation SEO pour apparaître dans les résultats locaux',
    'Formulaires de contact et de devis intégrés',
    'Configuration Google Search Console',
    'Design responsive : mobile, tablette et ordinateur',
]

// Features pour la section sur-mesure
const surMesureFeatures = [
    {
        Icon: Palette,
        title: 'Design web personnalisé',
        desc: "Un site web qui vous ressemble, conçu à partir de votre charte graphique et de votre identité visuelle.",
    },
    {
        Icon: Code2,
        title: 'Développement sur-mesure',
        desc: "Compatible mobile, tablette et desktop avec les technologies modernes Next.js et React.",
    },
    {
        Icon: LayoutDashboard,
        title: 'Propriété totale',
        desc: "Le code source, le domaine et l'hébergement sont à votre nom. Vous restez libre et indépendant.",
    },
    {
        Icon: TrendingUp,
        title: 'Visibilité SEO garantie',
        desc: "Votre site optimisé et indexé rapidement sur Google grâce au référencement local ciblé.",
    },
    {
        Icon: Server,
        title: 'Hébergement gratuit',
        desc: "Votre site hébergé gratuitement sur Vercel — sans frais mensuels cachés, sans abonnement.",
    },
    {
        Icon: Globe,
        title: 'Nom de domaine ~10€/an',
        desc: "Le seul coût récurrent : votre nom de domaine personnalisé, renouvelable pour environ 10€ par an.",
    },
]

// Page Agence Web Argenteuil
export default function AgenceWebArgenteuil() {
    return (
        <>
            {/* Schema LocalBusiness JSON-LD */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* Schema FAQ JSON-LD */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(argenteuilFaqs)) }}
            />

            {/* Schema Breadcrumb JSON-LD */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: 'Accueil', url: siteConfig.url },
                            { name: 'Agence Web Argenteuil', url: `${siteConfig.url}/agence-web-argenteuil` },
                        ])
                    ),
                }}
            />

            {/* ── HERO — 2 colonnes : texte gauche + carousel droite ── */}
            <section className='pt-32 pb-16 bg-background-dark relative overflow-hidden'>
                <div className='absolute inset-0 grid-pattern opacity-10' />
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        {/* Colonne gauche — texte aligné à gauche */}
                        <div>
                            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6'>
                                <MapPin size={14} />
                                Argenteuil (95100) — Val-d&apos;Oise
                            </div>
                            <h1 className='text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight'>
                                Agence Web à Argenteuil —{' '}
                                <span className='text-primary'>Création de Site Internet</span>{' '}
                                pour PME &amp; Artisans
                            </h1>
                            <p className='text-lg text-slate-300 mb-10 leading-relaxed'>
                                HC Digital est une agence web basée à Argenteuil (95100), spécialisée dans la
                                création de sites vitrines professionnels pour les PME, TPE, artisans et
                                indépendants du Val-d&apos;Oise. Nous concevons des sites modernes, rapides et
                                optimisés pour Google — conçus pour transformer vos visiteurs en clients. Devis
                                gratuit en 24h, à partir de 500€.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <Link
                                    href='/contact'
                                    className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition text-base'
                                >
                                    Demander un devis gratuit
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href='/services'
                                    className='inline-flex items-center justify-center px-8 py-4 bg-white/5 text-slate-300 font-bold rounded-xl border border-white/10 hover:bg-white/10 transition text-base'
                                >
                                    Découvrir nos offres
                                </Link>
                            </div>
                        </div>

                        {/* Colonne droite — carousel mockups */}
                        <div>
                            <SiteCarousel />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUR-MESURE — section de transition ── */}
            <section className='py-16 sm:py-24 bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
                        {/* Gauche — titre + CTA */}
                        <div>
                            <span className='inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] border-b-2 border-primary pb-1 mb-6'>
                                Sur-mesure
                            </span>
                            <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight'>
                                Boostons votre présence en ligne avec un site internet clé-en-main qui{' '}
                                <span className='text-primary'>VOUS</span> ressemble, performant et
                                sur-mesure&hellip;
                            </h2>
                            <Link
                                href='/contact'
                                className='inline-flex items-center px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition text-sm uppercase tracking-wide'
                            >
                                Demander un devis site web
                            </Link>
                        </div>

                        {/* Droite — grille 2×3 de features */}
                        <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
                            {surMesureFeatures.map(({ Icon, title, desc }) => (
                                <div key={title} className='flex flex-col items-center text-center gap-3'>
                                    <Icon
                                        size={40}
                                        strokeWidth={1.5}
                                        className='text-slate-700 dark:text-slate-300'
                                    />
                                    <h3 className='font-bold text-slate-900 dark:text-white text-sm leading-snug'>
                                        {title}
                                    </h3>
                                    <p className='text-slate-500 dark:text-slate-400 text-xs leading-relaxed'>
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── POURQUOI UNE AGENCE LOCALE ── */}
            <section className='py-16 sm:py-24 bg-slate-50 dark:bg-surface-dark'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6'>
                    <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8'>
                        Pourquoi faire appel à une agence web locale à Argenteuil ?
                    </h2>
                    <div className='space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
                        <p>
                            Argenteuil est la première ville du Val-d&apos;Oise avec plus de 110&nbsp;000 habitants
                            et plus de 9&nbsp;000 établissements privés. La ville est un véritable bassin
                            économique, labellisée &quot;Territoire d&apos;Industrie&quot; par l&apos;État, avec trois parcs
                            d&apos;activités économiques et un tissu dense de PME, de commerces et d&apos;artisans.
                            Pourtant, une grande partie de ces entreprises n&apos;ont toujours pas de site internet
                            — ou possèdent un site vieillissant qui ne reflète pas la qualité de leurs services.
                        </p>
                        <p>
                            C&apos;est là qu&apos;intervient HC Digital. En tant qu&apos;agence implantée directement à
                            Argenteuil, nous comprenons les enjeux des entrepreneurs locaux. Nous savons qu&apos;un
                            plombier d&apos;Argenteuil, un salon de coiffure du centre-ville ou un cabinet comptable
                            du quartier Val d&apos;Argent n&apos;ont pas les mêmes besoins qu&apos;une startup parisienne.
                            Nos solutions sont pensées pour les réalités des petites entreprises : des budgets
                            maîtrisés, un site livré rapidement, et une visibilité concrète sur Google.
                        </p>
                        <p>
                            Travailler avec une{' '}
                            <Link href='/a-propos' className='text-primary hover:underline font-medium'>
                                agence web locale
                            </Link>
                            , c&apos;est aussi la possibilité de se rencontrer en personne. Pas besoin de traverser
                            Paris : on peut se retrouver à Argenteuil pour un rendez-vous découverte, échanger
                            sur votre projet autour d&apos;un café, et avancer ensemble en toute confiance. C&apos;est une
                            proximité que les grandes agences parisiennes ne peuvent tout simplement pas offrir.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CE QUE NOUS FAISONS ── */}
            <section className='py-16 sm:py-24 bg-background-light dark:bg-background-dark'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6'>
                    <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8'>
                        Ce que nous faisons pour les entreprises d&apos;Argenteuil
                    </h2>
                    <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-10'>
                        Nous concevons des sites internet clé en main, entièrement personnalisés et optimisés
                        pour le référencement naturel (SEO). Chaque site est développé avec des technologies
                        modernes (Next.js, React) et hébergé gratuitement sur Vercel — et surtout, vous en êtes
                        l&apos;unique propriétaire. Pas d&apos;abonnement, pas de dépendance : le code source, le domaine
                        et l&apos;hébergement sont à votre nom.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className='flex items-start gap-3 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-700'
                            >
                                <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                                <span className='text-slate-700 dark:text-slate-300 text-sm'>{s}</span>
                            </div>
                        ))}
                    </div>
                    <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
                        Que vous soyez électricien, avocat, agent immobilier, coiffeur, coach sportif ou gérant
                        d&apos;une PME à Argenteuil — nous avons un pack adapté à votre activité et à votre budget.
                        Découvrez également notre{' '}
                        <Link
                            href='/blog/creation-site-internet-artisans-guide'
                            className='text-primary hover:underline font-medium'
                        >
                            guide complet pour les artisans
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* ── PACKS TARIFS ── */}
            <Pricing />

            {/* ── POURQUOI UN SITE INDISPENSABLE ── */}
            <section className='py-16 sm:py-24 bg-slate-900'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6'>
                    <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-8'>
                        Pourquoi un site internet est devenu indispensable à Argenteuil
                    </h2>
                    <div className='space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed'>
                        <p>
                            Le comportement des consommateurs a changé. Aujourd&apos;hui, 97% des Français utilisent
                            internet pour rechercher un professionnel à proximité. Quand un habitant
                            d&apos;Argenteuil cherche &quot;plombier Argenteuil&quot; ou &quot;avocat Val-d&apos;Oise&quot; sur Google, les
                            entreprises sans site internet sont tout simplement invisibles. Elles perdent des
                            clients chaque jour — au profit de concurrents qui ont investi dans leur présence en
                            ligne.
                        </p>
                        <p>
                            Un site vitrine professionnel ne se contente pas d&apos;exister : il travaille pour vous
                            24 heures sur 24, 7 jours sur 7. Il rassure vos prospects en affichant vos services,
                            vos tarifs et vos coordonnées. Il vous positionne sur Google grâce au référencement
                            naturel. Et il vous distingue de la concurrence en renvoyant une image sérieuse et
                            moderne de votre activité.
                        </p>
                        <p>
                            À Argenteuil, le tissu économique est dynamique : artisans du bâtiment, commerçants
                            du centre-ville, professions libérales du quartier Val d&apos;Argent, PME des parcs
                            d&apos;activités des Berges de Seine… Toutes ces entreprises ont un point commun — elles
                            ont besoin d&apos;être visibles en ligne pour continuer à se développer. Et avec des packs
                            à partir de 500€, la création d&apos;un site professionnel est désormais accessible à tous
                            les budgets.
                        </p>
                        <p>
                            Pour en savoir plus sur comment choisir votre agence, consultez notre article{' '}
                            <Link
                                href='/blog/comment-choisir-agence-web'
                                className='text-primary hover:underline font-medium'
                            >
                                comment choisir son agence web
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ZONE D'INTERVENTION ── */}
            <LocalSection />

            {/* ── PROCESSUS ── */}
            <Process />

            {/* ── FAQ ── */}
            <section className='py-16 sm:py-24 bg-slate-50 dark:bg-surface-dark'>
                <div className='max-w-3xl mx-auto px-4 sm:px-6'>
                    <div className='text-center mb-12'>
                        <span className='text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block'>
                            FAQ
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4'>
                            Questions fréquentes — Création de site internet à Argenteuil
                        </h2>
                    </div>
                    <div className='space-y-3'>
                        {argenteuilFaqs.map((faq, i) => (
                            <details
                                key={i}
                                className='bg-white dark:bg-background-dark rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden group'
                            >
                                <summary className='flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none font-bold text-slate-900 dark:text-white'>
                                    <span className='pr-4'>{faq.question}</span>
                                    <ChevronDown
                                        size={22}
                                        className='text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180'
                                    />
                                </summary>
                                <div className='px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 dark:text-slate-300 leading-relaxed'>
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className='py-16 sm:py-20 bg-primary'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
                        Prêt à donner de la visibilité à votre entreprise à Argenteuil ?
                    </h2>
                    <p className='text-white/80 text-lg mb-10 max-w-xl mx-auto'>
                        Ne laissez plus vos concurrents capter les clients qui vous cherchent sur Google.
                        Recevez un devis gratuit sous 24 heures.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center gap-4'>
                        <Link
                            href='/contact'
                            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition text-base'
                        >
                            Demander mon devis gratuit
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href={`https://wa.me/33${siteConfig.phone.slice(1)}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition text-base'
                        >
                            Nous appeler sur WhatsApp au {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
