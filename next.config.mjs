/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tushi-nextjs.vercel.app',
        },
        {
          protocol:'https',
          hostname:'via.placeholder.com'
        }
      ],
    }
  };
  
  export default nextConfig;