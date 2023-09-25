import React from 'react';
import Layout from '../../../components/chunks/Layout';
import PostsList from '../../../components/chunks/PostsList';
import HeaderTitle from '../../../components/chunks/HeaderTitle';
import TextUnderlied from '../../../components/chunks/TextUnderlied';
import Codex from '../../../components/chunks/Codex';
import { getSortedPostsData, PostData } from '../../../helpers/getPosts';
import styles from '../index.module.scss';

interface ReadProps {
  initialPosts: PostData[];
}

const PageCount: React.FC<ReadProps> = ({ initialPosts }) => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <HeaderTitle>
          <TextUnderlied>
            Read
          </TextUnderlied>
        </HeaderTitle>
        <Codex />
        <PostsList initialPosts={initialPosts} />
      </div>
    </main>
  </Layout>
);

export async function getServerSideProps(): Promise<{ props: ReadProps }> {
  const initialPosts = getSortedPostsData(0, 10);
  return {
    props: {
      initialPosts,
    },
  };
}

export default PageCount;
