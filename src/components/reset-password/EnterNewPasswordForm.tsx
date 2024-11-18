'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { manropeBold } from '@/styles/fonts';

import SignInFormInput from '../sign-in/SignInFormInput';
import { SignInFormInputProps } from '../sign-in/SignInFormInput';
import BlueBtn from '../general/BlueBtn';
import FormPopUp from '../general/FormPopUp';

type Props = {
  title: string;
  description: string;
  firstLabel: string;
  firstPlaceholder: string;
  secondLabel: string;
  secondPlaceholder: string;
  linkTo?: string;
  actionAfterSubmit?: () => void;
};

/**
 * Represents the values for the enter new password form.
 */
export type EnterNewPasswordFormValues = {
  newPassword: string;
  confirmPassword: string;
};

export default function EnterNewPasswordForm({
  title,
  firstLabel,
  firstPlaceholder,
  secondLabel,
  secondPlaceholder,
  actionAfterSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EnterNewPasswordFormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: EnterNewPasswordFormValues) => {
    setIsLoading(true);
    console.log(data);
    // Handle form submission logic, e.g., send data to an API

    setTimeout(() => {
      setIsLoading(false);
      setShowPopUp(true);
    }, 1000);

    setTimeout(() => {
      if (actionAfterSubmit) {
        actionAfterSubmit();
      } else {
        router.push('/dashboard');
      }
    }, 2000);
  };

  // Watch the newPassword field to use in confirmPassword validation
  const newPassword = watch('newPassword');

  const enterNewPasswordFormInputs: SignInFormInputProps[] = [
    {
      register: (
        <input
          type='password'
          {...register('newPassword', {
            required: 'New Password is required',
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
          placeholder={firstPlaceholder}
        />
      ),
      error: errors.newPassword?.message,
      label: firstLabel,
      isAPasswordField: true,
    },
    {
      register: (
        <input
          type='password'
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) =>
              value === newPassword || 'Passwords do not match',
          })}
          placeholder={secondPlaceholder}
        />
      ),
      error: errors.confirmPassword?.message,
      label: secondLabel,
      isAPasswordField: true,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormPopUp message='Password successfully set' showPopUp={showPopUp} />
      <h2 className={`text-xl md:text-2xl mb-8 ${manropeBold.className}`}>
        {title}
      </h2>
      {/* <p
        className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
      >
        {description}
      </p> */}

      {enterNewPasswordFormInputs.map((input, index) => (
        <SignInFormInput key={index} {...input} />
      ))}

      <BlueBtn
        hasBlueBackground
        btnText='Submit'
        btnType='submit'
        isNotLink
        additionalStyles='w-full'
        isLoading={isLoading}
        hasLoadingDots
      />
    </form>
  );
}
