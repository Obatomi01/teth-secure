'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import stylea from '@/styles/general.module.scss';
import { manropeBold } from '@/styles/fonts';

import Dashboard from '@/../public/icons/dashboard-nav/dashboard.png';
import AccountSettings from '@/../public/icons/dashboard-nav/account-settings.png';
import TeamManagement from '@/../public/icons/dashboard-nav/team-management.png';
import SetupConfig from '@/../public/icons/dashboard-nav/setup-config.png';
import Report from '@/../public/icons/dashboard-nav/report.png';
import Subscriptions from '@/../public/icons/dashboard-nav/subscriptions.png';
import Logo from '@/../public/icons/tethsecure.svg';
import DashboardMobileNav from './DashboardMobileNav';

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
  {
    link: '/setup-configuration',
    text: 'Setup Configuration',
    linkIcon: SetupConfig,
  },
  {
    link: '/account-settings',
    text: 'Account Settings',
    linkIcon: AccountSettings,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  const basePath = `/${pathname.split('/')[1]}`;

  return (
    <section>
      <nav className={`hidden md:block ${stylea['dashboard--nav__container']}`}>
        <div className={stylea['dashboard--top__container']}>
          <div className='p-6'>
            <Image src={Logo} alt='TethSecure Logo' priority />
          </div>
          <ul>
            {navOptions.map((option, index) => (
              <Link key={index} href={option.link}>
                <li
                  className={basePath === option.link ? stylea['active'] : ''}
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
          </ul>
        </div>
      </nav>

      <nav className={`flex md:hidden`}>
        <DashboardMobileNav />
      </nav>
    </section>
  );
}
