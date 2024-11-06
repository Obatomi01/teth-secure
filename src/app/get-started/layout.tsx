import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Teth secure | Get Started',
  description:
    'Teth secure is a platform that provides secure and reliable services to its users.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
