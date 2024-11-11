import CheckOutLeftContainer from '@/components/subcriptions/CheckOutLeftContainer';

import CardPayment from '@/components/subcriptions/CardPayment';
import BankPayment from '@/components/subcriptions/BankPayment';
import USSDPayment from '@/components/subcriptions/USSDPayment';
import MomoPayment from '@/components/subcriptions/MomoPayment';

export default async function Page({
  params,
}: {
  params: Promise<{ payment: string; plan: string }>;
}) {
  //   const slug = (await params).payment;
  //   const plan = (await params).plan;

  const [plan, payment] = await Promise.all(Object.values(await params));

  const paymentOptions = [
    {
      name: 'card-payment',
      component: <CardPayment />,
    },
    {
      name: 'bank-transfer',
      component: <BankPayment />,
    },
    {
      name: 'ussd',
      component: <USSDPayment />,
    },
    {
      name: 'momo',
      component: <MomoPayment />,
    },
  ];

  const selectedPayment = paymentOptions.find(
    (option) => option.name === payment
  );

  return (
    <main className='flex-col gap-12 lg:flex-row lg:gap-0 flex justify-between'>
      <CheckOutLeftContainer plan={plan} />
      {selectedPayment?.component}
    </main>
  );
}
