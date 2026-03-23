import { useRef } from 'react';
import { FiCode, FiTarget, FiHeart } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import { useStaggerReveal, useReveal } from '../../hooks/useGSAP';
import styles from './About.module.css';

const highlights = [
  {
    icon: <FiCode />,
    title: 'Frontend Focus',
    desc: 'Obsessed with crafting clean, fast, and accessible UIs using React, CSS, and modern tooling.',
  },
  {
    icon: <FiTarget />,
    title: 'Goal-Oriented',
    desc: 'Driven to join a product team where I can make a real impact and grow into a senior frontend role.',
  },
  {
    icon: <FiHeart />,
    title: 'Passion-First',
    desc: 'I genuinely love building things for the web — from design systems to performant data-heavy apps.',
  },
];

export default function About() {
  const titleRef = useReveal({ y: 40, duration: 0.9 });
  const textRef = useReveal({ y: 30, duration: 0.9, delay: 0.1 });
  const cardsRef = useStaggerReveal('.stagger-item', { y: 40, stagger: 0.15 });

  return (
    <section id="about" className={styles.about}>
      <div className={`blob ${styles.blob}`} />
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">01. About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A curious builder at heart, always learning and always shipping.
          </p>
        </div>

        <div className={styles.inner}>
          {/* Text block */}
          <div ref={textRef} className={styles.text}>
            <p>{personal.about}</p>
            <br />
            <p>{personal.goal}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Coding</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>70+</span>
                <span className={styles.statLabel}>DSA Problems</span>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div ref={cardsRef} className={styles.cards}>
            {highlights.map((h, i) => (
              <div key={i} className={`card stagger-item ${styles.card}`}>
                <div className={styles.cardIcon}>{h.icon}</div>
                <h4 className={styles.cardTitle}>{h.title}</h4>
                <p className={styles.cardDesc}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
