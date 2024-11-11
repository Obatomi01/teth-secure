import React from 'react';
import { manropeMedium } from '@/styles/fonts';

import { RequestsType } from './BottomDashboardContainer';

export default function TopRequest({ name, users, width }: RequestsType) {
  return (
    <div className='flex w-full justify-between content-center'>
      <div
        style={{
          width: '72%',
        }}
      >
        <div
          style={{
            backgroundColor: '#F8F8F8',
            width: width,
          }}
          className='p-3'
        >
          <p>{name}</p>
        </div>
      </div>
      <p
        className={`text-end text-sm ${manropeMedium.className} self-center`}
        style={{
          width: '23%',
        }}
      >
        {users} Users
      </p>
    </div>
  );
}
