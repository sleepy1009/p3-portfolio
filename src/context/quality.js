import { createContext, useContext } from 'react';

// add low?
export const LEVELS = ['high', 'med'];

export const QualityContext = createContext({ level: 'high', cycle: () => {} });

// call: const { level } = useQuality();
export function useQuality() {
  return useContext(QualityContext);
}