import { Link } from 'react-router-dom';
import { Phone, Award } from 'lucide-react';

export default function AgencyBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-14 lg:py-16">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto_1fr]">
          <div className="wow fadeInLeft">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              <Award className="h-4 w-4" /> Hyderabad No. 1 Visa Agency
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Best Overseas Consultants in Hyderabad
            </h2>
            <p className="mt-2 text-sm text-primary-100 sm:text-base">
              6+ countries we serve · Serving students for 20 years
            </p>
          </div>

          <div className="wow fadeIn hidden h-16 w-px bg-white/20 lg:block" />

          <div className="wow fadeInRight flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
            <a
              href="tel:+917893537375"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> +91 78935 37375
            </a>
            <Link to="/contact" className="btn-accent justify-center">
              Call For Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
