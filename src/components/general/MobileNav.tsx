import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/general.module.scss';
import Logo from '@/../public/icons/tethsecure.svg';
import Menu from '@/../public/icons/menu.png';
import Close from '@/../public/icons/close.png';

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
      <Image alt='Logo' src={Logo} />

      <div className={styles['menu--btn__container']} onClick={toggleMenu}>
        <Image alt='Menu' src={Menu} />
      </div>

      <div
        className={`${isMenuOpen ? styles['open'] : ''} ${
          styles['menu--container']
        } pt-8`}
      >
        <div className={styles['menu--top__container']}>
          <Image src={Logo} alt='Logo' />
          <div className={styles['close--btn__container']} onClick={toggleMenu}>
            <Image alt='Close' src={Close} />
          </div>
        </div>
        {/* Add your menu items here */}
        <nav>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
