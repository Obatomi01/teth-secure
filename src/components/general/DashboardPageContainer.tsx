import React from 'react';

import styles from '@/styles/dashboard.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function DashboardPageContainer({ children }: Props) {
  return (
    <section
      className={`flex-col md:flex-row  md:justify-between ${styles['dashboard--container']}`}
    >
      {children}
    </section>
  );
}
