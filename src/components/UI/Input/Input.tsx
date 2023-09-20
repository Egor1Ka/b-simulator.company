import React, {
  ReactNode, FormEventHandler,
} from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import emailIcon from '../../../../public/icons/email-icon.svg';
import styles from './Input.module.scss';

interface InputProps {
  value?: string;
  onChange?: (param: string) => void;
  icon?: ReactNode | 'email';
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string | null;
  styleClass?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  icon,
  placeholder,
  type = 'text',
  disabled,
  error,
  styleClass,
}) => {
  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    const { value: val } = target || {};
    if (onChange) onChange(val);
  };

  const formGroupClass = classNames(
    styles['form-group'],
    {
      [styles['form-group__disabled']]: disabled,
      [styles['form-group__error']]: error,
    },

    styleClass,
  );

  return (
    <div className={formGroupClass}>
      <div className={styles.icon__container}>
        {type === 'email' ? <Image src={emailIcon} width={16} height={16} alt="icon" /> : icon}
      </div>
      <input
        className={styles.input}
        type={type}
        value={value}
        onInput={handleInput}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
