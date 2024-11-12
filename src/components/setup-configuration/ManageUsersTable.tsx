'use client';

import styles from '@/styles/report.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import React from 'react';

import Image from 'next/image';
import ActionIcon from '@/../public/icons/action-icon.png';

type UserData = {
  name: string;
  emailAddress: string;
  userStatus: string;
  totalOTPGenerated: number;
  usedOTP: number;
  failedOTP: number;
};

const userData: UserData[] = [
  {
    name: 'Adeola Akinyemi',
    emailAddress: 'adeola.akinyemi@example.com',
    userStatus: 'active',
    totalOTPGenerated: 30,
    usedOTP: 20,
    failedOTP: 5,
  },
  {
    name: 'Chinwe Okafor',
    emailAddress: 'chinwe.okafor@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 25,
    usedOTP: 15,
    failedOTP: 7,
  },
  {
    name: 'Bola Adebayo',
    emailAddress: 'bola.adebayo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 40,
    usedOTP: 35,
    failedOTP: 2,
  },
  {
    name: 'Ifeanyi Eze',
    emailAddress: 'ifeanyi.eze@example.com',
    userStatus: 'active',
    totalOTPGenerated: 50,
    usedOTP: 40,
    failedOTP: 5,
  },
  {
    name: 'Ngozi Adichie',
    emailAddress: 'ngozi.adichie@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 20,
    usedOTP: 10,
    failedOTP: 8,
  },
  {
    name: 'Tunde Bakare',
    emailAddress: 'tunde.bakare@example.com',
    userStatus: 'active',
    totalOTPGenerated: 45,
    usedOTP: 30,
    failedOTP: 10,
  },
  {
    name: 'Aisha Bello',
    emailAddress: 'aisha.bello@example.com',
    userStatus: 'active',
    totalOTPGenerated: 33,
    usedOTP: 28,
    failedOTP: 3,
  },
  {
    name: 'Emeka Obi',
    emailAddress: 'emeka.obi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 22,
    usedOTP: 18,
    failedOTP: 2,
  },
  {
    name: 'Funke Ojo',
    emailAddress: 'funke.ojo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 38,
    usedOTP: 33,
    failedOTP: 4,
  },
  {
    name: 'Gbenga Alabi',
    emailAddress: 'gbenga.alabi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 18,
    usedOTP: 13,
    failedOTP: 3,
  },
  {
    name: 'Kemi Lawal',
    emailAddress: 'kemi.lawal@example.com',
    userStatus: 'active',
    totalOTPGenerated: 35,
    usedOTP: 32,
    failedOTP: 1,
  },
  {
    name: 'Yinka Adebisi',
    emailAddress: 'yinka.adebisi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 17,
    usedOTP: 12,
    failedOTP: 5,
  },
  {
    name: 'Sade Bamidele',
    emailAddress: 'sade.bamidele@example.com',
    userStatus: 'active',
    totalOTPGenerated: 40,
    usedOTP: 35,
    failedOTP: 2,
  },
  {
    name: 'Chidinma Nwankwo',
    emailAddress: 'chidinma.nwankwo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 42,
    usedOTP: 39,
    failedOTP: 1,
  },
  {
    name: 'Olusegun Folarin',
    emailAddress: 'olusegun.folarin@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 26,
    usedOTP: 20,
    failedOTP: 4,
  },
];

export default function ManageUsersTable() {
  return (
    <table className={styles['report--table']}>
      <thead>
        <tr>
          <th className={manropeBold.className}>Name</th>
          <th className={manropeBold.className}>Email Address</th>
          <th className={manropeBold.className}>User Status</th>
          <th className={manropeBold.className}>Total OTP Generated</th>
          <th className={manropeBold.className}>Used OTP</th>
          <th className={manropeBold.className}>Failed OTP</th>
          <th className={manropeBold.className}>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((record: UserData, index: number) => (
          <tr key={index}>
            <td className={manropeMedium.className}>{record.name}</td>
            <td className={manropeMedium.className}>{record.emailAddress}</td>
            <td className={manropeMedium.className}>{record.userStatus}</td>
            <td className={manropeMedium.className}>
              {record.totalOTPGenerated}
            </td>
            <td className={manropeMedium.className}>{record.usedOTP}</td>
            <td className={manropeMedium.className}>{record.failedOTP}</td>
            <td className='flex'>
              <Image src={ActionIcon} alt='' className='self-center m-auto' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
