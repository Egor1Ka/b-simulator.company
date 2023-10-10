/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import cn from 'classnames';
import styles from './TermsData.module.scss';

interface NestedContent {
  value: string;
}

interface SingleObjectShape {
  type?: 'table' | 'text' | string;
  value?: string[][] | string;
  content?: Array<{ value: string; data?: NestedContent[]; type?: 'numberList' | string }>;
  data?: Array<{ value: string }>;
}

interface SingleObject {
  type: string;
  title: string;
  content: SingleObjectShape[];
}

interface ObjectShape {
  title?: string;
  date?: string;
  data?: SingleObject[];
}

interface TermsProps {
  content: ObjectShape;
}

const TermsData: React.FC<TermsProps> = ({ content }) => {
  const { title, date, data } = content || {};

  return (
    <div className={styles.termsContent}>
      <span className={styles.termsContentTitle}>{title}</span>
      <span className={styles.termsContentDate}>{date}</span>
      {data && data.map((part, index) => (
        <div className={styles.termsContent} key={index}>
          {part.title
            && <span className={styles.termsContentSubTitle}>{part.title}</span>}
          {part.content.map((item, index) => (
            <div key={index}>
              <div className={styles['termsContentCount-wrap']}>
                {part.type === 'numberList'
                  && (
                  <span
                    className={styles.termsContentCount}
                  >
                    {`${index + 1}. `}
                  </span>
                  )}
                {item.type === 'table'
                  ? (
                    <table className={styles.termsContentTable}>
                      {Array.isArray(item.value) && item.value.map((row, indexRow) => (
                        <tr key={indexRow} className={styles['termsContentTable-row']}>
                          {
                          row.map((cell, indexCell) => (
                            <th
                              key={indexCell}
                              className={cn(styles['termsContentTable-cell'], styles[`termsContentTable-row${indexRow}`])}
                            >
                              {cell}
                            </th>
                          ))
                        }
                        </tr>
                      ))}
                    </table>
                  )
                  : (item.content
                    ? (
                      <div>
                        {item.content.map((item2, index) => (
                          <div key={index}>
                            <div className={styles['termsContentCount-wrap']}>
                              <span
                                className={styles.termsContentContent}
                              >
                                {item2.value}
                              </span>
                            </div>
                            {item2.data && item2.data.map((item3, index) => (
                              <div
                                key={index}
                                className={cn(styles['termsContentCount-wrap'], styles['termsContentCount-level2'])}
                              >
                                {item2.type === 'numberList'
                                && (
                                <span
                                  className={styles.termsContentCount}
                                >
                                  {`${index + 1}. `}
                                </span>
                                )}
                                <span
                                  className={styles.termsContentContent}
                                >
                                  {item3.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )
                    : (
                      <span
                        className={styles.termsContentContent}
                      >
                        {item.value}
                      </span>
                    )
                  )}
              </div>
              {item.data && item.data.map((item, index) => (
                <div
                  key={index}
                  className={cn(styles['termsContentCount-wrap'], styles['termsContentCount-level2'])}
                >
                  <div className={styles.termsContentCount}>&bull;</div>
                  <span
                    className={styles.termsContentContent}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TermsData;
