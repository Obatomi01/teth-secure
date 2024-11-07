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
  submissionLink: '/set-up-account' | '/set-new-password';
};

export default function VerifyEmail({ linkTo, submissionLink }: Props) {
  const [otp, setOtp] = useState('');
  const otpRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add logic to handle form submission
    await verifyOTPHandler();

    router.push(`${submissionLink}`);
  }

  const handleOTPChange = (newOtp: string) => {
    const filteredOtp = newOtp.replace(/\D/g, '');

    setOtp(filteredOtp); // Update the OTP with the filtered value

    // Move focus to the next input if the OTP is not fully entered
    const nextIndex = filteredOtp.length;
    if (nextIndex < 6 && otpRef.current[nextIndex]) {
      otpRef.current[nextIndex]?.focus();
    } else if (filteredOtp.length === 6) {
      otpRef.current[5]?.blur(); // Remove focus from the last input
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
        value={otp}
        onChange={handleOTPChange}
        numInputs={6}
        renderInput={(props, index) => (
          <input
            {...props}
            ref={(el) => {
              otpRef.current[index] = el;
            }}
            inputMode='numeric'
            pattern='[0-9]*'
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
