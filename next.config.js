/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["github.com"],
  },
  i18n: {
    locales: ["en-US","pt-BR"],
    defaultLocale: "en-US",
    localeDetection: false
  },
};

module.exports = nextConfig;
