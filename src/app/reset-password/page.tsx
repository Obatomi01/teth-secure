import React from 'react';

import SignInPage from '@/components/sign-in/SignInPage';
import ResetPasswordForm from '@/components/reset-password/ResetPasswordForm';

export default function page() {
  return (
    <main>
      <SignInPage>
        <ResetPasswordForm />
      </SignInPage>
    </main>
  );
}
