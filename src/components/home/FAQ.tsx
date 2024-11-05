import React from 'react';

import styles from '@/styles/home.module.scss';
import {
  manropeSemiBold,
  manropeMedium,
  manropeExtraBold,
} from '@/styles/fonts';
import { FAQType } from './FAQs';

export default function FAQ({ question, answer }: FAQType) {
  return (
    <div className={styles['faq--container']}>
      <div className={styles['faq--question__icon']}>
        <p className={`text-base ${manropeMedium.className}`}>?</p>
      </div>
      
      <div className={styles['faq--left__container']}>
        <div
          className={`${manropeExtraBold.className} ${styles['faq--question']} mb-2`}
        >
          {question}
        </div>
        <div
          className={`text-base ${manropeMedium.className} ${styles['faq--answer']}`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
