'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { setCookie } from 'cookies-next/client';

import SignInCard from '../general/SignInCard';

import { useForm } from 'react-hook-form';
import SignInFormInput from '../sign-in/SignInFormInput';
import BlueBtn from '../general/BlueBtn';

import { resetPasswordHandler, getStartedHandler } from '@/app/action';

import { manropeMedium, manropeSemiBold } from '@/styles/fonts';
import FormPopUp from '../general/FormPopUp';

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
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = async (data: FormProps) => {
    // TODO: set the cookie
    setCookie('email', data.email, {
      maxAge: 60 * 60 * 1, // expires in 1 hour
    });

    console.log(data);
    setIsLoading(true);

    if (formAction === 'Reset Password') {
      // Handle form submission logic here, e.g., send data to an API
      await resetPasswordHandler();

      setTimeout(() => {
        setIsLoading(false);
        setShowPopUp(true);
      }, 1000);

      setTimeout(() => {
        router.push('/reset-password/verify-email');
      }, 2000);
      // router.push('/reset-password/verify-email');
    }

    if (formAction === 'Get Started') {
      // Handle form submission logic here, e.g., send data to an API
      await getStartedHandler();
      setTimeout(() => {
        setIsLoading(false);
        setShowPopUp(true);
      }, 1000);

      setTimeout(() => {
        router.push('/get-started/verify-email');
      }, 2000);

      // router.push('/get-started/verify-email');
    }

    // Handle form submission logic here, e.g., send data to an API
  };

  return (
    <SignInCard>
      <FormPopUp message='Email successfully sent' showPopUp={showPopUp} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={`text-xl md:text-2xl mb-6 ${manropeMedium.className}`}>
          {title}
        </h2>
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
          isLoading={isLoading}
          hasLoadingDots
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
