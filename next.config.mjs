/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
const nextConfig = {
    compress: true,
    output: 'export',
    assetPrefix: isProd ? '/static-app/' : '',
    basePath: isProd ? '/static-app' : '',
    images: {
        unoptimized: true
    },
};

export default nextConfig;
