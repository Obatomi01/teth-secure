import React from 'react';

import styles from '@/styles/general.module.scss';

export type ContactFormInputProps = {
  register: React.ReactElement;
  error?: string;
};

export default function ContactFormInput({
  register,
  error,
}: ContactFormInputProps) {
  return (
    <div className={styles['form--input__container']}>
      {register}
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
}
