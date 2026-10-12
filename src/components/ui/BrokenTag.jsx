import { PLATE_BREAKS } from '../../data/skillShapes';

// variant: (0-3)
export default function BrokenTag({ children, variant = 0 }) {
  const clip = PLATE_BREAKS[variant % PLATE_BREAKS.length];

  return (
    <span className="relative inline-flex items-center" style={{ height: 26 }}>
      {/* border -> bg -> context*/}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          clipPath: clip,
          backgroundColor: 'color-mix(in srgb, var(--color-title) 35%, var(--color-card))',
        }}
      >
        <span
          className="absolute"
          style={{ inset: 1.5, clipPath: clip, backgroundColor: 'var(--color-card)' }}
        />
      </span>

      <span
        className="relative whitespace-nowrap font-content text-[17px] leading-none text-content"
        style={{ paddingLeft: 8, paddingRight: 20 }}
      >
        {children}
      </span>
    </span>
  );
}