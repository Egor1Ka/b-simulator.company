'use client';

import Button from '@/components/UI/Button';
import HeaderTitle from '@/components/chunks/HeaderTitle';
import Layout from '@/components/chunks/Layout';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import useTranslate from '@/hooks/useTranslate';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.scss';

export default function NotFound() {
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
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <span className={styles.mainTitle}>
              4
              <TextUnderlied>0</TextUnderlied>
              4
            </span>
          </HeaderTitle>
          <div className={styles.mainDescription}>{t('notFound.description')}</div>
          <div className={styles.buttonGroup}>
            <Button style={{ width: 160 }} type="outlined" onClick={goToContactUs}>
              Contact Us
            </Button>
            <Button style={{ width: 160 }} type="primary" onClick={goToMain}>
              Home
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
