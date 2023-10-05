import React, {
} from 'react';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import SEO from '@/components/chunks/SEO';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import { useTranslate } from '@/hooks/useTranslate';
import twinImg from '../../public/twin.png';
import mainImg from '../../public/main.png';
import Layout from '../components/chunks/Layout';
import styles from './index.module.scss';

const Main: React.FC = () => {
  const { t } = useTranslate();
  const goToLogIn = () => {
    const link = `${process.env.NEXT_PUBLIC_LOGIN_LINK}/enter/login?redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_CONTROL_LINK || '')}`;
    window.open(link, '_self');
  };

  const goToVideo = () => {
    const link = 'https://www.youtube.com/watch?v=hyjXqow0ltk';
    window.open(link, '_self');
  };

  return (
    <Layout>
      <SEO
        metaTitle={t('pageMetaInfo.main.title')}
        metaDescription={t('pageMetaInfo.main.description')}
      />
      <main className={styles.main}>
        <div className={styles.headerContent}>
          <div className={styles.mainGroup}>
            <h5>The Real-Time Business Platform</h5>
            <h1>
              <span>Create a </span>
              <span className={styles.imgWrapper}>
                <Image
                  src={twinImg}
                  alt="twin"
                  height={48}
                  width={48}
                />
              </span>
              <span>
                {' '}
                Digital Twin
                {' '}
                <br />
                {' '}
                of Your
                {' '}
                <TextUnderlied>Company</TextUnderlied>
              </span>
            </h1>
            <p>
              Describe and model everything as actors, connect in graphs,
              {' '}
              <br />
              and continuously compute upon.
            </p>
            <div className={styles.buttonGroup}>
              <Button style={{ width: 160 }} type="secondary" onClick={goToVideo}>Watch video</Button>
              <Button style={{ width: 160 }} type="primary" onClick={goToLogIn}>Start free</Button>
            </div>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src={mainImg}
              alt="main"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
