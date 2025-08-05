import type { NextConfig } from "next";

function getBaseUrl() {
  return "https://example.com"
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect if Host-Header is not primary Hostname
      {
        source: '/:path*',
        missing: [
          {
            type: 'host',
            value: `(example.com|localhost)`,
          },
        ],
        permanent: false,
        destination: getBaseUrl() + "/:path*",
      },
    ]
  }
};

export default nextConfig;
