import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { BARBERS, VALUES, SHOP } from '@/data/content';

export function About() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-900 pt-28 sm:pt-36">
        <div className="container-px pb-14 sm:pb-20">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Built for the man who notices the details.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
              NOIR started in a small room in Ikeja with one chair and one idea — that a
              haircut in Lagos could be precise, calm and consistent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story with image */}
      <section className="container-px py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/17027433/pexels-photo-17027433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Dark moody barbershop interior with neon signs at night"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">The beginning</span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
              One chair, one standard.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-400">
              <p>
                In 2018, Tunde Bakare cut hair out of a single chair in Ikeja. The room
                was small, but the work was exact — and word moved fast.
              </p>
              <p>
                Seven years on, NOIR is still in Lagos, still focused on the same thing:
                measured cuts, a calm room, and a finish that holds up for the week.
              </p>
              <p>
                We keep the menu short on purpose. We would rather do a few things
                properly than offer everything and rush them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-ink-800 bg-ink-900">
        <div className="container-px py-20 sm:py-28">
          <SectionHeading
            eyebrow="Philosophy"
            title="How we think about the chair"
            description="Three things we hold to, every cut, every client."
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full bg-ink-900 p-8">
                  <span className="font-display text-2xl text-brass-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-stone-50">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shop imagery strip */}
      <section className="container-px py-20 sm:py-28">
        <SectionHeading eyebrow="The room" title="Where the work happens" />
        <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <img
              src="https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Contemporary barbershop interior with chairs and mirrors"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-3 sm:gap-4">
            <img
              src="https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Close-up of a vintage barber chair"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/16372643/pexels-photo-16372643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Mens grooming products on a shelf"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-ink-800 bg-ink-900">
        <div className="container-px py-20 sm:py-28">
          <SectionHeading
            eyebrow="The Barbers"
            title="The hands behind the chair"
            description="A small team of barbers who each hold the same standard."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BARBERS.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 90}>
                <article className="group">
                  <div className="overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.alt}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-stone-50">{b.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-brass-400">
                      {b.role}
                    </p>
                    <p className="mt-3 text-sm text-stone-400">{b.specialty}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come sit in the chair"
        text={`Find us in ${SHOP.area}. Book a time and meet the barber who fits your style.`}
      />
    </>
  );
}
