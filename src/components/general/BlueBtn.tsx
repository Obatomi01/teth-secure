import React from 'react';
import Link from 'next/link';

import { manropeMedium } from '@/styles/fonts';
import styles from '@/styles/general.module.scss';

type Props = {
  linkTo: string;
  hasBlueBackground: boolean;
  btnText: string;
};

export default function BlueBtn({ linkTo, hasBlueBackground, btnText }: Props) {
  return (
    <Link
      href={linkTo}
      className={
        hasBlueBackground
          ? styles['blue--btn__container']
          : styles['blue--border--btn']
      }
    >
      <p className={manropeMedium.className}>{btnText}</p>
    </Link>
  );
}
