import MenuItem from './MenuItem';

const CENTER = 0.45;
const STEP = 0.13;

// X position (negative = left, positive = right)
const leftOffsets = [100, -60, 80, -120, -120];

// angle rotation for each button, in degrees
// Negative upright
// Positive downright
const rotations = [4, -2, -6, 4, -3];

export default function MenuList({ items, activeId, onSelect }) {
  return (
    <nav
      aria-label="Menu chính"
      className="pointer-events-none fixed inset-0 z-20"
    >
      {items.map((item, index) => {
        const t =
          CENTER + (index - (items.length - 1) / 2) * STEP;

        return (
          <div
            key={item.id}
            className="absolute -translate-y-1/2"
            style={{
              top: `${t * 100}%`,
              left: `calc(
                var(--band-top) +
                (var(--band-bottom) - var(--band-top)) * ${t} +
                var(--menu-gap) +
                ${leftOffsets[index]}px
              )`,
            }}
          >
            {/* outer animation intro-rise  */}
            <div
              className="intro-rise pointer-events-auto"
              style={{ '--i': index }}
            >
              <div
                style={{
                  transform: `rotate(${rotations[index]}deg)`,
                }}
              >
                <MenuItem
                  label={item.label}
                  isActive={activeId === item.id}
                  onClick={() => onSelect(item.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}