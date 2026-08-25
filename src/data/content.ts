// Centralized fictional content for NOIR Barbershop.
// All prices in Nigerian Naira (₦). All content is fictional.

export const SHOP = {
  name: 'NOIR',
  tagline: 'Precision grooming for the modern man',
  phone: '+234 803 555 0142',
  phoneHref: 'tel:+2348035550142',
  whatsapp: 'https://wa.me/2348035550142',
  email: 'hello@noirbarbershop.ng',
  address: '14 Adeniyi Jones Avenue, Ikeja, Lagos',
  area: 'Ikeja, Lagos, Nigeria',
  hours: [
    { day: 'Mon — Fri', time: '09:00 — 20:00' },
    { day: 'Saturday', time: '08:00 — 19:00' },
    { day: 'Sunday', time: '12:00 — 17:00' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
};

export type Service = {
  name: string;
  description: string;
  price: number;
  duration: string;
};

export const SERVICES: Service[] = [
  {
    name: 'Signature Haircut',
    description: 'A tailored cut finished with a clean line-up and style.',
    price: 8000,
    duration: '40 min',
  },
  {
    name: 'Skin Fade',
    description: 'Seamless gradient fade down to the skin, razor detailed.',
    price: 10000,
    duration: '45 min',
  },
  {
    name: 'Beard Sculpt',
    description: 'Shape, trim and line your beard to its sharpest form.',
    price: 6000,
    duration: '30 min',
  },
  {
    name: 'Hair + Beard',
    description: 'The full reset — cut, beard sculpt and finish in one seat.',
    price: 13000,
    duration: '65 min',
  },
  {
    name: 'Kids Cut',
    description: 'Patient, easy-going cuts for boys 12 and under.',
    price: 5000,
    duration: '30 min',
  },
  {
    name: 'Executive Grooming',
    description: 'Cut, beard, hot towel and scalp treatment for the full look.',
    price: 18000,
    duration: '80 min',
  },
];

export const formatNaira = (n: number) =>
  '₦' + n.toLocaleString('en-NG');

export type Barber = {
  name: string;
  role: string;
  specialty: string;
  image: string;
  alt: string;
};

export const BARBERS: Barber[] = [
  {
    name: 'Tunde Bakare',
    role: 'Master Barber · Founder',
    specialty: 'Skin fades & classic scissor work',
    image:
      'https://images.pexels.com/photos/18483774/pexels-photo-18483774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portrait of barber Tunde Bakare standing in the NOIR shop',
  },
  {
    name: 'Emeka Obi',
    role: 'Senior Barber',
    specialty: 'Beard sculpting & hot towel shaves',
    image:
      'https://images.pexels.com/photos/3998397/pexels-photo-3998397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portrait of barber Emeka Obi styling a client in the shop',
  },
  {
    name: 'David Eze',
    role: 'Barber',
    specialty: 'Kids cuts & modern textured styles',
    image:
      'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portrait of barber David Eze giving a precise haircut',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Cleanest fade I have had in Lagos. Tunde takes his time and the finish is always sharp.',
    name: 'Ade Okafor',
    detail: 'Regular since 2022',
  },
  {
    quote:
      'I come for the executive grooming before any big meeting. Walk in looking regular, walk out looking sharp.',
    name: 'Chidi Nwosu',
    detail: 'Lekki',
  },
  {
    quote:
      'The atmosphere is calm, the music is right, and my beard has never been shaped this well.',
    name: 'Femi Adesanya',
    detail: 'Ikeja',
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  span: 'tall' | 'wide' | 'regular';
};

export const GALLERY: GalleryItem[] = [
  {
    src: 'https://images.pexels.com/photos/3998431/pexels-photo-3998431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barber carefully trimming a client beard with clippers',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barber using an electric clipper for a precise haircut',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/16372643/pexels-photo-16372643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of mens grooming products on a shelf',
    span: 'regular',
  },
  {
    src: 'https://images.pexels.com/photos/3998412/pexels-photo-3998412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a barber grooming a beard with scissors',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/17027433/pexels-photo-17027433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Dark moody barbershop interior with neon signs at night',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/7447127/pexels-photo-7447127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Man with a fresh haircut and beard trim at the barbershop',
    span: 'regular',
  },
  {
    src: 'https://images.pexels.com/photos/7518710/pexels-photo-7518710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barber using clippers to trim a relaxed clients beard',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barber giving a precise haircut to a client in the shop',
    span: 'regular',
  },
  {
    src: 'https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a vintage barber chair with detailed metalwork',
    span: 'regular',
  },
  {
    src: 'https://images.pexels.com/photos/3998404/pexels-photo-3998404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylish bearded man getting a haircut in a modern barbershop',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary barbershop interior with chairs and mirrors',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a barber cutting hair with scissors and a comb',
    span: 'regular',
  },
];

export const VALUES = [
  {
    title: 'Precision',
    body: 'Every line, fade and finish is measured. We do not guess — we cut with intent.',
  },
  {
    title: 'Consistency',
    body: 'The cut you loved last time is the cut you get this time. Every visit, every barber.',
  },
  {
    title: 'Atmosphere',
    body: 'A calm room, good music and no rush. Your hour in the chair should feel like yours.',
  },
];

export const WHY_NOIR = [
  'Master barbers with 10+ years behind the chair',
  'Sanitised tools and fresh blades for every client',
  'Booking by appointment so you are never waiting',
  'A room designed for focus — no noise, no rush',
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
