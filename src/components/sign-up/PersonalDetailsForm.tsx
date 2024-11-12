'use client';

import React, { useState } from 'react';
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
import FormPopUp from '../general/FormPopUp';

export default function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowPopUp(true);
    }, 1000);

    setTimeout(() => {
      router.push('/get-started/add-business');
    }, 2000);
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
    <>
      <FormPopUp message='Data Submitted' showPopUp={showPopUp} />
      <FormComponent
        title='Personal Details'
        subtitle=''
        inputs={inputs.map((input, index) => ({
          ...input,
          key: index,
        }))}
        buttonText='Proceed'
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}
