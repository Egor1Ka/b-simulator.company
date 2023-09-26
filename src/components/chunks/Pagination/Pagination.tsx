/* eslint-disable react/no-array-index-key */
import React from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pages: number;
  active: number;
}

const Pagination: React.FC<PaginationProps> = ({ pages, active }) => {
  const maxDisplayPages = 5;

  const getPageNumbers = () => {
    if (pages <= maxDisplayPages) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    }

    const pageNumbers: (number | 'ellipsis')[] = [1, 2, 3];

    if (active > 3) {
      pageNumbers.push('ellipsis');
    }

    for (let i = Math.max(4, active - 1); i < Math.min(active + 2, pages - 2); i += 1) {
      pageNumbers.push(i);
    }

    if (active < pages - 3) {
      pageNumbers.push('ellipsis');
    }

    pageNumbers.push(pages - 2, pages - 1, pages);

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      {active > 1 ? (
        <button type="button" className={styles.textButton}>
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
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {active < pages ? (
        <button type="button" className={styles.textButton}>
          Next
        </button>
      ) : <div />}
    </div>
  );
};

export default Pagination;
