import MobileCracks from './MobileCracks';
import { BAND_CLIP, CRACK_CLIP, OUTER_CLIP } from './bandShape';

const BAND_BG = 'linear-gradient(to bottom, var(--tone-1) calc(100% - var(--u) * 130), var(--tone-2) 100%)';

// vệt đậm nhạt chạy ngang chữ (giống VerticalTitle bản PC, nhưng xoay sang ngang)
const TITLE_MASK =
  'repeating-linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,1) 100%)';

export default function MobileBand({ text = 'PORTFOLIO' }) {
  return (
    <>
      {/* viền xám + dải trắng. Kéo dài 60dvh lên phía trên để intro bắt đầu từ giữa màn hình */}
      <div
        aria-hidden="true"
        className="m-split-top pointer-events-none absolute inset-x-0 z-0"
        style={{ top: '-60dvh', height: 'calc(60dvh + var(--m-e1) + var(--m-out))' }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--tone-4)', clipPath: OUTER_CLIP }} />
        <div className="absolute inset-0" style={{ background: BAND_BG, clipPath: BAND_CLIP }} />
      </div>

      {/* chữ PORTFOLIO: textLength ép chữ vừa đúng bề ngang màn hình (lề 14/390) */}
      <h1 className="intro-drop pointer-events-none absolute inset-x-0 top-0 z-10 m-0">
        <svg viewBox="0 0 390 96" className="block h-auto w-full" style={{ WebkitMaskImage: TITLE_MASK, maskImage: TITLE_MASK }}>
          <text
            x="14"
            y="82"
            textLength="362"
            lengthAdjust="spacingAndGlyphs"
            fontSize="56"
            fontWeight="700"
            className="font-display uppercase"
            style={{ fill: 'var(--crack)', opacity: 0.9 }}
          >
            {text}
          </text>
        </svg>
      </h1>

      {/* vết nứt nằm trên chữ (giống bản PC) */}
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
