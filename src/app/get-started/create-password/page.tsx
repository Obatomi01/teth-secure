import SignInCard from '@/components/general/SignInCard';
import SignUpFormContainer from '@/components/general/SignUpFormContainer';
import EnterNewPasswordForm from '@/components/reset-password/EnterNewPasswordForm';
import SignInPage from '@/components/sign-in/SignInPage';
import React from 'react';

export default function page() {
  return (
    <main>
      <SignInPage>
        <SignUpFormContainer>
          <SignInCard>
            <EnterNewPasswordForm
              title='Enter New Password'
              description='Enter your details to login to your account'
              firstLabel='New Password'
              firstPlaceholder='New Password'
              secondLabel='Confirm Password'
              secondPlaceholder='Confirm Password'
            />
          </SignInCard>
        </SignUpFormContainer>
      </SignInPage>
    </main>
  );
}
