import { PIECE_CLIP } from './bandShape';

export default function MobileBottomPiece() {
  return (
    <div
      aria-hidden="true"
      className="m-split-bottom pointer-events-none fixed inset-0 z-[6]"
      style={{ clipPath: PIECE_CLIP, background: 'var(--tone-2)' }}
    />
  );
}
