import React from 'react';
import { useRouter } from 'next/router';
import SEO from '@/components/chunks/SEO';
import { useTranslate } from '@/hooks/useTranslate';
import Button from '@/components/UI/Button';
import Layout from '../components/chunks/Layout';
import HeaderTitle from '../components/chunks/HeaderTitle';
import TextUnderlied from '../components/chunks/TextUnderlied';

import styles from './404.module.scss';

const NotFound: React.FC = () => {
  const { t } = useTranslate();
  const router = useRouter();

  const goToContactUs = () => {
    router.push('/contact');
  };

  const goToMain = () => {
    router.push('/');
  };

  return (
    <Layout>
      <SEO />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <span className={styles.mainTitle}>
              4
              <TextUnderlied>0</TextUnderlied>
              4
            </span>
          </HeaderTitle>
          <div className={styles.mainDescription}>
            {t('notFound.description')}
          </div>
          <div className={styles.buttonGroup}>
            <Button style={{ width: 160 }} type="outlined" onClick={goToContactUs}>Contact Us</Button>
            <Button style={{ width: 160 }} type="primary" onClick={goToMain}>Home</Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NotFound;
