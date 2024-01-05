'use client';

import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { flattenMessages, INestedMessages } from '../../lang/flattenMessages';
import en from '../../lang/en.json';

export type Locale = 'en-US';

const messages: Record<Locale, INestedMessages> = {
  'en-US': en,
};

export const useLocale = () => {
  const router: any = useRouter();
  const tempLocale = 'en-US';
  const flattenedMessages = useMemo(() => {
    // return flattenMessages(messages[router.locale as keyof typeof messages]);
    return flattenMessages(messages[tempLocale]);
  }, []);

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale === tempLocale) {
        return null;
      }

      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router],
  );
  return { locale: tempLocale, switchLocale, messages: flattenedMessages };
};
