import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';

import React from 'react';

import { manropeBold } from '@/styles/fonts';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import DashboardNav from '@/components/general/DashboardNav';
import MemberSummary from '@/components/team-management/MemberSummary';

export default async function page({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const [userid] = await Promise.all(Object.values(await params));

  return (
    <DashboardPageContainer>
      <DashboardNav />
      <DashboardContentsContainer>
        <TopDashboardContainer
          rightContent={
            <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
              Team Management
            </h3>
          }
          showRightContentForMobile={true}
        />

        <MemberSummary userID={userid} />
      </DashboardContentsContainer>
    </DashboardPageContainer>
  );
}
