import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';
import UserSummary from '@/components/setup-configuration/manage-users/UserSummary';
import React from 'react';

import { manropeBold } from '@/styles/fonts';

export default async function page({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const [userid] = await Promise.all(Object.values(await params));

  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            Manage Users
          </h3>
        }
        showRightContentForMobile={true}
      />
      <UserSummary userID={userid} />;
    </DashboardContentsContainer>
  );
}
