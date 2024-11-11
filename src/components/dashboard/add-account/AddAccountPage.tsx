'use client';

import React from 'react';
import TopDashboardContainer from '../TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';

import { manropeBold } from '@/styles/fonts';
import AddAccountForm from './AddAccountForm';

export default function AddAccountPage() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-2xl ${manropeBold.className}`}>
            Add New Account
          </h3>
        }
      />
      <AddAccountForm />
    </DashboardContentsContainer>
  );
}
