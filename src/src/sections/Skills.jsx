import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolio';
import { SKILL_ICONS } from '../data/skillIcons';
import { SLOT_SHAPE, SLOT_SHAPES, PLATE_BREAKS, PLATE_BREAK } from '../data/skillShapes';
import SectionHeader from '../components/ui/SectionHeader';
import SectionCard from '../components/ui/SectionCard';

const ICON_FRAME = 44;
const PLATE_H = 34;
const BORDER = 2;
const OVERLAP = 12;
const iconClip = SLOT_SHAPES[SLOT_SHAPE];

const mix = (a, pct, b) => `color-mix(in srgb, var(${a}) ${pct}%, var(${b}))`;
const BORDER_COLOR = { idle: mix('--color-title', 35, '--color-card'), core: 'var(--color-accent)', active: 'var(--color-accent)' };
const FILL_COLOR = { idle: 'var(--color-card)', core: mix('--color-accent', 16, '--color-card'), active: mix('--color-accent', 30, '--color-card') };

function Frame({ clip, state }) {
  return (
    <div className="absolute inset-0 transition-colors duration-150" style={{ clipPath: clip, backgroundColor: BORDER_COLOR[state] }}>
      <div className="absolute transition-colors duration-150" style={{ inset: BORDER, clipPath: clip, backgroundColor: FILL_COLOR[state] }} />
    </div>
  );
}

function SkillLegendButton({ label, variant = 'idle' }) {
  const [active, setActive] = useState(false);
  const state = active ? 'active' : variant;
  const nameTone = active ? 'text-accent' : variant === 'core' ? 'text-title' : 'text-muted';
  const plateClip = PLATE_BREAK === 'varied' ? PLATE_BREAKS[0] : PLATE_BREAKS[PLATE_BREAK];

  return (
    <button className="flex mt-2 items-center">
      <div className="relative z-10 shrink-0" style={{ width: ICON_FRAME, height: ICON_FRAME }}>
        <Frame clip={iconClip} state={state} />
      </div>
      <div className="relative flex items-center" style={{ height: PLATE_H, marginLeft: -OVERLAP }}>
        <Frame clip={plateClip} state={state} />
        <span className={`relative whitespace-nowrap font-content text-[20px] leading-none ${nameTone}`} style={{ paddingLeft: OVERLAP + 8, paddingRight: 24 }}>
          {label}
        </span>
      </div>
    </button>
  );
}

function Slot({ item, variant }) {
  const [active, setActive] = useState(false);
  const { Icon, color } = SKILL_ICONS[item.icon] ?? {};
  const state = active ? 'active' : item.core ? 'core' : 'idle';
  const nameTone = active ? 'text-accent' : item.core ? 'text-title' : 'text-muted';
  const plateClip = PLATE_BREAK === 'varied' ? PLATE_BREAKS[variant % PLATE_BREAKS.length] : PLATE_BREAKS[PLATE_BREAK];

  return (
    <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="flex items-center">
      <div className="relative z-10 shrink-0" style={{ width: ICON_FRAME, height: ICON_FRAME }}>
        <Frame clip={iconClip} state={state} />
        {Icon && (
          <span className="absolute inset-0 flex items-center justify-center" style={{ color }}>
            <Icon size={ICON_FRAME * 0.5} aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="relative flex items-center" style={{ height: PLATE_H, marginLeft: -OVERLAP }}>
        <Frame clip={plateClip} state={state} />
        <span className={`relative whitespace-nowrap font-content text-[20px] leading-none transition-colors duration-150 ${nameTone}`} style={{ paddingLeft: OVERLAP + 10, paddingRight: 24 }}>
          {item.name}
        </span>
      </div>
    </div>
  );
}

export default function Skills({ isFirstLoad }) {
  const [titleStart] = useState(() => (isFirstLoad ? 2000 : 0));
  const seq = { '--pf-t0': `${titleStart}ms`, '--pf-title': '0.1s' };

  const legendNodes = (
    <span className="pf-content flex flex-wrap items-center gap-3">
      <SkillLegendButton label="Comfortable" variant="core" />
      <SkillLegendButton label="Familiar" variant="idle" />
    </span>
  );

  return (
    <div className="text-title" style={seq}>
      <SectionHeader title="Tech Stack" titleStart={titleStart} appendNode={legendNodes} />

      <SectionCard className="pr-4">
        <ul className="space-y-6 font-content md:space-y-8">
          {SKILL_GROUPS.map((group, gi) => (
            <li key={group.label} className="grid grid-cols-1 items-start gap-y-2 md:grid-cols-[9rem_1fr] md:gap-y-0">
              <span className="text-[22px] font-bold leading-none text-role md:leading-[44px]">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {group.items.map((item, ii) => (
                  <Slot key={item.name} item={item} variant={gi + ii} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}