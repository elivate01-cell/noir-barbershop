import { Reveal } from './Reveal';
import { SHOP } from '@/data/content';

type CtaBannerProps = {
  title?: string;
  text?: string;
};

export function CtaBanner({
  title = 'Ready for a sharper look?',
  text = 'Walk in by appointment. We will find you a chair and a barber who fits.',
}: CtaBannerProps) {
  return (
    <section className="container-px py-20 sm:py-28">
      <Reveal className="relative overflow-hidden border border-ink-700 bg-ink-900 px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-500/60 to-transparent" />
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">{SHOP.name} · Lagos</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-400">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={SHOP.whatsapp} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
              Message on WhatsApp
            </a>
            <a href={SHOP.phoneHref} className="btn-outline w-full sm:w-auto">
              Call {SHOP.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
