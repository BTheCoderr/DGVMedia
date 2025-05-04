/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use app directory
  reactStrictMode: true,
  swcMinify: true,
  
  // Fix SSE issues
  experimental: {
    // Enable Server-Sent Events
    serverComponentsExternalPackages: ['next/server'],
    
    // For the force landing page feature
    appDir: true,
  },
  
  // Allow images from external domains if needed
  images: {
    domains: ['localhost'],
  },
  
  // Enable debugging if needed
  webpack: (config, { isServer }) => {
    // Config adjustments
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
    };
    
    return config;
  },
  
  // Make sure Next.js knows we want to use the app router
  output: 'standalone',
};

export default nextConfig; 