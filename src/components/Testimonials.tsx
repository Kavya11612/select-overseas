import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const go = (dir: number) => setActive((a) => (a + dir + count) % count);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-secondary-300/20 blur-[100px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label wow fadeInUp">
            <Star className="h-3.5 w-3.5" /> Student Stories
          </span>
          <h2 className="wow fadeInUp mt-5 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl lg:text-[2.75rem]" data-wow-delay="100ms">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="wow fadeInUp mt-5 text-lg leading-relaxed text-neutral-600 text-pretty" data-wow-delay="180ms">
            Real feedback from students guided by Select Overseas Education.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="wow zoomIn mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-neutral-100 sm:p-12">
            <Quote className="absolute -right-2 -top-2 h-24 w-24 text-primary-50" />
            <div className="relative">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <blockquote
                key={active}
                className="mt-6 animate-fade-up text-xl leading-relaxed text-neutral-700 text-pretty sm:text-2xl"
                style={{ animationDelay: '0.1s', opacity: 0 }}
              >
                “{testimonials[active].quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <p className="font-bold text-neutral-900">{testimonials[active].name}</p>
                  <p className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <GraduationCap className="h-4 w-4 text-primary-500" />
                    {testimonials[active].university}, {testimonials[active].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-neutral-100 transition-all hover:bg-primary-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-primary-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-neutral-100 transition-all hover:bg-primary-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mini cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="wow fadeInUp rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-wow-delay={`${i * 90}ms`}
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-neutral-900">{t.name}</p>
                  <p className="truncate text-xs text-neutral-500">{t.university}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
