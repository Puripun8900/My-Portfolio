/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
}

export default nextConfig
