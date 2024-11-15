import React from 'react';

import styles from '@/styles/signIn.module.scss';

type Props = {
  children: React.ReactNode;
  hasBackdrop?: boolean;
};

export default function SignInCard({ children, hasBackdrop }: Props) {
  return (
    <section
      className={`${styles['sign--in__form']} ${
        hasBackdrop ? styles['backdrop'] : ''
      }`}
    >
      {children}
    </section>
  );
}
