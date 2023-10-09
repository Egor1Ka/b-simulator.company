import PostCard from '../PostCard';
import { PostData } from '../../../helpers/getPosts';

import styles from './PostList.module.scss';

interface ReadProps {
  initialPosts: PostData[];
  active?: number;
}

const PostList: React.FC<ReadProps> = ({ initialPosts, active }) => (
  <div className={styles.postList}>
    <ul>
      {initialPosts.map((post) => (
        <PostCard key={post.id} item={post} activePage={active} />
      ))}
    </ul>
  </div>
);

export default PostList;
