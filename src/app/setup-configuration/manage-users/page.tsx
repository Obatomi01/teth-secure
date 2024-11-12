import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import ManageUsersPage from '@/components/setup-configuration/ManageUsersPage';

import React from 'react';

export default function page() {
  return (
    <main>
      <DashboardPageContainer>
        <DashboardNav />
        <ManageUsersPage />
      </DashboardPageContainer>
    </main>
  );
}
