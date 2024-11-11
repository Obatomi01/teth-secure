import React from 'react';
import Image from 'next/image';

import styles from '@/styles/dashboard.module.scss';

import Chart from '@/../public/images/Chart.png';
import TokenUsed from '@/../public/icons/token icons/token-used.png';
import TokenGenerated from '@/../public/icons/token icons/token-generated.png';

import { manropeMedium, manropeSemiBold, manropeBold } from '@/styles/fonts';
import TopRequest from './TopRequest';
import RecentTokenRequests from './RecentTokenRequests';
import ServiceTraffic from './ServiceTraffic';

export type RequestsType = {
  name: string;
  users: number;
  width: string;
};

export type RecentTokenRequestsType = {
  name: string;
  time: string;
  status: 'failed' | 'success';
};

const requests: RequestsType[] = [
  {
    name: 'One time Password',
    users: 500,
    width: '95%',
  },
  {
    name: 'Two Factor Authentication',
    users: 300,
    width: '90%',
  },
  {
    name: 'Verification ',
    users: 50,
    width: '50%',
  },
];

const recentTokenRequests: RecentTokenRequestsType[] = [
  {
    name: 'Token 123',
    time: '1 min ago',
    status: 'success',
  },
  {
    name: 'Token 456',
    time: '2 min ago',
    status: 'success',
  },
  {
    name: 'Token 789',
    time: '3 min ago',
    status: 'failed',
  },
];

export default function BottomDashboardContainer() {
  return (
    <section className={styles['bottom--dashboard__container']}>
      <div className={styles['graph--container']}>
        <div className='w-full md:w-5/6 lg:w-1/2 flex  justify-between'>
          <p className={`text-xs ${manropeSemiBold.className}`}>Total Users</p>
          <div className='flex content-center'>
            <Image
              src={TokenGenerated}
              alt='Token Used'
              style={{
                objectFit: 'contain',
              }}
            />
            <p className={`text-xs ${manropeMedium.className}`}>
              Token Generated
            </p>
          </div>
          <div className='flex'>
            <Image
              src={TokenUsed}
              alt='Token Used'
              style={{
                objectFit: 'contain',
              }}
            />
            <p className={`text-xs ${manropeMedium.className}`}>Token Used</p>
          </div>
        </div>
        <Image src={Chart} alt='Chart' />
      </div>

      <div className={styles['bottom--left__container']}>
        <ServiceTraffic />
        <div
          className={`w-full ${styles['requests--container']} flex flex-col gap-2`}
        >
          <p className={`text-sm ${manropeBold.className}`}>Top Requests</p>
          {requests.map((request, index) => (
            <TopRequest key={index} {...request} />
          ))}
        </div>

        <div
          className={`w-full ${styles['requests--container']} flex flex-col gap-2`}
        >
          <p className={`text-sm ${manropeBold.className}`}>Request Requests</p>
          {recentTokenRequests.map((request, index) => (
            <RecentTokenRequests key={index} {...request} />
          ))}
        </div>
      </div>
    </section>
  );
}
