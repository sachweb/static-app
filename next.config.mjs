/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/static-app/' : '',
    basePath: isProd ? '/static-app' : '',
    images: {
        unoptimized: true
    },
};

export default nextConfig;
