import React from 'react';
import Link from 'next/link';

import { manropeBold } from '@/styles/fonts';
import styles from '@/styles/general.module.scss';

type Props = {
  linkTo?: string;
  hasBlueBackground: boolean;
  btnText: string;
  isNotLink?: boolean;
  btnType?: 'button' | 'submit';
  additionalStyles?: string;
};

export default function BlueBtn({
  linkTo,
  hasBlueBackground,
  btnText,
  isNotLink,
  btnType,
  additionalStyles,
}: Props) {
  return !isNotLink ? (
    <Link
      href={linkTo || '/'}
      className={`${additionalStyles} ${
        hasBlueBackground
          ? styles['blue--btn__container']
          : styles['blue--border--btn']
      }`}
    >
      <p className={`text-sm md:text-base ${manropeBold.className}`}>
        {btnText}
      </p>
    </Link>
  ) : (
    <button
      className={`${additionalStyles} ${
        hasBlueBackground
          ? styles['blue--btn__container']
          : styles['blue--border--btn']
      }`}
      type={btnType}
    >
      <p className={`text-sm md:text-base ${manropeBold.className}`}>
        {btnText}
      </p>
    </button>
  );
}
