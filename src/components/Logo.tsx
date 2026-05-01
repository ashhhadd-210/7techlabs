type LogoTone = 'on-light' | 'on-dark';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<LogoSize, string> = {
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl'
};

type Props = {
  tone?: LogoTone;
  size?: LogoSize;
  className?: string;
};

export function Logo({ tone = 'on-light', size = 'sm', className = '' }: Props) {
  const techColor = tone === 'on-dark' ? 'text-cream' : 'text-ink';
  const labsColor = tone === 'on-dark' ? 'text-cream-secondary' : 'text-ink-secondary';

  return (
    <span
      className={`inline-flex items-baseline font-sans font-medium tracking-tight leading-none transition-opacity duration-500 ease-editorial group-hover:opacity-80 ${sizeMap[size]} ${className}`}
      aria-label="7TechLabs"
    >
      <span className="text-brass">7</span>
      <span className={techColor}>Tech</span>
      <span className={labsColor}>Labs</span>
    </span>
  );
}
