import React, { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  type?: 'primary' | 'secondary' | 'outlined' | 'transparent',
  link?: string,
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styleClass?: string;
}

export default function Button({
  children,
  type = 'primary',
  link,
  disabled = false,
  onClick,
  styleClass,
  ...attrs
}: ButtonProps): React.JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const isExternalLink = (url: string) => {
    const externalLinkRegex = /^(https?:\/\/|\/\/|mailto:|tel:|ftp:|file:)/;
    return externalLinkRegex.test(url);
  };

  const buttonClasses = classNames(
    styles[`button__${type}`],
    styles.button,
    styleClass,
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

  if (link && !disabled) {
    if (isExternalLink(link)) {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          {button}
        </a>
      );
    }
    return <Link href={link}>{button}</Link>;
  }

  return button;
}
