import Link from 'next/link';
import { solutions } from '@/data/solutions';
import { Logo } from '@/components/Logo';

export function Footer() {
  // First six solutions in the footer keep the column tidy.
  const featured = solutions.slice(0, 6);

  return (
    <footer className="bg-bottle text-cream mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link href="/" aria-label="7TechLabs home" className="inline-block">
            <Logo tone="on-dark" size="lg" />
          </Link>
          <p className="mt-6 text-sm text-cream-secondary leading-relaxed max-w-sm">
            We build apps, platforms, and systems for modern organisations.
            Based in Lahore. Delivering worldwide.
          </p>

          <dl className="mt-8 space-y-3 font-mono text-[11px] tracking-widest uppercase">
            <div className="flex gap-6">
              <dt className="text-cream-mute w-32">Origin</dt>
              <dd>Lahore, Pakistan</dd>
            </div>
            <div className="flex gap-6">
              <dt className="text-cream-mute w-32">Reach</dt>
              <dd>Global delivery</dd>
            </div>
            <div className="flex gap-6">
              <dt className="text-cream-mute w-32">Email</dt>
              <dd>
                <a href="mailto:contact@7techlabs.com" className="hover:text-brass-soft transition-colors">
                  contact@7techlabs.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[11px] tracking-widest uppercase text-cream-mute">
            What we build
          </div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="text-cream-secondary hover:text-brass-soft transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solutions" className="text-brass-soft hover:text-cream transition-colors">
                See all →
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[11px] tracking-widest uppercase text-cream-mute">Company</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link href="/work" className="text-cream-secondary hover:text-brass-soft transition-colors">Work</Link></li>
            <li><Link href="/about" className="text-cream-secondary hover:text-brass-soft transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-cream-secondary hover:text-brass-soft transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[11px] tracking-widest uppercase text-cream-mute">Engage</div>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center min-h-[44px] text-xs font-mono tracking-widest uppercase text-bottle bg-brass hover:bg-brass-soft px-5 py-3 transition-colors duration-500 ease-editorial"
          >
            Start a project
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[11px] tracking-widest uppercase text-cream-mute">
          <div>© {new Date().getFullYear()} 7TechLabs · All rights reserved</div>
          <div>Apps · Platforms · Systems</div>
        </div>
      </div>
    </footer>
  );
}
