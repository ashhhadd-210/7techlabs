import { solutions } from '@/data/solutions';
import { SolutionCard } from '@/components/SolutionCard';
import { GridBackground } from '@/components/GridBackground';
import { CTAStrip } from '@/components/CTAStrip';

export const metadata = {
  title: 'Solutions — 7TechLabs',
  description: 'Mobile apps, web platforms, business systems, banking products, data, AI, internal tools, custom software, and POS systems.'
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            Solutions / Index
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.05] text-ink max-w-4xl text-balance">
            Everything we build, in nine clear categories.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ink-secondary leading-relaxed text-pretty">
            Each category covers a distinct way that organisations use software to operate.
            Open any category to see who it is for, what it solves, how it works, and what is included.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="border-b border-rule pb-6 mb-10 flex items-end justify-between font-mono text-[11px] tracking-widest uppercase">
          <div className="text-brass">Categories</div>
          <div className="text-ink-mute">{String(solutions.length).padStart(2, '0')} total</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <SolutionCard
              key={s.slug}
              index={i}
              slug={s.slug}
              title={s.title}
              oneLine={s.oneLine}
              examples={s.examples}
            />
          ))}
        </div>
      </section>

      <CTAStrip
        title="Not sure which category fits?"
        body="Send us a short note about what you are trying to do. We will tell you whether we can help and which approach makes sense."
      />
    </>
  );
}
