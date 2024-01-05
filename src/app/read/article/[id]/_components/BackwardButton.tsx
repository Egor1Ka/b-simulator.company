'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ArrowLeft from '../../../../../../public/icons/arrow-left.svg';
import styles from '../article.module.scss';

const BackwardButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activePage = searchParams.get('activePage');

  const navigateBack = () => {
    router.push(`/read/${activePage ? `page/${activePage}` : ''}`);
  };
  return (
    <div
      className={styles.navigationButton}
      role="button"
      tabIndex={0}
      onClick={navigateBack}
      onKeyDown={navigateBack}
    >
      <ArrowLeft />
      <span>All news</span>
    </div>
  );
};

export default BackwardButton;
