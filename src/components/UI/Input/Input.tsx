import React, { ChangeEvent, ReactNode, useState, useEffect } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import emailIcon from '../../../assets/icons/email-icon.svg';
import isEmailValid from '@/helpers/regularExpressions/isEmailValid';

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  type = "text",
  disabled,
  error,
  styleClass
}) => {
  const [inputError, setInputErrorr] = useState<string | null>(null);
  const isValueDefined = value !== null && value !== undefined;

  useEffect(() => {
    if (type === 'email' && isValueDefined) {
      handleEmailValidation();
    } else if (error && error && isValueDefined) {
      setInputErrorr(error);
    } else if (!error && isValueDefined) {
      setInputErrorr(null);
    }
  }, [error, value]);

  const handleEmailValidation = () => {
    if (value && !isEmailValid(value)) {
      const errorMessage = 'Input correct email';
      setInputErrorr(errorMessage);
    } else {
      setInputErrorr(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value)
    onChange && onChange(event);
  };

  const formGroupClass = classNames(styles["form-group"], { [styles["form-group__disabled"]]: disabled }, styleClass);

  return (
    <div className={formGroupClass}>
      <div className={styles.icon__container}>
        {type === 'email' ? <Image src={emailIcon} width={16} height={16} alt="icon" /> : icon}
      </div>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {inputError && <div className={styles["form-group__error"]}>{inputError}</div>}
    </div >
  );
};

export default Input;
