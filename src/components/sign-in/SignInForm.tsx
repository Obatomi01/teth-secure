'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

import styles from '@/styles/signIn.module.scss';
import SignInFormInput from './SignInFormInput';

import { SignInFormInputProps } from './SignInFormInput';
import BlueBtn from '../general/BlueBtn';

type SignInFormValues = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
    // Handle form submission logic here, e.g., send data to an API
  };

  const signInFormInputs: SignInFormInputProps[] = [
    {
      register: (
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder='Email Address'
        />
      ),
      error: errors.email?.message,
      label: 'Email',
    },
    {
      register: (
        <input
          type='password'
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%#./]).{8,}$/,
              message:
                'Password must include uppercase, lowercase, number, special character, and be at least 8 characters long',
            },
          })}
          placeholder='Password'
        />
      ),
      error: errors.password?.message,
      label: 'Password',
    },
  ];

  return (
    <form
      className={styles['sign--in__form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={manropeSemiBold.className}>Sign In</h2>
      <p
        className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
      >
        Enter your details to login to your account
      </p>
      {signInFormInputs.map((input, index) => (
        <SignInFormInput key={index} {...input} />
      ))}

      <BlueBtn
        hasBlueBackground
        btnText='Login'
        btnType='submit'
        isNotLink
        additionalStyles='w-full'
      />
    </form>
  );
}
