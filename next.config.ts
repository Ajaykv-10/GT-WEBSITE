import type { NextConfig } from 'next';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  // eslint: {
  //   dirs: ['src'],
  // },
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'group.gtholidays.in',
        pathname: '**',
      },
    ],

  },
  poweredByHeader: false,
  reactStrictMode: true,

};

// Initialize the Next-Intl plugin

// Conditionally enable bundle analysis
// if (process.env.ANALYZE === 'true') {
//   configWithPlugins = withBundleAnalyzer()(configWithPlugins);
// }

// // Conditionally enable Sentry configuration
// if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
//   configWithPlugins = withSentryConfig(configWithPlugins, {
//     // For all available options, see:
//     // https://www.npmjs.com/package/@sentry/webpack-plugin#options
//     org: process.env.SENTRY_ORGANIZATION,
//     project: process.env.SENTRY_PROJECT,

//     // Only print logs for uploading source maps in CI
//     silent: !process.env.CI,

//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     reactComponentAnnotation: {
//       enabled: true,
//     },

//     // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//     // This can increase your server load as well as your hosting bill.
//     // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//     // side errors will fail.
//     tunnelRoute: '/monitoring',

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,

//     // Disable Sentry telemetry
//     telemetry: false,
//   });
// }

const nextConfig = baseConfig;
export default nextConfig;
