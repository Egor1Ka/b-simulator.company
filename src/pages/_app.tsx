import React, { createContext, FC } from 'react';

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

const MyApp: FC<MyAppProps> = ({ Component, pageProps = {} }) => (
  <GlobalContext.Provider value={globalMeta}>
    <Component {...pageProps} />
  </GlobalContext.Provider>
);

export default MyApp;
