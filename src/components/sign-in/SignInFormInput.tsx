import React from 'react';
import styles from '@/styles/general.module.scss';

import { ContactFormInputProps } from '../contact us/ContactFormInput';
import { manropeBold } from '@/styles/fonts';

export interface SignInFormInputProps extends ContactFormInputProps {
  label: string;
}

export default function SignInFormInput({
  register,
  label,
  error,
}: SignInFormInputProps) {
  return (
    <div className={styles['form--input__container']}>
      <label
        htmlFor={label}
        className={`${manropeBold.className} text-bold-text-color text-base`}
      >
        {label}
      </label>
      {register}
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
}
