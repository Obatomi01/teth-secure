import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/general.module.scss';
import { manropeMedium, manropeBold } from '@/styles/fonts';

import logo from '@/../public/icons/tethsecure.svg';
import Facebook from '@/../public/icons/logo-facebook.png';
import Twitter from '@/../public/icons/logo-twitter.png';
import LinkedIn from '@/../public/icons/logo-linkedin.png';
import Instagram from '@/../public/icons/logo-instagram.png';

type Props = {};

interface SocialType {
  socialLink: string;
  socialLogo: any;
}

interface NavLinkType {
  navLink: string;
  navText: string;
}

const socials: SocialType[] = [
  {
    socialLink: '/',
    socialLogo: Facebook,
  },
  {
    socialLink: '/',
    socialLogo: Twitter,
  },
  {
    socialLink: '/',
    socialLogo: LinkedIn,
  },
  {
    socialLink: '/',
    socialLogo: Instagram,
  },
];

const navLinks: NavLinkType[] = [
  {
    navLink: '/',
    navText: 'Company',
  },
  {
    navLink: '/',
    navText: 'Product',
  },
  {
    navLink: '/',
    navText: 'Services',
  },
  {
    navLink: '/',
    navText: 'About us',
  },
];

export default function BottomFooter({}: Props) {
  return (
    <section className={styles['bottom--footer__container']}>
      <div className={styles['bottom--footer__content']}>
        <div className={styles['bottom--footer__content--left']}>
          <Image src={logo} alt='logo' />
          <p className={`w-full text-base ${manropeMedium.className} md:w-4/5`}>
            We offer a comprehensive suite of multi-factor authentication (MFA)
            solutions designed to safeguard your valuable data and systems.
          </p>
        </div>

        <div className={styles['bottom--footer__content--right']}>
          <div className={styles['bottom--footer__content--right--top']}>
            {navLinks.map((el: NavLinkType) => (
              <Link href={el.navLink}>
                <h3
                  className={`text-base ${manropeMedium.className} text-color-primary`}
                >
                  {el.navText}
                </h3>
              </Link>
            ))}
          </div>

          <div className={styles['bottom--footer__content--right--bottom']}>
            {socials.map((el: SocialType) => (
              <Link href={el.socialLink}>
                <Image src={el.socialLogo} alt='social' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
