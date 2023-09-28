import React, { useEffect, useRef } from 'react';
import styles from './SuccessNotification.module.scss';

interface SuccessNotificationProps {
  message: string;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({ message }) => {
  const successNotificationRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (successNotificationRef.current) {
      const width = successNotificationRef.current.offsetWidth;
      successNotificationRef.current.style.left = `calc(50% - ${width / 2}px)`;
    }
  }, []);

  return (
    <div ref={successNotificationRef} className={styles['success-notification']}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessNotification;
