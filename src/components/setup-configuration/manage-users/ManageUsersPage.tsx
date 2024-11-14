'use client';

import React from 'react';
import DashboardContentsContainer from '../../general/DashboardContentsContainer';
import TopDashboardContainer from '../../dashboard/TopDashboardContainer';

import { manropeBold } from '@/styles/fonts';
import ManageUsersTable from './ManageUsersTable';

export default function ManageUsersPage() {
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
      <ManageUsersTable />
    </DashboardContentsContainer>
  );
}
