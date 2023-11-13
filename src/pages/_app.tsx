import React, { createContext, FC } from 'react';
import { IntlProvider } from 'react-intl';
import { Locale, useLocale } from '@/hooks/useLocale';

import GtpScript from '../components/scripts/gtm';
import LinkedInScript from '../components/scripts/linkedin';
import MetaScript from '../components/scripts/meta';
import ControlChat from '../components/scripts/controlChat';

import '../styles/global.scss';

interface GlobalMeta {
  metaTitle: string;
  metaDescription: string;
  shareImage: string;
  article: boolean;
}

interface MyAppProps {
  Component: FC<any>;
  pageProps?: Record<string, any>;
}

export const GlobalContext = createContext<GlobalMeta | null>(null);

const globalMeta: GlobalMeta = {
  metaTitle: 'Simulator Company',
  metaDescription:
    'Explore market-leading software and technology digital twin. Become an intelligent, sustainable enterprise with the best in cloud, platform, and sustainability solutions – no matter your industry or size',
  shareImage: '',
  article: false,
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps = {} }) => {
  const { locale, messages } = useLocale();
  const isProduction = process.env.ENVIRONMENT === 'prod';

  return (
    <>
      {isProduction && <GtpScript />}
      {isProduction && <LinkedInScript />}
      {isProduction && <MetaScript />}
      <ControlChat />

      <IntlProvider locale={locale as Locale} messages={messages || {}}>
        <GlobalContext.Provider value={globalMeta}>
          {typeof Component === 'function' ? <Component {...pageProps} /> : null}
        </GlobalContext.Provider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
