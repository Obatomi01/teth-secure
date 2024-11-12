import React from 'react';
import Image from 'next/image';

import { OtpRecord } from './OTPReportTable';

import { manropeSemiBold, manropeLight } from '@/styles/fonts';

import styles from '@/styles/report.module.scss';

import TokenIcon from '@/../public/icons/token icons/token.png';
import NextArrow from '@/../public/icons/next.png';

export default function OTPReport({
  userID,
  date,
  otpLength,
  otpType,
  validity,
  status,
}: OtpRecord) {
  return (
    <div className={styles['report--item']}>
      <div className='flex content-center gap-2'>
        <Image src={TokenIcon} alt='token' />

        <p className={manropeSemiBold.className}>{userID}</p>
      </div>

      <div className='flex content-center gap-2'>
        <div className='flex flex-col gap-2'>
          <p
            style={{
              color:
                status === 'success'
                  ? '#008423'
                  : status === 'expired'
                  ? '#EB5757'
                  : '#F94144',
              backgroundColor:
                status === 'success'
                  ? '#E9FFE1'
                  : status === 'expired'
                  ? '#FDEDEC'
                  : '#FFF8F8',
              width: '108px',
              textAlign: 'center',
              paddingBlock: '0.2rem',
              margin: 'auto',
              borderRadius: '8px',
              fontSize: '16px',
            }}
            className='text-center'
          >
            {status}
          </p>
          <p className={`${manropeLight.className} text-sm`}>{date}</p>
        </div>
        {/* <Image src={NextArrow} alt='next' className='self-center' /> */}
      </div>
    </div>
  );
}
