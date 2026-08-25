import { Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, SHOP } from '@/data/content';

type FooterProps = {
  onNavigate: (to: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-px py-14 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold tracking-[0.18em] text-stone-50">
                {SHOP.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              {SHOP.tagline}. A premium modern barbershop in {SHOP.area}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SHOP.socials[0].href}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-ink-700 text-stone-300 transition-colors hover:border-brass-500 hover:text-brass-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SHOP.socials[1].href}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center border border-ink-700 text-stone-300 transition-colors hover:border-brass-500 hover:text-brass-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-sm text-stone-400 transition-colors hover:text-brass-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow mb-5">Visit</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brass-400" />
                <span>{SHOP.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brass-400" />
                <a href={SHOP.phoneHref} className="transition-colors hover:text-brass-300">
                  {SHOP.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brass-400" />
                <a href={`mailto:${SHOP.email}`} className="transition-colors hover:text-brass-300">
                  {SHOP.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex hairline" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-stone-500 sm:flex-row sm:items-center">
          <p>© {year} {SHOP.name} Barbershop. All rights reserved.</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
