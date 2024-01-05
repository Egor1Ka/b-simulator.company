'use client';

import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';
import { PostData } from '@/lib/types';

import styles from './PostCard.module.scss';

interface PostProps {
  item: PostData;
  activePage?: number;
}

const PostCard: React.FC<PostProps> = ({ item, activePage }) => {
  const router = useRouter();

  const goToArticle = (slug: string) => {
    router.push(`/read/article/${slug}${activePage ? `?activePage=${activePage}` : ''}`);
  };
  return (
    <li className={styles.post}>
      <div
        role="button"
        tabIndex={0}
        className={styles.postAction}
        onClick={() => goToArticle(item.id)}
        onKeyDown={() => goToArticle(item.id)}
      >
        <div className={styles.postImage}>
          <Image
            alt={item.title}
            src={item.image}
            layout="fill"
            objectFit="cover"
            objectPosition="center 25%"
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
      </div>
    </li>
  );
};

export default PostCard;
