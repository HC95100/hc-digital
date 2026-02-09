# HC Digital - Site Vitrine Next.js 14+

Site vitrine professionnel pour HC Digital, agence web spécialisée dans la création de sites vitrines pour PME et artisans.

## 🚀 Technologies

- **Next.js 14+** avec App Router
- **TypeScript** pour la type safety
- **TailwindCSS** pour le styling
- **React Hook Form + Zod** pour les formulaires
- **Lucide React** pour les icônes

## 📦 Installation

```bash
# Cloner le projet
cd hc-digital-nextjs

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Variables d'environnement

Copier `.env.example` en `.env.local` et configurer :

```bash
cp .env.example .env.local
```

Variables disponibles :
- `NEXT_PUBLIC_SITE_URL` : URL publique du site
- `CONTACT_EMAIL` : Email de réception des formulaires

### Envoi d'emails

Le formulaire de contact est prêt à être connecté à un service d'envoi d'emails :
- **EmailJS** : [emailjs.com](https://emailjs.com)
- **Resend** : [resend.com](https://resend.com)
- **API Route Next.js** : créer `/app/api/contact/route.ts`

## 📁 Structure du projet

```
/app                    # Pages (App Router)
  /page.tsx            # Accueil
  /services            # Page services
  /realisations        # Portfolio
  /a-propos            # À propos
  /contact             # Formulaire contact
  /blog                # Blog
  /mentions-legales    # Mentions légales
  /politique-confidentialite

/components
  /ui                  # Composants UI (Button, Card, Input)
  /layout              # Header, Footer, MobileMenu
  /sections            # Hero, Pricing, Testimonials, FAQ, etc.
  /features            # ExitPopup, StickyMobileCTA

/lib                   # Utilitaires, métadonnées, schemas
```

## 🌐 Déploiement sur Vercel

```bash
# Build de production
npm run build

# OU déployer directement
npx vercel
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📊 SEO

- Metadata API Next.js sur chaque page
- Schema.org JSON-LD (Organization, LocalBusiness, Service, FAQPage)
- Open Graph + Twitter Cards
- Balises sémantiques HTML5
- Sitemap automatique

## 🎨 Personnalisation

### Couleurs (tailwind.config.ts)

```typescript
colors: {
  primary: '#0047AB',    // Bleu principal
  secondary: '#00E5FF',  // Cyan accent
}
```

### Témoignages, FAQ, Tarifs

Modifier les données dans `/lib/utils.ts` :
- `testimonials` : témoignages clients
- `faqItems` : questions/réponses
- `pricingPlans` : packs tarifaires

## 📝 License

© 2026 HC Digital. Tous droits réservés.
