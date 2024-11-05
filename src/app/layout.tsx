import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/general/Nav';
import Footer from '@/components/general/Footer';

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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
