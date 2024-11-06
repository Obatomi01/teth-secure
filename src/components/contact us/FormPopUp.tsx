import React from 'react';

import styles from '@/styles/contactUs.module.scss';

type Props = {
  showPopUp: boolean;
};

export default function FormPopUp({ showPopUp }: Props) {
  return (
    <div
      className={`${styles['pop--up']} ${
        showPopUp ? styles['open'] : styles['hide']
      }`}
    >
      <p className='text-lg text-center'>Your response has been submitted</p>
    </div>
  );
}
