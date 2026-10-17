import { Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '@/data';

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-[#00305c] text-white sm:block">
      <div className="container flex h-10 items-center justify-between gap-4 text-xs font-medium">
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-1.5 text-white/85 transition hover:text-accent-300"
          >
            <Mail className="h-3.5 w-3.5 text-accent-400" />
            {contactInfo.email}
          </a>
          <span className="inline-flex items-center gap-1.5 text-white/85">
            <MapPin className="h-3.5 w-3.5 text-accent-400" />
            Madhapur, Hyderabad
          </span>
        </div>
        <a
          href="tel:+917893537375"
          className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-accent-300"
        >
          <Phone className="h-3.5 w-3.5 text-accent-400" />
          +91 78935 37375
        </a>
      </div>
    </div>
  );
}
