import React, {
} from 'react';
import classNames from 'classnames';
import styles from './ContactCard.module.scss';

interface ContactCarddProps {
  type?: 'active' | 'disabled',
  title: string;
  description: string;
  button: React.ReactNode;
  input?: React.ReactNode;
  options?: string[];
  styleClass?: string;
}
const ContactCard: React.FC<ContactCarddProps> = ({
  type, title, description, button, options, input, styleClass,
}) => {
  const typeCard = classNames({
    [styles.licenseActive]: type === 'active',
    [styles.licenseDisabled]: type === 'disabled',
  });

  const optionType = classNames({
    [styles.ActiveOption]: type === 'active',
    [styles.DisabledOption]: type === 'disabled',
  });
  return (
    <div className={classNames(typeCard, styleClass)}>
      <div className={styles.licenseContainer}>
        <h2 className={styles.licenseTitle}>
          {title}
        </h2>
        <ul className={styles.licenseOptionsContainer}>
          {options?.map((item) => (
            <li key={item} className={optionType}>
              {item}
            </li>
          ))}
        </ul>
        <p
          className={styles.licenseDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div>
          {
            input
          }
          {
            button
          }
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
