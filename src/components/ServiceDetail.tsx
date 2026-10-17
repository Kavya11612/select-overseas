import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { getServicePage, servicePages } from '@/data/servicePages';
import { getStudyAbroadPage } from '@/data/studyAbroadPages';
import { getServiceDetailContent } from '@/data/serviceDetailContent';

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const page = getServicePage(slug);
  const study = getStudyAbroadPage(slug);
  const detail = getServiceDetailContent(slug);

  const summary = detail?.summary ?? study?.summary ?? page?.summary ?? '';
  const paragraphs = detail?.paragraphs ?? [];
  const sections = detail?.sections ?? study?.sections ?? [];

  useEffect(() => {
    document.title = page
      ? `${page.title} | Select Overseas Education`
      : 'Service | Select Overseas Education';
  }, [page]);

  if (!page) {
    return (
      <main className="flex flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">Page not found</h1>
        <p className="mt-3 max-w-md text-neutral-600">
          This service page is not available. Choose another option from the menu.
        </p>
        <Link to="/services" className="btn-accent mt-8">
          Back to Services
        </Link>
      </main>
    );
  }

  const related = servicePages
    .filter((p) => p.category === page.category && p.slug !== page.slug)
    .slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden bg-[#00305c] text-white">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(243,146,0,0.2), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(0,75,141,0.8), transparent 55%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="container relative py-14 md:py-20">
          <p className="wow fadeInDown text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            {page.category} · {study?.eyebrow ?? page.eyebrow}
          </p>
          <h1 className="wow fadeInUp mt-4 max-w-3xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl" data-wow-delay="120ms">
            {page.title}
          </h1>
          <p className="wow fadeInUp mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg" data-wow-delay="220ms">
            {summary}
          </p>
          <div className="wow fadeInUp mt-8 flex flex-wrap gap-3" data-wow-delay="320ms">
            <Link to="/contact" className="btn-accent">
              {study?.cta ?? page.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-12">
            {paragraphs.length > 0 && (
              <div className="wow fadeInUp space-y-4">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="text-base leading-relaxed text-neutral-600">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {sections.map((section, si) => (
              <div key={section.heading} className="wow fadeInUp" data-wow-delay={`${si * 80}ms`}>
                <h2 className="font-display text-2xl font-semibold text-[#00305c] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.intro && (
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">{section.intro}</p>
                )}
                {section.items.length > 0 && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100"
                      >
                        <h3 className="text-base font-bold text-[#00305c]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                      </article>
                    ))}
                  </div>
                )}
                {section.notes && section.notes.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {section.notes.map((n) => (
                      <p key={n.slice(0, 48)} className="text-base leading-relaxed text-neutral-600">
                        {n}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {sections.length === 0 && paragraphs.length === 0 && (
              <p className="text-base leading-relaxed text-neutral-600">{page.summary}</p>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-primary-600 p-7 text-white shadow-xl shadow-primary-600/20">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                Free consultation
              </p>
              <h3 className="mt-3 text-xl font-bold">Ready to take the next step?</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-100">
                Call or visit our Madhapur office. Initial counselling is free — clear next steps, no
                pressure.
              </p>
              <a href="tel:+917893537375" className="btn-accent mt-6 w-full !bg-accent-500">
                <Phone className="h-4 w-4" /> +91 78935 37375
              </a>
              <Link
                to="/contact"
                className="mt-3 flex w-full justify-center text-sm font-semibold text-white/90 underline-offset-2 hover:underline"
              >
                Or book online →
              </Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-100">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  More in {page.category}
                </p>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/services/${r.slug}`}
                        className="block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700 transition hover:bg-white hover:text-primary-700 hover:shadow-sm"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
