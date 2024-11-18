'use client';

import React, { useState, useEffect } from 'react';
import SearchUser from '../general/SearchUser';
import TeamManagementTable from './TeamManagementTable';

import Image from 'next/image';

import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';

import Backdrop from '../general/Backdrop';
import SignInCard from '../general/SignInCard';

import { manropeBold } from '@/styles/fonts';

import AddMemberIcon from '@/../public/icons/add-member.png';

import styles from '@/styles/general.module.scss';
import reportStyles from '@/styles/report.module.scss';
import AddMemberForm from './AddMemberForm';

export const users: TeamUserData[] = [
  {
    name: 'Adekunle Adebayo',
    emailAddress: 'adekunle.adebayo@example.com',
    role: 'Admin',
    lastLogin: '2024-11-15T14:30:00Z',
    userStatus: 'Active',
    userID: 'USR001',
  },
  {
    name: 'Chioma Okafor',
    emailAddress: 'chioma.okafor@example.com',
    role: 'Editor',
    lastLogin: '2024-11-14T10:20:00Z',
    userStatus: 'Active',
    userID: 'USR002',
  },
  {
    name: 'Emeka Uche',
    emailAddress: 'emeka.uche@example.com',
    role: 'Manager',
    lastLogin: '2024-11-10T09:45:00Z',
    userStatus: 'Inactive',
    userID: 'USR003',
  },
  {
    name: 'Amina Yusuf',
    emailAddress: 'amina.yusuf@example.com',
    role: 'User',
    lastLogin: '2024-11-12T16:00:00Z',
    userStatus: 'Active',
    userID: 'USR004',
  },
  {
    name: 'Ifeanyi Nwankwo',
    emailAddress: 'ifeanyi.nwankwo@example.com',
    role: 'User',
    lastLogin: '2024-11-08T12:15:00Z',
    userStatus: 'Pending',
    userID: 'USR005',
  },
  {
    name: 'Bolaji Alabi',
    emailAddress: 'bolaji.alabi@example.com',
    role: 'Editor',
    lastLogin: '2024-11-13T11:10:00Z',
    userStatus: 'Active',
    userID: 'USR006',
  },
  {
    name: 'Fatima Abdullahi',
    emailAddress: 'fatima.abdullahi@example.com',
    role: 'Admin',
    lastLogin: '2024-11-16T17:50:00Z',
    userStatus: 'Active',
    userID: 'USR007',
  },
  {
    name: 'Oluwaseun Adeola',
    emailAddress: 'oluwaseun.adeola@example.com',
    role: 'User',
    lastLogin: '2024-11-09T14:00:00Z',
    userStatus: 'Inactive',
    userID: 'USR008',
  },
  {
    name: 'Ngozi Chukwu',
    emailAddress: 'ngozi.chukwu@example.com',
    role: 'User',
    lastLogin: '2024-11-15T19:40:00Z',
    userStatus: 'Active',
    userID: 'USR009',
  },
  {
    name: 'Kehinde Ayoola',
    emailAddress: 'kehinde.ayoola@example.com',
    role: 'User',
    lastLogin: '2024-11-14T15:25:00Z',
    userStatus: 'Pending',
    userID: 'USR010',
  },
];

export type TeamUserData = {
  name: string;
  emailAddress: string;
  userStatus: string;
  lastLogin: string;
  role: string;
  userID: string;
  onShowResetUserPassword?: () => void; // To show the reset password modal
  onSelectUser?: (value: string) => void;
  onEditRole?: (name: string, role: string) => void; // To show the edit role modal of the correct user
  onDeactivateUser?: (name: string, role: string) => void;
};

export default function TeamManagementPage() {
  const [searchInput, setSearchInput] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    // Prevent body scroll when the reset password modal is open
    if (showBackdrop) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [showBackdrop]);

  const TopBtn = () => {
    return (
      <button
        className={`${styles['blue--border--btn']} hidden lg:flex`}
        type='button'
        onClick={() => setShowBackdrop(true)}
      >
        <p className={`text-sm md:text-base ${manropeBold.className}`}>
          Add new member
        </p>
      </button>
    );
  };

  // filter the users in the Team Management component based on the search input value
  const filteredItems =
    searchInput === ''
      ? users
      : users.filter((item) => {
          const searchTerm = searchInput.toLowerCase();
          return (
            item.name.toLowerCase().includes(searchTerm) ||
            item.emailAddress.toLowerCase().includes(searchTerm)
          );
        });

  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <div className='flex items-center gap-4'>
            <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
              Team Management
            </h3>
            <TopBtn />
            <Image
              src={AddMemberIcon}
              alt='Add member'
              className={`flex lg:hidden`}
              onClick={() => setShowBackdrop(true)}
            />
          </div>
        }
        showRightContentForMobile={true}
      />
      <SearchUser
        onChange={(value) => setSearchInput(value)}
        placeholder='Search by name and email'
      />
      <TeamManagementTable users={filteredItems} />

      {showBackdrop && (
        <div>
          <Backdrop onChange={() => setShowBackdrop(false)} />

          <div className={`${reportStyles['reset--user__password']}`}>
            <SignInCard hasBackdrop>
              <AddMemberForm onSubmitHandler={() => setShowBackdrop(false)} />
            </SignInCard>
          </div>
        </div>
      )}
    </DashboardContentsContainer>
  );
}
