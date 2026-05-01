type Props = {
  className?: string;
  variant?: 'light' | 'dark';
  fade?: 'top' | 'bottom' | 'both' | 'none';
};

export function GridBackground({ className = '', variant = 'light', fade = 'both' }: Props) {
  const fadeClass = {
    top: '[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]',
    bottom: '[mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]',
    both: '[mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)]',
    none: ''
  }[fade];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${variant === 'dark' ? 'grid-mesh-on-dark' : 'grid-mesh'} ${fadeClass} ${className}`}
    />
  );
}
