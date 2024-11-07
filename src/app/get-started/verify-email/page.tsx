import SignInCard from '@/components/general/SignInCard';
import SignUpFormContainer from '@/components/general/SignUpFormContainer';
import SignInPage from '@/components/sign-in/SignInPage';
import VerifyEmail from '@/components/sign-in/VerifyEmail';
import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignUpFormContainer>
          <SignInCard>
            <VerifyEmail
              linkTo='/get-started'
              submissionLink='/set-up-account'
            />
          </SignInCard>
        </SignUpFormContainer>
      </SignInPage>
    </main>
  );
}
