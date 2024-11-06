import React from 'react';

import SignInPage from '@/components/sign-in/SignInPage';
import SignInForm from '@/components/sign-in/SignInForm';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <SignInPage>
        <SignInForm />
      </SignInPage>
    </main>
  );
}
