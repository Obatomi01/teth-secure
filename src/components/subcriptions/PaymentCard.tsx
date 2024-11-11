import React from 'react';

import styles from '@/styles/subscriptions.module.scss';
import cardStyles from '@/styles/signIn.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function PaymentCard({ children }: Props) {
  return (
    <section className={`flex ${styles['payment--option']}`}>
      <div
        className={`${cardStyles['sign--in__form']} flex flex-col gap-4`}
        style={{
          marginBlock: 'auto',
          height: 'max-content',
        }}
      >
        {children}
      </div>
    </section>
  );
}
