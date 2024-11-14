'use client';

import React from 'react';
import { otpData } from './OTPReportTable';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

type Props = {
  userID: string;
};

export default function OTPSummary({ userID }: Props) {
  const user = otpData.find((user) => user.userID === userID);

  function userDetail<T extends string | number | undefined>(
    title: string,
    value: T
  ) {
    return (
      <div className='flex justify-between content-center'>
        <h3 className={`${manropeSemiBold.className} text-lg`}>{title}:</h3>
        <p className={`${manropeMedium.className} text-lg text-start w-1/2`}>
          {value}
        </p>
      </div>
    );
  }

  return (
    <section className='w-11/12 sm:w-3/4 mx-auto flex flex-col gap-8'>
      {userDetail('User ID', user?.userID)}
      {userDetail('OTP Length', user?.otpLength)}
      {userDetail('OTP Type', user?.otpType)}
      {userDetail('OTP Validity', user?.validity)}
      {userDetail('Date', user?.date)}
      {userDetail('Status', user?.status)}
    </section>
  );
}
