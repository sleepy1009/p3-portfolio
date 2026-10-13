import { useEffect, useRef, useState } from 'react';
import MobileBackground from './MobileBackground';
import MobileBand from './MobileBand';
import MobileBottomPiece from './MobileBottomPiece';
import MobileMenu from './MobileMenu';
import MobileShards from './MobileShards';
import TopShard from './TopShard';

const SWIPE_MIN = 60;      // px vuốt ngang tối thiểu để đổi tab
const SHOW_TOP_AFTER = 160; // px đã cuộn thì mảnh vỡ góc dưới thành nút "Menu"

export default function MobileShell({ items, activeId, onSelect, children }) {
  const scrollRef = useRef(null);
  const touchStart = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // đổi tab -> về đầu trang
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [activeId]);

  const onScroll = (e) => setScrolled(e.currentTarget.scrollTop > SHOW_TOP_AFTER);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  // vuốt trái = tab kế tiếp, vuốt phải = tab trước
  const onTouchEnd = (e) => {
    const s = touchStart.current;
    touchStart.current = null;
    if (!s) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const i = items.findIndex((it) => it.id === activeId);
    const next = items[i + (dx < 0 ? 1 : -1)];
    if (next) onSelect(next.id);
  };

  const backToMenu = () => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="m-root relative h-dvh w-screen overflow-hidden">
      <MobileBackground />
      <MobileShards />
      <MobileBottomPiece />

      <div
        ref={scrollRef}
        onScroll={onScroll}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden overscroll-contain"
      >
        <header className="relative">
          <MobileBand />
          <MobileMenu items={items} activeId={activeId} onSelect={onSelect} />
        </header>

        <main className="intro-content px-3 pt-2 pb-[calc(6rem+env(safe-area-inset-bottom))]">
          {children}
        </main>
      </div>

      <TopShard visible={scrolled} onClick={backToMenu} />
    </div>
  );
}
