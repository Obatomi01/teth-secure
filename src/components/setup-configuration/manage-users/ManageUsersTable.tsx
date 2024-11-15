'use client';

import styles from '@/styles/report.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import React, { useState, useRef, useEffect } from 'react';

import UsersReport from './UsersReport';

import Image from 'next/image';
import ActionIcon from '@/../public/icons/action-icon.png';
import EnterNewPasswordForm from '@/components/reset-password/EnterNewPasswordForm';
import SignInCard from '@/components/general/SignInCard';
import Backdrop from '@/components/general/Backdrop';

type ManageUsersTableProps = {
  users: UserData[] | [];
};

export type UserData = {
  name: string;
  emailAddress: string;
  userStatus: string;
  totalOTPGenerated: number;
  usedOTP: number;
  failedOTP: number;
  userID: string;
  onShowResetUserPassword?: () => void;
  onSelectUser?: (value: string) => void;
};

export const userData: UserData[] = [
  {
    name: 'Adeola Akinyemi',
    emailAddress: 'adeola.akinyemi@example.com',
    userStatus: 'active',
    totalOTPGenerated: 30,
    usedOTP: 20,
    failedOTP: 5,
    userID: 'user123',
  },
  {
    name: 'Chinwe Okafor',
    emailAddress: 'chinwe.okafor@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 25,
    usedOTP: 15,
    failedOTP: 7,
    userID: 'user456',
  },
  {
    name: 'Bola Adebayo',
    emailAddress: 'bola.adebayo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 40,
    usedOTP: 35,
    failedOTP: 2,
    userID: 'user789',
  },
  {
    name: 'Ifeanyi Eze',
    emailAddress: 'ifeanyi.eze@example.com',
    userStatus: 'active',
    totalOTPGenerated: 50,
    usedOTP: 40,
    failedOTP: 5,
    userID: 'user101',
  },
  {
    name: 'Ngozi Adichie',
    emailAddress: 'ngozi.adichie@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 20,
    usedOTP: 10,
    failedOTP: 8,
    userID: 'user102',
  },
  {
    name: 'Tunde Bakare',
    emailAddress: 'tunde.bakare@example.com',
    userStatus: 'active',
    totalOTPGenerated: 45,
    usedOTP: 30,
    failedOTP: 10,
    userID: 'user103',
  },
  {
    name: 'Aisha Bello',
    emailAddress: 'aisha.bello@example.com',
    userStatus: 'active',
    totalOTPGenerated: 33,
    usedOTP: 28,
    failedOTP: 3,
    userID: 'user104',
  },
  {
    name: 'Emeka Obi',
    emailAddress: 'emeka.obi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 22,
    usedOTP: 18,
    failedOTP: 2,
    userID: 'user105',
  },
  {
    name: 'Funke Ojo',
    emailAddress: 'funke.ojo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 38,
    usedOTP: 33,
    failedOTP: 4,
    userID: 'user106',
  },
  {
    name: 'Gbenga Alabi',
    emailAddress: 'gbenga.alabi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 18,
    usedOTP: 13,
    failedOTP: 3,
    userID: 'user107',
  },
  {
    name: 'Kemi Lawal',
    emailAddress: 'kemi.lawal@example.com',
    userStatus: 'active',
    totalOTPGenerated: 35,
    usedOTP: 32,
    failedOTP: 1,
    userID: 'user108',
  },
  {
    name: 'Yinka Adebisi',
    emailAddress: 'yinka.adebisi@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 17,
    usedOTP: 12,
    failedOTP: 5,
    userID: 'user109',
  },
  {
    name: 'Sade Bamidele',
    emailAddress: 'sade.bamidele@example.com',
    userStatus: 'active',
    totalOTPGenerated: 40,
    usedOTP: 35,
    failedOTP: 2,
    userID: 'user110',
  },
  {
    name: 'Chidinma Nwankwo',
    emailAddress: 'chidinma.nwankwo@example.com',
    userStatus: 'active',
    totalOTPGenerated: 42,
    usedOTP: 39,
    failedOTP: 1,
    userID: 'user111',
  },
  {
    name: 'Olusegun Folarin',
    emailAddress: 'olusegun.folarin@example.com',
    userStatus: 'inactive',
    totalOTPGenerated: 26,
    usedOTP: 20,
    failedOTP: 4,
    userID: 'user112',
  },
];

export default function ManageUsersTable({ users }: ManageUsersTableProps) {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [showResetUserPassword, setShowResetUserPassword] = useState(false);

  const popUpRef = useRef<HTMLDivElement>(null);

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
    if (showResetUserPassword) {
      // Prevent body scroll
      document.body.style.overflowY = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflowY = 'auto';
    }

    // Cleanup when component unmounts or isOpen changes

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflowY = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResetUserPassword]);

  const handleClick = (userID: string) => {
    // Toggle the visibility of content for the clicked item
    setSelectedUser((prev) => (prev === userID ? null : userID));
  };

  return (
    <>
      <table className={`${styles['report--table']}`}>
        <thead>
          <tr>
            <th className={manropeBold.className}>Name</th>
            <th className={manropeBold.className}>Email Address</th>
            <th className={manropeBold.className}>User Status</th>
            <th className={manropeBold.className}>Total OTP Generated</th>
            <th className={manropeBold.className}>Used OTP</th>
            <th className={manropeBold.className}>Failed OTP</th>
            <th className={manropeBold.className}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((record: UserData, index: number) => (
            <tr key={index} className='relative'>
              <td className={manropeMedium.className}>{record.name}</td>
              <td className={manropeMedium.className}>{record.emailAddress}</td>
              <td
                style={{
                  display: 'flex',
                }}
              >
                <p
                  className={manropeMedium.className}
                  style={{
                    color:
                      record.userStatus === 'active' ? '#008423' : '#F94144',
                    backgroundColor:
                      record.userStatus === 'active' ? '#E9FFE1' : '#FFF8F8',
                    width: '108px',
                    textAlign: 'center',
                    paddingBlock: '0.4rem',
                    margin: 'auto',
                    borderRadius: '8px',
                    fontSize: '16px',
                  }}
                >
                  {record.userStatus}
                </p>
              </td>
              <td className={manropeMedium.className}>
                {record.totalOTPGenerated}
              </td>
              <td className={manropeMedium.className}>{record.usedOTP}</td>
              <td className={manropeMedium.className}>{record.failedOTP}</td>
              <td className='flex'>
                <div
                  onClick={() => handleClick(record.userID)}
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
                      zIndex: 1,
                    }}
                  />
                </div>
                {selectedUser === record.userID && (
                  <div
                    ref={popUpRef}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '45px',
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
                    >
                      Deactivate
                    </p>
                    <p
                      className={`${manropeMedium.className}`}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      Diasble OTP
                    </p>
                    <p
                      className={`${manropeMedium.className}`}
                      style={{
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowResetUserPassword(true)}
                    >
                      Reset Password
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showResetUserPassword && (
        <div>
          <Backdrop onChange={() => setShowResetUserPassword(false)} />

          <div className={`${styles['reset--user__password']}`}>
            <SignInCard hasBackdrop>
              <EnterNewPasswordForm
                title='Reset User Password'
                description=''
                firstLabel='Enter New Password'
                firstPlaceholder='Enter New Password'
                secondLabel='Confirm New Password'
                secondPlaceholder='Re - Enter Password'
              />
            </SignInCard>
          </div>
        </div>
      )}

      <section className={`${styles['report--items']}`}>
        {users.map((record: UserData, index: number) => (
          <UsersReport
            key={index}
            {...record}
            onSelectUser={() => {}}
            onShowResetUserPassword={() => {
              setShowResetUserPassword(true);
            }}
          />
        ))}
      </section>
    </>
  );
}
