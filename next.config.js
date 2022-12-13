/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'www.logodesign.net',
      'lh3.googleusercontent.com'
    ],
  },
}

module.exports = nextConfig
