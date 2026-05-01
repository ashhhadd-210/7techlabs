type Props = {
  index?: string;
  eyebrow: string;
  title: string;
  body?: string;
  trailing?: React.ReactNode;
  tone?: 'light' | 'dark';
};

export function SectionHeading({ index, eyebrow, title, body, trailing, tone = 'light' }: Props) {
  const titleClass = `text-3xl md:text-5xl font-medium tracking-editorial leading-[1.05] text-balance ${
    tone === 'dark' ? 'text-cream' : 'text-ink'
  }`;
  const bodyClass = `mt-5 max-w-2xl leading-relaxed text-pretty ${
    tone === 'dark' ? 'text-cream-secondary' : 'text-ink-secondary'
  }`;
  const trailingClass = `font-mono text-[11px] tracking-widest uppercase ${
    tone === 'dark' ? 'text-cream-mute' : 'text-ink-mute'
  }`;

  return (
    <div className="mb-12">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="block h-[2px] w-8 bg-brass" aria-hidden />
            <div className="font-mono text-[11px] tracking-widest uppercase text-brass">
              {index ? `${index} / ${eyebrow}` : eyebrow}
            </div>
          </div>
          <h2 className={`mt-5 ${titleClass}`}>{title}</h2>
          {body && <p className={bodyClass}>{body}</p>}
        </div>
        {trailing && <div className={`hidden md:block shrink-0 ${trailingClass}`}>{trailing}</div>}
      </div>
    </div>
  );
}
