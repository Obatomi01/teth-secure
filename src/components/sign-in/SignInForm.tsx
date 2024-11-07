'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

import SignInFormInput from './SignInFormInput';

import { SignInFormInputProps } from './SignInFormInput';
import BlueBtn from '../general/BlueBtn';
import SignInCard from '../general/SignInCard';

import { signInHandler } from '@/app/action';

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
  const router = useRouter();

  const onSubmit = async (data: SignInFormValues) => {
    console.log(data);

    await signInHandler();
    router.push('/dashboard');
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
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%#./]).{8,}$/,
            //   message:
            //     'Password must include uppercase, lowercase, number, special character, and be at least 8 characters long',
            // },
            validate: {
              hasUpperCase: (value) =>
                /[A-Z]/.test(value) || 'Must include an uppercase letter',
              hasLowerCase: (value) =>
                /[a-z]/.test(value) || 'Must include a lowercase letter',
              hasNumber: (value) => /\d/.test(value) || 'Must include a number',
              hasSpecialChar: (value) =>
                /[@%#./]/.test(value) ||
                'Must include a special character (@%#./)',
              minLength: (value) =>
                value.length >= 8 || 'Must be at least 8 characters long',
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
    <SignInCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={manropeSemiBold.className}>Sign In</h2>
        <p
          className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
        >
          Enter your details to login to your account
        </p>
        {signInFormInputs.map((input, index) => (
          <SignInFormInput key={index} {...input} />
        ))}

        <p
          className={`text-base mt-8 mb-2 text-p-text-color ${manropeMedium.className}`}
        >
          Forgot your password?
          <span className={`text-color-primary ${manropeSemiBold.className}`}>
            <Link href={'/reset-password'}> Reset</Link>
          </span>
        </p>
        <BlueBtn
          hasBlueBackground
          btnText='Login'
          btnType='submit'
          isNotLink
          additionalStyles='w-full'
        />

        <p
          className={`text-base mt-6 text-p-text-color ${manropeMedium.className} text-center`}
        >
          Don&apos;t have an account?
          <span className={`text-color-primary ${manropeSemiBold.className}`}>
            <Link href={'/get-started'}> Sign Up</Link>
          </span>
        </p>
      </form>
    </SignInCard>
  );
}
