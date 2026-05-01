'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-canvas/85 border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="7TechLabs home" className="group">
          <Logo tone="on-light" size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm transition-colors ${
                  active ? 'text-ink' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-[27px] left-0 right-0 h-px bg-brass" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-xs font-mono tracking-widest uppercase text-cream bg-bottle hover:bg-bottle-deep px-4 py-2.5 transition-colors"
          >
            Start a project
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-secondary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit text-xs font-mono tracking-widest uppercase text-cream bg-bottle px-4 py-2.5"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
