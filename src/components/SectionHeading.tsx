import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <div className={isCenter ? 'flex flex-col items-center' : ''}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-stone-400">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
