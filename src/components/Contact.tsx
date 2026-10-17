import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { contactInfo } from '@/data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: 'Canada',
    service: 'Student Visa Application',
    date: '',
    time: '9:00 AM',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        country: 'Canada',
        service: 'Student Visa Application',
        date: '',
        time: '9:00 AM',
        message: '',
      });
    }, 4000);
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  useEffect(() => {
    const onSearch = (event: Event) => {
      const detail = (event as CustomEvent<{ destination: string; field: string; level: string }>)
        .detail;
      if (!detail) return;
      const countryMap: Record<string, string> = {
        'United States': 'USA',
        Canada: 'Canada',
        Australia: 'Australia',
        'United Kingdom': 'UK',
      };
      const country =
        countryMap[detail.destination] ||
        (detail.destination !== 'Any Country' ? detail.destination : 'Canada');
      setSubmitted(false);
      setForm((f) => ({
        ...f,
        country,
        message: `Looking for ${detail.field !== 'All Fields' ? detail.field : 'a program'}${
          detail.level !== 'Any Level' ? ` (${detail.level})` : ''
        }${detail.destination !== 'Any Country' ? ` in ${detail.destination}` : ''}.`,
      }));
    };
    window.addEventListener('hero-search', onSearch);
    return () => window.removeEventListener('hero-search', onSearch);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="wow fadeInLeft">
            <span className="section-label">Contact Us</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl">
              Need Help For Visa? <span className="gradient-text">Contact Us!</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Book an appointment with Select Overseas advisors in Madhapur. Initial counselling is free.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100 transition hover:bg-primary-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Email</p>
                  <p className="text-base font-semibold text-neutral-900">{contactInfo.email}</p>
                </div>
              </a>
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100 transition hover:bg-primary-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Call</p>
                    <p className="text-base font-semibold text-neutral-900">{phone}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Office</p>
                  <p className="text-base font-semibold text-neutral-900">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Hours</p>
                  <p className="text-base font-semibold text-neutral-900">
                    {contactInfo.hours}
                    <br />
                    {contactInfo.holiday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wow fadeInRight" data-wow-delay="150ms">
            <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-neutral-100 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success-50 text-success-500">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-900">Appointment requested!</h3>
                  <p className="mt-2 max-w-sm text-neutral-600">
                    Our team will confirm your slot shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900">Get Appointment</h3>
                  <Field label="Select Country *">
                    <select required value={form.country} onChange={update('country')} className="input">
                      {['Canada', 'USA', 'UK', 'Australia'].map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Select Service *">
                    <select required value={form.service} onChange={update('service')} className="input">
                      {[
                        'Student Visa Application',
                        'Work Visa Application',
                        'Tourist Visa Application',
                      ].map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Name *">
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className="input"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className="input"
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Select Date *">
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={update('date')}
                        className="input"
                      />
                    </Field>
                    <Field label="Select Time *">
                      <select required value={form.time} onChange={update('time')} className="input">
                        {['9:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message (optional)">
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={3}
                      className="input resize-none"
                      placeholder="Any notes for our advisors?"
                    />
                  </Field>
                  <button type="submit" className="btn-accent w-full !py-3.5 text-base">
                    Get Appointment <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: #0f172a;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #004b8d;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(0,75,141,0.14);
        }
        .input::placeholder { color: #94a3b8; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-neutral-700">{label}</span>
      {children}
    </label>
  );
}
