import SignInCard from '@/components/general/SignInCard';
import SignUpFormContainer from '@/components/general/SignUpFormContainer';
import SignInPage from '@/components/sign-in/SignInPage';
import PersonalDetailsForm from '@/components/sign-up/PersonalDetailsForm';
import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignUpFormContainer>
          <SignInCard>
            <PersonalDetailsForm />
          </SignInCard>
        </SignUpFormContainer>
      </SignInPage>
    </main>
  );
}
