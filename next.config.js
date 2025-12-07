/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/holiday-trip',
  assetPrefix: '/holiday-trip',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/holiday-trip',
  },
}

module.exports = nextConfig
