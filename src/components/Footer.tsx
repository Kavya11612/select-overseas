import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { contactInfo } from '@/data';

const FOOTER_BG =
  'https://selectoverseaseducation.com/wp-content/uploads/2025/09/Footer01-scaled.webp';

const visaServices = [
  { label: 'UK Visitor Visa', href: '/services/uk-visitor-visa' },
  { label: 'UK Health care professionals Visa', href: '/services/uk-health-care-professionals-visa' },
  { label: 'Student Visa', href: '/services/student-visa' },
  { label: 'Dependant Visa', href: '/services/dependent-visa' },
  { label: 'Business Visa', href: '/services/business-visa' },
];

const quickLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Anti-Fraud Policy', href: '/anti-fraud-policy' },
  { label: 'Return, Refund & Cancellation Policy.', href: '/refund-returns' },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/selectoverseaseducation',
    Icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/selectoverseaseducation/',
    Icon: Instagram,
  },
  {
    label: 'X',
    href: 'https://x.com/selectoverseas',
    Icon: XIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@selectoverseaseducation',
    Icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#0a2540] text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${FOOTER_BG}')` }}
    >
      <div className="absolute inset-0 bg-[#0a2540]/55" />

      <div className="container relative py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Column 1 */}
          <div className="lg:border-r lg:border-white/20 lg:pr-8">
            <p className="text-[15px] leading-relaxed text-white">
              Select Overseas Education is committed to helping students achieve international
              academic success through trusted counselling, transparent guidance, and world-class
              support services.
            </p>
            <h4 className="mt-8 text-lg font-bold text-white">Office Location</h4>
            <p className="mt-3 text-[15px] leading-relaxed text-white">
              Office:
              <br />
              1 St Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad -500081
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-md bg-[#f39200] text-white transition hover:bg-[#d97d00]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:border-r lg:border-white/20 lg:px-8">
            <h4 className="text-lg font-bold text-white">Visa services</h4>
            <ul className="mt-5 space-y-3">
              {visaServices.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[15px] text-white transition hover:text-[#f39200]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:border-r lg:border-white/20 lg:px-8">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[15px] text-white transition hover:text-[#f39200]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold text-white">Contact Us Anytime</h4>
            <ul className="mt-5 space-y-5 text-[15px] text-white">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.75] text-[#f39200]" />
                <div className="space-y-1">
                  <a href="tel:04066333443" className="block transition hover:text-[#f39200]">
                    040-66333443
                  </a>
                  <a href="tel:+917032037375" className="block transition hover:text-[#f39200]">
                    +91 7032037375 +91 78935 37375
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.75] text-[#f39200]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition hover:text-[#f39200]"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.75] text-[#f39200]" />
                <span>
                  Mon–Sat:
                  <br />
                  8.00am – 06.00pm
                  <br />
                  Holiday : Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="relative border-t border-white/25 bg-[#061a2e]/95">
        <div className="container py-5 text-center">
          <p className="text-sm font-medium text-white sm:text-[15px]">
            Copyright © {new Date().getFullYear()} selectoverseaseducation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
