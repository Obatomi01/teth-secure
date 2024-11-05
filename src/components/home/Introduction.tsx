import React from 'react';
import Image from 'next/image';

import styles from '@/styles/home.module.scss';
import { manropeMedium, manropeSemiBold } from '@/styles/fonts';

import BlueBtn from '../general/BlueBtn';
import SecurityProtocols from '@/../public/images/security protocols.png';

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section className={styles['introduction--section__container']}>
      <div className={styles['introduction--section__contents']}>
        <div className={styles['right--container']}>
          <h2 className={manropeSemiBold.className}>
            Introducing Teth Secure Advanced Security Protocols
          </h2>
          <p
            className={`text-base text-p-text-color ${manropeMedium.className}`}
          >
            We offer a comprehensive suite of multi-factor authentication (MFA)
            solutions designed to safeguard your valuable data and systems.
          </p>

          <BlueBtn hasBlueBackground linkTo='' btnText='Get started for free' />
        </div>
        <div className={styles['left--container']}>
          <Image src={SecurityProtocols} alt='Advanced Security' />
        </div>
      </div>
    </section>
  );
}
