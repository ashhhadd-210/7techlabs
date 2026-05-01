import Link from 'next/link';
import { ArrowRight, Mail, Globe, MapPin } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { GridBackground } from '@/components/GridBackground';

export const metadata = {
  title: 'Contact — 7TechLabs',
  description: 'Start a project with 7TechLabs.'
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden border-b border-rule">
        <GridBackground fade="bottom" />
        <div className="absolute left-6 lg:left-10 top-32 h-[2px] w-12 bg-brass" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-12 pb-20">
          <div className="font-mono text-[11px] tracking-widest text-brass uppercase">
            Contact / Start a project
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-editorial leading-[1.05] text-ink max-w-4xl text-balance">
            Tell us what you are trying to build.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ink-secondary leading-relaxed text-pretty">
            The clearer the brief, the faster we can tell you whether we are the right team.
            A short note about the problem, the people who feel it, and the outcome you are
            after is enough to start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          <a
            href="mailto:hello@7techlabs.io"
            className="group bg-paper hover:bg-canvas p-8 transition-colors flex items-start gap-5"
          >
            <Mail size={20} className="text-brass mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-mono text-[11px] tracking-widest text-brass uppercase">Email</div>
              <div className="mt-3 text-xl font-medium text-ink">hello@7techlabs.io</div>
              <div className="mt-2 text-sm text-ink-secondary leading-relaxed">
                Direct line to the team. Expect a reply within two business days.
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-ink-mute group-hover:text-brass group-hover:translate-x-0.5 transition-all mt-1"
            />
          </a>

          <Link
            href="/solutions"
            className="group bg-paper hover:bg-canvas p-8 transition-colors flex items-start gap-5"
          >
            <Globe size={20} className="text-brass mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-mono text-[11px] tracking-widest text-brass uppercase">Browse first</div>
              <div className="mt-3 text-xl font-medium text-ink">Explore what we build</div>
              <div className="mt-2 text-sm text-ink-secondary leading-relaxed">
                Find the closest match to what you need before you write to us.
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-ink-mute group-hover:text-brass group-hover:translate-x-0.5 transition-all mt-1"
            />
          </Link>

          <div className="bg-paper p-8 flex items-start gap-5 md:col-span-2">
            <MapPin size={20} className="text-brass mt-1 shrink-0" />
            <div>
              <div className="font-mono text-[11px] tracking-widest text-brass uppercase">Origin</div>
              <div className="mt-3 text-xl font-medium text-ink">Lahore, Pakistan · Global delivery</div>
              <div className="mt-2 text-sm text-ink-secondary leading-relaxed max-w-prose">
                Our engineering bench operates from Lahore. Our systems operate everywhere our
                clients do.
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
