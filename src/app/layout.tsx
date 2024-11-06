import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teth secure',
  description:
    'You receive a comprehensive suite of multi-factor authentication (MFA) solutions designed to safeguard your valuable data and systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
