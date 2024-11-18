import React, { useState } from 'react';
import Image from 'next/image';

import ToggleOff from '@/../public/icons/toggle off.png';
import ToggleOn from '@/../public/icons/toggle on.png';

export default function ToggleSwitch() {
  const [isToggledOn, setIsToggledOn] = useState(false);

  const toggleSwitch = () => setIsToggledOn(!isToggledOn);

  return (
    <div
      style={{
        position: 'relative',
        width: '50px',
        height: '24px',
        display: 'flex',
      }}
    >
      {/* Toggle On */}
      <Image
        src={ToggleOn}
        alt='toggle on'
        onClick={toggleSwitch}
        style={{
          position: 'absolute',
          opacity: isToggledOn ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          cursor: 'pointer',
          alignSelf: 'center',
        }}
      />
      {/* Toggle Off */}
      <Image
        src={ToggleOff}
        alt='toggle off'
        onClick={toggleSwitch}
        style={{
          position: 'absolute',
          opacity: isToggledOn ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          cursor: 'pointer',
          alignSelf: 'center',
        }}
      />
    </div>
  );
}
