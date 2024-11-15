import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Option } from '@/components/general/DropDownMenu';
import DropDownMenu from '@/components/general/DropDownMenu';
import SignInFormInput from '@/components/sign-in/SignInFormInput';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import SignInCard from '@/components/general/SignInCard';
import BlueBtn from '@/components/general/BlueBtn';
import FormPopUp from '@/components/general/FormPopUp';

type OTPConfigurationFormProps = {
  otpLength: string;
  otpType: string;
  otpValidity: string;
  others?: string;
};

const otpTypeOptions: Option[] = [
  {
    value: 'Numeric',
    label: <p className={manropeMedium.className}>Numeric</p>,
  },
  {
    value: 'Alphanumeric',
    label: <p className={manropeMedium.className}>Alphanumeric</p>,
  },
];

const otpLengthOptions: Option[] = [
  {
    value: '4',
    label: <p className={manropeMedium.className}>4</p>,
  },
  {
    value: '6',
    label: <p className={manropeMedium.className}>6</p>,
  },
  {
    value: '8',
    label: <p className={manropeMedium.className}>8</p>,
  },
];

const otpValidityOptions: Option[] = [
  {
    value: '60',
    label: <p className={manropeMedium.className}>60</p>,
  },
  {
    value: '300',
    label: <p className={manropeMedium.className}>300</p>,
  },
  {
    value: '600',
    label: <p className={manropeMedium.className}>600</p>,
  },
];

export default function OTPConfigurationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPConfigurationFormProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = async (data: OTPConfigurationFormProps) => {
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

  // Form inputs for AddBusinessForm
  const inputs = [
    {
      register: (
        <Controller
          render={({ field }) => (
            <DropDownMenu
              options={otpLengthOptions}
              onChange={(value) => field.onChange(value)}
              placeholder={
                <p className={`text-base ${manropeMedium.className}`}>
                  Select OTP Length
                </p>
              }
            />
          )}
          name='otpLength'
          control={control}
          rules={{ required: 'OTP Length is required' }}
        />
      ),
      label: 'OTP Length',
      error: errors.otpLength?.message,
    },
    {
      register: (
        <Controller
          render={({ field }) => (
            <DropDownMenu
              options={otpTypeOptions}
              onChange={(value) => field.onChange(value)}
              placeholder={
                <p className={`text-base ${manropeMedium.className}`}>
                  Select OTP Type
                </p>
              }
            />
          )}
          name='otpType'
          control={control}
          rules={{ required: 'OTP Type is required' }}
        />
      ),
      label: 'OTP Type',
      error: errors.otpType?.message,
    },

    {
      register: (
        <Controller
          render={({ field }) => (
            <DropDownMenu
              options={otpValidityOptions}
              onChange={(value) => field.onChange(value)}
              placeholder={
                <p className={`text-base ${manropeMedium.className}`}>
                  Select OTP Validity (in seconds)
                </p>
              }
            />
          )}
          name='otpValidity'
          control={control}
          rules={{ required: 'OTP Validity is required' }}
        />
      ),
      label: 'OTP Validity (in seconds)',
      error: errors.otpValidity?.message,
    },
  ];

  return (
    <section>
      <h4
        className={`text-center text-2xl md:text-xl mb-4 ${manropeBold.className}`}
      >
        Configure OTP Settings
      </h4>
      <FormPopUp message='Data submitted' showPopUp={showPopUp} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignInCard>
          {inputs.map((input, index) => (
            <SignInFormInput key={index} {...input} />
          ))}

          <BlueBtn
            hasBlueBackground
            btnText='Configuire'
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
