'use client';

import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import headerNavLinks from '@/constants/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import getScrollTop from '@/utils/getScrollTop';

export default function Header() {
  const intervalId = useRef(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      if (!logoRef.current || !navRef.current || !navContainerRef.current)
        return;

      const scrollTop = getScrollTop();
      console.log(scrollTop);
      if (Math.abs(lastScrollTop.current - scrollTop) <= 5) return;

      let navTranslateX = `${Math.min((scrollTop * 2) / 95, 2)}rem`;
      let logoScale = Math.max(1 - (scrollTop * 11) / 1840, 0.45);
      let logoTranslateX = `${Math.max((scrollTop * -3) / 184 + 0, -1.5)}rem`;
      let logoTranslateY = `${Math.max((scrollTop * -11) / 184 + 0, -5.5)}rem`;
      let navContainerTranslateY = '0';

      if (scrollTop <= 10) {
        navTranslateX = '0';
        logoScale = 1;
        logoTranslateX = '0';
        logoTranslateY = '0';
      }

      // if (scrollTop > lastScrollTop.current + 5 && scrollTop > 200) {
      //   navContainerTranslateY = '-100%';
      //   lastScrollTop.current = scrollTop;
      // } else if (scrollTop < lastScrollTop.current + 5) {
      //   navContainerTranslateY = '0';
      //   lastScrollTop.current = scrollTop;
      // }

      logoRef.current.style.transform = `scale(${logoScale}) translate(${logoTranslateX}, ${logoTranslateY})`;
      navRef.current.style.transform = `translateX(${navTranslateX})`;
      navContainerRef.current.style.transform = `translateY(${navContainerTranslateY})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="mt-7 space-y-1">
        <CustomLink href="/" className="group flex w-fit items-baseline">
          <Image
            src="/images/icon.png"
            alt="FoxRain Logo"
            width={48}
            height={48}
            quality={100}
            priority={true}
            className="fixed z-[1000]"
            ref={logoRef}
          />
          <div className="ml-11 mt-[1.7rem] text-3xl font-bold">
            {siteMetadata.headerTitle}
          </div>
          <small className="fon-bold text-sm text-gray-300 transition-colors group-hover:text-primary">
            devlog
          </small>
        </CustomLink>
      </header>
      <div
        className="sticky top-0 z-[999] mb-7 flex h-8 items-center justify-between backdrop-blur-sm"
        ref={navContainerRef}
      >
        <nav className="flex gap-2 font-semibold text-gray-300" ref={navRef}>
          {headerNavLinks
            .filter((link) => link.title !== 'Home')
            .map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                className="transition-colors hover:text-gray-400"
              >
                {link.title}
              </CustomLink>
            ))}
        </nav>
        <ThemeSwitch />
      </div>
    </>
  );
}
