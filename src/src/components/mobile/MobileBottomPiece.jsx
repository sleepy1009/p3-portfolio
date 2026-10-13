import { PIECE_CLIP } from './bandShape';

// Mảng kính phía dưới của intro: lúc đầu che nửa dưới màn hình,
// rồi trượt xuống và biến mất (tương tự mảng bên phải ở bản PC).
export default function MobileBottomPiece() {
  return (
    <div
      aria-hidden="true"
      className="m-split-bottom pointer-events-none fixed inset-0 z-[6]"
      style={{ clipPath: PIECE_CLIP, background: 'var(--tone-2)' }}
    />
  );
}
