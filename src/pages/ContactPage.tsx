import { useEffect } from 'react';
import Contact from '@/components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Free Consultation | Select Overseas Education';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <main>
      <header className="relative overflow-hidden bg-[#00305c] text-white">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(243,146,0,0.2), transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="container relative py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            Book a free session
          </p>
          <h1 className="mt-3 max-w-3xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Free Consultation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Talk to Select Overseas advisors in Madhapur — clear next steps for study, work, and visa
            planning. Initial counselling is free.
          </p>
        </div>
      </header>
      <Contact />
    </main>
  );
}
