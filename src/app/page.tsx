import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/data/solutions';
import { GridBackground } from '@/components/GridBackground';
import { MetadataStrip } from '@/components/MetadataStrip';
import { SectionHeading } from '@/components/SectionHeading';
import { SolutionCard } from '@/components/SolutionCard';
import { WhoWeBuildFor } from '@/components/WhoWeBuildFor';
import { ProcessFlow } from '@/components/ProcessFlow';
import { Industries } from '@/components/Industries';
import { SelectedWork } from '@/components/SelectedWork';
import { WhyChoose } from '@/components/WhyChoose';
import { CTAStrip } from '@/components/CTAStrip';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 sm:pt-20 md:pt-32 pb-20 md:pb-28">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            7TechLabs · Pakistan → World
          </div>

          <h1 className="mt-6 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] sm:leading-[1.02] tracking-editorial font-medium text-ink max-w-5xl text-balance">
            <span className="lg:block">We build apps, platforms, </span>
            <span className="lg:block">and systems for modern </span>
            <span className="lg:block">organisations.</span>
          </h1>

          <p className="mt-8 sm:mt-10 max-w-2xl text-base sm:text-lg text-ink-secondary leading-relaxed text-pretty">
            From mobile apps and POS systems to banking products and AI assistants,
            7TechLabs builds the software organisations actually run on. Built in Lahore.
            Delivered worldwide.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] border border-ink/30 hover:border-ink px-6 py-3 text-sm tracking-wide transition-colors text-ink"
            >
              Explore what we build <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-bottle hover:bg-bottle-deep text-cream px-6 py-3 text-sm font-mono tracking-widest uppercase transition-colors"
            >
              Start a project <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 sm:mt-20 pt-8 border-t border-rule">
            <MetadataStrip
              items={[
                { label: 'Origin', value: 'Lahore, Pakistan' },
                { label: 'Reach', value: 'Global delivery' },
                { label: 'Build', value: 'Apps · Platforms · Systems' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <SectionHeading
          index="01"
          eyebrow="What we build"
          title="Software for the way modern organisations run."
          body="Nine focused categories. Each one is built around a real way that companies, banks, institutions, and teams use software to operate."
          trailing={`${String(solutions.length).padStart(2, '0')} categories`}
        />

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

      {/* WHO WE BUILD FOR */}
      <section className="bg-parchment border-y border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <SectionHeading
            index="02"
            eyebrow="Who we build for"
            title="Startups, enterprises, banks, institutions, and the teams inside them."
            body="We build for organisations of every size. Some of our work is consumer-facing. Most of it runs quietly inside the company."
          />

          <WhoWeBuildFor />
        </div>
      </section>

      {/* HOW THE FLOW WORKS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="How we work"
          title="A simple, careful process — from understanding to launch and beyond."
          body="Five steps that we hold to on every engagement, whether it lasts six weeks or six years."
        />

        <ProcessFlow />
      </section>

      {/* INDUSTRIES */}
      <section className="bg-parchment border-y border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <SectionHeading
            index="04"
            eyebrow="Industries"
            title="Built across sectors, from retail to regulated finance."
            body="The shape of the work changes by industry. The discipline behind it does not."
          />

          <Industries />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <SectionHeading
          index="05"
          eyebrow="Selected engagements"
          title="The kind of work we take on."
          body="We work in long arcs. These are the engagement types that recur most often."
          trailing={
            <Link href="/work" className="hover:text-brass transition-colors inline-flex items-center gap-2">
              See all engagements →
            </Link>
          }
        />

        <SelectedWork limit={3} />
      </section>

      {/* WHY 7TECHLABS */}
      <WhyChoose />

      {/* CONTACT CTA */}
      <CTAStrip
        eyebrow="Engage"
        title="Have a project in mind? Let's start with a short brief."
        body="Tell us about the problem, the people who feel it, and the outcome you are after. We will tell you whether we are the right team — quickly and honestly."
        primaryLabel="Start a project"
        secondaryHref="/solutions"
        secondaryLabel="Explore what we build"
      />
    </>
  );
}
