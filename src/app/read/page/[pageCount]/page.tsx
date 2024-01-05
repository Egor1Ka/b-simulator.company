import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import Layout from '../../../../components/chunks/Layout';
import PostsList from '../../../../components/chunks/PostsList';
import HeaderTitle from '../../../../components/chunks/HeaderTitle';
import TextUnderlied from '../../../../components/chunks/TextUnderlied';
import Pagination from '../../../../components/chunks/Pagination';
import styles from '../../index.module.scss';

interface ReadProps {
  // initialPosts: PostData[];
  // totalPages: number;
  params: { pageCount: string }
}

const PageCount: React.FC<ReadProps> = ({ params }) => {
  const { pageCount } = params;
  const { posts = [], totalPages = 0 }: any = getSortedPostsData(Number(pageCount));

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HeaderTitle>
            <TextUnderlied>
              Read
            </TextUnderlied>
          </HeaderTitle>
          <PostsList initialPosts={posts} active={Number(pageCount)} />
          <Pagination pages={totalPages} active={Number(pageCount)} />
        </div>
      </main>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps<ReadProps> = async ({ params }) => {
//   const pageCount = params?.pageCount as string;

//   if (!pageCount) {
//     return {
//       notFound: true,
//     };
//   }

//   const {
//     posts,
//     totalPages,
//   } = getSortedPostsData(parseInt(pageCount, 10));

//   return {
//     props: {
//       initialPosts: posts,
//       totalPages,
//     },
//   };
// };

export default PageCount;
