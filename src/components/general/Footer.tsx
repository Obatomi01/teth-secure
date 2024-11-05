import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import styles from '@/styles/general.module.scss';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={styles['footer--section__container']}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
