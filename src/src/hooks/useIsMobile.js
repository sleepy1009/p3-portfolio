import { useEffect, useState } from 'react';

// Dưới 768px (= breakpoint `md` của Tailwind) thì dùng layout mobile
const QUERY = '(max-width: 767.98px)';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
