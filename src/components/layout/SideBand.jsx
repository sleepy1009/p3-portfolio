import { EDGE_POINTS, SHOW_EDGE_POINTS } from '../../data/shards';
import Cracks from '../fx/Cracks';

// x + dx
const edgeX = (t, dx) =>
  `calc(var(--band-top) + (var(--band-bottom) - var(--band-top)) * ${t} + ${dx}vw)`;

// plus shift
const edge = (shift) =>
  EDGE_POINTS.map(([t, dx]) => `calc(${edgeX(t, dx)} + ${shift}) ${+(t * 100).toFixed(2)}%`);

// -60 and -2 to make slightly overlap  without leaving a gap
const leftClip = `polygon(0 0, ${edge('60vw').join(', ')}, 0 100%)`;
const rightClip = `polygon(${edge('var(--split-offset) - 2px').join(', ')}, 100% 100%, 100% 0)`;

export default function SideBand() {
  return (
    <>
      {/* deep outer */}
      <div
        className="intro-split-left pointer-events-none fixed z-10"
        style={{
          left: 'calc(-60vw + 0.6vw)',
          top: '0.5vh',
          bottom: '-0.5vh',
          width: 'calc(62vw + var(--band-bottom))',
          clipPath: leftClip,
          background: 'var(--tone-4)',
        }}
      />

      <div
        className="intro-split-left pointer-events-none fixed inset-y-0 z-10"
        style={{
          left: '-60vw',
          width: 'calc(62vw + var(--band-bottom))',
          clipPath: leftClip,
          background: 'linear-gradient(to bottom, var(--tone-1), var(--tone-2) 55%, var(--tone-3))',
        }}
      />

      <div
        className="intro-split-right pointer-events-none fixed inset-0 z-10"
        style={{
          clipPath: rightClip,
          background: 'linear-gradient(to bottom, var(--tone-1), var(--tone-2) 55%, var(--tone-3))',
        }}
      />

      {/* cracks z-30 > text z-20 */}
      <div
        className="intro-split-left pointer-events-none fixed inset-y-0 z-30"
        style={{
          left: '-60vw',
          width: 'calc(62vw + var(--band-bottom))',
          clipPath: leftClip,
        }}
      >
        <Cracks />
      </div>

      {SHOW_EDGE_POINTS && (
        <div className="pointer-events-none fixed inset-0 z-50">
          {EDGE_POINTS.map(([t, dx], i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: edgeX(t, dx), top: `${t * 100}%` }}
            >
              <span className="block size-2 rounded-full bg-red-500" />
              <span className="absolute left-3 top-0 text-xs font-bold text-red-600">{i}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}