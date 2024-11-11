'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/../public/icons/tethsecure.svg';
import Dollar from '@/../public/icons/dollar-sign.png';
import Line from '@/../public/icons/horizontal-line.png';

import styles from '@/styles/subscriptions.module.scss';

import { manropeMedium, manropeSemiBold, manropeBold } from '@/styles/fonts';
import PaymentOptions from './PaymentOptions';

type Props = {
  plan: string;
};

type PricingOptions = {
  plan: string;
  price: string;
  text: string;
};

export const pricingOptions: PricingOptions[] = [
  {
    plan: 'pro',
    price: '50',
    text: 'Pro',
  },
  {
    plan: 'enterprise',
    price: '99',
    text: 'Enterprise',
  },
];

export default function CheckOutLeftContainer({ plan }: Props) {
  const selectedPlan = pricingOptions.find((option) => option.plan === plan);

  return (
    <section className={`${styles['checkout--left__container']}`}>
      <Link href={'/dashboard'}>
        <Image src={Logo} alt='logo' priority />
      </Link>

      <div
        className={`mt-8 mb-4`}
        style={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Image
          src={Dollar}
          alt='Dollar Sign'
          style={{
            width: '20px',
            height: '20px',
          }}
        />
        <h1 className={`text-6xl ${manropeSemiBold.className}`}>
          {selectedPlan?.price}
        </h1>
        <p className={manropeMedium.className}>/month</p>
      </div>

      <div className={`flex justify-between`}>
        <div className={``}>
          <h6 className={`${manropeSemiBold.className}`}>
            Teth Secure {selectedPlan?.text} Plan
          </h6>
        </div>
        <div className='flex'>
          <Image
            src={Dollar}
            alt='Dollar Sign'
            style={{
              width: '16px',
              height: '16px',
              alignSelf: 'center',
            }}
          />
          <p className={`text-base ${manropeBold.className}`}>
            {selectedPlan?.price}
          </p>
        </div>
      </div>

      <p className={`${manropeMedium.className} w-3/5 text-sm mb-8`}>
        A Single license for personal use billed yearly
      </p>

      <Image src={Line} alt='line' />

      <div className='mt-2 mb-8 flex justify-between'>
        <h6 className={`text-base ${manropeSemiBold.className}`}>Total Due</h6>
        <div className='flex'>
          <Image
            src={Dollar}
            alt='Dollar Sign'
            style={{
              width: '16px',
              height: '16px',
              alignSelf: 'center',
            }}
          />
          <p className={`text-base ${manropeBold.className}`}>
            {selectedPlan?.price}
          </p>
        </div>
      </div>

      <PaymentOptions />
    </section>
  );
}
