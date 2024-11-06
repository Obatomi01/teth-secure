import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/general.module.scss';
import Logo from '@/../public/icons/tethsecure.svg';
import Menu from '@/../public/icons/menu.png';
import Close from '@/../public/icons/close.png';

import { navLinks } from './BottomFooter';

import { manropeBold } from '@/styles/fonts';
import BlueBtn from './BlueBtn';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <section className={styles['mobile--nav__container']}>
      <div className='w-full flex content-center justify-between'>
        <Link href={'/'} onClick={() => setIsMenuOpen(false)} className='flex'>
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

        <div className='flex flex-col gap-8'>
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <p className={`text-base ${manropeBold.className}`}>
                {navLink.navText}
              </p>
            </Link>
          ))}
          <Link href={'/contact-us'} onClick={() => setIsMenuOpen(false)}>
            <p className={`text-base ${manropeBold.className}`}>Contact us</p>
          </Link>
          <div onClick={() => setIsMenuOpen(false)}>
            <BlueBtn
              btnText='Sign in'
              hasBlueBackground={false}
              linkTo='/'
              additionalStyles='w-2/4'
            />
          </div>
          <div onClick={() => setIsMenuOpen(false)}>
            <BlueBtn
              btnText='Get Started'
              hasBlueBackground
              linkTo='/'
              additionalStyles='w-2/4'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
