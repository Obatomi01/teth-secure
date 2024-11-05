import React from 'react';

import Image from 'next/image';

import styles from '@/styles/home.module.scss';
import { manropeMedium, manropeSemiBold } from '@/styles/fonts';

import FeaturesImage from '@/../public/images/unparalled security.png';
import Feature from './Feature';

export interface FeatureType {
  featureTitle: string;
  featureContent: string;
  featureNumber?: string;
}

const features: FeatureType[] = [
  {
    featureContent:
      'Add an extra layer of security to your accounts by requiring users to authenticate with two factors, such as a password and a unique verification code sent to their mobile device.',
    featureTitle: 'Two-Factor Authentication (2FA)',
  },
  {
    featureTitle: 'Assign related people',
    featureContent:
      'Generate single-use passwords for secure logins, minimizing the risk of unauthorized access and credential theft.',
  },
  {
    featureTitle: 'Make it done on-time',
    featureContent:
      'Securely tokenize sensitive information sent via email, ensuring that your data remains protected from interception and unauthorized access.',
  },
];

export default function Features() {
  return (
    <section className={styles['features--section__container']}>
      <h2 className={`${manropeSemiBold.className}`}>Unparalleled Security</h2>
      <h6 className={`text-p-text-color ${manropeMedium.className}`}>
        Enhance your login security with our robust features
      </h6>
      <div className={styles['features--container']}>
        <div className={styles['left--container']}>
          <Image src={FeaturesImage} alt='Feature' />
        </div>
        <div className={styles['right--container']}>
          {features.map((el: FeatureType, index: number) => (
            <Feature
              key={index}
              featureContent={el.featureContent}
              featureTitle={el.featureTitle}
              featureNumber={`${index + 1} `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
