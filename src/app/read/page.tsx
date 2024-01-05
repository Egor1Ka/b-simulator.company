import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import { MetadataParams } from '@/lib/types';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '../../components/chunks/Layout';
import Pagination from '../../components/chunks/Pagination';
import PostsList from '../../components/chunks/PostsList';
import HeaderTitle from '../../components/chunks/HeaderTitle';
import TextUnderlied from '../../components/chunks/TextUnderlied';
import Codex from '../../components/chunks/Codex';
import styles from './index.module.scss';

export async function generateMetadata({
  params: { locale = 'en' },
}: MetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pageMetaInfo.read' });

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

const Read = () => {
  const { posts = [], totalPages = 0 }: any = getSortedPostsData(1);
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <TextUnderlied>Read</TextUnderlied>
          </HeaderTitle>
          <Codex />
          <PostsList initialPosts={posts} />
          <Pagination pages={totalPages} active={1} />
        </div>
      </main>
    </Layout>
  );
};

export default Read;
