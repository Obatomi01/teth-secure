import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/general.module.scss';

import { ContactFormInputProps } from '../contact us/ContactFormInput';
import { manropeBold } from '@/styles/fonts';

import ShowPasswordIcon from '@/../public/icons/show-password-icon.png';
import HidePasswordIcon from '@/../public/icons/hide-password-icon.png';

/**
 * Represents the props for the sign-in form input.
 * @extends ContactFormInputProps
 * @property {string} label - The label for the input.
 * @property {string} error - The error message for the input.
 * @property {React.ReactNode} register - The register for the input.
 */
export interface SignInFormInputProps extends ContactFormInputProps {
  label: string;
  isAPasswordField?: boolean;
}

export default function SignInFormInput({
  register,
  label,
  error,
  isAPasswordField,
}: SignInFormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles['form--input__container']}>
      <label
        htmlFor={label}
        className={`${manropeBold.className} text-bold-text-color text-base`}
      >
        {label}
      </label>
      <div className='flex w-full relative content-center'>
        {isAPasswordField
          ? React.cloneElement(register as React.ReactElement, {
              type: showPassword ? 'text' : 'password',
            })
          : register}
        {isAPasswordField && (
          <Image
            src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
            alt='Password Icon'
            style={{
              position: 'absolute',
              right: '2rem',
              alignSelf: 'center',
              cursor: 'pointer',
              width: '20px',
              height: '20px',
            }}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
}
