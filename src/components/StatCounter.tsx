import { useCountUp } from '@/hooks/useCountUp';

type Props = {
  numeric: number;
  suffix?: string;
  label: string;
  className?: string;
};

export default function StatCounter({ numeric, suffix = '', label, className = '' }: Props) {
  const { ref, value } = useCountUp(numeric);

  return (
    <div ref={ref} className={className}>
      <p className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
