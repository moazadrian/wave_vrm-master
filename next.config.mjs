/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['bookingenginecdn.hostaway.com', 'capture.dropbox.com', 'ibb.co'],
  },
};

export default nextConfig;
