import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/avilyre.png",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "avilysilva",
  project: "avilysilva",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
  automaticVercelMonitors: true,
});
