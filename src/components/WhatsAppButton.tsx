import WhatsAppIcon from '@/components/WhatsAppIcon';

const WA_LINK =
  'https://wa.me/917893537375?text=' +
  encodeURIComponent('Hi Select Overseas! I need help with study abroad / visa counselling.');

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57]"
    >
      <WhatsAppIcon className="relative z-10 h-7 w-7" />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-35" />
    </a>
  );
}
