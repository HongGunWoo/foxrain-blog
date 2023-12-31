'use client';

import CustomLink from '@/components/CustomLink';
import getScrollTop from '@/utils/getScrollTop';
import type { Toc } from 'pliny/mdx-plugins/remark-toc-headings.js';
import { useCallback, useEffect, useState } from 'react';

interface TocSideProps {
  toc: Toc;
}

const depthStyles: Record<number, string> = {
  1: 'pl-0',
  2: 'pl-2',
  3: 'pl-4',
  4: 'pl-6',
};

export default function TocSide({ toc }: TocSideProps) {
  const [activeToc, setActiveToc] = useState('');

  const getActiveToc = useCallback(() => {
    const scrollTop = getScrollTop();
    const headingTops = toc.map(({ value, url }) => {
      const element = document.getElementById(url.slice(1));
      const top = element ? element.getBoundingClientRect().top + scrollTop : 0;
      return { value, top };
    });
    if (!headingTops) return;
    const currentHeading = headingTops
      .slice()
      .reverse()
      .find((headingTop) => scrollTop >= headingTop.top - 10);

    setActiveToc(currentHeading ? currentHeading.value : '');
  }, [toc]);

  useEffect(() => {
    getActiveToc();
    const onScroll = () => {
      getActiveToc();
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [getActiveToc]);

  return (
    <div className="not-prose relative">
      <nav className="absolute left-full hidden lg:block">
        <ul className="fixed ml-9 space-y-1 border-l-2 py-1 pl-2">
          {toc.map((t) => (
            <li
              key={t.url}
              className={`transition-all ${
                t.value === activeToc
                  ? 'text-[0.7rem] font-semibold text-primary'
                  : 'text-[0.65rem] text-gray-300'
              } ${depthStyles[t.depth]}`}
            >
              <CustomLink href={t.url}>{t.value}</CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
