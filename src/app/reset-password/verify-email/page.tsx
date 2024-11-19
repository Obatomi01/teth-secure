import { cookies } from 'next/headers';

import SignInCard from '@/components/general/SignInCard';

import SignInPage from '@/components/sign-in/SignInPage';
import VerifyEmail from '@/components/sign-in/VerifyEmail';
import React from 'react';

export default async function page() {
  const cookieStore = await cookies();
  const userEmailAddress = cookieStore.get('email')?.value || '';

  return (
    <main>
      <SignInPage>
        <SignInCard>
          <VerifyEmail
            linkTo='/reset-password'
            submissionLink='/reset-password/set-new-password'
            userEmailAddress={userEmailAddress || ''}
          />
        </SignInCard>
      </SignInPage>
    </main>
  );
}
