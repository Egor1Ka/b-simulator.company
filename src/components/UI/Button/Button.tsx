import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';
import classNames from 'classnames';

interface BaseButtonProps {
  children?: ReactNode;
  type?: 'primary' | 'secondary' | 'outlined',
  buttonType?: 'button' | 'externalLink' | 'internalLink'
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styleClass?: string;
  externalLink?: string;
  internalLink?: string;
}

type ButtonProps =
  | (BaseButtonProps & { buttonType: 'button' })
  | (BaseButtonProps & { buttonType: 'externalLink'; externalLink: string })
  | (BaseButtonProps & { buttonType: 'internalLink'; internalLink: string });


export default function Button({
  children,
  type = "primary",
  buttonType = "button",
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

  const buttonClasses = classNames(
    styles[`button__${type}`],
    styles.button,
    styleClass
  );

  const button: React.JSX.Element = (
    <button
      onClick={handleClick}
      className={buttonClasses}
      type="button"
      disabled={disabled}
      {...attrs}
    >
      {children}
    </button>
  );

  if (buttonType === 'externalLink' && externalLink && !disabled) {
    return (
      <a href={externalLink} target="_blank" rel="noreferrer">
        {button}
      </a>
    );
  }

  if (buttonType === 'internalLink' && internalLink && !disabled) {
    return (
      <Link href={internalLink}>
        {button}
      </Link>
    );
  }

  return button;
}
