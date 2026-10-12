export default function CommandHint() {
  return (
    <div className="intro-content pointer-events-none fixed bottom-[1vh] right-[0.5vw] z-50 flex items-center gap-2 text-xs font-mono tracking-widest">
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-1.5">
          <kbd className="flex h-7 w-7 items-center justify-center rounded border border-[#000]/40 bg-[#000]/80 text-[#FBEFEF] shadow-[0_0_8px_rgba(217, 234, 253,0.2)]">↑</kbd>
        </div>
        <div className="flex gap-1.5">
          <kbd className="flex h-7 w-7 items-center justify-center rounded border border-[#000]/40 bg-[#000]/80 text-[#FBEFEF] shadow-[0_0_8px_rgba(217, 234, 253,0.2)]">↓</kbd>
        </div>
      </div>
      <div className="flex flex-col text-white/80 border-l border-white/20 pl-2 py-1">
        <span className="text-[12px]">Up / Down</span>
      </div>
    </div>
  );
}