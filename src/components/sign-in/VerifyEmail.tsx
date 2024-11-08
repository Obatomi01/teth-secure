'use client';

import React, { useState, useRef } from 'react';
import OTPInput from 'react-otp-input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { verifyOTPHandler, requestOTPHandler } from '@/app/action';

import styles from '@/styles/signIn.module.scss';
import { manropeSemiBold, manropeMedium } from '@/styles/fonts';
import BlueBtn from '../general/BlueBtn';

type Props = {
  linkTo: '/reset-password' | '/get-started';
  submissionLink:
    | '/get-started/set-up-account'
    | '/reset-password/set-new-password';
};

export default function VerifyEmail({ linkTo, submissionLink }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill('')); // Initialize OTP as an array
  const otpRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add logic to handle form submission
    await verifyOTPHandler();

    router.push(`${submissionLink}`);
  }

  const handleChange = (otpValue: string) => {
    // Only update OTP state if each character is numeric
    if (/^\d*$/.test(otpValue)) {
      setOtp(otpValue.split(''));
    }
  };

  const handleIndividualChange = (value: string, index: number) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    // Update the specific index in the OTP array without shifting others
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit was entered and this isn’t the last box
    if (value && index < otp.length - 1) {
      otpRef.current[index + 1]?.focus();
    } else if (newOtp.length === 6) {
      otpRef.current[5]?.blur(); // Remove focus from the last input
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    // Handle backspace to clear current input and focus the previous one
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRef.current[index - 1]?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={`text-2xl md:text-3xl mb-2 ${manropeSemiBold.className}`}>
        Verify your Email
      </h3>
      <p className={`text-base mb-10 ${manropeMedium.className}`}>
        Enter the six digit OTP sent to Paulthompson968@gmail.com or{' '}
        <span
          className={`text-color-primary ${manropeSemiBold.className} text-base `}
        >
          <Link href={linkTo}>change email</Link>
        </span>
      </p>

      <OTPInput
        value={otp.join('')}
        onChange={handleChange}
        numInputs={6}
        renderInput={(props, index) => (
          <input
            {...props}
            ref={(el) => {
              otpRef.current[index] = el;
            }}
            value={otp[index] || ''}
            onChange={(e) => handleIndividualChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            inputMode='numeric'
            style={{ width: '2rem', textAlign: 'center' }}
          />
        )}
        inputStyle={`${styles['verify--email__otp--input']}`}
        containerStyle={styles['verify--email__otp--container']}
      />

      <BlueBtn
        isNotLink
        hasBlueBackground
        btnText='Create Account'
        btnType='submit'
        additionalStyles='w-full mt-6'
      />

      <p
        className={`text-base mt-6 text-p-text-color ${manropeMedium.className} text-center`}
      >
        Didn&apos;t receive OTP?
        <span
          className={`text-color-primary ${manropeSemiBold.className} cursor-pointer`}
          onClick={() => {
            requestOTPHandler();
            alert('OTP sent to your email');
          }}
        >
          {' '}
          Resend
        </span>
      </p>
    </form>
  );
}
