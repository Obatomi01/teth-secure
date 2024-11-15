import React from 'react';

import inputStyles from '@/styles/general.module.scss';

type Props = {
  onChange: (value: string) => void;
  placeholder: string;
};

export default function SearchUser({ onChange, placeholder }: Props) {
  return (
    <div className={inputStyles['form--input__container']}>
      <input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
