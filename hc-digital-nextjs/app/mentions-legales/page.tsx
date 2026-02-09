import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/metadata'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'Mentions Légales',
    'Mentions légales du site HC Digital. Informations sur l\'éditeur, l\'hébergeur et la propriété intellectuelle.',
    '/mentions-legales'
)

// Page Mentions Légales
export default function MentionsLegalesPage() {
    return (
        <>
            <section className="pt-32 pb-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le site <strong>{siteConfig.url}</strong> est édité par :
                        </p>
                        <ul>
                            <li><strong>Responsable :</strong> Hamza Chohabi</li>
                            <li><strong>Adresse :</strong> Rue des Cloviers, 95100 Argenteuil</li>
                            <li><strong>Téléphone :</strong> 06 52 93 76 31</li>
                            <li><strong>Email :</strong> {siteConfig.email}</li>
                        </ul>

                        <h2>2. Directeur de la publication</h2>
                        <p>
                            Le directeur de la publication est <strong>Hamza Chohabi</strong>.
                        </p>

                        <h2>3. Hébergeur</h2>
                        <p>
                            Ce site est hébergé par :
                        </p>
                        <ul>
                            <li><strong>Vercel Inc.</strong></li>
                            <li>440 N Barranca Ave #4133</li>
                            <li>Covina, CA 91723, États-Unis</li>
                            <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
                        </ul>

                        <h2>4. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble du contenu du site {siteConfig.name} (textes, images, graphismes,
                            logo, icônes, etc.) est la propriété exclusive de {siteConfig.name},
                            à l'exception des marques, logos ou contenus appartenant à d'autres
                            sociétés partenaires ou auteurs.
                        </p>
                        <p>
                            Toute reproduction, distribution, modification, adaptation, retransmission
                            ou publication de ces différents éléments est strictement interdite sans
                            l'accord exprès par écrit de {siteConfig.name}.
                        </p>

                        <h2>5. Liens hypertextes</h2>
                        <p>
                            Le site peut contenir des liens hypertextes vers d'autres sites.
                            {siteConfig.name} n'exerce aucun contrôle sur ces sites et décline
                            toute responsabilité quant à leur contenu.
                        </p>

                        <h2>6. Limitation de responsabilité</h2>
                        <p>
                            {siteConfig.name} s'efforce de fournir des informations aussi précises
                            que possible. Toutefois, il ne pourra être tenu responsable des omissions,
                            des inexactitudes et des carences dans la mise à jour.
                        </p>

                        <h2>7. Droit applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français.
                            En cas de litige, les tribunaux français seront seuls compétents.
                        </p>

                        <p className="text-sm text-slate-500 mt-8">
                            Dernière mise à jour : Janvier 2026
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
