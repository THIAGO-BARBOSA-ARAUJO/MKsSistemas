/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com'
            }
        ]
    }
};

export default nextConfig;
