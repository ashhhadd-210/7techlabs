type Item = { label: string; value: string };
type Tone = 'light' | 'dark';

export function MetadataStrip({ items, tone = 'light' }: { items: Item[]; tone?: Tone }) {
  const labelClass = tone === 'dark' ? 'text-cream-mute' : 'text-ink-mute';
  const valueClass = tone === 'dark' ? 'text-cream' : 'text-ink';
  const ruleClass = tone === 'dark' ? 'bg-cream/20' : 'bg-rule-strong';

  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] tracking-widest uppercase">
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center gap-3">
          {i > 0 && <span className={`hidden md:inline-block h-3 w-px ${ruleClass} -ml-7`} aria-hidden />}
          <span className={labelClass}>{item.label}</span>
          <span className={valueClass}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
