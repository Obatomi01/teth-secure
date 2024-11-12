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

export const configOptions: Option[] = [
  {
    label: (
      <div className='flex justify-between'>
        <Image
          src={DotIcon}
          alt='dot icon'
          style={{
            objectFit: 'contain',
          }}
        />
        <p className={manropeBold.className}>Manage Users</p>
      </div>
    ),
    value: '/manage-users',
  },
  {
    label: (
      <div className='flex justify-between'>
        <Image
          src={DotIcon}
          alt='dot icon'
          style={{
            objectFit: 'contain',
          }}
        />
        <p className={manropeBold.className}>Manage Users</p>
      </div>
    ),
    value: '/manage-roles',
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  const basePath = `/${pathname.split('/')[1]}`;

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
                options={configOptions}
                onChange={() => {
                  // Make the selected option active
                }}
                placeholder={
                  <Link
                    href={'/setup-configuration/manage-users'}
                    className={`flex w-full justify-between`}
                  >
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
                  </Link>
                }
                isANavLink
                shouldNotSetState
              />
            </div>
            <Link href={'/account-settings'}>
              <li>
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
