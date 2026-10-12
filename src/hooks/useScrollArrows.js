import { useState, useEffect, useCallback, useRef } from 'react';

export default function useScrollArrows() {
  const listRef = useRef(null);
  const [canDown, setCanDown] = useState(false);
  const [canUp, setCanUp] = useState(false);

  const updateArrow = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanDown(el.scrollTop + el.clientHeight < el.scrollHeight - 2);
    setCanUp(el.scrollTop > 2);
  }, []);

  useEffect(() => {
    updateArrow();
    window.addEventListener('resize', updateArrow);
    return () => window.removeEventListener('resize', updateArrow);
  }, [updateArrow]);

  const onArrow = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    if (canDown) {
      const items = el.children;
      const step = items.length > 1 ? items[1].offsetTop - items[0].offsetTop : el.clientHeight;
      el.scrollBy({ top: step, behavior: 'smooth' });
    } else {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [canDown]);

  return { listRef, canDown, canUp, updateArrow, onArrow };
}