import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { contactInfo, navLinks } from '@/data';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Anti-Fraud Policy', href: '#' },
  { label: 'Return, Refund & Cancellation Policy', href: '#' },
];

export default function Footer() {
  const visaServices =
    navLinks.find((l) => l.label === 'Services')?.children?.slice(0, 5) ?? [];

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-300">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo className="rounded-xl bg-white px-2.5 py-1.5" />
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Select Overseas Education is committed to helping students achieve international academic
              success through trusted counselling, transparent guidance, and world-class support
              services.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: Instagram,
                  href: 'https://www.instagram.com/selectoverseaseducation/',
                  label: 'Instagram',
                },
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/company/select-overseas-education',
                  label: 'LinkedIn',
                },
                {
                  Icon: Facebook,
                  href: 'https://www.facebook.com/selectoverseaseducation',
                  label: 'Facebook',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-neutral-300 ring-1 ring-white/10 transition hover:bg-primary-600 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Office Location</h4>
            <p className="mt-5 flex items-start gap-3 text-sm text-neutral-400">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
              {contactInfo.address}
            </p>
            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Visa Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {visaServices.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-neutral-400 hover:text-primary-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-neutral-400 hover:text-primary-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us Anytime
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {contactInfo.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-neutral-400 hover:text-primary-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 break-all text-neutral-400 hover:text-primary-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>
                  {contactInfo.hours}
                  <br />
                  {contactInfo.holiday}
                </span>
              </li>
            </ul>
            <Link to="/contact" className="btn-accent mt-6">
              Book Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-neutral-500">
          Copyright © {new Date().getFullYear()} selectoverseaseducation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
