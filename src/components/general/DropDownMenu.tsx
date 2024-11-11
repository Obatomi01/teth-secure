import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/general.module.scss';

import { manropeMedium } from '@/styles/fonts';
import DropdownMenu from '@/../public/icons/dropdown-menu.png';

/**
 * Represents the props for the custom dropdown component.
 */
export type Option = { label: React.ReactElement; value: string };

type Props = {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: React.ReactElement;
  shouldNotSetState?: boolean;
};

const DropDownMenu = ({
  options,
  onChange,
  placeholder = (
    <p className={manropeMedium.className}>Select another option</p>
  ),
  shouldNotSetState,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleSelect = (option: Option) => {
    if (shouldNotSetState) {
      setIsOpen(false);
      return;
    }
    setSelected(option.label);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className={styles['dropdown']} onClick={() => setIsOpen(!isOpen)}>
      <div className={`flex ${styles['dropdown-select']}`}>
        {selected}
        <Image src={DropdownMenu} alt='dropdown-menu' />
      </div>

      {isOpen && (
        <div className={styles['dropdown-menu']}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles['dropdown-option']}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
