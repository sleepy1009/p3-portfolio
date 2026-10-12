export default function SectionCard({ children, className = "" }) {
  return (
    <div className="relative max-w-none">
      <div className="pf-bar-y absolute left-0 top-0 z-10 h-full w-2 bg-accent"></div>
      <div className="pf-card w-full p3-card border border-card-border bg-card/80 px-2 py-8 pl-10 backdrop-blur-md transition-colors hover:border-accent/50">
        <div className={`pf-content ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}