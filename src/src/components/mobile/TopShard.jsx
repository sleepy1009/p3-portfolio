import { ChevronUp } from 'lucide-react';

// Mảnh vỡ góc dưới trái. Lúc ở đầu trang chỉ là hình trang trí (nhỏ, không bấm được).
// Khi đã cuộn xuống: to ra, hiện mũi tên + chữ Menu, bấm để bay lên đầu trang.
export default function TopShard({ visible, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Back to menu"
      className={`intro-content fixed bottom-0 left-0 block h-[84px] w-[92px] origin-bottom-left transition-transform duration-300 ease-out
        ${visible ? 'pointer-events-auto z-40 scale-100' : 'pointer-events-none z-[9] scale-[0.7]'}`}
    >
      <span aria-hidden="true" className="absolute inset-0 bg-[var(--tone-4)]" style={{ clipPath: 'polygon(0 0, 72% 34%, 100% 100%, 0 100%)' }} />
      <span aria-hidden="true" className="absolute inset-0 bg-[var(--tone-1)]" style={{ clipPath: 'polygon(0 0, 66% 31%, 92% 100%, 0 100%)' }} />

      <span
        className={`absolute bottom-[10px] left-[8px] flex flex-col items-start gap-[2px] text-black transition-opacity duration-200
          ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronUp size={24} strokeWidth={3} aria-hidden="true" />
        <span className="font-menu text-[13px] leading-none">Menu</span>
      </span>
    </button>
  );
}
