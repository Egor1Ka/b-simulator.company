import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import SEO from '@/components/chunks/SEO';
import Layout from '../../../components/chunks/Layout';
import MarcdownRenderer from '../../../components/chunks/MarcdownRenderer';
import { getPostData, PostData } from '../../../helpers/getPosts';
import ArrowLeft from '../../../../public/icons/arrow-left.svg';
import styles from './article.module.scss';

interface ReadProps {
  data: PostData
}

const Article: React.FC<ReadProps> = ({ data }) => {
  const router = useRouter();
  const navigateBack = () => {
    router.push('/read/');
  };

  return (
    <Layout>
      <SEO
        metaTitle={data.title}
        metaDescription={data.description}
        article={true}
      />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.navigation}>
            <div className={styles.navigationButton} role="button" tabIndex={0} onClick={navigateBack} onKeyDown={navigateBack}>
              <ArrowLeft />
              <span>All news</span>
            </div>
          </div>
          <h2 className={styles.articleTitle}>
            {data.title}
          </h2>
          <hr />
          <div className={styles.tagGroup}>
            <ul className={styles.tags}>
              {data.tags.map((t) => (
                <li key={t}>{`#${t}`}</li>
              ))}
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

export const getServerSideProps: GetServerSideProps<ReadProps> = async ({ params }) => {
  const slug = params?.article as string;
  const {
    data,
  } = getPostData(slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Article;
