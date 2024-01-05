import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MetadataParams } from '@/lib/types';
import Layout from '@/components/chunks/Layout';
import Buy from './_components/Buy';

export async function generateMetadata({
  params: { locale = 'en' },
}: MetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pageMetaInfo.buy' });

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

const Contact: React.FC = () => {
  return (
    <Layout>
      <Buy />
    </Layout>
  );
};

export default Contact;
