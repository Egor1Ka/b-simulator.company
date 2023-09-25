const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FOOTER_WEBHOOK_APGV_DEV: 'https://9laj7akynv.apigw.corezoid.com/dev',
    NEXT_PUBLIC_FOOTER_WEBHOOK_APGV_PROD: 'https://3iz07pcbi1.apigw.corezoid.com'
  },
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
