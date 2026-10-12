import { LEVELS, useQuality } from '../../context/quality';
import { SLOT_SHAPES } from '../../data/skillShapes';

const LABEL = { high: 'High', med: 'Med', low: 'Low' };
const BARS = { high: 3, med: 2, low: 1 };

function Bars({ n }) {
  return (
    <span className="flex items-end gap-[3px]" aria-hidden="true">
      {[8, 13, 18].map((h, i) => (
        <span
          key={h}
          className="w-1 bg-current transition-opacity duration-150"
          style={{ height: h, opacity: i < n ? 1 : 0.25 }}
        />
      ))}
    </span>
  );
}

export default function QualityButton() {
  const { level, cycle } = useQuality();
  const next = LEVELS[(LEVELS.indexOf(level) + 1) % LEVELS.length];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Quality effect: ${LABEL[level]}. Press to switch to ${LABEL[next]}`}
      className="fixed right-2 top-2 z-40 flex items-center gap-3 bg-menu-bg px-4 py-1 font-content uppercase leading-none tracking-wide text-menu-text transition-colors hover:bg-menu-hover-bg hover:text-menu-hover-text focus-visible:bg-menu-hover-bg focus-visible:text-menu-hover-text"
      style={{ clipPath: SLOT_SHAPES.chamfer }}
    >
      <span className="text-[16px] opacity-60 mt-1">Quality</span>
      <span className="w-8 text-left text-[20px] mt-1">{LABEL[level]}</span>
      <Bars n={BARS[level]} />
    </button>
  );
}