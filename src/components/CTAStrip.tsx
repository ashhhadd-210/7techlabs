import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTAStrip({
  eyebrow = 'Engage',
  title = 'Tell us what you are trying to build.',
  body = 'The clearer the brief, the faster we can tell you whether we are the right team to build it.',
  primaryHref = '/contact',
  primaryLabel = 'Start a project',
  secondaryHref,
  secondaryLabel
}: Props) {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-brass" aria-hidden />
              <div className="font-mono text-[11px] tracking-widest uppercase text-brass">
                {eyebrow}
              </div>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-medium tracking-editorial leading-[1.05] text-ink max-w-2xl text-balance">
              {title}
            </h2>
            <p className="mt-5 text-ink-secondary max-w-2xl leading-relaxed text-pretty">
              {body}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 border border-ink/30 hover:border-ink px-5 py-3 text-sm tracking-wide transition-colors text-ink"
              >
                {secondaryLabel}
              </Link>
            )}
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 bg-bottle hover:bg-bottle-deep text-cream px-6 py-3 text-sm font-mono tracking-widest uppercase transition-colors"
            >
              {primaryLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
