/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // For a GitHub Pages user site, these remain empty.
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  output: 'export',
};

module.exports = withPWA(nextConfig);
