import { useState } from 'react';
import { PROFILE } from '../data/portfolio';
import SectionHeader from '../components/ui/SectionHeader';
import SectionCard from '../components/ui/SectionCard';

const linkMain = `
  inline-block bg-title text-button-text px-3 py-1 font-bold transition-all duration-200
  [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]
  hover:translate-y-[4px]`;

const labelClass = 'font-bold text-accent/90';

function EmailRow({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-content">
      <span className="break-all text-[20px] text-muted/90">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="-skew-x-12 border border-muted/80 px-2 py-0.5 text-[14px] font-bold uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <span className="inline-block skew-x-12">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default function Profile({ isFirstLoad }) {
  const [titleStart] = useState(() => (isFirstLoad ? 2000 : 0));
  const seq = { '--pf-t0': `${titleStart}ms`, '--pf-title': '0.1s' };

  return (
    <div className="text-title" style={seq}>
      <SectionHeader title="About me" titleStart={titleStart} />

      <SectionCard>
        <div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 className="text-[28px] font-content leading-none text-title">{PROFILE.name}</h2>
            <EmailRow email={PROFILE.email} />
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-12">
            <p className="text-[28px] font-content leading-tight tracking-wide text-role">
              {PROFILE.role}
            </p>
            <a href={PROFILE.links.cv} download className={linkMain}>
              <span className="flex items-center gap-2 font-content text-[24px] ml-1">
                Download CV <span className="text-black mt-1">⇩</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-4 mr-4 space-y-4 font-special font-[500] leading-[1.8] tracking-wide text-[16px] text-muted/90">
          <p>{PROFILE.bio1}</p>
          <p>{PROFILE.bio2}</p>
        </div>

        <ul className="mt-5 space-y-1 font-content text-[22px]">
          {PROFILE.points.map((p) => (
            <li key={p.label} className="flex items-start gap-3">
              <span className="mt-[0.6em] size-2 shrink-0 -skew-x-12 bg-accent"></span>
              <span>
                <span className={labelClass}>{p.label}:</span>{' '}
                <span className="text-content font-special text-[14px] font-[500]">{p.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}