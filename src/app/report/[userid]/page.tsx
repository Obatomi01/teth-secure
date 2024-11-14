import OTPSummary from '@/components/report/OTPSummary';
import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const [userid] = await Promise.all(Object.values(await params));

  return <OTPSummary userID={userid} />;
}
