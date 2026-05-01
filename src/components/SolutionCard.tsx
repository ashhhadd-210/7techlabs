'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  index: number;
  slug: string;
  title: string;
  oneLine: string;
  examples?: string[];
};

export function SolutionCard({ index, slug, title, oneLine, examples = [] }: Props) {
  return (
    <Link href={`/solutions/${slug}`} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
        whileHover={{ y: -3 }}
        className="relative h-full bg-paper border border-rule hover:border-brass p-7 lg:p-8 transition-colors duration-500 ease-editorial"
      >
        {/* brass corner ticks on hover — architectural detail */}
        <span className="absolute top-0 left-0 h-3 w-px bg-brass opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-editorial" aria-hidden />
        <span className="absolute top-0 left-0 w-3 h-px bg-brass opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-editorial" aria-hidden />

        <div className="flex items-start justify-between gap-4">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            {String(index + 1).padStart(2, '0')}
          </div>
          <ArrowUpRight
            size={18}
            className="text-ink-mute group-hover:text-brass group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500 ease-editorial"
          />
        </div>

        <h3 className="mt-10 text-2xl md:text-[1.7rem] font-medium tracking-editorial leading-[1.15] text-ink">
          {title}
        </h3>

        <p className="mt-4 text-[15px] text-ink-secondary leading-relaxed">{oneLine}</p>

        {examples.length > 0 && (
          <div className="mt-8 pt-5 border-t border-rule">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-mute mb-3">
              Includes
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-[12px] text-ink-secondary">
              {examples.slice(0, 3).map((ex, i) => (
                <span key={ex} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden />}
                  {ex}
                </span>
              ))}
              {examples.length > 3 && (
                <span className="text-ink-faint">+ {examples.length - 3} more</span>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
