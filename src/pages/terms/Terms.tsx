import React, { useState } from 'react';
import cn from 'classnames';
import SEO from '@/components/chunks/SEO';
import { useTranslate } from '@/hooks/useTranslate';
import Layout from '../../components/chunks/Layout';
import TermsData from '../../components/chunks/TermsData';
import HeaderTitle from '../../components/chunks/HeaderTitle';
import TextUnderlied from '../../components/chunks/TextUnderlied';

import terms from '../../constants/terms';

import styles from './Terms.module.scss';

type Terms = 'cookie' | 'privacy' | 'customer';

const Policy: React.FC = () => {
  const { t } = useTranslate();
  const [active, setActive] = useState<Terms>('cookie');

  return (
    <Layout>
      <SEO
        metaTitle={t('pageMetaInfo.terms.title')}
        metaDescription={t('pageMetaInfo.terms.description')}
      />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <TextUnderlied>
              Terms & Policies
            </TextUnderlied>
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
    </Layout>
  );
};

export default Policy;
