/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/waVapeBot',
  assetPrefix: '/waVapeBot/',
  trailingSlash: true,
  // Remove the webpack config since we don't need it
}

module.exports = nextConfig