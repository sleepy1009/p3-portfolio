import { useEffect } from 'react';

export default function useMenuNavigation(items, activeId, onChange) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

      e.preventDefault();
      const current = items.findIndex((item) => item.id === activeId);
      const step = e.key === 'ArrowDown' ? 1 : -1;
      const next = (current + step + items.length) % items.length;
      onChange(items[next].id);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, activeId, onChange]);
}