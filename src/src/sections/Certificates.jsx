import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolio';
import { GLASS_OUTLINES, GLASS_CRACKS } from '../data/certShapes';
import SectionHeader from '../components/ui/SectionHeader';
import useScrollArrows from '../hooks/useScrollArrows';

const MIN_SLOTS = 6;
const SLOTS = Array.from({ length: Math.max(MIN_SLOTS, CERTIFICATES.length) }, (_, i) => CERTIFICATES[i] ?? null);
const pts = (arr) => arr.map((p) => p.join(',')).join(' ');

function Glass({ index, lit }) {
  const outline = GLASS_OUTLINES[index % GLASS_OUTLINES.length];
  const crack = GLASS_CRACKS[(index + 1) % GLASS_CRACKS.length];
  const clip = `polygon(${outline.join(', ')})`;

  return (
    <div aria-hidden="true" className="absolute inset-0" style={{ clipPath: clip, backgroundColor: lit ? 'var(--ct-lit-border)' : 'var(--ct-dark-border)', opacity: lit ? 'var(--ct-lit-opacity)' : 'var(--ct-dark-opacity)' }}>
      <div className="absolute" style={{ inset: 2, clipPath: clip, backgroundColor: lit ? 'var(--ct-lit-fill)' : 'var(--ct-dark-fill)' }}>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
          {crack.facets.map((f, k) => <polygon key={k} points={pts(f.points)} fill="#fff" fillOpacity={f.o * (lit ? 1 : 0.4)} />)}
          {crack.lines.map((l, k) => <polyline key={k} points={pts(l)} fill="none" stroke="#fff" strokeOpacity={lit ? 0.55 : 0.14} strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
        </svg>
      </div>
    </div>
  );
}

function Verify({ url }) {
  if (url) return <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[length:var(--m-cert-verify-fs,18px)] uppercase leading-none tracking-wide text-accent transition-colors hover:text-title">Verify <ArrowUpRight size={16} /></a>;
  return <span className="text-[length:var(--m-cert-verify-fs,18px)] uppercase leading-none tracking-wide text-muted/70">Verify on request</span>;
}

function CertSlot({ cert, index }) {
  const lit = Boolean(cert);
  return (
    <li className="ct-item snap-start" style={{ height: 'var(--ct-item-h)', marginBottom: 'var(--ct-gap)', '--i': index }}>
      <div className="ct-wipe h-full">
        <div className="relative h-full">
          <div className={`absolute inset-0 ${lit ? 'ct-glow' : ''}`}>
            <Glass index={index} lit={lit} />
          </div>
          {lit ? (
            <div className="ct-text relative z-10 flex h-full items-center gap-3 px-5 py-2 md:gap-4 md:px-6">
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 text-[length:var(--m-cert-name-fs,24px)] leading-[1.05] text-title md:truncate md:leading-none">{cert.name}</h3>
                <p className="mt-1 text-[length:var(--m-cert-meta-fs,18px)] leading-[1.1] text-muted md:truncate md:leading-none">{cert.issuer} · {cert.date}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[length:var(--m-cert-score-fs,24px)] leading-none text-accent">{cert.score} {cert.unit && <span className="text-[26px] text-muted">{cert.unit}</span>}</p>
                <div className="mt-1"><Verify url={cert.verify} /></div>
              </div>
            </div>
          ) : (
            <div aria-hidden="true" className="relative z-10 flex h-full items-center justify-center"><Lock size={24} strokeWidth={1.5} className="text-title/20" /></div>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Certificates({ isFirstLoad }) {
  const [titleStart] = useState(() => (isFirstLoad ? 2500 : 0));
  const { listRef, canDown, canUp, updateArrow, onArrow } = useScrollArrows();
  const seq = { '--pf-t0': `${titleStart}ms`, '--pf-title': '0.1s' };

  return (
    <div className="text-title" style={seq}>
      <SectionHeader title="Certificates" titleStart={titleStart} />

      <div className="relative">
        <ul ref={listRef} onScroll={updateArrow} className="ct-scroll snap-y snap-mandatory overflow-y-auto px-2 pt-1 font-content" style={{ scrollPaddingTop: 4, height: 'var(--ct-list-h)' }}>
          {SLOTS.map((cert, i) => <CertSlot key={cert?.name ?? `empty-${i}`} cert={cert} index={i} />)}
          <li aria-hidden="true" style={{ height: 'var(--ct-peek)' }} />
        </ul>

        <div className="ct-item ct-text pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-center" style={{ height: 'var(--ct-peek)', '--i': SLOTS.length }}>
          {(canDown || canUp) && (
            <button type="button" onClick={onArrow} className="pointer-events-auto text-title transition-colors hover:text-title">
              <span className="pj-bob block" style={{ '--bob': canDown ? '16px' : '-16px' }}>
                {canDown ? <ChevronDown size={48} strokeWidth={2} /> : <ChevronUp size={48} strokeWidth={2} />}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}