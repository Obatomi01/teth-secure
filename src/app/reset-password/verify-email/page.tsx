import SignInCard from '@/components/general/SignInCard';

import SignInPage from '@/components/sign-in/SignInPage';
import VerifyEmail from '@/components/sign-in/VerifyEmail';
import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignInCard>
          <VerifyEmail
            linkTo='/reset-password'
            submissionLink='/reset-password/set-new-password'
          />
        </SignInCard>
      </SignInPage>
    </main>
  );
}
