import React from 'react';
import { StaticImageData } from 'next/image';

import styles from '@/styles/dashboard.module.scss';

import Users from '@/../public/icons/token icons/account_circle.png';
import TokenIcon from '@/../public/icons/token icons/token.png';
import Token from './Token';

export type TokenProps = {
  name: string;
  symbol: StaticImageData;
  value: string;
  backgroundColor: string;
};

const tokens: TokenProps[] = [
  {
    name: 'Total users',
    value: '5,450',
    symbol: Users,
    backgroundColor: '#E3F5FF80',
  },
  {
    name: 'Token Generated',
    value: '2,091',
    symbol: TokenIcon,
    backgroundColor: '#FFFFFF80',
  },
  {
    name: 'Total used token',
    value: '5,232',
    symbol: TokenIcon,
    backgroundColor: '#EBFFE980',
  },
  {
    name: 'Total failed token',
    value: '3,912',
    symbol: TokenIcon,
    backgroundColor: '#F3F3F380',
  },
];

export default function Tokens() {
  return (
    <section className={styles['tokens--container']}>
      {tokens.map((el, index) => (
        <Token key={index} {...el} />
      ))}
    </section>
  );
}
