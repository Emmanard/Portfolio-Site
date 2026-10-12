/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
};

export default nextConfig;
