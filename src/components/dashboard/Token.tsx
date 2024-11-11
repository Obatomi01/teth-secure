import React from 'react';
import Image from 'next/image';

import { TokenProps } from './Tokens';
import { manropeMedium, manropeSemiBold } from '@/styles/fonts';

import styles from '@/styles/dashboard.module.scss';

import Trend from '@/../public/icons/token icons/trend.png';

export default function Token({
  name,
  backgroundColor,
  symbol,
  value,
}: TokenProps) {
  return (
    <div
      className={styles['token--container']}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className='flex gap-6'>
        <Image
          src={symbol}
          alt='Token'
          style={{
            objectFit: 'contain',
          }}
        />
        <p className={`${manropeMedium.className}`}>{name}</p>
      </div>
      <div className='flex justify-between'>
        <h1 className={manropeSemiBold.className}>{value}</h1>
        <p className={`${manropeMedium.className} flex self-center`}>
          +11.2%
          <span className='content-center'>
            <Image src={Trend} alt='trend' />
          </span>
        </p>
      </div>
    </div>
  );
}
