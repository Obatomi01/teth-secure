import React from 'react';
import styles from '@/styles/dashboard.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function DashboardContentsContainer({ children }: Props) {
  return (
    <section
      className={`w-full md:w-1/2 ${styles['dashboard--contents__container']}`}
    >
      {children}
    </section>
  );
}
