import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { engagementArchetypes } from '@/data/solutions';

export function SelectedWork({ limit }: { limit?: number }) {
  const items = limit ? engagementArchetypes.slice(0, limit) : engagementArchetypes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
      {items.map((it, i) => (
        <Link
          key={it.title}
          href="/work"
          className="group bg-paper p-7 lg:p-8 hover:bg-canvas transition-colors duration-500 ease-editorial"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
              {String(i + 1).padStart(2, '0')} / Engagement
            </div>
            <ArrowUpRight
              size={16}
              className="text-ink-mute group-hover:text-brass group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500 ease-editorial"
            />
          </div>
          <h3 className="mt-8 text-xl md:text-2xl font-medium tracking-editorial text-ink leading-snug">
            {it.title}
          </h3>
          <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{it.body}</p>
        </Link>
      ))}
    </div>
  );
}
