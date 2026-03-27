import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiImage } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/portfolioData';
import { useReveal } from '../../hooks/useGSAP';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

// Auto-screenshot via microlink (free, no API key, reliable CDN)
const thumbUrl = (liveUrl) =>
  `https://api.microlink.io/?url=${encodeURIComponent(liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`;

// Gradient palettes for fallback
const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
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
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  const tiltHandler = e => {
    if (isMobile()) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, {
      rotateY: x / 25,
      rotateX: -y / 25,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 900,
    });
  };

  const resetTilt = () => {
    gsap.to(cardRef.current, {
      rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out',
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
      {/* Screenshot preview header */}
      <div className={styles.cardHeader}>
        <PreviewImage liveUrl={project.live} localPath={project.screenshot} title={project.title} />
        <div className={styles.cardOverlay} />
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

        {project.problem && (
          <p className={styles.problem}>{project.problem}</p>
        )}

        {project.features && (
          <ul className={styles.features}>
            {project.features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.featureDot} />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.tech}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

// Screenshot image with skeleton → local file → microlink fallback → gradient
function PreviewImage({ liveUrl, localPath, title }) {
  // Stage: 'skeleton' → 'local' → 'remote' → 'error'
  const [stage, setStage] = useState('local');
  const [src, setSrc] = useState(localPath || thumbUrl(liveUrl));

  const handleError = () => {
    if (stage === 'local') {
      // local file missing → try microlink auto-screenshot
      setStage('remote');
      setSrc(thumbUrl(liveUrl));
    } else {
      setStage('error');
    }
  };

  return (
    <div className={styles.previewWrap}>
      {/* Gradient always behind as ultimate fallback */}
      <div className={styles.cardGradient} />

      {stage !== 'error' && (
        <>
          {/* Shimmer skeleton shown until image loads */}
          <div className={styles.skeleton} aria-hidden="true" />
          <img
            key={src}
            src={src}
            alt={`${title} preview`}
            className={styles.previewImg}
            loading="lazy"
            onLoad={e => {
              e.currentTarget.classList.add(styles.imgLoaded);
              const skel = e.currentTarget.previousElementSibling;
              if (skel) skel.style.display = 'none';
            }}
            onError={handleError}
          />
        </>
      )}

      {stage === 'error' && (
        <div className={styles.previewPlaceholder}>
          <FiImage />
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}
