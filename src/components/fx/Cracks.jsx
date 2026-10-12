import { CRACKS, SHOW_CRACK_GRID } from '../../data/cracks';

const toPath = (points) =>
  points.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');

// grid (x/y) to help debug crack positions
function Grid() {
  const xs = [0, 10, 20, 30, 40];
  const ys = [0, 10, 20, 30, 40, 50];
  return (
    <g stroke="rgba(255,0,0,0.45)" strokeWidth="0.05" fontSize="1.6" fill="red">
      {xs.map((x) => <line key={`x${x}`} x1={x} y1="0" x2={x} y2="56.25" />)}
      {ys.map((y) => <line key={`y${y}`} x1="0" y1={y} x2="40" y2={y} />)}
      {xs.flatMap((x) =>
        ys.map((y) => (
          <text key={`t${x}-${y}`} x={x + 0.3} y={y + 1.8} stroke="none">{x},{y}</text>
        ))
      )}
      <line x1="9" y1="0" x2="40" y2="56.25" stroke="blue" strokeWidth="0.1" strokeDasharray="1 0.8" />
    </g>
  );
}

export default function Cracks() {
  return (
    // inside left shape
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-0 h-full"
      style={{ left: '60vw', width: 'var(--band-bottom)' }}
      viewBox="0 0 40 56.25"
      preserveAspectRatio="none"
    >
      {SHOW_CRACK_GRID && <Grid />}

      {CRACKS.map((c, i) => {
        const d = toPath(c.points);
        const width = c.width ?? 0.2;
        return (
          <g
            key={i}
            fill="none"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            style={{
              '--delay': `${c.delay ?? 0}s`,
              '--dur': `${c.dur ?? 8}s`,
              '--laser-len': c.laserLen ?? 14,
            }}
          >
            <path
              d={d}
              pathLength="100"
              className="crack-line"
              strokeWidth={width}
              style={{ stroke: 'var(--crack)' }}
            />
            {c.laser && (
              <path
                d={d}
                pathLength="100"
                className="crack-laser"
                stroke="#ffffff"
                strokeWidth={width * 0.4}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}