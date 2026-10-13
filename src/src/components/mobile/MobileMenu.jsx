import MobileMenuItem from './MobileMenuItem';

// 5 nút xếp 2 hàng so le (3 + 2), nghiêng như menu bản PC.
// Vị trí nút so với dải kính: chỉnh --m-menu-top trong index.css
// (nhỏ hơn chiều cao dải kính --m-e1 thì nút đè lên viền vỡ, như bản PC).
const ROW_SIZE = 3;
const ROW_INDENT = [16, 44];            // px, lề trái từng hàng
const ROTATIONS = [2, -1, -2, 2, -1];   // độ, mỗi nút xoay nhẹ như PC (PC: 4, -2, -6, 4, -3). Đặt 0 để bỏ xoay

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
