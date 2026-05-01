import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { solutions } from '@/data/solutions';
import { PageTransition } from '@/components/PageTransition';
import { GridBackground } from '@/components/GridBackground';
import { SectionHeading } from '@/components/SectionHeading';
import { CTAStrip } from '@/components/CTAStrip';

type Params = { slug: string };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return { title: 'Not found — 7TechLabs' };
  return {
    title: `${sol.title} — 7TechLabs`,
    description: sol.oneLine
  };
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return notFound();

  const related = sol.related
    .map((r) => solutions.find((s) => s.slug === r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-12 pb-20">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-mute hover:text-brass tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={14} /> All solutions
          </Link>

          <div className="mt-12 font-mono text-[11px] tracking-widest text-brass uppercase">
            Solution
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.04] text-ink max-w-4xl text-balance">
            {sol.title}
          </h1>

          <p className="mt-8 text-xl text-ink-secondary leading-relaxed max-w-3xl text-pretty">
            {sol.oneLine}
          </p>

          <p className="mt-4 text-base text-brass-deep font-medium leading-relaxed max-w-2xl">
            {sol.benefit}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bottle hover:bg-bottle-deep text-cream px-6 py-3 text-sm font-mono tracking-widest uppercase transition-colors"
            >
              Start a project <ArrowRight size={14} />
            </Link>
            <a
              href="#what-it-is"
              className="inline-flex items-center gap-2 border border-ink/30 hover:border-ink px-5 py-3 text-sm tracking-wide transition-colors text-ink"
            >
              Read the detail
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what-it-is" className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
        <SectionHeading index="01" eyebrow="What it is" title="A clear definition." />
        <p className="text-lg text-ink leading-relaxed max-w-3xl">{sol.whatItIs}</p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-parchment border-y border-rule">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
          <SectionHeading
            index="02"
            eyebrow="Who it is for"
            title="The people and organisations this is built around."
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
            {sol.whoItsFor.map((it, i) => (
              <li key={i} className="bg-canvas p-6 flex items-start gap-4">
                <span className="font-mono text-[11px] text-brass tracking-widest pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-ink leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT IT SOLVES */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
        <SectionHeading
          index="03"
          eyebrow="What it solves"
          title="The problems this category exists to address."
        />

        <ul className="space-y-3">
          {sol.whatItSolves.map((it, i) => (
            <li key={i} className="border border-rule p-5 flex items-start gap-4 hover:border-brass transition-colors">
              <Check size={16} className="text-brass mt-1 shrink-0" />
              <span className="text-ink leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-parchment border-y border-rule">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
          <SectionHeading
            index="04"
            eyebrow="How it works"
            title="The way we build it, end to end."
          />

          <ol className="grid grid-cols-1 gap-px bg-rule">
            {sol.howItWorks.map((it, i) => (
              <li key={i} className="bg-canvas p-6 flex items-start gap-5">
                <span className="font-mono text-[11px] text-brass tracking-widest pt-1.5 shrink-0 min-w-[2.5rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-ink leading-relaxed">{it}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
        <SectionHeading
          index="05"
          eyebrow="What is included"
          title="Everything that comes with this engagement."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {sol.whatsIncluded.map((it, i) => (
            <li key={i} className="bg-paper p-6 flex items-start gap-4">
              <Check size={16} className="text-brass mt-1 shrink-0" />
              <span className="text-ink leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXAMPLES / VARIANTS */}
      <section className="bg-parchment border-y border-rule">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
          <SectionHeading
            index="06"
            eyebrow="Examples"
            title="The shapes this category takes."
            body="A representative — not exhaustive — list of the kinds of products we build inside this category."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {sol.examples.map((ex, i) => (
              <div key={i} className="bg-canvas p-6 flex items-start gap-3">
                <span className="font-mono text-[11px] text-brass tracking-widest pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-ink leading-relaxed">{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL OUTCOMES */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
        <SectionHeading
          index="07"
          eyebrow="Typical outcomes"
          title="What organisations get out of this work."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {sol.outcomes.map((it, i) => (
            <li key={i} className="bg-paper p-6 flex items-start gap-4">
              <span className="font-mono text-[11px] text-brass tracking-widest pt-1.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-parchment border-y border-rule">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-24">
            <SectionHeading
              index="08"
              eyebrow="Related"
              title="Other categories that often pair with this one."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/solutions/${r.slug}`}
                  className="group bg-canvas border border-rule hover:border-brass p-6 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-medium tracking-editorial text-ink">{r.title}</div>
                    <ArrowRight
                      size={14}
                      className="text-ink-mute group-hover:text-brass group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <div className="text-sm text-ink-secondary mt-2 leading-relaxed">{r.oneLine}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTAStrip
        title={`Ready to build a ${sol.title.toLowerCase()} engagement?`}
        body="Send a short brief — what the system has to do, who uses it, and what success looks like. We will respond with whether we are the right team and what the next step looks like."
      />
    </PageTransition>
  );
}
