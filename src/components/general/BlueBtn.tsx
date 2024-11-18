import React from 'react';
import Link from 'next/link';

import { manropeBold } from '@/styles/fonts';
import styles from '@/styles/general.module.scss';
import LoadingDots from './LoadingDots';

type Props = {
  linkTo?: string;
  hasBlueBackground: boolean;
  btnText: string;
  isNotLink?: boolean;
  btnType?: 'button' | 'submit';
  additionalStyles?: string;
  hasLoadingDots?: boolean;
  isLoading?: boolean;
  onClickHandler?: () => void;
};

export default function BlueBtn({
  linkTo,
  hasBlueBackground,
  btnText,
  isNotLink,
  btnType,
  additionalStyles,
  hasLoadingDots,
  isLoading,
  onClickHandler,
}: Props) {
  return !isNotLink ? (
    <Link
      href={linkTo || '/'}
      className={`${additionalStyles} ${
        hasBlueBackground
          ? styles['blue--btn__container']
          : styles['blue--border--btn']
      } flex`}
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
      } ${hasLoadingDots ? styles['blue-btn__with--dots'] : ''} flex`}
      type={btnType}
      onClick={onClickHandler}
    >
      {isLoading ? (
        <LoadingDots />
      ) : (
        <p className={`text-sm md:text-base ${manropeBold.className}`}>
          {btnText}
        </p>
      )}
    </button>
  );
}
