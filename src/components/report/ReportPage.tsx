'use client';

import React from 'react';

import TopDashboardContainer from '../dashboard/TopDashboardContainer';

import { manropeBold } from '@/styles/fonts';
import DashboardContentsContainer from '../general/DashboardContentsContainer';
import OtpReportTable from './OTPReportTable';

export default function ReportPage() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            Report
          </h3>
        }
        showRightContentForMobile
      />
      <OtpReportTable />
    </DashboardContentsContainer>
  );
}
