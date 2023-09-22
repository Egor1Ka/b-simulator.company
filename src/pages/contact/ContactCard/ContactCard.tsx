import React, {
} from 'react';
import styles from './ContactCard.module.scss'
import classNames from 'classnames';
interface ContactCarddProps {
  type?: 'active' | 'disabled',
  title: string;
  description: string;
  button: React.ReactNode;
  options?: string[]
}
const ContactCard: React.FC<ContactCarddProps> = ({ type, title, description, button, options }) => {

  const typeCard = classNames({
    [styles.license__active]: type === 'active',
    [styles.license__disabled]: type === 'disabled',
  });

  const optionType = classNames({
    [styles.active__option]: type === 'active',
    [styles.disabled__option]: type === 'disabled',
  });

  return (
    <div className={typeCard}>
      <div className={styles.license__container}>
        <h2 className={styles.license__title}>
          {title}
        </h2>
        <ul className={styles.license__options__container}>
          {options?.map(item => (
            <li key={item} className={optionType}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.license__description} dangerouslySetInnerHTML={{ __html: description }}></p>
        {
          button
        }
      </div>
    </div >
  );
};

export default ContactCard;
