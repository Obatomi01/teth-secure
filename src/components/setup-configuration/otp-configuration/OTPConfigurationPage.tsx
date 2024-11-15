'use client';

import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';
import React from 'react';

import { manropeBold } from '@/styles/fonts';
import OTPConfigurationForm from './OTPConfigurationForm';

export default function OTPConfigurationPage() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            OTP Configuration
          </h3>
        }
        showRightContentForMobile={true}
      />
      <OTPConfigurationForm />
    </DashboardContentsContainer>
  );
}
