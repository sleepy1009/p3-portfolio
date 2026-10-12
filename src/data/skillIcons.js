import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';
import { Database, Sparkles, CalendarClock, ListFilter, PenLine } from 'lucide-react';

// (icon: '...')
export const SKILL_ICONS = {
  cpp: { Icon: SiCplusplus, color: '#00599C' },
  js: { Icon: SiJavascript, color: '#F7DF1E' },
  python: { Icon: SiPython, color: '#3776AB' },
  sql: { Icon: Database, color: '#5B9BD5' },
  react: { Icon: SiReact, color: '#61DAFB' },
  tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
  django: { Icon: SiDjango, color: '#44B78B' },
  node: { Icon: SiNodedotjs, color: '#5FA04E' },
  flask: { Icon: SiFlask, color: '#E2E8F0' },
  sqlserver: { Icon: Database, color: '#CC2927' },
  postgres: { Icon: SiPostgresql, color: '#4169E1' },
  mongodb: { Icon: SiMongodb, color: '#47A248' },
  // no org icon
  llm: { Icon: Sparkles, color: '#8E75B2' },
  aps: { Icon: CalendarClock, color: '#F59E0B' },
  recommend: { Icon: ListFilter, color: '#34D399' },
  prompt: { Icon: PenLine, color: '#F472B6' },
};