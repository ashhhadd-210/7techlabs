import { audiences } from '@/data/solutions';

export function WhoWeBuildFor() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
      {audiences.map((a, i) => (
        <div key={a.title} className="bg-canvas p-7 lg:p-8">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-editorial text-ink leading-tight">
            {a.title}
          </h3>
          <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{a.body}</p>
        </div>
      ))}
    </div>
  );
}
