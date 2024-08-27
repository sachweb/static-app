/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
     output: 'export',
    //  basePath: '/static-spp',
    //  assetPrefix: '/static-spp/',
     images: {
        unoptimized: true, // Use this to handle image paths properly in static builds
      },
};

module.exports = nextConfig
