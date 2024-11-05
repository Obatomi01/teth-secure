import React from 'react';
import Image from 'next/image';

import styles from '@/styles/home.module.scss';
import { manropeMedium, manropeSemiBold } from '@/styles/fonts';
import BlueBtn from '../general/BlueBtn';

import DollarSign from '@/../public/icons/dollar-sign.png';
import PricingPlan from './PricingPlan';

export interface PricingPlansType {
  typeOfPricingPlan: string;
  amount: React.ReactNode;
  featuresInPLan: string[];
  btnType: React.ReactNode;
  typeOfBilling: string;
}

const planAmount = (amount: string) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
      }}
    >
      <Image src={DollarSign} alt='Dollar Sign' />
      <h1 className={`text-6xl ${manropeSemiBold.className}`}>{amount}</h1>
      <p className={manropeMedium.className}>/month</p>
    </div>
  );
};

const pricingPlans: PricingPlansType[] = [
  {
    typeOfPricingPlan: 'BASIC PLAN',
    amount: (
      <div className='h-14 flex'>
        <h1 className={`mt-auto text-3xl ${manropeSemiBold.className} `}>
          Free
        </h1>
      </div>
    ),
    featuresInPLan: [
      'Two-Factor Authentication (2FA)',
      'OTP Authentication',
      'Email Tokenization',
      '24/7 Support',
      'Monthly Security Reports',
    ],
    btnType: (
      <BlueBtn linkTo='/' hasBlueBackground={false} btnText='Get started' />
    ),
    typeOfBilling: '',
  },
  {
    typeOfPricingPlan: 'PRO PLAN',
    amount: planAmount('50'),
    featuresInPLan: [
      'All Basic Plan Features',
      'Customizable Security  Settings',
      'Priority Support',
      'Advanced Analytics',
      'API Access',
    ],
    btnType: <BlueBtn linkTo='/' hasBlueBackground btnText='Try pro' />,
    typeOfBilling: 'billed monthly',
  },
  {
    typeOfPricingPlan: 'ENTERPRISE PLAN',
    amount: planAmount('99'),
    featuresInPLan: [
      'All Pro Plan Features',
      'Dedicated Account Manager',
      'Compliance Assistance',
      'Enterprise-Grade Security',
      'Custom Pricing Options',
    ],
    btnType: <BlueBtn linkTo='/' hasBlueBackground btnText='Try enterprise' />,
    typeOfBilling: 'billed monthly',
  },
];

export default function PricingPlans() {
  return (
    <section className={styles['pricing--plans__container']}>
      <h2 className={`${manropeSemiBold.className}`}>Pricing & Plans</h2>
      <h6 className={`text-p-text-color ${manropeMedium.className}`}>
        Choose the plan that best fits your business needs and start securing
        your data with Teth Secure.
      </h6>
      <div className={styles['pricing--plan__container']}>
        {pricingPlans.map((plan: PricingPlansType, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
