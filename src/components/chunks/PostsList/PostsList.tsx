import { useState } from 'react';
import PostCard from '../PostCard';
import { PostData } from '../../../helpers/getPosts';

import styles from './PostList.module.scss';

interface ReadProps {
  initialPosts: PostData[];
}

const PostList: React.FC<ReadProps> = ({ initialPosts }) => {
  const [posts] = useState<PostData[]>(initialPosts);

  return (
    <div className={styles.postList}>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} item={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
