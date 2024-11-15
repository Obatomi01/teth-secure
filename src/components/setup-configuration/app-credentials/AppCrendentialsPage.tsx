'use client';

import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';
import React from 'react';

import { manropeBold } from '@/styles/fonts';
import AppCredentialsForm from './AppCredentialsForm';

export default function AppCrendentialsPage() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            App Credentials
          </h3>
        }
      />
      <AppCredentialsForm />
    </DashboardContentsContainer>
  );
}
