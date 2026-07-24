import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "/image/**",
      },
    ],
  },
  // Daily Wisdom was renamed Daily Proverb; keep old links working.
  async redirects() {
    return [
      {
        source: "/apps/daily-wisdom/:path*",
        destination: "/apps/daily-proverb/:path*",
        permanent: true,
      },
      {
        source: "/apps/daily-wisdom",
        destination: "/apps/daily-proverb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
