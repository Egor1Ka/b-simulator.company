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
}

interface MyAppProps {
  Component: FC<any>;
  pageProps?: Record<string, any>;
}

export const GlobalContext = createContext<GlobalMeta | null>(null);

const globalMeta: GlobalMeta = {
  metaTitle: 'Simulator Company | New site',
  metaDescription: 'The best site in the world',
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps = {} }) => {
  const { locale, messages } = useLocale();
  const isProduction = process.env.IS_PRODUCTION_BUILD;

  return (
    <>
      {isProduction && <GtpScript />}
      {isProduction && <LinkedInScript />}
      {isProduction && <MetaScript />}
      <ControlChat />

      <IntlProvider locale={locale as Locale} messages={messages}>
        <GlobalContext.Provider value={globalMeta}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
