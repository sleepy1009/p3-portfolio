import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from 'react-icons/si';
import { CONTACT, PROFILE } from '../data/portfolio';
import SectionHeader from '../components/ui/SectionHeader';
import SectionCard from '../components/ui/SectionCard';

const LC = { easy: '#00B8A3', medium: '#FFC01E', hard: '#EF4743', brand: '#FFA116' };
const labelClass = 'w-16 shrink-0 font-bold text-accent';

function Stat({ value, label }) {
  return (
    <div className="border-b-1 border-title/30 py-2">
      <p className="text-[30px] leading-none text-title">{value}</p>
      <p className="mt-1 text-[14px] uppercase leading-none tracking-wide text-muted md:text-[16px]">{label}</p>
    </div>
  );
}

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
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className={labelClass}>Email:</span>
      <span className="inline-flex items-center gap-2 text-title/90 text-[length:var(--m-email-fs,24px)]">
        <HiOutlineMail size={22} aria-hidden="true" />
        <span className="break-all">{email}</span>
      </span>
      <button
        type="button"
        onClick={copy}
        className="-skew-x-12 border border-title/80 px-2 py-0.5 text-[14px] font-bold uppercase tracking-widest text-title/90 transition-colors hover:border-accent hover:text-accent"
      >
        <span className="inline-block skew-x-12">{copied ? 'COPIED' : 'COPY'}</span>
      </button>
    </div>
  );
}

export default function Contact({ isFirstLoad }) {
  const [titleStart] = useState(() => (isFirstLoad ? 2000 : 0));
  const seq = { '--pf-t0': `${titleStart}ms`, '--pf-title': '0.1s' };

  const lc = CONTACT.leetcode;
  const parts = [
    ['Easy', lc.easy, LC.easy],
    ['Medium', lc.medium, LC.medium],
    ['Hard', lc.hard, LC.hard],
  ];

  return (
    <div className="text-title" style={seq}>
      <SectionHeader title="Contact" titleStart={titleStart} />

      <SectionCard className="pr-4 font-content">
        <section>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-[28px] leading-none text-title">
              <SiLeetcode size={24} style={{ color: LC.brand }} aria-hidden="true" />
              LeetCode
            </h2>
            <a href={lc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[18px] uppercase leading-none tracking-wide text-title/90 transition-colors hover:text-title">
              View profile <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-1 flex flex-wrap items-end gap-x-8 gap-y-3">
            <p className="leading-none text-title">
              <span className="text-[48px]">{lc.solved}</span>
              <span className="ml-2 text-[22px] text-muted">solved</span>
            </p>
            <div className="min-w-[220px] flex-1">
              <div className="flex h-3 gap-0.5 overflow-hidden" aria-hidden="true">
                {parts.map(([name, n, color]) => (
                  <span key={name} style={{ flexGrow: n, backgroundColor: color }} />
                ))}
              </div>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[20px]">
                {parts.map(([name, n, color]) => (
                  <li key={name} className="flex items-center gap-2">
                    <span className="size-2.5" style={{ backgroundColor: color }} aria-hidden="true" />
                    <span className="text-muted">{name}</span>
                    <span className="text-title">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-1 grid grid-cols-3 gap-3">
            <Stat value={lc.maxStreak} label="Max streak (days)" />
            <Stat value={lc.activeDays} label="Active days" />
            <Stat value={lc.submissionsYear} label="Submissions / year" />
          </div>
          <p className="mt-1 text-[18px] text-muted">
            {lc.badges} badges · as of {lc.asOf}
          </p>
        </section>

        <div className="mt-2 space-y-3 border-t border-title/15 pt-4 text-[22px]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={labelClass}>GitHub:</span>
            <a href={CONTACT.github.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-title transition-colors hover:text-accent">
              <FaGithub size={22} aria-hidden="true" />
              {CONTACT.github.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <EmailRow email={PROFILE.email} />
        </div>
      </SectionCard>
    </div>
  );
}