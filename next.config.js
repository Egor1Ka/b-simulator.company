const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
