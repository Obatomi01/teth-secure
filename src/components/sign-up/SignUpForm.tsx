'use client';

import React from 'react';
import ReceiveMailForm from '../reset-password/ReceiveMailForm';

import SignUpFormContainer from '../general/SignUpFormContainer';

export default function SignUpForm() {
  return (
    <SignUpFormContainer>
      <ReceiveMailForm
        title='Enter email address to get started'
        formAction='Get Started'
        bottomText={{
          plainText: 'Already have an account? ',
          coloredText: 'Sign in',
          link: '/sign-in',
        }}
        btnText='Create Account'
      />
    </SignUpFormContainer>
  );
}
