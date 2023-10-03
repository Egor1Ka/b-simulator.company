import React, {
} from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './ContactCard.module.scss';

interface ContactCarddProps {
  type?: 'active' | 'disabled',
  title: string;
  description: string;
  button: React.ReactNode;
  input?: React.ReactNode;
  options?: string[];
  styleClass?: string;
  icon?: React.ReactNode;
}
const ContactCard: React.FC<ContactCarddProps> = ({
  type,
  title,
  description,
  button,
  options,
  input,
  styleClass,
  icon
}) => {
  const typeCard = classNames({
    [styles.licenseActive]: type === 'active',
    [styles.licenseDisabled]: type === 'disabled',
  });

  const optionType = classNames({
    [styles.ActiveOption]: type === 'active',
    [styles.DisabledOption]: type === 'disabled',
  });

  const iconContainer = classNames({
    [styles.activeContainer]: type === 'active',
    [styles.disabledContainer]: type === 'disabled',
  });
  console.log('ssssss', iconContainer)
  return (
    <div className={classNames(typeCard, styleClass)}>
      <div className={styles.licenseContainer}>
        {
          icon && <div className={iconContainer}>
            {icon}
          </div>
        }
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
        <div className={styles.inputSection}>
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
