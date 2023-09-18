import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  buttonType?: 'primary' | 'secondary' | 'outlined',
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styleClass?: string;
  externalLink?: string;
  internalLink?: string;
}

export default function Button({
  children,
  buttonType = 'primary',
  disabled = false,
  onClick,
  styleClass,
  internalLink,
  externalLink,
  ...attrs
}: ButtonProps): React.JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.type === 'click') {
      onClick && onClick(e);
    }
  };

  const button: React.JSX.Element = (
    <button
      onClick={handleClick}
      className={
        `${styles[`button__${buttonType}`]}  ${styles.button} ${styleClass}`
      }
      type="button"
      disabled={disabled}
      {...attrs}
    >
      {children}
    </button>
  );

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noreferrer">
        {button}
      </a>
    );
  }

  if (internalLink) {
    return (
      <Link href={internalLink}>
        {button}
      </Link>
    );
  }

  return button;
}
