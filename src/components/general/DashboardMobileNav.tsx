import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import styles from '@/styles/general.module.scss';
import Logo from '@/../public/icons/tethsecure.svg';
import Menu from '@/../public/icons/menu.png';
import Close from '@/../public/icons/close.png';

import { navOptions, configOptions } from './DashboardNav';
import SignOut from '@/../public/icons/logout.png';
import { signOutHandler } from '@/app/action';

import SetupConfig from '@/../public/icons/dashboard-nav/setup-config.png';
import AccountSettings from '@/../public/icons/dashboard-nav/account-settings.png';

import DropDownMenu from './DropDownMenu';

import { manropeBold } from '@/styles/fonts';

export default function DashboardMobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const basePath = `/${pathname.split('/')[1]}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <section>
      <div className='w-full flex content-center justify-between'>
        <Link
          href={'/dashboard'}
          onClick={() => setIsMenuOpen(false)}
          className='flex'
        >
          <Image src={Logo} alt='Logo' />
        </Link>

        <div className={styles['menu--btn__container']} onClick={toggleMenu}>
          <Image alt='Menu' src={Menu} />
        </div>
      </div>

      <div
        className={`${isMenuOpen ? styles['open'] : ''} ${
          styles['menu--container']
        } pt-8`}
      >
        <div className={`mb-8 ${styles['menu--top__container']}`}>
          <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
            <Image src={Logo} alt='Logo' />
          </Link>
          <div className={styles['close--btn__container']} onClick={toggleMenu}>
            <Image alt='Close' src={Close} />
          </div>
        </div>

        <ul className='flex flex-col gap-8'>
          {navOptions.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.link}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className={basePath === navLink.link ? styles['active'] : ''}>
                <Image
                  src={navLink.linkIcon}
                  alt={navLink.text}
                  style={{
                    objectFit: 'contain',
                  }}
                />
                <p className={`text-base ${manropeBold.className}`}>
                  {navLink.text}
                </p>
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

          <li
            style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={async () => {
              setIsMenuOpen(false);
              await signOutHandler();

              router.push('/sign-in');
            }}
          >
            <Image src={SignOut} alt='sign-out' />
            <p className={`text-base ${manropeBold.className}`}>Logout</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
