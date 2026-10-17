import {
  UserPlus,
  ClipboardCheck,
  Search,
  FileText,
  Landmark,
  PlaneTakeoff,
  type LucideIcon,
} from 'lucide-react';
import { steps } from '@/data';

const icons: Record<string, LucideIcon> = {
  UserPlus,
  ClipboardCheck,
  Search,
  FileText,
  Landmark,
  PlaneTakeoff,
};

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 lg:py-32">
      <div className="container relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">
            <ClipboardCheck className="h-3.5 w-3.5" /> Your Journey
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-neutral-900 text-balance sm:text-4xl lg:text-[2.75rem]">
            How it works — <span className="gradient-text">six guided steps</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600 text-pretty">
            From your first registration to arriving on campus, our expert team walks with you at every
            milestone.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-fr gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[step.icon] ?? Search;
            return (
              <article
                key={step.number}
                className="reveal flex h-full flex-col"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Fixed-height pill header — same on every card */}
                <div className="relative flex h-14 w-full items-center">
                  <div className="absolute inset-y-0 left-5 right-0 rounded-full bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)] ring-1 ring-neutral-100" />
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white shadow-md shadow-primary-600/25">
                    {step.number}
                  </span>
                  <div className="relative z-10 flex flex-1 items-center justify-center pr-2">
                    <Icon className="h-6 w-6 text-primary-600" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Text block — fixed title + min description height for row alignment */}
                <div className="mt-5 flex flex-1 flex-col pl-1">
                  <h3 className="min-h-[1.75rem] text-lg font-bold leading-7 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
