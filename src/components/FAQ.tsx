import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label wow fadeInUp">
            <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="wow fadeInUp mt-5 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl" data-wow-delay="100ms">
            Answers to what people ask
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="wow fadeInUp overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-neutral-100"
                data-wow-delay={`${150 + i * 80}ms`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-neutral-900 sm:text-base">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-100 px-5 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-neutral-600">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
