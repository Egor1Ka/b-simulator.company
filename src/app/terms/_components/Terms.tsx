'use client';

import HeaderTitle from '@/components/chunks/HeaderTitle';
import TermsData from '@/components/chunks/TermsData';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import terms from '@/constants/terms';
import { usePathname, notFound } from 'next/navigation';
import { useState } from 'react';
import cn from 'classnames';
import styles from '../Terms.module.scss';

type TermsTypes = 'cookie' | 'privacy' | 'customer';

const Terms = () => {
  const [active, setActive] = useState<TermsTypes>('cookie');
  const pathname = usePathname();

  if (pathname === '/terms') {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <HeaderTitle>
          <TextUnderlied>Terms & Policies</TextUnderlied>
        </HeaderTitle>
        <div className={styles.terms}>
          <div className={styles.termsIndex}>
            <div className={styles.termsTitle}>Contents</div>
            <div className={styles.termsSubTitle}>TERMS OF SERVICE</div>
            <div
              tabIndex={0}
              role="button"
              onClick={() => setActive('customer')}
              onKeyDown={() => setActive('customer')}
              className={cn([styles.termsLink], { [styles.active]: active === 'customer' })}
            >
              Customer agreement
            </div>
            <div className={styles.termsSubTitle}>POLICIES</div>
            <div
              tabIndex={0}
              role="button"
              onClick={() => setActive('privacy')}
              onKeyDown={() => setActive('privacy')}
              className={cn([styles.termsLink], { [styles.active]: active === 'privacy' })}
            >
              Privacy Policy
            </div>
            <div
              tabIndex={0}
              role="button"
              onClick={() => setActive('cookie')}
              onKeyDown={() => setActive('cookie')}
              className={cn([styles.termsLink], { [styles.active]: active === 'cookie' })}
            >
              Cookie Policy
            </div>
          </div>
          <div className={styles.termsContent}>
            <TermsData content={terms[active]} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
