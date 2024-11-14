'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/general.module.scss';
import { manropeBold } from '@/styles/fonts';

import Dashboard from '@/../public/icons/dashboard-nav/dashboard.png';
import AccountSettings from '@/../public/icons/dashboard-nav/account-settings.png';
import TeamManagement from '@/../public/icons/dashboard-nav/team-management.png';
import SetupConfig from '@/../public/icons/dashboard-nav/setup-config.png';
import Report from '@/../public/icons/dashboard-nav/report.png';
import Subscriptions from '@/../public/icons/dashboard-nav/subscriptions.png';
import Logo from '@/../public/icons/tethsecure.svg';
import DashboardMobileNav from './DashboardMobileNav';
import DropDownMenu from './DropDownMenu';

import DotIcon from '@/../public/icons/dashboard-nav/Ellipse 1.png';

import { Option } from './DropDownMenu';

type NavOptionsType = {
  link: string;
  text: string;
  linkIcon: StaticImageData;
};

export const navOptions: NavOptionsType[] = [
  {
    link: '/dashboard',
    text: 'Dashboard',
    linkIcon: Dashboard,
  },
  {
    link: '/report',
    text: 'Report',
    linkIcon: Report,
  },
  {
    link: '/subscriptions',
    text: 'Subscriptions',
    linkIcon: Subscriptions,
  },
  {
    link: '/team-management',
    text: 'Team Management',
    linkIcon: TeamManagement,
  },
];

const configJSX = (linkTo: string, title: string) => {
  return (
    <Link className='flex justify-between' href={linkTo}>
      <Image
        src={DotIcon}
        alt='dot icon'
        style={{
          objectFit: 'contain',
        }}
      />
      <p className={manropeBold.className}>{title}</p>
    </Link>
  );
};

export const configOptions: Option[] = [
  {
    label: configJSX('/setup-configuration/manage-users', 'Manage Users'),
    value: '/manage-users',
  },
  {
    label: configJSX('/setup-configuration/api-credentials', 'Api Credentials'),
    value: '/manage-roles',
  },
  {
    label: configJSX(
      '/setup-configuration/otp-configuration',
      'OTP Configuration'
    ),
    value: '/otp-configuration',
  },
  {
    label: configJSX(
      '/setup-configuration/webhook-integration',
      'Webhook Integration'
    ),
    value: '/webhook-integration',
  },
];

function DashboardNav() {
  const pathname = usePathname();

  const basePath = `/${pathname.split('/')[1]}`;
  const configPath = `${basePath}/${pathname.split('/')[2]}`;

  const configJSX = (linkTo: string, title: string) => {
    return (
      <Link
        className={`flex justify-between ${
          configPath === linkTo ? styles['active'] : ''
        }`}
        href={linkTo}
      >
        <Image
          src={DotIcon}
          alt='dot icon'
          style={{
            objectFit: 'contain',
          }}
        />
        <p className={manropeBold.className}>{title}</p>
      </Link>
    );
  };

  const configDashboardOptions: Option[] = [
    {
      label: configJSX('/setup-configuration/manage-users', 'Manage Users'),
      value: '/manage-users',
    },
    {
      label: configJSX(
        '/setup-configuration/app-credentials',
        'App Credentials'
      ),
      value: '/app-credentials',
    },
    {
      label: configJSX(
        '/setup-configuration/otp-configuration',
        'OTP Configuration'
      ),
      value: '/otp-configuration',
    },
    {
      label: configJSX(
        '/setup-configuration/webhook-integration',
        'Webhook Integration'
      ),
      value: '/webhook-integration',
    },
  ];

  return (
    <section>
      <nav className={`hidden md:block ${styles['dashboard--nav__container']}`}>
        <div className={styles['dashboard--top__container']}>
          <div className='pt-6 pb-10 px-6'>
            <Image src={Logo} alt='TethSecure Logo' priority />
          </div>
          <ul>
            {navOptions.map((option, index) => (
              <Link key={index} href={option.link}>
                <li
                  className={`${
                    basePath === option.link ? styles['active'] : ''
                  } ${styles['first--level__nav']}`}
                >
                  <Image
                    src={option.linkIcon}
                    alt={option.text}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                  <p className={manropeBold.className}>{option.text}</p>
                </li>
              </Link>
            ))}
            <div
              className={`${
                basePath === '/setup-configuration' ? styles['active'] : ''
              } ${styles['config--li']}`}
            >
              <DropDownMenu
                options={configDashboardOptions}
                onChange={() => {
                  // Make the selected option active
                }}
                placeholder={
                  <li className={`flex w-full justify-between`}>
                    <Image
                      src={SetupConfig}
                      alt='setup configuration'
                      className={styles['config--image']}
                    />
                    <p
                      className={`${styles['config--text']} ${manropeBold.className}`}
                    >
                      Configuration
                    </p>
                  </li>
                }
                isANavLink
                shouldNotSetState
              />
            </div>

            <Link href={'/account-settings'}>
              <li
                className={`${
                  basePath === '/account-settings' ? styles['active'] : ''
                } ${styles['first--level__nav']}`}
              >
                <Image src={AccountSettings} alt='account settings' />
                <p className={manropeBold.className}>Account Settings</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <nav
        className={`flex md:hidden ${styles['dashboard--mobile__nav__container']}`}
      >
        <DashboardMobileNav />
      </nav>
    </section>
  );
}

export default DashboardNav;
