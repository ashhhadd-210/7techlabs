import { GridBackground } from '@/components/GridBackground';
import { SelectedWork } from '@/components/SelectedWork';
import { CTAStrip } from '@/components/CTAStrip';
import { MetadataStrip } from '@/components/MetadataStrip';

export const metadata = {
  title: 'Work — 7TechLabs',
  description: 'The kind of engagements 7TechLabs takes on, across industries and geographies.'
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            Work / Engagement model
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.05] text-ink max-w-4xl text-balance">
            The kind of work we take on.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ink-secondary leading-relaxed text-pretty">
            We work in long arcs. Most engagements fall into one of six recurring shapes —
            from modernising legacy software to standing up new digital products. Each one
            spans design, engineering, launch, and ongoing improvement.
          </p>

          <div className="mt-12 pt-8 border-t border-rule">
            <MetadataStrip
              items={[
                { label: 'Engagements', value: '06 archetypes' },
                { label: 'Reach', value: 'Global delivery' },
                { label: 'Style', value: 'Long-arc partnerships' }
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="border-b border-rule pb-6 mb-10 flex items-end justify-between font-mono text-[11px] tracking-widest uppercase">
          <div className="text-brass">Engagement archetypes</div>
          <div className="text-ink-mute">06 ways we work</div>
        </div>

        <SelectedWork />
      </section>

      <CTAStrip
        title="Have a project in mind?"
        body="Tell us a little about it — what the system needs to do and who needs to use it. We will respond with whether we are the right team and what we would propose next."
      />
    </>
  );
}
