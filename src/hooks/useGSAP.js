import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

/**
 * Reveals an element when it enters the viewport.
 * Returns a ref to attach to the target element.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobile = isMobile();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: mobile ? 20 : (options.y ?? 30) },
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.4 : (options.duration ?? 0.6),
          ease: options.ease ?? 'power2.out',
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Staggered reveal for a list of children.
 * Returns a ref to attach to the parent container.
 */
export function useStaggerReveal(selector = '.stagger-item', options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobile = isMobile();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(selector),
        { opacity: 0, y: mobile ? 15 : (options.y ?? 25) },
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.4 : (options.duration ?? 0.6),
          ease: options.ease ?? 'power2.out',
          stagger: mobile ? 0.06 : (options.stagger ?? 0.1),
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
