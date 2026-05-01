import { whyStatements } from '@/data/solutions';
import { GridBackground } from '@/components/GridBackground';

export function WhyChoose() {
  return (
    <section className="relative bg-bottle text-cream overflow-hidden">
      <GridBackground variant="dark" fade="both" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="block h-[2px] w-8 bg-brass" aria-hidden />
            <div className="font-mono text-[11px] tracking-widest uppercase text-brass-soft">
              Why 7TechLabs
            </div>
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-editorial leading-[1.05] text-cream max-w-3xl text-balance">
            A serious technology house — built in Pakistan, ready for the world.
          </h2>
          <p className="mt-5 max-w-2xl text-cream-secondary leading-relaxed text-pretty">
            We work the way good engineering teams work — careful with quality, comfortable with
            complexity, and committed to the systems we ship long after launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10">
          {whyStatements.map((s, i) => (
            <div key={s.title} className="bg-bottle p-8 lg:p-10">
              <div className="font-mono text-[11px] tracking-widest text-brass-soft">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-editorial text-cream leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-sm text-cream-secondary leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
