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
  },
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash].[ext]',
        },
      }],
    });

    // Add the SVG rule
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|tsx)$/]
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
