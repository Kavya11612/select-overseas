import { Link } from 'react-router-dom';

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
};

export default function BrandLogo({ className = '', imgClassName = '' }: BrandLogoProps) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/select-logo.webp"
        alt="Select Overseas Immigration"
        className={`h-11 w-auto object-contain sm:h-12 md:h-14 ${imgClassName}`}
      />
    </Link>
  );
}
