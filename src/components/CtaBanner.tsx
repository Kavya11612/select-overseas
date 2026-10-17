import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-500/40 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/30 blur-[100px]" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="wow fadeInUp font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
            Ready to Start Your{' '}
            <span className="text-accent-300">International Education</span> Journey?
          </h2>
          <p className="wow fadeInUp mt-5 text-lg leading-relaxed text-primary-100 text-pretty" data-wow-delay="150ms">
            Book a free consultation with our experts and discover the best opportunities for your
            academic future.
          </p>
          <Link to="/contact" className="btn-accent mt-8 !text-base">
            Schedule Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
