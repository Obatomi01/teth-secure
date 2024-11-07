import React from 'react';

import styles from '@/styles/signIn.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function SignInCard({ children }: Props) {
  return <section className={styles['sign--in__form']}>{children}</section>;
}
