import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-trigger animations like the official site (WOW.js + Animate.css).
 * Observes `.reveal` and `.wow` elements; adds `is-visible` / `animated`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal, .wow'));

    if (els.length === 0) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => {
        el.classList.add('is-visible', 'animated');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delayAttr = el.getAttribute('data-wow-delay') || el.style.transitionDelay || '';
          const delayMs = parseDelay(delayAttr);

          window.setTimeout(() => {
            el.classList.add('is-visible', 'animated');
          }, delayMs);

          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

function parseDelay(value: string): number {
  if (!value) return 0;
  const trimmed = value.trim();
  if (trimmed.endsWith('ms')) return parseFloat(trimmed) || 0;
  if (trimmed.endsWith('s')) return (parseFloat(trimmed) || 0) * 1000;
  const n = parseFloat(trimmed);
  return Number.isFinite(n) ? n : 0;
}

/** Tracks the active section id while scrolling for nav highlighting. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.2, 0.5], rootMargin: '-80px 0px -50% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join(',')]);

  return active;
}
