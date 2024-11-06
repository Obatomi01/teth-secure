import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import ContactFormInput from './ContactFormInput';
import FormPopUp from './FormPopUp';

import styles from '@/styles/contactUs.module.scss';
import { manropeBold, manropeMedium } from '@/styles/fonts';

import { ContactFormInputProps } from './ContactFormInput';

import BlueBtn from '../general/BlueBtn';

type FormValues = {
  firstName: string;
  lastName: string;
  company?: string; // optional
  email: string;
  country?: string; // optional
  phoneNumber: string;
  additionalInfo?: string; // optional
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = (data: FormValues) => {
    setShowPopUp(true);

    setTimeout(() => {
      setShowPopUp(false);
    }, 3000);

    console.log(data);
    // Handle form submission logic here, e.g., send data to an API
  };

  const contactFormInputs: ContactFormInputProps[] = [
    {
      register: (
        <input
          {...register('firstName', { required: 'First name is required' })}
          placeholder='First Name'
        />
      ),
      error: errors.firstName?.message,
    },
    {
      register: (
        <input
          {...register('lastName', { required: 'Last name is required' })}
          placeholder='Last Name'
        />
      ),
      error: errors.lastName?.message,
    },
    {
      register: (
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder='Email Address'
        />
      ),
      error: errors.email?.message,
    },
    {
      register: <input {...register('company')} placeholder='Company' />,
    },
    {
      register: <input {...register('country')} placeholder='Country' />,
    },
    {
      register: (
        <input
          type='tel'
          {...register('phoneNumber', {
            pattern: { value: /^\d+$/, message: 'Only numbers are allowed' },
          })}
          placeholder='Phone Number'
          onInput={(e: any) => {
            e.target.value = e.target.value.replace(/\D/g, '');
          }}
        />
      ),
      error: errors.phoneNumber?.message,
    },
  ];

  return (
    <section className={styles['contact--form__container']}>
      <FormPopUp showPopUp={showPopUp} />

      <h1 className={`text-center ${manropeBold.className}`}>Contact Us</h1>
      <p className={`text-base text-center mb-8 ${manropeMedium.className}`}>
        Have questions or need assistance? We&apos;re here to help!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['contact--form']}
      >
        <p className={`text-base text-center mb-4 ${manropeMedium.className}`}>
          Please enter your information
        </p>
        <div className={styles['contact--form__top']}>
          {contactFormInputs.map((input, index) => (
            <ContactFormInput key={index} {...input} />
          ))}
        </div>

        <div className='flex'>
          <textarea rows={3} placeholder='Additional Information'></textarea>
        </div>

        <div>
          <BlueBtn
            hasBlueBackground={true}
            isNotLink
            btnText='Submit'
            btnType='submit'
            additionalStyles='mt-4 md:mt-2 mx-auto'
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
