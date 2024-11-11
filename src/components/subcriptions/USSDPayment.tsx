'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import PaymentCard from './PaymentCard';

import { manropeMedium } from '@/styles/fonts';

import Image, { StaticImageData } from 'next/image';

import GTB from '@/../public/icons/bank-icons/gt-icon.png';
import FCMB from '@/../public/icons/bank-icons/fcmb-icon.png';
import Branch from '@/../public/icons/bank-icons/branch-icon.png';
import Access from '@/../public/icons/bank-icons/access-icon.png';

export type BankOptionsProps = {
  bankName: string;
  bankIcon: StaticImageData;
  linkTo: string;
  code: string;
  title: string;
};

export default function USSDPayment() {
  const { plan } = useParams();

  const bankOptions = [
    {
      bankName: 'Guaranty Trust Bank plc',
      title: 'gtb',
      bankIcon: GTB,
      linkTo: `/subscriptions/${plan}/ussd/gtb`,
      code: '*737*50*amount*46#',
    },
    {
      bankName: 'FCMB',
      title: 'fcmb',
      bankIcon: FCMB,
      linkTo: `/subscriptions/${plan}/ussd/fcmb`,
      code: '*329*50*amount#',
    },
    {
      bankName: 'Branch',
      title: 'branch',
      bankIcon: Branch,
      linkTo: `/subscriptions/${plan}/ussd/branch`,
      code: '*384*50*amount#',
    },
    {
      bankName: 'Access Bank',
      title: 'access',
      bankIcon: Access,
      linkTo: `/subscriptions/${plan}/ussd/access`,
      code: '*901*50*amount#',
    },
  ];
  return (
    <PaymentCard>
      {bankOptions.map((bankOption, index) => (
        <Link href={bankOption.linkTo} key={index} className='flex gap-4'>
          <Image src={bankOption.bankIcon} alt={bankOption.bankName} />
          <p className={`${manropeMedium.className} text-sm self-center`}>
            {bankOption.bankName}
          </p>
        </Link>
      ))}
    </PaymentCard>
  );
}
