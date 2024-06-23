import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { MetadataParams } from '@/lib/types';
import Layout from '@/components/chunks/Layout';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import HomeButtons from '@/components/chunks/HomeButtons/HomeButtons';
import Image from 'next/image';
import twinImg from '../../public/twin.png';
import mainImg from '../../public/main.png';
import styles from './page.module.scss';
import simulator_gif from '../../public/gif/simulator_gif.gif';

export async function generateMetadata({
  params: { locale = 'en' },
}: MetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pageMetaInfo.main' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <div className={styles.videoContainer}>
        <Image
          src={simulator_gif.src}
          alt='gif debug'
          width={simulator_gif.width}
          height={simulator_gif.height}
          className={styles.backgroundVideo}
        />
        <div className={styles.content}>
          <div className={styles.headerContent}>
            <div className={styles.mainGroup}>
              <h5>The Real-Time Business Platform</h5>
              <h1>
                <span>Create a </span>
                <span className={styles.imgWrapper}>
                  <Image src={twinImg} alt='twin' height={48} width={48} />
                </span>
                <span>
                  {' '}
                  Digital Twin
                  <br />
                  of Your
                  <TextUnderlied>Company</TextUnderlied>
                </span>
              </h1>
              <p>
                Describe and model everything as actors, connect in graphs,
                <br />
                and continuously compute upon.
              </p>
              <div className={styles.buttonGroup}>
                <HomeButtons />
              </div>
            </div>
            <div className={styles.imageGroup}>
              <Image src={mainImg} alt='main' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
