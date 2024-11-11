import React from 'react';

import { RecentTokenRequestsType } from './BottomDashboardContainer';

export default function RecentTokenRequests({
  name,
  time,
  status,
}: RecentTokenRequestsType) {
  return (
    <div className='flex justify-between content-center'>
      <div>
        <p className={`text-base`}>{name}</p>
        <p className={`text-xs`}>{time}</p>
      </div>
      <div>
        <div
          className={`py-1 ${
            status === 'failed' ? 'bg-red-50' : 'bg-green-100'
          } w-28 rounded-md flex justify-center items-center`}
        >
          <p
            className={`text-lg ${
              status === 'failed' ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
