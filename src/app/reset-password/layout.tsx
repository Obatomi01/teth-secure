import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Teth secure | Reset Password',
  description:
    'Reset Your Password. Enter your email address and we will send you a link to reset your password.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
