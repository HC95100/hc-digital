import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/metadata'

// Métadonnées SEO
export const metadata: Metadata = generatePageMetadata(
    'Politique de Confidentialité',
    'Politique de confidentialité et RGPD du site HC Digital. Informations sur la collecte et l\'utilisation de vos données personnelles.',
    '/politique-confidentialite'
)

// Page Politique de Confidentialité
export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <section className="pt-32 pb-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
                        Politique de Confidentialité
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p>
                            La présente politique de confidentialité définit et vous informe de la
                            manière dont {siteConfig.name} utilise et protège les informations que
                            vous nous transmettez.
                        </p>

                        <h2>1. Données collectées</h2>
                        <p>
                            Nous collectons les données suivantes via notre formulaire de contact :
                        </p>
                        <ul>
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone (optionnel)</li>
                            <li>Message et informations sur votre projet</li>
                        </ul>

                        <h2>2. Utilisation des données</h2>
                        <p>
                            Les données collectées sont utilisées exclusivement pour :
                        </p>
                        <ul>
                            <li>Répondre à vos demandes de devis et questions</li>
                            <li>Vous contacter dans le cadre de votre projet</li>
                            <li>Améliorer nos services</li>
                        </ul>
                        <p>
                            Vos données ne sont jamais vendues, échangées ou louées à des tiers.
                        </p>

                        <h2>3. Durée de conservation</h2>
                        <p>
                            Vos données sont conservées pendant une durée maximale de 3 ans à
                            compter de notre dernier contact, sauf obligation légale contraire.
                        </p>

                        <h2>4. Sécurité des données</h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité techniques et
                            organisationnelles appropriées pour protéger vos données contre
                            toute perte, utilisation abusive ou accès non autorisé.
                        </p>

                        <h2>5. Vos droits (RGPD)</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD),
                            vous disposez des droits suivants :
                        </p>
                        <ul>
                            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                            <li><strong>Droit de rectification :</strong> demander la correction de vos données</li>
                            <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, contactez-nous à : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                        </p>

                        <h2>6. Cookies</h2>
                        <p>
                            Ce site n'utilise pas de cookies de tracking ou publicitaires.
                            Seuls des cookies techniques essentiels au fonctionnement du site
                            peuvent être utilisés.
                        </p>

                        <h2>7. Modifications</h2>
                        <p>
                            Nous nous réservons le droit de modifier cette politique de
                            confidentialité à tout moment. Les modifications seront publiées
                            sur cette page.
                        </p>

                        <h2>8. Contact</h2>
                        <p>
                            Pour toute question concernant cette politique de confidentialité,
                            vous pouvez nous contacter à : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
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
