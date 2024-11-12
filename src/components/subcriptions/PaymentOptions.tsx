import React from 'react';
import { StaticImageData } from 'next/image';

import { useParams } from 'next/navigation';

import styles from '@/styles/subscriptions.module.scss';

import CardPayment from '@/../public/icons/payment/card.png';
import BankTransfer from '@/../public/icons/payment/account_balance.png';
import USSD from '@/../public/icons/payment/ussd.png';
import Momo from '@/../public/icons/payment/momo.png';
import PaymentOption from './PaymentOption';
import DropDownMenu from '../general/DropDownMenu';

import { manropeMedium, manropeBold } from '@/styles/fonts';

export type PaymentOptionsType = {
  title: string;
  name: string;
  icon: StaticImageData;
  linkTo: string;
};

export default function PaymentOptions() {
  const { plan, payment = 'ussd' } = useParams();

  const paymentOptions: PaymentOptionsType[] = [
    {
      title: 'Card Payment',
      name: 'card-payment',
      icon: CardPayment,
      linkTo: `/subscriptions/${plan}/card-payment`,
    },
    {
      title: 'Bank Transfer',
      name: 'bank-transfer',
      icon: BankTransfer,
      linkTo: `/subscriptions/${plan}/bank-transfer`,
    },
    {
      title: 'USSD',
      name: 'ussd',
      icon: USSD,
      linkTo: `/subscriptions/${plan}/ussd`,
    },
    {
      title: 'Momo',
      name: 'momo',
      icon: Momo,
      linkTo: `/subscriptions/${plan}/momo`,
    },
  ];

  const paymentDropdownOptions = paymentOptions.map((el) => {
    return {
      label: <PaymentOption {...el} />,
      value: el.title,
    };
  });

  const selectedPayment = paymentOptions.find(
    (option) => option.name === payment
  );

  return (
    <>
      <div className={`${styles['payment--options']}`}>
        {paymentOptions.map((el, index) => (
          <PaymentOption key={index} {...el} />
        ))}
      </div>

      <p className={`${manropeBold.className} text-base mt-12 mb-2`}>
        Select Payment method
      </p>
      <section className={styles['dropdown--options']}>
        <DropDownMenu
          onChange={() => {}}
          shouldNotSetState
          placeholder={
            <p className={manropeMedium.className}>{selectedPayment?.title}</p>
          }
          options={paymentDropdownOptions}
        />
      </section>
    </>
  );
}
