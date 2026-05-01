import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { GridBackground } from '@/components/GridBackground';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      <GridBackground fade="bottom" />
      <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-20 pb-32">
        <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
          404 / Not in index
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.05] text-ink max-w-3xl text-balance">
          That page is not part of the site.
        </h1>
        <p className="mt-6 text-ink-secondary max-w-xl leading-relaxed">
          The path you followed does not match anything we have. Head back to solutions to
          find what you were looking for.
        </p>
        <div className="mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 border border-ink/30 hover:border-ink px-6 py-3 text-sm tracking-wide transition-colors text-ink"
          >
            <ArrowLeft size={16} /> Back to solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
