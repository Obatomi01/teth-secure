'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { manropeSemiBold, manropeMedium } from '@/styles/fonts';

import SignInFormInput from '../sign-in/SignInFormInput';
import { SignInFormInputProps } from '../sign-in/SignInFormInput';
import BlueBtn from '../general/BlueBtn';

import DropDownMenu from '../general/DropDownMenu';

import { Option } from '../general/DropDownMenu';

import Nigeria from '@/../public/icons/nigeria.png';
import UnitedStates from '@/../public/icons/united-states.png';
import Ghana from '@/../public/icons/ghana.png';
import Canada from '@/../public/icons/canada.png';
import Australia from '@/../public/icons/australia.png';

type AddBusinessFormValues = {
  businessName: string;
  businessType: string;
  companyName: string;
  websiteUrl?: string;
  country: string;
};

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

  const onSubmit = async (data: AddBusinessFormValues) => {
    console.log(data);
    // Handle form submission logic here, e.g., send data to an API
    router.push('/get-started/create-password'); // Redirect after form submission
  };

  // Form inputs for AddBusinessForm
  const addBusinessFormInputs: SignInFormInputProps[] = [
    {
      register: (
        <input
          type='text'
          {...register('businessName', {
            required: 'Business Name is required',
          })}
          placeholder='Business Name'
        />
      ),
      error: errors.businessName?.message,
      label: 'Business Name',
    },
    {
      register: (
        <DropDownMenu
          options={businessOptions}
          onChange={(value) => setValue('businessType', value)}
        />
      ),
      error: errors.businessType?.message,
      label: 'Business Type',
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
      error: errors.country?.message,
      label: 'Country',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={manropeSemiBold.className}>Add a Business</h2>
      <p
        className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
      >
        Enter Business Information
      </p>

      {addBusinessFormInputs.map((input, index) => (
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
