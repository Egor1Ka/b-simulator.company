import React from 'react';
import { getTranslations } from 'next-intl/server';
import { MetadataParams } from '@/lib/types';
import { Metadata } from 'next';
import Layout from '../../components/chunks/Layout';
import DownloadContent from './_components/Download';

export async function generateMetadata({
  params: { locale = 'en' },
}: MetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pageMetaInfo.download' });

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

const Download: React.FC = () => {
  return (
    <Layout>
      <DownloadContent />
    </Layout>
  );
};

export default Download;
