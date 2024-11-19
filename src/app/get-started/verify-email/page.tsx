import { cookies } from 'next/headers';

import SignInCard from '@/components/general/SignInCard';
import SignUpFormContainer from '@/components/general/SignUpFormContainer';
import SignInPage from '@/components/sign-in/SignInPage';
import VerifyEmail from '@/components/sign-in/VerifyEmail';
import React from 'react';

export default async function page() {
  const cookieStore = await cookies();
  const userEmailAddress = cookieStore.get('email')?.value || '';

  return (
    <main>
      <SignInPage>
        <SignUpFormContainer>
          <SignInCard>
            <VerifyEmail
              linkTo='/get-started'
              submissionLink='/get-started/set-up-account'
              userEmailAddress={userEmailAddress || ''}
            />
          </SignInCard>
        </SignUpFormContainer>
      </SignInPage>
    </main>
  );
}
