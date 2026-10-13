import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolio';
import { SLOT_SHAPES } from '../data/skillShapes';
import BrokenTag from '../components/ui/BrokenTag';
import SectionHeader from '../components/ui/SectionHeader';
import useScrollArrows from '../hooks/useScrollArrows';

const BORDER = 2;
const LIVE_ORBIT = true;
const ORBIT_ARM = 16;
const ORBIT_SPEED = 220;
const ORBIT_CLOCKWISE = true;
const clip = SLOT_SHAPES.chamfer;

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);
  const hasLive = Boolean(project.live);
  const Wrapper = hasLive ? 'a' : 'div';
  const linkProps = hasLive ? { href: project.live, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Go live: ${project.title}` } : {};

  return (
    <Wrapper {...linkProps} className="group relative block aspect-[180/112] w-full max-w-[320px] md:w-[180px]">
      <div className="absolute inset-0 bg-accent/60 transition-colors duration-150 group-hover:bg-accent" style={{ clipPath: clip }}>
        <div className="absolute overflow-hidden bg-card" style={{ inset: BORDER, clipPath: clip }}>
          {failed ? (
            <div className="flex h-full w-full items-center justify-center font-content text-[18px] text-muted">Screenshot</div>
          ) : (
            <img src={project.image} alt="screenshot" decoding="async" onError={() => setFailed(true)} className={`h-full w-full object-cover transition-transform duration-300 ${hasLive ? 'group-hover:scale-105' : 'opacity-80'}`} />
          )}
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/65 px-3 py-1 font-content text-[20px] uppercase leading-none tracking-wide text-role">
            {hasLive ? 'Go live' : (project.liveLabel ?? 'Coming soon')}
            {hasLive && <ArrowUpRight size={18} aria-hidden="true" />}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

function Orbit({ w, h }) {
  const t = 2;
  const half = w - t + h - t;
  const len = ORBIT_ARM * 2;
  const dir = ORBIT_CLOCKWISE ? -1 : 1;

  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-0" width={w} height={h}>
      <rect x={t / 2} y={t / 2} width={w - t} height={h - t} fill="none" stroke="var(--color-accent)" strokeWidth={t} strokeDasharray={`${len} ${half - len}`} className="pj-orbit" style={{ '--from': len / 2, '--to': len / 2 + dir * half, '--dur': `${half / ORBIT_SPEED}s` }} />
    </svg>
  );
}

function ProjectItem({ project, index }) {
  const live = LIVE_ORBIT && Boolean(project.live);
  const itemRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [orbit, setOrbit] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el || !live) return;
    const ro = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [live]);

  return (
    <li ref={itemRef} className="pj-item relative isolate snap-start" style={{ height: 'var(--pj-item-h)', marginBottom: 'var(--pj-gap)', '--i': index }}>
      <div aria-hidden="true" onAnimationEnd={(e) => { if (live && e.target === e.currentTarget) setOrbit(true); }} className="pj-frame pointer-events-none absolute left-0 top-0 z-0 bg-card/80">
        {live && <span className="absolute inset-0 border-2 border-accent/30" />}
        {!(live && orbit) && (
          <>
            <span className="absolute left-0 top-0 block size-4 border-l-2 border-t-2 border-accent" />
            <span className="absolute bottom-0 right-0 block size-4 border-b-2 border-r-2 border-accent" />
          </>
        )}
      </div>

      {live && orbit && size.w > 0 && <Orbit w={size.w} h={size.h} />}

      <div className="pj-in relative z-10 flex h-full flex-col gap-3 px-4 py-3 md:flex-row md:gap-6 md:px-5">
        <div className="mt-2 w-full shrink-0 md:w-[180px]">
          <ProjectImage project={project} />
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-[20px] uppercase leading-none tracking-wide text-muted transition-colors hover:text-accent">
            <FaGithub size={20} aria-hidden="true" /> Go repository
          </a>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mt-1 text-[26px] leading-none text-title">{project.title}</h3>
          <p className="mt-1 font-special md:line-clamp-5 text-[14px] tracking-wide leading-[1.6] text-muted">{project.desc}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2 pb-4">
            {project.tech.map((t, k) => <BrokenTag key={t} variant={index + k}>{t}</BrokenTag>)}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects({ isFirstLoad }) {
  const [titleStart] = useState(() => (isFirstLoad ? 2000 : 0));
  const { listRef, canDown, canUp, updateArrow, onArrow } = useScrollArrows();
  const seq = { '--pf-t0': `${titleStart}ms`, '--pf-title': '0.1s' };

  return (
    <div className="text-title" style={seq}>
      <SectionHeader title="Projects" titleStart={titleStart} />

      <div className="relative">
        <ul ref={listRef} onScroll={updateArrow} className="pj-scroll snap-y snap-mandatory overflow-y-auto font-content" style={{ height: 'var(--pj-list-h)' }}>
          {PROJECTS.map((p, i) => <ProjectItem key={p.title} project={p} index={i} />)}
          <li aria-hidden="true" style={{ height: 'var(--pj-peek)' }} />
        </ul>

        <div className="pj-item pj-in pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-center" style={{ height: 'var(--pj-peek)', '--i': PROJECTS.length }}>
          {(canDown || canUp) && (
            <button type="button" onClick={onArrow} aria-label={canDown ? 'next' : 'prev'} className="pointer-events-auto text-title transition-colors hover:text-title">
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