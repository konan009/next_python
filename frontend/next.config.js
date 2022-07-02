/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/token',
        destination: 'http://localhost:8000/api/token',
      },
    ]
  }
}

module.exports = nextConfig
