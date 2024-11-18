import React, { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

import styles from '@/styles/report.module.scss';

import { TeamUserData } from './TeamManagementPage';
import { manropeMedium } from '@/styles/fonts';

import Image from 'next/image';
import { manropeSemiBold, manropeLight } from '@/styles/fonts';
import UserIcon from '@/../public/icons/dashboard-nav/account-settings.png';
import ActionIcon from '@/../public/icons/action-icon.png';

export default function MemberReport({
  name,
  emailAddress,
  userStatus,
  // totalOTPGenerated,
  // usedOTP,
  // failedOTP,
  role,
  onShowResetUserPassword,
  onDeactivateUser,
  userID,
  onEditRole,
}: TeamUserData) {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  // const [showResetUserPassword, setShowResetUserPassword] = useState(false);

  const popUpRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as Element).closest('.action--button')) {
        return;
      }

      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target as Node)
      ) {
        setSelectedUser(null);
      }
    };

    // Cleanup when component unmounts or isOpen changes

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // document.body.style.overflowY = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (userID: string) => {
    // Toggle the visibility of content for the clicked item
    setSelectedUser((prev) => (prev === userID ? null : userID));
  };

  // Make strings to be of the form 'name...' if they exceed the maxLength
  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text; // Return the text as is if it's within the limit
  }

  return (
    <div>
      <div className={styles['report--item']}>
        <div className='flex content-center gap-2'>
          <Image src={UserIcon} alt='user' />
          <p className={manropeSemiBold.className}>{name}</p>
        </div>
        <div className='flex content-center gap-2'>
          <div className='flex flex-col gap-2'>
            <p
              style={{
                color: userStatus === 'Active' ? '#008423' : '#EB5757',
                backgroundColor:
                  userStatus === 'Active' ? '#E9FFE1' : '#FDEDEC',
                width: '108px',
                textAlign: 'center',
                paddingBlock: '0.2rem',
                margin: 'auto',
                borderRadius: '8px',
                fontSize: '16px',
              }}
              className='text-center'
            >
              {userStatus}
            </p>
            <p className={`${manropeLight.className} text-sm`}>
              {truncateText(emailAddress, 15)}
            </p>
          </div>

          <div className='flex'>
            <div
              onClick={() => handleClick(userID)}
              className='flex m-auto action--button'
              style={{
                width: '48px',
                height: '48px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={ActionIcon}
                alt=''
                className='self-center m-auto'
                style={{
                  position: 'relative',
                  // zIndex: 1,
                }}
              />
            </div>
            {selectedUser === userID && (
              <div
                ref={popUpRef}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '70px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  backgroundColor: '#FFFFFF',

                  paddingBlock: '12px',
                  paddingInline: '20px',
                  zIndex: 2,

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  textAlign: 'left',
                }}
              >
                <p
                  className={`${manropeMedium.className}`}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    onDeactivateUser && onDeactivateUser(name, role)
                  }
                >
                  Deactivate
                </p>
                <p
                  className={`${manropeMedium.className}`}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => onEditRole && onEditRole(name, role)}
                >
                  Edit Role
                </p>
                <p
                  className={`${manropeMedium.className}`}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={onShowResetUserPassword}
                >
                  Reset Password
                </p>
                <p
                  className={`${manropeMedium.className}`}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    router.push(`/team-management/${userID.toLowerCase()}`)
                  }
                >
                  Show More
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
