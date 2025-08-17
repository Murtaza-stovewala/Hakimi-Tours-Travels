import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zaereen.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mgtourstravels.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

    