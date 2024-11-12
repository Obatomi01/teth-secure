import React from 'react';

import styles from '@/styles/contactUs.module.scss';

type Props = {
  showPopUp: boolean;
  message: string;
};

export default function FormPopUp({ showPopUp, message }: Props) {
  return (
    <div
      className={`${styles['pop--up']} ${
        showPopUp ? styles['open'] : styles['hide']
      }`}
    >
      <p className='text-lg text-center'>{message}</p>
    </div>
  );
}
