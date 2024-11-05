'use client';

import React from 'react';
import Image from 'next/image';

// styles
import { manropeBold, manropeMedium } from '@/styles/fonts';
import styles from '@/styles/home.module.scss';

import HeroImage from '@/../public/images/Hero.png';
import BlueBtn from '../general/BlueBtn';

type Props = {};

export default function Hero({}: Props) {
  return (
    <header className={styles['hero--container']}>
      <h1 className={manropeBold.className}>
        Protect your data and operations with Teth Secure's multi-layered
        authentication solutions.
      </h1>
      <h6 className={`${manropeMedium.className} my-6 text-p-text-color`}>
        Protect your data and operations with Teth Secure's multi-layered
        authentication solutions.
      </h6>
      <div className={`${styles['button--container']} mb-6`}>
        <BlueBtn linkTo='' hasBlueBackground btnText='Get Started for free' />
        <BlueBtn linkTo='' hasBlueBackground={false} btnText='Contact us' />
      </div>
      <Image src={HeroImage} alt='Hero' rel='preload' />
    </header>
  );
}
