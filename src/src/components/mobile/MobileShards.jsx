import { SHARD_SHAPES } from '../../data/shards';
import { MOBILE_SHARDS } from '../../data/mobileShards';

export default function MobileShards() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {MOBILE_SHARDS.map((s, i) => (
        <div
          key={i}
          className="shard absolute"
          style={{
            backgroundColor: `var(--tone-${s.tone ?? 1})`,
            left: `${s.t * 100}%`,
            // nằm trên cạnh chéo của dải kính
            top: `calc(var(--m-e1) - var(--m-slope) * ${s.t})`,
            width: s.size,
            height: s.size * 0.7,
            clipPath: SHARD_SHAPES[s.shape],
            '--dx': `${s.dx}vw`,
            '--dy': `${s.dy}vh`,
            '--rot': `${s.rot}deg`,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
