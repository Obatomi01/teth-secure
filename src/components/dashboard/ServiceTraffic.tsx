import React from 'react';
import Image from 'next/image';

import Trend from '@/../public/icons/token icons/trend.png';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import DropDownMenu from '../general/DropDownMenu';
import { Option } from '../general/DropDownMenu';

const pTag = (text: string) => (
  <p className={`text-xs ${manropeMedium.className} self-center`}>{text}</p>
);

const periodOptions: Option[] = [
  {
    label: pTag('Today'),
    value: 'Today',
  },
  {
    label: pTag('Yesterday'),
    value: 'Yesterday',
  },
  {
    label: pTag('Last 7 days'),
    value: 'Last 7 days',
  },
  {
    label: pTag('Last 30 days'),
    value: 'Last 30 days',
  },
  {
    label: pTag('Last 90 days'),
    value: 'Last 90 days',
  },
];

export default function ServiceTraffic() {
  return (
    <div className='flex justify-between content-center'>
      <div>
        <h4 className={`${manropeBold.className} text-lg mb-4`}>
          Service Traffic
        </h4>

        <div className='flex justify-between gap-5'>
          <h1 className={`text-4xl md:text-5xl ${manropeMedium.className}`}>
            421
          </h1>
          <p
            className={`${manropeMedium.className} flex self-center text-green-500`}
          >
            +11.2%
            <span className='content-center'>
              <Image
                src={Trend}
                alt='trend'
                style={{
                  filter:
                    'invert(49%) sepia(100%) saturate(338%) hue-rotate(93deg) brightness(94%) contrast(90%)',
                }}
              />
            </span>
          </p>
        </div>

        <p className={`${manropeMedium.className} text-base mt-1`}>
          Services per minute
        </p>
      </div>

      <div className='w-36'>
        <DropDownMenu
          options={periodOptions}
          onChange={() => {}}
          placeholder={
            <p className={`text-xs self-center ${manropeMedium.className}`}>
              Select period
            </p>
          }
        />
      </div>
    </div>
  );
}
