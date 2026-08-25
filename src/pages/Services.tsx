import { Clock, ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { SERVICES, formatNaira, WHY_NOIR } from '@/data/content';

type ServicesProps = {
  onNavigate: (to: string) => void;
};

export function Services({ onNavigate }: ServicesProps) {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-ink-800 bg-ink-900 pt-28 sm:pt-36">
        <div className="container-px pb-14 sm:pb-20">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Services & Pricing</span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              The menu
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
              A short, honest list of cuts and grooming. Prices are in Naira and include
              the finish — no surprise add-ons.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service list */}
      <section className="container-px py-16 sm:py-24">
        <div className="border-t border-ink-800">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 60}>
              <article className="group grid gap-4 border-b border-ink-800 py-7 transition-colors duration-300 hover:bg-ink-900/50 sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-8">
                <div className="sm:col-span-5">
                  <h2 className="text-xl font-semibold text-stone-50 sm:text-2xl">{s.name}</h2>
                </div>
                <div className="sm:col-span-4">
                  <p className="text-sm leading-relaxed text-stone-400">{s.description}</p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:col-span-3 sm:justify-end">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                    <Clock size={13} className="text-brass-400" />
                    {s.duration}
                  </span>
                  <span className="font-display text-xl text-brass-400 sm:text-2xl">
                    {formatNaira(s.price)}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal className="mt-10">
          <p className="text-sm text-stone-500">
            Prices are per visit and include consultation, cut and finish. Cash and
            transfer both accepted.
          </p>
        </Reveal>
      </section>

      {/* What's included */}
      <section className="border-y border-ink-800 bg-ink-900">
        <div className="container-px py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Every visit"
              title="What comes with your cut"
              description="The same standard, every chair, every barber."
            />
            <Reveal delay={120}>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  'Consultation before the cut',
                  'Fresh, sanitised blades',
                  'Hot towel finish',
                  'Style and product to finish',
                  'Neck and ear line-up',
                  'Aftercare advice',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-brass-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why NOIR strip */}
      <section className="container-px py-20 sm:py-24">
        <SectionHeading eyebrow="The standard" title="Why clients come back" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_NOIR.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 70}>
              <div className="flex h-full flex-col border border-ink-800 bg-ink-900 p-6">
                <span className="font-display text-lg text-brass-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Pick your cut and book a chair"
        text="Message us on WhatsApp with the service you want and a time that works."
      />

      <div className="container-px -mt-12 pb-20 text-center sm:-mt-16">
        <button
          onClick={() => onNavigate('/contact')}
          className="btn-ghost group"
        >
          Or see full contact details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
}
