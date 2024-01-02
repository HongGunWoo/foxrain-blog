'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function Giscus() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, theme } = useTheme();

  const giscusTheme =
    resolvedTheme === 'dark' || theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!sectionRef.current) return;

    if (sectionRef.current.hasChildNodes()) {
      const iframe = document.querySelector<HTMLIFrameElement>(
        'iframe.giscus-frame',
      );

      iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: giscusTheme } } },
        'https://giscus.app',
      );
      return;
    }

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';

    scriptEl.setAttribute('data-repo', 'HongGunWoo/foxrain-blog');
    scriptEl.setAttribute('data-repo-id', 'R_kgDOKwSXZw');
    scriptEl.setAttribute('data-category', 'Post Comments');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOKwSXZ84CcI9_');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'bottom');
    scriptEl.setAttribute('data-theme', giscusTheme);
    scriptEl.setAttribute('data-lang', 'ko');
    scriptEl.setAttribute('data-loading', 'lazy');

    sectionRef.current.appendChild(scriptEl);
  }, [giscusTheme]);

  return <section ref={sectionRef} className="mt-10" />;
}
