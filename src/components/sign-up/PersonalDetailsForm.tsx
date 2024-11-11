'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type PersonalDetailsFormValues = {
  firstName: string;
  lastName: string;
  productName: string;
  companyName: string;
};

import { createFormInput } from '@/utils/formUtils';
import FormComponent from '../general/FormComponents';

export default function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsFormValues>();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    router.push('/get-started/add-business');
  });

  const inputs = [
    createFormInput(
      'First Name',
      'First Name',
      register,
      'firstName',
      'First Name is required',
      errors.firstName?.message
    ),
    createFormInput(
      'Last Name',
      'Last Name',
      register,
      'lastName',
      'Last Name is required',
      errors.lastName?.message
    ),
    createFormInput(
      'Product Name',
      'Product Name',
      register,
      'productName',
      'Product Name is required',
      errors.productName?.message
    ),
    createFormInput(
      "Company's Name",
      "Company's Name",
      register,
      'companyName',
      "Company's Name is required",
      errors.companyName?.message
    ),
  ];

  return (
    <FormComponent
      title='Personal Details'
      subtitle='Enter your personal and company details'
      inputs={inputs.map((input, index) => ({
        ...input,
        key: index,
      }))}
      buttonText='Proceed'
      onSubmit={onSubmit}
    />
  );
}
