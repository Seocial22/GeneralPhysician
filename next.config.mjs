/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },

  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  async headers() {
    return [
      {
        source: '/images/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects (){
      return[
        {
          source: '/services/chronic-disease-management',
          destination: '/services/chronic-disease',
          permanent: true,
        },
        {
          source: '/bookconsultationcd',
          destination: '/bookconsultation',
          permanent: true,
        }
      ]
  }
};

export default nextConfig;

