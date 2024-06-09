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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/*",
      },
    ],
  },
};

export default nextConfig;

// async headers() {
//   return [
//     {
//       source: "/home",
//       headers: [
//         {
//           key: "Cache-Control",
//           value: "no-cache, no-store, must-revalidate",
//         },
//       ],
//     },
//   ];
// },
