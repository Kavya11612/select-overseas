import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  BadgeCheck,
  Award,
  Plane,
  Monitor,
  Briefcase,
  Cpu,
  Globe2,
  Stethoscope,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { heroSlides } from '@/data';

const fields = [
  'All Fields',
  'Computer Science',
  'MBA',
  'Data Science & AI',
  'Medicine',
  'Engineering',
  'Business',
];

const levels = ['Any Level', "Bachelor's", "Master's", 'PhD', 'Diploma'];

const popular: {
  label: string;
  icon: LucideIcon;
  field?: string;
  destination?: string;
  level?: string;
}[] = [
  { label: 'Computer Science', icon: Monitor, field: 'Computer Science' },
  { label: 'MBA', icon: Briefcase, field: 'MBA' },
  { label: 'Data Science & AI', icon: Cpu, field: 'Data Science & AI' },
  { label: 'Europe (Free)', icon: Globe2, destination: 'Europe' },
  { label: 'Medicine', icon: Stethoscope, field: 'Medicine' },
];

/** Real Select Overseas student outcomes — from site testimonials */
const placements: {
  name: string;
  university: string;
  country: string;
  status: string;
  tone: 'navy' | 'orange';
}[] = [
  {
    name: 'Rahul Sharma',
    university: 'University of Toronto',
    country: 'Canada',
    status: 'Visa Approved',
    tone: 'navy',
  },
  {
    name: 'Sneha Reddy',
    university: 'University of Gothenburg',
    country: 'Sweden',
    status: 'Offer Received',
    tone: 'navy',
  },
  {
    name: 'Aishwarya Nair',
    university: 'Dublin City University',
    country: 'Ireland',
    status: 'Scholarship Won',
    tone: 'orange',
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('Any Country');
  const [field, setField] = useState('All Fields');
  const [level, setLevel] = useState('Any Level');
  const [slide, setSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
      setSlideKey((k) => k + 1);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const current = heroSlides[slide];

  const countries = [
    'Any Country',
    'United States',
    'Canada',
    'Australia',
    'United Kingdom',
    'Europe',
    'Ireland',
    'New Zealand',
  ];

  const applyPopular = (item: (typeof popular)[number]) => {
    if (item.field) setField(item.field);
    if (item.destination) setDestination(item.destination);
    if (item.level) setLevel(item.level);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('hero-search', { detail: { destination, field, level } }),
    );
    navigate('/contact');
  };

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#00305c] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#00305c]/58" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,48,92,0.82) 0%, rgba(0,48,92,0.45) 48%, rgba(0,48,92,0.3) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1280px] flex-col justify-center px-5 py-12 sm:min-h-[calc(100svh-8.5rem)] sm:px-8 sm:py-14 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,340px)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <div className="animate-fade-up" style={{ animationDelay: '0.05s', opacity: 0 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/15">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                {current.eyebrow}
              </span>
            </div>

            <div key={slideKey} className="mt-6 min-h-[8.5rem] sm:min-h-[9.5rem] lg:min-h-[11rem]">
              <h1
                className="animate-fade-up font-sans text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem]"
                style={{ animationDelay: '0.08s', opacity: 0 }}
              >
                {current.title}
              </h1>
              <p
                className="mt-4 max-w-xl animate-fade-up text-base leading-relaxed text-white/75 sm:text-lg"
                style={{ animationDelay: '0.18s', opacity: 0 }}
              >
                {current.subtitle}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={heroSlides[i].title}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => {
                    setSlide(i);
                    setSlideKey((k) => k + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide ? 'w-8 bg-accent-400' : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <form
              onSubmit={onSearch}
              className="mt-8 animate-fade-up rounded-2xl bg-white p-4 shadow-2xl shadow-black/20 sm:p-5"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end">
                <FilterSelect
                  label="Destination"
                  value={destination}
                  onChange={setDestination}
                  options={countries}
                />
                <FilterSelect
                  label="Field of study"
                  value={field}
                  onChange={setField}
                  options={fields}
                />
                <FilterSelect
                  label="Degree level"
                  value={level}
                  onChange={setLevel}
                  options={levels}
                />
                <button
                  type="submit"
                  className="inline-flex h-[46px] shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 text-sm font-semibold text-white shadow-md shadow-primary-600/25 transition hover:bg-primary-700 md:mb-px"
                >
                  <Search className="h-4 w-4" /> Search
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                  Popular:
                </span>
                {popular.map((item) => {
                  const Icon = item.icon;
                  const active =
                    (item.field && field === item.field) ||
                    (item.destination && destination === item.destination);
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => applyPopular(item)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition ${
                        active
                          ? 'bg-primary-600 text-white ring-primary-600'
                          : 'bg-neutral-50 text-neutral-700 ring-neutral-200 hover:bg-accent-50 hover:ring-accent-200'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </form>
          </div>

          <aside className="mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end">
            <div
              className="animate-fade-up rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <div className="mb-4 flex items-center justify-between gap-2 px-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">
                    Select success stories
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">Recent student placements</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/15">
                  <ShieldCheck className="h-3 w-3 text-accent-400" />
                  98% visa
                </span>
              </div>

              <ul className="space-y-3">
                {placements.map((p, i) => (
                  <li
                    key={p.name}
                    className="animate-fade-up rounded-xl bg-white p-3.5 shadow-lg shadow-black/10"
                    style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0 }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                          p.tone === 'orange' ? 'bg-accent-500' : 'bg-primary-600'
                        }`}
                      >
                        {p.name
                          .split(' ')
                          .map((w) => w[0])
                          .join('')
                          .slice(0, 2)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-neutral-900">{p.name}</p>
                          <span className="shrink-0 rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600">
                            {p.country}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-neutral-500">{p.university}</p>
                        <p
                          className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${
                            p.tone === 'orange' ? 'text-accent-600' : 'text-primary-600'
                          }`}
                        >
                          {p.status.includes('Scholarship') ? (
                            <Award className="h-3.5 w-3.5" />
                          ) : p.status.includes('Visa') ? (
                            <Plane className="h-3.5 w-3.5" />
                          ) : (
                            <BadgeCheck className="h-3.5 w-3.5" />
                          )}
                          {p.status}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </span>
      <span className="relative block">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-neutral-200 bg-white py-3 pl-3.5 pr-9 text-sm font-medium text-neutral-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      </span>
    </label>
  );
}
