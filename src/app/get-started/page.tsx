import SignInPage from '@/components/sign-in/SignInPage';
import SignUpForm from '@/components/sign-up/SignUpForm';
import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignUpForm />
      </SignInPage>
    </main>
  );
}
