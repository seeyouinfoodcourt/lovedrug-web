import Image from 'next/image';
import React from 'react';
import { Logo } from './logo';
import { Button } from './ui/button';
import Icon from './ui/icon';

import { MenuDrawer } from './menu.drawer';

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mx-4 my-4 h-16 fixed top-0 right-0 left-0 z-50">
      <div className="flex flex-1">
        {/* <Logo width={300} /> */}
        <Image
          src="/img/lovedrug-logo-white.png"
          width={300}
          height={60}
          alt="Logo"
        />
      </div>
      <div className="flex-row flex align-middle flex-3 justify-end">
        <Button
          className="mr-4"
          variant={'ghost'}
          size={'icon'}
        >
          <Icon
            name="shopping-bag"
            size={40}
          />
        </Button>
        <MenuDrawer />
      </div>
    </header>
  );
};
