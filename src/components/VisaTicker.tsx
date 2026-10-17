import { visaTicker } from '@/data';

export default function VisaTicker() {
  const items = [...visaTicker, ...visaTicker, ...visaTicker];

  return (
    <section className="overflow-hidden bg-[#00305c] py-4">
      <div className="flex animate-[ticker_28s_linear_infinite] whitespace-nowrap">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="mx-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {label}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
