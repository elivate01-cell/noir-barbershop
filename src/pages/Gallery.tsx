import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { GALLERY } from '@/data/content';

export function Gallery() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-900 pt-28 sm:pt-36">
        <div className="container-px pb-14 sm:pb-20">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">The Gallery</span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Work from the chair
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
              Fades, beards, line-ups and the room they happen in. A look at recent work
              from the NOIR chair.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="container-px py-16 sm:py-24">
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 60}>
              <figure className="group relative block w-full break-inside-avoid overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/30" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink-950/90 to-transparent p-4 text-xs text-stone-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Like what you see?"
        text="Book a chair and bring the reference. We will match the work to it."
      />
    </>
  );
}
