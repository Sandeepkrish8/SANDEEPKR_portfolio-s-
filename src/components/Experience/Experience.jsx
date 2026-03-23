import { FiCalendar, FiMapPin, FiBriefcase, FiBookOpen, FiDownload, FiExternalLink } from 'react-icons/fi';
import { experience, publications } from '../../data/portfolioData';
import { useReveal, useStaggerReveal } from '../../hooks/useGSAP';
import styles from './Experience.module.css';

export default function Experience() {
  const titleRef = useReveal({ y: 40 });
  const cardsRef = useStaggerReveal('.exp-card', { y: 50, stagger: 0.2 });
  const pubRef = useStaggerReveal('.pub-card', { y: 40, stagger: 0.15 });

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">06. Experience</span>
          <h2 className="section-title">Internships & Work</h2>
          <p className="section-subtitle">
            Real-world experience that built my professional skills and work ethic.
          </p>
        </div>

        <div ref={cardsRef} className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={`exp-card ${styles.item}`}>
              {/* Track */}
              <div className={styles.track}>
                <div className={styles.dot} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <div className={styles.typeBadge}>
                      <FiBriefcase /> {exp.type}
                    </div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span><FiCalendar /> {exp.duration}</span>
                    <span><FiMapPin /> {exp.location}</span>
                  </div>
                </div>

                <ul className={styles.contributions}>
                  {exp.contributions.map((c, j) => (
                    <li key={j} className={styles.contribution}>
                      <span className={styles.dot2} />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className={styles.tech}>
                  {exp.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Research Publications ── */}
        <div className={styles.pubSection}>
          <h3 className={styles.pubHeading}>
            <FiBookOpen /> Research Publications
          </h3>
          <div ref={pubRef} className={styles.pubGrid}>
            {publications.map((pub, i) => (
              <div key={i} className={`card pub-card ${styles.pubCard}`}>
                <div className={styles.pubYear}>{pub.year}</div>
                <h4 className={styles.pubTitle}>{pub.title}</h4>
                <p className={styles.pubJournal}>{pub.journal}</p>
                <p className={styles.pubDesc}>{pub.description}</p>
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${styles.pubBtn}`}
                >
                  <FiDownload /> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
