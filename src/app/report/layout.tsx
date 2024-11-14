import type { Metadata } from 'next';
import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';
import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import { manropeBold } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Teth secure | Report',
  description:
    'Teth secure is a secure platform that allows you to store your passwords and other sensitive information securely.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <DashboardPageContainer>
          <DashboardNav />
          <DashboardContentsContainer>
            <TopDashboardContainer
              rightContent={
                <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
                  Report
                </h3>
              }
              showRightContentForMobile
            />
            {children}
          </DashboardContentsContainer>
        </DashboardPageContainer>
      </main>
    </>
  );
}
