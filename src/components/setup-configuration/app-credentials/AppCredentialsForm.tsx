import SignInCard from '@/components/general/SignInCard';
import React from 'react';

import Image from 'next/image';
import ClipBoardIcon from '@/../public/icons/clipboard-icon.png';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import NotAFormInput from '@/components/general/NotAFormInput';

export default function AppCredentialsForm() {
  const credentials = [
    { label: 'App ID', value: 'abcd123456' },
    { label: 'App Key', value: 'abcd123456' },
    { label: 'App Secret', value: '**********************' },
  ];

  return (
    <SignInCard>
      <h3 className={`${manropeBold.className} text-lg mb-8`}>
        App Credentials
      </h3>
      <div className='flex flex-col gap-6'>
        {credentials.map((credential, index) => (
          <div key={index}>
            <p className={`${manropeBold.className} text-base mb-2`}>
              {credential.label}
            </p>
            <NotAFormInput>
              <div className='flex justify-between'>
                <p className={`${manropeMedium.className} text-sm`}>
                  {credential.value}
                </p>
                <Image
                  src={ClipBoardIcon}
                  alt='Copy Icon'
                  onClick={async () =>
                    await navigator.clipboard.writeText(credential.value)
                  }
                />
              </div>
            </NotAFormInput>
          </div>
        ))}
      </div>
    </SignInCard>
  );
}
