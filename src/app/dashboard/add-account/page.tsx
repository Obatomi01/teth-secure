import AddAccountPage from '@/components/dashboard/add-account/AddAccountPage';
import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import React from 'react';

export default function page() {
  return (
    <main>
      <DashboardPageContainer>
        <DashboardNav />
        <AddAccountPage />
      </DashboardPageContainer>
    </main>
  );
}
