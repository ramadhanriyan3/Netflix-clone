/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: "NEXT-SECRET",
    NEXTAUTH_JWT_SECRET: "NEXT-JWT",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/*",
      },
    ],
  },
};

export default nextConfig;
