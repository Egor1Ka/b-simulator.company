import Image from 'next/image';
import { PostData } from '../../../helpers/getPosts';

import styles from './PostCard.module.scss';

interface PostProps {
  item: PostData;
}

const PostCard: React.FC<PostProps> = ({ item }) => (
  <li className={styles.post}>
    <div className={styles.postImage}>
      <Image
        alt={item.title}
        src={item.image}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.postGroup}>
      <div><span className={styles.tag}>{item.category[0]}</span></div>
      <span className={styles.date}>{item.date}</span>
      <h5 className={styles.title}>{item.title}</h5>
    </div>
  </li>
);

export default PostCard;
