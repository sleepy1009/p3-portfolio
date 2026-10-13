import MobileMenuItem from './MobileMenuItem';

const ROW_SIZE = 3;
const ROW_INDENT = [16, 44];
const ROTATIONS = [-6, 2, 8, -2, 6];

export default function MobileMenu({ items, activeId, onSelect }) {
  const rows = [items.slice(0, ROW_SIZE), items.slice(ROW_SIZE)];

  return (
    <nav
      aria-label="Menu chính"
      className="pointer-events-none relative z-30 flex flex-col pb-4"
      style={{ paddingTop: 'var(--m-menu-top)', gap: 'var(--m-menu-gap)' }}
    >
      {rows.map((row, r) => (
        <div key={r} className="flex" style={{ paddingLeft: ROW_INDENT[r], gap: 'var(--m-menu-gap)' }}>
          {row.map((item, k) => {
            const index = r * ROW_SIZE + k;
            return (
              <div key={item.id} className="intro-rise pointer-events-auto" style={{ '--i': index }}>
                <div style={{ transform: `rotate(${ROTATIONS[index] ?? 0}deg)` }}>
                  <MobileMenuItem label={item.label} isActive={activeId === item.id} onClick={() => onSelect(item.id)} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
