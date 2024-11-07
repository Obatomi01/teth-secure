'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import SignInCard from '../general/SignInCard';

import { useForm } from 'react-hook-form';
import SignInFormInput from '../sign-in/SignInFormInput';
import BlueBtn from '../general/BlueBtn';

import { resetPasswordHandler, getStartedHandler } from '@/app/action';

import { manropeMedium, manropeSemiBold } from '@/styles/fonts';

type FormProps = {
  email: string;
};

type BottomTextProps = {
  plainText: string;
  coloredText: string;
  link: string;
};

type Props = {
  title: string;
  formAction: 'Reset Password' | 'Get Started';
  bottomText: BottomTextProps;
  btnText: string;
};

export default function ReceiveMailForm({
  title,
  formAction,
  bottomText,
  btnText,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const router = useRouter();

  const onSubmit = async (data: FormProps) => {
    console.log(data);

    if (formAction === 'Reset Password') {
      // Handle form submission logic here, e.g., send data to an API
      await resetPasswordHandler();
      router.push('/reset-password/verify-email');
    }

    if (formAction === 'Get Started') {
      // Handle form submission logic here, e.g., send data to an API
      await getStartedHandler();
      router.push('/get-started/verify-email');
    }

    // Handle form submission logic here, e.g., send data to an API
  };

  return (
    <SignInCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={`mb-6 ${manropeMedium.className}`}>{title}</h2>
        <SignInFormInput
          error={errors.email?.message}
          label={'Email'}
          register={
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
          }
        />

        <BlueBtn
          hasBlueBackground
          btnText={btnText}
          btnType='submit'
          isNotLink
          additionalStyles='w-full'
        />
        <p
          className={`text-base mt-6 text-p-text-color ${manropeMedium.className} text-center`}
        >
          {bottomText.plainText}
          <span className={`text-color-primary ${manropeSemiBold.className}`}>
            <Link href={`${bottomText.link}`}> {bottomText.coloredText}</Link>
          </span>
        </p>
      </form>
    </SignInCard>
  );
}
