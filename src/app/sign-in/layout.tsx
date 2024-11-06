import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Teth secure | Sign in',
  description:
    'Teth secure is a secure platform that allows you to store your passwords and other sensitive information securely.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
