import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { flattenMessages, INestedMessages } from '../../lang/flattenMessages';
import en from '../../lang/en.json';

export type Locale = 'en-US';

const messages: Record<Locale, INestedMessages> = {
  'en-US': en,
};

export const useLocale = () => {
  const router = useRouter();

  const flattenedMessages = useMemo(
    () => flattenMessages(messages[router.locale as keyof typeof messages]),
    [router],
  );

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale === router.locale) {
        return null;
      }

      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router],
  );
  return { locale: router.locale, switchLocale, messages: flattenedMessages };
};
