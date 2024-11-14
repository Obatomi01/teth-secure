'use client';

import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import styles from '@/styles/dashboard.module.scss';

import ProfilePicture from '@/../public/icons/profile-picture.png';
import SignOut from '@/../public/icons/logout.png';

import { signOutHandler } from '@/app/action';

type Props = {
  rightContent: React.ReactNode;
  showRightContentForMobile?: boolean;
};

export default function TopDashboardContainer({
  rightContent,
  showRightContentForMobile,
}: Props) {
  const router = useRouter();

  return (
    <>
      <section
        className={`hidden md:flex ${styles['top--dashboard__container']}`}
      >
        {rightContent}
        <div className='flex gap-6 content-center'>
          <Image
            src={ProfilePicture}
            alt='profile-picture'
            style={{
              width: '24px',
              height: '24px',
              alignSelf: 'center',
            }}
          />
          <p className='self-center'>John Olasunkanmi</p>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={async () => {
              await signOutHandler();

              router.push('/sign-in');
            }}
          >
            <Image src={SignOut} alt='sign-out' />
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-4 md:hidden justify-between'>
        <div className='flex gap-4 content-center'>
          <Image
            src={ProfilePicture}
            alt='profile-picture'
            style={{
              width: '24px',
              height: '24px',
              alignSelf: 'center',
            }}
          />
          <p className='self-center'>John Olasunkanmi</p>
        </div>

        {showRightContentForMobile && (
          <div className='w-max'>{rightContent}</div>
        )}
      </section>
    </>
  );
}
