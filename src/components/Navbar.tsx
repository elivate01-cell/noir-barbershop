import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SHOP } from '@/data/content';

type NavbarProps = {
  currentPath: string;
  onNavigate: (to: string) => void;
};

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (to: string) => {
    onNavigate(to);
    setOpen(false);
  };

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-ink-950/95 backdrop-blur-sm border-b border-ink-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20" aria-label="Primary">
        {/* Wordmark */}
        <button
          onClick={() => go('/')}
          className="group flex items-baseline gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
          aria-label="NOIR Barbershop home"
        >
          <span className="font-display text-2xl font-semibold tracking-[0.18em] text-stone-50 sm:text-[1.7rem]">
            {SHOP.name}
          </span>
          <span className="hidden h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-brass-500 transition-colors group-hover:bg-brass-300 sm:block" />
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.href) ? 'text-brass-300' : 'text-stone-300 hover:text-stone-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button onClick={() => go('/contact')} className="btn-primary">
            Book a Chair
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-stone-100 transition-colors hover:text-brass-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-800 transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className={`w-full border-l-2 px-4 py-3 text-left text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'border-brass-500 text-brass-300'
                    : 'border-transparent text-stone-200 hover:text-stone-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2 px-4">
            <button onClick={() => go('/contact')} className="btn-primary w-full">
              Book a Chair
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
