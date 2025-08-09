
import { useState, useEffect, RefObject } from 'react';

interface ScrollObserverResult {
  isInView: boolean;
  progress: number;
}

export const useScrollObserver = <T extends HTMLElement,>(
  ref: RefObject<T>
): ScrollObserverResult => {
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(element);

    const handleScroll = () => {
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from when the element bottom enters the viewport
      // to when the element top leaves the viewport.
      const start = top + height;
      const end = top;
      
      const totalScrollableDistance = windowHeight + height;
      
      const currentScroll = windowHeight - top;

      let currentProgress = 0;
      if (totalScrollableDistance > 0) {
          currentProgress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      }
      
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return { isInView, progress };
};
