import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import styles from './NotFound.module.css';

export default function NotFound() {
  const sectionRef = useRef(null);
  const codeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const glitchRef = useRef(null);
  const orbRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Entrance sequence
      tl.fromTo(
        codeRef.current.querySelectorAll('.digit'),
        { opacity: 0, y: 120, rotateX: -90, scale: 0.5 },
        { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1, stagger: 0.15, ease: 'elastic.out(1, 0.6)' }
      )
        .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(btnRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' }, '-=0.3');

      // Floating orb
      gsap.to(orbRef.current, {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Glitch loop on the 404 digits
      const glitchLoop = () => {
        const digits = codeRef.current.querySelectorAll('.digit');
        gsap.to(digits, {
          x: () => gsap.utils.random(-4, 4),
          skewX: () => gsap.utils.random(-3, 3),
          duration: 0.08,
          stagger: 0.02,
          ease: 'none',
          onComplete: () => {
            gsap.to(digits, { x: 0, skewX: 0, duration: 0.1 });
          },
        });
      };

      // Fire glitch every 3 seconds
      const id = setInterval(glitchLoop, 3000);
      return () => clearInterval(id);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.notFound}>
      {/* Background blobs */}
      <div className={`blob ${styles.blob1}`} />
      <div className={`blob ${styles.blob2}`} />
      <div ref={orbRef} className={styles.orb} />

      <div className={styles.inner}>
        {/* Giant 404 */}
        <div ref={codeRef} className={styles.code} aria-label="404">
          <span className={`digit ${styles.digit}`}>4</span>
          <span className={`digit ${styles.digitZero}`}>0</span>
          <span className={`digit ${styles.digit}`}>4</span>
        </div>

        <h1 ref={titleRef} className={styles.title}>
          Page Not Found
        </h1>
        <p ref={descRef} className={styles.desc}>
          Oops! The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </p>

        <div ref={btnRef} className={styles.actions}>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <a href="/#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
