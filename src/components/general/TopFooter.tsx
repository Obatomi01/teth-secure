import React from 'react';

import styles from '@/styles/general.module.scss';
import { manropeMedium, manropeSemiBold } from '@/styles/fonts';
import BlueBtn from './BlueBtn';

export default function TopFooter() {
  return (
    <section className={styles['top--footer__container']}>
      <div className={styles['top--footer__contents']}>
        <div className={styles['top--footer--left__container']}>
          <h2 className={`text-3xl ${manropeSemiBold.className} mb-4`}>
            Level up your business&apos;s security with Teth Secure today!
          </h2>
          <p className={`text-base ${manropeMedium.className}`}>
            We are here to help you with any questions you may have. Please do
            not hesitate to contact us.
          </p>
        </div>

        <div className={styles['top--footer--right__container']}>
          <BlueBtn
            linkTo='/get-started'
            hasBlueBackground
            btnText='Get started'
          />
          <BlueBtn
            linkTo='/contact-us'
            hasBlueBackground={false}
            btnText='Contact us'
          />
        </div>
      </div>
    </section>
  );
}
