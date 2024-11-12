// FormComponent.tsx
import React from 'react';
import BlueBtn from '../general/BlueBtn';
import SignInFormInput from '../sign-in/SignInFormInput';
import { SignInFormInputProps } from '../sign-in/SignInFormInput';

import { manropeBold } from '@/styles/fonts';

interface FormComponentProps {
  title: string;
  subtitle: string;
  inputs: SignInFormInputProps[];
  buttonText: string;
  onSubmit: () => void;
  isLoading?: boolean;
}

const FormComponent: React.FC<FormComponentProps> = ({
  title,
  inputs,
  buttonText,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className={`text-2xl md:text-3xl mb-8 ${manropeBold.className}`}>
        {title}
      </h2>
      {/* <p
        className={`text-base mb-8 text-p-text-color ${manropeMedium.className}`}
      >
        {subtitle}
      </p> */}
      {inputs.map((input, index) => (
        <SignInFormInput
          key={index}
          label={input.label}
          register={input.register}
          error={input.error}
        />
      ))}
      <BlueBtn
        btnText={buttonText}
        btnType='submit'
        additionalStyles='w-full'
        hasBlueBackground
        isNotLink
        isLoading={isLoading}
        hasLoadingDots
      />
    </form>
  );
};

export default FormComponent;
