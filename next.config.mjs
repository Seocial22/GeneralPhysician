/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

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

