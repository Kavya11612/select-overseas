import {
  Globe2,
  Headphones,
  UserCheck,
  Route,
  Handshake,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { whyChooseUs } from '@/data';
import SplitHeading from '@/components/SplitHeading';

const icons: Record<string, LucideIcon> = {
  Globe2,
  Headphones,
  UserCheck,
  Route,
  Handshake,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-neutral-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="wow fadeInUp text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Why Choose Us
          </p>
          <SplitHeading className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl">
            Gateway To Global Opportunities
          </SplitHeading>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon] ?? Globe2;
            return (
              <article
                key={item.title}
                className="wow fadeInUp rounded-2xl bg-white p-7 shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-lg"
                data-wow-delay={`${i * 100}ms`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
