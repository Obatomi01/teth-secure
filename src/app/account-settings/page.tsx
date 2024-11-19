import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';
import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import React from 'react';

import { manropeBold } from '@/styles/fonts';
import AddAccountForm from '@/components/dashboard/add-account/AddAccountForm';

export default function page() {
  return (
    <main>
      <DashboardPageContainer>
        <DashboardNav />

        <DashboardContentsContainer>
          <TopDashboardContainer
            rightContent={
              <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
                Account Settings
              </h3>
            }
          />
          <AddAccountForm updateAccount={true} />
        </DashboardContentsContainer>
      </DashboardPageContainer>
    </main>
  );
}
