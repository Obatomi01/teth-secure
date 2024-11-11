import React from 'react';
import Image from 'next/image';

import styles from '@/styles/home.module.scss';
import btnStyles from '@/styles/general.module.scss';

import { manropeMedium, manropeSemiBold, manropeBold } from '@/styles/fonts';
import BlueBtn from '../general/BlueBtn';

import DollarSign from '@/../public/icons/dollar-sign.png';
import PricingPlan from './PricingPlan';

type Props = {
  isLoggedIn?: boolean;
};

export interface PricingPlansType {
  typeOfPricingPlan: string;
  amount: React.ReactNode;
  featuresInPLan: string[];
  btnType: React.ReactNode;
  typeOfBilling: string;
  isLoggedin?: boolean;
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

export default function PricingPlans({ isLoggedIn }: Props) {
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
      btnType: !isLoggedIn ? (
        <BlueBtn linkTo='/' hasBlueBackground={false} btnText='Get started' />
      ) : (
        <div
          className={`${btnStyles['blue--border--btn']}
        `}
        >
          <p className={`text-sm md:text-base ${manropeBold.className}`}>
            Current Plan
          </p>
        </div>
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
      btnType: (
        <BlueBtn
          linkTo={isLoggedIn ? '/subscriptions/pro/card-payment' : '/'}
          hasBlueBackground
          btnText={isLoggedIn ? 'Upgrade to Pro' : 'Try pro'}
        />
      ),
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
      btnType: (
        <BlueBtn
          linkTo={isLoggedIn ? '/subscriptions/enterprise/card-payment' : '/'}
          hasBlueBackground
          btnText='Try enterprise'
        />
      ),
      typeOfBilling: 'billed monthly',
    },
  ];

  return (
    <section className={styles['pricing--plans__container']}>
      <h2 className={`${manropeSemiBold.className}`}>Pricing & Plans</h2>
      <h6 className={`text-p-text-color ${manropeMedium.className}`}>
        Choose the plan that best fits your business needs and start securing
        your data with Teth Secure.
      </h6>
      <div
        className={`${isLoggedIn ? 'md:flex-col xl:flex-row gap-8' : ''} ${
          styles['pricing--plan__container']
        }`}
      >
        {pricingPlans.map((plan: PricingPlansType, index) => (
          <PricingPlan key={index} {...plan} isLoggedin={isLoggedIn} />
        ))}
      </div>
    </section>
  );
}
