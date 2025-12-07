/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add basePath if your repo name is not the root domain
  // basePath: '/holiday-trip',
  // Uncomment the line above if deploying to username.github.io/holiday-trip
}

module.exports = nextConfig
