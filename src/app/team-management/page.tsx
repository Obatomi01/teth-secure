import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import React from 'react';

import TeamManagementPage from '@/components/team-management/TeamManagementPage';

export default function page() {
  return (
    <main>
      <DashboardPageContainer>
        <DashboardNav />

        <TeamManagementPage />
      </DashboardPageContainer>
    </main>
  );
}
