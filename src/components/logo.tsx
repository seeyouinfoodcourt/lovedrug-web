import Image from 'next/image';
import React from 'react';

type LogoProps = {
  width: number;
};

export const Logo = ({ width }: LogoProps) => {
  return (
    <div
      style={{
        width: width,
        height: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Image
        src={'/img/lovedrug-logo-white.png'}
        style={{
          objectFit: 'contain',
          alignSelf: 'flex-start',
          alignItems: 'flex-start',
        }}
        sizes="300px"
        fill={true}
        alt="Lovedrug Logo"
      />
    </div>
  );
};
