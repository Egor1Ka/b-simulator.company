const path = require('path');
const dotenv = require('dotenv');

const loadEnvConfig = () => {
  const environment = process.env.ENVIRONMENT || 'dev';
  const envFilePath = path.resolve(__dirname, `.env.${environment}`);
  const result = dotenv.config({ path: envFilePath });

  if (result.error) {
    throw new Error(`Failed to load environment variables from ${envFilePath}`);
  }

  console.log(`Environment variables loaded from: ${envFilePath}`);

  return result.parsed;
};

const envs = loadEnvConfig();

const nextConfig = {
  reactStrictMode: true,
  env: {
    IS_PRODUCTION_BUILD: envs.ENVIRONMENT === 'prod',
    NEXT_PUBLIC_CONTAT_US_SDU_LINK: envs.NEXT_PUBLIC_CONTAT_US_SDU_LINK,
    NEXT_PUBLIC_CALENDLY_WORKSHOP_LINK: envs.NEXT_PUBLIC_CALENDLY_WORKSHOP_LINK,
    NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK: envs.NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK,
    NEXT_PUBLIC_REQUEST_EMAIL_APGV: envs.NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK,
    NEXT_PUBLIC_CONTROL_LINK: envs.NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK,
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
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
