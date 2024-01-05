import Layout from '@/components/chunks/Layout';
import { getTranslations } from 'next-intl/server';
import { MetadataParams } from '@/lib/types';
import { Metadata } from 'next';
import ContactPage from './_components/ContactPage';

export async function generateMetadata({
  params: { locale = 'en' },
}: MetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pageMetaInfo.contact' });

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

const Contact = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
};

export default Contact;
