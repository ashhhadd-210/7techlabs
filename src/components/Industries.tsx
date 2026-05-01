import { industries } from '@/data/solutions';

export function Industries() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
      {industries.map((s, i) => (
        <div key={s.title} className="bg-canvas p-7 lg:p-8 group">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] tracking-widest text-brass">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="h-px flex-1 bg-rule group-hover:bg-rule-strong transition-colors" />
          </div>
          <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-editorial text-ink leading-tight">
            {s.title}
          </h3>
          <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
