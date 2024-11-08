'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

import SignInFormInput from '../sign-in/SignInFormInput';
import { SignInFormInputProps } from '../sign-in/SignInFormInput';
import BlueBtn from '../general/BlueBtn';
import SignInCard from '../general/SignInCard';

type PersonalDetailsFormValues = {
  firstName: string;
  lastName: string;
  productName: string;
  companyName: string;
};

export default function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsFormValues>();
  const router = useRouter();

  const onSubmit = async (data: PersonalDetailsFormValues) => {
    console.log(data);
    // Handle form submission logic here, e.g., send data to an API
    router.push('/get-started/add-business'); // Redirect to the next step
  };

  const personalDetailsFormInputs: SignInFormInputProps[] = [
    {
      register: (
        <input
          type='text'
          {...register('firstName', { required: 'First Name is required' })}
          placeholder='First Name'
        />
      ),
      error: errors.firstName?.message,
      label: 'First Name',
    },
    {
      register: (
        <input
          type='text'
          {...register('lastName', { required: 'Last Name is required' })}
          placeholder='Last Name'
        />
      ),
      error: errors.lastName?.message,
      label: 'Last Name',
    },
    {
      register: (
        <input
          type='text'
          {...register('productName', { required: 'Product Name is required' })}
          placeholder='Product Name'
        />
      ),
      error: errors.productName?.message,
      label: 'Product Name',
    },
    {
      register: (
        <input
          type='text'
          {...register('companyName', {
            required: "Company's Name is required",
          })}
          placeholder="Company's Name"
        />
      ),
      error: errors.companyName?.message,
      label: "Company's Name",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={manropeSemiBold.className}>Personal Details</h2>
      <p
        className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
      >
        Enter your personal and company details
      </p>
      {personalDetailsFormInputs.map((input, index) => (
        <SignInFormInput key={index} {...input} />
      ))}

      <BlueBtn
        hasBlueBackground
        btnText='Proceed'
        btnType='submit'
        isNotLink
        additionalStyles='w-full'
      />
    </form>
  );
}
