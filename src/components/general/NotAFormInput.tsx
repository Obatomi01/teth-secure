import React from 'react';

import styles from '@/styles/general.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function NotAFormInput({ children }: Props) {
  return <div className={styles['not--a__form--input']}>{children}</div>;
}
