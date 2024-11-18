import React from 'react';
import Image from 'next/image';

import Backdrop from './Backdrop';
import Success from '@/../public/icons/success-circle.png';
import Error from '@/../public/icons/error-circle.png';
import SignInCard from './SignInCard';

import styles from '@/styles/general.module.scss';

import { manropeBold, manropeMedium } from '@/styles/fonts';

type Props = {
  feedBackType: 'success' | 'error';
  feedBackMessage: string;
  onClickBackdrop: () => void;
  feedBackTitle: string;
};

export default function ActionFeedfbackContainer({
  feedBackMessage,
  feedBackType,
  onClickBackdrop,
  feedBackTitle,
}: Props) {
  return (
    <div>
      <Backdrop onChange={onClickBackdrop} />

      <div className={`${styles['action--feedback__container']}`}>
        <SignInCard hasBackdrop>
          <div className='flex flex-col items-center'>
            <Image
              src={feedBackType === 'success' ? Success : Error}
              alt='feedback icon'
            />
            <h4 className={`text-xl ${manropeBold.className}`}>
              {feedBackTitle}
            </h4>
            <p className={`text-sm ${manropeMedium.className}`}>
              {feedBackMessage}
            </p>
          </div>
        </SignInCard>
      </div>
    </div>
  );
}
