import React from 'react';

import styles from '@/styles/home.module.scss';
import { manropeSemiBold, manropeMedium } from '@/styles/fonts';
import FAQ from './FAQ';
import Link from 'next/link';

export interface FAQType {
  question: string;
  answer: string;
}

const faqs: FAQType[] = [
  {
    question: 'What is Multi-Factor Authentication (MFA)?',
    answer:
      'MFA is a security measure that requires more than one verification method to access a system. Teth Secure offers various MFA options, adding an extra layer of protection beyond just passwords.',
  },
  {
    question: 'Is Teth Secure easy to set up and use?',
    answer:
      'Teth Secure is designed for ease of use. We offer a user-friendly platform with clear instructions for a smooth setup process.',
  },
  {
    question: 'How secure is OTP Authentication?',
    answer:
      'OTP Authentication generates single-use passwords, enhancing account security by minimizing the risk of unauthorized access.',
  },
  {
    question:
      'Can I customize the security settings to suit my business needs?',
    answer:
      'Yes, Teth Secure allows customizable security settings, tailoring authentication to your business requirements.',
  },
];

export default function FAQs() {
  return (
    <section className={styles['faqs--section__container']}>
      <h2 className={`${manropeSemiBold.className}`}>
        Frequently Asked Questions
      </h2>
      <div className={styles['faqs--container']}>
        {faqs.map((faq, index) => (
          <FAQ key={index} {...faq} />
        ))}
      </div>
      <p className='text-base text-center pt-8'>
        Haven&apos;t got your answer?
        <Link href={'/'}>
          <span className='text-color-primary'> Contact our support now</span>
        </Link>
      </p>
    </section>
  );
}
