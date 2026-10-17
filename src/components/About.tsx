import { CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats, contactInfo } from '@/data';
import SplitHeading from '@/components/SplitHeading';
import StatCounter from '@/components/StatCounter';

const bullets = [
  'Certified Overseas Education Experts',
  'University Partnerships Across Multiple Countries',
  'High Visa Success Rate',
  'Transparent & Student-Centric Guidance',
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="wow fadeInLeft relative" data-wow-delay="100ms">
            <img
              src="https://images.pexels.com/photos/5537996/pexels-photo-5537996.jpeg?auto=compress&cs=tinysrgb&h=800&w=900"
              alt="Students at university campus"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-[#00305c] px-5 py-4 text-white shadow-xl anim-float sm:left-8">
              <p className="text-2xl font-extrabold">20+</p>
              <p className="text-xs font-medium text-white/75">Years serving students</p>
            </div>
          </div>

          <div className="wow fadeInRight" data-wow-delay="200ms">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              About Company
            </p>
            <SplitHeading className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl">
              We Help Turn Your Global Education Dreams Into Reality
            </SplitHeading>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              At Select Overseas Education, we believe every student deserves access to world-class
              education opportunities. Our experienced counsellors provide transparent, ethical, and
              personalized guidance for studying abroad. Whether you aspire to study in the USA, Canada,
              UK, Australia, or Europe, we simplify the entire journey—from university selection to visa
              approval and pre-departure support.
            </p>

            <ul className="mt-7 space-y-3">
              {bullets.map((item, i) => (
                <li
                  key={item}
                  className="wow fadeInUp flex items-start gap-2.5 text-sm font-medium text-neutral-800"
                  data-wow-delay={`${250 + i * 80}ms`}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <a
                href="tel:+917893537375"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700"
              >
                <Phone className="h-4 w-4" /> Have questions? {contactInfo.phones[0]}
              </a>
            </div>
          </div>
        </div>

        <div className="wow fadeInUp mt-20 grid grid-cols-2 gap-6 rounded-3xl bg-neutral-950 p-10 text-center lg:grid-cols-4 lg:p-14">
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              numeric={s.numeric}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
