import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/subscriptions.module.scss';

import { manropeMedium } from '@/styles/fonts';

import { usePathname } from 'next/navigation';

import { PaymentOptionsType } from './PaymentOptions';

export default function PaymentOption({
  title,
  linkTo,
  icon,
}: PaymentOptionsType) {
  const pathname = usePathname();

  return (
    <Link
      href={linkTo}
      className={`${
        pathname.split('/')[3] === linkTo.split('/')[3]
          ? styles['active--payment--option']
          : ''
      } py-4 px-8 flex gap-8`}
    >
      <div className='w-1/12 flex'>
        <Image
          src={icon}
          alt={title}
          style={{
            alignSelf: 'center',
          }}
        />
      </div>
      <p className={`${manropeMedium.className}`}>{title}</p>
    </Link>
  );
}
