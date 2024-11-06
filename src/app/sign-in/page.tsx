import React from 'react';

import SignInPage from '@/components/sign-in/SignInPage';
import SignInForm from '@/components/sign-in/SignInForm';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignInForm />
      </SignInPage>
    </main>
  );
}
