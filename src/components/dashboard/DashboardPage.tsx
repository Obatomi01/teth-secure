'use client';

import React from 'react';
import TopDashboardContainer from './TopDashboardContainer';

import Tokens from './Tokens';
import BottomDashboardContainer from './BottomDashboardContainer';

import BlueBtn from '../general/BlueBtn';
import DashboardContentsContainer from '../general/DashboardContentsContainer';

export default function DashboardPage() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <BlueBtn
            hasBlueBackground
            btnText='Add new account'
            linkTo='/dashboard/add-account'
          />
        }
        showRightContentForMobile
      />
      <Tokens />
      <BottomDashboardContainer />
    </DashboardContentsContainer>
  );
}
