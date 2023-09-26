import React from 'react';
import Layout from '../../components/chunks/Layout';
import Pagination from '../../components/chunks/Pagination';
import PostsList from '../../components/chunks/PostsList';
import HeaderTitle from '../../components/chunks/HeaderTitle';
import TextUnderlied from '../../components/chunks/TextUnderlied';
import Codex from '../../components/chunks/Codex';
import { getSortedPostsData, PostData } from '../../helpers/getPosts';
import styles from './index.module.scss';

interface ReadProps {
  initialPosts: PostData[];
  totalPages: number
}

const Read: React.FC<ReadProps> = ({ initialPosts, totalPages }) => (
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
        <Pagination pages={totalPages} active={1} />
      </div>
    </main>
  </Layout>
);

export async function getServerSideProps(): Promise<{ props: ReadProps }> {
  const { posts, totalPages } = getSortedPostsData(1);
  return {
    props: {
      initialPosts: posts,
      totalPages,
    },
  };
}

export default Read;
