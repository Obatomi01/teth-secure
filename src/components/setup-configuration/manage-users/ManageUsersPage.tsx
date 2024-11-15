'use client';

import React, { useState } from 'react';
import DashboardContentsContainer from '../../general/DashboardContentsContainer';
import TopDashboardContainer from '../../dashboard/TopDashboardContainer';

import { manropeBold } from '@/styles/fonts';
import ManageUsersTable from './ManageUsersTable';
import SearchUser from '@/components/general/SearchUser';

import { userData } from './ManageUsersTable';

export default function ManageUsersPage() {
  const [searchInput, setSearchInput] = useState('');

  // filter the users in the ManageUsersTable component based on the search input value
  const filteredItems =
    searchInput === ''
      ? userData
      : userData.filter((item) => {
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
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            Manage Users
          </h3>
        }
        showRightContentForMobile={true}
      />
      <SearchUser
        onChange={(value) => setSearchInput(value)}
        placeholder='Search by name and email'
      />
      <ManageUsersTable users={filteredItems} />
    </DashboardContentsContainer>
  );
}
