import React from 'react';

import CheckOutLeftContainer from '@/components/subcriptions/CheckOutLeftContainer';
import USSDPaymentForBank from '@/components/subcriptions/USSDPaymentForBank';

import GTB from '@/../public/icons/bank-icons/gt-icon.png';
import FCMB from '@/../public/icons/bank-icons/fcmb-icon.png';
import Branch from '@/../public/icons/bank-icons/branch-icon.png';
import Access from '@/../public/icons/bank-icons/access-icon.png';

export default async function page({
  params,
}: {
  params: Promise<{ plan: string; bank: string }>;
}) {
  const [plan, bank] = await Promise.all(Object.values(await params));

  const bankOptions = [
    {
      bankName: 'Guaranty Trust Bank plc',
      title: 'gtb',
      bankIcon: GTB,
      linkTo: `/subscriptions/${plan}/ussd/gtb`,
      code: '*737*50*amount*46#',
    },
    {
      bankName: 'FCMB',
      title: 'fcmb',
      bankIcon: FCMB,
      linkTo: `/subscriptions/${plan}/ussd/fcmb`,
      code: '*329*50*amount#',
    },
    {
      bankName: 'Branch',
      title: 'branch',
      bankIcon: Branch,
      linkTo: `/subscriptions/${plan}/ussd/branch`,
      code: '*384*50*amount#',
    },
    {
      bankName: 'Access Bank',
      title: 'access',
      bankIcon: Access,
      linkTo: `/subscriptions/${plan}/ussd/access`,
      code: '*901*50*amount#',
    },
  ];
  const selectedBank = bankOptions.find((option) => option.title === bank);

  return (
    <main className='flex-col gap-12 lg:flex-row lg:gap-0 flex justify-between'>
      <CheckOutLeftContainer plan={plan} />
      {selectedBank && <USSDPaymentForBank bank={selectedBank} />}
    </main>
  );
}
