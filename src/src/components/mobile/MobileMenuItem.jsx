// Cỡ chữ / độ cao nút chỉnh ở khối "BẢNG CHỈNH MOBILE" trong index.css:
//   --m-menu-fs (cỡ chữ), --m-menu-py (độ cao), --m-skew (góc nghiêng)
export default function MobileMenuItem({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className="relative block cursor-pointer whitespace-nowrap bg-menu-bg
        py-[var(--m-menu-py,13px)] pl-[calc(var(--m-menu-fs,14px)*1.6)] pr-[calc(var(--m-menu-fs,14px)*1)]
        shadow-[0_3px_0_rgba(4,13,18,0.45)] transition-[filter] duration-150 active:brightness-90
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-menu-text"
      style={{ transform: 'skewX(var(--m-skew))' }}
    >
      {/* nền khi đang chọn */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 origin-left transition-transform duration-300 ease-out
          ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
        style={{ border: '2px solid var(--color-menu-active-border)', backgroundColor: 'var(--color-menu-active-bg)' }}
      />

      {/* dấu V đỏ/xanh */}
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute top-1/2 z-30"
          style={{
            left: 'calc(var(--m-menu-fs, 14px) * 0.55)',
            width: 'calc(var(--m-menu-fs, 14px) * 0.8)',
            height: 'calc(var(--m-menu-fs, 14px) * 0.65)',
            transform: 'translateY(-50%) skewX(calc(var(--m-skew) * -1))',
          }}
        >
          <span className="glitch-v-red absolute inset-0 border-b-[3px] border-r-[2px]" style={{ borderColor: 'var(--color-check-red)' }} />
          <span className="glitch-v-cyan absolute inset-0 border-b-[3px] border-r-[2px]" style={{ borderColor: 'var(--color-check-cyan)' }} />
        </div>
      )}

      <span
        className="relative z-20 block font-menu text-[length:var(--m-menu-fs,14px)] font-normal leading-none tracking-wide text-menu-text"
        style={{ transform: 'skewX(calc(var(--m-skew) * -1))' }}
      >
        {label}
      </span>
    </button>
  );
}
