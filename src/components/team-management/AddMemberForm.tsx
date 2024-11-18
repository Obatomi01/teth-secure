import React, { useState } from 'react';

import { manropeMedium, manropeSemiBold } from '@/styles/fonts';
import { createFormInput } from '@/utils/formUtils';

import DropDownMenu from '../general/DropDownMenu';

import { useForm, Controller } from 'react-hook-form';

import BlueBtn from '../general/BlueBtn';
import SignInFormInput from '../sign-in/SignInFormInput';
import FormPopUp from '../general/FormPopUp';

type Props = {
  onSubmitHandler: () => void;
};

type AddMemberFormValues = {
  fullName: string;
  emailAddress: string;
  role: string;
  password: string;
  confirmPassword: string;
};

export default function AddMemberForm({ onSubmitHandler }: Props) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddMemberFormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = (data: AddMemberFormValues) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowPopUp(true);
    }, 1000);

    setTimeout(() => {
      setShowPopUp(false);
      onSubmitHandler();
    }, 2000);
  };

  const pTags = (text: string) => (
    <p className={`text-base ${manropeMedium.className}`}>{text}</p>
  );

  const roleOptions = [
    {
      value: 'Admin',
      label: pTags('Admin'),
    },
    {
      value: 'Manager',
      label: pTags('Manager'),
    },
    {
      value: 'User',
      label: pTags('User'),
    },
    {
      value: 'Editor',
      label: pTags('Editor'),
    },
  ];

  const newPassword = watch('password');

  const inputs = [
    createFormInput(
      'Email Address',
      'Enter Email Address',
      register,
      'emailAddress',
      'Email address is required',
      errors.emailAddress?.message
    ),
    createFormInput(
      'Full Name',
      'Enter Full Name',
      register,
      'fullName',
      'Full Name is required',
      errors.fullName?.message
    ),
    {
      register: (
        <Controller
          name='role'
          control={control}
          rules={{ required: 'Role is required' }}
          render={({ field }) => (
            <DropDownMenu
              {...field}
              options={roleOptions}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      ),
      label: 'Role',
      error: errors.role?.message,
    },
    {
      register: (
        <input
          type='password'
          {...register('password', {
            required: 'Password is required',
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
          placeholder={'Enter Password'}
        />
      ),
      error: errors.password?.message,
      label: 'Password',
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
          placeholder={'Confirm Password'}
          //   onChange={() => trigger('confirmPassword')}
        />
      ),
      error: errors.confirmPassword?.message,
      label: 'Confirm Password',
      isAPasswordField: true,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        overflowY: 'auto',
        maxHeight: '80vh',
      }}
    >
      <FormPopUp showPopUp={showPopUp} message='Member Added' />
      <h3 className={`text-xl md:text-2xl ${manropeSemiBold.className} mb-8`}>
        Add new member
      </h3>
      {inputs.map((input, index) => (
        <SignInFormInput key={index} {...input} />
      ))}

      <BlueBtn
        hasBlueBackground
        btnText='Add New Member'
        btnType='submit'
        isNotLink
        additionalStyles='w-full'
        isLoading={isLoading}
        hasLoadingDots
      />
    </form>
  );
}
