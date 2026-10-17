import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPolicyPage } from '@/data/policyPages';

export default function PolicyPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '');
  const page = getPolicyPage(slug);

  useEffect(() => {
    document.title = page
      ? `${page.title} | Select Overseas Education`
      : 'Policy | Select Overseas Education';
  }, [page]);

  if (!page) {
    return (
      <main className="flex flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">Page not found</h1>
        <Link to="/" className="btn-accent mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </main>
    );
  }

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
        <div className="container relative py-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            Legal
          </p>
          <h1 className="mt-4 max-w-3xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {page.title}
          </h1>
          {page.effectiveDate && (
            <p className="mt-4 text-sm font-medium text-white/70">
              Effective Date: {page.effectiveDate}
            </p>
          )}
        </div>
      </header>

      <section className="container py-12 md:py-16">
        <article className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4">
            {page.intro.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-neutral-600">
                {p}
              </p>
            ))}
          </div>

          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-[#00305c] sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-base leading-relaxed text-neutral-600">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-600">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="border-t border-neutral-100 pt-8">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
