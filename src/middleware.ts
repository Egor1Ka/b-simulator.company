import { NextRequest, NextResponse } from 'next/server';

const locales = ['en-US'];
const defaultLocale = 'en-US';

function getLocale(request: NextRequest) {
  const acceptedLanguages = request.headers.get('accept-language');

  if (acceptedLanguages) {
    const locale = locales.find((l) => acceptedLanguages.includes(l));
    if (locale) {
      return { locale, localeShort: locale.split('-')[0] };
    }
  }

  return { locale: defaultLocale, localeShort: defaultLocale.split('-')[0] };
}

export function middleware(request: NextRequest) {
  const { locale, localeShort } = getLocale(request);

  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-locale', locale);
  response.headers.set('X-NEXT-INTL-LOCALE', localeShort);
  response.cookies.set('NEXT_LOCALE', localeShort);
  return response;
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
