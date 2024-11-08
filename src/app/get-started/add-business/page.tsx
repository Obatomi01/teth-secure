import SignInCard from '@/components/general/SignInCard';
import SignUpFormContainer from '@/components/general/SignUpFormContainer';
import SignInPage from '@/components/sign-in/SignInPage';
import AddBusinessForm from '@/components/sign-up/AddBusinessForm';

import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignUpFormContainer>
          <SignInCard>
            <AddBusinessForm />
          </SignInCard>
        </SignUpFormContainer>
      </SignInPage>
    </main>
  );
}
