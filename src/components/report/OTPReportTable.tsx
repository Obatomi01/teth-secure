'use client';
import React, { useState } from 'react';

import styles from '@/styles/report.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';
import OTPReport from './OTPReport';
import SearchUser from '../general/SearchUser';

export type OtpRecord = {
  date: string;
  userID: string;
  otpLength: number;
  otpType: string;
  validity: string;
  status: string;
};

export const otpData: OtpRecord[] = [
  {
    date: '2024-03-21 09:15',
    userID: 'user123',
    otpLength: 6,
    otpType: 'Numeric',
    validity: '1 minute',
    status: 'success',
  },
  {
    date: '2024-03-21 10:30',
    userID: 'user456',
    otpLength: 4,
    otpType: 'Alphanumeric',
    validity: '2 minutes',
    status: 'expired',
  },
  {
    date: '2024-03-22 08:45',
    userID: 'user789',
    otpLength: 6,
    otpType: 'Numeric',
    validity: '3 minutes',
    status: 'success',
  },
  {
    date: '2024-03-23 12:10',
    userID: 'user101',
    otpLength: 4,
    otpType: 'Numeric',
    validity: '5 minutes',
    status: 'failed',
  },
  {
    date: '2024-03-23 14:25',
    userID: 'user102',
    otpLength: 8,
    otpType: 'Alphanumeric',
    validity: '1 minute',
    status: 'success',
  },
  {
    date: '2024-03-24 16:40',
    userID: 'user103',
    otpLength: 6,
    otpType: 'Numeric',
    validity: '3 minutes',
    status: 'expired',
  },
  {
    date: '2024-03-25 18:55',
    userID: 'user104',
    otpLength: 4,
    otpType: 'Alphanumeric',
    validity: '2 minutes',
    status: 'failed',
  },
  {
    date: '2024-03-26 08:20',
    userID: 'user105',
    otpLength: 6,
    otpType: 'Numeric',
    validity: '1 minute',
    status: 'success',
  },
  {
    date: '2024-03-26 09:35',
    userID: 'user106',
    otpLength: 8,
    otpType: 'Numeric',
    validity: '5 minutes',
    status: 'expired',
  },
  {
    date: '2024-03-27 07:50',
    userID: 'user107',
    otpLength: 4,
    otpType: 'Alphanumeric',
    validity: '3 minutes',
    status: 'success',
  },
  {
    date: '2024-03-28 06:05',
    userID: 'user108',
    otpLength: 6,
    otpType: 'Numeric',
    validity: '1 minute',
    status: 'failed',
  },
  {
    date: '2024-03-29 11:15',
    userID: 'user109',
    otpLength: 8,
    otpType: 'Alphanumeric',
    validity: '2 minutes',
    status: 'success',
  },
  {
    date: '2024-03-30 13:30',
    userID: 'user110',
    otpLength: 4,
    otpType: 'Numeric',
    validity: '4 minutes',
    status: 'expired',
  },
  {
    date: '2024-04-01 15:45',
    userID: 'user111',
    otpLength: 6,
    otpType: 'Alphanumeric',
    validity: '1 minute',
    status: 'success',
  },
  {
    date: '2024-04-02 17:00',
    userID: 'user112',
    otpLength: 4,
    otpType: 'Numeric',
    validity: '3 minutes',
    status: 'failed',
  },
];

const OtpReportTable: React.FC = () => {
  const [searchUserInput, setSearchUserInput] = useState('');

  // filter the users in the ManageUsersTable component based on the search input value
  const filteredItems =
    searchUserInput === ''
      ? otpData
      : otpData.filter((item) => {
          const searchTerm = searchUserInput.toLowerCase();
          return item.userID.toLowerCase().includes(searchTerm);
        });

  return (
    <>
      <SearchUser
        onChange={(value) => setSearchUserInput(value)}
        placeholder='Search by ID'
      />
      <table className={`${styles['report--table']}`}>
        <thead>
          <tr>
            <th className={manropeBold.className}>Date & Time</th>
            <th className={manropeBold.className}>UserID</th>
            <th className={manropeBold.className}>OTP Length</th>
            <th className={manropeBold.className}>OTP Type</th>
            <th className={manropeBold.className}>Validity</th>
            <th className={manropeBold.className}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((record: OtpRecord, index: number) => (
            <tr key={index}>
              <td className={manropeMedium.className}>{record.date}</td>
              <td className={manropeMedium.className}>{record.userID}</td>
              <td className={manropeMedium.className}>{record.otpLength}</td>
              <td className={manropeMedium.className}>{record.otpType}</td>
              <td className={manropeMedium.className}>{record.validity}</td>
              <td
                style={{
                  display: 'flex',
                }}
              >
                <p
                  className={manropeMedium.className}
                  style={{
                    color:
                      record.status === 'success'
                        ? '#008423'
                        : record.status === 'expired'
                        ? '#EB5757'
                        : '#F94144',
                    backgroundColor:
                      record.status === 'success'
                        ? '#E9FFE1'
                        : record.status === 'expired'
                        ? '#FDEDEC'
                        : '#FFF8F8',
                    width: '108px',
                    textAlign: 'center',
                    paddingBlock: '0.4rem',
                    margin: 'auto',
                    borderRadius: '8px',
                    fontSize: '16px',
                  }}
                >
                  {record.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className={`${styles['report--items']}`}>
        {filteredItems.map((record: OtpRecord, index: number) => (
          <OTPReport key={index} {...record} />
        ))}
      </section>
    </>
  );
};

export default OtpReportTable;
