import React, { useState } from 'react';

import {
  manropeLight,
  manropeSemiBold,
  manropeBold,
  manropeMedium,
} from '@/styles/fonts';
import BlueBtn from '../general/BlueBtn';
import FormPopUp from '../general/FormPopUp';

type Props = {
  userRole: string;
  userName: string;
  onDeactivateUser: () => void;
};

export default function DeactivateUser({
  userName,
  userRole,
  onDeactivateUser,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div>
      <FormPopUp showPopUp={showPopUp} message='User Deactivated' />
      <div className='flex items-center justify-between'>
        <h3 className={`${manropeSemiBold.className} text-2xl`}>Deactivate</h3>
        <div>
          <p className={`${manropeSemiBold.className}`}>{userName}</p>
          <p className={`${manropeLight.className} text-right`}>{userRole}</p>
        </div>
      </div>

      <h3 className={`${manropeBold.className} text-3xl mt-10 text-center`}>
        Deactivate User?
      </h3>

      <p className={`${manropeMedium.className} text-center mb-8`}>
        This member and their associated activity will be deleted.
      </p>

      <BlueBtn
        btnText='Confirm'
        hasBlueBackground={false}
        isNotLink
        additionalStyles='w-3/4 m-auto'
        onClickHandler={() => {
          setIsLoading(true);

          setTimeout(() => {
            setIsLoading(false);
            setShowPopUp(true);
          }, 1000);

          setTimeout(() => {
            setShowPopUp(false);
            onDeactivateUser();
          }, 2000);
        }}
        isLoading={isLoading}
        hasLoadingDots
      />
    </div>
  );
}
