'use client';

import { useIntl } from 'react-intl';
import { useCallback } from 'react';
import { TranslationKey } from '../../lang/flattenMessages';

const useTranslate = () => {
  const { formatMessage } = useIntl();

  const t = useCallback(
    (key: TranslationKey): string => formatMessage({ id: key }),
    [formatMessage],
  );

  return { t };
};

export default useTranslate;
