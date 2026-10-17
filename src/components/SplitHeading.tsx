import { useEffect, useRef } from 'react';

type Props = {
  children: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

/**
 * GSAP-style split-in-rotate: words fade/rotate up when scrolled into view
 * (matches selectoverseaseducation.com heading effect).
 */
export default function SplitHeading({ children, as: Tag = 'h2', className = '' }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('is-split-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-split-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = children.trim().split(/\s+/);

  return (
    <Tag ref={ref} className={`split-heading ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word" style={{ transitionDelay: `${i * 55}ms` }}>
          <span className="split-word-inner">{word}</span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </Tag>
  );
}
