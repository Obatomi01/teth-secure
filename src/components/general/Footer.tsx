import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import styles from '@/styles/general.module.scss';

export default function Footer() {
  return (
    <footer className={styles['footer--section__container']}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
