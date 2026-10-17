import { Compass, GraduationCap, Plane, Award, type LucideIcon } from 'lucide-react';
import { services } from '@/data';
import SplitHeading from '@/components/SplitHeading';

const icons: Record<string, LucideIcon> = {
  Compass,
  GraduationCap,
  Plane,
  Award,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="wow fadeInUp text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            How We Work
          </p>
          <SplitHeading className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl lg:text-[2.75rem]">
            Best Overseas Education Consultants in Hyderabad
          </SplitHeading>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Compass;
            return (
              <article
                key={service.title}
                className="wow fadeInUp group rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl"
                data-wow-delay={`${i * 120}ms`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-lg shadow-primary-600/20 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
