import { useCallback, useMemo, useState } from 'react';
import { LEVELS, QualityContext } from './quality';

export default function QualityProvider({ children }) {
  // default level: 'high' or 'med' based on prefers-reduced-motion
  // useState(LEVELS[0]). to default to 'high'
  const [level, setLevel] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'med' : LEVELS[0]
  );

  const cycle = useCallback(() => {
    setLevel((cur) => LEVELS[(LEVELS.indexOf(cur) + 1) % LEVELS.length]);
  }, []);

  const value = useMemo(() => ({ level, cycle }), [level, cycle]);

  return <QualityContext.Provider value={value}>{children}</QualityContext.Provider>;
}