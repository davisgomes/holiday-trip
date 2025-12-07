/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/holiday-trip',
  assetPrefix: '/holiday-trip',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
