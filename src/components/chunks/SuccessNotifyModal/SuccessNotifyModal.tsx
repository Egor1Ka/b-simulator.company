import React from 'react';
import Button from '@/components/UI/Button';
import SuccessIcon from '../../../../public/icons/success.svg';
import Modal from '../Modal/index';
import styles from './Modal.module.scss';

interface ModalProps {
  title: string;
  description: string;
  visible: boolean;
  onClose: () => void;
}

const SuccessNotifyModal: React.FC<ModalProps> = ({
  title,
  description,
  visible,
  onClose,
}) => (
  <Modal
    isOpen={visible}
    onClose={onClose}
    styleClass={styles.modal}
  >
    <div className={styles.modalComtainer}>
      <div className={styles.successIconContainer}>
        <SuccessIcon />
      </div>
      <h1 className={styles.modalTitle}>{title}</h1>
      <p className={styles.modalDescription}>
        {description}
      </p>
      <Button
        styleClass={styles.modalButton}
        onClick={onClose}
      >
        Okay!
      </Button>
    </div>
  </Modal>
);

export default SuccessNotifyModal;
