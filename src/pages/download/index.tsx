import React from 'react';
import Image from 'next/image';
import SEO from '@/components/chunks/SEO';
import { useTranslate } from '@/hooks/useTranslate';
import Layout from '../../components/chunks/Layout';
import HeaderTitle from '../../components/chunks/HeaderTitle';
import TextUnderlied from '../../components/chunks/TextUnderlied';
import Button from '../../components/UI/Button';
import sc from '../../../public/logo-short.png';
import Apple from '../../../public/icons/apple.svg';
import Windows from '../../../public/icons/windows.svg';
import styles from './Download.module.scss';

const downloadLinks = {
  macArm: 'https://app.simulator.company/simulator-company-0.2.4-arm64.dmg',
  macIntel: 'https://app.simulator.company/simulator-company-0.2.4-x64.dmg',
  windows: 'https://app.simulator.company/simulator-company-0.1.5-setup.exe',
};

const Download: React.FC = () => {
  const { t } = useTranslate();

  const handleDownload = (link: string) => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = '';
    anchor.click();
  };

  return (
    <Layout>
      <SEO
        metaTitle={t('pageMetaInfo.download.title')}
        metaDescription={t('pageMetaInfo.download.description')}
      />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <TextUnderlied>
              Download
            </TextUnderlied>
          </HeaderTitle>
          <div className={styles.data}>
            <Image alt="logo" src={sc} width={160} height={160} />
            <div className={styles.dataTitle}>
              Simulator.company
              {' '}
              <br />
              server for self-hosting
            </div>
            <div className={styles.dataContent}>
              Publish interactive maps to get map services from your own server or laptop.
            </div>
            <div className={styles.dataButtons}>
              <Button
                onClick={() => handleDownload(downloadLinks.macArm)}
                type="outlined"
                link="#"
                style={{ width: 172 }}
              >
                <Apple />
                {' '}
                MacOS ARM
              </Button>
              <Button
                onClick={() => handleDownload(downloadLinks.macIntel)}
                type="outlined"
                link="#"
                style={{ width: 172 }}
              >
                <Apple />
                {' '}
                MacOS Intel
              </Button>
              <Button
                onClick={() => handleDownload(downloadLinks.windows)}
                type="outlined"
                link="#"
                style={{ width: 172 }}
              >
                <Windows />
                {' '}
                Windows
                {' '}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Download;
