'use client';

import headerNavLinks from '@/constants/headerNavLinks';
import { useCallback, useState } from 'react';
import CustomLink from './CustomLink';
import { IconClose, IconMenuAlt } from 'public/svgs';

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  const onToggleNav = useCallback(() => {
    if (navOpen) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }

    setNavOpen((prevNavOpen) => !prevNavOpen);
  }, [navOpen]);

  return (
    <>
      <button className="sm:hidden" onClick={onToggleNav}>
        <IconMenuAlt className="h-8 w-8 stroke-black" />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 flex h-full w-full transform flex-col bg-white px-4 opacity-90 duration-300 ease-in-out
        ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button onClick={onToggleNav} className="self-end">
          <IconClose className="h-8 w-8 stroke-black" />
        </button>
        <nav className="m-10 flex flex-col gap-5">
          {headerNavLinks.map((link) => (
            <CustomLink href={link.href} key={link.title} onClick={onToggleNav}>
              {link.title}
            </CustomLink>
          ))}
        </nav>
      </div>
    </>
  );
}
