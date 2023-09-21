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
  env: {
    IS_PRODUCTION_BUILD: process.env.NODE_ENV === 'production'
  }
};

module.exports = nextConfig;
