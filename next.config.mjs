/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gastrotools.dk",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  output: "export", // Angiver eksport til statisk HTML
};

export default nextConfig;
