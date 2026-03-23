import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/portfolioData';
import { useReveal } from '../../hooks/useGSAP';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

// Gradient palettes for project cards
const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
];

export default function Projects() {
  const titleRef = useReveal({ y: 40 });
  const gridRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: {
            amount: 0.5,
            from: 'start',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    return () => ctx.revert();
  }, [showAll]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={`blob ${styles.blob1}`} />
      <div className={`blob ${styles.blob2}`} />
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">04. Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills in React, UI/UX, and full-stack development.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {projects.length > 4 && (
          <div className={styles.showMore}>
            <button
              className="btn btn-outline"
              onClick={() => setShowAll(v => !v)}
            >
              {showAll ? 'Show Less' : `View All ${projects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const tiltHandler = e => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, {
      rotateY: x / 20,
      rotateX: -y / 20,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  };

  const resetTilt = () => {
    gsap.to(cardRef.current, {
      rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <article
      ref={cardRef}
      className={`card ${styles.card} ${project.featured ? styles.featured : ''}`}
      onMouseMove={tiltHandler}
      onMouseLeave={resetTilt}
      style={{ '--grad': GRADIENTS[index % GRADIENTS.length] }}
    >
      {/* Gradient header bar */}
      <div className={styles.cardHeader}>
        <div className={styles.cardGradient} />
        {project.featured && (
          <span className={styles.featuredBadge}>
            <FiStar /> Featured
          </span>
        )}
        <div className={styles.cardLinks}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
            onClick={e => e.stopPropagation()}
          >
            <FiGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Live Demo"
            onClick={e => e.stopPropagation()}
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
