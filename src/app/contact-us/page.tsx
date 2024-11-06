import ContactUsPage from '@/components/contact us/ContactUsPage';
import BottomFooter from '@/components/general/BottomFooter';
import Nav from '@/components/general/Nav';
import React from 'react';

export default function page() {
  return (
    <>
      <Nav />
      <ContactUsPage />
      <BottomFooter />
    </>
  );
}
