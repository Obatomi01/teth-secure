'use client';

import React from 'react';
import Image from 'next/image';

import { useParams } from 'next/navigation';

import Dollar from '@/../public/icons/dollar-sign.png';
import {
  manropeMedium,
  manropeLight,
  manropeSemiBold,
  manropeBold,
} from '@/styles/fonts';

import { pricingOptions } from './CheckOutLeftContainer';
import PaymentCard from './PaymentCard';
import CountdownTimer from './CountdownTimer';

export default function BankPayment() {
  const { plan } = useParams();

  const selectedPlan = pricingOptions.find((option) => option.plan === plan);

  return (
    <PaymentCard>
      <div className='flex w-full justify-center'>
        <p className={`text-xl text-center mr-2 ${manropeLight.className}`}>
          Transfer
        </p>
        <Image
          src={Dollar}
          alt='Dollar Sign'
          style={{
            width: '20px',
            height: '20px',
            alignSelf: 'center',
          }}
        />
        <p className={`text-xl text-center mr-2 ${manropeMedium.className}`}>
          {selectedPlan?.price}
        </p>
        <p className={`text-xl text-center ${manropeLight.className}`}>to</p>
      </div>
      <p className={`text-xl ${manropeSemiBold.className} text-center`}>
        Opay Bank
      </p>
      <h6 className={`text-3xl ${manropeBold.className} text-center`}>
        7062611406
      </h6>

      <CountdownTimer countdownDuration={1800} />
    </PaymentCard>
  );
}
