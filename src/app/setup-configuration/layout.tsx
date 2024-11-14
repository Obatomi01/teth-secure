import type { Metadata } from 'next';
import '../globals.css';
import DashboardNav from '@/components/general/DashboardNav';
import DashboardPageContainer from '@/components/general/DashboardPageContainer';

export const metadata: Metadata = {
  title: 'Teth secure | Setup Configuration',
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
          {children}
        </DashboardPageContainer>
      </main>
    </>
  );
}
