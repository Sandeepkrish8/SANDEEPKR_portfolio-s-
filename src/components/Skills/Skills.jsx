import { useEffect, useRef, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiGsap,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/portfolioData';
import { useReveal } from '../../hooks/useGSAP';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  html: <FaHtml5 color="#e34f26" />,
  css: <FaCss3Alt color="#2965f1" />,
  js: <FaJs color="#f7df1e" />,
  react: <FaReact color="#61dafb" />,
  ts: <SiTypescript color="#3178c6" />,
  tailwind: <SiTailwindcss color="#38bdf8" />,
  gsap: <SiGsap color="#88ce02" />,
  git: <FaGitAlt color="#f05032" />,
  node: <FaNodeJs color="#3c873a" />,
  mongo: <SiMongodb color="#47a248" />,
  api: <TbApi color="#6c63ff" />,
  figma: <FaFigma color="#f24e1e" />,
};

const CATEGORIES = ['All', 'Frontend', 'Animation', 'Backend', 'Tools', 'Design'];

export default function Skills() {
  const titleRef = useReveal({ y: 40 });
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  // Animate cards on filter change
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(`.${styles.card}`);
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.85, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
    );
  }, [activeCategory]);

  // ScrollTrigger animation on mount
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(`.${styles.card}`);
    if (!cards) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={`blob ${styles.blob}`} />
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">03. Tech Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools I use daily to build fast, beautiful, and maintainable web applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div ref={containerRef} className={styles.grid}>
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8, scale: 1.04, duration: 0.3, ease: 'power2.out',
    });
  };
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0, scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`card ${styles.card}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.iconWrap}>
        {ICON_MAP[skill.icon] ?? <span style={{ fontSize: '1.6rem' }}>🛠️</span>}
      </div>
      <span className={styles.skillName}>{skill.name}</span>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{ '--skill-level': `${skill.level}%` }}
        />
      </div>
      <span className={styles.level}>{skill.level}%</span>
    </div>
  );
}
