import { processSteps } from '@/data/solutions';

export function ProcessFlow() {
  return (
    <div className="relative">
      {/* horizontal connector */}
      <div className="hidden lg:block absolute left-0 right-0 top-[3rem] h-px bg-rule" aria-hidden />
      <div
        className="hidden lg:block absolute left-0 right-0 top-[3rem] h-px"
        aria-hidden
        style={{
          background:
            'linear-gradient(to right, transparent 4%, rgba(154,123,63,0.55) 12%, rgba(154,123,63,0.55) 88%, transparent 96%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-rule">
        {processSteps.map((step, i) => (
          <div key={step.title} className="bg-canvas p-7 lg:p-8 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-6 w-px bg-rule" aria-hidden />
            <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rotate-45 bg-canvas border border-brass" aria-hidden />

            <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
              Step {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-editorial text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
