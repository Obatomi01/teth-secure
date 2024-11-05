import React from 'react';
import Image from 'next/image';

import { PricingPlansType } from './PricingPlans';

import styles from '@/styles/home.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';

import CheckMark from '@/../public/icons/check-mark.png';

type Props = {};

export default function PricingPlan({
  btnType,
  amount,
  typeOfBilling,
  featuresInPLan,
  typeOfPricingPlan,
}: PricingPlansType) {
  return (
    <div className={styles['pricing--plan']}>
      <p className='text-color-primary text-base mb-6'>{typeOfPricingPlan}</p>
      <div className={`h-16`}>{amount}</div>
      <p className={`${manropeMedium.className} my-2 text-md h-6`}>
        {typeOfBilling}
      </p>

      <div className='my-6 flex flex-col gap-4'>
        {featuresInPLan.map((feature, index) => (
          <div key={index} className='flex items-center gap-2'>
            <Image src={CheckMark} alt='Check Mark' />
            <p className='text-base'>{feature}</p>
          </div>
        ))}
      </div>

      {btnType}
      <p className='text-base text-center mt-4'>No credit card required</p>
    </div>
  );
}
