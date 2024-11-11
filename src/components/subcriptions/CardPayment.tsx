'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import BlueBtn from '../general/BlueBtn';
import SignInFormInput from '../sign-in/SignInFormInput';
import PaymentCard from './PaymentCard';

type CardPaymentFormInputProps = {
  cardNumber: number;
  nameOnCard: string;
  cardExpiry: string;
  cvv: number;
};

export default function CardPayment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    setError,
  } = useForm<CardPaymentFormInputProps>();
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const onSubmit = (data: CardPaymentFormInputProps) => {
    console.log(data);

    debugger;
  };

  // const handleExpiryDateChange = (e) => {
  //   let input = e.target.value;

  //   // Remove any non-digit characters
  //   input = input.replace(/\D/g, '');

  //   // Add slash after the month if user has typed 2 digits
  //   if (input.length >= 3) {
  //     input = input.slice(0, 2) + '/' + input.slice(2);
  //   }

  //   // Restrict to MM/YY format
  //   if (input.length > 5) {
  //     input = input.slice(0, 5);
  //   }

  //   setExpiryDate(input);

  //   // Validate the month and year format
  //   const [month, year] = input.split('/');
  //   if (month && (parseInt(month, 10) < 1 || parseInt(month, 10) > 12)) {
  //     setError('expiryDate', {
  //       type: 'manual',
  //       message: 'Invalid month (MM)',
  //     });
  //   } else if (year && year.length === 2 && isNaN(parseInt(year, 10))) {
  //     setError('expiryDate', {
  //       type: 'manual',
  //       message: 'Invalid year (YY)',
  //     });
  //   } else {
  //     clearErrors('expiryDate');
  //   }
  // };

  const paymentFormInputs = [
    {
      register: (
        <input
          value={cardNumber}
          type='text'
          {...register('cardNumber', {
            required: 'Card Information is required',
            validate: (value) => {
              // Remove spaces and check if the unformatted value matches the pattern
              const unformattedValue = value.toString().replace(/\s/g, '');
              if (!/^[0-9]{13,19}$/.test(unformattedValue)) {
                return 'Invalid card number';
              }
            },
          })}
          placeholder='1234 1234 1234 1234'
          onChange={(e) => {
            let input = e.target.value;

            // Remove all non-digit characters
            input = input.replace(/\D/g, '');

            // Format the input into blocks of 4 separated by spaces
            const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 ');

            // Update the state with the formatted value for display
            setCardNumber(formattedInput);

            // Set the unformatted value in the form's register (removes spaces)
            setValue('cardNumber', +input);
            clearErrors('cardNumber');
          }}
          maxLength={19}
        />
      ),
      error: errors.cardNumber?.message,
      label: 'Card Information',
    },
    {
      register: (
        <input
          type='text'
          {...register('nameOnCard', {
            required: 'Name on Card is required',
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Invalid name format',
            },
          })}
          placeholder='Name on Card'
        />
      ),
      error: errors.nameOnCard?.message,
      label: 'Name on Card',
    },
    {
      register: (
        <input
          value={expiryDate}
          type='text'
          {...register('cardExpiry', {
            required: 'Card Expiry is required',
            pattern: {
              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
              message: 'Invalid expiry date (MM/YY)',
            },
          })}
          placeholder='MM/YY'
          onChange={(e) => {
            let input = e.target.value;

            // Remove any non-digit characters
            input = input.replace(/\D/g, '');

            // Add slash after the month if user has typed 2 digits
            if (input.length >= 3) {
              input = input.slice(0, 2) + '/' + input.slice(2);
            }

            // Restrict to MM/YY format
            if (input.length > 5) {
              input = input.slice(0, 5);
            }

            setExpiryDate(input);

            // Validate the month and year format
            const [month, year] = input.split('/');
            if (
              month &&
              (parseInt(month, 10) < 1 || parseInt(month, 10) > 12)
            ) {
              setError('cardExpiry', {
                type: 'manual',
                message: 'Invalid month (MM)',
              });
            } else if (year && year.length === 2 && isNaN(parseInt(year, 10))) {
              setError('cardExpiry', {
                type: 'manual',
                message: 'Invalid year (YY)',
              });
            } else {
              clearErrors('cardExpiry');
            }
          }}
        />
      ),
      error: errors.cardExpiry?.message,
      label: 'Card Expiry',
    },
    {
      register: (
        <input
          type='text'
          value={cvv}
          {...register('cvv', {
            required: 'CVV is required',
            pattern: {
              value: /^[0-9]{3,4}$/,
              message: 'Invalid CVV',
            },
          })}
          placeholder='CVV'
          onChange={(e) => {
            let input = e.target.value;

            // Remove all non-digit characters
            input = input.replace(/\D/g, '');

            // Update the state with the formatted value
            setValue('cvv', +input);
            setCVV(input);
            clearErrors('cvv');
          }}
          maxLength={3}
        />
      ),
      error: errors.cvv?.message,
      label: 'CVV',
    },
  ];

  return (
    <PaymentCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        {paymentFormInputs.map((input, index) => (
          <SignInFormInput key={index} {...input} />
        ))}

        <BlueBtn
          hasBlueBackground
          btnText='Pay Now'
          btnType='submit'
          isNotLink
          additionalStyles='w-full'
        />
      </form>
    </PaymentCard>
  );
}
