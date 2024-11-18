'use client';

import React from 'react';
import { users } from './TeamManagementPage';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

type Props = {
  userID: string;
};

export default function MemberSummary({ userID }: Props) {
  const user = users.find((user) => user.userID.toLowerCase() === userID);

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
      {userDetail('Role', user?.role)}
      {userDetail('Last Login', user?.lastLogin)}
    </section>
  );
}
