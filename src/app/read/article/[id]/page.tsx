import React from 'react';
import { Metadata } from 'next';
import { getPostData } from '@/lib/posts';
import { PostData } from '@/lib/types';
import Layout from '@/components/chunks/Layout';
import MarcdownRenderer from '@/components/chunks/MarcdownRenderer';
import BackwardButton from './_components/BackwardButton';
import styles from './article.module.scss';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      type: 'article',
      title: postData.title,
      description: postData.description,
    },
    twitter: {
      title: postData.title,
      description: postData.description,
    },
  };
}

const Article: React.FC<Props> = async ({ params }) => {
  const data: PostData = await getPostData(params.id);

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.navigation}>
            <BackwardButton />
          </div>
          <h2 className={styles.articleTitle}>{data.title}</h2>
          <hr />
          <div className={styles.tagGroup}>
            <ul className={styles.tags}>
              {data.tags && data.tags.map((t: any) => <li key={t}>{`#${t}`}</li>)}
            </ul>
            <div />
          </div>
          <div className={styles.articleContainer}>
            <MarcdownRenderer data={data.content} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Article;
