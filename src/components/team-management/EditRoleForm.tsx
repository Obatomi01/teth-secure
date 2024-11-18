import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { manropeMedium, manropeSemiBold, manropeLight } from '@/styles/fonts';

import SignInFormInput from '../sign-in/SignInFormInput';

import DropDownMenu from '../general/DropDownMenu';
import BlueBtn from '../general/BlueBtn';
import FormPopUp from '../general/FormPopUp';

type EditRoleFormValues = {
  role: string;
};

type Props = {
  userName: string;
  userRole: string;
};

export default function EditRoleForm({ userName, userRole }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditRoleFormValues>({ defaultValues: { role: userRole } });

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = (data: EditRoleFormValues) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowPopUp(true);
    }, 1000);

    setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  };

  const input = {
    register: (
      <Controller
        name='role'
        control={control}
        rules={{ required: 'Enter a role' }}
        render={({ field }) => (
          <DropDownMenu
            {...field}
            options={roleOptions}
            onChange={(value) => field.onChange(value)}
            placeholder={
              <p className={`text-base ${manropeMedium.className}`}>
                {userRole}
              </p>
            }
          />
        )}
      />
    ),
    label: 'Change Role',
    error: errors.role?.message,
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormPopUp showPopUp={showPopUp} message='Role edited' />
        <div className='flex justify-between items-center mb-8'>
          <h4 className={`${manropeSemiBold.className} text-xl`}>
            Edit Member&apos;s Role
          </h4>

          <div>
            <h6 className={`${manropeSemiBold.className}`}>{userName}</h6>
            <p className={`${manropeLight.className} text-sm text-right`}>
              {userRole}
            </p>
          </div>
        </div>

        <SignInFormInput {...input} />

        <BlueBtn
          hasBlueBackground
          isNotLink
          btnText='Edit Role'
          btnType='submit'
          hasLoadingDots
          isLoading={isLoading}
          additionalStyles='w-full'
        />
      </form>
    </section>
  );
}
