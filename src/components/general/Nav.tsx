'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/general.module.scss';
import { manropeMedium } from '@/styles/fonts';

import BlueBtn from './BlueBtn';
import TethSecure from '@/../public/icons/tethsecure.svg';
import MobileNav from './MobileNav';

export default function Nav() {
  return (
    <nav>
      <section className={`hidden md:flex ${styles['nav--container']}`}>
        <Link href={'/'}>
          <div className={styles['right--container']}>
            <Image alt='TethSecure' src={TethSecure} />
          </div>
        </Link>

        <div className={styles['left--container']}>
          <BlueBtn
            linkTo='/sign-up'
            hasBlueBackground
            btnText='Get Started for free'
          />
          <BlueBtn
            linkTo='/contact-us'
            hasBlueBackground={false}
            btnText='Contact us'
          />
          <Link href={'/sign-in'}>
            <p className={`${manropeMedium.className} text-color-primary`}>
              Sign In
            </p>
          </Link>
        </div>
      </section>

      <section className={`flex md:hidden mt-8`}>
        <MobileNav />
      </section>
    </nav>
  );
}
