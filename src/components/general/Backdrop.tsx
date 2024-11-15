import React from 'react';

type Props = {
  onChange: () => void;
};

export default function Backdrop({ onChange }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9,
        cursor: 'pointer',
      }}
      onClick={onChange}
    ></div>
  );
}
