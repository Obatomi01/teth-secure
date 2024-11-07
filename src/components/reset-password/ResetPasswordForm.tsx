'use client';

import React from 'react';

import ReceiveMailForm from './ReceiveMailForm';

export default function ResetPasswordForm() {
  return (
    <ReceiveMailForm
      title='Enter email address to reset your password'
      formAction='Reset Password'
      bottomText={{
        plainText: 'Remember your password? ',
        coloredText: 'Log in',
        link: '/sign-in',
      }}
      btnText='Reset Password'
    />
  );
}
