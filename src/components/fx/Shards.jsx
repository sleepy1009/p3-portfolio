import { SHARDS, SHARD_SHAPES } from '../../data/shards';

export default function Shards() {
  return (
    // z-[5]: above only bg, below all other content. (z-10: above all content, below cursor)
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {SHARDS.map((s, i) => (
        <div
          key={i}
          className="shard absolute"
          style={{
            backgroundColor: `var(--tone-${s.tone ?? 1})`,
            top: `${s.t * 100}%`,
            left: `calc(var(--band-top) + (var(--band-bottom) - var(--band-top)) * ${s.t} - ${s.size}vw)`,
            width: `${s.size}vw`,
            height: `${s.size * (s.ratio ?? 0.7)}vw`,
            clipPath: SHARD_SHAPES[s.shape],
            '--dx': `${s.dist}vw`,
            '--dy': `${s.drift}vh`,
            '--rot': `${s.rot}deg`,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}