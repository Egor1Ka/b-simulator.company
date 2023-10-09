/* eslint-disable react/no-array-index-key */
import React, { ReactNode, useEffect, KeyboardEvent } from 'react';
import cn from 'classnames';
import CrossModal from '../../../../public/icons/crossModal.svg';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  styleClass?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  styleClass,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    onClose();
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === 'Space') {
      onClose();
    }
  };

  const preventModalCloseOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const customStyleClass = cn(styles.modalDefault, {
    [styleClass as string]: styleClass,
  });

  return (
    <div
      className={styles.modalOverlay}
      role="button"
      tabIndex={0}
      onClick={closeModal}
      onKeyDown={keyDownHandler}
    >
      <div
        className={styles.modal}
        role="button"
        tabIndex={0}
        onClick={preventModalCloseOnClick}
        onKeyDown={keyDownHandler}
      >
        <div className={customStyleClass}>
          <CrossModal
            className={styles.modalClose}
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={keyDownHandler}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
