import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiCode, FiZap } from 'react-icons/fi';
import { dsa } from '../../data/portfolioData';
import { useReveal, useStaggerReveal } from '../../hooks/useGSAP';
import styles from './DSA.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function DSA() {
  const titleRef = useReveal({ y: 40 });
  const platformsRef = useStaggerReveal('.platform-card', { y: 50, stagger: 0.18 });
  const strengthsRef = useStaggerReveal('.strength-item', { y: 20, stagger: 0.07 });
  const countersRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = countersRef.current?.querySelectorAll('[data-count]');
      if (!counters) return;

      counters.forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const totalSolved = dsa.platforms.reduce((acc, p) => acc + p.solved, 0);

  return (
    <section id="dsa" className={styles.dsa}>
      <div className={`blob ${styles.blob}`} />
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">05. Problem Solving</span>
          <h2 className="section-title">DSA & Coding Practice</h2>
          <p className="section-subtitle">
            Consistent daily practice has sharpened my algorithmic thinking and problem-solving speed.
          </p>
        </div>

        {/* Total counter hero */}
        <div ref={countersRef} className={styles.heroStat}>
          <div className={styles.heroNum}>
            <span data-count={totalSolved}>{totalSolved}</span>+
          </div>
          <p className={styles.heroLabel}>Total Problems Solved Across Platforms</p>
        </div>

        {/* Platform cards */}
        <div ref={platformsRef} className={styles.platforms}>
          {dsa.platforms.map((p, i) => (
            <div key={i} className={`card platform-card ${styles.platformCard}`}>
              <div className={styles.platformTop}>
                <div className={styles.platformName} style={{ color: p.color }}>
                  {p.name}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
                  <FiExternalLink /> Visit
                </a>
              </div>

              <div className={styles.solvedRow}>
                <FiCode />
                <span>
                  <strong data-count={p.solved}>{p.solved}</strong>
                  {' '}/ {p.total} solved
                </span>
              </div>

              {p.rank && (
                <div className={styles.badge}>
                  <FiZap /> {p.rank}
                </div>
              )}
              {p.badge && (
                <div className={styles.badge}>
                  <FiZap /> {p.badge}
                </div>
              )}
              {p.score && (
                <div className={styles.badge}>
                  <FiZap /> {p.score}
                </div>
              )}

              {p.breakdown && (
                <div className={styles.breakdown}>
                  {Object.entries(p.breakdown).map(([key, val]) => (
                    <div key={key} className={`${styles.breakItem} ${styles[key]}`}>
                      <span className={styles.breakLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className={styles.breakNum}>{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className={styles.strengthsSection}>
          <h4 className={styles.strengthTitle}>
            <FiCode /> Core Strengths
          </h4>
          <div ref={strengthsRef} className={styles.strengths}>
            {dsa.strengths.map((s, i) => (
              <span key={i} className={`strength-item ${styles.strengthTag}`}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
