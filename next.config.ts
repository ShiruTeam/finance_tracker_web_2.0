import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // Enable React strict mode for development
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {},

  // Security and SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "frame-src 'none'",
              "manifest-src 'self'",
              "media-src 'self'",
              "img-src 'self' data: blob: https: cdn.jsdelivr.net cdnjs.cloudflare.com unpkg.com tradingview.com",
              "font-src 'self' data: fonts.gstatic.com cdn.jsdelivr.net",
              "style-src 'self' 'unsafe-inline' https: fonts.googleapis.com cdn.jsdelivr.net cdnjs.cloudflare.com unpkg.com tradingview.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: cdn.jsdelivr.net cdnjs.cloudflare.com unpkg.com tradingview.com",
              "connect-src 'self' https: cdn.jsdelivr.net cdnjs.cloudflare.com unpkg.com tradingview.com",
            ].join('; '),
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Origin-Agent-Cluster", value: "?1" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), gyroscope=(), accelerometer=(), magnetometer=()" },
        ],
      },
    ];
  },

  // Sitemap and robots.txt routing
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
        {
          source: "/robots.txt",
          destination: "/api/robots",
        },
      ],
    };
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Remove trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
