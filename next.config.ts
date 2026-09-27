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
      // Hoop Slate's App Store listing links here for its privacy policy and
      // support URL; the real pages live under /hoopsconnect.
      {
        source: "/hoops-connect/:path*",
        destination: "/hoopsconnect/:path*",
        permanent: true,
      },
      {
        source: "/apps/hoops-connect/support",
        destination: "/hoopsconnect/support",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
