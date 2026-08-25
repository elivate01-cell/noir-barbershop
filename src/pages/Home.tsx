import { ArrowRight, Scissors, Clock, MapPin, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import {
  SERVICES,
  formatNaira,
  GALLERY,
  WHY_NOIR,
  TESTIMONIALS,
  SHOP,
} from '@/data/content';

type HomeProps = {
  onNavigate: (to: string) => void;
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31840006/pexels-photo-31840006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Barber giving a precise haircut in a modern barbershop"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        </div>

        <div className="container-px relative z-10 pt-24 pb-28 sm:pb-20 sm:pt-28">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brass-500" />
                <span className="eyebrow">{SHOP.area}</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                Precision cuts for the
                <span className="block text-brass-400">modern man.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-stone-300 sm:text-lg">
                NOIR is a premium barbershop in Lagos. Sharp fades, clean line-ups and
                beard work — done with intent, every visit.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button onClick={() => onNavigate('/contact')} className="btn-primary group">
                  Book a Chair
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button onClick={() => onNavigate('/services')} className="btn-ghost">
                  View Services
                </button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 flex items-center gap-6 text-sm text-stone-400">
                <div className="flex items-center gap-2">
                  <Star size={14} className="fill-brass-400 text-brass-400" />
                  <Star size={14} className="fill-brass-400 text-brass-400" />
                  <Star size={14} className="fill-brass-400 text-brass-400" />
                  <Star size={14} className="fill-brass-400 text-brass-400" />
                  <Star size={14} className="fill-brass-400 text-brass-400" />
                  <span className="ml-1">Loved by Lagos</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom detail strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ink-800/80 bg-ink-950/60 backdrop-blur-sm">
          <div className="container-px flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4 text-xs text-stone-400">
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-brass-400" /> Open Mon — Sun
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-brass-400" /> {SHOP.address}
            </span>
            <span className="flex items-center gap-2">
              <Scissors size={13} className="text-brass-400" /> By appointment
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container-px py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Menu"
            title="Services built around the chair"
            description="A short, honest menu. No upsells — just the cuts and grooming we do well."
          />
          <Reveal>
            <button
              onClick={() => onNavigate('/services')}
              className="link-underline text-sm font-medium text-brass-300"
            >
              Full price list →
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.name} delay={(i % 3) * 80}>
              <div className="group h-full bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-850 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-stone-50">{s.name}</h3>
                  <span className="shrink-0 font-display text-lg text-brass-400">
                    {formatNaira(s.price)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">{s.description}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                  <Clock size={13} className="text-brass-400" />
                  {s.duration}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT NOIR */}
      <section className="border-y border-ink-800 bg-ink-900">
        <div className="container-px py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <span className="eyebrow">About NOIR</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                A Lagos barbershop built on precision and consistency.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-400">
                We opened NOIR with one idea: give men in Lagos a chair where the cut is
                always measured, the room is always calm, and the finish is always sharp.
                No noise, no rush — just good grooming.
              </p>
              <ul className="mt-8 space-y-3">
                {WHY_NOIR.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('/about')} className="btn-outline mt-9">
                Our Story
              </button>
            </Reveal>

            <Reveal className="order-1 lg:order-2" delay={120}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Contemporary barbershop interior with chairs and mirrors"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 hidden border border-ink-700 bg-ink-950 px-6 py-5 sm:block">
                  <span className="font-display text-3xl text-brass-400">07</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-stone-500">
                    Years in Lagos
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY */}
      <section className="container-px py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Work"
            title="Cuts from the chair"
            description="A look at recent work — fades, beards and the room they happen in."
          />
          <Reveal>
            <button
              onClick={() => onNavigate('/gallery')}
              className="link-underline text-sm font-medium text-brass-300"
            >
              Full gallery →
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.slice(0, 4).map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 70}>
              <div className="group relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY NOIR */}
      <section className="border-y border-ink-800 bg-ink-900">
        <div className="container-px py-20 sm:py-28">
          <SectionHeading
            eyebrow="Why NOIR"
            title="What you get in the chair"
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 sm:grid-cols-3">
            {[
              { n: '01', t: 'Measured cuts', d: 'Every line and fade is built deliberately, not guessed.' },
              { n: '02', t: 'Consistent finish', d: 'The cut you liked last time is the one you get again.' },
              { n: '03', t: 'A calm room', d: 'No rush, no noise — just focus on the work in the chair.' },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 90}>
                <div className="h-full bg-ink-900 p-8">
                  <span className="font-display text-2xl text-brass-400">{item.n}</span>
                  <h3 className="mt-4 text-lg font-semibold text-stone-50">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px py-20 sm:py-28">
        <SectionHeading eyebrow="Said by clients" title="From the chairs of Lagos" align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col border border-ink-800 bg-ink-900 p-8">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-brass-400 text-brass-400" />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-stone-200">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-800 pt-5">
                  <p className="text-sm font-medium text-stone-50">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-stone-500">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCATION CTA */}
      <CtaBanner
        title="Find us in Ikeja"
        text="By appointment, six days a week. Message us to lock in your time."
      />
    </>
  );
}
