'use client';

import React, { createContext, PropsWithChildren } from 'react';
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

type MyAppProps = PropsWithChildren;

export const GlobalContext = createContext<GlobalMeta | null>(null);

export const globalMeta: GlobalMeta = {
  metaTitle: 'Simulator Company',
  metaDescription:
    'Explore market-leading software and technology digital twin. Become an intelligent, sustainable enterprise with the best in cloud, platform, and sustainability solutions – no matter your industry or size',
  shareImage: '',
  article: false,
};

export default function MyApp({ children }: MyAppProps) {
  const { locale, messages } = useLocale();
  const isProduction = process.env.ENVIRONMENT === 'prod';
  if (typeof window !== 'undefined') {
    localStorage.setItem('v', '1.0.1');
  }
  return (
    <>
      {isProduction && <GtpScript />}
      {isProduction && <LinkedInScript />}
      {isProduction && <MetaScript />}
      <ControlChat />

      <IntlProvider locale={locale as Locale} messages={messages || {}}>
        <GlobalContext.Provider value={globalMeta}>{children}</GlobalContext.Provider>
      </IntlProvider>
    </>
  );
}
