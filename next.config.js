/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'forsabackend.blob.core.windows.net',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
