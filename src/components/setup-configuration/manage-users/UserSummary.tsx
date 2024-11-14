'use client';

import React from 'react';
import { userData } from './ManageUsersTable';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

type Props = {
  userID: string;
};

export default function UserSummary({ userID }: Props) {
  const user = userData.find((user) => user.userID === userID);

  function userDetail<T extends string | number | undefined>(
    title: string,
    value: T
  ) {
    return (
      <div className='flex justify-between content-center'>
        <h3 className={`${manropeSemiBold.className} text-lg`}>{title}:</h3>
        <p
          className={`${manropeMedium.className} text-lg text-start w-1/2`}
          style={{
            overflowWrap: 'break-word',
          }}
        >
          {value}
        </p>
      </div>
    );
  }

  return (
    <section className='w-11/12 sm:w-3/4 mx-auto flex flex-col gap-8'>
      {userDetail('User ID', user?.userID)}
      {userDetail('Name', user?.name)}
      {userDetail('Email Address', user?.emailAddress)}
      {userDetail('User Status', user?.userStatus)}
      {userDetail('Total OTP Generated', user?.totalOTPGenerated)}
      {userDetail('Used OTP', user?.usedOTP)}
      {userDetail('Failed OTP', user?.failedOTP)}
    </section>
  );
}
