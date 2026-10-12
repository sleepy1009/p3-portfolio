export default function MenuItem({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className="group relative block cursor-pointer whitespace-nowrap bg-menu-bg pl-[3.5vw] pr-[2.6vw] py-[1.8vh]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-menu-text"
      style={{ transform: 'skewX(var(--band-skew))' }}
    >
      {/* Active background */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 origin-left transition-transform duration-300 ease-out
          ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
        style={{
          border: '0.25vw solid var(--color-menu-active-border)',
          backgroundColor: 'var(--color-menu-active-bg)'
        }}
      />

      {/* Hover background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 origin-left scale-x-0
          transition-transform duration-200 ease-out group-hover:scale-x-100"
        style={{
          backgroundColor: 'var(--color-menu-hover-bg)'
        }}
      />

      {/* V */}
      {isActive && (
        <div
          className="absolute left-[1vw] top-1/2 z-30 w-[1.4vw] h-[1.2vw]"
          style={{
            transform:
              'translateY(-50%) skewX(calc(var(--band-skew) * -1))'
          }}
        >
          <span
            className="absolute inset-0 border-b-[0.4vw] border-r-[0.3vw] glitch-v-red"
            style={{
              borderColor: 'var(--color-check-red)'
            }}
          />

          <span
            className="absolute inset-0 border-b-[0.4vw] border-r-[0.3vw] glitch-v-cyan"
            style={{
              borderColor: 'var(--color-check-cyan)'
            }}
          />
        </div>
      )}

      {/* text */}
      <span
        className="relative z-20 block font-menu font-normal text-[2.2vw] leading-none tracking-wide text-menu-text
          transition-colors duration-200 group-hover:text-menu-hover-text"
        style={{
          transform: 'skewX(calc(var(--band-skew) * -1))'
        }}
      >
        {label}
      </span>
    </button>
  );
}