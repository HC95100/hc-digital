/** @type {import('next').NextConfig} */
const nextConfig = {
    // SEO: Désactiver les trailing slashes pour éviter les redirections automatiques
    // qui empêchent Google d'indexer les pages (GSC: "Page avec redirection")
    trailingSlash: false,
    skipTrailingSlashRedirect: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

module.exports = nextConfig
