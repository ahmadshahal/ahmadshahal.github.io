/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: { unoptimized: true }, // Optional, if you're using next/image
  basePath: '/<REPO_NAME>',      // Important for GitHub Pages
  assetPrefix: '/<REPO_NAME>',   // Optional, helpful for asset URLs
}

export default nextConfig
