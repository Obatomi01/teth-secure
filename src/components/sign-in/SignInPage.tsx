'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/signIn.module.scss';
import Logo from '@/../public/icons/tethsecure.svg';

type Props = {
  children: React.ReactNode;
};

export default function SignInPage({ children }: Props) {
  return (
    <section className={styles['sign--in__page--container']}>
      <div className={styles['sign--in__container']}>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo' />
        </Link>
        <div
          className={`flex justify-between content-center ${styles['sign--in__form--container']}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
