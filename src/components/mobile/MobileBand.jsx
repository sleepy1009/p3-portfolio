import MobileCracks from './MobileCracks';
import { BAND_CLIP, CRACK_CLIP, OUTER_CLIP } from './bandShape';

// title and effect

const BAND_BG = 'linear-gradient(to bottom, var(--tone-1) calc(100% - var(--u) * 130), var(--tone-2) 100%)';

const TITLE_MASK =
  'repeating-linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,1) 100%)';

export default function MobileBand({ text = 'PORTFOLIO' }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="m-split-top pointer-events-none absolute inset-x-0 z-0"
        style={{ top: '-60dvh', height: 'calc(60dvh + var(--m-e1) + var(--m-out))' }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--tone-4)', clipPath: OUTER_CLIP }} />
        <div className="absolute inset-0" style={{ background: BAND_BG, clipPath: BAND_CLIP }} />
      </div>

      <h1 className="intro-drop pointer-events-none absolute inset-x-0 top-0 z-10 m-0">
        <svg viewBox="0 0 390 96" className="block h-auto w-full" style={{ WebkitMaskImage: TITLE_MASK, maskImage: TITLE_MASK }}>
          <text
            x="14"
            y="64"
            textLength="362"
            lengthAdjust="spacingAndGlyphs"
            fontSize="68"
            fontWeight="700"
            className="font-display uppercase"
            style={{ fill: 'var(--crack)', opacity: 0.9 }}
          >
            {text}
          </text>
        </svg>
      </h1>

      <div
        aria-hidden="true"
        className="m-split-top pointer-events-none absolute inset-x-0 top-0 z-20"
        style={{ height: 'calc(var(--m-e1) + var(--m-out))', clipPath: CRACK_CLIP }}
      >
        <MobileCracks />
      </div>
    </>
  );
}
