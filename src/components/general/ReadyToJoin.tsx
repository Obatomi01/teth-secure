import React from 'react';

import styles from '@/styles/general.module.scss';
import { manropeBold, manropeMedium } from '@/styles/fonts';

export default function ReadyToJoin() {
  return (
    <div className={styles['ready--to__join']}>
      <h2 className={`mb-2 md:mb-4 ${manropeBold.className}`}>
        Ready to take control of your business&apos;s security?
      </h2>
      <p className={manropeMedium.className}>
        Sign up for Teth Secure today and protect your valuable data with our
        advanced authentication solutions.
      </p>
    </div>
  );
}
