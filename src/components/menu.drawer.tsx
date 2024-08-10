import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from './ui/drawer';
import Icon from './ui/icon';
import Link from 'next/link';

export const MenuDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant={'ghost'}
        >
          <Icon
            name="menu"
            size={40}
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-secondary  top-0 mt-0 ml-[0%] rounded-t-none">
        <DrawerHeader className="flex flex-row-reverse">
          <DrawerClose>
            <Button
              variant={'ghost'}
              className="self-end"
            >
              <Icon
                name="x"
                size={40}
              />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <nav className="flex flex-col align-middle py-4 px-16 justify-center">
          <Link
            className="text-8xl font-black mb-6 sm:mb-0 hover:text-primary"
            href={'/custom'}
          >
            CUSTOM
          </Link>
          <Link
            className="text-8xl font-black mb-4 sm:mb-0"
            href={'/decks'}
          >
            DECKS
          </Link>
          <Link
            className="text-8xl font-black mb-4 sm:mb-0"
            href={'/not-decks'}
          >
            NOT DECKS
          </Link>
          <Link
            className="text-8xl font-black mb-4 sm:mb-0"
            href={'/team'}
          >
            TEAM
          </Link>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};
