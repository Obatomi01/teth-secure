import React from 'react';
import Link from 'next/link';

import { UserData } from './ManageUsersTable';
import styles from '@/styles/report.module.scss';

import NextArrow from '@/../public/icons/next.png';
import Image from 'next/image';
import { manropeSemiBold, manropeLight } from '@/styles/fonts';
import UserIcon from '@/../public/icons/dashboard-nav/account-settings.png';

export default function UsersReport({
  name,
  emailAddress,
  userStatus,
  // totalOTPGenerated,
  // usedOTP,
  // failedOTP,
  userID,
}: UserData) {
  return (
    <Link href={`/setup-configuration/manage-users/${userID}`}>
      <div className={styles['report--item']}>
        <div className='flex content-center gap-2'>
          <Image src={UserIcon} alt='user' />
          <p className={manropeSemiBold.className}>{name}</p>
        </div>
        <div className='flex content-center gap-2'>
          <div className='flex flex-col gap-2'>
            <p
              style={{
                color: userStatus === 'active' ? '#008423' : '#EB5757',
                backgroundColor:
                  userStatus === 'active' ? '#E9FFE1' : '#FDEDEC',
                width: '108px',
                textAlign: 'center',
                paddingBlock: '0.2rem',
                margin: 'auto',
                borderRadius: '8px',
                fontSize: '16px',
              }}
              className='text-center'
            >
              {userStatus}
            </p>
            <p className={`${manropeLight.className} text-sm`}>
              {emailAddress}
            </p>
          </div>
          <Image src={NextArrow} alt='next' className='self-center' />
        </div>
      </div>
    </Link>
  );
}
