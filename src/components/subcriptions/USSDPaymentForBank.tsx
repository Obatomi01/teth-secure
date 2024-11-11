'use client';

import React from 'react';
import PaymentCard from './PaymentCard';

import Image from 'next/image';

import { BankOptionsProps } from './USSDPayment';
import {
  manropeSemiBold,
  manropeMedium,
  manropeBold,
  manropeLight,
} from '@/styles/fonts';

type Props = {
  bank: BankOptionsProps;
};

export default function USSDPaymentForBank({ bank }: Props) {
  return (
    <PaymentCard>
      <div className='flex justify-center gap-4'>
        <Image src={bank.bankIcon} alt={bank.bankName} />
        <h4 className={`${manropeSemiBold.className} text-xl self-center`}>
          USSD Payment
        </h4>
      </div>
      <p className={`${manropeMedium.className} text-center text-base`}>
        Dial the USSD code below on your mobile phone to complete the payment
      </p>
      <h3 className={`${manropeBold.className} text-2xl text-center`}>
        {bank.code}
      </h3>
      <p
        className={`${manropeLight.className} text-center text-base`}
        style={{
          cursor: 'pointer',
        }}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(
              'This is the text to be copied'
            );
            alert('Content copied to clipboard');
            /* Resolved - text copied to clipboard successfully */
          } catch (err) {
            if (err instanceof Error) {
              alert(err.message);
            } else {
              alert('An unknown error occurred');
            }
            /* Rejected - text failed to copy to the clipboard */
          }
        }}
      >
        Tap here to copy the code
      </p>
    </PaymentCard>
  );
}
