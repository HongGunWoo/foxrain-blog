'use client';

import CustomLink from '@/components/CustomLink';
import getScrollTop from '@/utils/getScrollTop';
import type { Toc } from 'pliny/mdx-plugins/remark-toc-headings.js';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [fixedToc, setFixedToc] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

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
      .find((headingTop) => scrollTop >= headingTop.top - 25);

    setActiveToc(currentHeading ? currentHeading.value : '');

    if (!tocRef.current) return;

    if (tocRef.current.getBoundingClientRect().top <= 80) {
      setFixedToc(true);
    } else {
      setFixedToc(false);
    }
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
    <div ref={tocRef} className="not-prose relative">
      <nav className="absolute left-full hidden lg:block">
        <ul
          className={`ml-12 w-60 space-y-1 border-l-2 py-1 pl-2 ${
            fixedToc && 'fixed top-20'
          }`}
        >
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
