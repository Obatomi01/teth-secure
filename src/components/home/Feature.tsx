import React from 'react';

import styles from '@/styles/home.module.scss';

import { FeatureType } from './Features';
import { manropeExtraBold, manropeMedium } from '@/styles/fonts';

export default function Feature({
  featureContent,
  featureTitle,
  featureNumber,
}: FeatureType) {
  return (
    <div className={styles['feature--container']}>
      <div className={styles['feature--left__container']}>
        <span>
          <p className={manropeMedium.className}>{featureNumber}</p>
        </span>
      </div>
      <div className={styles['feature--right__container']}>
        <p className={manropeExtraBold.className}>{featureTitle}</p>
        <p className={manropeMedium.className}>{featureContent}</p>
      </div>
    </div>
  );
}
