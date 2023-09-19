import React, { ChangeEvent, ReactNode, useState, useEffect } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import emailIcon from '../../../assets/icons/email-icon.svg';

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode | 'email';
  placeholder?: string;
  type?: string;
  customValidator?: (value: string) => string | null;
  onCustomError?: (error?: string | null) => void;
  disabbled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  icon,
  placeholder,
  type = "text",
  customValidator,
  onCustomError,
  disabbled
}) => {
  const [error, setError] = useState<string | null>(null);
  const isValueDefined = value !== null && value !== undefined;
  
  useEffect(() => {
    if (type === 'email' && isValueDefined) {
      handleEmailValidation();
    } else if (customValidator && isValueDefined) {
      handleCustomValidation();
    }
  }, [type, value, customValidator, onCustomError]);

  const handleEmailValidation = () => {
    if (value && !isEmailValid(value)) {
      const errorMessage = 'Input correct email';
      setError(errorMessage);
      onCustomError && onCustomError(errorMessage);
    } else {
      setError(null);
    }
  };

  const handleCustomValidation = () => {
    if (value !== null && value !== undefined && value.length === 0) {
      setError(null);
    }
    else if (value && customValidator) {
      const customError = customValidator(value);
      setError(customError);
      if (onCustomError) {
        onCustomError(customError);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  const isEmailValid = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const formGroupClass = classNames(styles["form-group"], { [styles["form-group__disabled"]]: disabbled });

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
        disabled={disabbled}
      />
      {error && <div className={styles["form-group__error"]}>{error}</div>}
    </div >
  );
};

export default Input;
