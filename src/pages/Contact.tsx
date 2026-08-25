import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Twitter, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SHOP } from '@/data/content';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: no backend. Just acknowledge.
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-900 pt-28 sm:pt-36">
        <div className="container-px pb-14 sm:pb-20">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Find a chair
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
              We work by appointment. Reach us on WhatsApp for the fastest reply, or send a
              message below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">Visit the shop</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
                We are in Ikeja, easy to reach from the mainland. Free parking on the
                street outside.
              </p>
            </Reveal>

            <div className="mt-10 space-y-px overflow-hidden border border-ink-800">
              <Reveal>
                <div className="flex gap-4 bg-ink-900 p-6">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brass-400" />
                  <div>
                    <h3 className="text-sm font-medium text-stone-50">Address</h3>
                    <p className="mt-1 text-sm text-stone-400">{SHOP.address}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <div className="flex gap-4 bg-ink-900 p-6">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brass-400" />
                  <div>
                    <h3 className="text-sm font-medium text-stone-50">Phone</h3>
                    <a href={SHOP.phoneHref} className="mt-1 block text-sm text-stone-400 transition-colors hover:text-brass-300">
                      {SHOP.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex gap-4 bg-ink-900 p-6">
                  <Mail size={20} className="mt-0.5 shrink-0 text-brass-400" />
                  <div>
                    <h3 className="text-sm font-medium text-stone-50">Email</h3>
                    <a href={`mailto:${SHOP.email}`} className="mt-1 block text-sm text-stone-400 transition-colors hover:text-brass-300">
                      {SHOP.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hours */}
            <Reveal delay={120}>
              <div className="mt-8 border border-ink-800 bg-ink-900 p-6">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-brass-400" />
                  <h3 className="text-sm font-medium text-stone-50">Opening hours</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {SHOP.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-stone-400">{h.day}</span>
                      <span className="font-medium text-stone-200">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* WhatsApp + socials */}
            <Reveal delay={160}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={SHOP.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary group w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={SHOP.socials[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center border border-ink-700 text-stone-300 transition-colors hover:border-brass-500 hover:text-brass-300"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href={SHOP.socials[1].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center border border-ink-700 text-stone-300 transition-colors hover:border-brass-500 hover:text-brass-300"
                  >
                    <Twitter size={17} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form + map placeholder */}
          <div className="flex flex-col gap-8">
            <Reveal delay={100}>
              <form
                onSubmit={handleSubmit}
                className="border border-ink-800 bg-ink-900 p-6 sm:p-8"
              >
                <h2 className="text-xl font-semibold sm:text-2xl">Send a message</h2>
                <p className="mt-2 text-sm text-stone-400">
                  Tell us the service and a time that works. We reply within the day.
                </p>

                {sent ? (
                  <div className="mt-6 border border-brass-700/50 bg-brass-500/10 p-5 text-sm text-brass-200">
                    Thanks — your message has been noted. We will be in touch shortly. For
                    an instant reply, use WhatsApp.
                  </div>
                ) : null}

                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-stone-500">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full border-b border-ink-700 bg-transparent py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-brass-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-stone-500">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full border-b border-ink-700 bg-transparent py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-brass-500"
                      placeholder="0803 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-stone-500">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full resize-none border-b border-ink-700 bg-transparent py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-brass-500"
                      placeholder="Service and preferred time"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-8 w-full group">
                  Send Message
                  <Send size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={160}>
              <div className="relative overflow-hidden border border-ink-800">
                <div className="aspect-[16/10] w-full bg-ink-850">
                  <img
                    src="https://images.pexels.com/photos/14753724/pexels-photo-14753724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Map view of NOIR Barbershop location in Ikeja, Lagos"
                    className="h-full w-full object-cover opacity-60"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent p-6">
                  <div>
                    <span className="eyebrow">Find us</span>
                    <p className="mt-2 text-sm font-medium text-stone-100">{SHOP.address}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
