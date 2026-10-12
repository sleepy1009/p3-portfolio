import { useEffect, useRef } from 'react';
import { useQuality } from '../../context/quality';

export default function Background() {
  const videoRef = useRef(null);
  const { level } = useQuality();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (level === 'high') {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [level]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-sky-200">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/sky.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/36" />
    </div>
  );
}