import React from 'react';

import styles from '@/styles/signIn.module.scss';
import ReadyToJoin from './ReadyToJoin';

type Props = {
  children: React.ReactNode;
};

export default function SignUpFormContainer({ children }: Props) {
  return (
    <section className={styles['sign--up__container']}>
      <ReadyToJoin />
      {children}
    </section>
  );
}
