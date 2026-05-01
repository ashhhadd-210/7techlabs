import { PageTransition } from '@/components/PageTransition';
import { GridBackground } from '@/components/GridBackground';
import { MetadataStrip } from '@/components/MetadataStrip';
import { WhyChoose } from '@/components/WhyChoose';
import { CTAStrip } from '@/components/CTAStrip';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata = {
  title: 'About — 7TechLabs',
  description: 'A serious technology house from Lahore, Pakistan, building software for organisations worldwide.'
};

const principles = [
  {
    title: 'We build software, not slides',
    body: 'Every engagement ends in working software in production. Decks and diagrams exist to support that — never to replace it.'
  },
  {
    title: 'We design around the real workflow',
    body: 'We sit with the people who will use what we build, watch the actual day-to-day, and design from there.'
  },
  {
    title: 'We engineer for the long term',
    body: 'Tests, observability, documentation, and a clear architecture are part of every release — not optional polish at the end.'
  },
  {
    title: 'We stay with the system',
    body: 'A system is not finished at launch. We instrument what we ship and use the operating signal to keep improving it.'
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-12 pb-20">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">About</div>

          <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.05] text-ink max-w-4xl text-balance">
            A technology house from Lahore, building software for the world.
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-ink-secondary leading-relaxed text-pretty">
            7TechLabs designs and builds software for companies, banks, institutions, and
            internal teams. We work in long arcs — from the first conversation to a system
            that has been live for years — and we take quality seriously enough to stand behind
            what we ship.
          </p>

          <div className="mt-12 pt-8 border-t border-rule">
            <MetadataStrip
              items={[
                { label: 'Headquarters', value: 'Lahore, Pakistan' },
                { label: 'Reach', value: 'Global delivery' },
                { label: 'Disciplines', value: 'Apps · Platforms · Systems' }
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="How we work"
          title="The principles behind every engagement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-paper p-7 lg:p-9">
              <div className="font-mono text-[11px] text-brass tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-editorial text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChoose />

      <CTAStrip
        title="Want to see whether we are the right team?"
        body="The clearest way to find out is to send us a short brief about the work. We will respond honestly and quickly."
      />
    </PageTransition>
  );
}
