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
  shareImage: string,
  article: boolean,
  metaKeywords:string,
}

interface MyAppProps {
  Component: FC<any>;
  pageProps?: Record<string, any>;
}

export const GlobalContext = createContext<GlobalMeta | null>(null);

const globalMeta: GlobalMeta = {
  metaTitle: 'Simulator Company',
  metaDescription: 'Explore market-leading software and technology digital twin. Become an intelligent, sustainable enterprise with the best in cloud, platform, and sustainability solutions – no matter your industry or size',
  shareImage: '',
  article: false,
  metaKeywords: 'CRM, Customer Experience, customer relationship management, crm experience, crm technologies, customer experience cx, cx customer experience, crm cloud, customer experience solutions, customer experience B2B, Cloud ER'
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
