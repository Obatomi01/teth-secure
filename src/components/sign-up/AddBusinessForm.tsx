'use client';

import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { createFormInput } from '@/utils/formUtils';
import FormComponent from '../general/FormComponents';
import DropDownMenu from '../general/DropDownMenu';
import { Option } from '../general/DropDownMenu';

import { manropeMedium } from '@/styles/fonts';

import Nigeria from '@/../public/icons/nigeria.png';
import UnitedStates from '@/../public/icons/united-states.png';
import Ghana from '@/../public/icons/ghana.png';
import Canada from '@/../public/icons/canada.png';
import Australia from '@/../public/icons/australia.png';
import FormPopUp from '../general/FormPopUp';

type AddBusinessFormValues = {
  businessName: string;
  businessType: string;
  companyName: string;
  websiteUrl?: string;
  country: string;
};

// Dropdown options
const businessOptions: Option[] = [
  {
    value: 'Crypto',
    label: <p className={`text-base ${manropeMedium.className}`}>Crypto</p>,
  },
  {
    value: 'Stocks',
    label: <p className={`text-base ${manropeMedium.className}`}>Stocks</p>,
  },
  {
    value: 'Real Estate',
    label: (
      <p className={`text-base ${manropeMedium.className}`}>Real Estate</p>
    ),
  },
  {
    value: 'Commodities',
    label: (
      <p className={`text-base ${manropeMedium.className}`}>Commodities</p>
    ),
  },
  {
    value: 'Bonds',
    label: <p className={`text-base ${manropeMedium.className}`}>Bonds</p>,
  },
];

const countryOptions: Option[] = [
  {
    label: <Image src={Nigeria} alt='nigeria' width={24} height={24} />,
    value: 'Nigeria',
  },
  {
    label: (
      <Image src={UnitedStates} alt='united-states' width={24} height={24} />
    ),
    value: 'United States',
  },
  {
    label: <Image src={Ghana} alt='ghana' width={24} height={24} />,
    value: 'Ghana',
  },
  {
    label: <Image src={Canada} alt='canada' width={24} height={24} />,
    value: 'Canada',
  },
  {
    label: <Image src={Australia} alt='australia' width={24} height={24} />,
    value: 'Australia',
  },
];

export default function AddBusinessForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddBusinessFormValues>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowPopUp(true);
    }, 1000);

    setTimeout(() => {
      router.push('/get-started/create-password');
    }, 2000);
  });

  // Form inputs for AddBusinessForm
  const inputs = [
    createFormInput(
      'Business Name',
      'Business Name',
      register,
      'businessName',
      'Business Name is required',
      errors.businessName?.message
    ),
    {
      register: (
        <DropDownMenu
          options={businessOptions}
          onChange={(value) => setValue('businessType', value)}
        />
      ),
      label: 'Business Type',
      error: errors.businessType?.message,
    },
    createFormInput(
      "Company's Name",
      "Company's Name",
      register,
      'companyName',
      "Company's Name is required",
      errors.companyName?.message
    ),
    {
      register: (
        <input
          type='url'
          {...register('websiteUrl')}
          placeholder='Website URL (Optional)'
        />
      ),
      label: 'Website URL (Optional)',
    },
    {
      register: (
        <DropDownMenu
          options={countryOptions}
          placeholder={
            <p className={`text-base ${manropeMedium.className}`}>
              Select Country
            </p>
          }
          onChange={(value) => setValue('country', value)}
        />
      ),
      label: 'Country',
      error: errors.country?.message,
    },
  ];

  return (
    <>
      <FormPopUp message='Data submitted' showPopUp={showPopUp} />
      <FormComponent
        title='Add a Business'
        subtitle='Enter Business Information'
        inputs={inputs}
        buttonText='Proceed'
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}
