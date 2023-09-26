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
        style={{ objectPosition: 'center 25%' }}
      />
    </div>
    <div className={styles.postGroup}>
      <div>
        <span className={styles.date}>{item.date}</span>
        <h5 className={styles.title}>{item.title}</h5>
      </div>
      <div className={styles.tagList}>
        <hr />
        <div style={{ height: 22 }}>
          <div className={styles.tagListContainer}>
            {item.tags ? (
              <ul>
                {item.tags.map((t) => <li className={styles.tagList} key={t}>{`#${t}`}</li>)}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default PostCard;
