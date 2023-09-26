import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../../components/chunks/Layout';
import PostsList from '../../../components/chunks/PostsList';
import HeaderTitle from '../../../components/chunks/HeaderTitle';
import TextUnderlied from '../../../components/chunks/TextUnderlied';
import Pagination from '../../../components/chunks/Pagination';
import { getSortedPostsData, PostData } from '../../../helpers/getPosts';
import styles from '../index.module.scss';

interface ReadProps {
  initialPosts: PostData[];
  totalPages: number;
}

const PageCount: React.FC<ReadProps> = ({ initialPosts, totalPages }) => {
  const router = useRouter();
  const { pageCount } = router.query;

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <TextUnderlied>
              Read
            </TextUnderlied>
          </HeaderTitle>
          <PostsList initialPosts={initialPosts} />
          <Pagination pages={totalPages} active={Number(pageCount)} />
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<ReadProps> = async ({ params }) => {
  const pageCount = params?.pageCount as string;

  if (!pageCount) {
    return {
      notFound: true,
    };
  }

  const {
    posts, totalPages,
  } = getSortedPostsData(parseInt(pageCount, 10));

  return {
    props: {
      initialPosts: posts,
      totalPages,
    },
  };
};

export default PageCount;
