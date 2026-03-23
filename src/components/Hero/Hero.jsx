import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiEye } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const avatarRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
      .fromTo(nameRef.current.querySelectorAll('.char'),
        { opacity: 0, y: 80, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.04 },
        '-=0.3'
      )
      .fromTo(titleRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
        '-=0.3'
      )
      .fromTo(socialRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08 },
        '-=0.2'
      )
      .fromTo(avatarRef.current,
        { opacity: 0, scale: 0.7, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.6)' },
        '<-0.5'
      )
      .fromTo(scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      // Floating animation on avatar
      gsap.to(avatarRef.current, {
        y: -14,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Animated blobs
      gsap.to('.hero-blob-1', {
        x: 30, y: 20, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });
      gsap.to('.hero-blob-2', {
        x: -20, y: 30, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split name into individual characters for per-letter animation
  const nameParts = personal.name.split('');

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      {/* Background blobs */}
      <div className={`blob hero-blob-1 ${styles.blob1}`} />
      <div className={`blob hero-blob-2 ${styles.blob2}`} />

      {/* Animated grid background */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* ── Left: Text content ── */}
        <div className={styles.content}>
          <div ref={tagRef} className={styles.tag}>
            <span className={styles.tagDot} />
            👋 Hello, I'm
          </div>

          <h1 ref={nameRef} className={styles.name} aria-label={personal.name}>
            {nameParts.map((char, i) => (
              <span key={i} className={`char ${char === ' ' ? styles.space : ''}`}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <div ref={titleRef} className={styles.title}>
            <span className={styles.titlePrefix}>I'm a </span>
            <span className={`${styles.titleRole} text-gradient`}>{personal.title}</span>
          </div>

          <p ref={descRef} className={styles.desc}>
            {personal.heroTagline}
            {' '}MCA Graduate passionate about building pixel-perfect,
            blazing-fast web apps with modern technologies.
          </p>

          <div ref={ctaRef} className={styles.cta}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <FiEye /> View Projects
            </a>
            <a href={personal.resume} download className="btn btn-outline">
              <FiDownload /> Download CV
            </a>
          </div>

          <div ref={socialRef} className={styles.social}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <div className={styles.socialDivider} />
            <span className={styles.socialText}>Follow along</span>
          </div>
        </div>

        {/* ── Right: Avatar / Graphic ── */}
        <div ref={avatarRef} className={styles.avatar}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              <div className={styles.avatarEmoji}>👨‍💻</div>
            </div>
          </div>
          {/* Orbit badges */}
          <div className={`${styles.badge} ${styles.badge1}`}>⚛️ React</div>
          <div className={`${styles.badge} ${styles.badge2}`}>🎨 UI/UX</div>
          <div className={`${styles.badge} ${styles.badge3}`}>✨ GSAP</div>
          <div className={`${styles.badge} ${styles.badge4}`}>📱 Responsive</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className={styles.scrollHint}>
        <FiArrowDown className={styles.scrollIcon} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
