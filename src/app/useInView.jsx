import { useState, useEffect } from 'react';

export function useInView(options) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        options
      );
      observer.observe(ref);
      return () => observer.disconnect();
    }
  }, [ref, options]);

  return [setRef, inView];
}
