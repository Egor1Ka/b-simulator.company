import { notFound } from 'next/navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getRequestConfig } from 'next-intl/server';

const locales = ['en'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../lang/${locale}.json`)).default,
  };
});
