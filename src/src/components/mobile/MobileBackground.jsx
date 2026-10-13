// Mobile: ảnh tĩnh nhẹ (~30 KB) thay cho video sky.mp4 (~25 MB)
export default function MobileBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-sky-200">
      <img
        src="/sky-mobile.webp"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0 bg-black/36" />
    </div>
  );
}
