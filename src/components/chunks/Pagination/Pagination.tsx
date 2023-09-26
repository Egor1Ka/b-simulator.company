/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pages: number;
  active: number;
}

const Pagination: React.FC<PaginationProps> = ({ pages, active }) => {
  const maxDisplayPages = 5;
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const handlePageClick = (page: number) => {
    router.push(`/read${page > 1 ? `/page/${page}` : ''}`);
  };

  const handleNextClick = () => {
    if (active < pages) {
      const nextPage = active + 1;
      handlePageClick(nextPage);
    }
  };

  const handlePrevClick = () => {
    if (active > 1) {
      const prevPage = active - 1;
      handlePageClick(prevPage);
    }
  };

  const getPageNumbers = () => {
    if (pages <= maxDisplayPages) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    }

    const pageNumbers: (number | 'ellipsis')[] = [1, 2, 3];

    if (active > 4) {
      pageNumbers.push('ellipsis');
    }

    for (let i = Math.max(4, active - 1); i < Math.min(active + 2, pages - 2); i += 1) {
      pageNumbers.push(i);
    }

    if (active < pages - 4) {
      pageNumbers.push('ellipsis');
    }

    pageNumbers.push(pages - 2, pages - 1, pages);

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      {active > 1 ? (
        <button
          type="button"
          className={styles.textButton}
          onClick={handlePrevClick}
        >
          Previous
        </button>
      ) : <div />}

      <div>
        <ul>
          {pageNumbers.map((page, index) => (
            <li key={index}>
              {page === 'ellipsis' ? (
                <span className={styles.ellipsis}>&hellip;</span>
              ) : (
                <button
                  type="button"
                  className={cn(styles.textButton, styles.fixed, {
                    [styles.active]: page === active,
                  })}
                  onClick={() => handlePageClick(page as number)}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {active < pages ? (
        <button
          type="button"
          className={styles.textButton}
          onClick={handleNextClick}
        >
          Next
        </button>
      ) : <div />}
    </div>
  );
};

export default Pagination;
