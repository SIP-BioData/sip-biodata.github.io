/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
