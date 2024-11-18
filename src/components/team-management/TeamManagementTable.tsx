import styles from '@/styles/report.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import React, { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import ActionIcon from '@/../public/icons/action-icon.png';
import EnterNewPasswordForm from '@/components/reset-password/EnterNewPasswordForm';
import SignInCard from '@/components/general/SignInCard';
import Backdrop from '@/components/general/Backdrop';

import { TeamUserData } from './TeamManagementPage';
import EditRoleForm from './EditRoleForm';
import DeactivateUser from './DeactivateUser';
import MemberReport from './MemberReport';

type Props = {
  users: TeamUserData[] | [];
};

export default function TeamManagementTable({ users }: Props) {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [showResetUserPassword, setShowResetUserPassword] = useState(false);
  const [showEditRole, setShowEditRole] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    role: '',
  });
  const [showDeactivateUser, setShowDeactivateUser] = useState(false);

  const popUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For the options attached to each user
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

    // Prevent body scroll when the reset password modal is open
    if (showResetUserPassword || showEditRole || showDeactivateUser) {
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
  }, [showResetUserPassword, showEditRole, showDeactivateUser]);

  const handleClick = (userID: string) => {
    // Toggle the visibility of content for the clicked item
    setSelectedUser((prev) => (prev === userID ? null : userID));
  };

  return (
    <>
      <table className={`w-full ${styles['report--table']}`}>
        <thead>
          <tr>
            <th className={manropeBold.className}>Name</th>
            <th className={manropeBold.className}>Email Address</th>
            <th className={manropeBold.className}>User Status</th>
            <th className={manropeBold.className}>Role</th>
            <th className={manropeBold.className}>Last Login</th>
            <th className={manropeBold.className}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((record: TeamUserData, index: number) => (
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
                      record.userStatus === 'Active' ? '#008423' : '#F94144',
                    backgroundColor:
                      record.userStatus === 'Active' ? '#E9FFE1' : '#FFF8F8',
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
              <td className={manropeMedium.className}>{record.role}</td>
              <td className={manropeMedium.className}>{record.lastLogin}</td>

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
                      onClick={() => {
                        setShowDeactivateUser(true);
                        setUserDetails({
                          name: record.name,
                          role: record.role,
                        });
                      }}
                    >
                      Deactivate
                    </p>
                    <p
                      className={`${manropeMedium.className}`}
                      style={{
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setShowEditRole(true);
                        setUserDetails({
                          name: record.name,
                          role: record.role,
                        });
                      }}
                    >
                      Edit role
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

      {showEditRole && (
        <div>
          <Backdrop onChange={() => setShowEditRole(false)} />

          <div className={`${styles['reset--user__password']}`}>
            <SignInCard hasBackdrop>
              <EditRoleForm
                userName={userDetails.name}
                userRole={userDetails.role}
              />
            </SignInCard>
          </div>
        </div>
      )}

      {showDeactivateUser && (
        <div>
          <Backdrop onChange={() => setShowDeactivateUser(false)} />

          <div className={`${styles['reset--user__password']}`}>
            <SignInCard hasBackdrop>
              <DeactivateUser
                userName={userDetails.name}
                userRole={userDetails.role}
                onDeactivateUser={() => setShowDeactivateUser(false)}
              />
            </SignInCard>
          </div>
        </div>
      )}

      {showResetUserPassword && (
        <div>
          <Backdrop onChange={() => setShowResetUserPassword(false)} />

          <div className={`${styles['reset--user__password']}`}>
            <SignInCard hasBackdrop>
              <EnterNewPasswordForm
                title='Reset Member Password'
                description=''
                firstLabel='Enter New Password'
                firstPlaceholder='Enter New Password'
                secondLabel='Confirm New Password'
                secondPlaceholder='Re - Enter Password'
                linkTo='/team-management'
                actionAfterSubmit={() => setShowResetUserPassword(false)}
              />
            </SignInCard>
          </div>
        </div>
      )}

      <section className={`${styles['report--items']}`}>
        {users.map((record: TeamUserData, index: number) => (
          <MemberReport
            key={index}
            {...record}
            onSelectUser={() => {}}
            onShowResetUserPassword={() => {
              setShowResetUserPassword(true);
            }}
            onDeactivateUser={(name, role) => {
              setShowDeactivateUser(true);
              setUserDetails({ name, role });
            }}
            onEditRole={(name, role) => {
              setShowEditRole(true);
              setUserDetails({
                name,
                role,
              });
            }}
          />
        ))}
      </section>
    </>
  );
}
