import { FormEvent, useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';

type Msg = {
  id: string;
  from: 'bot' | 'user';
  text: string;
};

const QUICK = [
  'Study abroad counselling',
  'Student / work visa',
  'Scholarships',
  'Book free consultation',
];

function botReply(input: string): string {
  const t = input.toLowerCase();
  if (/hi|hello|hey|namaste|good (morning|evening|afternoon)/.test(t)) {
    return 'Hello! Welcome to Select Overseas Education, Madhapur. Are you looking for study abroad, a visa, or scholarships?';
  }
  if (/scholarship|funding|loan|fee/.test(t)) {
    return 'Yes — we help with scholarships and funding options based on your profile and destination. Share your preferred country and course level, and an advisor will guide you.';
  }
  if (/visa|ielts|pte|work permit|pr\b|visitor|tourist|business/.test(t)) {
    return 'We assist with student, work, visitor, business and skilled-migration visas for USA, Canada, UK, Australia, Ireland, NZ and Europe. Which country are you targeting?';
  }
  if (/study|university|college|ms\b|mba|bachelor|master|abroad|usa|uk|canada|australia|ireland|europe/.test(t)) {
    return 'Great choice. We shortlist universities, handle applications, SOP/LOR support and visa filing. Tell us your preferred country and intake (e.g. Sep 2026).';
  }
  if (/consult|appointment|book|call|meeting|visit|office|contact|free/.test(t)) {
    return 'Initial counselling is free. Call +91 78935 37375 / +91 70320 37375, or visit us at Plot No. 08, Vittal Nagar, Madhapur, Hyderabad. Share your name & phone here and we will call you back.';
  }
  if (/price|cost|charge|fee|payment/.test(t)) {
    return 'First consultation is free. Service fees depend on the visa/country package — our advisors explain transparently with no hidden charges.';
  }
  if (/\d{10}|phone|number|callback|call back|my name/.test(t)) {
    return 'Thank you! Our Select advisor team will contact you shortly during office hours (Mon–Sat, 8 AM – 6 PM). Anything else we can help with?';
  }
  return 'Thanks for your message. A Select advisor can help with admissions, visas and scholarships. Ask about a country, or share your name & phone for a free callback.';
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 'welcome',
      from: 'bot',
      text: 'Welcome to Select Overseas Education. How can we help with your study / visa plans?',
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, messages, typing]);

  const pushBot = (text: string) => {
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, from: 'bot', text },
      ]);
      setTyping(false);
    }, 700 + Math.min(text.length * 8, 900));
  };

  const send = (text: string) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((m) => [...m, { id: `u-${Date.now()}`, from: 'user', text: value }]);
    setDraft('');
    pushBot(botReply(value));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(draft);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="flex h-[min(520px,70vh)] w-[min(100vw-2.5rem,340px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.22)] ring-1 ring-black/5 animate-fade-up">
          <div className="flex shrink-0 items-center justify-between bg-[#004b8d] px-3.5 py-3 text-white">
            <div className="flex min-w-0 items-center gap-2.5">
              <AdvisorAvatar className="h-10 w-10" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold leading-tight">Select Advisor</p>
                <p className="truncate text-[11px] font-medium text-white/80">
                  Online · typically replies fast
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-2 shrink-0 rounded-md p-1 text-white/90 transition hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f3f4f6] p-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                    msg.from === 'user'
                      ? 'rounded-br-md bg-[#004b8d] text-white'
                      : 'rounded-bl-md bg-white text-neutral-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 shadow-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            )}

            {messages.length < 3 && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#004b8d] ring-1 ring-[#004b8d]/20 transition hover:bg-[#004b8d] hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className="flex shrink-0 items-center gap-2 border-t border-neutral-200 bg-white p-2.5"
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              className="min-w-0 flex-1 rounded-full bg-neutral-100 px-4 py-2.5 text-sm text-neutral-800 outline-none ring-1 ring-transparent placeholder:text-neutral-400 focus:bg-white focus:ring-[#004b8d]/30"
            />
            <button
              type="submit"
              disabled={!draft.trim() || typing}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#004b8d] text-white transition hover:bg-[#00305c] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="transition hover:scale-105"
        >
          <AdvisorAvatar className="h-14 w-14 shadow-xl ring-[3px] ring-white" />
        </button>
      )}
    </div>
  );
}

function AdvisorAvatar({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#e86a4a]">
        <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
          <circle cx="40" cy="40" r="40" fill="#e86a4a" />
          <ellipse cx="40" cy="28" rx="18" ry="16" fill="#5c3d2e" />
          <ellipse cx="40" cy="34" rx="14" ry="15" fill="#f0c4a8" />
          <rect x="28" y="32" width="9" height="7" rx="2" fill="none" stroke="#1f2937" strokeWidth="1.6" />
          <rect x="43" y="32" width="9" height="7" rx="2" fill="none" stroke="#1f2937" strokeWidth="1.6" />
          <path d="M37 35.5h6" stroke="#1f2937" strokeWidth="1.4" />
          <circle cx="32.5" cy="35.5" r="1.2" fill="#1f2937" />
          <circle cx="47.5" cy="35.5" r="1.2" fill="#1f2937" />
          <path
            d="M28 40c2 10 8 14 12 14s10-4 12-14c-3 3-7 4-12 4s-9-1-12-4z"
            fill="#6b4423"
          />
          <path
            d="M35 44c1.5 2 4.5 2.5 7 0"
            fill="none"
            stroke="#c47a5a"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M22 72c4-12 12-16 18-16s14 4 18 16" fill="#7eb6d9" />
          <path d="M40 56l-3 10 3 6 3-6z" fill="#1f2937" />
          <path d="M37 56h6l-3 4z" fill="#111827" />
        </svg>
      </span>
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#22c55e] ring-2 ring-white" />
    </span>
  );
}
