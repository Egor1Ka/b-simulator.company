import React from 'react';
import styles from './SuccessNotification.module.scss';

interface SuccessNotificationProps {
  message: string;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({ message }) => (
  <div className={styles['success-notification']}>
    <p>{message}</p>
  </div>
);

export default SuccessNotification;
