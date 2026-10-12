export default function VerticalTitle({ text = 'PORTFOLIO' }) {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-[1vw] z-20 flex items-center"
      style={{ transform: 'scaleX(var(--title-stretch))', transformOrigin: 'left center' }}
    >
      <h1
        className="intro-drop font-display font-bold uppercase leading-none text-black/84"
        style={{
          writingMode: 'vertical-rl',
          fontSize: 'var(--title-size)',
          letterSpacing: 'var(--title-spacing)',
          color: 'var(--crack)',
          opacity: 0.9,
          mixBlendMode: 'color-burn',

          WebkitMaskImage: 'repeating-linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,1) 100%)',
          maskImage: 'repeating-linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,1) 100%)'
        }}
      >        
          {text}
        
      </h1>
    </div>
  );
}