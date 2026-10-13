// Vết nứt + tia laze trên dải kính mobile.
// viewBox 390 x 157: x kéo giãn theo bề ngang màn hình, y theo --u (xem .m-root trong index.css).
// Cạnh dưới của dải chạy từ (0, 150) lên (390, 104).
const CRACKS = [
  { points: [[236, 0], [222, 30], [250, 60], [231, 92], [246, 130]], width: 1.5, laser: true, laserLen: 16, dur: 8 },
  { points: [[0, 128], [24, 112], [16, 88], [44, 70]], width: 1.5, laser: true, laserLen: 16, dur: 8 },
  { points: [[222, 30], [192, 42], [182, 60]], width: 0.9 },
  { points: [[231, 92], [198, 104], [190, 124]], width: 0.9 },
  { points: [[250, 60], [282, 72], [290, 94]], width: 0.9 },
  { points: [[60, 150], [72, 132]], width: 0.9 },
  { points: [[350, 100], [338, 80]], width: 0.9 },
];

const toPath = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');

export default function MobileCracks() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 390 157"
      preserveAspectRatio="none"
    >
      {CRACKS.map((c, i) => {
        const d = toPath(c.points);
        return (
          <g
            key={i}
            fill="none"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            style={{ '--delay': '0s', '--dur': `${c.dur ?? 8}s`, '--laser-len': c.laserLen ?? 14 }}
          >
            <path d={d} pathLength="100" className="crack-line" strokeWidth={c.width} style={{ stroke: 'var(--crack)' }} />
            {c.laser && (
              <path d={d} pathLength="100" className="crack-laser" stroke="#ffffff" strokeWidth={c.width * 0.4} />
            )}
          </g>
        );
      })}
    </svg>
  );
}
