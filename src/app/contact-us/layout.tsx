import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Teth secure | Contact us',
  description:
    'Reach out to us on questions relating to how you can receive a comprehensive suite of multi-factor authentication (MFA) solutions designed to safeguard your valuable data and systems.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
