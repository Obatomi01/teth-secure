import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import Subscriptions from '@/components/subcriptions/Subscriptions';
import React from 'react';

export default function page() {
  return (
    <main>
      <DashboardPageContainer>
        <DashboardNav />
        <Subscriptions />
      </DashboardPageContainer>
    </main>
  );
}
