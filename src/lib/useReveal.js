// © 2026 Rudraksh Singh Tomar. All rights reserved.
import { useEffect } from 'react';

// Subtle scroll-reveal: any element with class `reveal` fades + rises into
// place once when it enters the viewport. Honors prefers-reduced-motion by
// revealing everything immediately. No parallax, no continuous animation.
export function useReveal() {
  useEffect(() => {
    const once = Array.from(document.querySelectorAll('.reveal'));
    const repeat = Array.from(document.querySelectorAll('.reveal-repeat'));
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      [...once, ...repeat].forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    once.forEach(el => io.observe(el));

    // `reveal-repeat` re-arms: `.in` is removed once the element is fully out of
    // view, so scrolling back re-runs whatever it drives (the showcase stagger).
    // Deliberate hysteresis — arm at 12% visible but only reset at 0% — so an
    // element parked at the edge of the viewport can't flicker on and off, and
    // never resets while any part of it is still on screen.
    const ioRepeat = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.12) e.target.classList.add('in');
        else if (e.intersectionRatio === 0) e.target.classList.remove('in');
      });
    }, { threshold: [0, 0.12] });
    repeat.forEach(el => ioRepeat.observe(el));

    return () => { io.disconnect(); ioRepeat.disconnect(); };
  }, []);
}
