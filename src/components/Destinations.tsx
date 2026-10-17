import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { destinations } from '@/data';
import SplitHeading from '@/components/SplitHeading';

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="wow fadeInUp text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Study Destinations
          </p>
          <SplitHeading className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl lg:text-[2.75rem]">
            Study Abroad With Leading Global Universities
          </SplitHeading>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <article
              key={d.name}
              className="wow zoomIn group flex flex-col overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl"
              data-wow-delay={`${i * 120}ms`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <span className="text-2xl">{d.flag}</span>
                  <h3 className="text-lg font-bold">{d.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-neutral-600">{d.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-medium text-neutral-800">
                      <MapPin className="h-3.5 w-3.5 text-primary-600" /> {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={d.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600"
                >
                  Learn More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
