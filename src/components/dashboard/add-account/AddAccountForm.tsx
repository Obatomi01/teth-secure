import React, { useState } from 'react';

import { createFormInput } from '@/utils/formUtils';
import { useForm, Controller } from 'react-hook-form';

import DropDownMenu from '@/components/general/DropDownMenu';

import { manropeMedium, manropeBold } from '@/styles/fonts';
import SignInCard from '@/components/general/SignInCard';
import SignInFormInput from '@/components/sign-in/SignInFormInput';

import BlueBtn from '@/components/general/BlueBtn';

import styles from '@/styles/signIn.module.scss';
import { Option } from '@/components/general/DropDownMenu';
import FormPopUp from '@/components/general/FormPopUp';

type AddAccountFormValues = {
  businessName: string;
  businessType: string;
  companyName: string;
  websiteUrl: string;
  logoUrl: string;
  state: string;
  localGovernment: string;
};

export default function AddAccountForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAccountFormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const pTags = (text: string) => (
    <p className={`text-base ${manropeMedium.className}`}>{text}</p>
  );

  const businessOptions: Option[] = [
    {
      value: 'Crypto',
      label: pTags('Crypto'),
    },
    {
      value: 'Stocks',
      label: pTags('Stocks'),
    },
    {
      value: 'Real Estate',
      label: pTags('Real Estate'),
    },
    {
      value: 'Commodities',
      label: pTags('Commodities'),
    },
  ];

  const localGovernmentOptions: Option[] = [
    {
      value: 'Lagelu',
      label: pTags('Lagelu'),
    },
    {
      value: 'Ibadan North',
      label: pTags('Ibadan North)'),
    },
    { value: 'Ibadan South-East', label: pTags('Ibadan South-East') },
    { value: 'Ibadan South-West', label: pTags('Ibadan South-West') },
    { value: 'Ibadan North-East', label: pTags('Ibadan North-East') },
    { value: 'Ibadan North-West', label: pTags('Ibadan North-West') },
    { value: 'Akinyele', label: pTags('Akinyele') },
    { value: 'Oluyole', label: pTags('Oluyole') },
    { value: 'Ona Ara', label: pTags('Ona Ara') },
    { value: 'Egbeda', label: pTags('Egbeda') },
    { value: 'Ibarapa Central', label: pTags('Ibarapa Central') },
    { value: 'Ibarapa East', label: pTags('Ibarapa East') },
    { value: 'Ibarapa North', label: pTags('Ibarapa North') },
    { value: 'Ido', label: pTags('Ido') },
    { value: 'Irepo', label: pTags('Irepo') },
    { value: 'Iseyin', label: pTags('Iseyin') },
    { value: 'Itesiwaju', label: pTags('Itesiwaju') },
    { value: 'Iwajowa', label: pTags('Iwajowa') },
    { value: 'Kajola', label: pTags('Kajola') },
    { value: 'LGA', label: pTags('LGA') },
    { value: 'Ogbomosho North', label: pTags('Ogbomosho North') },
    { value: 'Ogbomosho South', label: pTags('Ogbomosho South') },
    { value: 'Oyo East', label: pTags('Oyo East') },
    { value: 'Oyo West', label: pTags('Oyo West') },
    { value: 'Saki East', label: pTags('Saki East') },
    { value: 'Saki West', label: pTags('Saki West') },
    { value: 'Surulere', label: pTags('Surulere') },
  ];

  const stateOptions: Option[] = [
    {
      value: 'Oyo',
      label: pTags('Oyo'),
    },
    { value: 'Lagos', label: pTags('Lagos') },
    { value: 'Abuja', label: pTags('Abuja') },
    { value: 'Kano', label: pTags('Kano') },
    { value: 'Rivers', label: pTags('Rivers') },
    { value: 'Kaduna', label: pTags('Kaduna') },
    { value: 'Ogun', label: pTags('Ogun') },
    { value: 'Delta', label: pTags('Delta') },
    { value: 'Ondo', label: pTags('Ondo') },
    { value: 'Kwara', label: pTags('Kwara') },
    { value: 'Enugu', label: pTags('Enugu') },
    { value: 'Ebonyi', label: pTags('Ebonyi') },
    { value: 'Edo', label: pTags('Edo') },
    { value: 'Ekiti', label: pTags('Ekiti') },
    { value: 'Osun', label: pTags('Osun') },
    { value: 'Ogun', label: pTags('Ogun') },
    { value: 'Ondo', label: pTags('Ondo') },
    { value: 'Kwara', label: pTags('Kwara') },
    { value: 'Enugu', label: pTags('Enugu') },
    { value: 'Ebonyi', label: pTags('Ebonyi') },
    { value: 'Edo', label: pTags('Edo') },
    { value: 'Ekiti', label: pTags('Ekiti') },
    { value: 'Osun', label: pTags('Osun') },
    { value: 'Ogun', label: pTags('Ogun') },
    { value: 'Ondo', label: pTags('Ondo') },
    { value: 'Kwara', label: pTags('Kwara') },
    { value: 'Enugu', label: pTags('Enugu') },
    { value: 'Ebonyi', label: pTags('Ebonyi') },
    { value: 'Edo', label: pTags('Edo') },
    { value: 'Ekiti', label: pTags('Ekiti') },
    { value: 'Osun', label: pTags('Osun') },
    { value: 'Ogun', label: pTags('Ogun') },
    { value: 'Ondo', label: pTags('Ondo') },
  ];

  const onSubmit = async (data: AddAccountFormValues) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setShowPopUp(true);
      setIsLoading(false);
    }, 1000);

    setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  };

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
        <Controller
          name='businessType'
          control={control}
          rules={{ required: 'Business Type is required' }}
          render={({ field }) => (
            <DropDownMenu
              {...field}
              options={businessOptions}
              onChange={(value) => field.onChange(value)}
            />
          )}
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
        <input
          type='url'
          {...register('logoUrl')}
          placeholder='Logo URL (Optional)'
        />
      ),
      label: 'Logo URL (Optional)',
    },
  ];

  const locationInputs = [
    {
      register: (
        <Controller
          name='state'
          control={control}
          rules={{ required: 'Pick a state' }}
          render={({ field }) => (
            <DropDownMenu
              {...field}
              options={stateOptions}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      ),
      label: 'State',
      error: errors.state?.message,
    },
    {
      register: (
        <Controller
          name='localGovernment'
          control={control}
          rules={{ required: 'Pick a local government' }}
          render={({ field }) => (
            <DropDownMenu
              {...field}
              options={localGovernmentOptions}
              onChange={(value) => field.onChange(value)}
              placeholder={
                <p className={`text-base ${manropeMedium.className}`}>
                  Select LGA
                </p>
              }
            />
          )}
        />
      ),
      label: 'Local Government',
      error: errors.localGovernment?.message,
    },
  ];

  return (
    <section>
      <h4
        className={`text-center xl:text-left text-2xl md:text-xl mb-4 ml-8 ${manropeBold.className}`}
      >
        Enter Business Information
      </h4>
      <FormPopUp message='Data submitted' showPopUp={showPopUp} />

      <form onSubmit={handleSubmit(onSubmit)} className='hidden xl:flex mb-8'>
        <SignInCard>
          {inputs.map((input, index) => (
            <SignInFormInput key={index} {...input} />
          ))}
          <BlueBtn
            hasBlueBackground
            btnText='Add New Business'
            btnType='submit'
            isNotLink
            additionalStyles='w-full'
          />
        </SignInCard>

        <section
          className={`m-0 ${styles['sign--in__form']}`}
          style={{
            marginBlock: '0',
            height: 'max-content',
          }}
        >
          {locationInputs.map((input, index) => (
            <SignInFormInput key={index} {...input} />
          ))}
        </section>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className='flex xl:hidden mb-8'>
        <SignInCard>
          {inputs.map((input, index) => (
            <SignInFormInput key={index} {...input} />
          ))}
          {locationInputs.map((input, index) => (
            <SignInFormInput key={index} {...input} />
          ))}
          <BlueBtn
            hasBlueBackground
            btnText='Add New Business'
            btnType='submit'
            isNotLink
            additionalStyles='w-full'
            isLoading={isLoading}
            hasLoadingDots
          />
        </SignInCard>
      </form>
    </section>
  );
}
